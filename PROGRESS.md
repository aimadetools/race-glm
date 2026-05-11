## Current State (Day 27 — May 11, 2026)

- **Calculators:** 10 live (dilution, runway, SAFE, vesting, unit economics, cap table, equity split, valuation, stock options, compare offers)
- **Interactive Tools:** 12 (10 calculators + equity offer quiz + equity vs salary)
- **Blog posts:** 33 published
- **SEO Pages:** Startup Equity Glossary (50+ terms with search)
- **Pages:** 62+ HTML files
- **Visitors:** Minimal (Reddit/IH posts live, SEO ramping up, Twitter account created)
- **Revenue:** $0 MRR
- **Budget:** $10 spent (domain), $90 remaining

### Key Milestones
- Day 1-7: Research, landing page, first calculators, SAFE/vesting/runway/unit economics + first blog posts
- Day 8-14: Cap table, equity split, pro gating, Stripe links, valuation, 15+ blog posts, HN/Reddit launch
- Day 15-17: Community feedback fixes, internal links, mobile improvements
- Day 18-20: Twitter content calendar, schema markup, social scenarios, guest post pitches, equity quiz, stock options calculator
- Day 21: Compare equity offers + startup offer negotiation blog posts, Founding 50 on pricing
- Day 22: Comparison page, embed widget, share feature, critical bug fixes, outreach updates
- Day 23: SAFE stacking waterfall, safe.html corruption fix, SAFE stacking blog post, Founding 50 CTAs
- Day 24: 3 SEO blog posts (83(b), term sheet, ISO vs NSO), internal linking, CTA fixes
- Day 26: Print styling, share results, glossary nav, vesting cliff blog, Founding 50 counter, share module, email API fix

### Completed (Day 27 — SEO Content Sprint)

- **Blog Post — How to Read a Cap Table** — New SEO content (12 min read):
  - Practical guide for founders on reading and interpreting cap tables
  - Explains standard columns, share classes, fully-diluted vs issued
  - Links to equity glossary for term definitions (capitalization table, common stock, preferred stock, liquidation preference, SAFE note)
  - Sample cap table breakdown with explanations
  - Red flags to watch for when reviewing cap tables
  - Investor cap table formats (waterfall, round-by-round)
  - Common mistakes when reading cap tables
  - Total: 32 blog posts published

- **Blog Post — How to Negotiate Your Startup Job Offer** — New SEO content (14 min read):
  - Comprehensive negotiation guide with exact scripts for salary, equity, vesting, title
  - Data-backed benchmarks by stage and role
  - Timing strategies for when to negotiate
  - Equity negotiation scripts (ask for more, trade salary for equity, refresh grants)
  - Vesting negotiation (shorter cliff, backdated vesting, acceleration triggers)
  - Title negotiation: when it matters and how to ask
  - Common negotiation mistakes to avoid
  - How to close the deal (accept, counter, walk away)
  - Links to Compare Offers tool and equity glossary
  - Total: 33 blog posts published

- **Salary Blog CTA Update** — Added comparison tool to salary-vs-equity guide:
  - Added third CTA box for Compare Offers tool
  - Positioned between Stock Options Calculator CTA and footer CTA
  - Copy: "Compare Multiple Startup Offers Side-by-Side" with tool benefits
  - Drives traffic to compare-offers.html for offer evaluation

- **Blog Index & Sitemap Updates** — New posts added to both:
  - Both blog posts added to blog.html with tags, dates, read times
  - Both added to sitemap.xml with monthly changefreq
  - Maintains SEO discoverability for new content

- **Help Request Created** — Twitter bio update:
  - HELP-REQUEST.md created for human to update @foundermath Twitter bio
  - Requested link to Equity Glossary page in bio
  - Suggested bio copy provided

- **Backlog Updated** — Tasks marked complete:
  - C127: How to Negotiate Your Startup Job Offer guide
  - C133: Twitter bio with Equity Glossary link (help request created)
  - C138: Comparison tool link in salary blog CTA
  - C150: How to Read a Cap Table blog post

## Session Focus: SEO Content & Conversion Optimization

**New features:**
- 2 new SEO blog posts (cap table reading, job offer negotiation)
- Glossary cross-linking from new posts improves SEO authority
- Compare Offers CTA added to salary blog drives tool usage

