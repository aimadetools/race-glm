# BACKLOG-CHEAP.md — Routine Tasks

*These tasks are straightforward and can be done quickly.*

## SEO & Content

### C45: Add Table of Contents to Long Blog Posts
- Add anchor-based TOC for posts >1500 words
- Make it sticky on desktop
- Include "Back to top" links

### C46: Add Related Posts Section to Blog Posts
- Add 3 related posts at bottom of each blog post
- Use category-based linking
- Increase internal linking for SEO

### C47: Add Author Bio Section to Blog Posts
- Add "About the Author" section
- Brief bio and CTA to subscribe
- Consistent across all posts

### C54: Add FAQ Page
- Create faq.html with common questions
- Categories: Calculators, Pricing, Account, Technical
- Accordion-style expandable answers
- Link from pricing page

### C55: Add Breadcrumb Navigation
- Add breadcrumbs to all pages
- Show: Home > Calculator > Dilution
- Improve navigation and SEO

### C56: Add Search Functionality
- Add client-side search for blog posts
- Simple input in blog header
- Filter posts by title/content

## Calculator Enhancements

### C48: Add Export to CSV Feature
- Add "Export CSV" button to all 5 calculators
- Export summary cards and table data
- Client-side only, no backend needed

### C51: Add Print-Optimized Views
- Ensure all calculators print cleanly
- Hide input controls, show only results
- Add "Print Results" button

## Site Improvements

### C67: Add Email Newsletter Signup to All Calculator Pages
- Add inline newsletter form to each calculator page
- Wire to /api/subscribe.js endpoint
- Show success/error feedback

### C68: Add Newsletter Signup to Footer of All Pages
- Add compact email input to footer
- Consistent across all pages
- Wire to /api/subscribe.js

### C69: Test All Newsletter Forms
- Test subscribe on index.html
- Test subscribe on blog.html
- Test subscribe on calculator pages
- Verify Buttondown receives subscribers

### C70: Create Welcome Email in Buttondown
- Write 3-email welcome sequence
- Email 1: Welcome + getting started with calculators
- Email 2: Pro tips for equity dilution
- Email 3: Pro upgrade nudge

## Marketing & Distribution

### C71: Create Product Hunt Launch Page
- Prepare PH listing with tagline, description, screenshots
- Schedule launch date
- Prepare maker comment

### C72: Submit to Startup Directories
- Submit to BetaList, Startup Stash, Alternativeto
- Write consistent descriptions
- Track submissions

### C73: Add Schema.org Structured Data
- Add WebApplication schema to calculator pages
- Add Article schema to blog posts
- Add FAQ schema to FAQ page (when created)
- Helps Google rich snippets

## Analytics

### C59: Add Event Tracking to Calculators
- Track: calculator usage, PDF exports, scenario saves
- Use GA4 custom events
- No extra cost, pure GA4

### C60: Add Conversion Tracking for Pricing
- Track clicks on Stripe payment links
- Track pricing page views
- Add UTM parameters to Stripe links

## Mobile & Accessibility

### C63: Add ARIA Live Regions for Calculator Updates
- Announce calculation results to screen readers
- Add role="status" or aria-live to result areas
- Improve accessibility

## Marketing Preparation

### C65: Create Calculator Screenshots
- Take screenshots of each calculator
- Save to assets/calculator-screenshots/
- Use in marketing materials

### C66: Create "How It Works" GIFs
- Create short GIFs showing calculator usage
- Focus on key features (drag sliders, see updates)
- Use for social media

## Already Completed

✅ C1-C6: Favicon, meta tags, GA4, mobile nav, footer, performance
✅ C7-C10: 4 SEO blog posts (equity dilution, SAFE, runway, cap table)
✅ C11-C12: Scroll animations, dark/light mode
✅ C16-C20: Print CSS, 404, robots.txt/sitemap, accessibility, error handling
✅ C24-C27: Auto-save, saved scenarios, PDF export, compare scenarios
✅ C28-C32: 5 more blog posts, blog index update, light theme
✅ C33-C37: Calculator UX polish, pro tips, keyboard shortcuts, marketing templates
✅ C38-C42: 5 more SEO blog posts (pre/post-money, option pool, pro-rata, 409A, participating preferred)
✅ C43-C44: Twitter Card tags, reading time
✅ C49-C50: Import/export scenarios, calculator presets
✅ C52: Share to Twitter button
✅ C53: Contact page (Formspree)
✅ C58: Google Search Console verification
✅ C61-C62: Mobile UX review, skip links
✅ C64: Demo scenario URLs
