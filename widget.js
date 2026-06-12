/**
 * FounderMath Widget — Embeddable Startup Equity Calculators
 * https://founder-math.com
 *
 * Usage:
 *   <div data-foundermath="dilution"></div>
 *   <script src="https://founder-math.com/widget.js" async></script>
 *
 * Supported types: dilution, safe, runway, equity-split, compare-offers
 * Options via data attributes:
 *   data-foundermath="dilution"        — calculator type (required)
 *   data-foundermath-height="500"      — iframe height in px (default: 520)
 *   data-foundermath-theme="light"     — theme: "light" or "dark" (default: light)
 *   data-foundermath-utm-source="blog" — UTM source for tracking
 */
(function () {
    'use strict';

    var WIDGETS = {
        'dilution': {
            url: 'https://founder-math.com/widget-equity-dilution.html',
            title: 'Equity Dilution Calculator',
            height: 520
        },
        'safe': {
            url: 'https://founder-math.com/widget-safe-note.html',
            title: 'SAFE Note Calculator',
            height: 560
        },
        'runway': {
            url: 'https://founder-math.com/widget-runway.html',
            title: 'Startup Runway Calculator',
            height: 480
        },
        'equity-split': {
            url: 'https://founder-math.com/widget-equity-split.html',
            title: 'Co-Founder Equity Split Calculator',
            height: 580
        },
        'compare-offers': {
            url: 'https://founder-math.com/widget-compare-offers.html',
            title: 'Compare Equity Offers',
            height: 620
        }
    };

    function getParams(container) {
        var type = (container.getAttribute('data-foundermath') || '').toLowerCase().trim();
        if (!WIDGETS[type]) return null;

        var config = WIDGETS[type];
        var height = parseInt(container.getAttribute('data-foundermath-height')) || config.height;
        var theme = (container.getAttribute('data-foundermath-theme') || 'light').toLowerCase();
        var utmSource = container.getAttribute('data-foundermath-utm-source') || 'widget';
        var utmMedium = 'embed';
        var utmCampaign = type + '_widget';

        var src = config.url + '?theme=' + encodeURIComponent(theme) +
            '&utm_source=' + encodeURIComponent(utmSource) +
            '&utm_medium=' + encodeURIComponent(utmMedium) +
            '&utm_campaign=' + encodeURIComponent(utmCampaign);

        return {
            type: type,
            src: src,
            title: config.title,
            height: height,
            theme: theme
        };
    }

    function createIframe(params) {
        var wrapper = document.createElement('div');
        wrapper.style.cssText = 'position:relative;width:100%;max-width:600px;margin:0 auto;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;';

        var iframe = document.createElement('iframe');
        iframe.src = params.src;
        iframe.title = params.title;
        iframe.width = '100%';
        iframe.height = String(params.height);
        iframe.frameBorder = '0';
        iframe.style.cssText = 'border:1px solid #e0e0e8;border-radius:12px;max-width:100%;display:block;background:#fff;';
        iframe.setAttribute('loading', 'lazy');
        iframe.setAttribute('allow', 'clipboard-write');
        wrapper.appendChild(iframe);

        // "Powered by" link
        var credit = document.createElement('div');
        credit.style.cssText = 'text-align:center;padding:8px 0 0;font-size:0.75rem;color:#888;';
        credit.innerHTML = '<a href="https://founder-math.com/?utm_source=' +
            encodeURIComponent(params.type) +
            '&utm_medium=widget&utm_campaign=' +
            encodeURIComponent(params.type) +
            '_credit" target="_blank" rel="noopener" style="color:#6c5ce7;text-decoration:none;font-weight:600;">Powered by FounderMath</a> — Free startup equity calculators';
        wrapper.appendChild(credit);

        return wrapper;
    }

    function init() {
        var containers = document.querySelectorAll('[data-foundermath]');
        for (var i = 0; i < containers.length; i++) {
            var container = containers[i];
            // Skip if already initialized
            if (container.getAttribute('data-foundermath-initialized')) continue;

            var params = getParams(container);
            if (!params) {
                console.warn('FounderMath Widget: Unknown calculator type "' + container.getAttribute('data-foundermath') + '". Supported: ' + Object.keys(WIDGETS).join(', '));
                continue;
            }

            var iframe = createIframe(params);
            container.innerHTML = '';
            container.appendChild(iframe);
            container.setAttribute('data-foundermath-initialized', 'true');
        }
    }

    // Run on DOMContentLoaded or immediately if DOM already ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
