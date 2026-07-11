#!/usr/bin/env node

/**
 * Generate offer example HTML pages from data file.
 *
 * Usage: node scripts/generate-offer-examples.js
 *
 * Reads offer-examples-data.json and generates static HTML files
 * for each role×stage combination. Each page targets long-tail SEO
 * queries like "Senior Engineer Series A offer example".
 */

const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, 'offer-examples-data.json');
const OUTPUT_DIR = path.join(__dirname, '..');

// Read the data file
let data;
try {
  data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
} catch (e) {
  console.error(`Failed to read ${DATA_PATH}:`, e.message);
  process.exit(1);
}

/**
 * Format number with K suffix
 */
function formatK(num) {
  if (num >= 1000) {
    return '$' + (num / 1000).toFixed(0) + 'K';
  }
  return '$' + num;
}

/**
 * Format number with commas
 */
function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Format decimal as percentage
 */
function formatPercent(decimal) {
  return (decimal * 100).toFixed(2) + '%';
}

/**
 * Get verdict chip class
 */
function getVerdictClass(verdict) {
  switch (verdict) {
    case 'above': return 'above';
    case 'below': return 'below';
    default: return 'fair';
  }
}

/**
 * Generate the HTML for a single offer example
 */
function generateOfferHTML(example) {
  const {
    id,
    filename,
    role,
    roleDisplay,
    stage,
    salary,
    shares,
    strike,
    fmv,
    ownership,
    location,
    verdict,
    verdictDisplay,
    equityRatio,
    exitPrice,
    exitValue,
    salaryRange,
    equityRange,
    analysis,
    negotiationTips,
    faq
  } = example;

  // Calculate current spread value
  const currentSpread = shares * (fmv - strike);

  // Calculate 5-year total compensation
  const fiveYearSalary = salary * 5;
  const fiveYearTotal = fiveYearSalary + exitValue;

  // Generate FAQ JSON-LD
  const faqJsonLd = faq.map(item => {
    return JSON.stringify({
      '@type': 'Question',
      'name': item.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': item.answer
      }
    });
  }).join(',\n                ');

  // Generate scenario table rows
  const modestPrice = (exitPrice * 0.5).toFixed(2);
  const modestValue = formatNumber(Math.round(shares * (modestPrice - strike)));
  const strongPrice = (exitPrice * 1.8).toFixed(2);
  const strongValue = formatNumber(Math.round(shares * (strongPrice - strike)));
  const reasonableValue = formatNumber(exitValue);
  const modestTotal = formatNumber(fiveYearSalary + Math.round(shares * (modestPrice - strike)));
  const reasonableTotal = formatNumber(fiveYearTotal);
  const strongTotal = formatNumber(fiveYearSalary + Math.round(shares * (strongPrice - strike)));

  // Generate negotiation tips HTML
  const tipsHtml = negotiationTips.map(tip =>
    `  <li>${tip.replace(/"/g, '&quot;')}</li>`
  ).join('\n                    ');

  // Generate analysis points
  const analysisPoints = Object.entries(analysis).map(([key, value]) => {
    const labels = {
      salary: 'Salary',
      equity: 'Equity',
      overall: 'Overall'
    };
    return `  <li><strong>${labels[key]}:</strong> ${value}</li>`;
  }).join('\n                    ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="canonical" href="https://founder-math.com/${filename}">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>${role} ${stage} Startup Offer Example — ${formatK(salary)} Salary, ${ownership} Equity | FounderMath</title>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-1RD0WTQV4X"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-1RD0WTQV4X');</script>
    <meta name="description" content="Real startup offer example: ${roleDisplay} at ${stage} startup getting ${formatK(salary)} base salary plus ${ownership} equity (${formatNumber(shares)} shares at $${strike.toFixed(2)} strike). See total compensation, equity value analysis, and market comparison.">
    <meta name="keywords" content="${role.toLowerCase()} ${stage.toLowerCase()} offer, startup ${role.toLowerCase()} salary, ${stage.toLowerCase()} equity grant, ${role.toLowerCase()} equity percentage, ${role.toLowerCase()} startup offer, ${stage.toLowerCase()} startup compensation">
    <meta property="og:title" content="${role} ${stage} Offer Example — ${formatK(salary)} + ${ownership} Equity">
    <meta property="og:description" content="Breakdown of a real ${stage} ${role} offer: ${formatK(salary)} salary, ${formatNumber(shares)} options at $${strike.toFixed(2)} strike. See potential equity value at exit and market comparison.">
    <meta property="og:type" content="article">
    <meta property="og:image" content="https://founder-math.com/og-home.svg">
    <meta property="og:url" content="https://founder-math.com/${filename}">
    <meta name="twitter:card" content="summary_large_image">
    <link rel="icon" href="favicon.svg" type="image/svg+xml">
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "${role} ${stage} Startup Offer Example",
        "description": "Real startup offer breakdown: ${formatK(salary)} salary, ${ownership} equity (${formatNumber(shares)} shares at $${strike.toFixed(2)} strike). Total compensation analysis and exit value projection.",
        "author": { "@type": "Organization", "name": "FounderMath" },
        "publisher": { "@type": "Organization", "name": "FounderMath", "logo": { "@type": "ImageObject", "url": "https://founder-math.com/og-home.svg" }}
    }
    </script>
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
                ${faqJsonLd}
        ]
    }
    </script>
    <link rel="stylesheet" href="print.css" media="print">
    <style>
        :root {
            --bg-primary: #0a0a0f; --bg-secondary: #12121a; --bg-card: #1a1a2e; --bg-input: #15151f;
            --accent: #6c5ce7; --accent-light: #a29bfe; --accent-glow: rgba(108,92,231,0.3);
            --green: #00b894; --green-glow: rgba(0,184,148,0.3);
            --red: #ff6b6b; --orange: #ffa502; --gold: #feca57;
            --text-primary: #f0f0f5; --text-secondary: #a0a0b5; --text-muted: #666680;
            --border: #2a2a40;
            --font-sans: -apple-system,BlinkMacSystemFont,'Segoe UI',system-ui,sans-serif;
            --font-mono: 'SF Mono','Fira Code',monospace;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { font-family: var(--font-sans); background: var(--bg-primary); color: var(--text-primary); line-height: 1.6; }
        nav { position: fixed; top: 0; width: 100%; z-index: 100; backdrop-filter: blur(20px); background: rgba(10,10,15,0.85); border-bottom: 1px solid var(--border); }
        .nav-inner { max-width: 1100px; margin: 0 auto; padding: 0 24px; height: 64px; display: flex; align-items: center; justify-content: space-between; }
        .logo { font-size: 1.3rem; font-weight: 700; color: var(--text-primary); text-decoration: none; display: flex; align-items: center; gap: 8px; }
        .logo-icon { width: 32px; height: 32px; background: linear-gradient(135deg,var(--accent),var(--accent-light)); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 1.1rem; color: white; }
        .nav-links { display: flex; align-items: center; gap: 22px; list-style: none; }
        .nav-links a { color: var(--text-secondary); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
        .nav-links a:hover { color: var(--text-primary); }
        .nav-cta { background: var(--accent) !important; color: white !important; padding: 8px 18px; border-radius: 8px; font-weight: 600; }
        .mobile-toggle { display: none; background: none; border: none; color: var(--text-primary); font-size: 1.5rem; cursor: pointer; }
        .wrap { max-width: 820px; margin: 0 auto; padding: 100px 24px 60px; }
        .hero { text-align: center; margin-bottom: 40px; }
        .hero .badge { display: inline-block; background: rgba(108,92,231,0.15); border: 1px solid var(--accent); color: var(--accent-light); padding: 6px 14px; border-radius: 999px; font-size: 0.78rem; font-weight: 600; margin-bottom: 16px; }
        .hero h1 { font-size: clamp(1.8rem,4vw,2.6rem); font-weight: 800; margin-bottom: 16px; line-height: 1.15; }
        .hero h1 .gradient { background: linear-gradient(135deg,var(--accent-light),var(--green)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hero p { color: var(--text-secondary); font-size: 1.05rem; max-width: 640px; margin: 0 auto; }
        .card { background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 16px; padding: 28px; margin-bottom: 24px; }
        .card h2 { font-size: 1.2rem; font-weight: 700; margin-bottom: 16px; }
        .offer-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px; }
        .offer-item { display: flex; justify-content: space-between; padding: 12px 16px; background: var(--bg-card); border-radius: 10px; }
        .offer-item .label { color: var(--text-secondary); font-size: 0.85rem; }
        .offer-item .value { color: var(--text-primary); font-weight: 600; font-family: var(--font-mono); }
        .highlight-box { background: linear-gradient(135deg,rgba(108,92,231,0.12),rgba(0,184,148,0.08)); border: 1px solid var(--accent); border-radius: 12px; padding: 20px; margin-bottom: 20px; }
        .highlight-box .metric { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 4px; }
        .highlight-box .big { font-size: 2rem; font-weight: 800; font-family: var(--font-mono); background: linear-gradient(135deg,var(--accent-light),var(--green)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .chip { display: inline-block; padding: 6px 14px; border-radius: 999px; font-size: 0.8rem; font-weight: 700; margin-right: 8px; }
        .chip.fair { background: rgba(108,92,231,0.18); color: var(--accent-light); border: 1px solid var(--accent); }
        .chip.above { background: rgba(0,184,148,0.18); color: var(--green); border: 1px solid var(--green); }
        .chip.below { background: rgba(255,165,2,0.16); color: var(--orange); border: 1px solid var(--orange); }
        .analysis { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7; }
        .analysis ul { list-style: none; padding: 0; }
        .analysis li { padding-left: 20px; position: relative; margin-bottom: 10px; }
        .analysis li::before { content: '→'; position: absolute; left: 0; color: var(--accent-light); }
        .cta-banner { background: linear-gradient(135deg,rgba(108,92,231,0.15),rgba(0,184,148,0.1)); border: 1px solid var(--accent); border-radius: 16px; padding: 32px; text-align: center; margin: 40px 0; }
        .cta-banner h3 { font-size: 1.3rem; margin-bottom: 8px; }
        .cta-banner p { color: var(--text-secondary); margin-bottom: 20px; }
        .cta-banner a { display: inline-block; padding: 14px 32px; background: var(--accent); color: white; text-decoration: none; border-radius: 10px; font-weight: 700; transition: transform 0.2s; }
        .cta-banner a:hover { transform: translateY(-2px); box-shadow: 0 4px 20px var(--accent-glow); }
        .scenario-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .scenario-table th { text-align: left; padding: 12px; font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; border-bottom: 1px solid var(--border); }
        .scenario-table td { padding: 12px; border-bottom: 1px solid var(--border); }
        .scenario-table .num { font-family: var(--font-mono); font-weight: 600; color: var(--accent-light); }
        .scenario-table tr:last-child td { border-bottom: none; }
        .footer-cta { text-align: center; padding: 40px 20px; border-top: 1px solid var(--border); margin-top: 60px; }
        .footer-cta p { color: var(--text-muted); font-size: 0.85rem; margin-bottom: 16px; }
        .footer-cta a { color: var(--accent-light); text-decoration: none; font-weight: 600; }
        @media (max-width: 600px) {
            .offer-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <nav>
        <div class="nav-inner">
            <a href="index.html" class="logo">
                <div class="logo-icon">F</div>
                FounderMath
            </a>
            <ul class="nav-links">
                <li><a href="free-startup-tools.html">Tools</a></li>
                <li><a href="pricing.html">Pricing</a></li>
                <li><a href="offer-verdict.html" class="nav-cta">AI Verdict</a></li>
            </ul>
        </div>
    </nav>

    <div class="wrap">
        <div class="hero">
            <span class="badge">Real Offer Example</span>
            <h1>${roleDisplay} at <span class="gradient">${stage} Startup</span></h1>
            <p>Actual offer breakdown: ${formatNumber(salary)} base salary plus ${formatNumber(shares)} stock options (${ownership} ownership). See total compensation and potential equity value.</p>
        </div>

        <div class="card">
            <h2>📋 Offer Details</h2>
            <div class="offer-grid">
                <div class="offer-item">
                    <span class="label">Role</span>
                    <span class="value">${roleDisplay}</span>
                </div>
                <div class="offer-item">
                    <span class="label">Company Stage</span>
                    <span class="value">${stage}</span>
                </div>
                <div class="offer-item">
                    <span class="label">Base Salary</span>
                    <span class="value">${formatNumber(salary)}/year</span>
                </div>
                <div class="offer-item">
                    <span class="label">Equity Grant</span>
                    <span class="value">${formatNumber(shares)} options</span>
                </div>
                <div class="offer-item">
                    <span class="label">Strike Price</span>
                    <span class="value">$${strike.toFixed(2)}/share</span>
                </div>
                <div class="offer-item">
                    <span class="label">Current 409A</span>
                    <span class="value">$${fmv.toFixed(2)}/share</span>
                </div>
                <div class="offer-item">
                    <span class="label">Ownership %</span>
                    <span class="value">~${ownership}</span>
                </div>
                <div class="offer-item">
                    <span class="label">Location</span>
                    <span class="value">${location}</span>
                </div>
            </div>
        </div>

        <div class="card">
            <h2>📊 Total Compensation Analysis</h2>
            <div class="highlight-box">
                <div class="metric">Equity-to-Salary Ratio at Reasonable Exit</div>
                <div class="big">${equityRatio.toFixed(1)}×</div>
                <div style="margin-top: 12px; color: var(--text-secondary); font-size: 0.9rem;">
                    At a $${exitPrice.toFixed(2)}/share exit in 5 years, your equity is worth <strong>$${formatNumber(exitValue)}</strong> before taxes.
                </div>
            </div>
            <div style="display: flex; gap: 8px; margin-bottom: 20px;">
                <span class="chip ${getVerdictClass(verdict)}">${verdictDisplay}</span>
                <span style="color: var(--text-secondary); font-size: 0.9rem;">Typical for ${stage} ${role}</span>
            </div>
            <div class="analysis">
                <p><strong>Breakdown:</strong></p>
                <ul>
                    <li>Annual base salary: ${formatNumber(salary)} (guaranteed cash)</li>
                    <li>Current option spread: ${formatNumber(Math.round(currentSpread))} (${formatNumber(shares)} × ($${fmv.toFixed(2)} - $${strike.toFixed(2)})) — paper value today</li>
                    <li>5-year exit value (25% growth/year, 25% dilution): ~$${formatNumber(exitValue)} before taxes</li>
                    <li>Total 5-year compensation: ${formatNumber(fiveYearTotal)} ($${formatNumber(fiveYearSalary)} salary + $${formatNumber(exitValue)} equity)</li>
                </ul>
            </div>
        </div>

        <div class="card">
            <h2>🎯 Exit Scenario Projections</h2>
            <table class="scenario-table">
                <thead>
                    <tr>
                        <th>Exit Outcome</th>
                        <th>Share Price</th>
                        <th>Equity Value</th>
                        <th>Total 5-Year Comp</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Modest exit</td>
                        <td class="num">$${modestPrice}/share</td>
                        <td class="num">$${modestValue}</td>
                        <td class="num">$${modestTotal}</td>
                    </tr>
                    <tr>
                        <td style="color: var(--green); font-weight: 600;">Reasonable exit</td>
                        <td class="num">$${exitPrice.toFixed(2)}/share</td>
                        <td class="num">$${reasonableValue}</td>
                        <td class="num">$${reasonableTotal}</td>
                    </tr>
                    <tr>
                        <td>Strong exit</td>
                        <td class="num">$${strongPrice}/share</td>
                        <td class="num">$${strongValue}</td>
                        <td class="num">$${strongTotal}</td>
                    </tr>
                </tbody>
            </table>
            <p style="color: var(--text-muted); font-size: 0.8rem; margin-top: 12px;">
                *Assumes 25% annual growth in 409A, 25% dilution from future rounds, 5-year horizon.
            </p>
        </div>

        <div class="card">
            <h2>🔍 Market Context & Negotiation Tips</h2>
            <div class="analysis">
                <p><strong>How this compares:</strong></p>
                <ul>
${analysisPoints}
                </ul>
                <p style="margin-top: 16px;"><strong>If you get this offer, consider negotiating:</strong></p>
                <ul>
${tipsHtml}
                </ul>
            </div>
        </div>

        <div class="cta-banner">
            <h3>Analyze Your Own Offer</h3>
            <p>Enter your salary and equity numbers — get an instant market read plus a personalized AI negotiation playbook.</p>
            <a href="offer-verdict.html">Get Your Free AI Verdict →</a>
        </div>

        <div class="footer-cta">
            <p>View more offer examples by role and stage:</p>
            <a href="startup-offer-examples.html">Browse All Offer Examples →</a>
        </div>
    </div>

    <script>
        // Pre-fill offer-verdict if user clicks through
        document.querySelector('.cta-banner a').addEventListener('click', function(e) {
            try {
                const offerData = {
                    salary: ${salary},
                    shares: ${shares},
                    strike: ${strike},
                    fmv: ${fmv},
                    stage: '${stage}',
                    role: '${role.split(' ')[0]}'
                };
                sessionStorage.setItem('foundermath_offer_prefill', JSON.stringify(offerData));
            } catch(e) {}
        });
    </script>
</body>
</html>`;
}

/**
 * Main: generate all offer example HTML files
 */
function main() {
  console.log(`Generating ${data.examples.length} offer example pages...`);

  let generated = 0;
  let skipped = 0;

  for (const example of data.examples) {
    const { role, stage, filename, id } = example;
    const outputPath = path.join(OUTPUT_DIR, filename);

    // Skip if file already exists (unless --force flag)
    if (fs.existsSync(outputPath) && !process.argv.includes('--force')) {
      console.log(`  ✓ ${filename} (already exists, skip with --force to regenerate)`);
      skipped++;
      continue;
    }

    try {
      const html = generateOfferHTML(example);
      fs.writeFileSync(outputPath, html, 'utf8');
      console.log(`  ✓ ${filename} (${role} @ ${stage})`);
      generated++;
    } catch (e) {
      console.error(`  ✗ Failed to generate ${filename}:`, e.message);
    }
  }

  console.log(`\nDone! Generated ${generated} new files, ${skipped} skipped.`);

  // Validate generated files with node --check
  console.log('\nRunning inline JS validation...');
  let validated = 0;
  let failed = 0;

  for (const example of data.examples) {
    const { id, filename } = example;
    const outputPath = path.join(OUTPUT_DIR, filename);
    if (!fs.existsSync(outputPath)) continue;

    // Extract inline script and validate
    const content = fs.readFileSync(outputPath, 'utf8');
    const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/);

    if (scriptMatch) {
      const script = scriptMatch[1];
      const tempFile = path.join(__dirname, `.${id}-temp-check.js`);

      try {
        fs.writeFileSync(tempFile, script, 'utf8');
        const { execSync } = require('child_process');
        execSync(`node --check "${tempFile}"`, { stdio: 'ignore' });
        validated++;
      } catch (e) {
        console.error(`  ✗ ${filename} inline JS validation failed`);
        failed++;
      } finally {
        if (fs.existsSync(tempFile)) {
          fs.unlinkSync(tempFile);
        }
      }
    }
  }

  console.log(`  ✓ Validated ${validated} inline scripts${failed > 0 ? `, ${failed} failed` : ''}`);

  if (failed > 0) {
    process.exit(1);
  }
}

// Run main
if (require.main === module) {
  main();
}

module.exports = { generateOfferHTML };
