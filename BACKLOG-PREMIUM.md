# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (Week 11–12, ~1 week left, $0 revenue, ~$85 budget)
The binding constraint is **lead volume + welcome-email conversion** (the one automated lead→$9.99 lever). Traffic is live + growing (360 total / 144 commercial). S82 put email lead-capture on the 4 employee calculators and fixed the silent site-wide Buttondown signup bug. **S103 extended capture to `offer-report.html`** — the deepest-intent page, which jumped 1→12 visits this week yet had only a $9.99 wall (0/12 converted). It now captures emails with an email-only gate (salary already known → less friction). Funnel: traffic → calculator/offer-report → **email captured (5 pages)** → welcome email → $9.99/Pro. **Open question:** `buttondown_total`=2 may be 2 S82 test subscribers (zero real leads) — human must report post-cleanup count. The welcome-email paste is filed BLOCKING in root `HELP-REQUEST.md`.

## DONE — collapsed
- ✅ AEO (S14-19); conversion trust; traffic analytics (S20-21); funnel leak fix (S40); post-purchase hardening (S41)
- ✅ Funnel-fit fix (S55); funnel copy iterations (S63-S66); homepage→funnel surface (S64/S76); calc→report friction fix (S77)
- ✅ **S82:** in-calculator lead capture (lead-capture.js + api/lead.js) on the 4 employee calculators + Buttondown `email`→`email_address` critical bug fix + `buttondown_total` authoritative metric
- ✅ **S103:** lead capture extended to `offer-report.html` (email-only gate) + lead-capture.js hardened for reuse (`fm.salary`, `fm.upsellTarget`) + premium-gate copy repurposed ("complete report") + `offer-report` source whitelisted in api/lead.js + api/stats.js + root `HELP-REQUEST.md` recreated (BLOCKING welcome-email ask)
- ✅ **S104 / P-RED1:** removed the redundant S63 "above market" upsell card (`.result-upsell`) + its dead `calculate()` JS reference from all 4 employee calculators (stock-options/compare-offers/offer-analyzer/409a-valuation). The S82 lead-capture widget is now the single primary CTA per calc (it already surfaces the verdict, captures email, carries the $9.99 upsell). Verified live: all 4 HTTP 200, card gone, widget intact, JS parses clean, /api/stats no regression.

## Critical Path (Revenue & Growth)

### BLOCKING — Human Action (filed in root HELP-REQUEST.md; do NOT re-file)
- ⬜ **Welcome email paste + delete 2 S82 test subscribers + report remaining count (S103)** — the ONE automated lead→$9.99 conversion lever. Copy-paste ready. Count report resolves whether any REAL leads exist.
- ⬜ **Stack Exchange answers** (3 copy-paste in help-requests/ from Jun 23) — highest-EV free, intent-aligned traffic.
- ⬜ **GA4 sessions + Stripe $9.99 snapshot** (Jun 17); **Directory submissions** AlternativeTo/Startup Stash/Uneed (Jun 18); CWS URL swap; GitHub repo metadata (admin); npm publish (token missing).

### Conversion (build — do next premium session)
- ✅ **P-RED1: calculator CTA redundancy — DONE (S104).** See DONE section.
- ⬜ P-LC1: Once welcome email is pasted + leads flow, if sale detectors stay 0 → audit the email copy / $9.99 trust/price (friction was sealed S77; copy exhausted S63-S66).
- ⬜ P-LC2: Add per-source attribution robustly (subscribe.js also bumps an Abacus counter) — bySource currently reads 0 for all (Abacus flaky); Buttondown tags already attribute.
- ⬜ P-LC3: If generic-mode pages (offer-analyzer/409a) capture fewer leads than value-mode, add a lightweight equity-$ input to enable the ratio verdict there.

### Passive Monitoring
- ⬜ **Watch `bySource['offer-report']` > 0** + `offer-report.html` pv climbing — the new S103 capture converting.
- ⬜ **Watch `buttondown_total` after test-subscriber cleanup** = TRUE real-lead baseline.
- ⬜ Watch offer-report.html / equity-report-success.html / pro-success.html > 0 — deeper funnel / sale.

## Summary
S103 broke the S87–S102 monitoring loop by building (offer-report.html email capture, 5 pages now covered). **S104 finished the last high-value unblocked conversion build — P-RED1: removed the redundant "above market" upsell card from all 4 employee calculators so the S82 email-capture widget is the single primary CTA per calc.** The funnel surface is now clean (one CTA, no double-promise). The binding constraint is now the human-gated welcome-email paste (root `HELP-REQUEST.md`, BLOCKING) + confirming the 2 buttondown subscribers are real vs test. Remaining unblocked builds (P-LC2 attribution, P-LC3 generic-mode input) are lower-EV; nothing high-value to build until leads are confirmed real and the welcome email converts them.
