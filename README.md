<div align="center">

# FounderMath

### The startup calculator suite founders actually trust.

Interactive equity, dilution, SAFE-note, runway, and cap-table calculators — because the only thing worse than dilution is not understanding it.

[![Live Site](https://img.shields.io/badge/live-founder--math.com-6c5ce7?style=flat-square)](https://founder-math.com)
[![License](https://img.shields.io/badge/license-MIT-00b894?style=flat-square)](#license)
[![Tools](https://img.shields.io/badge/tools-26%20calculators-ff6b6b?style=flat-square)](#calculators)
[![Guides](https://img.shields.io/badge/guides-91%2B%20articles-a29bfe?style=flat-square)](#guides)

**[🌐 Launch the free calculators →](https://founder-math.com)**

</div>

---

FounderMath is a free, interactive suite that helps early-stage founders and
early employees actually **see** their equity. Carta and Pulley are built for
finance teams at funded companies; free online calculators are too basic to
model real scenarios. FounderMath lives in between — visual, accurate, and
built for the person signing the term sheet, not their accountant.

> *I visualized how a founder's 33% erodes across pre-seed, seed, and Series A.
> Turns out it's rarely what founders expect — and that gap costs people real
> money.*

## Why founders use it

- **Visual, not a spreadsheet.** Every calculator renders an interactive chart so you *see* dilution, vesting, and runway play out round by round.
- **Honest math.** Models the option pool shuffle, liquidation preferences, SAFE conversion waterfalls, and post-money vs pre-money SAFEs — the details most "free calculators" quietly get wrong.
- **No account required.** Everything runs client-side. No signup wall for the core tools, no data leaves the browser.
- **Negotiation-ready outputs.** Export a clean PDF equity report you can take into a raise or a job-offer negotiation.

## Calculators

All 26 tools are free and run entirely in the browser.

| Category | Tools |
|----------|-------|
| **Cap table & dilution** | Dilution Simulator, Cap Table Builder, Dilution Timeline, Multi-round Scenario Compare |
| **Fundraising** | SAFE Note Converter, Convertible Note Calculator, 409A Valuation Estimator, Startup Valuation, Runway Calculator |
| **Compensation** | Stock Options Analyzer, Equity vs Salary, Offer Analyzer, Offer Trap Detector, Compare Offers, Equity Tax Calculator, Liquidation Preference |
| **Founder math** | Equity Split, Vesting Visualizer, Unit Economics (CAC/LTV), Equity Score, Startup Exit Calculator |
| **Resources** | Equity Report, Equity Cheat Sheet, Glossary (54 terms), Benchmarks, Startup Equity Checklist, Offer Verdict |

## Guides

91+ founder-written guides covering the questions people actually Google:
"How much is my startup equity worth?", "Stock options vs RSUs", "What is a
409A valuation?", "Should I exercise my stock options?", "How to negotiate
stock options at a startup." Browse them all at **[founder-math.com/blog](https://founder-math.com/blog.html)**.

## Distribution

FounderMath is built to be embedded and reused, not just visited:

- **Embeddable widgets** — drop a `<script>` tag to embed any of 5 calculators on an accelerator resource page, blog, or startup community. See [`widget.js`](widget.js).
- **npm package** — the core equity/dilution/SAFE math is packaged as reusable functions for your own app. See [`foundermath-equity-calculations/`](foundermath-equity-calculations/) (`npm install` within that folder to use locally; registry publication pending).
- **Browser extension** — quick dilution math from any tab. See [`chrome-extension/`](chrome-extension/).

## Pricing

- **Free** — every calculator, every chart, no signup. That's the whole product for most people.
- **Premium Equity Report ($9.99 one-time)** — a polished, investor-ready PDF of your full dilution analysis with personalized recommendations and benchmark comparison.

## Tech stack

- **Frontend:** Vanilla HTML/CSS/JS + Chart.js (no build step, deploys as static files)
- **Hosting:** Vercel free tier (auto-deploy on push)
- **Math:** 100% client-side — no backend, no compute cost
- **Payments:** Stripe Payment Links
- **Storage:** LocalStorage (free tier)

This keeps infrastructure cost at essentially $0, so the product can stay free.

## Run locally

No build step. Pick any static server:

```bash
# Option 1: Python
python3 -m http.server 8000

# Option 2: Node
npx serve .
```

Then open `http://localhost:8000`.

To use the equity math package directly (local install):

```bash
cd foundermath-equity-calculations
npm install
node -e "const fm = require('./index.js'); console.log(fm.dilution({...}));"
```

## Embed a calculator

```html
<!-- Equity dilution widget -->
<div data-fm-widget="dilution"></div>
<script src="https://founder-math.com/widget.js" async></script>
```

## License

MIT — the calculator code is open for inspection and reuse. The educational
content and branding are © FounderMath.

---

<div align="center">

**[Try the free dilution calculator →](https://founder-math.com/dilution.html)**

Built for founders who'd rather understand their equity than trust a spreadsheet.

</div>
