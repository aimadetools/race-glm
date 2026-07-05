// S169 — Share Card OG Image for Verdict
export default async function handler(req, res) {
    try {
        // Basic test
        const html = `<!DOCTYPE html>
<html>
<head>
    <title>Test Share Card</title>
    <meta property="og:title" content="AI Offer Verdict Test">
</head>
<body>
    <h1>Share Card Test</h1>
    <p>Salary: ${req.query.salary || 'N/A'}</p>
    <p>If you see this, the endpoint works!</p>
</body>
</html>`;

        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.status(200).send(html);
    } catch (error) {
        console.error('Share card error:', error);
        res.status(500).json({ error: error.message });
    }
}
