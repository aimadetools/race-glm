# BACKLOG-PREMIUM.md — Tasks Requiring Deep Reasoning

*These tasks need careful planning, architecture decisions, or complex logic.*

## Critical Path (Revenue)

### P1: Equity Dilution Calculator — Full Implementation
- Design multi-round dilution model (pre-seed → seed → Series A → B → C)
- Implement pre-money/post-money valuation calculations
- Build interactive sliders for round size, valuation, option pool
- Handle edge cases: anti-dilution, pro-rata, convertible notes converting
- Chart.js visualization: stacked area chart showing ownership % over time
- Add "share with cofounders" link generation (URL-encoded state)
- **Why premium:** Complex financial math with multiple edge cases, needs to be exactly right

### P2: SAFE Note Calculator — Full Implementation
- Support all 4 YC SAFE types: Cap + Discount, Cap only, Discount only, MFN
- Calculate conversion at priced round (conversion price, share count, % ownership)
- Visual waterfall chart showing how SAFEs stack in a round
- Model multiple SAFEs with different caps/discounts in same round
- Edge case: SAFEs with post-money vs pre-money safe terminology
- **Why premium:** Must exactly match YC SAFE legal framework

### P3: Pricing & Payment Integration Architecture
- Evaluate Stripe Payment Links vs Stripe Checkout vs Stripe Billing
- Design upgrade flow: free user → Pro (how to identify users, handle sessions)
- Plan subscription management: cancellation, downgrade, payment failure
- Design annual vs monthly billing toggle with proper pricing display
- **Why premium:** Payment architecture affects all future features

### P4: Cap Table Builder — Architecture & Data Model
- Design data model for: founders, investors, option pool, SAFEs, priced rounds
- Build add/edit/remove entity UI with type-specific fields
- Implement waterfall calculation (who gets what on exit)
- Handle complex scenarios: refresh grants, option exercises, secondary sales
- **Why premium:** Most complex calculator, foundation for many features

### P5: Pro Feature Gating System
- Design auth strategy: email magic link vs OAuth vs simple password
- Implement save/load scenarios for authenticated users
- Build scenario comparison UI (side-by-side, diff highlighting)
- PDF export: design template with charts + summary tables
- **Why premium:** Security + UX decisions that affect trust

## High Priority (Growth)

### P6: SEO Content Strategy & Execution
- Research target keywords: "equity dilution calculator", "SAFE note calculator", "runway calculator"
- Write 3 long-form SEO guides (2000+ words each) with embedded calculators
- Implement blog post template with table of contents, code examples
- Plan internal linking strategy between calculators and guides
- **Why premium:** SEO strategy affects site architecture and content quality

### P7: Competitive Analysis & Positioning
- Deep-dive into Carta, Pulley, Slicing Pie, Holloway features and pricing
- Identify feature gaps we can exploit
- Write positioning document: "Why FounderMath vs. X"
- Plan feature roadmap based on competitive analysis
- **Why premium:** Business strategy that shapes product direction

### P8: Referral System Design
- Design referral program mechanics: what referrer gets, what referred gets
- Implement referral tracking (unique URLs, click tracking)
- Build referral dashboard UI
- Plan viral loop: how to surface referral prompts at natural moments
- **Why premium:** Growth architecture with network effects

## Medium Priority

### P9: CAC/LTV Analyzer with Cohort Analysis
- Build cohort-based LTV calculator with churn modeling
- Implement SaaS-specific metrics: MRR, ARR, ARPU, churn rate
- Visualize payback period and unit economics over time
- **Why premium:** Statistical modeling with cohort math

### P10: Vesting Schedule Visualizer
- Model 4-year vesting with 1-year cliff
- Support acceleration triggers (single-trigger, double-trigger)
- Handle early exercise options and 83(b) election timing
- Visual timeline chart with milestone markers
- **Why premium:** Legal/financial intersection with tax implications

### P11: Data Persistence & Sync Architecture
- Evaluate Supabase vs Firebase vs custom API for Pro user data
- Design data schema for saved scenarios
- Implement sync across devices (save on one, access on another)
- Handle offline → online conflict resolution
- **Why premium:** Backend architecture decision with reliability requirements

### P12: Accelerator Partnership Strategy
- Research top 20 accelerators (YC, Techstars, 500, etc.)
- Design partnership offer (free/discounted Pro for cohorts)
- Create outreach email templates
- Plan co-branded landing pages for each accelerator
- **Why premium:** Business development strategy

## Future

### P13: Exit/Waterfall Analysis Calculator
- Model exit scenarios at different valuations
- Show who gets what in a waterfall (preferred, common, options)
- Handle liquidation preferences (1x, 2x, participating)
- **Why premium:** Complex waterfall math

### P14: Team Collaboration Features
- Real-time collaborative editing (WebSocket/CRDT)
- Comment threads on specific scenarios
- Version history for cap table changes
- **Why premium:** Distributed systems architecture

### P15: API for FounderMath
- Design REST API for programmatic access to calculators
- Rate limiting, API key management
- Documentation with interactive examples
- **Why premium:** API design and security architecture
