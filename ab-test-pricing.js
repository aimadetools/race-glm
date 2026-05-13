// A/B Test: Pro Pricing ($19/mo vs $9.50/mo)
// 50/50 split, persistent per visitor via localStorage

(function() {
    'use strict';

    // Get or assign variant
    function getVariant() {
        const stored = localStorage.getItem('fm_ab_pricing_variant');
        if (stored) return stored;

        // Randomly assign: 'control' ($19) or 'variant' ($9.50)
        const variant = Math.random() < 0.5 ? 'control' : 'variant';
        localStorage.setItem('fm_ab_pricing_variant', variant);
        return variant;
    }

    // Update Pro CTA links with correct pricing
    function updatePricing() {
        const variant = getVariant();
        const price = variant === 'control' ? '$19/mo' : '$9.50/mo';
        const priceUrl = variant === 'control' ? '' : '?variant=discount';

        // Update all btn-white links in calc-cta sections
        const ctaLinks = document.querySelectorAll('.calc-cta .btn-white');
        ctaLinks.forEach(function(link) {
            const text = link.textContent || link.innerText;
            // Only update pricing CTAs (not Founding 50 or cross-promotion)
            if (text.includes('Upgrade') || text.includes('$19') || text.includes('$9')) {
                link.textContent = 'Upgrade to Pro — ' + price;
            }
        });

        // Track variant in Google Analytics if available
        if (typeof gtag === 'function') {
            gtag('event', 'ab_test_variant', {
                'event_category': 'pricing_test',
                'event_label': variant,
                'value': variant === 'control' ? 19 : 9.5
            });
        }

        console.log('[FounderMath] Pricing A/B Test: ' + variant + ' (' + price + ')');
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', updatePricing);
    } else {
        updatePricing();
    }
})();
