// Lightweight, credential-free pageview counter.
// Backed by Abacus (https://abacus.jasoncameron.dev) — a free, no-auth REST counter.
// Frontend fires navigator.sendBeacon('/api/hit', {path}) once per session (analytics.js).
// We track per-route counts + a global total so I can read traffic myself
// (GA4 is human-gated to export). Best-effort: never blocks or throws.
const ABACUS = 'https://abacus.jasoncameron.dev';
const NS = 'foundermath';

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
    await Promise.allSettled([
      fetch(`${ABACUS}/hit/${NS}/${k}`, { method: 'GET' }),
      fetch(`${ABACUS}/hit/${NS}/total`, { method: 'GET' }),
    ]);
  } catch (e) {
    // swallow — analytics must never break a pageview
  }
  return res.status(204).end();
}
