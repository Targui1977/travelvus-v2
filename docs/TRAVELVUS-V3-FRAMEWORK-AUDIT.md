# TRAVELVUS V3 — FRAMEWORK CONSOLIDATION AUDIT

**Date:** 2026-07-16  
**Scope:** Complete production system audit  
**Status:** Audit complete. No code changes made.

---

## 1. OVERALL FRAMEWORK SCORE: 7.0 / 10

| Dimension | Score | Notes |
|-----------|-------|-------|
| Architecture maturity | 8/10 | Strong typed contracts, clean component separation |
| Component maturity | 7/10 | 4/10 components frozen; support guides have unstyled footers |
| Design-system maturity | 6/10 | Tokens are strong; CSS duplication undermines scalability |
| Editorial-system maturity | 9/10 | Flagship Guide and Decision Page templates are proven and reusable |
| Scalability for future cities | 7/10 | NY cloned London successfully in 3 pages; CSS duplication is the main blocker |

---

## 2. ARCHITECTURE MATURITY: 8/10

### Strengths

- **Typed contracts everywhere:** `DecisionPageData`, `HeroEditorialProps`, `HeroVisual` (discriminated union), `MoneyValue`, `CalculationResult`, `ExperienceState`. New pages cannot be built incorrectly.
- **Component isolation:** Visual components, Hero, Guide, Decision Page, and Currency layers are fully independent.
- **Shared tokens:** All colours, spacing, typography, and radii come from `globals.css` CSS custom properties. Zero hardcoded values.
- **Market-agnostic data layers:** `ny-airports-data.ts` (unified) is the correct pattern. London's `lhr-vs-lgw-data.ts` + `lgw-vs-stn-data.ts` are legacy per-comparison files that should be unified.

### Weaknesses

- **CSS module duplication:** 17 Decision Pages each have an identical copy of the decision-master `page.module.css`. A single shared import would eliminate ~200KB of duplicated CSS.
- **Two data-layer architectures:** London uses per-comparison files with embedded calculation logic. NY uses a unified typed data layer. The NY pattern is superior and should be backported to London.
- **No shared footer component:** Four distinct footer implementations exist (inline styles in Flagship Guides, CSS module classes in support guides (broken), LegacyArticleLayout footer, and Home footer). A single shared `Footer` component is needed.

---

## 3. COMPONENT MATURITY TABLE

| Component | Status | Issues |
|-----------|--------|--------|
| `HomeHeader` | ✅ FROZEN | Mature. Used everywhere. |
| `HeroEditorial` | ✅ FROZEN | 322 lines, typed contract, 3 breakpoints. Do not modify. |
| `TravelvusVerdict` | ✅ FROZEN | Counter animation, shared. No issues. |
| `FAQAccordion` | ✅ FROZEN | Used across all guides and decision pages. |
| `MobileTOC` | ✅ FROZEN | Compact accordion. Works. |
| `AirportComparisonMap` | ⚠️ EVOLVING | Works for London (LHR/LGW/STN/LTN/LCY) and NY (JFK/EWR/LGA). Need to verify it scales beyond 5 airports. |
| `JourneyDiagram` | ⚠️ EVOLVING | Has `variant="hero"` and default modes. Works. May need 6+ stage support for multi-leg journeys. |
| `RealCostInfographic` | ✅ FROZEN | 4-segment fixed order. Proven in hero and body contexts. |
| `JourneyTimeInfographic` | ⚠️ EVOLVING | Implemented but unused in production pages. |
| `ComparisonGraphic` | ⚠️ EVOLVING | Partially overlaps with existing comparison tables in Decision Pages. |
| `TrustGraphic` | ✅ FROZEN | Typographic-only. Simple. No issues. |
| `TimelineGraphic` | ⚠️ EVOLVING | Implemented but unused in production. |
| `DecisionFlow` | ⚠️ EVOLVING | Implemented but unused. |
| `NeighbourhoodDecisionMap` | ⚠️ EVOLVING | Implemented but unused. |
| `Money` | ✅ FROZEN | Simple wrapper. Works. |
| Currency system | ✅ FROZEN | Typed, market-mapped, Intl-formatted. Ready for any market. |

---

## 4. DESIGN-SYSTEM MATURITY: 6/10

### Critical Issue: CSS Duplication

**Problem:** 17 Decision Pages each carry an identical copy of the decision-master `page.module.css`. Every new city or route adds another copy.

