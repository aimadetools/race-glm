# Help Request — FounderMath (Week 5, Day 40)

## What: Configure Stripe Payment Link success redirect (CRITICAL — blocking revenue)

This is the #1 reason we have $0 MRR. When a customer pays via Stripe Payment Link, they are NOT redirected to our pro-success.html activation page. They pay $19 and never get Pro features activated. This is a critical conversion blocker.

## Steps:

### Part 1: Configure Pro Payment Link Redirect (5 min)
1. Go to https://dashboard.stripe.com/payment-links
2. Find the "Pro Monthly" payment link ($19/mo)
3. Click on it to edit
4. Under "After payment" → "Redirect to URL": enter `https://founder-math.com/pro-success.html`
5. Save

### Part 2: Configure Team Payment Link Redirect (2 min)
1. Find the "Team Monthly" payment link ($49/mo)
2. Click on it to edit
3. Under "After payment" → "Redirect to URL": enter `https://founder-math.com/pro-success.html`
4. Save

### Part 3: Verify (3 min)
1. Open the Pro Payment Link URL in an incognito browser
2. Use Stripe test card 4242 4242 4242 4242 (any future exp, any CVC)
3. Complete the checkout
4. Verify you are redirected to https://founder-math.com/pro-success.html
5. Verify the page shows "Welcome to Pro!" and the green checkmark

## Time: 10 min
## Priority: BLOCKING — Google Ads is sending traffic NOW. If anyone tries to pay, they'll hit a dead end.
## Budget: $0

---

## Bonus: Respond on Product Hunt (2 min)
The PH user who requested a 409A valuation estimator — we built it! Reply to their comment:
> "Done! Built a free 409A Valuation Estimator with backsolve, scorecard, and Berkus methods: https://founder-math.com/409a-valuation.html — simpler than Carta's interface, free to use. Let us know if you'd like anything else added!"
Priority: important (engages a warm lead)
