# Offer Locations Inventory — All 3 Competing Offers

**Purpose:** Track every place where the 3 competing monetization offers appear. Use this for future offer simplification, A/B testing, and conversion optimization.

**Last Updated:** Day 91 (June 17, 2026)

---

## The 3 Competing Offers

1. **$9.99 One-Time** — Premium Equity Report (single PDF + recommendations + benchmarks)
2. **$9.50/mo Pro** — Founding 50 pricing (50% off forever, unlimited tools/scenarios/PDFs)
3. **Free Email** — Unlocks dilution chart only (weekly newsletter, no PDF/recs)

---

## $9.99 One-Time Offer Locations

### Primary Sales Page
- **equity-report-premium.html** — Standalone sales page
  - Hero CTA: "Buy Full Report — $9.99"
  - Table CTA: "Buy Full Report — $9.99"
  - Bottom CTA: "Buy Full Report — $9.99"
  - FAQ clearly explains: chart = free, recs+PDF = $9.99

### Report Generator Page (equity-report.html)
- **5 A/B test variants** — Each has same paywall structure:
  - Premium gate overlay: "Unlock Full Report — $9.99"
  - Subtitle: "One-time • Instant access • No subscription"
  - "Or get unlimited reports with Pro — $9.50/mo →"
  - FAQ entry: "What's the difference between $9.99 one-time and Pro?"

### Internal Cross-Sells
- **offer-analyzer.html** — "Or get a professional equity report — $9.99 one-time"
- **carta-alternatives.html** — "Premium Report — $9.99" button

### Success/Confirmation Pages
- **equity-report-success.html** — Shows "$9.99" value confirmation
- **pro-success.html** — GA4 purchase event tracking: `{ value: 9.99 }`

### Metadata/SEO
- **equity-report.html** meta description: "...Full report with charts and PDF available for $9.99 one-time."
- **equity-report.html** OG description: Same as meta

### Stripe Link
- **Payment URL:** `https://buy.stripe.com/5kQ28r2CsdhsbwufsHeEo0h`
- **UTM params:** ?utm_source=founder-math&utm_medium={page}&utm_campaign={location}

---

## $9.50/mo Pro Offer Locations

### Dedicated Founding 50 Page
- **founding.html** — Full landing page for Founding 50 offer
  - Hero: "Only 50 founders will get Pro at $9.50/mo forever"
  - Price display: "$19" crossed out, "$9.50/mo" prominent
  - CTA: "Claim Founding Spot — $9.50/mo"
  - FAQ: "Your price is locked at $9.50/mo forever"

### Pricing Page
- **pricing.html** — Main pricing tiers page
  - Pro card: "Get Pro — $9.50/mo (Founding 50)"
  - Stripe link with FOUNDING50 promo code prefilled

### Report Generator Page (equity-report.html)
- **Pro upsell in premium gate:** "Upgrade to Pro — $9.50/mo (Founding 50)"
- **FAQ comparison:** Explains $9.99 vs $9.50/mo tradeoffs

### Tool-Side Promos
- **equity-score.html** — "Full Analysis — $9.50/mo (Pro)"
- **equity-tax-calculator.html** — "Lock in 50% Off Pro Forever →"
- **dilution-timeline.html** — "Lock in 50% Off Pro Forever →"
- **safe.html** — "Lock in $9.50/mo forever (normally $19/mo). Only 50 spots."

### Homepage Mentions
- **index.html** — "Founding 50: Get Pro at 50% off forever — Only 50 spots at $9.50/mo"

### Usage Prompt Modal (usage-prompt.js)
- Inline text: "Save scenarios, export PDFs — $9.50/mo forever"

### Blog Post CTAs
- **blog/posts/how-to-read-stock-option-grant.html** — "Get Pro for $9.50/mo (50% off)"
- **blog/posts/employee-stock-options-explained.html** — Same
- **blog/posts/startup-employee-equity-guide.html** — Same

### Pro Gating Modal (pro-gating.js)
- **Pro upgrade link:** `https://buy.stripe.com/8x26oH3Gw4KW2ZY0xNeEo06?prefilled_promo_code=FOUNDING50`

### Stripe Link
- **Payment URL:** `https://buy.stripe.com/8x26oH3Gw4KW2ZY0xNeEo06?prefilled_promo_code=FOUNDING50`
- **UTM params:** Varies by page

