# A/B Testing Analysis Guide

## Paywall A/B Test — equity-report.html

### Test Overview
**Test Name:** equity_report_paywall
**Start Date:** Day 82 (June 11, 2026)
**Traffic Split:** Equal 25% per variant (Control + 3 variants)

### Variants

| Variant | Name | Messaging Focus | Headline |
|---------|------|-----------------|----------|
| control | Control | Feature-focused | "Unlock Your Full Report" |
| variant_b | Social Proof | Peer validation | "Join 500+ Founders Who've Unlocked..." |
| variant_c | Urgency | Fear of missing out | "Don't Sign Your Term Sheet Without Seeing This" |
| variant_d | Value-Focused | ROI/Outcome | "See What Your Equity Is Really Worth" |

### Tracking Events (GA4)

All events include `test_name: equity_report_paywall` and `variant: [control|variant_b|variant_c|variant_d]`

#### 1. Assignment Event
- **Event:** `paywall_variant_assigned`
- **When:** User visits equity-report.html for the first time
- **Use:** Verify traffic distribution is ~25% per variant

#### 2. View Event
- **Event:** `paywall_view`
- **When:** User generates a report and sees the paywall
- **Use:** Funnel analysis — how many reach paywall per variant

#### 3. Conversion Events
- **Event:** `paywall_conversion`
- **Parameters:** `action_type: [email_unlock|purchase]`
- **When:** User completes an action
- **Use:** Primary conversion metric

#### 4. Click Events
- **Event:** `paywall_click`
- **Parameters:** `action: [one_time|pro]`, `variant: [control|b|c|d]`
- **When:** User clicks a paywall link
- **Use:** Secondary engagement metric

### How to Analyze in GA4

#### Step 1: Verify Traffic Distribution
```
Explore → Event → paywall_variant_assigned
Break down by: variant
Check: Are all 4 variants getting ~25% of traffic?
```

#### Step 2: Measure Conversion Rates
```
Explore → Funnel exploration
Step 1: page_view (equity-report.html)
Step 2: paywall_view
Step 3: paywall_conversion
Segment by: variant
Compare: % conversion from paywall_view → paywall_conversion
```

#### Step 3: Compare Email vs Purchase
```
Explore → Event → paywall_conversion
Dimension: action_type
Segment by: variant
Metric: Event count
Compare: Which variant drives more email_unlock vs purchase?
```

#### Step 4: Statistical Significance
- Run test for minimum 14 days
- Aim for 1000+ paywall views per variant
- Use chi-square test for conversion rate significance
- p < 0.05 = statistically significant

### Success Metrics

**Primary:** Paywall conversion rate (email_unlock + purchase)
**Secondary:** Purchase conversion rate ($9.99)
**Tertiary:** Email capture rate

### What to Look For

1. **Winner by Conversion:** Which variant has highest total conversion rate?
2. **Winner by Revenue:** Which variant drives more $9.99 purchases?
3. **Trade-offs:** Does higher conversion come from email or purchase?

### When to Stop

- After 14 days AND
- 1000+ paywall views per variant AND
- Clear winner with statistical significance (p < 0.05)

### How to Implement Winner

Once winner is identified:
1. Update equity-report.html to show only winning variant
2. Remove A/B testing JavaScript
3. Update BACKLOG-CHEAP.md with results

### Notes

- Variant assignment is stored in localStorage for consistency
- Users see the same variant across sessions
- Stripe purchase links have UTM tags for campaign tracking
- Email unlock and $9.99 purchase are both tracked as conversions
