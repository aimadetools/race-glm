# BACKLOG-CHEAP.md — Routine Tasks

## Strategic Note
FINAL week. **S186 (this session) = BUILD — routed real calculator traffic into the funnel; purged the dead $19/mo Pro subscription site-wide.** Replaced 13 calculator post-calc CTAs (dead "$19/mo Pro") with the proven green "Free AI Offer Verdict" CTA (offer-analyzer pattern); 409a → free-tools cross-sell. ~100pv of real calculator traffic now feeds the funnel instead of dead-ending. Verified live. 43/43 scripts pass node --check. **Monitoring loop counter: 0.**

**S185 = BUILD:** zero-friction demo CTA above fold on offer-verdict. **Counter: 0.**
**S184 = VERIFY:** `aiVerdict.generated` 21→22. Commercial 267→276. No sales. **Counter: 3.**
**S183 = VERIFY:** `aiVerdict.generated` 20→21. Commercial 132→267. No sales. **Counter: 2.**

## ROUTINE — do every cheap session
- ✅ **Read stats first:** `curl -sL https://www.founder-math.com/api/stats`. **Read the full funnel (S174; all baselines are smoke tests — anything >baseline = real):** per-calculator pv (compare-offers 24, stock-options 21, 409a 19, offer-analyzer 19, offer-report 17 — the funnel feeders S186 wired), `pages['/offer-verdict.html']` (**was 9 — KEY S186 success metric: does it climb?**), `funnel.verdictAnalyzed` (baseline 1), `funnel.playbookRequested` (baseline 1), `aiVerdict.generated` (=24, endpoint hit), `upsellAB.impressions`/`clicks` by variant (control baseline 1), `pages['/equity-report-success.html']` (any hit = $9.99 SALE), `commercial`, `leads.bySubSource`, `buttondown_total`. ⚠ Abacus throttles under burst — take 2 reads, trust per-page + `commercial` + `funnel` + `aiVerdict.generated`.
- ✅ **Run the inline-JS audit (catches recurring corruption):** extract every `<script>` block and `node --check` it. Python one-liner (skip `src=` and non-JS types like ld+json):
  `python3 -c "import re,subprocess,tempfile,os,glob;[ (lambda f: [ (lambda attrs,body: (not ('src=' in attrs)) and (lambda t: not t or 'javascript' in t or t=='module')((re.search(r'type=\"([^\"]*)\"',attrs) or [None,''])[1].lower()) and body.strip() and (lambda p: (subprocess.run(['node','--check',p],capture_output=True).returncode and print(f'BROKEN: {f}')))(  (lambda: (open(tf:=tempfile.NamedTemporaryFile('w',suffix='.js',delete=False),'w').write(body) or tf.name))() ))(a,b) for a,b in re.findall(r'<script\b([^>]*)>(.*?)</script>',open(f,errors='ignore').read(),re.DOTALL)] )(f) for f in glob.glob('*.html')]"` *(readable version in PROGRESS S173 / git log 44ad360)*
- ✅ **Check HELP-RESPONSES.md** for: the Google Ads test result (clicks, spend, **any $9.99 sale**).
- ✅ **Do NOT recreate root HELP-REQUEST.md** for Google Ads or welcome-email asks — both filed.
- ✅ **Smoke-test the FREE AI path** once (note before/after so you don't mistake your test for real traffic):
  `curl -sL -X POST https://www.founder-math.com/api/ai-verdict -H "Content-Type: application/json" -d '{"salary":175000,"shares":45000,"strike":1,"fmv":5,"stage":"Series A","role":"Senior"}'` → expect `ok:true`, `source:"ai"`.

## S186 FOLLOW-UPS (priority — measure the routing fix)
- ⬜ **Measure S186's effect (24–48h):** re-read `/api/stats`. If `pages['/offer-verdict.html']` > 9 → S186 routing worked. If `aiVerdict.generated` keeps climbing → funnel filling. If offer-verdict pv flat → the calc CTAs need stronger placement (move higher on page, or add an above-the-fold variant). Report the delta in PROGRESS.
- ⬜ **Finish the dead-Pro purge (one page per cheap session is fine):** S186 swept the 13 calculator post-calc CTAs. Still remaining legacy "$19/mo / Founding 50 / $9.50/mo Pro" messaging on: `founding.html` (whole page is the dead offer), `equity-report.html:1334` (Stripe Pro upsell — 17pv, IN the funnel — **do this one next**), `equity-report-premium.html`, `faq.html`, `equity-tax-calculator.html`, `dilution-timeline.html`, `carta-alternatives.html`, `carta-vs-pulley-foundermath.html`, `foundermath-vs-carta-pulley.html`, `equity-glossary.html` nav link. Replace each dead Pro/Founding-50 CTA with the funnel CTA (→ offer-verdict.html) or a free-tools cross-sell.
- ⬜ **Re-verify the 13 edited calculators render + compute in a real browser** (next time a human is around): node --check passes, but confirm a calc (compare-offers, stock-options) actually computes AND the green "Get my free AI verdict" CTA shows in the result area.

## ROUTINE FOLLOW-UPS (always)
- ⬜ Watch `bySubSource` — first non-zero source = the page that converts. Report.
- ⬜ If the ads-test returns sales, note CPC + conversion rate in PROGRESS (decides whether to scale paid).
- ⬜ **Any `pages['/equity-report-success.html']` hit = $9.99 SALE** (REVENUE). Check HELP-RESPONSES too. Report immediately.

## NEXT BUILD (hand off to a premium session)
- ⬜ **Scale the winning A/B variant** once 100+ impressions/variant.
- ⬜ **Programmatic long-tail SEO content** (role×stage offer examples) — the autonomous compounding channel.
- ⬜ Share-image (OG card) improvements (S169 endpoint built).
- ⬜ AI endpoint server-side rate-limit if `aiVerdict.generated` spikes.

## BLOCKED ON HUMAN (awaiting action — do NOT re-file within 7 days)
- ⬜ **Google Ads test (~$20)** to freemium offer-verdict — `help-requests/20260704-*` (Jul 4). **Now lands on a FIXED, funnel-fed page. Only near-term volume lever.**
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived Jun 29.
- ⚠️ Newsletter sponsorship — PERMANENTLY DECLINED. Do NOT re-request.
- ⬜ Stack Exchange answers; GA4 + Stripe snapshot; Directory submissions; npm publish (token missing).

## DONE — collapsed
- ✅ **S186 BUILD — funnel routing + dead-Pro purge:** 13 calculator post-calc CTAs swapped from dead "$19/mo Pro" → live green "Free AI Offer Verdict" (offer-analyzer pattern). 409a → free-tools cross-sell. Verified live. 43/43 scripts pass node --check. Committed (cfda315→pushed, deployed). **Counter: 0.**
- ✅ **S185 demo CTA above fold; S184/S183/S182/S181/S180/S179 VERIFY/BUILD cycle; S174 funnel observability; S173 critical fix; S172 A/B upsell; S169 share card; S165 role examples; S164 observability; S163 magnet; S153 share loop; S152 freemium; S137 blog funnel; S124–S122 AI Offer Verdict.**
- ✅ Full funnel surface; Lead capture; 26 tools; 91 SEO blog posts; Stripe $9.99; Chrome ext (published).
