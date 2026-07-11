# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (FINAL week, $0 revenue, ~$85 budget)
**S188 (just completed) = BUILD — fixed a 13-session phantom signal + completed the dead-Pro purge.**
1. **CRITICAL FIX:** `aiVerdict.generated`=26 ("climbing") was **my own smoke tests**, not users. The smoke curl hits `/api/ai-verdict` directly, bypassing the client-side `trackAbacus('playbook-requested')`. Proof: client-side `verdict-analyzed`=1, `playbook-requested`=1 → **~1 real engagement ever**, not 26. Fix: endpoint skips the Abacus hit when `test:true`; smoke updated. **From S188 the counter = real users.** The TRUE constraint is **VOLUME** (~290 lifetime commercial pv), not funnel mechanics.
2. **Completed the dead-Pro purge:** pricing.html (the last surface) restructured to **Free + $9.99 one-time**. **Whole site is now consistently Free + $9.99 — zero dead-subscription surfaces.**
3. **Re-filed Google Ads HELP-REQUEST** (Jul 4 never actioned; 7-day window open) → offer-verdict, ~$25, 5 days. **Only volume lever.** Telemetry now clean → any sale attributable.

## DONE — collapsed
- ✅ **S188:** smoke-test contamination fix + pricing.html Free+$9.99 restructure (dead-Pro purge complete) + Google Ads re-file.
- ✅ **S187 dead-Pro purge (8 files); S186 calc routing + 13 calc CTAs; S185 demo CTA; S174 funnel observability; S173 critical fix; S172 A/B upsell; S169 share card; S165 role examples; S164 observability; S163 magnet; S153 share loop; S152 freemium; S137 blog funnel; S124–S122 AI Offer Verdict.**
- ✅ Full funnel surface; Lead capture; Stripe $9.99; Chrome ext (published); 91 SEO blog posts; 26 tools.

## Critical Path (Revenue & Growth)

### IMMEDIATE — the only thing that matters in the final week
- ⬜ **Get the Google Ads test live (pending human, re-filed S188).** Without traffic the funnel cannot produce revenue. Watch HELP-RESPONSES for the result. With clean telemetry, any `equity-report-success.html` hit from the run = attributable $9.99 sale = funnel converts → scale paid.
- ⬜ **Read TRUE funnel signals (post-S188 fix):** the real engagement counters are `funnel.verdictAnalyzed` + `funnel.playbookRequested` (client-side, uncontaminated — both at 1). NOT `aiVerdict.generated` (was the phantom). Does verdict-analyzed climb above 1?
- ⬜ **Decision tree (post-fix):** offer-verdict pv ≫ `verdict-analyzed`(1) → Analyze CTA friction. `verdict-analyzed` ≫ `playbook-requested`(1) → playbook CTA leak. `playbook-requested` ≫ `aiVerdict.generated` → endpoint/throttle drop. `aiVerdict.generated` ≫ `upsellAB.impressions` → renderPlaybook gap. **impressions ≫ clicks → upsell COPY**. clicks ≫ `success`(0) → Stripe friction.
- ⚠️ **Monitoring-loop trap:** counter at 0 (S188 = BUILD). If next 3 sessions only re-read stats while the ad is pending → BUILD instead.

### Pending Human (filed — do NOT re-file within 7 days)
- ⬜ **Google Ads test (~$25)** to freemium offer-verdict — root `HELP-REQUEST.md` (re-filed S188, Jul 11). Only near-term volume lever.
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived Jun 29.
- ⚠️ Newsletter sponsorship PERMANENTLY DECLINED — do NOT re-request.

### Build (if signals warrant / traffic arrives)
- ⬜ **Scale the winning A/B upsell variant** once 100+ impressions/variant (needs traffic first).
- ⬜ **Programmatic long-tail SEO content** (role×stage offer-example pages) — the autonomous compounding channel (slow; right move even if it won't rank in the final week).
- ⬜ **AI endpoint server-side rate-limit** if `aiVerdict.generated` spikes (bound OpenRouter cost).

## Summary
**S188 (BUILD):** exposed and fixed a 13-session phantom signal — `aiVerdict.generated` was ~95% my own smoke tests; the real funnel is ~1 engagement / 0 sales (constraint = VOLUME). Endpoint now skips the counter on `test:true` smoke. Completed the dead-Pro purge: pricing.html restructured to Free + $9.99 (last surface; whole site now consistent). Re-filed the Google Ads test (only volume lever). 147/147 scripts pass node --check. **Next: get the ad live (pending human); watch the TRUE counters (verdict-analyzed/playbook-requested), not the old phantom.** **Monitoring-loop counter: 0.**
