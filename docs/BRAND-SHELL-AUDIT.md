# Travelvus V2 — Brand Shell + Readability System Audit

**Date:** 2026-07-08
**Phase:** 30
**Status:** AUDIT COMPLETE — Recommend ONE FINAL BRAND-SHELL PASS

---

## A. VISUAL MATURITY SCORES

| Dimension | Score | Assessment |
|-----------|-------|-----------|
| Brand identity | 6.5/10 | Wordmark + line-dot are distinctive. Header scale is too conservative. |
| Header | 6.0/10 | Functional but underweight. Wordmark too small relative to content. |
| Typography scale | 8.0/10 | Serif/sans/mono distinction excellent. Some micro-text too small. |
| Readability | 7.0/10 | Body copy good. Micro-text at 8-9px is below readability floor. |
| Editorial rhythm | 8.5/10 | Section pacing, visual volume, card system all work well. |
| Component maturity | 8.0/10 | Decision cards, verdicts, thresholds are polished. |
| Mobile maturity | 7.5/10 | Functional across all routes. Some micro-text becomes decorative noise. |
| Footer | 6.5/10 | Quiet but feels like an afterthought. Weak closing surface. |
| **Overall product finish** | **7.3/10** | Clean editorial MVP. Needs one more pass to feel finished. |

---

## B. EXACT HEADER AUDIT

### Current values

| Property | Value |
|----------|-------|
| Total height | ~52px (16px top + 20px wordmark + 16px bottom) |
| Horizontal padding | 26px |
| Wordmark size | 20px, weight 700 |
| Wordmark letter-spacing | -0.04em |
| Line width | 52px, 3px height, copper |
| Dot | 4px × 4px, ink |
| Nav font size | 14px (was 13px, increased Phase 29) |
| Nav gap | 24px |
| Nav hover | `color: var(--ink)`, transition 0.15s (added Phase 29) |
| Active state | `color: var(--ink)` (subtle) |
| Mobile padding | 14px 18px |

### Assessment

The header is functional but underweight. A 20px wordmark next to 40-46px editorial headlines creates a scale mismatch — the content feels premium while the brand chrome feels provisional. The copper line-dot signature is excellent but gets lost at this scale.

### Proposed values

| Property | Current | Proposed | Reason |
|----------|---------|----------|--------|
| Wordmark size | 20px | **22px** | Slightly more brand presence without overstatement |
| Vertical padding | 16px | **18px** | More breathing room for the larger wordmark |
| Line width | 52px | **56px** | Proportional to new wordmark width |
| Dot size | 4px | **5px** | Proportional |
| Total header height | ~52px | **~62px** | Still compact, more presence |
| Mobile wordmark | 16px | **18px** | Proportionate increase |
| Mobile padding | 14px 18px | unchanged | Already appropriate |

---

## C. EXACT WORDMARK AUDIT

### Current signature system

The line-dot signature appears in the header wordmark and in the Verdict block (Signature component). Both are correct. The header version uses copper line + ink dot. The Verdict version uses copper-lt line + paper dot on navy background.

### Assessment

The signature is the strongest brand element. It should not change in concept. The header wordmark is the only element needing a slight scale increase.

---

## D. SMALL-TEXT INVENTORY (below 12px)

| # | Selector | Size | Role | Routes | Classification |
|---|----------|------|------|--------|---------------|
| 1 | `.edit-tag` | **8px** | "edited" tag on cost rows | /result | A — ACCEPTABLE (rare) |
| 2 | `.winner-badge` | 9px | "Wins" badge | DP | A — ACCEPTABLE (decorative) |
| 3 | `.threshold-axis-lab-k` | 9px | Axis tick labels | /result, DPs | A — ACCEPTABLE (chart annotation) |
| 4 | `.live-wrap-badge` | 9px | "Wins" badge variant | LHR/STN DP | A — ACCEPTABLE |
| 5 | `.flip-chip` | 9px | Verdict Changed chip | /result | A — ACCEPTABLE (badge) |
| 6 | `.live-wrap-hd` | **9px** | Live comparison module header | All DPs | **B — SHOULD INCREASE** |
| 7 | `.lvg-module-kicker` | **9px** | Module header kicker | LGW/STN | **B — SHOULD INCREASE** |
| 8 | `.contrast-card-label` | **9px** | Contrast card labels | LGW/STN | **B — SHOULD INCREASE** |
| 9 | `.ad-zone` | 9px | Ad placeholder | All | A — ACCEPTABLE |
| 10 | `.lvg-verdict-evidence` | 10px | Verdict evidence footnote | LGW/STN | A — ACCEPTABLE (was 9px, fixed P4) |
| 11 | `.home-hero-evidence` | 11px | Home hero evidence | Home | A — ACCEPTABLE (was 10px, fixed P2) |
| 12 | `.home-footer-links a` | 11px | Footer links | Home | B — SHOULD INCREASE |

