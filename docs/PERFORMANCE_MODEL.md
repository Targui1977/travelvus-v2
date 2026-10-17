# Performance Dashboard Model
**Travelvus V2 — Phase 123.0**

---

## Overview

This document defines the dashboard models that will measure Travelvus organic performance. These are specifications for future implementation — they describe what to measure and how to interpret it. Actual implementation depends on the analytics tool used (Google Search Console API, Google Analytics, Looker Studio, or similar).

---

## Dashboard 1 — Executive Overview

One-page summary for weekly review.

| Panel | Content | Source |
|-------|---------|--------|
| Total Impressions (30d) | Single number + % change vs previous 30d | GSC |
| Total Clicks (30d) | Single number + % change | GSC |
| Average CTR | % + trend arrow | GSC |
| Average Position | Number + trend arrow | GSC |
| Indexed Pages | Count + % of sitemap | GSC Index Coverage |
| Top City | City with most impressions | GSC filtered by URL |
| Top 5 Pages | Pages ranked by impressions | GSC |
| Planner Sessions | Count + trend | Analytics |

---

## Dashboard 2 — City Performance

Compare cities side-by-side.

| City | Impressions | Clicks | CTR | Avg Position | Top Page |
|------|------------|--------|-----|-------------|----------|
| Paris | — | — | — | — | — |
| London | — | — | — | — | — |
| New York | — | — | — | — | — |

Each city row expands to show:
- Top 5 pages by impressions
- Hub page performance
- Guide performance (destination vs traveller)
- Knowledge article performance

---

## Dashboard 3 — Content Performance Matrix

Classify every page by performance quadrant:

```
High Impressions + High CTR = WINNER — amplify
High Impressions + Low CTR  = OPPORTUNITY — improve title/meta
Low Impressions + High CTR  = SLEEPER — build internal links
Low Impressions + Low CTR   = WEAK — improve or consolidate
```

---

## Dashboard 4 — Traffic by Intent

Classify search queries driving traffic:

| Intent | Example Query | % of Impressions | % of Clicks | Avg Position |
|--------|--------------|-----------------|-------------|-------------|
| Airport Comparison | "CDG or Orly which is better" | — | — | — |
| Destination-Specific | "best airport for Montparnasse" | — | — | — |
| Traveller Scenario | "best airport for families Paris" | — | — | — |
| Transfer Info | "how to get from CDG to Paris" | — | — | — |
| Hotel/Amenity | "sleeping at CDG airport" | — | — | — |
| Methodology/Trust | "how does Travelvus work" | — | — | — |

---

## Dashboard 5 — Conversion Funnel

| Step | Metric | Target |
|------|--------|--------|
| Search Impression | Total impressions | — |
| Click to Site | Total clicks | CTR >3% |
| Hub Page View | Hub page sessions | — |
| Guide Page View | Guide page sessions | — |
| Compare Click | Clicks to Decision Engine | >5% of guide sessions |
| Planner Use | Planner sessions | >2% of total sessions |
| Edit/Interaction | Users who edit assumptions | Engagement signal |

---

## Dashboard 6 — Quick Wins

Auto-generated list of high-impact opportunities:

| Trigger | Action |
|---------|--------|
| Page ranked 8–15 with CTR <2% | Improve title tag and meta description |
| Page ranked 4–7 with CTR <3% | Test more compelling title |
| Page with >100 impressions and 0 clicks | Rewrite meta description entirely |
| Hub page CTR <3% | Test alternative H1 or meta description |
| Guide with declining impressions (>10% MoM) | Review for content freshness, add internal links |

---

## Implementation Notes

- All dashboards are specifications — not code
- Data sources: GSC API + Analytics API + sitemap index count
- Update frequency: weekly for executive, monthly for city/content detail
- The Coverage Dashboard at /coverage already provides editorial completeness
- These dashboards complement it with search performance data
