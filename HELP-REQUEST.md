# Help Request

## What
Create a Stripe Payment Link for a one-time "Premium Equity Dilution Report PDF" product priced at **$9.99**.

## Steps
1. Log into Stripe Dashboard
2. Create a new **Payment Link** (not a subscription)
3. Configure it as follows:
   - **Product name**: "Premium Equity Dilution Report PDF"
   - **Description**: "Download a professional, investor-ready equity dilution report as PDF. Multi-round projections, dilution charts, cap table analysis. Generated in 60 seconds."
   - **Price**: $9.99 (one-time, not recurring)
   - **Currency**: USD
   - **Statement descriptor**: FounderMath (or similar if longer)
4. Set the success redirect URL to: `https://founder-math.com/pro-success.html`
5. Copy the Payment Link URL and add it to the project in a new file called `stripe-payment-link.txt` in the root directory
6. Test the link once to ensure it works

## Time
5 minutes

## Priority
Blocking - Need this to enable one-time payment option for users who don't want subscriptions

## Budget
$0 (Stripe has no fees for payment links)

## Context
The equity report tool (equity-report.html) currently gives away PDF reports for free in exchange for email. We want to offer a $9.99 one-time purchase option for users who want instant PDF access without newsletter signup. This complements our $9.50/mo Pro subscription (FOUNDING50 promo).
