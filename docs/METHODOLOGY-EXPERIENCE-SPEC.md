# Travelvus V2 — Methodology Page Experience Design

**Date:** 2026-07-08
**Phase:** 35
**Status:** READY FOR IMPLEMENTATION
**Route:** `/methodology`

---

## A. WINNING SIGNATURE EXPERIENCE

### THE DECISION PIPELINE

A vertical editorial sequence that traces how Travelvus moves from ticket price to verdict. Five stages. Each stage has: a label (mono), a one-line explanation (sans), and a visual indicator of where the product stops calculating and hands off to the traveller.

Stages:

```
THE TICKET NUMBER
↓
THE REAL TRIP
↓
THE CALCULABLE WINNER
↓
WHAT CAN CHANGE THE ANSWER
↓
WHERE THE NUMBERS STOP — YOUR DECISION
```

The fifth stage is visually distinct — it marks the boundary between calculation and personal judgment. This is the signature moment.

---

## B. EXACT HERO COPY

```
KICKER: Methodology

H1: How Travelvus compares two flights

ANSWER (serif 34px):
"We add what the ticket price leaves out — then tell you 
exactly where the calculation ends and your judgment begins."

EVIDENCE LINE (mono 11px, muted):
Verified for London airports · Heathrow, Gatwick, Stansted · Jul 2026
```

---

## C. DECISION-PIPELINE DESIGN

### Desktop composition

Five vertical stages. Each stage is an editorial row: mono number (01–05), stage label, explanation sentence, classification badge. Stage 5 has a navy left-border accent marking the boundary.

| Stage | Label | Explanation | Classification |
|-------|-------|-------------|---------------|
| 01 | The ticket number | You bring the price you found. Travelvus does not search or book flights. | USER-PROVIDED |
| 02 | The real trip | We add checked baggage, seat selection, and airport transfers — measured identically for both options. | VERIFIED (supported airports) |
| 03 | The calculable winner | The lower real cost wins. The winner is always determined from exact values, never from rounded display numbers. | CALCULATED |
| 04 | What can change the answer | Remove baggage. Change destination. Change the fare gap. Travelvus recalculates and shows exactly what flipped the verdict. | CALCULATED |
| 05 | Where the numbers stop | When the monetary difference is too small, or when time and simplicity matter, Travelvus hands the decision to you. | YOUR JUDGMENT |

### Visual treatment

- Stages 01–04: quiet editorial rows, hairline dividers between them
- Stage 05: navy left-border accent (3px copper-left, same as DecisionDebt), slightly more breathing room
- Classification badges: mono 10px, muted, right-aligned
- Mobile: same sequence, stacked, readable

---

## D. EVIDENCE-CONTRACT DESIGN

### "The numbers we use" — three evidence bands

Three horizontal editorial bands. Each band describes one category of input.

```
┌──────────────────────────────────────────────┐
│ WHAT YOU PROVIDE                              │
│ Ticket price, airports, departure and        │
│ arrival times. You already found the flights.│
│ Travelvus does not search or book.           │
│ → USER-PROVIDED                              │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ WHAT WE KNOW                                  │
│ Airport transfer costs from official TfL and │
│ National Rail sources. Walk-up single,        │
│ contactless/Oyster, off-peak daytime.         │
│ Both airports measured identically.           │
│ → VERIFIED STABLE (updated periodically)      │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ WHAT WE ESTIMATE                              │
│ Sample flight fares, baggage policies,        │
│ representative journey times. We convert      │
│ GBP transport costs to EUR at 1.17.           │
│ → ESTIMATE / SCENARIO ASSUMPTION              │
└──────────────────────────────────────────────┘
```

Each band is a bordered card (paper-2 bg, subtle left-border accent). The classification label is mono 10px, right-aligned, muted.

---

## E. ROUNDING EXPLANATION

### One elegant editorial paragraph + one visual example

```
RAW VALUES DECIDE. ROUNDED VALUES DISPLAY.

The winner is always determined from exact values. 
Displayed totals are rounded to the nearest euro. 
A small raw win never shows as "wins by €0" — 
we say "just wins" instead. Exact ties remain ties.
```

Followed by a single visual example:

```
Raw:     LGW €145.52  ·  STN €141.17  →  STN wins by €4.35
Display: LGW €146     ·  STN €141     →  STN wins by €4
```

Mono table. Two rows. Compact. No technical jargon beyond "raw" and "display."

---

## F. PERSONAL-HANDOFF MOMENT

### "Where the numbers stop"

A navy contrast block (same treatment as existing navy sections). This is the most visually important moment on the page after the hero.

