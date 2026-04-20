# DECISIONS.md — Research & Analysis

## Phase 1: Brainstormed Ideas (10)

### 1. FounderMath — Startup Equity & Dilution Calculator Suite
- **Description:** Interactive calculators for startup founders: equity dilution simulator, runway calculator, SAFE note converter, CAC/LTV analyzer, vesting visualizer, cap table builder. Beautiful visual charts, side-by-side scenario comparison.
- **Target:** Startup founders, indie hackers, early employees with equity
- **Pricing:** Free basic / $19/mo Pro / $49/mo Team
- **Why it works:** Pure client-side JS, high-value audience, Carta/Pulley charge $100+/mo, calculators are complex math people get wrong

### 2. ContractLens — Contract Red Flag Scanner
- **Description:** Upload/paste contract text, get instant red flag analysis for rental leases, freelance contracts, employment offers
- **Target:** Renters, freelancers, job seekers (ages 22-40)
- **Pricing:** Free scan count / $9.99 detailed report
- **Why it works:** Massive market, viral sharing. RISK: Legal liability, needs good NLP

### 3. LifeInNumbers — Personalized Life Statistics
- **Description:** Input age, habits, location → get shocking personalized stats ("You'll spend 3 years on your phone")
- **Target:** Gen Z / Millennials on social media
- **Pricing:** Free basic / $4.99 full report
- **Why it works:** Extremely viral, pure client-side. RISK: Hard to charge for novelty

### 4. SideHustleMath — Profitability Calculator for Gig Workers
- **Description:** Calculate true hourly rate after expenses, taxes, depreciation for Uber, Doordash, freelancing, etc.
- **Target:** Gig economy workers (57M in US alone)
- **Pricing:** Free basic / $4.99/mo premium
- **Why it works:** Real pain point, underserved. RISK: Users are price-sensitive

### 5. WeddingBudget.ai — Smart Wedding Budget Optimizer
- **Description:** Input budget, guest count, priorities → get optimized allocation with vendor price benchmarks
- **Target:** Engaged couples (2M+ weddings/year in US)
- **Pricing:** Free basic / $14.99 full planner
- **Why it works:** High-intent spenders. RISK: Seasonal, many free templates exist

### 6. ReloCalc — Remote Work Relocation Cost Comparison
- **Description:** Compare true cost of living between cities: taxes, housing, transportation, food, healthcare
- **Target:** Remote workers considering relocation
- **Pricing:** Free comparison / $9.99 personalized report
- **Why it works:** Growing remote work trend. RISK: NerdWallet and others offer free cost-of-living calculators

### 7. PetCostPro — Lifetime Pet Cost Projector & Insurance Comparator
- **Description:** Project lifetime costs by breed/species, compare insurance plans
- **Target:** Prospective pet owners (70% of US households have pets)
- **Pricing:** Free estimates / $7.99 insurance comparison
- **Why it works:** Emotional purchase. RISK: Pet insurance comparison sites already exist

### 8. ScreenTimeReality — Digital Life Audit Tool
- **Description:** Calculate lifetime screen time, social media cost, opportunity cost of digital habits
- **Target:** Parents, productivity enthusiasts
- **Pricing:** Free audit / $2.99 action plan
- **Why it works:** Very shareable. RISK: Too novelty-driven, hard to charge

### 9. HomeMaintain — Home Maintenance Schedule & Cost Planner
- **Description:** Personalized maintenance calendar based on home age, location, systems; cost estimates for each task
- **Target:** New homeowners (6M+ home sales/year in US)
- **Pricing:** Free basic calendar / $9.99/yr full planner
- **Why it works:** Real pain point. RISK: Many free checklists exist

### 10. JobOfferAnalyzer — Total Compensation Calculator
- **Description:** Analyze total comp packages: base + equity + benefits + signing bonus, compare offers side-by-side
- **Target:** Tech workers with multiple offers
- **Pricing:** Free basic / $9.99 detailed analysis
- **Why it works:** High-value decisions. RISK: Levels.fyi and Glassdoor offer free data

---

## Phase 2: Evaluation

### Scoring Matrix (1-10, higher = better)

| Idea | Revenue | Feasibility | Acquisition | Competition (10=low) | Monetization Speed | TOTAL |
|------|---------|-------------|-------------|----------------------|-------------------|-------|
| 1. FounderMath | 8 | 9 | 7 | 8 | 9 | **41** |
| 2. ContractLens | 7 | 6 | 8 | 7 | 7 | **35** |
| 3. LifeInNumbers | 4 | 9 | 9 | 6 | 3 | **31** |
| 4. SideHustleMath | 6 | 8 | 6 | 5 | 6 | **31** |
| 5. WeddingBudget | 7 | 8 | 5 | 4 | 5 | **29** |
| 6. ReloCalc | 5 | 7 | 6 | 3 | 4 | **25** |
| 7. PetCostPro | 5 | 8 | 5 | 4 | 5 | **27** |
| 8. ScreenTimeReality | 3 | 9 | 8 | 5 | 2 | **27** |
| 9. HomeMaintain | 5 | 7 | 5 | 3 | 4 | **24** |
| 10. JobOfferAnalyzer | 6 | 7 | 6 | 3 | 5 | **27** |

### Eliminated (bottom 5 with reasoning):
- **10. JobOfferAnalyzer** (24th%): Levels.fyi dominates this space with free data. Impossible to rank for SEO.
- **9. HomeMaintain** (24th%): Countless free checklists on Pinterest/Home Depot. Zero monetization urgency.
- **6. ReloCalc** (25th%): NerdWallet, Bankrate, and 20+ free cost-of-living calculators exist. Commodity.
- **8. ScreenTimeReality** (27th%): Novelty wears off fast. Nobody pays $2.99 for a guilt trip about screen time.
- **7. PetCostPro** (27th%): Pet insurance comparison is already served by PawlicyAdvisor, Lemonade, etc.