### Readability floor

| Viewport | Minimum functional text | Minimum decorative |
|----------|------------------------|-------------------|
| Desktop | **10px** | 8px |
| Tablet (720px) | **10px** | 8px |
| Mobile (390px) | **10px** | 9px |

**Current violations:** 3 selectors at 9px are functional UI (not decorative). These must reach 10px minimum.

---

## E. READABILITY FLOOR FINDINGS

### Critical: Three 9px functional text elements

1. `.live-wrap-hd` — The "Live comparison · a typical case — make it yours" header on Decision Pages. This is product UI, not micro-metadata. At 9px on desktop it strains readability.

2. `.lvg-module-kicker` — "Choose a destination — and watch the verdict move" on LGW/STN page. Product instruction text at 9px.

3. `.contrast-card-label` — "Canary Wharf" / "Paddington" labels on the contrast cards. These identify the destinations being compared. At 9px they lose clarity.

### Non-critical: Badge and annotation text

The remaining 8-9px elements are badges, axis labels, chips, or rarely-visible edit tags. These are acceptable as micro-annotations.

---

## F. FOOTER AUDIT

### Current state

- Links: mono 11px (12px in desktop media query), muted
- Spacing: 20px gap, centered
- Methodology note: mono 11px, muted, max-width 560px
- Ad placeholder: dashed border zone
- Top border: 1px --line
- Vertical padding: 24px top, 30px bottom

### Assessment: **B — TOO WEAK**

The footer is technically adequate but feels like an afterthought. At 11-12px mono, the links are readable but don't close the page with confidence. The footer should feel like a deliberate ending surface, not like the page ran out of content.

### Proposed

| Property | Current | Proposed |
|----------|---------|----------|
| Link font size | 11-12px | **13px** |
| Link gap | 20px | **24px** |
| Methodology note size | 11px | **12px** |
| Top padding | 24px | **30px** |

No structural changes. No new links. No new sections.

---

## G. MOBILE VISUAL AUDIT

### At 390px and 360px across all routes

| Element | 390px | 360px | Issue |
|---------|-------|-------|-------|
| Header wordmark | 16px | 16px | Adequate. Would benefit from 18px. |
| H1 sizes | 24-28px | 24-28px | Good. No wrapping issues. |
| Body copy | 12.5-14px | 12.5-14px | Readable. |
| Micro-text (9px) | **Too small** | **Too small** | 3 selectors at 9px become unreadable. |
| Footer links | 11px | 11px | Borderline. 12px minimum recommended. |
| Cards | Stacked, full-width | Stacked | Works well. |
| CTA buttons | Full-width | Full-width | Good tap targets (~44px). |

### Mobile-specific findings

The three 9px functional elements (live-wrap-hd, lvg-module-kicker, contrast-card-label) are the only mobile readability issues. All other text meets the 10px minimum at 390px.

---

## H. CROSS-ROUTE CONSISTENCY MATRIX

| Element | Home | Result | LHR/STN | LHR/LGW | LGW/STN | Consistent? |
|---------|------|--------|---------|---------|----------|-------------|
| Header | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Page kicker | Kicker copper | Verdict kicker | Kicker copper | Kicker copper | Kicker copper | ✅ |
| Section labels | Section-label | Section-label | Section-label | Section-label | Section-label | ✅ |
| Evidence/meta | 11px mono | 10px mono | 11px mono | 9px module hd | 9px module kicker | ⚠️ Inconsistent |
| CTA | Navy btn | — | Copper btn | Copper btn | Copper btn | ⚠️ Home vs DP |
| Footer | ✅ | — | — | — | — | ✅ (Home only) |

