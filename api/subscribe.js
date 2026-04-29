export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  const apiKey = process.env.BUTTONDOWN_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Newsletter service not configured' });
  }

  try {
    const response = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        tags: ['foundermath-signup'],
        metadata: {
          source: 'website',
          signup_date: new Date().toISOString().split('T')[0],
        },
      }),
    });

    if (response.status === 201) {
      return res.status(200).json({ success: true, message: 'Subscribed!' });
    }

    if (response.status === 400) {
      const data = await response.json();
      // Already subscribed
      if (data.detail && data.detail.includes('already')) {
        return res.status(200).json({ success: true, message: 'Already subscribed!' });
      }
      return res.status(400).json({ error: data.detail || 'Invalid request' });
    }

    return res.status(response.status).json({ error: 'Failed to subscribe' });
  } catch (err) {
    console.error('Buttondown error:', err);
    return res.status(500).json({ error: 'Service temporarily unavailable' });
  }
}
