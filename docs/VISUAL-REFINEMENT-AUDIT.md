# Travelvus V2 — Global Visual Refinement Audit

**Date:** 2026-07-08
**Phase:** 28
**Status:** AUDIT COMPLETE — Recommend SMALL GLOBAL POLISH

---

## A. VISUAL MATURITY SCORE

**Current state: CLEAN EDITORIAL MVP (7.0/10)**

The site reads as a serious, well-structured product. The design system is consistent. Typography is clear. Decision logic is visible. But several elements feel slightly under-finished — they work functionally but don't yet signal "premium finished brand."

**Target with refinements: FINISHED PREMIUM PRODUCT (8.5/10)**

This is achievable with small CSS/token refinements only. No redesign needed.

---

## B. HEADER AUDIT

### Current state

| Element | Value | Assessment |
|---------|-------|-----------|
| Wordmark size | 20px, 700 weight | Appropriate. Functional but minimal. |
| Line-dot signature | 3px copper line + 4px ink dot | Excellent. Brand-distinctive. |
| Nav font | 13px, 500 weight, `--muted` | Readable. Slightly undersized. |
| Nav gap | 24px | Good spacing. |
| Nav hover | None | **Missing.** Reduces perceived quality. |
| Active state | `--ink` color | Works but subtle. |
| Padding | 16px 26px | Comfortable. |
| Mobile | 14px 18px, hamburger ☰ | Functional. Hamburger is bare Unicode. |

### Recommendations

| # | Change | Type | Risk | Gain |
|---|--------|------|------|------|
| B1 | Add `:hover` color transition on nav items (`color: var(--ink)`) | B — Shared component | LOW | Signals interactive quality |
| B2 | Increase nav font to 14px on desktop | B — Shared component | LOW | Better readability |
| B3 | Replace ☰ with SVG hamburger icon (3 stacked lines) | B — Shared component | LOW | Finished brand feel |
| B4 | Add subtle `border-bottom: 2px solid var(--copper)` on active nav | B — Shared component | LOW | Clearer active state |

**Priority: B1 + B2 only.** B3 and B4 optional polish.

---

## C. BREADCRUMB / MICRO-METADATA AUDIT

### Current state

| Element | Size | Color | Assessment |
|---------|------|-------|-----------|
| Home evidence line | mono 10px | `--muted` | Functional. Slightly small. |
| Decision Page metadata | mono 11px | `--muted` | Appropriate. |
| Section-label | sans 13px, uppercase | `--muted` | Good. |
| `.lvg-evidence-note` | sans 12px | `--muted` | Readable. |

### Recommendations

| # | Change | Type | Risk | Gain |
|---|--------|------|------|------|
| C1 | Increase Home evidence line to 11px | A — Global token | LOW | Better readability |
| C2 | Rename concept: "micro-evidence" not "breadcrumb" — no code change, terminology only | Documentation | NONE | Conceptual clarity |

**Priority: C1.**

---

## D. TYPOGRAPHY AUDIT

### Current state

| Element | Desktop | Mobile | Assessment |
|---------|---------|--------|-----------|
| Home H1 | 46px serif | 28px | Excellent. |
| Decision Page H1 | 40px serif | 24px | Good. |
| Immediate answer | 34px serif | 24px | Excellent. |
| Body copy | 14-16px sans | 12.5-14px | Good. |
| Mono labels | 10-12px | 9-11px | Some labels are borderline too small. |
| Verdict headline | 40px serif | 26px | Excellent. |
| QC heading (H2) | 38px serif | 27px | Good. |

### Issues found

| # | Issue | Route(s) | Severity |
|---|-------|----------|----------|
| D1 | Mono evidence labels at 10px are near the readability threshold on desktop | Home, All DP | LOW |
| D2 | Some body copy at 12.5px on mobile is borderline | QC, LHR/LGW | LOW |
| D3 | H2/H3 hierarchy is inconsistent across pages | All | LOW |

### Recommendations

