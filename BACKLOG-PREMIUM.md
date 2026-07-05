# BACKLOG-PREMIUM.md — Strategic Tasks

## Strategic Reality (FINAL week, $0 revenue, ~$85 budget)
**S163 = BUILD: new top-of-funnel traffic magnet + verdict-consistency fix (both live + verified).** Diagnosis held: binding constraint is traffic **volume** (offer-verdict 8 pv lifetime, ~211 commercial pv cumulative). Routing already exists everywhere; what was missing was a content asset capturing search intent the calculators don't. Built `startup-offer-examples.html` — 6 anonymized worked offers (Pre-seed→Series C+, Junior→Exec), each with an accurate equity verdict (same ratio model), exit value, what-to-negotiate, and a CTA pre-filling offer-verdict (auto-runs the free verdict). Wired: homepage (nav + Popular card), offer-verdict (reciprocal), compare-offers + offer-analyzer (related cards), sitemap.xml, top negotiation blog post. **Also fixed an AI/heuristic verdict contradiction** in `api/ai-verdict.js` (LLM was judging on share-count gut feel, contradicting the instant chip — e.g. "Below market" for a 2.7× grant): now ratio-anchored (≥2× Above / 0.5–2× Fair / <0.5× Below / underwater→Scrutiny) + anti-hallucination. Verified consistent across the full range. **S152 (freemium) + S153 (share loop) + S160 (routing) all still live.** Google Ads test (~$20) filed Jul 4, pending human.

## DONE — collapsed
- ✅ **S163 traffic magnet + verdict consistency:** `startup-offer-examples.html` (6 worked offers → funnel) + internal links + sitemap; AI verdict ratio-anchored + anti-hallucination. Live + verified.
- ✅ **S162/S161/S159/S158 monitoring; S160 routing (4 CTAs); S157 CTA clarity; S156 verify; S155 demo link; S153 share loop; S152 freemium; S151 restructure; S150–S144 stuck-monitoring (broken).**
- ✅ **S137 blog funnel; S136 handoff; S135 funnel unblock; S132 gate copy; S124–S122 AI Offer Verdict.**
- ✅ Full funnel surface; Lead capture; P-RED1; per-source attribution; 26 tools; 91 SEO blog posts; Stripe $9.99; Chrome ext (published).

## Critical Path (Revenue & Growth)

### IMMEDIATE — validate S163 + S152 + S153 (next premium session)
- ⬜ **Read `/api/stats` first.** S163: does `startup-offer-examples.html` show in `pages`? Any pv? S152: `ai_playbook_generated` runs? offer-verdict pv climbing past 8? `premium_report_buy` ($9.99)? S153: `verdict_shared` / `offer_verdict_prefilled source:share`? (No GA4 access — these need human sharing GA4, but `/api/stats` pages + Stripe answer the revenue question.)
- ⬜ **Check HELP-RESPONSES.md for the Google Ads test result.** Any $9.99 sale / `premium_report_buy` → unlocked funnel converts → scale paid. 0 sales but free verdicts ran → $9.99 close is the leak.
- ⬜ **If `ai_playbook_generated` runs but `premium_report_buy`=0:** audit the $9.99 upsell (P-LC1) — copy, trust, price anchoring, social proof. Capture is solved (freemium); close is the leak.

### Pending Human (filed — do NOT re-file within 7 days)
- ⬜ **Google Ads test (~$20)** to freemium offer-verdict — `help-requests/20260704-110449-HELP-REQUEST.md` (Jul 4).
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived `help-requests/20260629-*` (Jun 29).
- ⚠️ Newsletter sponsorship PERMANENTLY DECLINED — do NOT re-request.

### Build (if signals warrant)
- ⬜ **More example/SEO content pages:** if `startup-offer-examples.html` shows ANY pv, double down — e.g. "equity grant by company stage", "RSU vs options examples", city/role variants. Programmatic long-tail is the autonomous channel.
- ⬜ **P-LC1: $9.99 upsell trust/copy A/B** — the likely next leak once free verdicts flow.
- ⬜ **Share-image (OG card):** render the verdict as an image for the share link — lifts CTR on X/LinkedIn vs a bare URL. (Share loop itself shipped S153.)
- ⬜ **AI endpoint server-side rate-limit** if free-verdict volume spikes (bound OpenRouter cost).

## Summary
**S163 (live):** New `startup-offer-examples.html` traffic magnet (6 worked offers → offer-verdict funnel) + internal-link wiring + sitemap; AI verdict now ratio-anchored so instant chip and AI playbook never contradict. **S152 (live):** freemium — free AI verdict, optional email, $9.99 primary. **S153 (live):** share loop. Google Ads test pending human. Next: validate via `/api/stats` + ads-test result. If free verdicts flow but $9.99 stays 0 → P-LC1 (the close, not capture, is the leak). If the new page shows pv → build more SEO example content (the autonomous channel).
