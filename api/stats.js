// Reads the per-route + total pageview counters (Abacus-backed) so I can
// check traffic myself each session: curl https://founder-math.com/api/stats
// Session 54: Analytics staleness fix (all zeros) - trigger redeploy
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
  // S40: conversion/sale detectors — these pages are noindex + unlinked, so a hit
  // is a strong post-purchase signal (Stripe redirects buyers here). Lets me
  // autonomously detect first revenue without GA4 (human-gated to export).
  '/equity-report-success.html': 'p-equity-report-success',
  '/pro-success.html': 'p-pro-success',
  // S55: Employee-facing funnel (offer-report + premium)
  '/offer-report.html': 'p-offer-report',
  '/offer-report-premium.html': 'p-offer-report-premium',
  // S123: AI Offer Verdict (S122) — primary email-capture lever. Must be here
  // or its pageviews never surface in /api/stats (the page is wired but was
  // invisible to the reader until this entry + the LEAD_SOURCES entry below).
  '/offer-verdict.html': 'p-offer-verdict',
  // S164: S163's top-of-funnel magnet was wired but invisible here (same S123
  // bug as offer-verdict). analytics.js already increments p-startup-offer-examples;
  // surfacing the key lets me read whether the new content asset draws any pv.
  '/startup-offer-examples.html': 'p-startup-offer-examples',
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
    // S82: captured leads (new primary conversion metric). Counts emails
    // submitted in the in-calculator "is this a good offer?" verdict gate.
    const LEAD_SOURCES = ['stock-options', 'compare-offers', 'offer-analyzer', '409a-valuation', 'offer-report', 'offer-verdict'];
    const leadEntries = await Promise.all(LEAD_SOURCES.map(async (src) => {
      try {
        const r = await fetch(`${ABACUS}/get/${NS}/lead-${src}`);
        return [src, (await r.json()).value || 0];
      } catch (e) { return [src, 0]; }
    }));
    let leadTotal = 0;
    try {
      const r = await fetch(`${ABACUS}/get/${NS}/lead-total`);
      leadTotal = (await r.json()).value || 0;
    } catch (e) {}
    // S135: per-source attribution for ALL subscribe surfaces (fired by
    // /api/subscribe). Unlike bySource (6 calculator gates only), this catches
    // blog/footer/homepage/calculator subs too — so a rising buttondown_total
    // can finally be traced to the page that drove it.
    const SUB_SOURCES = ['blog', 'calculator', 'offer-verdict', 'offer-report', 'stock-options', 'compare-offers', 'offer-analyzer', '409a-valuation', 'homepage', 'valuation', 'cap-table', 'equity-report', 'equity-split', 'about', 'website'];
    const subEntries = await Promise.all(SUB_SOURCES.map(async (src) => {
      try {
        const r = await fetch(`${ABACUS}/get/${NS}/sub-${src}`);
        return [src, (await r.json()).value || 0];
      } catch (e) { return [src, 0]; }
    }));
    let subTotal = 0;
    try {
      const r = await fetch(`${ABACUS}/get/${NS}/sub-total`);
      subTotal = (await r.json()).value || 0;
    } catch (e) {}
    // S82: authoritative lead metric = actual Buttondown subscriber count
    // (the Abacus counter is a secondary convenience gauge). The newsletter
    // key lives in the function env; read total subscribers directly.
    let buttondownTotal = null;
    try {
      const bdr = await fetch('https://api.buttondown.email/v1/subscribers', {
        headers: { 'Authorization': `Token ${process.env.BUTTONDOWN_API_KEY}` }
      });
      const bdj = await bdr.json();
      buttondownTotal = (typeof bdj.count === 'number') ? bdj.count
        : Array.isArray(bdj) ? bdj.length
        : (bdj && Array.isArray(bdj.results)) ? bdj.results.length : null;
    } catch (e) {}
    const leads = { total: leadTotal, buttondown_total: buttondownTotal, bySource: Object.fromEntries(leadEntries), sub_total: subTotal, bySubSource: Object.fromEntries(subEntries) };
    // Section attribution: blog (SEO long-tail) vs commercial vs other.
    // blog = sum of BLOG_POSTS + s-blog (aggregate for remaining blog posts);
    // commercial = sum of PAGES; other = residual.
    let blogAggregate = 0;
    try {
      const r = await fetch(`${ABACUS}/get/${NS}/s-blog`);
      blogAggregate = (await r.json()).value || 0;
    } catch (e) {}
    // S164 — free-verdict telemetry (incremented server-side in api/ai-verdict.js,
    // since ai_playbook_generated is a GA4 event I can't read without human GA4).
    // Answers the freemium loop's existence question: are free verdicts firing?
    let aiVerdictGenerated = 0, aiVerdictAi = 0, aiVerdictHeuristic = 0;
    try {
      const [g, a, h] = await Promise.all([
        fetch(`${ABACUS}/get/${NS}/ai-verdict-generated`).then(r => r.json()),
        fetch(`${ABACUS}/get/${NS}/ai-verdict-ai`).then(r => r.json()),
        fetch(`${ABACUS}/get/${NS}/ai-verdict-heuristic`).then(r => r.json()),
      ]);
      aiVerdictGenerated = g.value || 0; aiVerdictAi = a.value || 0; aiVerdictHeuristic = h.value || 0;
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
    return res.status(200).json({
      total, pages, sections, leads,
      aiVerdict: { generated: aiVerdictGenerated, bySource: { ai: aiVerdictAi, heuristic: aiVerdictHeuristic } },
    });
  } catch (e) {
    return res.status(500).json({ error: 'stats unavailable' });
  }
}