| # | Change | Type | Risk | Gain |
|---|--------|------|------|------|
| D1 | Increase minimum mono label to 11px on desktop | A — Global token | LOW | Readability |
| D2 | No change — 12.5px is functional on mobile | — | — | — |
| D3 | Audit H2 presence on each page; add where missing for SEO structure | C — Page-specific | LOW | SEO consistency |

**Priority: D1 + D3.**

---

## E. SPACING / RHYTHM AUDIT

### Current state

Pages use consistent `section-label` patterns, `result-divider` hairlines, and generous padding. The Home has deliberate visual volume (Strong/Quiet/Medium/Strong/Quiet/Quiet).

### Issues

| # | Issue | Route(s) |
|---|-------|----------|
| E1 | Gap between Decision Page contrast section and next section varies | LGW vs STN |
| E2 | FAQ section spacing could benefit from slightly more breathing room | LGW vs STN |

### Recommendations

| # | Change | Type | Risk |
|---|--------|------|------|
| E1 | Standardize section padding to `30px 38px` across all DP sections | C — Page-specific | LOW |
| E2 | Add `margin-bottom: 8px` to FAQ items | C — Page-specific | LOW |

---

## F. CARD / BOX AUDIT

### Current state

| Element | Treatment | Assessment |
|---------|-----------|-----------|
| Home proof cards | Border, radius 12px, `--card` bg, hover copper border | Excellent. Best visual element on the site. |
| `.lvg-module` | Border, radius 14px, `--card` bg | Good. |
| Navy contrast blocks | `--navy` bg, radius 12px | Excellent. Strong visual identity. |
| DecisionDebt | Copper left-border card | Excellent. Distinct. |
| Group-size note | Border card | Functional. Could use slightly more internal spacing. |
| FAQ items | Hairline dividers | Clean. Functional. |

### No critical issues. Card system is mature.

#### Minor recommendations

| # | Change | Type | Risk |
|---|--------|------|------|
| F1 | Increase `.group-size-note` internal padding from 18px to 22px | A — Token | LOW |

---

## G. CTA AUDIT

### Current state

| Element | Treatment | Assessment |
|---------|-----------|-----------|
| Home hero CTA | Navy bg, 15px, radius 10px | Strong. |
| Decision Page CTA | Copper bg (`background: var(--copper)`), same style | Strong. Distinct from navy. |
| QC CTA | Navy bg, same style | Consistent. |
| Hover states | `--navy-2` or `#8f4327` (copper:hover) | Functional but not visible enough. |

### Recommendations

| # | Change | Type | Risk | Gain |
|---|--------|------|------|------|
| G1 | Add `transform: translateY(-1px)` + `box-shadow` on CTA hover for tactile feel | A — Global token | LOW | Premium interaction feel |
| G2 | Add `cursor: pointer` on all CTA elements (already present via button) | A — Already done | NONE | — |

**Priority: G1.** Small but impactful.

---

## H. FOOTER AUDIT

### Current state

Home footer: mono 11-12px links, muted, centered. Ad zone placeholder. Methodology note at 11px mono.

### Assessment

The footer is intentionally quiet. It works but feels slightly under-finished — the small mono text can feel like an afterthought rather than a deliberate ending.

### Recommendations

| # | Change | Type | Risk | Gain |
|---|--------|------|------|------|
| H1 | Add subtle top hairline `border-top: 1px solid var(--line)` (already present) — verify consistency | — | — | Already done |
| H2 | Increase methodology note to 11px (already done in Phase 27.2) | — | — | Already done |

**Footer is adequate. No further changes needed.**

---

## I. MOBILE AUDIT

### Audit at 390px and 360px across all routes

