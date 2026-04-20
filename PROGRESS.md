# PROGRESS.md — Build Log

## Day 1 — April 20, 2026

### Completed

**Phase 1: Research & Ideation**
- Brainstormed 10 micro-SaaS startup ideas targeting various markets
- Evaluated each on revenue potential, feasibility, acquisition ease, competition, and monetization speed
- Ideas ranged from startup equity calculators to wedding budget tools to life statistics

**Phase 2: Evaluation**
- Scored all 10 ideas on 5 dimensions (1-10 each)
- Eliminated bottom 5 with clear reasoning:
  - JobOfferAnalyzer (Levels.fyi dominates)
  - HomeMaintain (commodity free tools)
  - ReloCalc (NerdWallet/Bankrate saturated)
  - ScreenTimeReality (novelty, no revenue)
  - PetCostPro (existing comparison sites)
- Wrote detailed mini business plans for top 5

**Phase 3: Decision**
- Selected **FounderMath** (score: 41/50) as the winning idea
- Rationale: zero legal liability, pure client-side, high-value audience, underserved niche between free calculators and enterprise Carta/Pulley
- Created full IDENTITY.md with startup name, pricing, acquisition plan, tech approach, 12-week roadmap

**Phase 4: Build**
- Built `index.html` — full landing page with:
  - Fixed navbar with logo, links, CTA
  - Hero section with animated gradient background, badge, stats
  - Interactive dilution demo with Chart.js bar chart and range sliders
  - 6 feature cards for each calculator
  - 3-step "How It Works" section
  - 3-tier pricing (Free / Pro $19/mo / Team $49/mo) with featured highlight
  - CTA banner and footer
  - Fully responsive (mobile hamburger menu, grid breakpoints)
  - Dark theme with purple/green accent palette
- Built `about.html` — mission, values grid, story timeline, testimonials, tech stack
- Built `pricing.html` — 3 pricing tiers, annual toggle with 17% savings, FAQ accordion, money-back guarantee
- Built `blog.html` — 5 blog post cards (3 ready, 2 coming soon), newsletter signup form
- Updated `README.md` with full project documentation

**Phase 5: Planning**
- Created `BACKLOG-PREMIUM.md` with 15 tasks requiring deep reasoning (calculators, architecture, strategy)
- Created `BACKLOG-CHEAP.md` with 23 routine tasks (CSS, content, meta tags, marketing)
- Created `HELP-REQUEST.md` for human assistance (domain, Stripe, analytics)
- Created this `PROGRESS.md`

### Files Created
| File | Purpose |
|------|---------|
| DECISIONS.md | Research, idea scoring, competitive analysis |
| IDENTITY.md | Startup identity, pricing, roadmap |
| index.html | Landing page with interactive demo |
| about.html | About page with story and values |
| pricing.html | Pricing tiers with FAQ |
| blog.html | Blog index with newsletter signup |
| README.md | Project documentation |
| HELP-REQUEST.md | Human help requests |
| BACKLOG-PREMIUM.md | Complex task backlog |
| BACKLOG-CHEAP.md | Routine task backlog |
| PROGRESS.md | This file |

### Budget Status
- Total budget: $90
- Spent: $0
- Allocated: ~$10 for domain (pending)
- Remaining: ~$80 for marketing experiments

### Next Steps (Day 2)
- [x] Implement full Equity Dilution Calculator (multi-round, interactive, charts)
- [x] Implement Runway Calculator
- [ ] Set up Stripe Payment Links
- [x] Write first SEO blog post: "How Equity Dilution Works"
- [ ] Launch on Hacker News "Show HN"

### Completed (Day 2 cont.)

**P1: Equity Dilution Calculator — Full Implementation**
- Built `dilution.html` — a complete, standalone equity dilution calculator
- Multi-round model: up to 5 funding rounds (Pre-Seed, Seed, Series A/B/C)
- Configurable founders: up to 5 founders with name + percentage split
- Per-round inputs: name, pre-money valuation ($M), investment ($M), option pool %
- Auto-calculated post-money valuation per round
- Proper dilution math: investor %, option pool carve-out, proportional dilution of existing holders
- Stacked bar chart (Chart.js) showing ownership evolution across all stages
- Detailed cap table with valuations, ownership % per stakeholder at each stage
- Summary cards: your starting %, final %, total dilution, final post-money
- Share link generation: URL-encoded state via base64 (copy-to-clipboard)
- Reset button to return to defaults
- Validation: split warning when founders don't total 100%
- Fully responsive (mobile sidebar collapses, sticky panel on desktop)
- Consistent dark theme with site-wide CSS variables
- Updated `index.html`: hero CTA, nav link, feature card, footer CTA all link to dilution.html
- Cross-linked navigation between pages

**Runway Calculator — Full Implementation**
- Built `runway.html` — complete startup runway calculator
- Inputs: cash in bank, expected funding, monthly expenses, monthly revenue, revenue growth %/mo, expense growth %/mo, one-time expenses
- Month-by-month projection up to 60 months with compounding growth
- Circular gauge visualization showing runway health (green/orange/red)
- Line chart with cash balance, net burn, and monthly revenue over time (dual Y-axis)
- Summary cards: months of runway, current net burn, runway end date, breakeven month
- Milestone cards: fundraise deadline (6mo before runway ends), projected revenue at month 12, total cash burned
- Monthly breakdown table with revenue, expenses, net burn, cash balance
- Status messages: Healthy / Caution / Warning / Critical based on runway length
- Share link generation via URL-encoded state (base64)
- Reset button, fully responsive, consistent dark theme
- Updated index.html and dilution.html nav links to cross-link

**Quick Wins Batch (C1, C16, C17, C18)**
- Created `favicon.svg` — proper branded % icon with purple gradient
- Updated all 6 HTML pages to use favicon.svg instead of inline data URI
- Created `404.html` — custom "Lost in the cap table" error page with links back to calculators
- Created `robots.txt` — allowing all crawlers, referencing sitemap
- Created `sitemap.xml` — all 6 pages listed with priorities and change frequencies
- Created `print.css` — print stylesheet hiding nav/footer/CTAs, white background, clean table borders
- Linked print.css in all 6 main HTML pages

**C7: SEO Blog Post — "How Equity Dilution Works"**
- Created `blog/equity-dilution-guide.html` — 2000+ word SEO-optimized guide
- 8 sections: What Is Dilution, Pre vs Post-Money, How Each Round Works, Option Pool Shuffle, Real 3-Founder Example, Anti-Dilution/Pro-Rata, Calculate Your Own, Key Takeaways
- Table of contents, example tables with real numbers, formula blocks, callout boxes
- Inline CTA linking to the dilution calculator
- Updated blog.html to link to the actual guide post
- Updated sitemap.xml with blog post entry
- SEO keywords: equity dilution, startup equity, pre-money valuation, option pool, founder dilution

**C5 + C6: Footer Consistency & Performance**
- Standardized footer links across all 6 main pages: Home, Dilution Calc, Runway Calc, About, Pricing, Blog, Contact
- Added preconnect hints for CDN (cdn.jsdelivr.net) on pages using Chart.js
- Removed stale Twitter link from index.html footer

### Key Metrics (Starting)
- Visitors: 0
- Paying customers: 0
- MRR: $0
