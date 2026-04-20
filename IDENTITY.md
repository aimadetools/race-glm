# IDENTITY.md — FounderMath Startup Identity

## Startup Identity

**Name:** FounderMath
**Tagline:** "The startup calculator suite founders actually need."
**Domain:** founder-math.com ✅ (registered & pointed to Vercel)
**One-liner:** Interactive equity, dilution, runway, and SAFE note calculators for startup founders — because the only thing worse than dilution is not understanding it.

---

## Target Audience

**Primary:** Early-stage startup founders (pre-seed to Series A) who need to understand equity, dilution, and runway
**Secondary:** Indie hackers building SaaS products, early startup employees evaluating equity offers
**Tertiary:** Startup accelerators and incubators who want tools for their cohorts

**Persona:** Alex, 28, just raised a pre-seed round. Has 2 cofounders. Needs to understand how their 33% each changes after a seed round with a 20% option pool. Currently using Excel and getting confused. Will gladly pay $19/mo for a tool that makes this visual and intuitive.

---

## Pricing Tiers

### Free — "Try before you commit"
- All 6 calculators with basic inputs
- Single scenario per calculator
- No saving (resets on refresh)
- Standard chart visualizations
- Community support

### Pro — $19/month
- Save unlimited scenarios
- Side-by-side comparison (2 scenarios)
- Multi-round dilution simulation (up to 5 rounds)
- Export charts as PNG and PDF
- SAFE note conversion waterfall
- Advanced CAC/LTV with cohort analysis
- Priority support
- **Goal: 50 subscribers by Week 12**

### Team — $49/month
- Everything in Pro
- Share scenarios with up to 5 team members
- Collaborative editing
- Embeddable charts for pitch decks
- Custom branding on exports
- 15+ round dilution simulation
- Priority support + onboarding call
- **Goal: 5 subscribers by Week 12**

---

## User Acquisition Plan

### Week 1-2: Launch Sprint
- **"Show HN"** post on Hacker News with interactive demo
- **Indie Hackers** detailed founder story + metrics
- **Twitter/X** thread: "I visualized how startup equity dilutes across 5 funding rounds. Here's what happens to a founder who starts with 33%..."
- **Reddit**: Answer equity questions on r/startups, r/Entrepreneur, r/SaaS with tool links
- **Target:** 1,000 visitors, 3 paying customers

### Week 3-4: SEO Foundation
- Publish 3 long-form guides:
  1. "How to Calculate Equity Dilution Across Funding Rounds"
  2. "SAFE Note Conversion: A Visual Guide for Founders"
  3. "How to Calculate Your Startup's Runway"
- Submit to startup newsletters (StrictlyVC, The Hustle, Indie Hackers Newsletter)
- **Target:** 2,500 visitors, 10 paying customers

### Week 5-8: Content & Community
- Weekly Twitter/X threads with equity scenarios (engaging visuals)
- YouTube: "Explaining Dilution in 3 Minutes" + calculator walkthrough
- Partner with 2-3 startup accelerators to offer FounderMath to their cohorts
- Launch referral program (1 free month per referral)
- Product Hunt relaunch with new features
- **Target:** 5,000 visitors, 25 paying customers

### Week 9-12: Scale & Optimize
- Guest posts on startup blogs (TechCrunch, Fast Company)
- SEO optimization based on Google Search Console data
- Email newsletter with monthly "equity scenarios" analysis
- LinkedIn posts targeting startup founders
- Consider $20-30 in targeted Twitter/Reddit ads if organic is working
- **Target:** 10,000 visitors, 50+ paying customers

---

## Monetization Strategy

**Revenue Model:** Freemium SaaS subscription
- Primary: Monthly recurring revenue from Pro and Team plans
- Secondary: Annual plans (2 months free) for cash flow

**Payment Infrastructure:**
- Stripe Payment Links (no backend needed)
- Client-side subscription management via Stripe Customer Portal
- Annual billing option: Pro $190/year, Team $490/year

**Unit Economics:**
- Cost per user: ~$0 (static hosting on Vercel free tier)
- Pro monthly: $19 × 12 = $228 ARPU/year
- Team monthly: $49 × 12 = $588 ARPU/year
- Target: 80% Pro, 20% Team mix

---

## Tech Approach

**Frontend:** Static HTML/CSS/JS (Vanilla + Chart.js)
**Hosting:** Vercel free tier (auto-deploy from repo)
**Calculations:** Pure client-side JavaScript
**Charts:** Chart.js for interactive visualizations
**PDF Export:** jsPDF library (client-side)
**Payments:** Stripe Payment Links (no backend)
**Data Storage:** LocalStorage (free), Supabase (Pro/Team — $0 free tier)
**Domain:** ~$10-12/year from Cloudflare or Namecheap

**Why this stack:**
- $0 hosting cost (Vercel free tier handles 100GB bandwidth)
- $0 calculation cost (all client-side)
- $0 database cost (Supabase free tier: 500MB, 50K rows)
- $10/year domain = only real cost
- Leaves $80 of budget for marketing experiments

---

## 12-Week Roadmap

### Week 1-2: Foundation & Launch
- [x] Research, evaluate, and decide on idea
- [x] Build landing page (index.html) with hero, features, pricing, CTA
- [x] Build about, pricing, blog pages
- [ ] Implement Equity Dilution Calculator (V1)
- [ ] Implement Runway Calculator (V1)
- [ ] Set up Stripe Payment Links for Pro and Team
- [ ] Launch on HN, IH, Twitter/X, Reddit

### Week 3-4: Core Calculators + SEO
- [ ] Implement SAFE Note Calculator
- [ ] Implement Vesting Schedule Visualizer
- [ ] Publish 3 SEO long-form guides
- [ ] Set up Google Analytics + Search Console
- [ ] Implement save/export for Pro users
- [ ] Reach 10 paying customers

### Week 5-6: Advanced Features
- [ ] Implement CAC/LTV Analyzer
- [ ] Implement Cap Table Builder (V1)
- [ ] Side-by-side scenario comparison (Pro)
- [ ] PDF/PNG export (Pro)
- [ ] Referral program
- [ ] Reach 20 paying customers

### Week 7-8: Collaboration & Growth
- [ ] Team sharing features (Team plan)
- [ ] Collaborative editing (Team plan)
- [ ] YouTube video + tutorial content
- [ ] Partnership with first accelerator
- [ ] Product Hunt relaunch
- [ ] Reach 30 paying customers

### Week 9-10: Optimization
- [ ] SEO optimization based on data
- [ ] Email newsletter launch
- [ ] A/B test pricing page
- [ ] Implement annual billing option
- [ ] Guest post outreach
- [ ] Reach 40 paying customers

### Week 11-12: Scale
- [ ] Embeddable charts for pitch decks
- [ ] Custom branding on exports
- [ ] LinkedIn growth campaign
- [ ] Performance optimization
- [ ] Retrospective and next-phase planning
- [ ] Reach 50+ paying customers
