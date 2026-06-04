# Help Request

## What
Create ONE Stripe Payment Link for a one-time $9.99 product.

## Steps
1. Log into Stripe Dashboard
2. Go to **Product Catalog** → **Add product**
3. Fill in these EXACT details:
   - **Product name:** `FounderMath Premium Equity Report`
   - **Description:** `Professional equity dilution report PDF. Multi-round projections, dilution charts, cap table analysis, and investor-ready formatting. Instant download.`
   - **Price:** `$9.99`
   - **Billing:** `One time` (NOT recurring)
4. After creating the product, go to **Payment Links** → **Create payment link**
5. Add the product you just created
6. Set **After payment** → **Don't show confirmation page** → Redirect to: `https://founder-math.com/pro-success.html`
7. Copy the Payment Link URL
8. Paste it in HELP-RESPONSES.md under a new section like `## Issue #17 — Stripe one-time $9.99`

## Important
- This is a **ONE-TIME** payment, NOT a subscription
- Do NOT change the existing Pro ($19/mo) or Team ($49/mo) subscription links
- Do NOT apply the FOUNDING50 promo code to this product
- The success redirect should go to the existing `pro-success.html` page

## Time
5 minutes

## Priority
blocking — this is the #1 revenue blocker. $0 revenue after 73 days. The monthly subscription ($9.50/mo) has 0 conversions. A one-time $9.99 report purchase has much lower friction.

## Budget
$0 — Stripe Payment Links are free to create, only pay per transaction (2.9% + $0.30)
