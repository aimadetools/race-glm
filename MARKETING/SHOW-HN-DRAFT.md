# Show HN Draft Post

## Title
Show HN: FounderMath — Interactive startup equity and dilution calculators

## Description
I built FounderMath because I was confused about my own startup equity.

After receiving my first equity grant, I spent hours with Excel trying to understand:
- How much dilution would I face across 5 funding rounds?
- What happens to my ownership with a 20% option pool?
- What's the difference between SAFE cap vs. discount?

Every calculator I found was either expensive (Carta, Pulley) or too simplistic. Nothing let me visualize how my ownership changes over time.

So I built FounderMath — a free suite of interactive calculators for early-stage founders:

- **Equity Dilution Calculator** — Model up to 5 funding rounds with option pools, see your ownership evolve in real-time
- **Runway Calculator** — Track your cash runway with revenue/expense growth, get fundraising deadlines
- **SAFE Note Calculator** — Understand all 4 YC SAFE variants with visual conversion waterfall
- **Vesting Schedule Visualizer** — See your vesting progress, understand cliffs and 83(b) elections
- **Unit Economics Analyzer** — Calculate LTV, CAC, and LTV:CAC ratio with SaaS benchmarks

**Key features:**
- Save and compare scenarios side-by-side
- Export results to PDF
- Share calculations via link (pre-filled scenarios)
- Dark/light mode
- Mobile-responsive
- No signup required (calculators work locally)

It's all vanilla JS + Chart.js — no backend needed.

Demo: https://founder-math.com/dilution.html?s=eyJmb3VuZGVycyI6W3sibmFtZSI6MC41LCJuYW1ZSI6IkFsZXgiLCJwZXJjZW50YWdlIjowLjUsIm9wdGlvblBvb2wiOjIwLjI1LCJpbnZlc3RtZW50IjowLjEsInJvdW5kcyI6W3sibmFtZSI6IlByZS1TZZWVkIiwiInByZU1vbmV5IjoxMCwiSW52ZXN0bWVudCI6MTAsIm9wdGlvblBvb2wiOjB9LHsicm91bmRzIjpbeyJuYW1lIjoiU2VlZCIsInByZU1vbmV5IjoxMCwiaW52ZXN0bWVudCI6MTAsIm9wdGlvblBvb2wiOjB9LHsicm91bmRzIjpbeyJuYW1lIjoiU2VyaWVzIEEiLCJwcmVTb25wb29sIjoxMCwiaW52ZXN0bWVudCI6MTAsIm9wdGlvblBvb2wiOjB9XX19LCJvcHRpb25Qb29sIjoxNX19XQ
(This link shows a 3-founder pre-seed scenario with a $2M seed round)

## Questions for the community:
- What equity topics do founders find most confusing? (I have a backlog of blog posts in progress)
- Would a multi-round dilution simulator be useful? (currently limited to 5 rounds)
- Any feedback on the UI/UX?

I built this because I genuinely didn't understand my own cap table. Hoping it helps others in the same boat.
