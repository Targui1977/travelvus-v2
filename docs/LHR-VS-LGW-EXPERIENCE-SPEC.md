# Heathrow vs Gatwick — Experience Design Spec

**Date:** 2026-07-08
**Phase:** 15
**Status:** READY FOR HIGH-FIDELITY DESIGN
**Source data:** Phase 14.1 verified contract

---

## A. CORRECTED EXPERIENCE MODEL

### From: "Destination flips the winner"
### To: "Destination determines the MARGIN"

**Why:** The verified evidence shows Gatwick wins 4 of 5 destinations. The winner rarely changes, but the margin varies dramatically — from €1 (near-tie) to €37 (robust win). The page's superpower is showing HOW destination location changes the decision's confidence, not WHICH airport wins.

**Structural difference from LHR vs STN:** That page reveals a hidden flip (cheap ticket ≠ cheap trip). This page reveals margin sensitivity (same winner, very different certainty). This is a new Travelvus capability: **MARGIN VISUALIZATION.**

---

## B. OPENING PROMISE

### SEO Question (H1)
> "Heathrow or Gatwick: which London airport is actually cheaper?"

### Immediate Answer (serif, conditional)
> "Gatwick usually wins on money — but where in London you're going determines by how much. For Victoria, Gatwick saves about €27. For Paddington, they're nearly tied."

### Travelvus Insight (sans, editorial)
> "Same airports. Same flights. Your final destination inside London changes the answer from a clear win to almost no win at all."

**Tone:** Confident, specific, useful. Not vague. Not generic.

---

## C. HERO HIERARCHY

```
┌─────────────────────────────────────────────────────────┐
│ KICKER: London Airports · Decision                      │
│                                                         │
│ H1 (serif 40px):                                        │
│ Heathrow or Gatwick:                                    │
│ which London airport is actually cheaper?               │
│                                                         │
│ ANSWER (serif 34px, conditional):                       │
│ Gatwick usually wins on money —                         │
│ but your destination determines by how much.            │
│                                                         │
│ CONTEXT (sans 15px, muted):                             │
│ Verified for 2 travellers, Barcelona flights, daytime.  │
│ Transfer costs from TfL and National Rail (Jul 2026).   │
│                                                         │
│ DESTINATION CONTROL (immediately below)                 │
└─────────────────────────────────────────────────────────┘
```

Above the fold. Value delivered in ~150 words. No airport descriptions. No tourism imagery. No generic comparison table.

---

## D. SIGNATURE INTERACTION: DESTINATION CONTROL

### Design: EDITORIAL DESTINATION TABS

Five tabs arranged horizontally. Each tab is a London destination name. Active tab is visually distinct. Tabs are editorial (sans, uppercase, tight tracking) — not SaaS pills, not dropdown, not booking-engine selector.

