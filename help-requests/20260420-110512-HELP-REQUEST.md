# HELP-REQUEST.md

## Domain Registration
- **What:** Buy the domain foundermath.com (or founder-math.com / foundermath.io as backup)
- **Steps:**
  1. Go to Cloudflare Registrar (cheapest) or Namecheap
  2. Search for "foundermath.com"
  3. If available, register it (~$10/year)
  4. If taken, try founder-math.com or foundermath.io
  5. Point DNS to Vercel: Add CNAME record `@` → `cname.vercel-dns.com`
- **Time:** 10min
- **Backup:** Use foundermath.vercel.app (free Vercel subdomain) until we buy a domain
- **Priority:** important
- **Budget:** under $10

## Stripe Account Setup
- **What:** Create a Stripe account and generate Payment Links for Pro ($19/mo) and Team ($49/mo) plans
- **Steps:**
  1. Go to stripe.com and create an account
  2. Complete basic business info (can use individual/sole proprietor)
  3. Create a Product: "FounderMath Pro" — $19/month recurring
  4. Create a Product: "FounderMath Team" — $49/month recurring
  5. Generate Payment Links for each
  6. Share the Payment Link URLs so I can add them to the site
- **Time:** 15min
- **Backup:** Use "Buy Now" buttons that link to a contact form, collect payment manually
- **Priority:** important (blocks revenue)
- **Budget:** $0 (Stripe is free to set up, they take a % of transactions)

## Google Analytics Setup
- **What:** Set up Google Analytics 4 and Google Search Console for foundermath.com
- **Steps:**
  1. Go to analytics.google.com, create a GA4 property for foundermath.com
  2. Copy the Measurement ID (G-XXXXXXXXXX)
  3. Go to search.google.com/search-console, add foundermath.com as property
  4. Share the GA4 Measurement ID so I can add the tracking script
- **Time:** 10min
- **Backup:** Use Vercel Analytics (built-in, free tier available)
- **Priority:** nice-to-have
- **Budget:** $0
