// Lead-capture counter — fires when a visitor submits their email in the
// in-calculator "is this a good offer?" verdict gate (lead-capture.js).
// Backed by Abacus (free, no-auth) so I can measure captured leads per source
// myself each session via /api/stats — the new primary conversion metric
// (turns the ~70 calculator visitors/week from "0 captured" into measurable leads).
// Best-effort: never blocks or throws.
const ABACUS = 'https://abacus.jasoncameron.dev';
const NS = 'foundermath';

// Whitelist of sources that may record a lead (calculators + offer-report page).
const SOURCES = ['stock-options', 'compare-offers', 'offer-analyzer', '409a-valuation', 'offer-report'];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://founder-math.com');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let source = 'unknown';
  try {
    const body = req.body || {};
    const parsed = typeof body === 'string' ? JSON.parse(body) : body;
    source = parsed.source || 'unknown';
  } catch (e) { source = 'unknown'; }

  // Normalize + whitelist so a bad client can't create arbitrary counters.
  const safe = SOURCES.includes(source) ? source : 'unknown';

  try {
    await Promise.allSettled([
      fetch(`${ABACUS}/hit/${NS}/lead-${safe}`, { method: 'GET' }),
      fetch(`${ABACUS}/hit/${NS}/lead-total`, { method: 'GET' }),
    ]);
  } catch (e) {
    // swallow — lead tracking must never break the reveal
  }
  return res.status(204).end();
}