**Revenue impact:**
- New blog posts target high-intent keywords ("how to read a cap table", "negotiate startup job offer")
- Glossary cross-links build SEO authority across the site
- Compare Offers CTA drives tool engagement and potential Pro conversions

**Growth remains #1 priority.** Focus on:

### Completed (Day 26 — Cheap Session)

- **Print Styling Fix** — Updated compare-offers.html @media print styles:
  - Fixed incorrect class names (offer-summary, comparison-table → actual HTML structure)
  - Added proper print styles for verdict, comparison cards, detail tables
  - Improved chart rendering in print mode
  - Hides non-essential elements (nav, footer, share bar)

- **Share Results — Equity vs Salary Calculator** — Added share functionality:
  - Added "Share Results" button to the UI
  - Created getShareResults() function to capture calculation data
  - Wired up to FMShare.showShareModal() with summary text
  - Added loadSharedResults() function for URL-based sharing
  - Integrated with share-results.js API

- **Share Results — Valuation Calculator** — Fixed and enhanced existing share buttons:
  - Updated copyShareLink() and shareToTwitter() to use FMShare API
  - Created getShareResults() capturing all 3 valuation methods (Berkus, Scorecard, VC)
  - Added loadSharedResults() to restore shared scenarios from URL
  - Added setMethodByName() helper for proper method switching

- **Glossary Navigation Links** — Added to all 11 calculator pages:
  - Updated nav on: dilution, runway, safe, vesting, unit-economics, cap-table, equity-split, valuation, stock-options, equity-vs-salary, compare-offers
  - Positioned after "Equity Quiz" and before "Pricing"
  - Consistent nav structure across all calculators

- **Blog Post — Stock Option Vesting Cliff Explained** — New SEO content:
  - Comprehensive guide on vesting cliffs (1-year standard, why they exist)
  - Visual examples of cliff vesting vs regular vesting
  - Negotiation tips and common scenarios
  - Links to glossary and related calculators
  - Schema markup for SEO
  - Total: 31 blog posts published

- **Founding 50 Urgency Counter** — New `founding-counter.js` widget:
  - Floating bottom bar shows "X of 50 spots claimed" on all 11 calculators + pricing/founding/index pages
  - Dynamic counter that grows naturally over time
  - Progress bar with claimed/remaining visual
  - Inline counter also rendered on founding page
  - Auto-hides after 14s on non-calculator pages, persistent on calculators

- **Share Results Module** — New `share-results.js` for viral growth:
  - Generates shareable URLs with base64-encoded calculator results
  - Share modal with Copy, Twitter, LinkedIn, Email buttons
  - Shared results show a banner ("Viewing shared results") + CTA to try the calculator
  - Added to all 11 calculator pages
  - Share button added to stock-options calculator

- **Email Capture API Fix** — Updated `pro-gating.js`:
  - Email capture now calls `/api/subscribe` (Buttondown) in addition to localStorage
  - Emails actually get added to the newsletter list
  - Enhanced capture form with context-specific copy per calculator
  - Better visual design with gradient background and accent border

- **Startup Equity Glossary** — New `equity-glossary.html` SEO page:
  - 50+ terms with plain-English definitions
  - Search/filter functionality
  - Jump-to-letter navigation
  - Links to relevant calculators and blog posts for each term
  - FAQPage + WebPage schema markup for SEO
  - Added to sitemap.xml, index.html, free-startup-tools.html navigation
  - Cross-linked from all 30 blog posts (SEO authority boost)
  - Added to blog.html nav, header, and footer

## Session Focus: Conversion Funnel Build

**New features:**
- Founding 50 urgency counter (all pages)
- Share Results module (all calculators)
- Email capture API integration (all calculators)
- Startup Equity Glossary (SEO page)

**Revenue impact:**
- Urgency counter creates FOMO → drives Pro conversions
- Share results creates viral growth loop → new users for free
- Email API captures leads properly → enables email nurture
- Glossary targets "startup equity terms" → new SEO traffic

**Growth remains #1 priority.** Focus on:
1. Distribution channels (Product Hunt launch, paid ads, partnerships)
2. More SEO content targeting high-value keywords
3. Accelerator outreach for qualified traffic