```
┌──────────────────────────────────────────────┐
│ THE NUMBERS STOP HERE.                        │
│ YOUR PRIORITIES START HERE.                   │
│                                               │
│ Travelvus can calculate the money truth.      │
│ It cannot decide whether €4 is worth 20       │
│ extra minutes on a train. It cannot decide     │
│ whether simplicity matters more than a narrow  │
│ cost advantage.                                │
│                                               │
│ When the margin is too thin for arithmetic     │
│ alone, Travelvus hands the decision to you —   │
│ with all the measurable facts visible.         │
│                                               │
│ This is not a limitation.                      │
│ It is the product.                             │
└──────────────────────────────────────────────┘
```

Navy bg. Paper text. Copper accent on the first two lines. Serif for the editorial sentences. Sans for the concluding lines.

---

## G. COVERAGE TREATMENT

### "What we can compare today"

Three states, visually distinguished:

```
┌──────────────────────────────────────────────┐
│ FULL COMPARISON                               │
│ Heathrow, Gatwick, Stansted                   │
│ Real cost, door-to-door time, what changes    │
│ the winner, hidden trade-offs.                │
│ → 3 Decision Pages available                  │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ TICKET COMPARISON ONLY                        │
│ Any other airport pair                        │
│ You can still compare ticket prices. We tell  │
│ you honestly when we don't yet have the full  │
│ transfer data.                                │
│ → Use Quick Compare                           │
└──────────────────────────────────────────────┘

┌──────────────────────────────────────────────┐
│ NOT YET AVAILABLE                             │
│ Live fare tracking, live disruption,          │
│ guaranteed taxi prices, universal baggage     │
│ policies for every airline.                   │
│ → We tell you what we know, not what we guess │
└──────────────────────────────────────────────┘
```

Paper-2 bg cards. No fake completeness. Honest. Premium tone.

---

## H. THREE-PROOF PRESENTATION

### "See the system working" — three editorial case files

NOT Home card clones. Three numbered editorial rows. Each row: number (01/02/03), Decision Page name, one-sentence methodology lesson, one production-safe number, link.

```
01  HEATHROW VS STANSTED
    A cheaper ticket can become the more expensive trip 
    after hidden costs are counted.
    → The €58 ticket produced a €204 journey

02  HEATHROW VS GATWICK
    The same flights can produce very different margins 
    depending on where in London you are going.
    → €37 at Canary Wharf · near-tie at Paddington

03  GATWICK VS STANSTED
    A mathematical winner can still require a personal 
    judgment when the margin is thin.
    → €20 flight saving · €16 fixed costs · €4 net
```

Each row: hairline divider above, mono number left, serif lesson center, mono evidence right. Clean. Scannable. Not cards.

---

## I. INTERNAL-LINK LAUNCH PLAN

| Link | Priority | Placement |
|------|----------|-----------|
| Footer → Methodology | **LAUNCH** | Footer links row |
| Home → Methodology | **LAUNCH** | "How Travelvus works" in How Travelvus Thinks section |
| All 3 DPs → Methodology | **LAUNCH** | "How we calculated this" in evidence note area |
| Methodology → Home | **LAUNCH** | Bottom CTA |
| Methodology → 3 DPs | **LAUNCH** | Inside proof rows (already linked) |
| Header → Methodology | **LATER** | Evaluate after Hub exists |
| Result → Methodology | **LATER** | Result evidence footnote |

---

## J. HEADER / NAVIGATION RECOMMENDATION

**LATER.** Do not add Methodology to the Header at launch. The Header currently has Compare (active), Airports, Guides. Adding a fourth item before Airports and Guides have destinations creates visual clutter. Methodology lives in the Footer and in contextual links from relevant pages.

---

## K. COMPLETE SECTION ORDER

| # | Section | Purpose | Visual Volume |
|---|---------|---------|---------------|
| 1 | Hero | What Travelvus does | **STRONG** |
| 2 | The Decision Pipeline (5 stages) | How it works, visually | **MEDIUM** |
| 3 | The numbers we use (3 evidence bands) | What's user, verified, estimated | QUIET |
| 4 | Raw vs display: how rounding works | One example, no jargon | QUIET |
| 5 | Where the numbers stop (handoff block) | The boundary | **STRONG** (navy) |
| 6 | What we can compare today (coverage) | Honest limits | QUIET |
| 7 | See the system working (3 proofs) | Evidence the system is real | MEDIUM |
| 8 | CTA → Quick Compare | Action | MEDIUM |
| 9 | Footer | Navigation + evidence | QUIET |

**9 sections. 2 STRONG, 3 MEDIUM, 4 QUIET.** Different silhouette from Home and Decision Pages.

---

## L. VISUAL-VOLUME MAP

```
STRONG  ████████  Hero
MEDIUM  ██████    Pipeline
QUIET   ████      Evidence bands
QUIET   ████      Rounding
STRONG  ████████  Handoff (navy)
QUIET   ████      Coverage
MEDIUM  ██████    Proof rows
MEDIUM  ██████    CTA
QUIET   ████      Footer
```

