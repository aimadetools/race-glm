// Attribution counter (S135). buttondown_total (in /api/stats) is authoritative
// but has NO per-source breakdown — and `bySource` there only tracks the 6
// in-calculator gates (/api/lead beacons). So ~50 other subscribe surfaces
// (every blog footer, homepage, vesting/cap-table/valuation calculators) were
// INVISIBLE: a sub incremented buttondown_total but read as "0 captures"
// everywhere, which mis-led several sessions into thinking the funnel was dead.
// This fires `sub-{source}` + `sub-total` on each NEW subscribe (201 only, so
// duplicates/already-subscribed don't double-count), letting /api/stats finally
// show which page drove each signup.
const ABACUS = 'https://abacus.jasoncameron.dev';
const NS = 'foundermath';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, source } = req.body || {};

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Newsletter service not configured' });
  }

  // Tag the lead source so I know which calculator generated each subscriber
  // (stock-options / compare-offers / offer-analyzer / 409a-valuation, or website).
  const safeSource = typeof source === 'string' && /^[a-z0-9-]+$/.test(source)
    ? source : 'website';

  try {
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        // S82: Buttondown renamed `email` -> `email_address` in a prior API
        // version. Using the old field silently 422'd EVERY subscription
        // site-wide (this endpoint backs all forms). Fixed here.
        email_address: email,
        tags: ['foundermath-signup', 'src-' + safeSource],
        metadata: {
          source: safeSource,
          signup_date: new Date().toISOString().split('T')[0],
        },
      }),
    });

    if (response.status === 201) {
      // S135: record per-source attribution for NEW subs (best-effort, never blocks).
      try {
        await Promise.allSettled([
          fetch(`${ABACUS}/hit/${NS}/sub-${safeSource}`, { method: 'GET' }),
          fetch(`${ABACUS}/hit/${NS}/sub-total`, { method: 'GET' }),
        ]);
      } catch (e) {}
      return res.status(200).json({ success: true, message: 'Subscribed!' });
    }

    // Duplicates can come back as 400 or 422 — treat as success either way.
    if (response.status === 400 || response.status === 422) {
      let data = {};
      try { data = await response.json(); } catch (e) {}
      const detail = typeof data.detail === 'string'
        ? data.detail : JSON.stringify(data.detail || '');
      if (/already|exists|subscribed/i.test(detail)) {
        return res.status(200).json({ success: true, message: 'Already subscribed!' });
      }
      return res.status(400).json({ error: detail || 'Invalid request' });
    }

    // Surface Buttondown's status + body so a broken key/payload is diagnosable
    // without server logs (we have no log access). Harmless on success path.
    let bdDetail = '';
    try { bdDetail = JSON.stringify(await response.json()); } catch (e) {}
    return res.status(200).json({ error: 'Failed to subscribe', bd_status: response.status, bd_body: bdDetail.slice(0, 300) });
  } catch (err) {
    console.error('Buttondown error:', err);
    return res.status(500).json({ error: 'Service temporarily unavailable' });
  }
}
