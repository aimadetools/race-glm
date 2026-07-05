// S169 — Share Card OG Image for Verdict
// Generates an HTML card with Open Graph meta tags for social sharing
// When a verdict is shared on X/LinkedIn, this provides a rich preview with the actual verdict

export default async function handler(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const params = url.searchParams;

    // Extract verdict parameters
    const salary = parseFloat(params.get('salary') || '0');
    const shares = parseFloat(params.get('shares') || '0');
    const strike = parseFloat(params.get('strike') || '0');
    const fmv = parseFloat(params.get('fmv') || '0');
    const stage = params.get('stage') || '';
    const role = params.get('role') || '';

    // Calculate verdict (same logic as offer-verdict.html)
    const growth = 25, yearsExit = 5;
    const spread = Math.max(0, fmv - strike);
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
    } else if (ratio >= 0.1) {
        marketLabel = 'Below market';
        marketColor = '#ffa502';
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

    const exitValueText = underwater ? 'Underwater' : money(exitValue);
    const takeText = underwater
        ? `Your strike ($${strike.toFixed(2)}) is at/above today's value ($${fmv.toFixed(2)})`
        : `At a reasonable exit, worth about ${ratioTxt} your annual salary (${money(exitValue)})`;

    // Build OG card image URL (using a simple SVG data URI approach)
    const svgCard = `
        <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#0a0a0f"/>
                    <stop offset="100%" style="stop-color:#1a1a2e"/>
                </linearGradient>
                <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#6c5ce7"/>
                    <stop offset="100%" style="stop-color:#00b894"/>
                </linearGradient>
            </defs>
            <rect width="1200" height="630" fill="url(#bg)"/>
            <rect x="60" y="60" width="1080" height="510" rx="24" fill="#12121a" stroke="#2a2a40" stroke-width="2"/>
            <text x="100" y="140" font-family="system-ui, sans-serif" font-size="36" fill="#a0a0b5">AI Startup Offer Verdict</text>
            <rect x="100" y="180" width="280" height="70" rx="35" fill="${marketColor}20" stroke="${marketColor}" stroke-width="2"/>
            <text x="240" y="225" font-family="system-ui, sans-serif" font-size="28" font-weight="700" fill="${marketColor}" text-anchor="middle">${marketLabel}</text>
            <text x="100" y="310" font-family="SF Mono, Fira Code, monospace" font-size="72" font-weight="800" fill="url(#accent)">${ratioTxt} salary</text>
            <text x="100" y="380" font-family="system-ui, sans-serif" font-size="24" fill="#a0a0b5">${takeText}</text>
            <text x="100" y="480" font-family="system-ui, sans-serif" font-size="20" fill="#666680">Get your free AI verdict + negotiation script →</text>
            <text x="1140" y="560" font-family="system-ui, sans-serif" font-size="18" fill="#6c5ce7" text-anchor="end">founder-math.com</text>
        </svg>
    `.replace(/\n/g, '').replace(/\s+/g, ' ');

    const ogImageUrl = `data:image/svg+xml;base64,${btoa(svgCard)}`;
    const paramsStr = params.toString();

    // Generate HTML with OG meta tags
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
    <meta property="og:image" content="${ogImageUrl}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:type" content="image/svg+xml">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:url" content="https://founder-math.com/offer-verdict.html">
    <meta name="twitter:title" content="AI Offer Verdict: ${marketLabel} — ${ratioTxt} Salary">
    <meta name="twitter:description" content="${takeText}. Get your free AI startup offer verdict and negotiation script.">
    <meta name="twitter:image" content="${ogImageUrl}">

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