```
┌─────────────────────────────────────────────────────────┐
│ Where in London are you going?                           │
│                                                         │
│  [ Victoria ]  Paddington  Canary Wharf  Clapham  King's Cross  │
│     ↑ active                                             │
│                                                         │
│  ┌─────────────────────────────────────────────────┐    │
│  │ LIVE VERDICT updates here                       │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

**Why tabs over dropdown:** Editorial. Immediately scannable. Shows all options at once. Invites exploration. No interaction hidden behind click. Each tab name is a real London place — feels specific, not abstract.

**Mobile:** Tabs scroll horizontally with active visible. Swipeable.

---

## E. DESTINATION STATE MATRIX

| Destination | LHR Cost | LGW Cost | Winner | Margin | Margin Class | Time Winner |
|------------|----------|----------|--------|--------|-------------|-------------|
| **Victoria** | €323 | €296 | LGW | €27 | CLEAR WIN | LGW |
| **Paddington** | €303 | €303 | NEAR-TIE | €1 | NEAR-TIE | LHR |
| **Canary Wharf** | €316 | €280 | LGW | €36 | ROBUST WIN | LGW |
| **Clapham** | €300 | €271 | LGW | €29 | CLEAR WIN | LGW |
| **King's Cross** | €294 | €281 | LGW | €13 | NARROW WIN | LGW |

### Qualitative Margin System

| Class | Range | Label | Language |
|-------|-------|-------|----------|
| **ROBUST WIN** | >€30 | — | "The destination strengthens Gatwick's advantage. The gap is wide enough to survive fare changes." |
| **CLEAR WIN** | €15–30 | — | "Gatwick wins clearly. The transfer economics favour it for this destination." |
| **NARROW WIN** | €5–15 | — | "Gatwick still wins on money, but not by enough to let cost decide alone." |
| **NEAR-TIE** | <€5 | — | "Money no longer separates them. Time and convenience decide." |

No percentages. No scores. No progress bars. No traffic lights. Just words that mean something.

---

## F. QUALITATIVE MARGIN SYSTEM — DESIGN RULES

- **Color:** Never green/red. Copper accent only for editorial emphasis, not winner signal.
- **Weight:** Winner airport name is heavier. Margin amount is mono. Interpretation is serif.
- **Position:** Winner airport token + name on top. Margin amount below. Interpretation sentence below.
- **Change:** When destination changes, only the verdict block updates. No page flash. Smooth transition via CSS.

---

## G. PADDINGTON NEAR-TIE: DECISION HANDOFF

### The Product Moment

Paddington at €1 is the most interesting state on the page. The design must treat it as a feature, not an edge case.

**Exact treatment:**

```
┌─────────────────────────────────────────────────┐
│ VERDICT (Paddington)                            │
│                                                 │
│ ○ B  Gatwick wins by about €1                   │
│                                                 │
│ Money no longer separates them.                 │
│                                                 │
│ When cost can't decide, time and simplicity     │
│ take over. Heathrow wins both: 25 minutes       │
│ door-to-door with the Express versus            │
│ Gatwick's 55-minute train route.               │
│                                                 │
│ ▸ Decision Handoff                              │
│   The winner depends on whether you value       │
│   €1 or 30 minutes more. Travelvus hands the    │
│   decision to you.                              │
└─────────────────────────────────────────────────┘
```

### Decision Handoff — Reusable System Capability

This treatment creates a reusable pattern for any near-tie: when monetary difference is below a meaningful threshold (€5), the system explicitly hands the decision to the next relevant factor — time, convenience, reliability, or simplicity. This is NOT a tie. It's a deliberate transfer of decision authority from the system to the traveller.

---

## H. CANARY WHARF: THE CONTRAST MOMENT

The opposite pole from Paddington. Same airports, same flights, same travellers — very different result.

**Treatment:**

```
┌─────────────────────────────────────────────────┐
│ VERDICT (Canary Wharf)                          │
│                                                 │
│ ● B  Gatwick wins by €37                        │
│                                                 │
│ The destination strengthens Gatwick's            │
│ advantage. The Elizabeth Line gives Heathrow     │
│ a direct route, but the cheaper Gatwick flight   │
│ and Thameslink connection create a gap wide      │
│ enough to survive normal fare variation.        │
└─────────────────────────────────────────────────┘
```

The two states (Paddington and Canary Wharf) sit on the same page. The contrast IS the product insight. The user explores both and learns: destination matters.

---

## I. LIVE VERDICT SYSTEM

**Architecture:** Single verdict area below destination tabs. Updates on tab change. Stateless — reads from destination matrix directly.

**For each destination state:**

| Element | Content | Typography |
|---------|---------|-----------|
| Winner line | Token + "[Airport] wins by [amount]" | Sans 14px for label, serif 30px for amount |
| Interpretation | Semantic margin sentence | Serif 17px, 1.4 line-height |
| Evidence note | "Based on 2 travellers, Barcelona flights, contactless fares" | Mono 10px, muted |
| Decision handoff | Appears only for NEAR-TIE | Serif 17px, copper accent |

**Changes from LHR vs STN verdict:** That verdict is about hidden truth revealed. This verdict is about margin sensitivity explored. Same product voice, different conceptual job.

---

## J. REAL COST EXPERIENCE

### Primary visible data (always shown)

| | Heathrow | Gatwick |
|---|---------|---------|
| Token | A | B |
| Flight (×2) | €190 | €170 |
| Baggage (×2) | €70 | €60 |
| Seats (×2) | €20 | €16 |
| Transfer to [destination] | €XX | €YY |
| **Real cost** | **€XXX** | **€YYY** |

### Secondary evidence (expandable)

- Transfer mode used (e.g., "Elizabeth Line + Tube" vs "Gatwick Express")
- Fare source note ("TfL contactless off-peak, Jul 2026")
- Alternative mode cost (collapsed by default)

### No fake controls

No editable fields for V1. The destination selector IS the control. Flight prices are sample, not editable. This prevents the page from pretending more interactivity than it has.

---

## K. THE LINE EXPERIENCE

### Concept

Not a fare boundary (unlike LHR vs STN). A **transfer-cost boundary.**

The Line shows: at what transfer-cost difference does the flight-price advantage get erased?

**Headline:** "The line: where Heathrow's transfer advantage could flip the result"

**Plain language:**
> Gatwick flights are about €34 cheaper for 2 travellers. Gatwick can absorb up to €34 in higher transfer costs and still win. Most destinations keep Gatwick's transfer penalty below that. Only Paddington — with Heathrow Express advance fares — pushes the transfer advantage high enough to create a near-tie.

**Visual:** Travelvus-native threshold component reused. Shows: Gatwick's €34 buffer, each destination's transfer penalty, Paddington nearly crossing the line.

**Updates with destination:** Each destination plots its transfer penalty on the axis. Paddington sits at the boundary.

---

## L. GROUP SIZE — EDITORIAL TREATMENT

**Position:** Below The Line. Static, not interactive.

**Content:**
> **Does group size change the answer?**
>
> Solo: Gatwick saves ~€13.
> Couple: Gatwick saves ~€27.
> Family of 4: Gatwick saves ~€52.
>
> Gatwick stays the winner, but your group size amplifies the saving — or the cost — of choosing the cheaper airport. The direction holds. The magnitude grows.

**Design:** Simple row of three values. Mono numbers. Sans labels. No interactive slider. No control. Editorial only.

---

## M. DECISION DEBT BEHAVIOR

### Design: ONE LIVE SENTENCE + ONE STATIC EXPLANATION

**Live sentence** (updates with selected destination):

> "Gatwick's €27 win assumes standard off-peak trains. At Paddington, where the transfer advantage is strongest for Heathrow, the gap shrinks to almost nothing — changing what 'better' means."

**Static explanation** (below, editorial):

Brief paragraph on each airport's structural trade-offs. Gatwick: cheaper flights, more destinations, but National Rail-dependent. Heathrow: premium access, Tube + Elizabeth + Express, but higher base fare.

**Why this approach:** The debt is mostly structural (doesn't change per destination). But one sentence that updates with context makes it feel live. The rest is editorial truth.

---

## N. FINAL PAGE RHYTHM

| # | Section | Purpose | Interaction | Density |
|---|---------|---------|-------------|---------|
| 1 | **Hero** | Question + immediate answer | None | Low |
| 2 | **Destination Control** | Select London destination | Click tab | Low |
| 3 | **Live Verdict** | See margin for selected destination | Reactive to #2 | Medium |
| 4 | **Real Cost** | Understand the numbers | Expand secondary | High |
| 5 | **The Line** | See transfer-cost boundary | Reactive to #2 | Medium |
| 6 | **Paddington vs Canary Wharf** | Contrast near-tie vs robust win | Static (editorial) | Low |
| 7 | **Group Size** | Understand amplification | Static | Low |
| 8 | **Decision Debt** | See hidden trade-offs | Partially reactive | Low |
| 9 | **Try Your Own Flights** | CTA to Quick Compare | Click link | Low |
| 10 | **Ad Zone** | Editorial only | None | — |

**Total: 10 sections.** Compact. No dead zones. Value in first 3 sections.

---

## O. DESKTOP COMPOSITION

- **Width:** 1000px (Decision Page container)
- **Hero:** Centered editorial. H1 40px serif. Answer 34px serif conditional.
- **Destination tabs:** Full-width below hero. 5 tabs, equal width. Active: navy bg, paper text. Inactive: outline, muted.
- **Live Verdict:** Below tabs. Two-column: verdict text (left 60%), live margin number (right 40%).
- **Real Cost:** Two-column comparison. Same pattern as existing Decision Pages.
- **The Line:** Threshold component. Centered editorial width (620px).
- **Group Size:** Three-value row. Mono numbers.
- **Decision Debt:** Copper left-border card.
- **CTA:** Centered. "Open Compare →" linking to `/`.

---

## P. MOBILE COMPOSITION

- **First viewport:** H1 (24px), conditional answer (22px), destination tabs (horizontal scroll).
- **Destination tabs:** Scroll horizontally. Active tab snaps to center. Swipeable.
- **Live Verdict:** Below tabs. Full width. Margin number prominent.
- **Real Cost:** Stacked (A above B). Expandable detail.
- **The Line:** Full width. Statement wraps. Axis keeps both labels.
- **Group Size:** Three stacked rows.
- **Decision Debt:** Full-width card.
- **CTA:** Full-width button. Sticky on scroll.
- **No overflow.** No multi-column tables. No hidden interaction.

---

## Q. STATE MODEL

```
selectedDestination: "victoria" | "paddington" | "canary-wharf" | "clapham" | "kings-cross"
```

**That's it.** One piece of state. Everything else is derived from the verified matrix.

No state for: group size, baggage, arrival time, flight fare, airline. Those are editorial context, not interactive controls for V1.

---

## R. COMPONENT REUSE AUDIT

| Component | Decision | Rationale |
|-----------|----------|-----------|
| App Header | **REUSE AS-IS** | Same brand chrome |
| OptionToken | **REUSE AS-IS** | A/B identity |
| Kicker | **REUSE AS-IS** | Section labels |
| Signature | **REUSE AS-IS** | Verdict authority |
| RealCost | **ADAPT** | Same grid, different data. Add destination-specific transfer row. |
| DecisionThreshold | **ADAPT WITH DATA** | Same visual, different semantics (transfer boundary). |
| DecisionDebt | **ADAPT** | Live sentence variant. |
| SecondaryFlips | **DO NOT REUSE** | No flips on this page (LGW dominates). |
| Scenario cards | **DO NOT REUSE** | Replaced by destination tabs. |
| LiveComparison | **DO NOT REUSE** | Replaced by destination verdict. |
| DoorToDoor | **DO NOT REUSE** | Not needed — transfer time folded into Real Cost. |
| DestinationTabs | **NEW COMPONENT REQUIRED** | Core interaction for this page. |
| MarginVerdict | **NEW COMPONENT REQUIRED** | Live verdict with margin class language. |
| GroupSizeTable | **NEW COMPONENT REQUIRED** | Static editorial table. |

---

## S. SEO CONTENT ARCHITECTURE

### H1
> Heathrow or Gatwick: which London airport is actually cheaper?

### H2 structure
1. "Gatwick usually wins on money — but it depends where you're going" (immediate answer)
2. "How we calculated this — flights, bags, and real transfer costs" (methodology)
3. "Paddington: when money stops deciding" (near-tie case study)
4. "Canary Wharf: when the destination settles the debate" (robust case study)
5. "Does group size change the answer?" (editorial FAQ)
6. "The hidden trade-offs at each airport" (decision debt)

### Content purpose
H1 + H2s 1–4 provide indexable content covering the full decision. The interactive destination control adds value on top — it does not replace the server-rendered editorial base.

---

## T. ADSENSE ZONES

| Zone | Position | Safe? |
|------|----------|-------|
| After H2 #2 (methodology) | Between editorial sections | ✅ |
| After H2 #4 (Canary Wharf case study) | Between case studies | ✅ |
| Bottom of page | Post-CTA | ✅ |
| Inside destination tabs | Interaction zone | ❌ |
| Inside live verdict | Core product | ❌ |
| Inside The Line | Intellectual hero | ❌ |

Three safe zones. All editorial. None inside decision flow.

---

## U. FIDELITY TEST

> If all airport names were removed, would this page feel structurally different from Heathrow vs Stansted?

### YES.

| Dimension | LHR vs STN | LHR vs LGW |
|-----------|-----------|-----------|
| Central mechanic | Baggage removal flips winner | Destination changes margin |
| Primary control | Remove checked bag toggle | Destination tabs |
| Verdict job | Reveal hidden truth | Visualize margin sensitivity |
| Threshold type | Fare boundary | Transfer-cost boundary |
| Near-tie treatment | Not present | Decision Handoff (new pattern) |
| Group size | Scenario card | Editorial table |
| Flips | Multiple | None (LGW dominates) |
| Hero | Question + binary answer | Question + conditional answer |

Different structure. Different interaction. Different conceptual job. Same product. Same brand.

---

## V. EXPERIENCE READINESS VERDICT

### ✅ READY FOR HIGH-FIDELITY DESIGN

All 22 deliverables defined. Destination interaction clear. Near-tie treatment solved via Decision Handoff. The Line semantics adapted to transfer-cost boundary. Desktop and mobile coherent. No false interaction. No cloned template. No fake controls.

---

## W. DETENTE

No code. No route. No deployment. No redirects. Experience spec complete. Ready for Phase 16: Hi-Fi Design + Build.
