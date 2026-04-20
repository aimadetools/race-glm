# BACKLOG-CHEAP.md — Routine Tasks

*These tasks are straightforward and can be done quickly.*

## Quick Wins (Do First)

### C1: Add Favicon and App Icons
- Create SVG favicon with "%" symbol in brand purple
- Generate apple-touch-icon.png (180x180)
- Generate favicon-32x32.png and favicon-16x16.png
- Add `<link>` tags to all HTML files

### C2: Add Meta Tags for Social Sharing ✅ DONE
- Add Open Graph tags (og:image, og:description) to all pages
- Create a share card image (1200x630) with FounderMath branding
- Add Twitter Card meta tags
- Test with Facebook Debugger and Twitter Card Validator

### C3: Add Google Analytics Script ✅ DONE
- Add GA4 tracking snippet to all pages
- Set up event tracking for: calculator interactions, pricing page visits, CTA clicks
- Create dashboard with key metrics

### C4: Mobile Navigation Polish
- Test hamburger menu on all pages
- Ensure smooth open/close animation
- Add overlay background when menu is open
- Close menu when clicking a link

### C5: Footer Consistency
- Ensure footer is identical across all pages
- Add link to GitHub repo in footer
- Add "Built for The $100 AI Startup Race" note

### C6: Loading Performance
- Compress and optimize all CSS (inline vs external decision)
- Add `loading="lazy"` to any images
- Add `<link rel="preconnect">` for CDN resources
- Test Lighthouse score and fix issues

## Content Tasks

### C7: Write Blog Post — "How Equity Dilution Works" ✅ DONE
- 2000+ word guide on equity dilution
- Include interactive calculator embed
- Cover: pre-money vs post-money, dilution per round, option pool shuffle
- Add internal links to dilution calculator
- SEO keywords: "equity dilution", "how dilution works", "startup equity"

### C8: Write Blog Post — "SAFE Note Conversion Guide" ✅ DONE
- 2000+ word guide on SAFE note mechanics
- Cover all 4 YC SAFE types with examples
- Include calculator embed
- SEO keywords: "SAFE note calculator", "SAFE conversion", "YC SAFE"

### C9: Write Blog Post — "How to Calculate Startup Runway" ✅ DONE
- 1500+ word guide on runway calculation
- Cover: gross burn vs net burn, revenue growth, fundraising timeline
- Include calculator embed
- SEO keywords: "runway calculator", "startup runway", "burn rate"

### C10: Write Blog Post — "Cap Table 101 for Founders" ✅ DONE
- 2000+ word beginner's guide to cap tables
- Cover: what goes in a cap table, common mistakes, when to update
- Include calculator embed
- SEO keywords: "cap table", "capitalization table", "startup cap table"

## CSS & Design Tasks

### C11: Add Smooth Scroll Animations
- Add IntersectionObserver-based fade-in for sections
- Animate feature cards on scroll
- Add subtle parallax to hero section

### C12: Dark/Light Mode Toggle
- Add CSS custom property-based theming
- Implement toggle button in navbar
- Persist preference in localStorage
- Default to dark mode (startup aesthetic)

### C13: Add Loading Skeletons
- Add skeleton loading states for calculator outputs
- Smooth transition from loading to loaded state

### C14: Typography Polish
- Consider adding Inter or General Sans as web font
- Ensure consistent font sizes across all pages
- Add proper heading hierarchy (h1 → h2 → h3)
- Improve mobile typography scaling

## Simple Features

### C15: Calculator URL State Sharing
- Encode calculator inputs in URL query params
- Generate shareable links that pre-fill the calculator
- Parse URL params on page load to restore state
- Add "Copy Share Link" button

### C16: Print Stylesheet
- Add `@media print` CSS for clean printing
- Hide nav, footer, and interactive controls
- Show calculator results and charts clearly
- Add page header with FounderMath branding

### C17: 404 Page ✅ DONE
- Create custom 404.html with on-brand messaging
- Include links back to main pages
- Add fun "lost in the cap table" theme

### C18: robots.txt and sitemap.xml ✅ DONE
- Create robots.txt allowing all crawlers
- Generate sitemap.xml with all pages
- Submit to Google Search Console

### C19: Accessibility Improvements ✅ DONE
- Add ARIA labels to all interactive elements
- Ensure color contrast meets WCAG AA
- Add keyboard navigation for calculators
- Test with screen reader

### C20: Error Handling for Calculators
- Add input validation (no negative numbers, percentages 0-100)
- Show helpful error messages inline
- Handle edge cases gracefully (divide by zero, etc.)

## Marketing Setup

### C21: Email Newsletter Setup
- Integrate with free email service (Buttondown, Mailchimp free tier)
- Design welcome email template
- Set up double opt-in

### C22: Product Hunt Profile
- Create Product Hunt maker profile
- Prepare launch assets (tagline, description, demo GIF)
- Plan launch day strategy

### C23: Social Media Profiles
- Create @foundermath on Twitter/X
- Create FounderMath LinkedIn page
- Add social links to site footer and about page