**Impact:** CSS duplication undermines the "no duplicated code" architecture rule. A future styling change requires updating 17+ files.

**Fix:** Extract to `src/components/decision-page/decision-page.module.css` (shared). All Decision Pages import from the shared location. Lines changed: 0 code, only import paths.

**Effort:** Priority A. ~30 minutes. Zero visual change.

### Critical Issue: Broken Support Guide Footers

**Problem:** 10 London support guides (`best-airport-for-central-london`, etc.) reference CSS classes (`styles.guideFooter`, `styles.footerBrand`) that do not exist in `guide.module.css` (0 footer classes found). These footers render with zero styling — plain text, no grid, no spacing.

**Impact:** 10 production pages have unstyled footers. This is a visual defect visible to all users.

**Fix:** Replace with the inline footer pattern already used by Flagship Guides and the Manhattan guide. Or create a shared `GuideFooter` component.

**Effort:** Priority A. ~20 minutes. One pattern applied 10 times.

### Recommended Enhancement: Shared Footer Component

**Problem:** 4+ distinct footer implementations across the site. Inline styles in Flagship Guides (correct), broken CSS module references in support guides, LegacyArticleLayout footer, Home footer.

**Fix:** Create `src/components/ui/Footer.tsx` — a single, typed, responsive footer component. All pages import it.

**Effort:** Priority B. ~60 minutes. Touches 30+ pages.

---

## 5. EDITORIAL-SYSTEM MATURITY: 9/10

### Strengths

- **Flagship Guide system** is proven on 5 guides (3 London + 2 NY). Every guide reuses the same components, CSS, TOC pattern, and CTA pattern.
- **Decision Page system** is proven on 20 pages (10 city-to-London + 7 airport-to-airport + 3 existing airport comparisons).
- **Support guide system** is proven on 11 pages (10 London intent guides + 1 Manhattan guide).
- **Pillar page system** is proven on 2 pages (London Decision Center + NY Hub).

### Weaknesses

- **Guide CSS module has 0 footer classes** — the 10 support guides are affected (see §4).
- **London data layers are not market-unified** — `lhr-vs-lgw-data.ts` and `lgw-vs-stn-data.ts` embed calculation logic. NY's `ny-airports-data.ts` is pure data. Unify London to the NY pattern.

---

## 6. SCALABILITY FOR FUTURE CITIES

### What works at scale

- Typed contracts prevent incorrect pages from being built
- HeroEditorial's discriminated visual union supports any visual type
- Currency system handles any ISO 4217 code
- AirportComparisonMap supports any city (already proven on London + NY)
- Decision Page Factory spec is ready for mass production

### What blocks scaling

| Blocker | Impact | Fix |
|---------|--------|-----|
| CSS module duplication per Decision Page | Each new city adds 2-10 CSS copies | Extract to shared CSS |
| Broken support guide footers | All future support guides inherit the bug | Fix pattern once, apply everywhere |
| London data not unified | Cannot copy NY's clean data-layer pattern to Paris/Tokyo | Backport NY pattern to London |
| No shared footer component | Each new page type invents its own footer | Create Footer.tsx |
| Journey diagram limited to 5 stages | Cannot support multi-leg or complex journeys | Add dynamic stage count |

---

## 7. TOP 15 FRAMEWORK IMPROVEMENTS

### Priority A (highest impact, lowest effort)

| # | Improvement | Effort | Benefit |
|---|------------|--------|---------|
| A1 | **Extract decision-page CSS to shared location** | ~30 min | Eliminates 17 CSS copies. All future Decision Pages import one file. |
| A2 | **Fix broken support guide footers** | ~20 min | Restores styling to 10 production pages. |
| A3 | **Unify London data layer to NY pattern** | ~45 min | One typed `london-airports-data.ts` replacing 2 legacy files. |
| A4 | **Create shared Footer component** | ~60 min | One implementation for all 71+ pages. |

### Priority B (medium impact)