---

## M–O. RESPONSIVE BEHAVIOR

| Section | Desktop | Tablet | Mobile (390px) |
|---------|---------|--------|-----------------|
| Hero | Centered, 40px H1, generous space | Same, narrower | 28px H1, compact |
| Pipeline | Vertical rows with hairline dividers | Same | Stacked, readable |
| Evidence bands | 3 bordered cards, horizontal spacing | Same, narrower | Stacked vertically |
| Rounding | Mono table, 2 rows | Same | Same |
| Handoff | Navy block, copper-left accent | Same | Full-width navy block |
| Coverage | 3 paper-2 cards | Stacked | Stacked |
| Proof rows | Numbered editorial rows | Same | Stacked, full-width |
| CTA | Centered button | Same | Full-width button |

---

## P. SEO STRUCTURE

| Field | Value |
|-------|-------|
| Route | `/methodology` |
| Title | "How Travelvus Compares Flights — Methodology & Evidence | Travelvus" |
| H1 | "How Travelvus compares two flights" |
| Meta | "Travelvus compares the real trip — not just the ticket. How we calculate real cost, door-to-door time, and what changes the answer. Verified for London airports." |
| H2 | The decision pipeline / The numbers we use / Where the numbers stop / What we can compare today / See the system working |
| FAQ | Not needed — editorial flow already answers questions |
| JSON-LD | Not needed — no FAQ or HowTo structure required |

---

## Q. ADSENSE

**Confirmed: zero ad zones.** The page's trust function is incompatible with advertising. No placeholder zones.

---

## R. COMPONENT STRATEGY

| Element | Strategy |
|---------|----------|
| App Header | REUSE AS-IS |
| Kicker | REUSE AS-IS |
| SectionLabel | REUSE AS-IS |
| PipelineRow | CREATE NEW (editorial row component) |
| EvidenceBand | CREATE NEW (bordered card with left accent) |
| ProofRow | CREATE NEW (numbered editorial row) |
| NavyHandoffBlock | ADAPT EXISTING (same pattern as contrast-section) |
| CoverageCard | CREATE NEW (paper-2 card variant) |
| Footer | REUSE AS-IS |
| DecisionDebt | DO NOT REUSE (not needed) |
| DecisionThreshold | DO NOT REUSE (not needed) |
| RealCost | DO NOT REUSE (not needed) |

---

## S. CLONE-RISK FINDINGS

| Existing Page | Closest Section | Clone Risk | Protection |
|---------------|----------------|-----------|-----------|
| Home | Hero | LOW | Different H1, different promise, no cards |
| Home | Proof rows | LOW | Editorial rows, not cards. No copper eyebrows. |
| LHR/LGW | Pipeline | LOW | Pipeline is new grammar. No tabs. No verdict. |
| LGW/STN | Handoff block | LOW | Navy block exists elsewhere but context is different |
| All DPs | Evidence bands | LOW | New component type, not a cost comparison |

**Overall clone risk: LOW.** The page earns its own silhouette through the pipeline grammar, evidence bands, and handoff block — none of which appear on existing pages.

---

## T. EXACT FILES TO CREATE

| File | Purpose |
|------|---------|
| `src/app/methodology/page.tsx` | Server-rendered page |

## U. EXACT FILES TO MODIFY

| File | Change |
|------|--------|
| `src/app/globals.css` | +80 lines: `.pipeline-row`, `.evidence-band`, `.proof-row`, `.coverage-card`, `.handoff-block` |
| `src/app/page.tsx` | Add "How Travelvus works" link in How Travelvus Thinks |
| `src/app/compare/heathrow-vs-stansted/page.tsx` | Add "How we calculated this →" link |
| `src/app/compare/heathrow-vs-gatwick/page.tsx` | Add "How we calculated this →" link |
| `src/app/compare/gatwick-vs-stansted/page.tsx` | Add "How we calculated this →" link |

## V. IMPLEMENTATION ACCEPTANCE CHECKLIST

- [ ] Route `/methodology` returns 200 SSG
- [ ] Pipeline stages render correctly (01–05)
- [ ] Handoff block renders with navy bg
- [ ] Evidence bands render as bordered cards
- [ ] Rounding example is factually correct
- [ ] Coverage cards distinguish 3 states
- [ ] 3 proof rows link to correct Decision Pages
- [ ] Footer links to Methodology
- [ ] Home links to Methodology
- [ ] All 3 DPs link to Methodology
- [ ] No clone of existing page structures
- [ ] Mobile 390/360: no overflow, readable
- [ ] Zero ad zones

## W. RECOMMENDATION

### ✅ READY FOR IMPLEMENTATION

## X. DETENTE

No code. No deploy. Experience spec complete.
