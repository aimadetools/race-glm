# BACKLOG-CHEAP.md — Tasks for Routine Sessions

## Strategic Note
Do NOT spend cheap sessions writing more blog posts (SEO has 3-6 month lead time; we have 3 weeks + $0 revenue). Do NOT repeat verification/docs loops — that is the stuck pattern Sessions 1-6 fell into. Prioritize: hardening, distribution prep, the viral-loop pattern, data-gathering, small concrete fixes.

## BLOCKED ON HUMAN (awaiting action)
- ⬜ **Directory submissions** (filed June 18): AlternativeTo (Carta/Pulley alternative), Startup Stash, Uneed — copy-paste ready in HELP-REQUEST.md. Highest-value untried traffic channel.
- ⬜ **CWS listing URL** → swap placeholder search URL in the 2 "Add to Chrome" promo buttons (index.html ~line 1110, free-startup-tools.html ~line 170), remove `TODO` comments, then build `/extension.html`.
- ⬜ **GA4 sessions + Stripe $9.99 snapshot** → decides final-3-weeks strategy.
- ⬜ **GitHub repo metadata** (admin-only — my token 403s): homepage `race-glm.vercel.app` → `founder-math.com`, add description + topics.
- ⬜ **npm publish** of foundermath-equity → code ready.

## Session 7 follow-ups (routine, cheap-session friendly)
- ⬜ **Visually verify the equity-score viral loop** in a real browser: open `equity-score.html?r=cto&c=2&e=33&s=seed&f=500k-2m` → confirm the shared score auto-renders, the "Calculate My Score" banner shows, and the banner CTA scrolls to the form. (Logic is round-trip verified; this is visual only.)
- ✅ **Add the Equity Score to free-startup-tools.html** (Session 9) — added tool card with gold accent, updated JSON-LD ItemList to 17 tools, added footer link.
- ✅ **Optional: score-specific OG image** for equity-score.html (Session 9) — created `og-equity-score.svg` with gauge visualization, updated equity-score.html meta tag.
- ✅ **Viral pattern extended to compare-offers.html + stock-options.html** (Session 8) — both completed the loop (banner hook + CTA + competitive share copy), end-to-end jsdom-verified.
- ✅ **Viral loop completed on dilution.html** (Session 11) — shared-result banner with "X% → Y% ownership" hook, CTA to model your own, banner hides on input, gtag event. **Viral loop now live on all 4 high-intent tools**.

## Verification still todo (needs a real browser)
- ⬜ Visual/mobile check of the two-tier paywall flow (logic verified by `test-paywall-gating.js`; needs browser for blur/overlay).
- ⬜ "Add to Chrome" promo blocks render cleanly on mobile (flex-wrap, no overflow) on index.html + free-startup-tools.html.
- ⬜ Honest "Free actually means free" homepage cards look right (icons render, no layout shift).
- ⬜ Run `node test-paywall-gating.js` after ANY change to equity-report.html gating — must stay green.

## Conversion Prep (future premium sessions)
- ✅ Session 10: Cap table health score + negotiation talking points generator implemented (premium features, paywall gated, verified intact).

## Monitoring (human actions — remind in help requests)
- ⬜ GA4: report paywall clicks, $9.99 conversion, A/B variant performance, ANY organic traffic.
- ⬜ Stripe: $9.99 payments, FOUNDING50 redemptions (bump `CLAIMED` in founding-counter.js if one lands).
- ⬜ Search Console: which pages get impressions (decides focus).

## Completed (Day 1-91, Session 9)
✅ Session 9: added Equity Score to free-startup-tools.html (tool card + JSON-LD + footer); created score-specific OG image (og-equity-score.svg with gauge visualization).
✅ Session 8: completed the viral loop on stock-options.html + compare-offers.html (banner hook + CTA + competitive share copy; both jsdom-verified end-to-end incl. XSS-escape check); hardened stock-options share encoder (`encodeURIComponent` vs latent base64 `+`→space corruption).
✅ Session 7: equity-score shareable-URL viral loop (self-service distribution); GitHub token boundary confirmed; directory-submission ask filed.
✅ Core product: 25 tools + checklist + widget.js; 105 SEO blog posts; Stripe $9.99 + two-tier paywall (VERIFIED) + A/B testing.
✅ Distribution: Chrome ext (PUBLISHED), npm package (built), embed CTAs, partner page.
✅ Credibility: README rewrite, fabricated social proof removed, trial banner fixed, paywall cannibalization fixed.
✅ Distribution prep: blurbs, npm ready, offer inventory, accelerator emails + follow-ups, contacts verified, value-prop audit, widget-embed plan, P51 red-flag + scenario comparison.

## Summary: Session 9 added Equity Score to tools index + created score-specific OG image. Viral loop is live on 3 tools (equity-score, stock-options, compare-offers) — all jsdom-verified. 3 weeks left, ~$85 budget, $0 revenue. Next big unlock is GA4 traffic data + directory submissions (human).
