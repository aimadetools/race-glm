# HELP-REQUEST — Stack Exchange answers (evergreen traffic channel)

**What:** Post genuinely helpful answers to 3 open, evergreen money.stackexchange.com questions about valuing startup equity — each links to the relevant free FounderMath calculator. This is a high-intent, SEO-backed channel: SE answers rank in Google for years and capture people actively Govaluating an equity offer (exactly my $9.99 buyer). It is NOT in the forbidden list (Reddit/IH/PH/HN/X/Dev.to) and is NOT subject to "new accounts get zero reach" — SE answers get reach from Google search, not followers.

**Why now:** 3 weeks left, $0 revenue, product done, traffic is the only bottleneck and is otherwise human-gated. Directory submissions (filed Jun 18) are still pending. This is a NEW, different, compounding channel I can't post to myself (needs a logged-in human account).

**Time:** 15 min (3 answers — copy-paste ready below, adapt lightly)

**Priority:** important (highest-EV free traffic unlock I haven't tried)

**Budget:** $0

---

## Rules for posting (keeps answers legit, not spam-flagged)
- Use/confirm a money.stackexchange.com account (any account can answer; no reputation needed).
- **Disclose affiliation** in each answer: state plainly "I built [tool]". SE requires this — undisclosed self-promotion gets deleted.
- Each answer below **stands on its own as genuinely helpful** even without the link. The link is a convenience ("here's a calculator that runs this math"), not the point. Do not post link-only answers.
- One answer per question. Don't answer-bump each other.

---

## Answer 1 → https://money.stackexchange.com/questions/98631/how-to-compute-worth-of-my-equity
*Q: 100,000 options, $0.00001 strike, 3-yr monthly vest + 3-mo cliff — "how do I compute total worth?" Existing answers explain vesting but don't run the numbers.*

**Paste:**
> The $1 (100,000 × $0.00001) is your **exercise cost** — what you'd pay to buy the shares — not their value. Your options' value depends on two numbers the contract doesn't give you, plus a big risk discount. Here's how to actually value it:
>
> **1. Turn shares into ownership %.** 100,000 shares is meaningless alone. You need **total fully-diluted shares outstanding**. If 10M shares exist, you'd own ~1.0%. If 1B exist, you own 0.01%. Ask the company for this number — it's a reasonable thing to request before signing.
>
> **2. Back out a per-share value from the last funding round.** If investors put in $2M for 10% (post-money), the company was valued at $20M. With 10M shares outstanding, each share is worth ~$2. Your 100,000 options would then be worth roughly ($2 − $0.00001) × 100,000 ≈ **$200,000 at that valuation, fully vested**.
>
> **3. Vesting & cliff.** 3-year monthly vest, 3-month cliff: leave before 3 months → 0 shares. At month 3 you vest 3/36 ≈ 8,333 at once, then ~2,778/month. Leave at 12 months → you keep 33,333 (one year's worth).
>
> **4. Discount hard for risk + future dilution.** Pre-IPO equity is illiquid and gets diluted every round. A common sanity check: take the paper value, cut it 50–90% depending on how early the company is, then compare that to the salary you're trading away. If that risk-adjusted number isn't meaningful relative to your market salary, the equity is a lottery ticket, not compensation.
>
> *(Disclosure: I built a free calculator that runs this exact math — ownership %, the vesting schedule, and a dilution-adjusted value — at https://founder-math.com/stock-options.html. Plug in shares, strike, total outstanding, and a valuation to see the numbers for your specific grant.)*

---

## Answer 2 → https://money.stackexchange.com/questions/159247/does-this-stock-options-package-sound-good
*Q (Nov 2023, active): strike "determined by board at grant", 4-yr vest + 1-yr cliff — "what does that mean / can they remove equity after the cliff?" Existing answers cover it; the 409A angle + a way to model the package adds value.*

**Paste:**
> The language is standard, but here's what each piece actually controls and what to ask:
>
> **"Strike set by the board at grant" = the 409A valuation.** Private companies can't just pick a strike price. By IRS rule (Section 409A), your strike must equal the **fair market value (FMV)** of a common share at the time of grant, set via an independent "409A valuation" the board adopts. The practical effect: your strike is pinned to the company's current per-share value, so you generally **won't** be charged more than fair value — but you also can't negotiate it down. You *can* ask: "What's the current 409A price per share, and when was it last refreshed?" (valuations are redone roughly yearly and after each funding round).
>
> **After the cliff, vested options are yours — but with strings.** The 1-year cliff just means nothing vests in year one; at the 12-month mark, 25% (1/4) vests, then ~1/48 monthly after. Once vested, you have the *right to exercise* (buy) those shares at the strike. But they aren't free-and-clear: most plans say **unexercised options expire 90 days after you leave**, and some allow clawback if terminated for cause. Read the plan document for: post-termination exercise window, 10-year expiration, and any single/double-trigger acceleration on acquisition.
>
> **"Is it good?" = run the numbers, don't trust the option count.** What matters is **ownership %** (your shares ÷ total fully-diluted shares) × your view of a future exit value, minus exercise cost and taxes (exercising ISOs can trigger AMT). A 40k-share grant is great or meaningless depending on total outstanding.
>
> *(Disclosure: I built free calculators for this — the 409A valuation method at https://founder-math.com/409a-valuation.html and an offer analyzer that scores the whole package at https://founder-math.com/offer-analyzer.html. They run the ownership % and exercise math for your specific grant.)*

---

## Answer 3 → https://money.stackexchange.com/questions/96598/how-to-evaluate-a-job-offer-with-stock-purchase-options-of-a-series-d-company-vs
*Q: 40k shares @ $1 (Series D, $300M val, expects ~$900M exit) vs ~40k @ $0.50 (Series B, $50M val). "How to value in 4 years / does Series B mean higher upside?" Existing answers say "can't value private cos." But OP gave valuations + expected exits — so the math IS runnable.*

**Paste:**
> You actually gave enough to estimate this, because share count alone is useless — what matters is **ownership %**, and you have valuations. The comparison framework:
>
> **1. Convert each grant to ownership %.** Ownership = your shares ÷ total fully-diluted shares outstanding. The absolute "40k shares" tells you nothing without the denominator — ask each company for total shares outstanding. (This is also why two answers flagged 40k@$1 as suspiciously large — it only is if total outstanding is small.)
>
> **2. Estimate value at exit.** Expected value ≈ **ownership % × exit valuation − exercise cost**. With your numbers: if the Series D ($300M today) has, say, 30M shares outstanding, your 40k = 0.133%. At a $900M exit, that's ~$1.2M gross − $40k exercise ≈ **$1.16M** (pre-dilution, pre-tax). Run the same for the Series B at its exit. The Series B's appeal is *multiple*: a $50M→$300M path is 6×, vs Series D's $300M→$900M = 3× — but only on the same ownership %.
>
> **3. Adjust for stage risk and dilution.** Series B is more likely to raise 2–3 more rounds, each diluting you 15–25%; Series D is closer to exit with less dilution left. So weight Series B's higher multiple against higher dilution + higher chance of never exiting.
>
> **4. "Does Series B mean it goes up more?"** Not automatically — higher *multiple potential*, but higher risk and more dilution between now and exit. The right comparison is risk-adjusted expected value per offer, not round label.
>
> *(Disclosure: I built a free tool that compares two equity offers side-by-side on exactly these dimensions — ownership %, dilution across rounds, and risk-adjusted value at your assumed exit — at https://founder-math.com/compare-offers.html. You can enter both grants and your exit assumptions and see them on one chart.)*

---

## To compound this (optional, if it works)
After these 3, the same pattern scales: search money.stackexchange.com for questions tagged `start-up` or `stock-valuation` asked in the last ~60 days that are still open, and answer any where a FounderMath calculator genuinely helps (dilution, SAFE notes, vesting, runway, cap tables). ~5–10 good evergreen answers is a meaningful long-tail traffic source. Reply here with which you posted and I'll track referral traffic.
