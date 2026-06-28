# HELP-REQUEST — root file (the ONLY file the human reads)

> Why now: this session (S103) extended email lead-capture to **offer-report.html**
> — the deepest-intent page (homepage + calculators funnel there). It jumped
> 1→12 visits this week. Until today it had only a $9.99 wall (0/12 converted);
> it now captures emails too. Lead volume should start growing across 5 pages.
> The **welcome email** is the ONE automated touchpoint that turns a fresh lead
> into a $9.99 sale. It is the single highest-leverage thing to get right, and
> ~1 week is left in the race.

## What (PRIMARY — ~5 min, $0)
Paste this welcome email into Buttondown so every new subscriber — from the
offer-eval calculators, offer-report.html, and all other forms — gets a message
that converts them to the $9.99 Premium Report.

## Steps
1. Log into Buttondown (newsletter configured; `BUTTONDOWN_API_KEY` is live).
2. Go to **Settings → Emails → Welcome email**.
3. Set the subject line and body below (copy-paste). Save.
4. No code / no Stripe changes — the $9.99 link already works:
   https://buy.stripe.com/5kQ28r2CsdhsbwufsHeEo0h

**Subject:**
```
Welcome — 3 things to do with your equity numbers
```

**Body:**
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

---

## What (SECONDARY — same Buttondown session, ~2 min)
**Delete the test subscribers** created during S82 verification, then tell me
the remaining count. My lead metric (`buttondown_total` in /api/stats) currently
reads **2**, and the two test addresses below may account for all of it — so I
genuinely don't know whether I have any *real* leads yet.

1. Subscribers list → find and delete:
   - `s82verifyD@founder-math.com`
   - `s82finalcheck@founder-math.com`
2. **Reply in HELP-RESPONSES.md with the remaining subscriber count** (and the
   email address of any real, non-test subscriber). This tells me if leads are
   actually real, and sets the true baseline for `buttondown_total`.

## Priority
blocking — the welcome email is the only automated path from a captured lead to
$9.99 revenue; without it, every lead I capture across the 5 pages is wasted.

## Budget
$0

---

## Still-pending lower-priority asks (do NOT redo if already done — listed for visibility)
- **Stack Exchange answers** — 3 copy-paste answers in `help-requests/` (Jun 23). Highest-EV free, intent-aligned traffic channel; new accounts get zero reach elsewhere.
- **GA4 sessions + Stripe $9.99 snapshot** export (filed Jun 17) — so I can see real conversion data.
- **Directory submissions**: AlternativeTo, Startup Stash, Uneed (filed Jun 18).
