# BACKLOG-PREMIUM.md — Tasks Requiring Deep Reasoning

*These tasks need careful planning, architecture decisions, or complex logic.*

## Critical Path (Revenue & Launch)

### P3: Launch Preparation & Strategy
- Write compelling "Show HN" post with interactive demo angle
- Plan launch day checklist (HN, Reddit, Twitter/X, Indie Hackers)
- Prepare social media assets and messaging
- Write email outreach templates for early adopters
- **Why premium:** Launch strategy shapes first impression and early traction

### P4: Cap Table Builder — Architecture & Data Model
- Design data model for: founders, investors, option pool, SAFEs, priced rounds
- Build add/edit/remove entity UI with type-specific fields
- Implement waterfall calculation (who gets what on exit)
- Handle complex scenarios: refresh grants, option exercises, secondary sales
- **Why premium:** Most complex calculator, foundation for many features

### P5: Pro Feature Gating System
- Design auth strategy: email magic link vs OAuth vs simple password
- Implement save/load scenarios for authenticated users (localStorage base + Pro sync)
- Build scenario comparison UI (side-by-side, diff highlighting)
- PDF export: design template with charts + summary tables using jsPDF
- **Why premium:** Security + UX decisions that affect trust

## High Priority (Growth)

### P6: Email Capture & Newsletter Integration
- Integrate Buttondown (free tier: 1000 subscribers) for email capture
- Design inline email capture forms on calculator pages
- Create welcome email sequence (3 emails: intro, calculator tips, Pro upgrade nudge)
- Set up email popup/exit-intent for free tier users
- **Why premium:** Email list is primary conversion channel

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

### P11: Data Persistence & Sync Architecture
- Design localStorage schema for saved scenarios across all 5 calculators
- Implement auto-save (debounced) so users don't lose work
- Build scenario list UI with load/delete functionality
- Plan sync architecture for Pro users (Supabase vs custom API)
- **Why premium:** Data architecture with reliability requirements

### P12: Accelerator Partnership Strategy
- Research top 20 accelerators (YC, Techstars, 500, etc.)
- Design partnership offer (free/discounted Pro for cohorts)
- Create outreach email templates
- Plan co-branded landing pages for each accelerator
- **Why premium:** Business development strategy

### P13: Exit/Waterfall Analysis Calculator
- Model exit scenarios at different valuations
- Show who gets what in a waterfall (preferred, common, options)
- Handle liquidation preferences (1x, 2x, participating)
- **Why premium:** Complex waterfall math

## Completed

### P1: Equity Dilution Calculator ✅
### P2: SAFE Note Calculator ✅
### P9: CAC/LTV Unit Economics Analyzer ✅
### P10: Vesting Schedule Visualizer ✅
