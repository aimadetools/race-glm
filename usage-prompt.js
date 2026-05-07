// FounderMath Usage-Based Upgrade Prompts
// Shows a soft nudge to upgrade after N calculator uses
(function() {
    var USAGE_KEY = 'fm_calc_usage';
    var DISMISSED_KEY = 'fm_prompt_dismissed';
    var PROMPT_AFTER = 3; // Show prompt after 3 calculator uses

    function getUsage() {
        try {
            var data = JSON.parse(localStorage.getItem(USAGE_KEY) || '{}');
            return data;
        } catch(e) { return {}; }
    }

    function saveUsage(data) {
        try { localStorage.setItem(USAGE_KEY, JSON.stringify(data)); } catch(e) {}
    }

    function isDismissed() {
        try {
            var d = localStorage.getItem(DISMISSED_KEY);
            if (!d) return false;
            // Reset dismissal after 7 days
            return (Date.now() - parseInt(d)) < 7 * 24 * 60 * 60 * 1000;
        } catch(e) { return false; }
    }

    // Track a calculator use. Call from each calculator page.
    function trackUse(calculatorName) {
        if (window.FounderMathPro && window.FounderMathPro.isPro()) return;
        if (isDismissed()) return;

        var data = getUsage();
        if (!data[calculatorName]) data[calculatorName] = 0;
        data[calculatorName]++;
        data._total = (data._total || 0) + 1;
        saveUsage(data);

        if (data._total >= PROMPT_AFTER) {
            // Show prompt after a short delay
            setTimeout(function() { showNudge(calculatorName); }, 2000);
        }
    }

    function showNudge(calculatorName) {
        if (document.getElementById('fm-usage-nudge')) return;

        var nudge = document.createElement('div');
        nudge.id = 'fm-usage-nudge';
        nudge.style.cssText = 'position:fixed;bottom:24px;right:24px;background:var(--bg-secondary,#12121a);border:1px solid var(--border,#2a2a40);border-radius:12px;padding:20px;max-width:320px;z-index:9999;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;box-shadow:0 8px 30px rgba(0,0,0,0.4);transition:transform 0.3s,opacity 0.3s;';
        nudge.innerHTML =
            '<button onclick="this.parentElement.remove()" style="position:absolute;top:8px;right:10px;background:none;border:none;color:var(--text-muted,#666680);font-size:18px;cursor:pointer;line-height:1;" aria-label="Dismiss">&times;</button>' +
            '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">' +
                '<div style="width:36px;height:36px;border-radius:8px;background:linear-gradient(135deg,#6c5ce7,#a29bfe);display:flex;align-items:center;justify-content:center;flex-shrink:0;">' +
                    '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><path d="M12 2L3 7l9 5 9-5-9-5z"/><path d="M3 17l9 5 9-5"/><path d="M3 12l9 5 9-5"/></svg>' +
                '</div>' +
                '<div>' +
                    '<div style="color:var(--text-primary,#f0f0f5);font-weight:700;font-size:0.9rem;">Founding 50: 50% Off Pro</div>' +
                    '<div style="color:var(--text-secondary,#a0a0b5);font-size:0.8rem;">Save scenarios, export PDFs &mdash; $9.50/mo forever</div>' +
                '</div>' +
            '</div>' +
            '<a href="/founding.html?utm_source=founder-math&utm_medium=usage_prompt&utm_campaign=founding50" target="_blank" style="display:block;text-align:center;background:linear-gradient(135deg,#feca57,#ff9f43);color:#1a1a2e;text-decoration:none;padding:10px 16px;border-radius:8px;font-weight:700;font-size:0.85rem;transition:opacity 0.2s;" onmouseover="this.style.opacity=0.9" onmouseout="this.style.opacity=1">Claim Your 50% Discount &rarr;</a>' +
            '<div style="text-align:center;margin-top:6px;">' +
                '<span style="color:var(--text-muted,#666680);font-size:0.7rem;">Only 50 spots at this price</span>' +
                ' &middot; ' +
                '<button onclick="localStorage.setItem(\'' + DISMISSED_KEY + '\', Date.now().toString());this.parentElement.parentElement.remove()" style="background:none;border:none;color:var(--text-muted,#666680);font-size:0.7rem;cursor:pointer;text-decoration:underline;">Dismiss</button>' +
            '</div>';

        document.body.appendChild(nudge);

        // Auto-dismiss after 15 seconds
        setTimeout(function() {
            var el = document.getElementById('fm-usage-nudge');
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                setTimeout(function() { if (el.parentElement) el.remove(); }, 300);
            }
        }, 15000);

        if (typeof gtag === 'function') {
            gtag('event', 'usage_prompt_shown', { calculator: calculatorName });
        }
    }

    // Expose
    window.FMUsagePrompt = { trackUse: trackUse };
})();
