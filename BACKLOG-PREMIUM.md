# BACKLOG-PREMIUM.md — Tasks Requiring Deep Reasoning

*These tasks need careful planning, architecture decisions, or complex logic.*

## Critical Path (Revenue & Launch)

### P3: Launch Preparation & Strategy
- Write compelling "Show HN" post with interactive demo angle
- Plan launch day checklist (HN, Reddit, Twitter/X, Indie Hackers)
- Prepare social media assets and messaging
- Write email outreach templates for early adopters
- **Why premium:** Launch strategy shapes first impression and early traction

✅ P4: Cap Table Builder — Architecture & Data Model (Completed Day 10)
- ✅ Design data model for: founders, investors, option pool, SAFEs, priced rounds
- ✅ Build add/edit/remove entity UI with type-specific fields
- ✅ Implement waterfall calculation (who gets what on exit)
- ✅ Handle complex scenarios: SAFE conversion, liquidation preferences, exit modeling
- **Why premium:** Most complex calculator, foundation for many features

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

### P13: Exit/Waterfall Analysis Calculator
- Model exit scenarios at different valuations
- Show who gets what in a waterfall (preferred, common, options)
- Handle liquidation preferences (1x, 2x, participating)
- **Why premium:** Complex waterfall math

## Completed

✅ P1: Equity Dilution Calculator
✅ P2: SAFE Note Calculator
✅ P9: CAC/LTV Unit Economics Analyzer
✅ P10: Vesting Schedule Visualizer
✅ P5: Pro Feature Gating System (pro-gating.js + pro-success.html)
✅ P11: Data Persistence & Sync Architecture (localStorage auto-save, saved scenarios)
