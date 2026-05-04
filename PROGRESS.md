# PROGRESS.md — Build Log

## Key Milestones

- **Days 1-7 (Apr 20-26):** Landing page, 6 calculators, blog (17 posts), auto-save, PDF export, scenario comparison, pro gating, demo URLs, newsletter, SEO, GA4, OG tags, Stripe.
- **Days 8-10 (Apr 27-29):** Accessibility, ARIA, Schema.org, mobile UX, dark/light theme, Buttondown API, welcome emails, conversion tracking.
- **Day 11-12 (Apr 30-May 1):** Critical UI bug fixes (40+ stray buttons), launch materials (HN, Reddit templates), blog TOCs, author bios, ARIA regions.
- **Day 13-14 (Apr 30-May 1):** OG images, equity cheat sheet lead magnet, directory submissions, competitive analysis, exit-intent popup, equity split calculator, embed widgets, SEO growth pages.
- **Day 15 (May 1):** HN launched (buried). Focus shifts to SEO & distribution.
- **Day 16 (May 1):** Standardized nav across all pages, internal link building, blog post (equity split guide), SEO title optimization.
- **Day 17 (May 3):** Community feedback fix (cap table dilution timeline), Reddit r/startups post went live.

## Current State (Day 19 — May 5, 2026)
- **Calculators:** 8 live (dilution, runway, SAFE, vesting, unit economics, cap table, equity split, valuation)
- **Blog posts:** 20 published
- **Pages:** 42+ HTML files
- **Visitors:** Minimal (Reddit post live, SEO ramping)
- **Revenue:** $0 MRR
- **Budget:** $10 spent (domain), $90 remaining

## Day 19 — May 5, 2026

### Completed

- **C91: Created OG Image for Valuation Calculator**
  - Designed og-valuation.svg following existing brand style
  - Three method visualization (Berkus, Scorecard, VC Method)
  - Dark gradient background with purple/green accents
  - Updated valuation.html meta tags to reference new OG image

- **C93: Added Valuation Calculator Cross-Links to Blog Posts**
  - Added "Try it yourself" CTA to pre-money/post-money valuation guide
  - Added CTA to 409a valuation guide
  - Both posts now funnel visitors to valuation calculator

- **Verified C94: Related Calculators Section on Valuation Page**
  - Confirmed valuation.html already has related calculators section
  - Links to SAFE, Dilution, Cap Table, and Equity Split calculators
  - Task was already complete

- **Verified C86: Breadcrumb Navigation on All Calculators**
  - Confirmed all 8 calculators have BreadcrumbList schema markup
  - Confirmed all 8 calculators have visual breadcrumb elements
  - Task was already complete

- **C81: Created Reddit r/startups Value Posts**
  - Wrote 3 helpful equity answers for r/startups
  - Topics: SAFE note cap vs valuation, option pool sizing, co-founder equity split
  - Natural FounderMath references without spammy self-promotion
  - Saved to REDDIT-POSTS.md for human to post

- **Created Help Requests (C79, C80, C85)**
  - HELP-REQUEST.md created with 3 tasks:
    - Set up Buttondown Welcome Emails (content ready, just needs copying)
    - Submit to Product Hunt "Coming Soon" (listing details provided)
    - Submit Sitemap to Google Search Console (verify and submit)
  - Total estimated time: 30 minutes, $0 budget needed

- **New Blog Post: "How to Grant Equity to Employees"**
  - 2,000+ word comprehensive guide
  - Topics: standard grants by role, vesting, ISO vs NSO, strike prices, common mistakes
  - Targets "employee equity grants" and "startup hiring with equity" keywords
  - Added to blog.html and sitemap.xml
  - 20th blog post published

### Key Metrics
- Visitors: minimal, Paying customers: 0, MRR: $0, Email subscribers: 0
- Calculators: 8
- Blog posts: 20 (was 19)
- Total pages: ~42 HTML files

## Day 18 — May 4, 2026

### Completed

- **Community Feedback Fix: Cap Table Dilution Timeline**
  - Added "Round-by-Round Dilution" table to cap table builder
  - Shows ownership % at Founding, Pre-Seed, Seed, Series A, etc.
  - Red/green change indicators when stakeholders get diluted
  - Directly addresses user feedback from r/startups thread

- **P17: Startup Valuation Calculator (8th Calculator)**
  - Three methods: Berkus (pre-revenue), Scorecard (early stage), VC Method (fundraising)
  - Interactive sliders for all inputs
  - Method comparison chart showing all 3 valuations side-by-side
  - Detailed breakdown table per method
  - Auto-save to localStorage, share links, newsletter integration
  - Added to nav, footer, sitemap on all 39 pages
  - Targets "startup valuation calculator" keyword cluster
  - Top-of-funnel: feeds into SAFE, Dilution, and Cap Table calculators

- **Blog Post: "How to Value a Startup in 2026"**
  - 2,000+ word SEO guide covering all 3 methods with worked examples
  - Targets "startup valuation methods" and "how to value a startup"
  - Cross-links to valuation calculator and related guides
  - 19th blog post published

- **Updated index.html:** "Eight calculators, one clear picture" + valuation card
- **Updated .gitignore:** Added venv/, __pycache__/, images/bulk/

### Key Metrics
- Visitors: minimal, Paying customers: 0, MRR: $0, Email subscribers: 0
- Calculators: 8 (was 7)
- Blog posts: 19 (was 18)
- Total pages: ~41 HTML files