### Inconsistencies found

1. **Evidence line sizing**: Home 11px, Result 10px, DPs 9-11px. Should standardize at 10px minimum for functional meta-text, 11px for editorial evidence.
2. **Module header sizing**: LHR/STN uses 9px `.live-wrap-hd`. LGW/STN uses 9px `.lvg-module-kicker`. Both should be 10px.

---

## I. EXACT P0 CHANGES (required before final production)

| # | Selector | Current | Proposed | Routes | Desktop | Mobile | Risk |
|---|----------|---------|----------|--------|---------|--------|------|
| P0.1 | `.app-header-wordmark` | 20px | **22px** | All | More brand presence | 18px on mobile | LOW |
| P0.2 | `.app-header` padding | 16px 26px | **18px 26px** | All | Better breathing room | unchanged | LOW |
| P0.3 | `.app-header-line` width | 52px | **56px** | All | Proportional | unchanged | LOW |
| P0.4 | `.live-wrap-hd` | 9px | **10px** | All DPs | Readable module header | readable | LOW |
| P0.5 | `.lvg-module-kicker` | 9px | **10px** | LGW/STN | Readable instruction | readable | LOW |
| P0.6 | `.contrast-card-label` | 9px | **10px** | LGW/STN | Readable card label | readable | LOW |
| P0.7 | `.home-footer-links a` | 11px | **13px** | Home | Finished footer | 12px mobile | LOW |
| P0.8 | `.home-footer` padding-top | 24px | **30px** | Home | More breathing room | unchanged | LOW |
| P0.9 | Home footer note | 11px | **12px** | Home | Better readability | unchanged | LOW |

---

## J. EXACT P1 CHANGES (high-value refinement)

| # | Selector | Current | Proposed | Routes | Reason |
|---|----------|---------|----------|--------|--------|
| P1.1 | `.app-header-dot` | 4px | **5px** | All | Proportional to larger wordmark |
| P1.2 | `.home-footer-links` gap | 20px | **24px** | Home | Better link separation |
| P1.3 | Mobile wordmark | 16px | **18px** | All (mobile) | Consistent brand presence |

---

## K. P2 OPTIONAL CHANGES

| # | Change | Reason |
|---|--------|--------|
| P2.1 | SVG hamburger icon | Cosmetic polish only |
| P2.2 | Active nav underline (2px copper) | Visual refinement |
| P2.3 | Footer ad zone slightly taller | Cosmetic |

---

## L. DO NOT TOUCH

- Product architecture (Home/QC separation, Decision Page templates)
- Verdict navy blocks
- Decision Threshold ruler
- Saving-Worth Handoff
- Proof card system
- Real Cost modules
- Typography families (Instrument Serif, Geist, IBM Plex Mono)
- Color system (navy, copper, paper, grey, muted)
- Route structure
- Content
- Calculations

---

## M. EXACT IMPLEMENTATION SCOPE

**File to modify:** `src/app/globals.css` (only)

**Changes:** 9 P0 CSS property values + 3 P1 values. Approximately 15 lines changed.

**No JSX changes. No component changes. No route changes.**

---

## N. FINAL RECOMMENDATION

### B — APPLY ONE FINAL BRAND-SHELL PASS

The current Travelvus visual system is at 7.3/10. The P0 changes (9 precise CSS adjustments) will address the three most visible gaps:

1. **Header underweight** → wordmark 20→22px, padding 16→18px, line 52→56px
2. **Functional micro-text too small** → 3 selectors at 9→10px
3. **Footer feels unfinished** → link size 11→13px, padding 24→30px

These changes touch only CSS, involve zero risk, and take approximately 10 minutes to implement. They will raise the overall finish from 7.3 to approximately 8.3/10.

---

## O. DETENTE

No implementation. No deploy. Audit only. Awaiting approval to proceed with P0 changes.