| # | Improvement | Effort | Benefit |
|---|------------|--------|---------|
| B1 | **Remove unused visual components from production build** | ~15 min | DecisionFlow, NeighbourhoodDecisionMap, JourneyTimeInfographic, TimelineGraphic are in the bundle but unused. Keep in codebase, tree-shake or mark as experimental. |
| B2 | **Standardize guide hero pattern** | ~90 min | 10 support guides use raw guide.module.css heroes. Migrate to HeroEditorial for consistency. |
| B3 | **Add shared GuideFooter CSS to guide.module.css** | ~15 min | Fixes the class reference issue at the source. |
| B4 | **Add automated CSS-deduplication guardrail** | ~30 min | Test that verifies no two Decision Pages import page.module.css from different paths. |
| B5 | **Document footer usage rules** | ~15 min | New pages know exactly which footer to use. |

### Priority C (nice to have)

| # | Improvement | Effort | Benefit |
|---|------------|--------|---------|
| C1 | **Extract worked-example component** | ~120 min | Currently copied across 5+ guides. A shared component with typed props would reduce duplication. |
| C2 | **Extract comparison table component** | ~60 min | 15+ pages have comparison tables with inline styles. |
| C3 | **Extract CTA card component** | ~30 min | Navy card + copper button pattern repeated across 30+ pages. |
| C4 | **Add visual regression tests** | ~90 min | Screenshot-based testing for the 4 reference pages. |
| C5 | **Document component-prop contracts in a single index** | ~45 min | All typed props in one reference document for new developers. |
| C6 | **Add a `variant` prop to TrustGraphic for compact mode** | ~20 min | Currently only has one size. Compact variant for decision pages. |

---

## 8. RECOMMENDED IMPLEMENTATION ORDER

```
Phase 103.0 — Critical fixes (Priority A)
  A1: Extract shared decision-page CSS
  A2: Fix broken support guide footers
  A3: Unify London data layer
  A4: Create shared Footer component

Phase 103.1 — Standardization (Priority B)
  B1: Mark unused visual components as experimental
  B2: Migrate support guide heroes to HeroEditorial
  B3: Add footer CSS to guide.module.css
  B4: CSS-deduplication guardrail

Phase 103.2 — Polish (Priority C)
  C1–C6: Component extraction, documentation, testing
```

---

## 9. COMPONENTS TO FREEZE (NO FURTHER CHANGES)

| Component | Reason |
|-----------|--------|
| `HomeHeader` | Perfect. 0 issues across 71 pages. |
| `HeroEditorial` | Proven on 6 pages with 3 visual types. Mature contract. |
| `TravelvusVerdict` | Counter animation. Shared. No issues. |
| `FAQAccordion` | Used universally. No issues. |
| `MobileTOC` | Compact. Works. |
| `TrustGraphic` | Simple typographic component. No issues. |
| `RealCostInfographic` | Fixed 4-segment palette. Proven in hero and body. |
| Currency system (`types.ts`, `markets.ts`, `formatMoney.ts`, `Money.tsx`) | Typed, market-mapped, Intl-formatted. Ready for any market. |
| `DecisionPageData` contract | Proven on 20 Decision Pages. No changes needed. |
| `guide.module.css` | Typography, spacing, tables, verdict, worked example, TOC — all stable. Only missing footer classes (see A2). |

## 10. COMPONENTS STILL EVOLVING

| Component | Reason | Risk if frozen now |
|-----------|--------|-------------------|
| `AirportComparisonMap` | Works for 2–5 airports. Not tested with 6+. | Low risk — add airports when needed. |
| `JourneyDiagram` | Works for 5–6 stages. Multi-leg journeys may need more. | Low risk — add stages when needed. |
| `JourneyTimeInfographic` | Built but unused. | May need refinement when first used. |
| `ComparisonGraphic` | Partially overlaps with existing tables. | Redundant if tables are preferred. |
| `DecisionFlow` | Built but unused. | May not be needed at all. |
| `NeighbourhoodDecisionMap` | Built but unused. | May not be needed at all. |
| `TimelineGraphic` | Built but unused. | May need refinement when first used. |
| `HeroEditorialPlaceholder` | Conditional render. Works. | Low risk. |

---

## SUMMARY

Travelvus V3 is a **7.0/10 framework**. The architecture is strong — typed contracts, shared tokens, reusable components, and a proven Decision Page Factory. The main weaknesses are **CSS duplication** (17 identical copies), a **broken footer pattern** on 10 support guides, and **inconsistent data-layer architecture** between London and New York.

All four Priority A fixes can be implemented in ~2 hours and will raise the framework score to **8.5/10**. After Priority B standardization, the framework will be ready to scale to Paris, Tokyo, Dubai, and beyond with minimal new development per city.

---

**END OF AUDIT**
