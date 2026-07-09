# London Airports Hub — Experience Design Spec

**Date:** 2026-07-08
**Phase:** 40
**Status:** READY FOR IMPLEMENTATION
**Route:** `/london-airports`

---

## A. WINNING SIGNATURE EXPERIENCE

### THREE DECISION PATHS (editorial rows, not cards)

Three numbered editorial rows. Each begins with the traveller's PROBLEM, not the airport pair. Each row has: number, decision-type label, traveller question, airport pair, one production-safe insight, and a link. No cards. No equal grid. Asymmetric rhythm from varying row content length.

---

## B. EXACT HERO COPY

```
KICKER: London Airports

H1: Which London airport decision matches your trip?

ANSWER (sans 16px, muted):
Three comparisons. Three different questions. One city.
Find the one that matches what you're actually trying to decide.
```

No coverage line in the hero — coverage lives in its own section.

---

## C. DISCOVERY GRAMMAR

Each decision path follows this hierarchy:

1. **Decision-type label** (mono, copper, 01/02/03)
2. **Traveller question** (serif, 22px)
3. **Airport pair** (sans, 14px, ink — secondary to the question)
4. **One production-safe insight** (sans, 14px, muted)
5. **CTA** (mono, copper, "Compare Heathrow vs Stansted →")

---

## D. ANTI-THREE-CARD COMPOSITION

**NOT a card grid.** Three editorial rows with alternating weights:

```
┌─────────────────────────────────────────────────┐
│ 01  CHEAP-TICKET TRAP                            │
│     "Is the cheaper flight actually cheaper?"     │
│     Heathrow vs Stansted                          │
│     The €58 ticket produced a €204 journey.       │
│     → Compare Heathrow vs Stansted                │
│                                                  │
│ 02  DESTINATION EFFECT                            │
│     "Does my London destination change            │
│      the answer?"                                 │
│     Heathrow vs Gatwick                           │
│     €37 at Canary Wharf · near-tie at Paddington  │
│     → Compare Heathrow vs Gatwick                 │
│                                                  │
│ 03  SAVING-WORTH TEST                             │
│     "Is a small saving worth the extra journey?"  │
│     Gatwick vs Stansted                           │
│     €20 saved, €16 fixed costs, €4 net            │
│     → Compare Gatwick vs Stansted                 │
└─────────────────────────────────────────────────┘
```

Each row is separated by a hairline divider. Row 02 has slightly more content (two destination polarities) creating natural asymmetry. Rows 01 and 03 are similar length. This prevents mechanical sameness.

---

## E. COMPLETENESS STRATEGY

Substance comes from:
- **Decision explanations** — each row's traveller question is a real decision
- **Coverage honesty** — "covering 3 airport pairs across 3 London airports"
- **Methodology link** — anchors the comparisons in verified method
- **Quick Compare handoff** — for users whose exact pair isn't here

Three comparisons feel complete when each one answers a genuinely different question. The page feels curated, not empty.

---

## F. COVERAGE TREATMENT

**Quiet line below the decision rows, before CTA:**

```
Currently comparing Heathrow, Gatwick, and Stansted across three decision types. 
More London airport comparisons coming as we verify transfer data.
```

Sans 14px, muted. Centered. Not a card. Not a band. Just a calm sentence.

---

## G. ORIENTATION DECISION

**No separate orientation section.** The Hero already sets context. The three decision-type labels (Cheap-Ticket Trap, Destination Effect, Saving-Worth Test) provide orientation within each row. A separate "how to use this page" section would delay discovery.

---

## H. THREE DECISION PATH DESIGNS

| | Path 1 | Path 2 | Path 3 |
|---|---|---|---|
| **Number** | 01 | 02 | 03 |
| **Label** | Cheap-ticket trap | Destination effect | Saving-worth test |
| **Question** | "Is the cheaper flight actually cheaper?" | "Does my London destination change the answer?" | "Is a small saving worth the extra journey?" |
| **Airports** | Heathrow vs Stansted | Heathrow vs Gatwick | Gatwick vs Stansted |
| **Insight** | The €58 ticket produced a €204 journey | €37 at Canary Wharf · near-tie at Paddington | €20 saved, €16 fixed costs, €4 net |
| **Volume** | MEDIUM | MEDIUM | MEDIUM |

