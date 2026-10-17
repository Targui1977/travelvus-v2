# Search Intelligence System
**Travelvus V2 — Phase 123.0**

---

## Overview

The Search Intelligence System provides the framework for measuring organic growth, classifying content performance, and making data-driven expansion decisions. Every metric is designed to be measurable through standard SEO tools (Google Search Console, Google Analytics, or equivalent).

---

## Core KPIs

### Traffic & Visibility

| KPI | Definition | Target |
|-----|-----------|--------|
| Total Impressions | Sum of all search impressions across all pages | Growth month-over-month |
| Total Clicks | Sum of all search clicks | Growth month-over-month |
| Average CTR | Clicks ÷ Impressions | >3% overall, >5% for guides |
| Average Position | Weighted average search position | <10 for top 20 pages |
| Indexed Pages | Pages in Google's index | ≥ sitemap count (140) |
| Coverage | % of sitemap pages indexed | >95% |

### Content Performance

| KPI | Definition | Target |
|-----|-----------|--------|
| Top Performing Pages | Pages with highest impressions | Track top 20 monthly |
| Growing Pages | Pages with >20% impression growth MoM | Identify and amplify |
| Declining Pages | Pages with >10% impression decline MoM | Investigate and fix |
| Zero-Click Pages | Indexed pages with 0 impressions in 30 days | Should approach 0 |
| High-Impression / Low-CTR | Pages above median impressions but below median CTR | Title/metadata candidates |

### City Performance

| KPI | Definition | Target |
|-----|-----------|--------|
| City Total Impressions | Sum across all city pages | Rank cities monthly |
| City Average CTR | Weighted CTR across city pages | >3% |
| City Guide Performance | Average position of city guides | <15 |
| Hub Page CTR | Hub page CTR specifically | >5% (high-intent page) |

### User Behavior

| KPI | Definition | Target |
|-----|-----------|--------|
| Planner Sessions | Visitors who use Arrival Planner | Growth month-over-month |
| Compare Clicks | Clicks from any page into Decision Engine | Track funnel |
| Bounce Rate | % of single-page sessions | <60% |
| Pages Per Session | Average pages viewed per session | >2.0 |

---

## Route Classification

Every Travelvus route falls into one of these categories for performance analysis:

### 1. Airport Hubs (3 routes)
`/{city}/airport-choice/`
- **Purpose:** Top-of-funnel discovery. Primary landing page per city.
- **Success Metric:** High impressions, high CTR, low bounce rate.
- **SEO Priority:** Highest.

### 2. Destination Guides (12+ routes)
`/guides/best-airport-for-{destination}`
- **Purpose:** Long-tail destination-specific queries.
- **Success Metric:** Impressions for "[neighbourhood] airport" queries. High CTR.
- **SEO Priority:** High.

### 3. Traveller Guides (24+ routes)
`/guides/best-airport-for-{traveller-type}-{city}`
- **Purpose:** Scenario-based long-tail queries.
- **Success Metric:** Impressions for "best airport for [scenario]" queries.
- **SEO Priority:** Medium.

### 4. Knowledge Articles (16 routes)
`/knowledge/{topic}`
- **Purpose:** Educational content. Supports topical authority.
- **Success Metric:** Impressions for informational queries. Internal link CTR.
- **SEO Priority:** Medium.

### 5. Arrival Planner (1 route)
`/planner`
- **Purpose:** Interactive tool. High engagement value.
- **Success Metric:** Sessions, completion rate, compare clicks.
- **SEO Priority:** High (tool page).

### 6. Trust Pages (4 routes)
`/methodology`, `/editorial-standards`, `/data-coverage`, `/limitations`
- **Purpose:** EEAT signals. Credibility infrastructure.
- **Success Metric:** Internal traffic from content pages. Low bounce rate.
- **SEO Priority:** Low (supporting pages).

### 7. Legacy Articles (20 routes)
`/wego-flight`, `/kayak-flights`, `/tsa-precheck-cost`, etc.
- **Purpose:** Existing indexed content. Not actively maintained.
- **Success Metric:** Maintain or redirect. Identify candidates for modernization.
- **SEO Priority:** Low (maintenance only).

### 8. System Pages (1 route)
`/result` — Dynamic comparison result. Noindex.
`/coverage` — Internal dashboard. Noindex.

---

## Data Collection Cadence

| Frequency | Action |
|-----------|--------|
| Weekly | Check indexed pages count, identify zero-click pages |
| Monthly | Full KPI report: impressions, clicks, CTR, position, city ranking |
| Quarterly | Content audit: identify growing/declining pages, review priority engine scores |
| Per City Launch | Baseline measurement before launch, 30-day and 90-day post-launch reports |

---

## Integration Points

- **Coverage Dashboard:** Add search KPI placeholders when data becomes available
- **Priority Engine:** Feed actual search demand data into city scoring (replace estimates)
- **Expansion Triggers:** Use real performance to gate future city launches
