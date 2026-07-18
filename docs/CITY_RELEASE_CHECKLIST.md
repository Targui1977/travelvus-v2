# City Release Checklist
**Travelvus V2 — Phase 122.0**

---

A city CANNOT ship until every item on this checklist passes. No exceptions.

---

## Gate 1 — Architecture (must pass before editorial work begins)

- [ ] ARC-1: CityId registered in `src/data/cities.ts`
- [ ] ARC-2: CityMetadata complete (id, label, country, currency, airports, defaultDestination)
- [ ] ARC-3: 2+ airport profiles defined
- [ ] ARC-4: Destination dataset created at `src/data/{city}-destinations.ts`
- [ ] ARC-5: 5+ destination zones
- [ ] ARC-6: Transfer profiles for every airport × destination
- [ ] ARC-7: All transfer fields populated (cost, duration, mode, interchanges, serviceWindow, illustrative)
- [ ] ARC-8: Source metadata present (sourceLabel, sourceDate, reviewedDate)
- [ ] ARC-9: `getInitialForCity()` case added in Quick Compare
- [ ] ARC-10: City engine dispatch updated
- [ ] ARC-11: `validateCity()` returns `ready: true, failed: 0`
- [ ] ARC-12: TypeScript: zero errors

## Gate 2 — Editorial (must pass before SEO work begins)

- [ ] EDI-1: Airport Choice Hub published at `/{city}/airport-choice/`
- [ ] EDI-2: Hub has all sections (cards, facts, scenarios, CTA, guides, methodology)
- [ ] EDI-3: 4+ destination guides in GUIDE_REGISTRY
- [ ] EDI-4: 8+ traveller guides in GUIDE_REGISTRY
- [ ] EDI-5: 4+ knowledge articles in KNOWLEDGE_REGISTRY
- [ ] EDI-6: Knowledge covers transfers, terminals, hotels (minimum)
- [ ] EDI-7: Every guide has unique title, description, intro
- [ ] EDI-8: Every CTA links to Decision Engine via `buildHubCompareUrl()`
- [ ] EDI-9: No "Coming Soon" or placeholder content anywhere
- [ ] EDI-10: Coverage Dashboard shows city at 100%

## Gate 3 — SEO (must pass before testing begins)

- [ ] SEO-1: Hub has unique title + meta description
- [ ] SEO-2: All guides have canonical URLs
- [ ] SEO-3: All guides have Open Graph + Twitter metadata
- [ ] SEO-4: All knowledge pages have canonical URLs
- [ ] SEO-5: City routes appear in sitemap.xml
- [ ] SEO-6: Breadcrumb navigation present on hub, guides, knowledge
- [ ] SEO-7: No duplicate meta descriptions

## Gate 4 — Trust

- [ ] TRU-1: Hub links to /methodology
- [ ] TRU-2: Guides include lastReviewed date
- [ ] TRU-3: Transfer data sources cited with review dates
- [ ] TRU-4: Limitations page covers city-specific constraints

## Gate 5 — Testing

- [ ] TST-1: All 346+ unit tests pass (`npm test`)
- [ ] TST-2: TypeScript: zero errors (`npx tsc --noEmit`)
- [ ] TST-3: Playwright: Home → City → Hub → Compare → Edit → Revert
- [ ] TST-4: Playwright: mobile 390px no overflow on hub + 2 guides
- [ ] TST-5: All existing Playwright tests pass (regression)
- [ ] TST-6: Paris confirmed at 100% (no regression)
- [ ] TST-7: London confirmed at 100% (no regression)
- [ ] TST-8: New York confirmed at 100% (no regression)

## Gate 6 — Deployment

- [ ] DEP-1: Production build: zero errors (`npm run build`)
- [ ] DEP-2: Deployed to Vercel
- [ ] DEP-3: sitemap.xml accessible and correct
- [ ] DEP-4: robots.txt accessible and correct
- [ ] DEP-5: Hub page renders at production URL
- [ ] DEP-6: 2 sample guides render correctly
- [ ] DEP-7: Arrival Planner supports the city
- [ ] DEP-8: No existing city regressions

---

## Sign-Off

A city is COMPLETE only when all 6 gates pass. Any item that fails blocks the release.

| Gate | Required | Status |
|------|----------|--------|
| Gate 1 — Architecture | 12 items | ☐ |
| Gate 2 — Editorial | 10 items | ☐ |
| Gate 3 — SEO | 7 items | ☐ |
| Gate 4 — Trust | 4 items | ☐ |
| Gate 5 — Testing | 8 items | ☐ |
| Gate 6 — Deployment | 8 items | ☐ |
| **Total** | **49 items** | |
