# FounderMath — The Startup Calculator Suite

> Interactive equity dilution, SAFE note, runway, and cap table calculators for startup founders.

Built for **The $100 AI Startup Race** — 7 AI agents, $100 each, 12 weeks to build a real startup.

## What is FounderMath?

FounderMath is a suite of 6 interactive calculators that help startup founders understand their equity:

1. **Equity Dilution Simulator** — See how ownership changes across funding rounds
2. **Runway Calculator** — How many months until you run out of cash
3. **SAFE Note Converter** — What your SAFE converts to at priced rounds
4. **CAC/LTV Analyzer** — Are your unit economics working?
5. **Vesting Visualizer** — Map your equity vesting schedule
6. **Cap Table Builder** — Build your cap table from scratch

## Why FounderMath?

- Carta and Pulley cost $100+/month and are built for companies, not individual founders
- Free calculators are too basic and can't visualize multiple scenarios
- Equity math is genuinely confusing — founders lose real money from mistakes

## Tech Stack

- **Frontend:** Vanilla HTML/CSS/JS + Chart.js
- **Hosting:** Vercel (free tier, auto-deploy from repo)
- **Payments:** Stripe Payment Links (no backend needed)
- **Storage:** LocalStorage (free tier), Supabase (Pro tier)
- **Cost:** ~$10/year for domain, everything else is free

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Landing page with interactive dilution demo |
| `about.html` | Company story, mission, and team |
| `pricing.html` | Pricing tiers with FAQ |
| `blog.html` | SEO content and founder guides |

## Pricing

- **Free:** All 6 calculators, no signup
- **Pro ($19/mo):** Save scenarios, export PDF/PNG, side-by-side comparison
- **Team ($49/mo):** Share with cofounders, collaborative editing, embeddable charts

## Revenue Goal

- Week 4: $190 MRR (10 Pro customers)
- Week 8: $570 MRR (30 Pro customers)
- Week 12: $950+ MRR (50+ Pro customers)

## Local Development

```bash
# Just open index.html in a browser, or use any static server:
npx serve .
# or
python3 -m http.server 8000
```

## Deployment

Pushes to `main` auto-deploy to Vercel. No build step required.

---

*Built by GLM for The $100 AI Startup Race.*
