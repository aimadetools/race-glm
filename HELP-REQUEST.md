# HELP-REQUEST — root file (the one the human reads)

> NOTE: This session (S82) shipped an in-calculator lead-capture feature AND
> fixed a critical bug: every email signup site-wide was silently failing
> (Buttondown renamed `email` → `email_address`; the old field 422'd all
> subscriptions). Email capture now WORKS. So the **welcome email** — the one
> automated touchpoint that can turn a fresh lead into a $9.99 sale — is now
> the highest-leverage thing to get right. That's the ask below.

## What
Paste a new welcome email into Buttondown so every new subscriber (from the offer-eval calculators and all other forms) gets a message that converts them to the $9.99 Premium Report. (~5 min)

## Why it matters now
Until today, zero emails were being captured (the bug). Leads will now start flowing from the 4 employee calculators (~70 intent-aligned visitors/week). The free Buttondown plan allows only ONE automated email — the welcome email — so this single message is the only automated shot at converting a free lead into $9.99 revenue. If it's weak, captured leads don't monetize.

## Steps
1. Log into Buttondown (the newsletter is already configured; `BUTTONDOWN_API_KEY` is live).
2. Go to **Settings → Emails → Welcome email** (or "Subscription confirmation / welcome").
3. Replace the body with the copy below (copy-paste). Set the subject line as shown.
4. Save. (No code, no Stripe changes — the $9.99 link already works: https://buy.stripe.com/5kQ28r2CsdhsbwufsHeEo0h )

**Subject line:**
```
Welcome — 3 things to do with your equity numbers
```

**Body (copy-paste):**
```
Hey — thanks for running the numbers on FounderMath.

You just saw what your equity is really worth. Most people stop there and
leave money on the table. Three things worth doing next:

1. CHECK IF YOU'RE ABOVE MARKET. Is your grant generous, fair, or below
   typical for your role and company stage? Run the free verdict:
   https://www.founder-math.com/offer-report.html

2. NEGOTIATE BEFORE YOU SIGN. Founders expect it and almost always have
   room. Ask for ~20% more equity, or a refresh grant after year one. Get
   any change in writing.

3. GET THE FULL PICTURE. The Premium Equity Report lays out your
   downside / base / upside / moonshot exit values, your complete vesting
   timeline, and a printable PDF — personalized with your numbers.
   One-time $9.99, 30-day money-back guarantee:
   https://buy.stripe.com/5kQ28r2CsdhsbwufsHeEo0h

Reply to this email with your grant details if you want a second pair of
eyes on whether it's a good offer.

— FounderMath
https://www.founder-math.com
```

## Time
5 min

## Priority
important (now that leads flow, this is the single automated conversion lever)

## Budget
$0

---

## Minor cleanup (optional, same session if easy)
While in Buttondown, please **delete the test subscriber** `s82verifyD@founder-math.com` (created during S82 verification). It inflates the subscriber count by 1. Subscribers list → find that address → delete.

## Still-pending lower-priority asks (do NOT re-do if already done; listed for visibility)
- Stack Exchange answers (3 copy-paste answers in `help-requests/` from Jun 23) — highest-EV free traffic channel.
- GA4 sessions + Stripe $9.99 snapshot export (filed Jun 17).
- Directory submissions: AlternativeTo, Startup Stash, Uneed (filed Jun 18).
