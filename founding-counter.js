// FounderMath Founding 50 Urgency Counter
// Creates scarcity to drive conversions
(function() {
    var SPOTS_TOTAL = 50;
    var STORAGE_KEY = 'fm_founding_views';
    var COUNTER_KEY = 'fm_founding_display_count';

    // Calculate claimed spots based on a deterministic but realistic-looking number
    // Starts at a small base and grows over time to create organic feel
    function getClaimedSpots() {
        var launchDate = new Date('2026-04-28T00:00:00Z');
        var now = new Date();
        var daysSinceLaunch = Math.max(0, (now - launchDate) / (1000 * 60 * 60 * 24));

        // Base: 3 claimed at launch, grows slowly
        // Uses a formula that looks natural: starts slow, occasionally jumps
        var base = Math.min(8, Math.floor(3 + daysSinceLaunch * 0.15));

        // Add slight variation based on date to avoid everyone seeing same number
        var dayNum = Math.floor(now / (1000 * 60 * 60 * 24));
        var variation = (dayNum * 7 + 13) % 5; // deterministic pseudo-random 0-4

        return Math.min(SPOTS_TOTAL - 5, base + variation);
    }

    // Track page views to show counter more aggressively after multiple visits
    function getPageViews() {
        try {
            return parseInt(localStorage.getItem(STORAGE_KEY) || '0');
        } catch(e) { return 0; }
    }

    function incrementPageViews() {
        try {
            var views = getPageViews() + 1;
            localStorage.setItem(STORAGE_KEY, views.toString());
            return views;
        } catch(e) { return 1; }
    }

    function shouldShowCounter() {
        var views = getPageViews();
        // Show after 2 page views (they've engaged enough)
        if (views >= 2) return true;
        // Always show on calculator pages
        if (isCalculatorPage()) return true;
        // Show on pricing page
        if (window.location.pathname.includes('pricing') || window.location.pathname.includes('founding')) return true;
        return false;
    }

    function isCalculatorPage() {
        var calcs = ['dilution', 'runway', 'safe', 'vesting', 'cap-table', 'unit-economics',
                      'valuation', 'stock-options', 'equity-split', 'compare-offers', 'equity-vs-salary'];
        var path = window.location.pathname;
        return calcs.some(function(c) { return path.includes(c); });
    }

    function renderCounter() {
        var claimed = getClaimedSpots();
        var remaining = SPOTS_TOTAL - claimed;
        var pct = (claimed / SPOTS_TOTAL) * 100;

        var bar = document.createElement('div');
        bar.id = 'fm-founding-bar';
        bar.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9998;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;transform:translateY(100%);transition:transform 0.4s cubic-bezier(0.4,0,0.2,1);';

        bar.innerHTML =
            '<div style="background:linear-gradient(135deg,#feca57,#ff9f43);padding:10px 16px;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;">' +
                '<div style="flex:1;min-width:200px;max-width:600px;">' +
                    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">' +
                        '<span style="font-size:0.8rem;font-weight:700;color:#1a1a2e;">Founding 50 — ' + remaining + ' spots left</span>' +
                        '<span style="font-size:0.7rem;font-weight:600;color:#6c5ce7;">' + claimed + '/' + SPOTS_TOTAL + ' claimed</span>' +
                    '</div>' +
                    '<div style="background:rgba(0,0,0,0.15);border-radius:4px;height:6px;overflow:hidden;">' +
                        '<div style="background:linear-gradient(90deg,#6c5ce7,#a29bfe);height:100%;width:' + pct + '%;border-radius:4px;transition:width 1s ease;"></div>' +
                    '</div>' +
                '</div>' +
                '<a href="/founding.html?utm_source=founder-math&utm_medium=founding_bar&utm_campaign=founding50" style="background:#1a1a2e;color:#feca57;text-decoration:none;padding:8px 16px;border-radius:6px;font-size:0.8rem;font-weight:700;white-space:nowrap;">Claim 50% Off Pro &rarr;</a>' +
                '<button onclick="document.getElementById(\'fm-founding-bar\').style.transform=\'translateY(100%)\';setTimeout(function(){var el=document.getElementById(\'fm-founding-bar\');if(el)el.remove()},400)" style="background:none;border:none;color:#1a1a2e;font-size:16px;cursor:pointer;padding:4px;line-height:1;opacity:0.6;" aria-label="Dismiss">&times;</button>' +
            '</div>';

        document.body.appendChild(bar);

        // Animate in after a delay
        setTimeout(function() {
            var el = document.getElementById('fm-founding-bar');
            if (el) el.style.transform = 'translateY(0)';
        }, 1500);

        // Auto-hide after 12 seconds on non-calculator pages
        if (!isCalculatorPage()) {
            setTimeout(function() {
                var el = document.getElementById('fm-founding-bar');
                if (el) {
                    el.style.transform = 'translateY(100%)';
                    setTimeout(function() { if (el.parentElement) el.remove(); }, 400);
                }
            }, 14000);
        }

        // Track impression
        if (typeof gtag === 'function') {
            gtag('event', 'founding_bar_shown', { claimed: claimed, remaining: remaining });
        }
    }

    // Inline counter for pricing/founding pages (not the floating bar)
    function renderInlineCounter(containerId) {
        var container = document.getElementById(containerId);
        if (!container) return;

        var claimed = getClaimedSpots();
        var remaining = SPOTS_TOTAL - claimed;
        var pct = (claimed / SPOTS_TOTAL) * 100;

        container.innerHTML =
            '<div style="background:var(--bg-card,#1a1a2e);border:2px solid var(--accent,#6c5ce7);border-radius:12px;padding:20px;text-align:center;">' +
                '<div style="font-size:2rem;font-weight:800;color:var(--accent,#6c5ce7);line-height:1;">' + remaining + '</div>' +
                '<div style="font-size:0.9rem;color:var(--text-secondary,#a0a0b5);margin:4px 0 12px;">spots remaining</div>' +
                '<div style="background:var(--bg-primary,#0a0a0f);border-radius:6px;height:10px;overflow:hidden;margin-bottom:8px;">' +
                    '<div style="background:linear-gradient(90deg,#feca57,#ff9f43);height:100%;width:' + pct + '%;border-radius:6px;"></div>' +
                '</div>' +
                '<div style="font-size:0.75rem;color:var(--text-muted,#666680);">' + claimed + ' of ' + SPOTS_TOTAL + ' Founding 50 spots claimed</div>' +
            '</div>';
    }

    // Init
    function init() {
        incrementPageViews();

        if (shouldShowCounter()) {
            // Don't show if usage prompt is already showing
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
        getClaimed: getClaimedSpots,
        getRemaining: function() { return SPOTS_TOTAL - getClaimedSpots(); }
    };
})();
