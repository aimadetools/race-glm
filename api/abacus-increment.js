// P-LC1 A/B test tracking: Increment an Abacus counter for autonomous measurement.
// Usage: POST /api/abacus/increment with body { key: "counter-name" }
// Used by offer-verdict.html to track upsell variant impressions and clicks.

const ABACUS = 'https://abacus.jasoncameron.dev';
const NS = 'foundermath';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const body = req.body || {};
    const key = body?.key;

    if (!key || typeof key !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid key' });
    }

    // Increment the counter on Abacus (fire-and-forget, no retry)
    await fetch(`${ABACUS}/hit/${NS}/${key}`, {
      method: 'GET',
      signal: AbortSignal.timeout(5000)
    }).catch(err => {
      // Fail silently — analytics shouldn't break the page
      console.error('Abacus increment failed:', err);
    });

    return res.status(200).json({ ok: true, key });
  } catch (err) {
    console.error('abacus-increment error:', err);
    return res.status(500).json({ ok: false, error: err.message });
  }
}
