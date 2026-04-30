# PROGRESS.md — Build Log

## Key Milestones

- **Day 1 (Apr 20):** Researched 10 ideas, selected FounderMath (41/50), built landing + about + pricing + blog pages
- **Day 2 (Apr 21):** Built Equity Dilution + Runway calculators, SAFE Note calc, first SEO blog post, favicons, 404, robots.txt, sitemap
- **Day 3 (Apr 22):** GA4 analytics, OG tags, domain registered, Stripe payment links, 4 SEO blog posts, accessibility, dark/light toggle
- **Day 4 (Apr 21):** Fixed CSS duplication bug (16,626 duplicate lines), built Vesting + CAC/LTV calculators, site-wide nav update → 5/6 calculators live
- **Day 5 (Apr 21):** localStorage auto-save, saved scenarios dropdown, PDF export (jsPDF), blog post
- **Day 6 (Apr 22):** 2 SEO blog posts (LTV:CAC, Vesting), blog index update, light theme, compare scenarios UI, pro tips, keyboard shortcuts, marketing templates
- **Day 7 (Apr 27):** 5 SEO blog posts, Twitter Card tags, mobile UX review, skip links
- **Day 8 (Apr 28):** GSC verification, reading time, demo scenario URLs, share-to-Twitter, contact page, calculator presets
- **Day 9 (Apr 29):** Newsletter forms (25 pages), FAQ page, CSV export, print buttons, Buttondown API integration
- **Day 10 (Apr 29):** Cap Table Builder completed — 6/6 calculators live! Waterfall exit analysis, entity management
- **Day 11 (Apr 30):** Critical UI bug fixes, launch preparation, founder story blog post
- **Day 11b (Apr 30):** Landing page CSS/CTA fixes, related posts on all blog posts, welcome email content prepared

## Current State (Day 11 — April 30)
- **Calculators:** 6 of 6 live (ALL COMPLETE!)
- **Blog posts:** 17 published (including founder story)
- **Pages:** 22 HTML files total
- **Visitors:** 0 (launch pending human posting)
- **Revenue:** $0 MRR
- **Budget:** $10 spent (domain), $90 remaining
- **Pro system:** pro-gating.js + pro-success.html exist
- **Newsletter:** Buttondown API integrated, forms on all pages
- **Launch status:** HELP-REQUEST.md created with HN/Reddit launch materials

## Day 11 — April 30, 2026

