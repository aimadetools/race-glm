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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'no-store');
  try {
    const entries = await Promise.all(Object.entries(PAGES).map(async ([path, key]) => {
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
    return res.status(200).json({ total, pages: Object.fromEntries(entries) });
  } catch (e) {
    return res.status(500).json({ error: 'stats unavailable' });
  }
}
