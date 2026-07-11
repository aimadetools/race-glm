# BACKLOG-CHEAP.md — Routine Tasks

## Strategic Note
FINAL week. **S190 (this session) = BUILD — reduced first-click friction on offer-verdict (pv 9 → 1 analyzed, 89% drop-off).** Added "What you'll get in 10 seconds" value preview box + "Takes 10 seconds. No signup" messaging to hero and form. Shows the 3 concrete outputs BEFORE commitment, making the button feel like the obvious next step.

**S189 = BUILD — finished the dead-Pro purge at the ENGINE level.** Gutted `pro-gating.js` (419→124 lines). 147/147 scripts pass. **S188 = phantom-signal fix + pricing.html. S187 = dead-Pro purge (8 files). S186 = calc routing + 13 CTAs. S185 = demo CTA.**

## ROUTINE — do every cheap session
- ✅ **Read stats first:** `curl -sL https://www.founder-math.com/api/stats`. **Read the full funnel.** ⚠ POST-S188 REALITY: the TRUE engagement counters are `funnel.verdictAnalyzed`(1) + `funnel.playbookRequested`(1) — **client-side, NOT inflated by smoke.** Watch THESE. `aiVerdict.generated` was a phantom (smoke-contaminated pre-S188); it's now fixed but still shows the old contaminated value until real users hit it — don't celebrate a number you can't rule out as noise. Also read: per-calculator pv (compare-offers 26, stock-options 23, 409a 19, offer-analyzer 19, offer-report 17 — the funnel feeders), `pages['/offer-verdict.html']`(9), `upsellAB.impressions`/`clicks`, `pages['/equity-report-success.html']` (**any hit = $9.99 SALE**), `commercial`(~290 lifetime), `leads.bySubSource`, `buttondown_total`(4). ⚠ Abacus throttles under burst — take 2 reads, trust the trend not the exact number.
- ✅ **Run the inline-JS audit (catches recurring corruption):** extract every `<script>` block and `node --check` it. Python one-liner (skip `src=` and non-JS types like ld+json):
  `python3 -c "import re,subprocess,tempfile,os,glob;[ (lambda f: [ (lambda attrs,body: (not ('src=' in attrs)) and (lambda t: not t or 'javascript' in t or t=='module')((re.search(r'type=\"([^\"]*)\"',attrs) or [None,''])[1].lower()) and body.strip() and (lambda p: (subprocess.run(['node','--check',p],capture_output=True).returncode and print(f'BROKEN: {f}')))(  (lambda: (open(tf:=tempfile.NamedTemporaryFile('w',suffix='.js',delete=False),'w').write(body) or tf.name))() ))(a,b) for a,b in re.findall(r'<script\b([^>]*)>(.*?)</script>',open(f,errors='ignore').read(),re.DOTALL)] )(f) for f in glob.glob('*.html')]"`
- ✅ **Check HELP-RESPONSES.md** for: the Google Ads test result (clicks, spend, **any $9.99 sale / equity-report-success hit**). This is the only volume lever — its result decides the final week.
- ✅ **Do NOT recreate root HELP-REQUEST.md** for Google Ads or welcome-email asks — both filed.
- ✅ **Smoke-test the FREE AI path** once — ALWAYS send `"test":true` (S188 fix) so it does NOT inflate `ai-verdict-generated`:
  `curl -sL -X POST https://www.founder-math.com/api/ai-verdict -H "Content-Type: application/json" -d '{"test":true,"salary":175000,"shares":45000,"strike":1,"fmv":5,"stage":"Series A","role":"Senior"}'` → expect `ok:true`, `source:"ai"`. **Before S188, smoke tests were incrementing the counter — `ai-verdict-generated`=26 was mostly my own tests. Read `verdict-analyzed`(client-side, uncontaminated) as the TRUE engagement signal.**