All three rows equal weight. Row 02 naturally has more text (two destination polarities). Rows 01 and 03 are compact. The asymmetry comes from content, not styling.

---

## I. EXACT LAUNCH INTERNAL-LINK MATRIX

| # | Source | Destination | Placement | Anchor | Required |
|---|--------|-------------|-----------|--------|----------|
| 1 | Hub | LHR/STN | Decision row 01 | "Compare Heathrow vs Stansted →" | ✅ |
| 2 | Hub | LHR/LGW | Decision row 02 | "Compare Heathrow vs Gatwick →" | ✅ |
| 3 | Hub | LGW/STN | Decision row 03 | "Compare Gatwick vs Stansted →" | ✅ |
| 4 | Hub | Methodology | After decision rows | "How we compare airports" | ✅ |
| 5 | Hub | Quick Compare | CTA | "Compare your own flights" | ✅ |
| 6 | Header | Hub | Nav "Airports" link | `/london-airports` | ✅ |
| 7 | Footer | Hub | Footer links row | "London Airports" | ✅ |
| 8 | Home | Hub | After proof cards | "All London comparisons →" | ✅ |
| 9 | LHR/STN | Hub | Bottom of page | "More London airports →" | ✅ |
| 10 | LHR/LGW | Hub | Bottom of page | "More London airports →" | ✅ |
| 11 | LGW/STN | Hub | Bottom of page | "More London airports →" | ✅ |

**11 launch links. 7 source files modified.**

---

## J. REUSABLE DECISION PAGE RETURN PATH

**Quiet mono link at the bottom of each Decision Page:**

```
← More London airports
```

Sans 13px, copper. Placed below the Decision Debt section, above CTA or footer. Same pattern on all three DPs. Minimal. Not a breadcrumb. Not a card. Just a back-link to the cluster parent.

---

## K. HEADER "AIRPORTS" BEHAVIOR

```
Desktop: "Airports" becomes <Link href="/london-airports">
Active state: text-[var(--ink)] when on /london-airports or any /compare/ route
Mobile: same href, no visual change needed
```

The "Airports" nav item goes from dead `<span>` to functional `<Link>`. This is a single-line JSX change per page. Active state uses existing `text-[var(--ink)]` pattern already used for "Compare."

---

## L. FINAL CTA / HANDOFF

```
"Your airports not here yet? Compare your own flights."

[Open Compare →]
```

Copper CTA button. Links to `/`. Below the three decision rows, above footer. Honest about coverage.

---

## M. METHODOLOGY PLACEMENT

**Quiet link below decision rows:**

```
How we compare airports →
```

Mono 11px, copper. Links to `/methodology`. Does not interrupt discovery flow.

---

## N. COMPLETE PAGE ORDER

| # | Section | Volume |
|---|---------|--------|
| 1 | Header | — |
| 2 | Hero | **STRONG** |
| 3 | Three decision rows | MEDIUM |
| 4 | Coverage note | QUIET |
| 5 | Methodology link | QUIET |
| 6 | CTA | MEDIUM |
| 7 | Footer | QUIET |

---

## O. VISUAL-VOLUME MAP

```
STRONG  ████████  Hero
MEDIUM  ██████    Decision rows
QUIET   ████      Coverage
QUIET   ████      Methodology link
MEDIUM  ██████    CTA
QUIET   ████      Footer
```

Different silhouette from all existing pages. Strong start → medium evidence → quiet context → medium handoff.

---

## P–R. RESPONSIVE BEHAVIOR

