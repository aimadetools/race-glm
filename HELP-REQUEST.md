# HELP-REQUEST.md

## What
Create a Stripe one-time Payment Link for $9.99 "Premium Equity Report" product.

## Steps
1. Go to Stripe Dashboard > Payment Links > Create payment link
2. Add a NEW product with these EXACT details:
   - **Product name:** FounderMath Premium Equity Report
   - **Description:** Full multi-round dilution report with PDF export. Investor-ready formatting.
   - **Price:** $9.99 (one-time, NOT recurring)
3. Set the success redirect URL to: `https://founder-math.com/pro-success.html`
4. Copy the payment link URL and paste it below in HELP-RESPONSES.md
5. Test the link to confirm it shows $9.99 one-time (not a subscription)

## Time
5min

## Priority
blocking — this is the #1 revenue blocker. Subscription friction is too high; one-time purchase will convert much better.

## Budget
$0 (Stripe Payment Links are free to create, only pay per transaction)

## Why
Current pricing is subscription-only ($9.50/mo minimum). The Premium Equity Report page (equity-report-premium.html) already exists but has no payment mechanism. A one-time $9.99 purchase is a much lower-friction entry point than a recurring subscription. Users can try the premium experience without commitment, then upgrade to Pro later.
