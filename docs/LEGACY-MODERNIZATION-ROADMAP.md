# LEGACY ARTICLE MODERNIZATION ROADMAP

**Phase 89.0 — Framework Design**
**Date: 2026-07-13**

---

## AUDIT SUMMARY

### Articles Audited: 18

All 18 legacy articles share an identical structural pattern:

```tsx
// Duplicated in EVERY file (18 times):
<div className="max-w-[...] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[...]">
  <header className="app-header">    ← Inline header (not shared HomeHeader)
    <span className="app-header-brand">...</span>
    <nav className="app-header-nav mobile:hidden">...</nav>
    <span className="hidden mobile:block">☰</span>
  </header>
  <article className={styles.article}>
    <h1>...</h1>
    <img src="..." />
    <ol className={styles.toc}>...</ol>
    <h2>...</h2><p>...</p>  ← Content (unique per article)
  </article>
  <footer>...</footer>             ← Inconsistent or missing
</div>
```

### Layout Types: 1 (single type)

Every article has the same layout. Zero structural variation.

### Article Sizes

| Article | Lines | Topic |
|---------|-------|-------|
| wego-flight | 389 | Flight comparison platform guide |
| points-guy | 371 | Travel rewards blog guide |
| aaa-travel | 265 | AAA travel services guide |
| trimet-trip-planner | 208 | Portland transit planner |
| defense-travel-system | 197 | DTS government travel |
| irctc-train-ticket-booking | 196 | Indian railway booking |
| top-rated-tourists-attractions-in-rome | 179 | Rome tourism |
| costco-vacation | 163 | Costco travel deals |
| bart-trip-planner | 153 | Bay Area transit |
| mta-trip-planner | 143 | NYC transit planner |
| vrl-bus-booking | 131 | Indian bus booking |
| expedia-taap | 127 | Expedia agent platform |
| ultimate-guide-to-interrailing | 106 | European rail guide |
| tsa-lock | 105 | TSA luggage locks |
| tsa-precheck-cost | 101 | TSA PreCheck enrollment |
| kayak-flights | 94 | Kayak flight search |
| unlock-oyster-card | 66 | London Oyster card guide |
| unlock-global-entry | ~80 | Global Entry guide |

Total: ~2,900 lines of page code.

---

## WHAT'S BEING DUPLICATED

| Element | Duplicated In | Lines per File | Total Waste |
|---------|--------------|----------------|-------------|
| Container div | 18 files | 1 | 18 |
| Inline `app-header` | 18 files | 4 | 72 |
| Nav links (hardcoded) | 18 files | 3 | 54 |
| Mobile hamburger (non-functional) | 18 files | 1 | 18 |
| Opening `<article>` tag | 18 files | 1 | 18 |
| Footer (inconsistent or missing) | ~12 files | 5-8 | 72 |
| `import styles from "../legacy-migration.module.css"` | 18 files | 1 | 18 |

**Total duplicated/waste: ~270 lines across 18 files.**

After migration, each article's structural boilerplate reduces from ~14 lines to 3 lines.

---

## MODERNIZATION FRAMEWORK

### New Component

`src/components/legacy/LegacyArticleLayout.tsx`

Provides:
- Shared `HomeHeader` (functional hamburger menu, responsive nav)
- Consistent article container with correct shadows
- Typography system (h1, h2, h3, p, ul, ol, li, img, blockquote, strong, a)
- TOC styling (card with border)
- Standardized footer (3-column grid: brand, product links, company links)
- Related Guides section ("Continue exploring")
- Responsive behaviour (900px, 720px breakpoints)

### CSS Module

`src/components/legacy/legacy-article.module.css`

All typography, spacing, and responsive rules in one place. Uses existing design tokens (`var(--serif)`, `var(--sans)`, `var(--copper)`, `var(--ink)`, etc.).

### Migration Diff (per article)

**Before (14 lines of boilerplate + content):**
```tsx
import styles from "../legacy-migration.module.css";
export default function Page() {
  return (
    <div className="max-w-[var(--container-decision)] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[...]">
      <header className="app-header">
        <span className="app-header-brand">...</span>
        <nav className="app-header-nav mobile:hidden">
          <span>Compare</span>
          <Link href="/london-airports">Airports</Link>
          <Link href="/wego-flight">Guides</Link>
        </nav>
        <span className="hidden mobile:block">☰</span>
      </header>
      <article className={styles.article}>
        {/* content */}
      </article>
      <footer>...</footer>
    </div>
  );
}
```

**After (3 lines of boilerplate + content):**
```tsx
import { LegacyArticleLayout } from "@/components/legacy";
export default function Page() {
  return (
    <LegacyArticleLayout>
      {/* content — unchanged */}
    </LegacyArticleLayout>
  );
}
```

---

## MIGRATION ROADMAP

