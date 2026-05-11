// FounderMath Pro Feature Gating System
(function() {
    const PRO_KEY = 'foundermath_pro';
    const PRO_EMAIL_KEY = 'foundermath_pro_email';
    const EMAIL_CAPTURES_KEY = 'foundermath_emails';
    const STRIPE_PRO_LINK = 'https://buy.stripe.com/8x26oH3Gw4KW2ZY0xNeEo06?utm_source=founder-math&utm_medium=modal&utm_campaign=pro_upgrade';
    const STRIPE_TEAM_LINK = 'https://buy.stripe.com/cNicN5dh691ceIG5S7eEo05?utm_source=founder-math&utm_medium=modal&utm_campaign=team_upgrade';

    // Check if user is Pro
    function isProUser() {
        return localStorage.getItem(PRO_KEY) === 'true';
    }

    // Get pro email
    function getProEmail() {
        return localStorage.getItem(PRO_EMAIL_KEY) || '';
    }

    // Activate Pro (called from success page or manual activation)
    function activatePro(email) {
        localStorage.setItem(PRO_KEY, 'true');
        if (email) localStorage.setItem(PRO_EMAIL_KEY, email);
        // Track activation
        if (typeof gtag === 'function') {
            gtag('event', 'pro_activated', { method: email ? 'purchase' : 'manual' });
        }
    }

    // Gate a feature behind Pro
    function requirePro(featureName, callback) {
        if (isProUser()) {
            callback();
            return;
        }
        showUpgradeModal(featureName);
        // Track feature attempt
        if (typeof gtag === 'function') {
            gtag('event', 'pro_feature_attempt', { feature: featureName });
        }
    }

    // Track upgrade click from modal
    function trackUpgradeClick(featureName) {
        if (typeof gtag === 'function') {
            gtag('event', 'pricing_click', {
                tier: 'pro',
                source: 'modal',
                feature: featureName
            });
        }
    }

    // Show upgrade modal
    function showUpgradeModal(featureName) {
        // Remove existing modal if any
        var existing = document.getElementById('fm-pro-modal');
        if (existing) existing.remove();

        var overlay = document.createElement('div');
        overlay.id = 'fm-pro-modal';
        overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:10000;display:flex;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px);';

        var modal = document.createElement('div');
        modal.style.cssText = 'background:var(--bg-secondary,#12121a);border:1px solid var(--border,#2a2a40);border-radius:16px;max-width:460px;width:100%;padding:32px;position:relative;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;';
        modal.innerHTML =
            '<button id="fm-pro-close" style="position:absolute;top:12px;right:16px;background:none;border:none;color:var(--text-muted,#666680);font-size:24px;cursor:pointer;line-height:1;" aria-label="Close">&times;</button>' +
            '<div style="text-align:center;margin-bottom:24px;">' +
                '<div style="display:inline-flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:12px;background:linear-gradient(135deg,#6c5ce7,#a29bfe);margin-bottom:16px;">' +
                    '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L3 7l9 5 9-5-9-5zM3 17l9 5 9-5M3 12l9 5 9-5"/></svg>' +
                '</div>' +
                '<h3 style="color:var(--text-primary,#f0f0f5);font-size:1.25rem;margin:0 0 8px;">Unlock ' + featureName + '</h3>' +
                '<p style="color:var(--text-secondary,#a0a0b5);font-size:0.9rem;margin:0;">Upgrade to FounderMath Pro to save unlimited scenarios, export PDFs, and compare side-by-side.</p>' +
            '</div>' +
            '<div style="background:var(--bg-card,#1a1a2e);border-radius:10px;padding:16px;margin-bottom:20px;">' +
                '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b894" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>' +
                    '<span style="color:var(--text-primary,#f0f0f5);font-size:0.9rem;">Save unlimited scenarios</span>' +
                '</div>' +
                '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b894" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>' +
                    '<span style="color:var(--text-primary,#f0f0f5);font-size:0.9rem;">Export charts as PDF</span>' +
                '</div>' +
                '<div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b894" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>' +
                    '<span style="color:var(--text-primary,#f0f0f5);font-size:0.9rem;">Compare scenarios side-by-side</span>' +
                '</div>' +
                '<div style="display:flex;align-items:center;gap:10px;">' +
                    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b894" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>' +
                    '<span style="color:var(--text-primary,#f0f0f5);font-size:0.9rem;">Multi-round dilution simulation</span>' +
                '</div>' +
            '</div>' +
            '<a href="' + STRIPE_PRO_LINK + '" target="_blank" style="display:block;text-align:center;background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:white;text-decoration:none;padding:14px 24px;border-radius:8px;font-weight:700;font-size:1rem;margin-bottom:10px;transition:opacity 0.2s;" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=1" onclick="window.FounderMathPro.trackUpgradeClick(\'' + featureName + '\')">Upgrade to Pro — $19/month</a>' +
            '<button id="fm-pro-maybe" style="display:block;width:100%;text-align:center;background:none;border:none;color:var(--text-muted,#666680);font-size:0.85rem;cursor:pointer;padding:8px;">Maybe later</button>';

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        // Close handlers
        function closeModal() {
            var m = document.getElementById('fm-pro-modal');
            if (m) m.remove();
        }
        document.getElementById('fm-pro-close').onclick = closeModal;
        document.getElementById('fm-pro-maybe').onclick = closeModal;
        overlay.onclick = function(e) { if (e.target === overlay) closeModal(); };
        document.addEventListener('keydown', function esc(e) {
            if (e.key === 'Escape') { closeModal(); document.removeEventListener('keydown', esc); }
        });
    }

    // Email capture — stores locally AND sends to Buttondown via API
    function captureEmail(email, source) {
        if (!email || !email.includes('@')) return false;
        var emails = JSON.parse(localStorage.getItem(EMAIL_CAPTURES_KEY) || '[]');
        // Don't add duplicates locally
        if (emails.some(function(e) { return e.email === email; })) return false;
        emails.push({ email: email, date: new Date().toISOString(), source: source || 'unknown' });
        localStorage.setItem(EMAIL_CAPTURES_KEY, JSON.stringify(emails));
        // Track
        if (typeof gtag === 'function') {
            gtag('event', 'email_capture', { source: source || 'unknown' });
        }
        // Send to Buttondown API (fire and forget)
        try {
            fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            }).catch(function() {});
        } catch(e) {}
        return true;
    }

    // Show email capture inline — enhanced with more compelling copy
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

        document.getElementById('fm-email-form-' + source).onsubmit = function(e) {
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
                msg.textContent = 'You\'re already subscribed!';
                msg.style.color = 'var(--text-secondary,#a0a0b5)';
                msg.style.display = 'block';
            }
        };
    }

    // Pro badge for nav
    function renderProBadge() {
        if (isProUser()) {
            var badge = document.createElement('span');
            badge.style.cssText = 'background:linear-gradient(135deg,#6c5ce7,#a29bfe);color:white;font-size:0.7rem;padding:2px 8px;border-radius:10px;font-weight:700;margin-left:4px;vertical-align:middle;';
            badge.textContent = 'PRO';
            return badge;
        }
        return null;
    }

    // Init: add pro badge to nav if pro user
    function init() {
        if (isProUser()) {
            var logoLink = document.querySelector('nav a[href="index.html"], nav a[href="/"]');
            if (logoLink) {
                var badge = renderProBadge();
                if (badge) logoLink.appendChild(document.createTextNode(' '));
                if (badge) logoLink.appendChild(badge);
            }
        }
    }

    // Run init on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose API
    window.FounderMathPro = {
        isPro: isProUser,
        requirePro: requirePro,
        activatePro: activatePro,
        captureEmail: captureEmail,
        renderEmailCapture: renderEmailCapture,
        getProEmail: getProEmail,
        trackUpgradeClick: trackUpgradeClick,
        STRIPE_PRO_LINK: STRIPE_PRO_LINK,
        STRIPE_TEAM_LINK: STRIPE_TEAM_LINK
    };
})();
