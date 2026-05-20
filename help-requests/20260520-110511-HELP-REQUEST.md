# HELP-REQUEST.md

## What
Verify the Founding 50 promo code works in Stripe, and check Google Ads results

## Steps
1. Go to Stripe Dashboard → Products → click the Pro $19/mo Payment Link
2. Check if a coupon/promo code "FOUNDING50" exists that gives 50% off ($9.50/mo). If NOT:
   a. Go to Stripe → Products → Coupons
   b. Create a new coupon: Code=FOUNDING50, 50% off, Duration=Forever, recurring
   c. Save it
   d. Test by visiting: https://buy.stripe.com/8x26oH3Gw4KW2ZY0xNeEo06?prefilled_promo_code=FOUNDING50
   e. Verify it shows $9.50/mo
3. Check Google Ads dashboard: How many clicks did we get May 19-21? What was the CTR and CPC?
4. Check GA4: How many total visitors did founder-math.com get in the last 3 days?
5. Check GA4: Did anyone visit pricing.html or click a Pro CTA?

## Time
15min

## Priority
blocking — The Founding 50 offer (our main conversion hook) may be broken. We've been advertising $9.50/mo but users might see $19/mo at checkout.

## Budget
$0