### Tier 1 — Highest Priority (5 articles)

Criteria: linked from home page, highest traffic, highest internal linking value.

| # | Article | Current file | Effort |
|---|---------|-------------|--------|
| 1 | WeGo Flight | `wego-flight/page.tsx` | 5 min |
| 2 | Kayak Flights | `kayak-flights/page.tsx` | 5 min |
| 3 | TSA PreCheck Cost | `tsa-precheck-cost/page.tsx` | 5 min |
| 4 | Points Guy | `points-guy/page.tsx` | 5 min |
| 5 | Oyster Card Guide | `unlock-the-convenience-of-oyster-card.../page.tsx` | 5 min |

**Total Tier 1 effort: ~25 minutes**

### Tier 2 — Commercial Intent (4 articles)

| # | Article | Current file | Effort |
|---|---------|-------------|--------|
| 6 | Costco Vacation | `costco-vacation/page.tsx` | 5 min |
| 7 | Expedia TAAP | `expedia-taap/page.tsx` | 5 min |
| 8 | Interrailing Guide | `ultimate-guide-to-interrailing.../page.tsx` | 5 min |
| 9 | Global Entry Guide | `unlock-global-travel-efficiency.../page.tsx` | 5 min |

**Total Tier 2 effort: ~20 minutes**

### Tier 3 — Transport & Tools (5 articles)

| # | Article | Current file | Effort |
|---|---------|-------------|--------|
| 10 | AAA Travel | `aaa-travel/page.tsx` | 5 min |
| 11 | BART Trip Planner | `bart-trip-planner/page.tsx` | 5 min |
| 12 | TriMet Trip Planner | `trimet-trip-planner/page.tsx` | 5 min |
| 13 | MTA Trip Planner | `mta-trip-planner/page.tsx` | 5 min |
| 14 | IRCTC Train Booking | `irctc-train-ticket-booking/page.tsx` | 5 min |

**Total Tier 3 effort: ~25 minutes**

### Tier 4 — Niche (4 articles)

| # | Article | Current file | Effort |
|---|---------|-------------|--------|
| 15 | DTS Travel System | `defense-travel-system/page.tsx` | 5 min |
| 16 | TSA Lock | `tsa-lock/page.tsx` | 5 min |
| 17 | VRL Bus Booking | `vrl-bus-booking/page.tsx` | 5 min |
| 18 | Rome Attractions | `top-rated-tourists-attractions-in-rome/page.tsx` | 5 min |

**Total Tier 4 effort: ~20 minutes**

### Grand Total

**18 articles × ~5 minutes each = ~90 minutes total migration effort.**

---

## ARTICLES NOT MIGRATING (different generation)

These pages are already modern or structurally different — no migration needed:

| Page | Type | Status |
|------|------|--------|
| `/` | Home V6 | Modern — design frozen |
| `/result` | Result (dynamic) | Modern — Phase 88.3 integrated |
| `/london-airports` | Hub | Modern |
| `/compare/*` | Decision Pages (3) | Modern |
| `/questions/*` | Question Pages (2) | Modern |
| `/guides/*` | Flagship Guides (2) | Modern |
| `/methodology` | Trust Page | Modern |
| `/about`, `/contact` | Company Pages | Simple — could benefit but low priority |

---

## MIGRATION EXECUTION PLAN

### Phase 89.1 — Tier 1 Migration
- Migrate 5 highest-priority articles
- Deploy to production
- Verify all pages render correctly
- Verify all internal links still work
- Verify SEO metadata unchanged

### Phase 89.2 — Tier 2 Migration
- Migrate 4 commercial-intent articles
- Deploy to production
- Verify

### Phase 89.3 — Tier 3 Migration
- Migrate 5 transport/tool articles

### Phase 89.4 — Tier 4 Migration
- Migrate 4 niche articles

### Phase 89.5 — Cleanup
- Remove `legacy-migration.module.css` (no longer referenced)
- Verify zero references to old inline header pattern
- Verify zero references to old footer pattern

---

## RISKS

| Risk | Severity | Mitigation |
|------|----------|------------|
| SEO metadata accidentally changed | High | Each migration is a replace-header-footer-only change. Metadata stays identical. |
| Internal links break | Medium | All `<a href="#section">` links within articles are unchanged. Only the shell changes. |
| Image paths break | Low | Images use absolute `/legacy/...` paths — unchanged. |
| CSS specificity conflicts | Low | New CSS module scoped to `.article` class within LegacyArticleLayout. |

---

## WHAT DOES NOT CHANGE

- SEO metadata (title, description, canonical)
- URL structure
- H1 text
- Content (h2, h3, p, ul, ol, li, img)
- Internal anchor links
- Structured data
- External links

Only the SHELL (header, container, footer, related guides) changes.

---

**END OF ROADMAP**