---

## Free Email Offer Locations

### Report Generator Page (equity-report.html)
- **Paywall copy:** "Enter your email to unlock your dilution CHART free, plus weekly equity insights"
- **Form note:** "Free basic summary. Dilution chart unlocked with your email — recommendations + PDF are $9.99."
- **Premium gate subtitle:** "Unlocks your dilution chart + weekly insights (unsubscribe anytime). Recommendations & PDF need the $9.99 report."

### Premium Sales Page (equity-report-premium.html)
- **FAQ answer:** "You can generate your equity dilution report and see your full dilution chart free — just enter your email. Your personalized recommendations, industry benchmark comparison, and the downloadable investor-ready PDF are the $9.99 Professional Report."

### Comparison Content
- **carta-vs-pulley-foundermath.html** — "$0/month for all 25+ tools, interactive charts, and glossary. Pro: $9.50/month for saving scenarios, exporting PDFs..."

---

## Competitor Comparison Pages

### carta-vs-pulley-foundermath.html
- Mentions all 3 tiers:
  - Free: "$0/month for all 25+ tools, interactive charts, and glossary"
  - Pro: "$9.50/month (Founding 50) for saving scenarios, exporting PDFs"

---

## Stripe Payment Links Summary

| Offer | URL | Promo Code |
|-------|-----|------------|
| $9.99 One-Time | `https://buy.stripe.com/5kQ28r2CsdhsbwufsHeEo0h` | None |
| $9.50/mo Pro | `https://buy.stripe.com/8x26oH3Gw4KW2ZY0xNeEo06` | `FOUNDING50` |
| Team | `https://buy.stripe.com/cNicN5dh691ceIG5S7eEo05` | None |

---

## Files to Update When Changing Offers

If you change pricing or offer structure, update these files:

### Core Files
- `equity-report.html` — Report generator with paywall gating
- `equity-report-premium.html` — Standalone sales page
- `founding.html` — Founding 50 landing page
- `pricing.html` — Main pricing page

### Cross-Sell Files
- `offer-analyzer.html`
- `carta-alternatives.html`
- `carta-vs-pulley-foundermath.html`

### Tool-Side Promos
- `equity-score.html`
- `equity-tax-calculator.html`
- `dilution-timeline.html`
- `safe.html`

### JavaScript Files
- `pro-gating.js` — Pro modal Stripe links
- `usage-prompt.js` — Usage prompt pricing text

### Success Pages
- `equity-report-success.html`
- `pro-success.html`

### Blog Templates
- `blog/posts/how-to-read-stock-option-grant.html`
- `blog/posts/employee-stock-options-explained.html`
- `blog/posts/startup-employee-equity-guide.html`

---

## A/B Testing Notes

- **equity-report.html** has 5 paywall variants (control, b, c, d, premium_gate)
- **ab-test-pricing.js** tests Pro pricing ($19 vs $9.50) — currently paused/disabled
- Founding 50 offer is a fixed-price promo (not A/B tested)

---

## Conversion Tracking

### GA4 Events
- `paywall_click` — tracks clicks on $9.99 or Pro CTAs from paywall
- `pricing_click` — tracks pricing page clicks
- `premium_report_buy` — tracks $9.99 purchase intent
- `founding50_click` — tracks Founding 50 signups
- `purchase` — tracks completed $9.99 purchases

### UTM Parameters
- `utm_source=founder-math`
- `utm_medium={page_name}`
- `utm_campaign={button_location}`

---

## Notes for Offer Simplification

**Potential confusion points:**
1. Users see 3 offers simultaneously on equity-report.html ($9.99 one-time, $9.50/mo Pro, free email)
2. $9.99 one-time vs $9.50/mo Pro comparison requires reading FAQ
3. Founding 50 scarcity (50 spots) vs $9.99 evergreen pricing
4. Free tier gives chart only, but premium page mentions "free dilution chart" which could be confused with full report

**Simplification options:**
- A/B test removing one offer from equity-report.html paywall
- Test $9.99 only on premium page, remove from report generator
- Test anchoring: make $9.99 the primary offer, Pro secondary
- Test bundling: $9.99 includes 1 month of Pro

**Before changes:** Run `node test-paywall-gating.js` to verify gating logic still holds.
