# City Expansion Pipeline
**Travelvus V2 — Phase 122.0**

---

## Overview

The City Expansion Pipeline transforms adding a new city from an engineering project into a repeatable 10-step process. Each step has clear inputs, outputs, and validation criteria.

---

## Pipeline Steps

```
RESEARCH → ARCHITECTURE → HUB → GUIDES → KNOWLEDGE → TRUST → SEO → TESTING → DEPLOYMENT → VERIFICATION
```

---

### Step 1 — Research

**Duration:** 2–4 hours
**Input:** City Priority Engine ranking

**Tasks:**
- Identify airports serving the city
- Research official transport authority data sources
- Collect transfer fares and timetables
- Identify 5+ distinct destination zones
- Document service windows and operational constraints
- Verify currency and conversion approach

**Output:** Research notes with verified data sources
**Validation:** All transfer data has official source citations

---

### Step 2 — Architecture

**Duration:** 1–2 hours
**Input:** Research notes

**Tasks:**
- Register CityId in `src/data/cities.ts`
- Add CityMetadata to CITY_REGISTRY
- Create `src/data/{city}-destinations.ts`
- Populate transfer profiles for all airports × destinations
- Add `getInitialForCity()` case to Quick Compare
- Update city-engine.ts dispatch functions
- Run `validateCity()` — must return `ready: true, failed: 0`

**Output:** Complete architecture layer
**Validation:** `validateCity()` passes, TypeScript clean, `npm test` passes

---

### Step 3 — Airport Choice Hub

**Duration:** 2–3 hours
**Input:** Architecture + destination data

**Tasks:**
- Create `src/app/{city}/airport-choice/page.tsx`
- Copy frozen DS from Paris reference
- Write airport cards (strengths, watch-outs, best-for)
- Write quick facts (transfer costs/times)
- Write 5 traveller scenarios with Decision Engine CTAs
- Add related guides links
- Add methodology section

**Output:** Published hub at `/{city}/airport-choice/`
**Validation:** Hub renders at localhost, all CTAs link correctly, mobile no overflow

---

### Step 4 — Decision Guides

**Duration:** 3–5 hours
**Input:** Destination data + hub content

**Tasks:**
- Write 4+ destination guides (one per major zone)
- Write 8+ traveller guides (covering all traveller patterns)
- Register all guides in GUIDE_REGISTRY
- Each guide: unique title, description, intro, recommendations, transfer facts, takeaway, CTA, related guides
- Verify all CTAs use `buildHubCompareUrl()`

**Output:** 12+ guides registered and rendering
**Validation:** Coverage Dashboard shows destination guides ≥4, traveller guides ≥8

---

### Step 5 — Knowledge Base

**Duration:** 2–3 hours
**Input:** Research + transfer data

**Tasks:**
- Write 4+ knowledge articles covering: transfers (2), terminals (1), hotels (1)
- Register all articles in KNOWLEDGE_REGISTRY
- Each article: title, description, key facts, sections, tips, related guides, related knowledge, CTA

**Output:** 4+ knowledge articles registered and rendering
**Validation:** Coverage Dashboard shows knowledge ≥4, categories ≥3

---

### Step 6 — Trust Integration

**Duration:** 0.5–1 hour
**Input:** Hub + guides + knowledge

**Tasks:**
- Verify hub links to /methodology
- Add lastReviewed dates to all guides and knowledge articles
- Cite transfer data sources with review dates
- Verify Limitations page covers any city-specific constraints

**Output:** Trust layer connected
**Validation:** All guides have lastReviewed, methodology linked from hub

---

### Step 7 — SEO

**Duration:** 0.5–1 hour
**Input:** All content pages

**Tasks:**
- Verify every page has unique title and meta description
- Verify canonical URLs on all dynamic routes (auto via `alternates.canonical`)
- Verify Open Graph + Twitter metadata (auto via dynamic route)
- Verify breadcrumbs on hub, guides, knowledge
- Verify city routes appear in sitemap.xml (auto via registries)
- Check for duplicate meta descriptions

**Output:** Complete SEO foundation
**Validation:** Sitemap includes new routes, no duplicate metadata

---

### Step 8 — Testing

**Duration:** 1–2 hours
**Input:** Complete city implementation

**Tasks:**
- Run `npm test` — all 346+ tests pass
- Run `npx tsc --noEmit` — zero errors
- Run Playwright: Home → City → Hub → Compare → Edit → Revert
- Run Playwright: mobile 390px no overflow
- Run Coverage Validator — city at 100%
- Verify Paris, London, New York remain at 100%

**Output:** All tests passing
**Validation:** `npm test` passes, Coverage Dashboard shows all cities at 100%

---

### Step 9 — Deployment

**Duration:** 0.5 hour
**Input:** Passing tests + build

**Tasks:**
- Run `npm run build` — zero errors
- Deploy to Vercel: `npx vercel --prod --yes`
- Verify production URL accessible
- Verify sitemap.xml accessible and includes new routes
- Verify robots.txt unchanged

**Output:** City live on https://www.travelvus.com
**Validation:** Production URL renders correctly, sitemap valid

---

### Step 10 — Verification

**Duration:** 0.5–1 hour
**Input:** Production deployment

**Tasks:**
- Open hub page on production — verify rendering
- Open 2 sample guides — verify content + CTAs
- Open Arrival Planner — verify city selectable
- Open Coverage Dashboard — verify city at 100%
- Check Google Search Console (if connected) for sitemap indexing
- Mark city as COMPLETE in release notes

**Output:** Production-verified city
**Validation:** All gates pass, city appears as COMPLETE in Coverage Dashboard

---

## Total Effort Estimate

| Step | Hours |
|------|-------|
| Research | 2–4 |
| Architecture | 1–2 |
| Hub | 2–3 |
| Guides | 3–5 |
| Knowledge | 2–3 |
| Trust | 0.5–1 |
| SEO | 0.5–1 |
| Testing | 1–2 |
| Deployment | 0.5 |
| Verification | 0.5–1 |
| **Total** | **13–22 hours** |

A city can be taken from zero to production-complete in approximately 2–3 working days by one developer following this pipeline.
