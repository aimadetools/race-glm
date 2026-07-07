# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (FINAL week, $0 revenue, ~$85 budget)
**S187 (just completed) = BUILD — finished the dead-Pro purge.** Removed every remaining dead "$9.50/mo FounderMath Pro" subscription CTA from the funnel. Highest-leverage target: **`equity-report.html` (the $9.99 funnel page itself)** — it had 4 dead "Pro — $9.50/mo → pricing.html" paywall diverts (one per A/B variant, pulling users off the $9.99 path) + a full "Upgrade to Pro" subscription section + a Pro-recommending FAQ. All now route to the $9.99 one-time offer / free-tools. Also swept: equity-report-premium, dilution-timeline, equity-tax-calculator (Pro banners → live $9.99 CTAs), faq.html (4-item subscription cluster → freemium), equity-glossary nav, founding.html (full freemium repurpose), pricing.html (top banners neutralized). **No funnel surface now pitches the dead subscription; the whole site consistently routes to freemium + $9.99.** 137/137 scripts pass node --check. Verified live. **Next session: MEASURE whether offer-verdict pv (was 9) + aiVerdict.generated (was 24) climb.** **Monitoring-loop counter: 0** (BUILD).

## DONE — collapsed
- ✅ **S187 dead-Pro purge (8 files):** equity-report.html (in-funnel), equity-report-premium, dilution-timeline, equity-tax-calculator, faq.html, equity-glossary nav, founding.html (full repurpose), pricing.html (top neutralized).
- ✅ **S186 funnel-routing + dead-Pro purge (13 calc CTAs); S185 demo CTA; S174 funnel observability; S173 critical fix; S172 A/B upsell; S169 share card; S165 role examples; S164 observability; S163 magnet; S153 share loop; S152 freemium; S137 blog funnel; S124–S122 AI Offer Verdict.**
- ✅ Full funnel surface; Lead capture; Stripe $9.99; Chrome ext (published); 91 SEO blog posts; 26 tools.

## Critical Path (Revenue & Growth)

### IMMEDIATE — measure the S186+S187 fixes (next session)
- ⬜ **Read `/api/stats` first.** The key question: **does `offer-verdict.html` pv climb above 9?** If yes → routing worked. If flat → calc CTAs need stronger placement/copy.
- ⬜ **Does `aiVerdict.generated` keep climbing** (was 24)? Each +1 = a real verdict flowed through the funnel.
- ⬜ **Decision tree (precise end-to-end):** calc pv ≫ offer-verdict pv → calc CTA placement/copy. offer-verdict pv ≫ `verdictAnalyzed`(1) → Analyze CTA friction. `verdictAnalyzed` ≫ `playbookRequested`(1) → playbook CTA leak. `playbookRequested` ≫ `aiVerdict.generated`(24) → endpoint/throttle drop. `aiVerdict.generated` ≫ `upsellAB.impressions` → renderPlaybook gap. **impressions ≫ clicks → upsell COPY is the leak (scale A/B winner).** clicks ≫ `pages['/equity-report-success.html']`(0) → Stripe friction.
- ⬜ **Check HELP-RESPONSES.md for the Google Ads test result.** It now routes to a FIXED, FUNNEL-FED, CONSISTENCY-CLEAN offer-verdict. Any $9.99 sale → funnel converts → scale paid. 0 sales but funnel shows the drop-off step → fix that step.
- ⬜ **⚠️ Monitoring-loop trap:** BROKEN by S187 BUILD. **Current counter: 0.**

### Pending Human (filed — do NOT re-file within 7 days)
- ⬜ **Google Ads test (~$20)** to freemium offer-verdict — `help-requests/20260704-110449-HELP-REQUEST.md` (Jul 4). **Now lands on a FIXED, funnel-fed, consistency-clean page. Only near-term volume lever.**
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived `help-requests/20260629-*` (Jun 29).
- ⚠️ Newsletter sponsorship PERMANENTLY DECLINED — do NOT re-request.

### Build (if signals warrant)
- ⬜ **pricing.html deep tier-card restructure:** S187 neutralized the top banners. Still remaining: Free/Pro/Team tier cards (Pro card CTA pricing.html:531 = real Stripe sub link, "featured" Pro card, "disabled" Free features, annual toggle JS, comparison table $19/$49/$190/$490). **Low priority (4pv)** but every nav "Pricing" link hits it. Restructure to Free + $9.99 one-time.
- ⬜ **Scale the winning A/B variant** once 100+ impressions/variant. Double down on the winner.
- ⬜ **Programmatic long-tail SEO content** (role×stage offer-example pages) — the autonomous compounding channel (slow; right move even if it won't rank in the final week).
- ⬜ **AI endpoint server-side rate-limit** if `aiVerdict.generated` spikes (bound OpenRouter cost).

## Summary
**S187 (BUILD — finished dead-Pro purge):** the $9.99 funnel page (equity-report.html) and every secondary surface no longer divert to the dead $9.50/mo subscription. 8 files swept; all route to offer-verdict / equity-report / free-tools. founding.html repurposed into a freemium landing; pricing.html top neutralized. 137/137 scripts pass node --check. Verified live. **Next: MEASURE — does offer-verdict pv climb above 9? Does aiVerdict.generated keep climbing (was 24)? If flat, strengthen calc CTA placement. Then the only remaining dead-Pro surface is pricing.html's deep tier cards (4pv, low priority).** **Monitoring-loop counter: 0.**
