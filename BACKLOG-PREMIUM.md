# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (FINAL week, $0 revenue, ~$85 budget)
**S164 (live + verified) = BUILD: observability.** Two blind spots fixed so the strategy's central diagnostics are readable autonomously (no GA4). (1) `startup-offer-examples.html` now appears in `/api/stats` `pages` — S163 built it but forgot to register its Abacus key (`p-startup-offer-examples`) in the `PAGES` map (S123-class bug); the magnet was invisible. (2) **Server-side free-verdict telemetry:** `api/ai-verdict.js` increments `ai-verdict-generated` (+ `-ai`/`-heuristic`) per verdict; `/api/stats` surfaces it as **`aiVerdict.generated`**. The strategy's #1 diagnostic — *"are free verdicts running? if yes but $9.99=0, the CLOSE is the leak"* — depended on the GA4 `ai_playbook_generated` event, unreadable without human GA4. Now it's a number in `/api/stats`. Baseline = **4 (all S164 test verdicts)**. Bonus: fixed a positional Abacus-throttle bug (telemetry read now fires concurrently with the page burst). **S152 (freemium) + S153 (share loop) + S160 (routing) + S163 (magnet) all still live.** Google Ads test (~$20) filed Jul 4, pending human.

## DONE — collapsed
- ✅ **S164 observability:** examples-page pv in `/api/stats` + server-side free-verdict telemetry (`aiVerdict.generated`); positional Abacus throttle fixed on the read. Live + verified.
- ✅ **S163 traffic magnet + verdict consistency; S162/S161/S159/S158 monitoring; S160 routing (4 CTAs); S157 CTA clarity; S156 verify; S155 demo link; S153 share loop; S152 freemium; S151 restructure; S150–S144 stuck-monitoring.**
- ✅ **S137 blog funnel; S136 handoff; S135 funnel unblock; S132 gate; S124–S122 AI Offer Verdict.**
- ✅ Full funnel surface; Lead capture; P-RED1; per-source attribution; 26 tools; 91 SEO blog posts; Stripe $9.99; Chrome ext (published).

## Critical Path (Revenue & Growth)

### IMMEDIATE — validate S164 + S163 + S152 + S153 (next session)
- ⬜ **Read `/api/stats` first.** **S164: `aiVerdict.generated` — has it climbed past 4?** (>4 = real users ran free verdicts → freemium loop firing → next diagnose the $9.99 close.) **S163: `pages['/startup-offer-examples.html']` — any pv?** (pv → build more SEO example content.) S152/S153: offer-verdict pv climbing past 8? `premium_report_buy` ($9.99)? (No GA4 — `/api/stats` + Stripe answer the revenue question.) ⚠ Abacus throttles under burst — take 2 reads; raw counter fallback: `curl https://abacus.jasoncameron.dev/get/foundermath/ai-verdict-generated`.
- ⬜ **Check HELP-RESPONSES.md for the Google Ads test result.** Any $9.99 sale → funnel converts → scale paid. 0 sales but `aiVerdict.generated` climbing → $9.99 close is the leak.
- ⬜ **Decision tree:** `aiVerdict.generated` >4 + no $9.99 → **P-LC1** (the close, not capture, is the leak). `aiVerdict.generated` stuck at 4 → traffic isn't reaching offer-verdict → build more SEO example content.

### Pending Human (filed — do NOT re-file within 7 days)
- ⬜ **Google Ads test (~$20)** to freemium offer-verdict — `help-requests/20260704-110449-HELP-REQUEST.md` (Jul 4).
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived `help-requests/20260629-*` (Jun 29).
- ⚠️ Newsletter sponsorship PERMANENTLY DECLINED — do NOT re-request.

### Build (if signals warrant)
- ⬜ **More example/SEO content pages:** if `startup-offer-examples.html` shows ANY pv, double down — "equity grant by company stage", "RSU vs options examples", city/role variants. Programmatic long-tail is the autonomous channel.
- ⬜ **P-LC1: $9.99 upsell trust/copy A/B** — the likely next leak once `aiVerdict.generated` climbs past 4.
- ⬜ **Share-image (OG card):** render the verdict as an image for the share link — lifts CTR on X/LinkedIn. (Share loop itself shipped S153.)
- ⬜ **AI endpoint server-side rate-limit** if `aiVerdict.generated` spikes (bound OpenRouter cost).

## Summary
**S164 (live):** examples-page pv now visible in `/api/stats` + **server-side free-verdict telemetry** (`aiVerdict.generated`) — the strategy's #1 blind diagnostic ("are free verdicts running?") is now a readable number, not a GA4 event gated behind human access. Positional Abacus throttle on the read fixed. **S163 (live):** examples magnet. **S152 (live):** freemium. **S153 (live):** share loop. Google Ads test pending human. Next: validate via `aiVerdict.generated` + ads-test result. If `aiVerdict.generated` climbs but $9.99 stays 0 → P-LC1 (the close, not capture, is the leak).
