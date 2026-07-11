// FounderMath — feature-gating shim (S189 BUILD).
//
// HISTORY: this file used to run a "FounderMath Pro" SUBSCRIPTION system — a
// 7-day free trial followed by an upgrade wall (dead Stripe Pro $19/mo and
// Team $49/mo links), plus a floating "trial ended" bar and a top banner on
// every calculator page. The subscription tiers were retired site-wide
// (S186–S188 moved the whole product to Free + a single $9.99 one-time Premium
// Equity Report), but the ENGINE here was never removed — so for any visitor
// past 7 days, every calculator showed dead-subscription modals/banners AND
// blocked the Save / Compare / Export buttons behind a dead paywall. That
// silently contradicted the "Free + $9.99" model the rest of the site now
// presents. S189 finishes the purge at the engine level.
//
// WHAT THIS FILE IS NOW: a no-op compatibility shim. Every tool is free. The
// 22 pages that load this file call window.FounderMathPro.{requirePro,isPro,
// isPaidPro,...}; those calls keep working — requirePro now simply runs the
// feature, and isPro/isPaidPro report true so any formerly-gated UI unlocks.
// The ONLY thing on the site that is NOT free is the $9.99 Premium Equity
// Report, and that is gated by a SEPARATE flag (foundermath_equity_report_
// purchased, read directly in offer-report.html / equity-report.html), NOT by
// this file — so freeing the tools here does NOT give away the paid report.
// Legit email capture (captureEmail/renderEmailCapture → /api/subscribe) is
// preserved verbatim.
(function () {
    'use strict';

    var EMAIL_CAPTURES_KEY = 'foundermath_emails';

    // Email capture — stores locally AND sends to Buttondown via /api/subscribe.
    // (Legit newsletter capture — NOT part of the retired subscription.)
    function captureEmail(email, source) {
        if (!email || email.indexOf('@') < 0) return false;
        var emails;
        try { emails = JSON.parse(localStorage.getItem(EMAIL_CAPTURES_KEY) || '[]'); } catch (e) { emails = []; }
        for (var i = 0; i < emails.length; i++) { if (emails[i] && emails[i].email === email) return false; }
        emails.push({ email: email, date: new Date().toISOString(), source: source || 'unknown' });
        try { localStorage.setItem(EMAIL_CAPTURES_KEY, JSON.stringify(emails)); } catch (e) {}
        if (typeof gtag === 'function') {
            gtag('event', 'email_capture', { source: source || 'unknown' });
        }
        try {
            fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            }).catch(function () {});
        } catch (e) {}
        return true;
    }

    // Inline email-capture widget (rendered into a container by id). Preserved
    // verbatim from the original — used by dilution.html and equity-report.html.
    function renderEmailCapture(containerId, source) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var sourceLabels = {
            'dilution': 'equity dilution insights',
            'safe': 'SAFE note tips',
            'runway': 'runway management advice',
            'vesting': 'vesting schedule tips',
            'cap-table': 'cap table management',
            'unit-economics': 'unit economics insights',
            'valuation': 'startup valuation tips',
            'stock-options': 'stock option guidance',
            'equity-split': 'equity split advice',
            'compare-offers': 'job offer negotiation tips',
            'equity-vs-salary': 'salary vs equity analysis'
        };
        var label = sourceLabels[source] || 'equity insights';

        container.innerHTML =
            '<div style="background:linear-gradient(135deg, rgba(108,92,231,0.1), rgba(162,155,254,0.05));border:1px solid var(--accent,#6c5ce7);border-radius:12px;padding:20px 24px;margin-top:24px;">' +
                '<div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">' +
                    '<div style="width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#6c5ce7,#a29bfe);display:flex;align-items:center;justify-content:center;flex-shrink:0;">' +
                        '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' +
                    '</div>' +
                    '<div>' +
                        '<span style="color:var(--text-primary,#f0f0f5);font-weight:600;font-size:0.95rem;">Get weekly ' + label + '</span>' +
                        '<p style="color:var(--text-secondary,#a0a0b5);font-size:0.8rem;margin:2px 0 0;">Free. No spam. Unsubscribe anytime.</p>' +
                    '</div>' +
                '</div>' +
                '<form id="fm-email-form-' + source + '" style="display:flex;gap:8px;flex-wrap:wrap;">' +
                    '<input type="email" id="fm-email-' + source + '" placeholder="founder@startup.com" required style="flex:1;min-width:200px;background:var(--bg-input,#15151f);border:1px solid var(--border,#2a2a40);color:var(--text-primary,#f0f0f5);padding:10px 14px;border-radius:6px;font-size:0.85rem;" aria-label="Email address">' +
                    '<button type="submit" style="background:var(--accent,#6c5ce7);color:white;border:none;padding:10px 18px;border-radius:6px;font-weight:600;font-size:0.85rem;cursor:pointer;white-space:nowrap;">Get Free Tips</button>' +
                '</form>' +
                '<p id="fm-email-msg-' + source + '" style="margin:8px 0 0;font-size:0.8rem;display:none;"></p>' +
            '</div>';

        document.getElementById('fm-email-form-' + source).onsubmit = function (e) {
            e.preventDefault();
            var email = document.getElementById('fm-email-' + source).value.trim();
            var msg = document.getElementById('fm-email-msg-' + source);
            var form = document.getElementById('fm-email-form-' + source);
            if (captureEmail(email, source)) {
                msg.textContent = 'Welcome aboard! Check your inbox for your first equity tip.';
                msg.style.color = '#00b894';
                msg.style.display = 'block';
                form.innerHTML = '<div style="display:flex;align-items:center;gap:8px;color:#00b894;font-weight:600;font-size:0.9rem;"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg> Subscribed! Check your inbox.</div>';
            } else {
                msg.textContent = "You're already subscribed!";
                msg.style.color = 'var(--text-secondary,#a0a0b5)';
                msg.style.display = 'block';
            }
        };
    }

    // Public API. Gating is a no-op: every tool is free, so the formerly-gated
    // features just run and formerly-gated UI reports as unlocked. The shape is
    // kept identical so the 22 pages calling these keep working unchanged.
    window.FounderMathPro = {
        isPro: function () { return true; },                 // all tools free
        isPaidPro: function () { return true; },             // unlocks formerly-gated UI (e.g. equity-score pro-gate)
        requirePro: function (featureName, callback) {       // run the feature immediately — no wall, no modal
            if (typeof callback === 'function') { try { callback(); } catch (e) {} }
        },
        activatePro: function () {},                         // legacy no-op
        captureEmail: captureEmail,                          // preserved (legit)
        renderEmailCapture: renderEmailCapture,              // preserved (legit)
        getProEmail: function () { return ''; },             // legacy no-op
        trackUpgradeClick: function () {},                   // legacy no-op
        getTrialInfo: function () { return { active: true, daysLeft: 0, expired: false, daysElapsed: 0 }; }
    };
})();