| Route | Header | Cards | QC | Verdict | Overflow | Tap targets |
|-------|--------|-------|----|---------|----------|-------------|
| `/` | 1 header, hamburger | Stacked, readable | A/B tabs work | N/A | None | CTA 44px tap |
| `/result` | 1 header | N/A | N/A | Navy strip + verdict block | None | Edit/share buttons OK |
| `/compare/heathrow-vs-stansted` | 1 header | Stacked | Live compare readable | N/A | None | Tabs OK |
| `/compare/heathrow-vs-gatwick` | 1 header | Stacked | Destination tabs scroll horizontally | N/A | None | Tabs scrollable |
| `/compare/gatwick-vs-stansted` | 1 header | Stacked | Saving cards stack vertically | N/A | None | All readable |

### Issues

| # | Issue | Route | Severity |
|---|-------|-------|----------|
| I1 | Destination tabs on LHR/LGW page require horizontal scroll on small phones | LHR/LGW | LOW — functional pattern |
| I2 | Hamburger is bare Unicode ☰ (same as desktop) | All | LOW |

### Recommendations

| # | Change | Type |
|---|--------|------|
| I1 | No change — horizontal tab scroll is an accepted mobile pattern | — |
| I2 | Replace ☰ with SVG icon (same as B3 above) | B — Shared |

---

## J. ROUTE-BY-ROUTE ISSUES

| Route | Issues | Priority |
|-------|--------|----------|
| `/` (Home) | Hero evidence text too small (10px → 11px) | C1 |
| `/result` | Verdict block — no issues | — |
| `/compare/heathrow-vs-stansted` | Breadcrumb metadata line at 11px — adequate | — |
| `/compare/heathrow-vs-gatwick` | Destination tabs horizontal scroll on mobile | I1 |
| `/compare/gatwick-vs-stansted` | FAQ spacing (E2), section padding (E1) | LOW |

---

## K. PRIORITIZED REFINEMENT LIST

| Rank | Change | Routes | Type | Risk | Time |
|------|--------|--------|------|------|------|
| **P1** | Nav hover states + font size 13→14px | All | B — Shared | LOW | 10 min |
| **P2** | Home evidence line 10→11px | Home | C — Page | LOW | 2 min |
| **P3** | CTA hover: translateY(-1px) + subtle shadow | All | A — Global | LOW | 5 min |
| **P4** | Mono label minimum 10→11px | All DP | A — Global | LOW | 5 min |
| **P5** | H2 structure audit: add H2 to pages missing them | /result, /LHR/LGW, /LGW/STN | C — Page | LOW | 15 min |
| **P6** | FAQ item spacing + section padding consistency | LGW/STN | C — Page | LOW | 3 min |
| **P7** | SVG hamburger icon | All | B — Shared | LOW | 10 min |
| **P8** | Active nav underline | All | B — Shared | LOW | 5 min |

**Total estimated time: ~55 minutes. All LOW risk. No content changes. No logic changes.**

---

## L. RISKS

| Risk | Mitigation |
|------|-----------|
| CSS changes cascade unexpectedly | Each change is scoped to a single selector. Test build after each. |
| Nav size change affects layout | 13→14px is a 1px increase. Nav gap is 24px — sufficient buffer. |
| Hover state affects mobile | Use `@media (hover: hover)` to only apply on devices with hover. |

---

## M. FINAL RECOMMENDATION

### B. APPLY SMALL GLOBAL POLISH FIRST

**Reasoning:**

The product is solid. The visual system is consistent. The decision logic is correct. But several small elements (nav hover, micro-evidence size, CTA tactile feedback, mono label readability) collectively create a "clean prototype" rather than "premium product" impression.

The 8 refinements listed above will take approximately 55 minutes, touch only CSS and a few SVG properties, involve zero content or logic changes, and raise the visual maturity from 7.0 to approximately 8.5/10.

**The site should NOT deploy as-is.** Apply P1-P4 (the top 4 refinements) as a minimum before production. P5-P8 are recommended but not blocking.

---

## N. EXACT NEXT PHASE

**Phase 29: Global Visual Polish (P1-P4 minimum, P5-P8 recommended).**

Apply the CSS refinements. Build. Test all routes. Deploy to production when visually approved.

---

## O. DETENTE

No implementation. No deploy. Audit only.
