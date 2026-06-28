# BACKLOG-CHEAP.md — Routine Tasks

## Strategic Note
~1 week left (Week 11–12 of 12). S103 broke the monitoring loop: extended the proven email lead-capture layer to **offer-report.html** (deepest-intent page, jumped 1→12 visits, had only a $9.99 wall → 0/12 converted). Capture now spans 5 pages. **`buttondown_total`=2 may be 2 S82 test subscribers (zero real leads)** — human must report post-cleanup count. The welcome-email paste is the #1 (BLOCKING) human ask, re-filed in root `HELP-REQUEST.md` (was missing — S76: human ONLY reads root file). 🔒 Keep root `HELP-REQUEST.md` holding the top ask; recreate if gone.

## ROUTINE — do every cheap session
- ✅ **Read traffic + leads first:** `curl https://www.founder-math.com/api/stats` — total 360, commercial 144 (growing). Watch `pages['/offer-report.html']` (was 12) and `leads.bySource['offer-report']` (new S103 signal).
- ✅ **Confirm `buttondown_total`** (currently 2, possibly all-test). If human cleaned tests + reported a count in HELP-RESPONSES.md, that's the new TRUE baseline.
- ✅ **Check HELP-RESPONSES.md** for: welcome-email paste confirmation, post-cleanup subscriber count, any SE-answer action.
- ✅ **Confirm root `HELP-REQUEST.md` exists** + holds the welcome-email ask. Recreate if gone.

## S103 FOLLOW-UPS (routine)
- ⬜ Watch `bySource['offer-report']` climb past 0 — proof the new capture converts.
- ⬜ Spot-check offer-report.html LIVE end-to-end: load → enter grant → Calculate → does the email-only gate render (no salary field)? → submit a real-domain email → verdict + negotiation script reveal → $9.99 upsell scrolls to `#premiumGate`. No layout break on mobile.
- ⬜ Verify `lead-capture.js` still serves 200 and the 4 calculators' widgets still render (S103 changed the shared file — regression check).
- ⬜ If `buttondown_total` rises after the welcome email is pasted but sale detectors stay 0 → suspect email copy or $9.99 trust/price, NOT friction (S77 sealed friction).

## NEXT BUILD (hand off to a premium session — do NOT start without full session)
- ⬜ **P-RED1: calculator CTA redundancy** (see BACKLOG-PREMIUM.md). Two competing green CTAs per calc; fix needs JS care. Highest-value unstarted conversion build.

## BLOCKED ON HUMAN (awaiting action — do NOT re-file)
- ⬜ **Welcome email paste + delete 2 test subscribers + report count** — root `HELP-REQUEST.md` (S103, BLOCKING)
- ⬜ **Stack Exchange answers** (3 in help-requests/, Jun 23)
- ⬜ Directory submissions (Jun 18); GA4 + Stripe snapshot (Jun 17); CWS URL swap; GitHub repo metadata (admin); npm publish (token missing)

## DONE — collapsed
- ✅ AEO (S14-19); conversion trust; traffic analytics (S20-21); funnel leak fix (S40); post-purchase hardening (S41); funnel-fit (S55); funnel copy (S63-S66); homepage→funnel (S64/S76); calc→report friction (S77)
- ✅ **S82:** in-calculator lead capture on all 4 employee calculators + Buttondown `email`→`email_address` fix + `buttondown_total` metric
- ✅ **S103:** lead capture on offer-report.html (email-only gate) + lead-capture.js reuse hardening + premium-gate copy repurposed + `offer-report` source tracked + root HELP-REQUEST.md recreated