| Section | Desktop | Tablet (768) | Mobile (390) |
|---------|---------|-------------|--------------|
| Hero | Centered, 40px H1 | Same, narrower | 28px H1, compact |
| Decision rows | Full-width, generous padding | Same | Stacked, readable, hairline dividers |
| Row numbers | Left-aligned, mono 10px | Same | Same |
| Airport pairs | Sans 14px, secondary | Same | Same |
| Coverage | Centered, one line | Same | Same |
| CTA | Centered button | Same | Full-width button |

No horizontal overflow. No card collapse issues (not using cards). No tiny text.

---

## S. SEO FINALIZATION

| Field | Value |
|-------|-------|
| Route | `/london-airports` |
| Title | "Compare London Airports — Which Is Actually Cheaper? | Travelvus" |
| H1 | "Which London airport decision matches your trip?" |
| Meta | "Heathrow, Gatwick, or Stansted? Three real comparisons showing which airport is cheaper — depending on your destination, baggage, and what you value." |
| H2 | Not needed — the three decision rows ARE the page structure |

---

## T. FAQ / SCHEMA

**No FAQ.** The three decision rows already answer the traveller's question. **No JSON-LD.** No schema type fits this page well.

---

## U. ADSENSE PLACEMENT

**Between coverage note and CTA.** One zone. Protected: hero, decision rows, coverage.

---

## V. COMPONENT STRATEGY

| Element | Strategy |
|---------|----------|
| App Header | REUSE AS-IS |
| DecisionRow | CREATE NEW (editorial row) |
| Kicker | REUSE AS-IS |
| btn-filled | REUSE AS-IS |
| Footer | REUSE AS-IS |
| Proof cards (Home) | DO NOT REUSE |
| Pipeline rows (Methodology) | DO NOT REUSE |

---

## W. CSS ARCHITECTURE

**CSS Module** (`page.module.css`). Same approach as Methodology. Avoids Tailwind v4 purge. Page-specific styles only.

---

## X. CLONE-RISK FINDINGS

| Existing page | Risk | Protection |
|---------------|------|-----------|
| Home | LOW | No cards. No 3-column grid. No copper eyebrows. |
| Methodology | LOW | No pipeline numbers. No classification tags. No navy block. |
| Decision Pages | LOW | No calculations. No tables. No verdict. |

**Clone risk: LOW.** Decision rows are a new visual grammar.

---

## Y. FILES TO CREATE

| File | Purpose |
|------|---------|
| `src/app/london-airports/page.tsx` | Server-rendered Hub page |
| `src/app/london-airports/page.module.css` | CSS Module |

---

## Z. FILES TO MODIFY

| File | Change |
|------|--------|
| `src/app/page.tsx` | Add "All London comparisons →" link |
| `src/app/compare/heathrow-vs-stansted/page.tsx` | Add "← More London airports" link |
| `src/app/compare/heathrow-vs-gatwick/page.tsx` | Add "← More London airports" link |
| `src/app/compare/gatwick-vs-stansted/page.tsx` | Add "← More London airports" link |
| All pages with Header | Change "Airports" span → Link to `/london-airports` |
| Footer (home-footer component or inline) | Add "London Airports" link |

---

## AA. ACCEPTANCE CHECKLIST

- [ ] Route `/london-airports` returns 200 SSG
- [ ] Hero renders with correct H1
- [ ] Three decision rows render as editorial rows (not cards, not grid)
- [ ] Each row links to correct Decision Page
- [ ] Coverage note present
- [ ] Methodology link present
- [ ] CTA links to `/`
- [ ] Header "Airports" links to `/london-airports`
- [ ] Footer links to `/london-airports`
- [ ] All 3 Decision Pages have "← More London airports" link
- [ ] Two dead ends eliminated
- [ ] Mobile 390/360: no overflow, rows readable
- [ ] No `href="#"`
- [ ] No AdSense scripts
- [ ] CSS Module compiles correctly
- [ ] 88 existing tests still pass

---

## AB. RECOMMENDATION

### ✅ READY FOR IMPLEMENTATION

---

## AC. NEXT PHASE

**Phase 41: London Airports Hub — Implementation + Deploy.**

---

## AD. DETENTE

No implementation. No code. No deploy. Experience design complete.