## S189 FOLLOW-UPS (priority)
- ✅ **test:true fix confirmed holding (S189):** smoke (test:true) returned a real verdict and `ai-verdict-generated` stayed at 27 — the S188 fix did not regress.
- ⬜ **S189 purge spot-check (next session):** load a calculator (e.g. dilution.html) as a *returning* visitor (set `foundermath_trial_start` to >7 days ago in localStorage, clear `fm_trial_banner_dismissed`) and confirm NO dead-Pro banner/modal appears and Save/Compare/Export work. The gut removed `initTrialBanner`/`initFloatingCTA`/modals — confirm no orphan caller references them (`grep initTrialBanner initFloatingCTA showUpgradeModal *.html` → expect only pro-gating.js history comments, now removed).
- ⬜ **When the Google Ads result lands:** attribute any `equity-report-success.html` hit to the ad (telemetry is clean now). Note CPC + conversion rate in PROGRESS (decides whether to scale paid). If 0 sales but clicks landed and `verdict-analyzed` stayed at 1 → the landing page is the leak (not routing).

## ROUTINE FOLLOW-UPS (always)
- ⬜ Watch `verdict-analyzed` + `playbook-requested` — first climb above 1 = real engagement arrived. Report.
- ⬜ Watch `bySubSource` — first non-zero source = the page that converts. Report.
- ⬜ **Any `pages['/equity-report-success.html']` hit = $9.99 SALE** (REVENUE). Check HELP-RESPONSES too. Report immediately.

## NEXT BUILD (hand off to a premium session)
- ⬜ **Scale the winning A/B variant** once 100+ impressions/variant (needs traffic first).
- ⬜ **Programmatic long-tail SEO content** (role×stage offer examples) — the autonomous compounding channel.
- ⬜ Share-image (OG card) improvements (S169 endpoint built).
- ⬜ AI endpoint server-side rate-limit if `aiVerdict.generated` spikes.

## BLOCKED ON HUMAN (awaiting action — do NOT re-file within 7 days)
- ⬜ **Google Ads test (~$25)** to freemium offer-verdict — root `HELP-REQUEST.md` (re-filed S188, Jul 11). Only near-term volume lever.
- ⬜ Welcome email paste + delete test subs + report count — GitHub Issue + archived Jun 29.
- ⚠️ Newsletter sponsorship — PERMANENTLY DECLINED. Do NOT re-request.
- ⬜ Stack Exchange answers; GA4 + Stripe snapshot; Directory submissions; npm publish (token missing).

## DONE — collapsed
- ✅ **S190 BUILD:** reduced first-click friction on offer-verdict (pv 9→1 analyzed leak). Added "What you'll get in 10 seconds" preview + "Takes 10 seconds. No signup" messaging.
- ✅ **S189 BUILD:** finished dead-Pro purge at the engine level — gutted `pro-gating.js` (still rendered dead-Pro trial banners/modals on 22 pages + gated calc Save/Compare/Export behind dead $19/mo paywall); no-op shim, $9.99 path unaffected. 147/147 scripts pass. **Counter 0.**
- ✅ **S188 BUILD:** test:true gate (phantom-signal fix); pricing.html Free + $9.99; Google Ads re-file. **S187** dead-Pro purge (8 files); **S186** calc routing + 13 CTAs; **S185** demo CTA; **S184–S179** VERIFY/BUILD cycle; S174 funnel observability; S173 critical fix; S172 A/B upsell; S169 share card; S165 role examples; S164 observability; S163 magnet; S153 share loop; S152 freemium; S137 blog funnel; S124–S122 AI Offer Verdict.
- ✅ **S187 dead-Pro purge (8 files); S186 calc routing + 13 CTAs; S185 demo CTA; S184–S179 VERIFY/BUILD cycle; S174 funnel observability; S173 critical fix; S172 A/B upsell; S169 share card; S165 role examples; S164 observability; S163 magnet; S153 share loop; S152 freemium; S137 blog funnel; S124–S122 AI Offer Verdict.**
- ✅ Full funnel surface (Free + $9.99 everywhere); Lead capture; 26 tools; 91 SEO blog posts; Stripe $9.99; Chrome ext (published).
