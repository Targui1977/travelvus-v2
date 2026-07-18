# City Expansion Standard
**Travelvus V2 — Phase 122.0**

---

## What Constitutes a Complete Travelvus City

A city is considered COMPLETE when it satisfies every requirement below. The Coverage Dashboard is the authoritative validator — a city scoring 100% there PLUS passing all Quality Gates is production-complete.

---

## 1. Architecture Requirements

| ID | Requirement | Validated By |
|----|------------|-------------|
| ARC-1 | `CityId` registered in `src/data/cities.ts` | City Factory validator |
| ARC-2 | `CityMetadata` complete: id, label, country, currency, airports, defaultDestination | `validateCity()` |
| ARC-3 | 2+ airport profiles with code, name, fullName | `validateCity()` |
| ARC-4 | Destination dataset created at `src/data/{city}-destinations.ts` | File exists |
| ARC-5 | 5+ destination zones | `validateCity()` |
| ARC-6 | Transfer profiles for every airport × destination combination | `validateCity()` |
| ARC-7 | Each transfer profile: cost, duration, mode, interchanges, serviceWindow, illustrative flag | Contract check |
| ARC-8 | Source metadata: sourceLabel, sourceDate, reviewedDate per destination | Contract check |
| ARC-9 | `getInitialForCity()` case added in Quick Compare | Manual review |
| ARC-10 | City engine dispatch (getCityTransfer, getCityDestinationIds, etc.) updated | TypeScript check |

---

## 2. Editorial Requirements

| ID | Requirement | Validated By |
|----|------------|-------------|
| EDI-1 | Airport Choice Hub published at `/{city}/airport-choice/` | Route exists |
| EDI-2 | Hub includes: airport cards (strengths, watch-outs, best-for), quick facts, 5 traveller scenarios | Content audit |
| EDI-3 | 4+ destination Decision Guides registered in GUIDE_REGISTRY | Coverage validator |
| EDI-4 | 8+ traveller Decision Guides registered in GUIDE_REGISTRY | Coverage validator |
| EDI-5 | 4+ Knowledge articles in KNOWLEDGE_REGISTRY | Coverage validator |
| EDI-6 | Knowledge categories: transfers, terminals, hotels (minimum) | Coverage validator |
| EDI-7 | Each guide has: unique title, unique description, unique intro, airport recommendations, transfer comparison, takeaway, CTA | Content audit |
| EDI-8 | Every CTA links to the Decision Engine via `buildHubCompareUrl()` | Link audit |

---

## 3. SEO Requirements

| ID | Requirement | Validated By |
|----|------------|-------------|
| SEO-1 | Hub page has unique title and meta description | Metadata audit |
| SEO-2 | All guides have canonical URLs via `alternates.canonical` | Metadata audit |
| SEO-3 | All guides have Open Graph and Twitter card metadata | Metadata audit |
| SEO-4 | All knowledge pages have canonical URLs | Metadata audit |
| SEO-5 | City appears in sitemap.xml (auto via registries) | Sitemap validation |
| SEO-6 | Breadcrumb navigation on hub, guides, and knowledge pages | Visual audit |
| SEO-7 | No duplicate meta descriptions across any city page | Metadata audit |

---

## 4. UX Requirements

| ID | Requirement | Validated By |
|----|------------|-------------|
| UX-1 | Hub uses frozen DS (same as Paris reference) | Visual audit |
| UX-2 | Guides render via shared `GuidePage` template | Code audit |
| UX-3 | Knowledge pages render via shared `KnowledgePage` template | Code audit |
| UX-4 | Arrival Planner supports the city (auto via datasets) | Functional test |
| UX-5 | Quick Compare pre-fills correct airports for the city | Functional test |
| UX-6 | Mobile responsive: no horizontal overflow at 390px | Playwright test |
| UX-7 | All interactive elements have 44px minimum touch targets | Accessibility audit |

---

## 5. Trust Requirements

| ID | Requirement | Validated By |
|----|------------|-------------|
| TRU-1 | Hub links to /methodology in footer or navigation | Link audit |
| TRU-2 | Guides include review metadata (lastReviewed date) | Content audit |
| TRU-3 | Methodology accessible from every city hub | Link audit |
| TRU-4 | City transfer data sources cited with review dates | Content audit |
| TRU-5 | Limitations page covers city-specific constraints | Content audit |

---

## 6. Testing Requirements

| ID | Requirement | Validated By |
|----|------------|-------------|
| TST-1 | `validateCity()` returns `ready: true, failed: 0` | Coverage validator |
| TST-2 | Coverage Dashboard shows city at 100% | Coverage validator |
| TST-3 | Playwright journey: Home → City selector → Hub → Compare → Edit → Revert | E2E test |
| TST-4 | Playwright: mobile 390px no overflow on hub + 2 guides | E2E test |
| TST-5 | All existing Playwright tests pass (regression) | CI |
| TST-6 | All 346+ unit tests pass | `npm test` |
| TST-7 | TypeScript: zero errors | `npx tsc --noEmit` |
| TST-8 | Production build: zero errors | `npm run build` |

---

## 7. Deployment Requirements

| ID | Requirement | Validated By |
|----|------------|-------------|
| DEP-1 | Production URL accessible and rendering correctly | Manual verification |
| DEP-2 | sitemap.xml includes all new city routes | URL check |
| DEP-3 | robots.txt unchanged (new routes allowed) | URL check |
| DEP-4 | No existing city regressions (Paris, London, NY at 100%) | Coverage validator |
| DEP-5 | Vercel deployment successful with green build | Vercel dashboard |

---

## City Score Model

Each city receives a score from 0–100 based on weighted categories:

| Category | Weight | Max Score |
|----------|--------|-----------|
| Architecture | 20% | 20 |
| Editorial Completeness | 30% | 30 |
| SEO | 15% | 15 |
| UX | 10% | 10 |
| Trust | 10% | 10 |
| Testing | 10% | 10 |
| Deployment | 5% | 5 |
| **Total** | **100%** | **100** |

**Scoring:**
- **100** = Complete. All requirements satisfied. City is production-ready.
- **90–99** = Near-complete. Minor gaps remain.
- **70–89** = Partial. Significant editorial gaps.
- **<70** = Incomplete. Not production-ready.

Only cities scoring 100 may appear as COMPLETE in the Coverage Dashboard.

### Current City Scores

| City | Architecture | Editorial | SEO | UX | Trust | Testing | Deploy | **Total** |
|------|------------|-----------|-----|-----|-------|---------|--------|-----------|
| **Paris** | 20 | 30 | 15 | 10 | 10 | 10 | 5 | **100** |
| **London** | 20 | 30 | 15 | 10 | 10 | 10 | 5 | **100** |
| **New York** | 20 | 30 | 15 | 10 | 10 | 10 | 5 | **100** |