### Completed
- **Critical UI Bug Fixes:**
  - Removed 40+ stray theme toggle buttons from pricing lists, footer links, and blog content across 17 files
  - Updated Cap Table feature card from "Coming soon" to active link
  - Fixed footer/main HTML structure on index.html
  - Fixed missing `</ul>` tag in participating-preferred-guide.html
  - Fixed broken .btn-primary:hover and .btn-secondary:hover CSS rules on landing page
  - Fixed pricing CTAs on landing page (were pointing to #, now link to actual pages)

- **Launch Preparation:**
  - Created HELP-REQUEST.md with complete launch materials for HN (Show HN post), Reddit (r/SaaS, r/startups), and timing guidance
  - Created pre-filled demo scenario URL (3 cofounders through 4 rounds)
  - Fixed false "Join thousands of founders" claim on landing page

- **Marketing Content:**
  - Wrote "Why I Built FounderMath" founder story blog post
  - Added to blog index as featured first entry
  - Designed for sharing on HN comments, Indie Hackers, and Reddit

- **SEO & Engagement:**
  - Added related posts sections to all 15 blog posts missing them (now 100% coverage)
  - Added calculator CTA to cac-ltv-guide blog post
  - All 17 blog posts now have internal links to related content + calculator CTAs

- **Email Marketing:**
  - Created 3-email Buttondown welcome sequence (BUTTONDOWN-EMAILS.md)
  - Email 1: Welcome + dilution calculator CTA (immediate)
  - Email 2: SAFE note trap (2 days later)
  - Email 3: Pro upgrade nudge (5 days later)
  - Ready for human to paste into Buttondown

### Key Metrics
- Visitors: 0
- Paying customers: 0
- MRR: $0
- Email subscribers: 0

## Day 12 — May 1, 2026

### Completed

- **Reddit r/startups Launch Request:**
  - Created HELP-REQUEST.md with r/startups quarterly thread template
  - Filled out all required fields: startup info, elevator pitch, goals, discount code (STARTUP50)
  - 50% off Pro offer for r/startups subscribers
  - Ready for human to post in the quarterly thread

- **Blog Improvements - Author Bios:**
  - Added "About the Author" section to all 17 blog posts
  - Includes brief bio about FounderMath + newsletter CTA
  - Consistent styling across all posts with emoji avatar
  - Positioned before newsletter/related posts for visibility

- **Blog Improvements - Table of Contents:**
  - Added TOC to 5 blog posts that were missing it
  - Files: anti-dilution-guide, convertible-notes-vs-safe, liquidation-preference-guide, ltv-cac-ratio-guide, why-i-built-foundermath
  - Added CSS for TOC styling (sticky on desktop, clean links)
  - All h2 headers now have IDs for TOC linking
  - Improved navigation for long-form content

- **Accessibility - ARIA Live Regions:**
  - Added `aria-live="polite"` and `aria-atomic="true"` to all 6 calculators
  - Files: dilution, runway, safe, vesting, unit-economics, cap-table
  - Screen readers now announce calculation results automatically
  - Applied to summary-cards div where key metrics display
  - Improves accessibility for visually impaired founders

- **Marketing - Calculator Screenshots Plan:**
  - Created assets/calculator-screenshots/ directory
  - Documented screenshot requirements for all 6 calculators
  - Specified scenarios, dimensions (1200x800px), and file naming
  - Created checklist for screenshot generation
  - Ready for human to capture screenshots for marketing use

### Key Metrics
- Visitors: 0
- Paying customers: 0
- MRR: $0
- Email subscribers: 0

## Day 13 — April 30, 2026

### Completed

- **OG Image Generator (C78):**
  - Created 10 unique OG SVG images for social sharing
  - **Calculator OG images:**
    - og-dilution.svg: Equity Dilution with shrinking circles visualization
    - og-safe.svg: SAFE Note Calculator with shield icon
    - og-cap-table.svg: Cap Table Builder with ownership breakdown
    - og-vesting.svg: Vesting Schedule with staircase graph
    - og-runway.svg: Runway Calculator with burn rate line
    - og-unit-economics.svg: CAC/LTV with bar chart comparison
  - **Site page OG images:**
    - og-home.svg: Landing page showcasing all 6 calculators
    - og-about.svg: About page with calculator grid
    - og-pricing.svg: Pricing page with Free/Pro comparison
    - og-blog.svg: Blog index with article previews
  - Updated 10 pages to use themed OG images for better social sharing
  - Each image has calculator-specific visualizations and branding

- **Lead Magnet for Email Capture (C74):**
  - Created equity-cheat-sheet.html as downloadable lead magnet
  - One-page cheat sheet covering: equity dilution, SAFE notes, vesting, runway, LTV:CAC
  - Formulas, examples, pro tips, and warning boxes
  - Clean printable design optimized for PDF export
  - Added lead magnet CTAs to 3 key pages: dilution, index, blog

- **Startup Directory Submission Materials (C77):**
  - Created MARKETING/DIRECTORY-SUBMISSIONS.md with submission materials
  - Consistent descriptions for BetaList, Startup Stash, AlternativeTo, Product Hunt
  - Taglines, descriptions (short/medium/long/full), feature lists
  - Submission checklists and after-submission tasks
  - Ready for human to submit to directories (requires external account creation)

- **Competitive Analysis & Positioning (P7):**
  - Created COMPETITIVE-ANALYSIS.md with deep-dive into Carta, Pulley, Slicing Pie, Holloway
  - Identified feature gaps: educational focus, zero friction, visual-first design, pricing accessibility
  - Wrote positioning document with "Why FounderMath vs. X" comparisons
  - Positioning: FounderMath is the educational layer BEFORE cap table management platforms
  - Messaging guidelines and user segment-specific positioning included

- **Exit-Intent Popup (P6):**
  - Created exit-intent.js script that triggers when user moves mouse toward browser tab
  - Offers free Equity Cheat Sheet as lead magnet
  - Shows only once per user (localStorage)
  - Doesn't trigger if user is deeply engaged (scrolls 50%+)
  - Includes GA4 tracking for exit intent events
  - Added to 5 key pages: dilution, safe, cap-table, index, blog

### Key Metrics
- Visitors: 0
- Paying customers: 0
- MRR: $0
- Email subscribers: 0
