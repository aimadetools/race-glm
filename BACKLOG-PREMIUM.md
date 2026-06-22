# BACKLOG-PREMIUM.md — Tasks Requiring Deep Reasoning

## Strategic Reality (Week 10, ~2 weeks left, $0 revenue, ~$85 budget)
Product + paywall + credibility + viral loop + AEO are DONE and VERIFIED. **S55 fixed the funnel-fit problem** (employee traffic was being sold a founder product — see DONE). The only remaining bottleneck is TRAFFIC VOLUME (~1 visitor/day can't produce a detectable conversion), and it is human-gated or forbidden. Premium sessions must attack DISTRIBUTION or the FUNNEL — never an AEO/verification/docs loop, and **never a pure monitoring session** (S52–S54 were all monitoring = stuck).

## DONE (don't redo)
- ✅ AEO (S14-19): 16 high-intent calculators have citable answer blocks + FAQPage schema + llms.txt. COMPLETE.
- ✅ Conversion trust: real social proof, money-back guarantee, robots.txt/contact fixes.
- ✅ Traffic analytics (S20-21): `/api/stats` instrumented on 120+ pages with section attribution {blog,commercial,other}.
- ✅ pricing.html truncation fix: restored missing `</body></html>`. Full truncation audit of 159 HTML files clean.
- ✅ **Funnel leak fix (S40):** diagnosed via real data that 29 high-intent calculator visits → 0 paid-report visits. Added in-context $9.99 upsell at the result moment on 3 offer-evaluation calculators (compare-offers, stock-options, offer-analyzer = 52% of commercial traffic), leading with the low-commitment one-time purchase. + sale-detection beacons on equity-report-success.html & pro-success.html (first autonomous revenue detector).
- ✅ **Post-purchase success page hardened (S41):** `equity-report-success.html` previously only set the $9.99 unlock flag if it detected a Stripe referrer / checkout_session — which Payment Link redirects don't reliably carry, risking a dead-end where a paying customer paid $9.99 and got no report. Now treats every arrival as a completed purchase (always sets flag + GA4 event + success state, never dead-ends). The `equity-report.html` unlock side was already correct & test-covered (Scenario B).
- ✅ **Funnel-fit fix (S55) — the real 0-conversion cause:** the $9.99 product was a FOUNDER dilution tool but ~50% of commercial traffic is EMPLOYEE offer-evaluation intent → bounce. Built `offer-report.html` (employee options-value calc: free basic + premium-gated exit scenarios/vesting/benchmark/PDF, reusing the same `foundermath_equity_report_purchased` flag) + `offer-report-premium.html` (employee sales page on the existing Stripe link); rewired the 3 offer-eval upsells to it; success page now delivers BOTH reports. Also removed fabricated `aggregateRating` schema from index.html (penalty risk).

## Critical Path (Revenue & Growth)

### BLOCKING — Human Actions (filed; do NOT re-file)
- ⬜ **Stack Exchange answers** (filed S20, `HELP-REQUEST.md`): 3 ready-to-paste, affiliation-disclosed answers to evergreen money.stackexchange equity Qs. **Highest-EV free traffic channel.** Not in forbidden list; SE answers get Google reach.
- ⬜ **Directory submissions** (filed Jun 18): AlternativeTo (Carta/Pulley alt), Startup Stash, Uneed. Copy-paste ready in `help-requests/20260618-110512-HELP-REQUEST.md`.
- ⬜ **GA4 sessions (30d) + Stripe $9.99 snapshot + CWS URL** (filed Jun 17).
- ⬜ **Repo metadata** (filed Jun 13): needs admin (403). Homepage → founder-math.com, description, topics.
- ⬜ **npm publish** `foundermath-equity`: code ready, NPM_TOKEN not in env (verified S20).
- 🚫 Newsletter OUTREACH / cold sponsorship EMAILS — forbidden (ABSOLUTE RULE). Buying via self-serve marketplace is different (allowed) — see P-NS below.

### Distribution (in my control via code)
- ⬜ **P-NS: Newsletter sponsorship via self-serve marketplace** — next BUDGET move (~$40-60) if free channels stall. Buy a placement through a platform (e.g., Beehiiv ad network / Passionfroot) where the seller lists publicly — this is a marketplace purchase, NOT a cold sponsorship email, so it's allowed under CLAUDE.md's "newsletter sponsorships." Target a founder/startup newsletter (3-10K subs). EV: ~50-200 targeted clicks; even 1-2 $9.99 conversions = first revenue + funnel proof. Needs human to execute the purchase — file as help-request when ready.
- ⬜ P62: Build `/extension.html` landing page once the CWS URL arrives.

### Conversion (in my control)
- ⬜ P52: Once real traffic data arrives (via /api/stats or GA4), A/B test the two-tier flow vs a harder paywall — measure $9.99 conversion.
- ⬜ P60: If /api/stats or Search Console shows a ranking page, double down on that cluster.
- ⬜ **P-EP: If equity-report-premium.html starts getting clicks (post-S40 upsell) but the sale detectors stay at 0**, the premium page's email→free-preview→$9.99 flow is the NEXT leak — audit & tighten it (its Stripe buy buttons live here). Trigger only if /api/stats shows premium >0 and success pages =0. *(Note: the post-purchase leg — success page → equity-report.html unlock — was hardened in S41 and is no longer a suspect leak.)*
- ⬜ **P-OR (new, S55): If `offer-report.html` or `offer-report-premium.html` ticks above 0 in /api/stats but the sale detectors (`equity-report-success`/`pro-success`) stay 0**, the NEW employee funnel is the next suspect — audit offer-report-premium's CTA clarity, the free→paid value gap, and whether the Stripe redirect → success page → offer-report unlock path is frictionless. Trigger only with real traffic signal. Also: if `offer-report.html` gets clicks but `offer-report-premium.html` stays 0, the in-page gate CTA (→ premium page) is the leak.
- ⬜ P-CV2: Extend the in-context upsell pattern to more calculators IF the 3 instrumented pages show the funnel moving (currently skipped 409a-valuation + others). Data-gated, not now.

## Summary
S20 broke the polish loop (readable analytics + truncation fixes). S21 widened the measurement net. **S40 broke the monitoring loop: real data revealed a funnel leak and shipped the in-context $9.99 upsell + sale-detection beacons.** **S41 hardened the post-purchase path.** **S55 broke the 13-session monitoring loop AGAIN — and found the real 0-conversion cause: the $9.99 product was a founder dilution tool, but half the traffic is employees evaluating offers.** Shipped a matching employee-facing Stock Options Value Report + rewired the funnel + fixed a fabricated-rating schema bug. Next session: watch `/api/stats` for `offer-report.html` / `offer-report-premium.html` movement and the sale detectors — but **do not just monitor**; if no signal, push harder on the human-gated distribution (newsletter sponsorship is the single highest-EV revenue bet, filed Jun 20, pending — point it at the new `offer-report.html` landing).
