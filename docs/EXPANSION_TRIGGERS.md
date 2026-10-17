# Expansion Triggers
**Travelvus V2 — Phase 123.0**

---

## Overview

A new city should NOT be added because it's possible. It should be added because the data says the platform is ready, the existing cities are performing, and the new city has validated demand.

These triggers define the objective conditions that must be met before expansion proceeds.

---

## Trigger 1 — Indexation Health

**Condition:** The platform must demonstrate stable indexation before adding new content.

| Metric | Threshold |
|--------|-----------|
| Indexed pages | ≥95% of sitemap URLs indexed in Google |
| Coverage errors | 0 "Submitted URL has error" in GSC |
| Crawl frequency | Average >1 crawl per page per week for top 20 pages |
| New page indexation | New pages indexed within 7 days of publication |

**Status:** Awaiting data. 140 routes in sitemap. Monitoring needed.

---

## Trigger 2 — Baseline Traffic

**Condition:** Existing cities must demonstrate organic traction before adding more.

| Metric | Threshold |
|--------|-----------|
| Total monthly impressions | >10,000 (minimum viability signal) |
| Total monthly clicks | >300 (CTR validation) |
| Hub page impressions | >1,000 for at least one city hub |
| Guide page impressions | >100 for at least 10 individual guides |

**Status:** Awaiting data. Platform is newly launched.

---

## Trigger 3 — City Performance Floor

**Condition:** Every existing city must meet minimum performance standards. A city performing poorly signals a content or authority problem that adding more cities won't fix.

| Metric | Threshold |
|--------|-----------|
| City minimum impressions | >2,000/month per city |
| City minimum indexed pages | 95% of city pages indexed |
| City minimum CTR | >2% average across city pages |
| City no zero-click pages | 0 city pages with 0 impressions in 60 days |

**Status:** Awaiting data per city.

---

## Trigger 4 — Content Quality Signals

**Condition:** The platform must demonstrate that its content is competitive in search.

| Metric | Threshold |
|--------|-----------|
| Pages in top 10 | >5 pages ranking in positions 1–10 |
| Pages in top 3 | >1 page ranking in positions 1–3 |
| Featured snippets | >1 featured snippet for any query |
| CTR above benchmark | >3% CTR for top 20 pages |

**Status:** Awaiting data.

---

## Trigger 5 — Engagement Depth

**Condition:** Users must engage with the platform beyond single-page visits.

| Metric | Threshold |
|--------|-----------|
| Pages per session | >2.0 average |
| Planner sessions | >50/month |
| Compare button clicks | >100/month from guides or hubs |
| Internal link CTR | >5% of sessions click an internal link to another Travelvus page |

**Status:** Awaiting data.

---

## Trigger 6 — City Priority Validation

**Condition:** The Priority Engine's estimated scores must be validated against real search data before committing to a new city.

| Metric | Threshold |
|--------|-----------|
| Search demand confirmed | Actual search volume for target city ≥ Priority Engine estimate |
| Competition assessed | Manual SERP review for target city queries completed |
| Data availability verified | Transfer data sources confirmed accessible before architecture work begins |

**Status:** Priority Engine has estimated scores for 12 candidates. Actual search data needed to validate.

---

## Expansion Decision Matrix

When ALL 6 triggers are GREEN, expansion may proceed. Any RED trigger blocks expansion.

| Trigger | Status | Blocker? |
|---------|--------|----------|
| 1 — Indexation Health | ⬜ Awaiting data | Yes |
| 2 — Baseline Traffic | ⬜ Awaiting data | Yes |
| 3 — City Performance Floor | ⬜ Awaiting data | Yes |
| 4 — Content Quality Signals | ⬜ Awaiting data | No (advisory) |
| 5 — Engagement Depth | ⬜ Awaiting data | No (advisory) |
| 6 — Priority Validation | ⬜ Awaiting data | Yes |

---

## What To Do While Waiting

While awaiting search data to accumulate:

1. **Monitor** — Set up GSC and Analytics. Begin collecting data.
2. **Improve** — Run SEO experiments on existing content (titles, metadata, internal links).
3. **Evaluate** — After 90 days of data, review triggers and update the Priority Engine with real demand numbers.
4. **Decide** — When all triggers are green, proceed with the highest-scoring city from the validated Priority Engine.

---

## The Golden Rule

**Do not expand until the data says you're ready.**

Adding a city before existing cities have proven their search performance dilutes editorial resources, splits authority signals, and masks content quality problems. Patience now → stronger platform later.
