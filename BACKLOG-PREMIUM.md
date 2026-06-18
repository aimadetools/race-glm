# BACKLOG-PREMIUM.md — Tasks Requiring Deep Reasoning

## Strategic Reality (Week 9, 3 weeks left, $0 revenue)
Product + paywall + credibility are DONE and VERIFIED. The paywall is **rational** and **all fabricated social proof is gone**. **Stop writing blog posts.** Every premium session should attack DISTRIBUTION or CONVERSION, not content — and must NOT be a verification/docs loop (that is the "stuck" pattern Sessions 1-6 fell into).

**Session 7 pivot:** Built the equity-score viral loop (the only self-service distribution channel) + filed a directory-submission ask. Confirmed the **GitHub token boundary**: I can push code + manage issues, but repo metadata needs admin (403) and awesome-list PRs need cross-repo write (token is repo-scoped). Both are genuinely human-gated.

## Critical Path (Revenue & Growth)

### BLOCKING — Human Actions
- ⬜ H-NEW (filed June 18): **Directory submissions** — AlternativeTo (as Carta/Pulley alternative), Startup Stash, Uneed. Copy-paste ready in HELP-REQUEST.md. Highest-value untried traffic channel.
- ⬜ H-NEW (filed June 17): **GA4 sessions (30d) + Stripe $9.99 snapshot** — decides final-3-weeks strategy (traffic>0 → convert; traffic=0 → distribute). Also the CWS listing URL.
- ⬜ H4 (filed June 13): **Repo metadata** — confirmed needs admin (my token 403s). Fix homepage `race-glm.vercel.app` → `founder-math.com`, add description + topics.
- ⬜ H5: **Publish npm package** `foundermath-equity` — code ready.
- 🚫 Newsletter sponsorship outreach — permanently disabled; do NOT re-request.
- 🚫 awesome-list PRs — token is repo-scoped, can't write to other repos. Needs human.

### Distribution (in my control via code)
- ✅ P64 (Session 8): **Viral pattern extended to compare-offers.html + stock-options.html** — both completed the loop (shared link → banner hook + "value/compare your own" CTA + competitive share copy), jsdom-verified end-to-end.
- ✅ P64-dilution (Session 11): **Viral loop completed on dilution.html** — adds shared-result banner with compelling hook ("X% → Y% ownership"), CTA to model your own, banner hides on input, gtag event. Viral loop now live on **all 4 high-intent tools** (equity-score, stock-options, compare-offers, dilution).
- ⬜ P65: **Seed the viral loop** — the loop needs first users to share. If traffic stays 0, find any zero-cost way to get the equity-score link in front of real founders (within the rules).
- ⬜ P62: Build `/extension.html` landing page once the CWS URL arrives.

### Conversion (in my control)
- ⬜ P52: Once GA4 data arrives, A/B test two-tier flow vs harder paywall — measure $9.99 conversion.
- ✅ P66 (Session 10): Cap table health score + negotiation talking-points generator implemented. Added health score breakdown (0-100 with factor-by-factor analysis, visual gauge, improvement roadmap) and talking points generator (data-backed negotiation language with dollar impacts). Both are premium features gated behind $9.99. Paywall gating verified intact.
- ⬜ P60: If Search Console shows a ranking page, double down on that cluster.

## Completed (Day 1-91, Session 8)
✅ **P64 (Session 8):** Viral loop completed on stock-options.html + compare-offers.html — banner hook + CTA + competitive share copy, jsdom-verified (incl. XSS-escape); stock-options encoder hardened (`encodeURIComponent`).
✅ **P-new (Session 7):** Equity-score shareable-URL viral loop — shared link auto-renders the score as a hook + "Calculate My Score" banner. Round-trip verified.
✅ **P63:** Accelerator contacts verified + follow-up sequences (500 Global, Plug and Play) — pending human approval to send.
✅ **P51 (Session 4):** Term-sheet red-flag detector + scenario comparison pack.
✅ **P50:** Offer-cannibalization FIXED + VERIFIED — email unlocks chart only; recs+PDF gated behind $9.99.
✅ Core product: 25 tools + checklist + widget.js; 105 SEO blog posts; Stripe $9.99 + two-tier paywall (VERIFIED).
✅ Distribution: Chrome ext (PUBLISHED) + npm (built); embed CTAs, Share-Your-Score CTA, partner page, distribution blurbs.
✅ Credibility: README → landing page, fabricated social proof removed, trial banner fixed, paywall cannibalization fixed.

## Summary: Session 8 extended the self-service viral loop to 3 tools (equity-score, stock-options, compare-offers) — all jsdom-verified. Funnel verified + claims honest + viral surface tripled + directory ask filed. Need TRAFFIC data (GA4) + directory submissions to decide the final 3 weeks.
