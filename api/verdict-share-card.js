// S169 — Share Card OG Image for Verdict
// Generates an HTML card with Open Graph meta tags for social sharing
// When a verdict is shared on X/LinkedIn, this provides a rich preview with the actual verdict

export default async function handler(req, res) {
    // Vercel provides query parameters in req.query
    const q = req.query || {};

    // Extract verdict parameters
    const salary = parseFloat(q.salary || '0');
    const shares = parseFloat(q.shares || '0');
    const strike = parseFloat(q.strike || '0');
    const fmv = parseFloat(q.fmv || '0');
    const stage = q.stage || '';
    const role = q.role || '';

    // Calculate verdict (same logic as offer-verdict.html)
    const growth = 25, yearsExit = 5;
    const underwater = fmv <= strike;
    const futurePrice = fmv * Math.pow(1 + growth/100, yearsExit) * 0.75;
    const exitValue = Math.max(0, futurePrice - strike) * shares;
    const ratio = salary > 0 ? exitValue / salary : 0;

    let marketLabel, marketColor;
    if (underwater) {
        marketLabel = 'Needs scrutiny';
        marketColor = '#ff6b6b';
    } else if (ratio >= 2) {
        marketLabel = 'Above market';
        marketColor = '#00b894';
    } else if (ratio >= 0.5) {
        marketLabel = 'Fair / on-market';
        marketColor = '#6c5ce7';
    } else {
        marketLabel = 'Below market';
        marketColor = '#ffa502';
    }

    const ratioTxt = (Math.round(ratio * 10) / 10) + '×';
    const money = (n) => {
        n = Math.max(0, Math.round(n || 0));
        if (n >= 1e9) return '$' + (n / 1e9).toFixed(1) + 'B';
        if (n >= 1e6) return '$' + (n / 1e6).toFixed(2) + 'M';
        return '$' + n.toLocaleString();
    };

    const takeText = underwater
        ? `Your strike ($${strike.toFixed(2)}) is at/above today's value ($${fmv.toFixed(2)})`
        : `At a reasonable exit, worth about ${ratioTxt} your annual salary (${money(exitValue)})`;

    // Build query string for links
    const paramsStr = Object.entries({ salary, shares, strike, fmv, stage, role, source: 'share' })
        .filter(([k, v]) => v !== '' && v !== 0 && v != null)
        .map(([k, v]) => `${k}=${encodeURIComponent(v)}`)
        .join('&');

    // Generate HTML with OG meta tags
    // S169: Using a static OG image for now - SVG data URIs can be too large for some crawlers
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI Offer Verdict: ${marketLabel} — ${ratioTxt} Salary | FounderMath</title>
    <meta name="description" content="${takeText}. Get your free AI startup offer verdict and negotiation script.">
    <link rel="canonical" href="https://founder-math.com/offer-verdict.html">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://founder-math.com/offer-verdict.html">
    <meta property="og:title" content="AI Offer Verdict: ${marketLabel} — ${ratioTxt} Salary">
    <meta property="og:description" content="${takeText}. Get your free AI startup offer verdict and negotiation script.">
    <meta property="og:image" content="https://founder-math.com/og-home.svg">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://founder-math.com/offer-verdict.html">
    <meta name="twitter:title" content="AI Offer Verdict: ${marketLabel} — ${ratioTxt} Salary">
    <meta name="twitter:description" content="${takeText}. Get your free AI startup offer verdict and negotiation script.">
    <meta name="twitter:image" content="https://founder-math.com/og-home.svg">

    <!-- Auto-redirect to main verdict page after 3 seconds -->
    <meta http-equiv="refresh" content="3;url=https://founder-math.com/offer-verdict.html?${paramsStr}">

    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
            background: #0a0a0f;
            color: #f0f0f5;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 20px;
        }
        .card {
            background: linear-gradient(135deg, #12121a, #1a1a2e);
            border: 1px solid #2a2a40;
            border-radius: 24px;
            padding: 40px;
            max-width: 600px;
            text-align: center;
            box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        .badge {
            background: rgba(108,92,231,0.15);
            border: 1px solid #6c5ce7;
            color: #a29bfe;
            padding: 8px 20px;
            border-radius: 999px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 20px;
            display: inline-block;
        }
        h1 { font-size: 1.4rem; margin-bottom: 24px; color: #a0a0b5; }
        .chip {
            display: inline-block;
            padding: 10px 28px;
            border-radius: 999px;
            font-size: 1.1rem;
            font-weight: 700;
            margin-bottom: 20px;
        }
        .chip.above { background: rgba(0,184,148,0.18); color: #00b894; border: 1px solid #00b894; }
        .chip.fair { background: rgba(108,92,231,0.18); color: #a29bfe; border: 1px solid #6c5ce7; }
        .chip.below { background: rgba(255,165,2,0.16); color: #ffa502; border: 1px solid #ffa502; }
        .chip.scrutiny { background: rgba(255,107,107,0.16); color: #ff6b6b; border: 1px solid #ff6b6b; }
        .ratio {
            font-size: clamp(2rem, 8vw, 3rem);
            font-weight: 800;
            font-family: 'SF Mono', 'Fira Code', monospace;
            margin: 20px 0;
            background: linear-gradient(135deg, #a29bfe, #00b894);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        .take {
            color: #a0a0b5;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 32px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
        }
        .cta {
            display: inline-block;
            background: linear-gradient(135deg, #6c5ce7, #a29bfe);
            color: white;
            padding: 14px 32px;
            border-radius: 10px;
            font-weight: 700;
            text-decoration: none;
            transition: transform 0.15s;
        }
        .cta:hover { transform: translateY(-2px); }
        .meta {
            margin-top: 24px;
            font-size: 0.85rem;
            color: #666680;
        }
        .redirect-notice {
            margin-top: 16px;
            font-size: 0.8rem;
            color: #666680;
            animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }
    </style>
</head>
<body>
    <div class="card">
        <div class="badge">AI Startup Offer Verdict</div>
        <h1>Your offer verdict</h1>
        <div class="chip ${underwater ? 'scrutiny' : (ratio >= 2 ? 'above' : (ratio >= 0.5 ? 'fair' : 'below'))}">${marketLabel}</div>
        <div class="ratio">${ratioTxt} salary</div>
        <p class="take">${takeText}. Get the full AI read and your negotiation script.</p>
        <a href="https://founder-math.com/offer-verdict.html?${paramsStr}" class="cta">Get Your Free Verdict →</a>
        <div class="redirect-notice">Redirecting to full verdict in 3 seconds...</div>
        <div class="meta">FounderMath — Free startup offer analysis</div>
    </div>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.status(200).send(html);
}
