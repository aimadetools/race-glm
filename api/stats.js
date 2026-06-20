// Reads the per-route + total pageview counters (Abacus-backed) so I can
// check traffic myself each session: curl https://founder-math.com/api/stats
const ABACUS = 'https://abacus.jasoncameron.dev';
const NS = 'foundermath';

// The commercial/funnel pages I instrument. Keys must match analytics keyFor() output.
const PAGES = {
  '/': 'p-home',
  '/dilution.html': 'p-dilution',
  '/equity-score.html': 'p-equity-score',
  '/stock-options.html': 'p-stock-options',
  '/pricing.html': 'p-pricing',
  '/equity-report.html': 'p-equity-report',
  '/equity-report-premium.html': 'p-equity-report-premium',
  '/runway.html': 'p-runway',
  '/safe.html': 'p-safe',
  '/valuation.html': 'p-valuation',
  '/compare-offers.html': 'p-compare-offers',
  '/409a-valuation.html': 'p-409a-valuation',
  '/startup-exit-calculator.html': 'p-startup-exit-calculator',
  '/offer-analyzer.html': 'p-offer-analyzer',
  '/free-startup-tools.html': 'p-free-startup-tools',
};

// Top 10 highest-value blog posts (S30: now that SEO is working, track which posts drive traffic)
const BLOG_POSTS = {
  '/blog/equity-dilution-guide.html': 'p-blog-equity-dilution-guide',
  '/blog/compare-equity-offers.html': 'p-blog-compare-equity-offers',
  '/blog/employee-equity-grants-guide.html': 'p-blog-employee-equity-grants-guide',
  '/blog/analyze-startup-offer-letter.html': 'p-blog-analyze-startup-offer-letter',
  '/blog/409a-valuation-guide.html': 'p-blog-409a-valuation-guide',
  '/blog/anti-dilution-guide.html': 'p-blog-anti-dilution-guide',
  '/blog/evaluate-equity-offer.html': 'p-blog-evaluate-equity-offer',
  '/blog/how-to-negotiate-startup-job-offer.html': 'p-blog-how-to-negotiate-startup-job-offer',
  '/blog/how-to-exercise-stock-options-without-cash.html': 'p-blog-how-to-exercise-stock-options-without-cash',
  '/blog/negotiate-equity-offer.html': 'p-blog-negotiate-equity-offer',
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');
  try {
    // Fetch commercial pages
    const commercialEntries = await Promise.all(Object.entries(PAGES).map(async ([path, key]) => {
      try {
        const r = await fetch(`${ABACUS}/get/${NS}/${key}`);
        const j = await r.json();
        return [path, j.value || 0];
      } catch (e) {
        return [path, null];
      }
    }));
    // Fetch top blog posts (S30: individual tracking now that SEO is working)
    const blogEntries = await Promise.all(Object.entries(BLOG_POSTS).map(async ([path, key]) => {
      try {
        const r = await fetch(`${ABACUS}/get/${NS}/${key}`);
        const j = await r.json();
        return [path, j.value || 0];
      } catch (e) {
        return [path, null];
      }
    }));
    let total = 0;
    try {
      const r = await fetch(`${ABACUS}/get/${NS}/total`);
      total = (await r.json()).value || 0;
    } catch (e) {}
    // Section attribution: blog (SEO long-tail) vs commercial vs other.
    // blog = sum of BLOG_POSTS + s-blog (aggregate for remaining blog posts);
    // commercial = sum of PAGES; other = residual.
    let blogAggregate = 0;
    try {
      const r = await fetch(`${ABACUS}/get/${NS}/s-blog`);
      blogAggregate = (await r.json()).value || 0;
    } catch (e) {}
    const commercialPages = Object.fromEntries(commercialEntries);
    const blogPages = Object.fromEntries(blogEntries);
    const commercial = Object.values(commercialPages).reduce((a, b) => a + (b || 0), 0);
    const trackedBlog = Object.values(blogPages).reduce((a, b) => a + (b || 0), 0);
    const sections = {
      blog: trackedBlog + blogAggregate,
      commercial,
      other: Math.max(0, total - commercial - trackedBlog - blogAggregate),
    };
    // Combine all pages for output
    const pages = { ...commercialPages, ...blogPages };
    return res.status(200).json({ total, pages, sections });
  } catch (e) {
    return res.status(500).json({ error: 'stats unavailable' });
  }
}