---

### Top 5 Mini Business Plans

#### 1. FounderMath (Score: 41) — CHOSEN WINNER

**Pricing Tiers:**
- Free: All 6 calculators with basic inputs, no saving
- Pro ($19/month): Save unlimited scenarios, export PDF, side-by-side comparison, multi-round simulation
- Team ($49/month): Share with cofounders, collaborative editing, embed in pitch decks

**First 10 Paying Customers:**
- Launch on Hacker News "Show HN" (reachable audience: 50K+ startup-minded people)
- Post on Indie Hackers with detailed founder story
- Share equity dilution visualizations on Twitter/X startup community
- Answer equity questions on r/startups, r/Entrepreneur with tool links
- Cold DM 50 indie founders on Twitter who've posted about equity confusion

**User Acquisition Timeline:**
- Week 1: HN launch, IH post, Twitter threads, Reddit answers → target 500 visitors, 2 paying
- Week 4: SEO articles ("how to calculate SAFE note dilution", "equity vesting explained"), referral program → target 2K visitors, 10 paying
- Week 8: YouTube tutorials, partnership with startup accelerators, Product Hunt relaunch → target 5K visitors, 30 paying

**Revenue Projection:**
- Week 2: First $19 (1 Pro customer)
- Week 4: $190/month MRR (10 Pro customers)
- Week 8: $570/month MRR (30 Pro customers)
- Week 12: $950+/month MRR (50+ Pro customers)

**Static-only Monetization:**
- Stripe Payment Links (no backend) for Pro subscriptions
- Client-side calculations with Chart.js visualizations
- LocalStorage for free tier persistence
- PDF export via client-side jsPDF library

---

#### 2. ContractLens (Score: 35)

**Pricing:** Free scan (count only) / $9.99 detailed report / $14.99/mo unlimited
**First 10 Customers:** Post in r/legaladvice, r/Renters, freelance Facebook groups
**Risk:** Legal liability. Users could sue if tool misses a bad clause. Need strong disclaimers.
**Revenue:** Week 3 first dollar, Week 8 ~$200/mo

#### 3. LifeInNumbers (Score: 31)

**Pricing:** Free full experience / $4.99 "shareable premium stats pack"
**First 10 Customers:** Viral TikTok/Instagram content, Reddit r/dataisbeautiful
**Risk:** Pure novelty. Conversion rate likely <1%. No recurring revenue model.
**Revenue:** Week 1 first dollar, but growth stalls quickly

#### 4. SideHustleMath (Score: 31)

**Pricing:** Free basic calculator / $4.99/mo premium insights
**First 10 Customers:** Post in r/beermoney, r/sidehustle, Uber driver forums
**Risk:** Gig workers are extremely price-sensitive. Many free hourly rate calculators exist.
**Revenue:** Week 4 first dollar, slow growth

#### 5. WeddingBudget (Score: 29)

**Pricing:** Free basic budget / $14.99 full planner with vendor benchmarks
**First 10 Customers:** Pinterest, r/weddingplanning, The Knot forums
**Risk:** Highly seasonal. Couples use it once. No recurring revenue.
**Revenue:** Week 3 first dollar, but limited to wedding season

---

## Phase 3: Decision

### WINNER: FounderMath

**Why FounderMath wins:**
1. **Zero legal liability** — it's calculators, not advice
2. **Pure client-side** — no server costs, no API costs, runs on Vercel free tier forever
3. **High-value audience** — founders have money and will pay $19/mo without thinking
4. **Clear pain point** — equity dilution math is genuinely confusing; people get it wrong and lose money
5. **Underserved niche** — Carta/Pulley cost $100+/mo and are for companies; no good tool exists for INDIVIDUAL founders
6. **Recurring revenue** — monthly subscription, not one-time purchase
7. **Built-in virality** — founders share scenarios with cofounders, post on Twitter, discuss on HN
8. **SEO goldmine** — "equity dilution calculator", "SAFE note calculator", "runway calculator" are specific long-tail keywords
9. **$0 marginal cost** — every new user costs nothing to serve
10. **Defensible** — sophisticated math + beautiful UX + saved scenarios = switching cost

### Elevator Pitch
"FounderMath is the startup calculator suite that turns confusing equity math into beautiful, interactive visualizations. Dilution simulators, SAFE note converters, runway calculators, and cap table builders — all in one place. Free to start, $19/month for Pro. Because the only thing worse than dilution is not understanding it."

---

## Competitive Landscape Analysis

### Direct Competitors:
- **Carta** ($100+/mo) — Full cap table management, enterprise-focused. Overkill for solo founders.
- **Pulley** ($100+/mo) — Similar to Carta, focused on later-stage companies.
- **Holloway Guide Equity Calculator** (Free) — Basic single-round calculator, no visualization, no saving.
- **Slicing Pie** ($19/mo) — Dynamic equity splits only, not comprehensive.
- Various free Excel templates — No visualization, error-prone, not mobile-friendly.

### Gap in Market:
Nobody serves the INDIVIDUAL founder who needs to understand "what happens to MY equity" across funding rounds. Carta/Pulley are for companies managing cap tables. Free calculators are basic. FounderMath is for the FOUNDER understanding their own stake.

### Sustainable Advantage:
- Interactive "what if" sliders (unique UX)
- Side-by-side scenario comparison
- Visual dilution timeline charts
- SAFE note conversion waterfall visualization
- "Share with cofounders" collaboration (network effects)
