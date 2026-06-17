// FounderMath Founding 50 promotional bar
//
// Honesty note: the Founding 50 offer (50% off Pro, forever) is genuinely
// limited to our first 50 Pro subscribers — that cap is real, so advertising
// "first 50 only" is honest urgency. We do NOT fabricate a growing "claimed"
// count; doing so would be dishonest social proof. getClaimed()/getRemaining()
// return the last real count confirmed in Stripe (update CLAIMED when a
// redemption lands). The visible UI is number-free so it can never mislead.
(function() {
    'use strict';

    var SPOTS_TOTAL = 50;
    // Last-known real Founding 50 redemptions (HELP-RESPONSES Issue #14, June 10: 0/50).
    // Bump this number when a real redemption shows up in Stripe.
    var CLAIMED = 0;
    var STORAGE_KEY = 'fm_founding_views';

    function getClaimedSpots() { return CLAIMED; }

    function getPageViews() {
        try { return parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10); }
        catch(e) { return 0; }
    }

    function incrementPageViews() {
        try {
            var views = getPageViews() + 1;
            localStorage.setItem(STORAGE_KEY, String(views));
            return views;
        } catch(e) { return 1; }
    }

    function isCalculatorPage() {
        var calcs = ['dilution', 'runway', 'safe', 'vesting', 'cap-table', 'unit-economics',
                     'valuation', 'stock-options', 'equity-split', 'compare-offers', 'equity-vs-salary'];
        var path = window.location.pathname;
        return calcs.some(function(c) { return path.indexOf(c) !== -1; });
    }

    function shouldShowCounter() {
        var views = getPageViews();
        if (views >= 2) return true;
        if (isCalculatorPage()) return true;
        var p = window.location.pathname;
        if (p.indexOf('pricing') !== -1 || p.indexOf('founding') !== -1) return true;
        return false;
    }

    function renderCounter() {
        var bar = document.createElement('div');
        bar.id = 'fm-founding-bar';
        bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9998;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;transform:translateY(100%);transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);';

        bar.innerHTML =
            '<div style="background:linear-gradient(135deg,#feca57,#ff9f43);padding:10px 16px;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;">' +
                '<div style="flex:1;min-width:200px;max-width:600px;text-align:center;">' +
                    '<span style="font-size:0.85rem;font-weight:700;color:#1a1a2e;">&#127881; Founding 50: 50% off Pro forever — for our first 50 subscribers</span>' +
                '</div>' +
                '<a href="/founding.html?utm_source=founder-math&amp;utm_medium=founding_bar&amp;utm_campaign=founding50" style="background:#1a1a2e;color:#feca57;text-decoration:none;padding:8px 16px;border-radius:6px;font-size:0.8rem;font-weight:700;white-space:nowrap;">Claim 50% Off Pro &rarr;</a>' +
                '<button onclick="window.FMFoundingCounter.dismiss()" style="background:none;border:none;color:#1a1a2e;font-size:16px;cursor:pointer;padding:4px;line-height:1;opacity:0.6;" aria-label="Dismiss">&times;</button>' +
            '</div>';

        document.body.appendChild(bar);

        // Animate in after a delay
        setTimeout(function() {
            var el = document.getElementById('fm-founding-bar');
            if (el) {
                el.style.transform = 'translateY(0)';
                document.body.style.paddingBottom = '70px';
            }
        }, 1500);

        // Auto-hide after ~14s on non-calculator pages
        if (!isCalculatorPage()) {
            setTimeout(function() {
                var el = document.getElementById('fm-founding-bar');
                if (el) {
                    el.style.transform = 'translateY(100%)';
                    setTimeout(function() { if (el.parentElement) el.remove(); }, 400);
                }
                setTimeout(function() { document.body.style.paddingBottom = ''; }, 400);
            }, 14000);
        }

        if (typeof gtag === 'function') {
            gtag('event', 'founding_bar_shown', {});
        }
    }

    function dismissBar() {
        var el = document.getElementById('fm-founding-bar');
        if (el) {
            el.style.transform = 'translateY(100%)';
            setTimeout(function() { if (el.parentElement) el.remove(); }, 400);
        }
        setTimeout(function() { document.body.style.paddingBottom = ''; }, 400);
    }

    // Inline counter for pricing/founding pages — honest, number-free framing.
    function renderInlineCounter(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML =
            '<div style="background:var(--bg-card,#1a1a2e);border:2px solid var(--accent,#6c5ce7);border-radius:12px;padding:20px;text-align:center;">' +
                '<div style="font-size:1.3rem;font-weight:800;color:var(--accent,#6c5ce7);line-height:1.2;">Founding 50</div>' +
                '<div style="font-size:0.95rem;color:var(--text-secondary,#a0a0b5);margin:8px 0 12px;">50% off Pro forever — limited to our first 50 subscribers.</div>' +
                '<a href="/founding.html?utm_source=founder-math&amp;utm_medium=inline_counter&amp;utm_campaign=founding50" style="display:inline-block;background:linear-gradient(135deg,#feca57,#ff9f43);color:#1a1a2e;text-decoration:none;font-weight:700;padding:10px 20px;border-radius:8px;">Claim your founding spot &rarr;</a>' +
            '</div>';
    }

    // Init
    function init() {
        incrementPageViews();

        if (shouldShowCounter()) {
            // Don't show if the usage prompt is already showing
            setTimeout(function() {
                if (!document.getElementById('fm-usage-nudge')) {
                    renderCounter();
                }
            }, 4000);
        }

        // Render any inline counters
        var inlineContainers = document.querySelectorAll('[data-founding-counter]');
        for (var i = 0; i < inlineContainers.length; i++) {
            renderInlineCounter(inlineContainers[i].id);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.FMFoundingCounter = {
        renderInline: renderInlineCounter,
        getClaimed: getClaimedSpots,                              // honest last-known count
        getRemaining: function() { return SPOTS_TOTAL - getClaimedSpots(); },
        dismiss: dismissBar
    };
})();
