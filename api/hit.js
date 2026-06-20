// Lightweight, credential-free pageview counter.
// Backed by Abacus (https://abacus.jasoncameron.dev) — a free, no-auth REST counter.
// Frontend fires navigator.sendBeacon('/api/hit', {path}) once per session (analytics.js).
// We track per-route counts + a global total so I can read traffic myself
// (GA4 is human-gated to export). Best-effort: never blocks or throws.
const ABACUS = 'https://abacus.jasoncameron.dev';
const NS = 'foundermath';

// Top 10 highest-value blog posts (S30: individual tracking now that SEO is working)
// Keys must match keyFor() output and stats.js BLOG_POSTS.
const BLOG_POSTS = [
  '/blog/equity-dilution-guide.html',
  '/blog/compare-equity-offers.html',
  '/blog/employee-equity-grants-guide.html',
  '/blog/analyze-startup-offer-letter.html',
  '/blog/409a-valuation-guide.html',
  '/blog/anti-dilution-guide.html',
  '/blog/evaluate-equity-offer.html',
  '/blog/how-to-negotiate-startup-job-offer.html',
  '/blog/how-to-exercise-stock-options-without-cash.html',
  '/blog/negotiate-equity-offer.html',
];

function keyFor(path) {
  let p = String(path || '/').split('?')[0].replace(/\.html$/i, '').replace(/^\/+|\/+$/g, '');
  if (!p) p = 'home';
  p = p.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48);
  return 'p-' + p;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://founder-math.com');
  res.setHeader('Cache-Control', 'no-store');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  let path = '/';
  try {
    const body = req.body || {};
    if (typeof body === 'string') {
      try { path = JSON.parse(body).path || '/'; } catch (e) { path = '/'; }
    } else {
      path = body.path || '/';
    }
  } catch (e) { path = '/'; }

  try {
    const k = keyFor(path);
    const hits = [
      fetch(`${ABACUS}/hit/${NS}/${k}`, { method: 'GET' }),
      fetch(`${ABACUS}/hit/${NS}/total`, { method: 'GET' }),
    ];
    // Section attribution: blog (SEO long-tail) vs commercial vs other.
    // S30: Track top blog posts individually, remaining posts go to s-blog aggregate.
    const normalizedPath = String(path || '').toLowerCase().split('?')[0];
    if (normalizedPath.startsWith('/blog')) {
      const isTracked = BLOG_POSTS.some(bp => normalizedPath === bp.toLowerCase());
      if (!isTracked) {
        // Not tracked individually — goes to s-blog aggregate
        hits.push(fetch(`${ABACUS}/hit/${NS}/s-blog`, { method: 'GET' }));
      }
      // Tracked posts are already counted via keyFor(path) above — no double-hit
    }
    await Promise.allSettled(hits);
  } catch (e) {
    // swallow — analytics must never break a pageview
  }
  return res.status(204).end();
}
