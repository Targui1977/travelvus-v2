# Gatwick vs Stansted — Experience Design Spec

**Date:** 2026-07-08
**Phase:** 22
**Design Readiness:** **READY FOR IMPLEMENTATION WITHOUT NEW HI-FI**
**New Travelvus Pattern:** **SAVING-WORTH TEST** — reusable personal-handoff pattern

---

## A. EXACT ARITHMETIC LOCK

| Metric | Raw | Display | Classification |
|--------|-----|---------|---------------|
| LGW flight | €95.00 | €95 | SCENARIO ASSUMPTION |
| STN flight | €75.00 | €75 | SCENARIO ASSUMPTION |
| LGW bag | €30.00 | €30 | VERIFIED CHANGEABLE |
| STN bag | €35.00 | €35 | VERIFIED CHANGEABLE |
| LGW transfer | €12.52 | €13 | VERIFIED STABLE |
| STN transfer | €23.17 | €23 | VERIFIED STABLE |
| LGW total | €145.52 | **€146** | |
| STN total | €141.17 | **€141** | |
| Difference | €4.35 | **€4** | STN cheaper |
| LGW transfer time | 40 min | 40 min | VERIFIED STABLE |
| STN transfer time | 60 min | 60 min | VERIFIED STABLE |
| Extra access time | 20 min | 20 min | |
| Extra transfer count | 1 extra | "change at Victoria" | |

### Boundary

| Point | Value | Meaning |
|-------|-------|---------|
| Tie point | **€11 STN advantage** | At €11 saving, STN total = LGW total (rounding may vary) |
| First LGW win | **€12 or less STN saving** | If STN saves ≤ €11, Gatwick wins on money |
| Current STN advantage | **€20** | |
| Current margin after penalty | **€4** (€20 − ~€16 after rounding) | STN ahead by €4 |

### Rounding contract

Display: `Math.round()`. Totals rounded to nearest euro. Margin displayed as rounded integer. Evidence note: "Totals rounded to nearest euro. UK transport at 1 GBP ≈ 1.17 EUR."

---

## B. CORE CHOOSE-STN / CHOOSE-LGW RULES

### Choose Stansted when:
> "The flight saves you at least €12 more than Gatwick — enough to pay you back for the extra 20 minutes and additional train change."

### Choose Gatwick when:
> "The flight saving is €11 or less — the shorter, simpler train journey to Victoria is worth more than the marginal fare difference."

### The boundary value (€11–12) is mathematically derived from the transfer-cost difference.

---

## C. THIN-MARGIN INSIGHT

### The €4 question

The canonical scenario has STN ahead by only **€4.** The traveller must answer:

> "Is 20 extra minutes and a train change at Victoria worth €4?"

The page does NOT answer this. **The page hands the personal decision to the traveller** — with all the measurable facts visible.

### What the traveller gives up for €4

| Dimension | What STN costs vs LGW |
|-----------|----------------------|
| Extra time | 20 minutes |
| Extra transfer count | 1 additional (change at Victoria) |
| Transfer cost | €10 more |
| Simpler navigation | Gatwick: 1 train, direct. STN: 2 trains. |
| Rail frequency | Comparable (both 4+/hr) |

### The page's thesis

Not "STN is better" or "LGW is better." The thesis is:

> "The money says Stansted — but by so little that your personal tolerance for the extra journey decides whether the saving is worth it."

---

## D. ACCESS FRICTION CONTRACT

| Dimension | Classification | Exact Value | Role |
|-----------|---------------|-------------|------|
| Extra ground journey time | **PRIMARY** | 20 min (LGW 40 vs STN 60) | Core trade-off |
| Extra transfer count | **PRIMARY** | 1 additional (LGW 1 vs STN 2) | Friction evidence |
| Transfer cost difference | **PRIMARY** | €10 extra for STN | Anchors the boundary |
| Rail frequency | **SECONDARY** | LGW 4+/hr, STN 4/hr (comparable) | Context |
| Directness | **EDITORIAL ONLY** | LGW: Southern direct to Victoria. STN: Express + change. | Narrative |
| Walking/interchange | **EDITORIAL ONLY** | Victoria interchange required for STN | Narrative |

**No friction index. No score. No rating.** Qualitative language only, anchored to the three PRIMARY dimensions.

---

## E. SIGNATURE-EXPERIENCE OPTIONS

| Option | Description | Truth | Useful | Unique | Mobile | SEO | Simple | Risk | Score |
|--------|-------------|-------|--------|--------|--------|-----|--------|------|-------|
| A. Saving selector | Slider: "STN saves me €X" → verdict updates | 8 | 8 | 6 | 7 | 4 | 6 | Gimmick risk | 39 |
| B. Boundary interaction | Visual around €11 line, tap to test | 8 | 7 | 7 | 7 | 4 | 5 | Medium | 38 |
| C. Time-for-money trade | Show what €X buys in time/comfort | 9 | 8 | 8 | 9 | 7 | 8 | Low | **49** |
| D. Editorial scenarios | Static cards: €4 / €11 / €20 examples | 9 | 7 | 4 | 8 | 9 | 9 | Very low | 46 |
| E. Personal-handoff editorial | Core insight as narrative, no interactive control | 10 | 8 | 7 | 9 | 10 | 9 | Very low | **53** |

---

## F. WINNING SIGNATURE EXPERIENCE

### **OPTION E: PERSONAL-HANDOFF EDITORIAL + OPTION C LIGHT: TIME-FOR-MONEY TRADE**

The page does NOT have an interactive control. This is the right choice because:

1. The winner doesn't flip by destination (unlike LHR vs LGW).
2. The only genuine flip is flight-price gap, which the user doesn't control on this page.
3. Adding a "How much are you saving?" slider would create a thin, calculator-like experience.

Instead, the page uses **editorial scenario cards** showing 3 states:

```
┌─────────────────────────────────────────────┐
│  HOW MUCH IS STANSTED SAVING YOU?            │
│                                               │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ €4 saved │  │ €12 saved│  │ €20 saved│   │
│  │ (canon)  │  │ (tie)    │  │ (robust) │   │
│  │           │  │           │  │           │   │
│  │ STN wins │  │ Too close│  │ STN wins │   │
│  │ by a thin│  │ to call  │  │ clearly  │   │
│  │ margin   │  │ on money │  │           │   │
│  │           │  │           │  │           │   │
│  │ Is 20 min│  │ LGW wins │  │ 20 min is│   │
│  │ worth €4?│  │ at €11 or │  │ worth €20?│   │
│  └──────────┘  └──────────┘  └──────────┘   │
│                                               │
│  Where does YOUR saving fall?                 │
│  → Open Compare to test your own flights      │
└─────────────────────────────────────────────┘
```

This creates a reusable Travelvus pattern: **THE SAVING-WORTH TEST.**

It is editorial. It is truthful. It does not fake interactivity. It leads naturally to Quick Compare.

---

## G. MATHEMATICAL VS PERSONAL BOUNDARY

### MATHEMATICAL BREAK-EVEN: €11

Where STN total = LGW total. Objectively calculable. The page shows this.

### PERSONAL DECISION BOUNDARY: UNKNOWABLE

Each traveller has their own tolerance for extra journey time. Travelvus cannot decide whether €4 is worth 20 minutes. **The system must hand the personal decision to the traveller.**

This distinction — mathematical truth vs personal preference — is a **genuinely new Travelvus insight.** Neither existing Decision Page makes this distinction explicitly. Both declare a winner. This page says: "The money says X. Whether that's enough for you is personal."

---

## H. TWO-LAYER DECISION MODEL

### LAYER 1 — MONEY TRUTH (calculable)

> "Based on flights, bags, and transfer costs, Stansted is €4 cheaper."

Mathematical. Objective. Updates if the canonical scenario changes.

### LAYER 2 — PERSONAL HANDOFF (unknowable)

> "Is €4 worth 20 extra minutes and a train change? Only you can answer that."

**This is the reusable Travelvus pattern: SAVING-WORTH HANDOFF.**

Applies whenever:
- The monetary winner is clear but the margin is thin
- There is a measurable non-monetary trade-off
- The traveller's personal preference is the deciding factor

---

## I. VERDICT-STATE SEMANTICS

| State | Condition | Headline | Subtext | Handoff? |
|-------|-----------|----------|---------|----------|
| STN narrow win | Saving €1–11 | "Stansted is cheaper — but by less than the extra train journey costs." | "Stansted saves about €X. The extra 20 minutes and train change at Victoria may not feel worth it." | **YES** |
| Money tie | Saving = €11–12 | "The money is a tie — the journey decides." | "At this saving, both airports cost the same door-to-door. Gatwick's direct train tips the balance." | **YES** |
| STN clear win | Saving ≥ €20 | "Stansted wins clearly." | "The €20 saving compensates for the longer journey. Stansted is the better deal." | No |
| LGW win | Saving ≤ €11 | "Gatwick wins." | "The cheaper Stansted flight doesn't save enough to offset the higher transfer cost. Gatwick is cheaper door-to-door." | No |

**Semantic rules:**
- Never claim STN is "better" at ≤ €11 margin
- Never claim LGW is "better" at ≥ €20 margin
- Always show the monetary difference AND the non-monetary cost
- The handoff appears ONLY when margin is between €1–12

---

## J. CANONICAL CONTRAST MOMENT

### Choose ONE contrast: **SAVE €4, SPEND 20 MINUTES**

```
┌─────────────────────────────────────────────┐
│  STANSTED SAVES YOU €4.                     │
│                                             │
│  It asks for 20 extra minutes                │
│  and one train change in return.            │
│                                             │
│  Gatwick delivers you to Victoria            │
│  in 40 minutes on one direct train.          │
│                                             │
│  That is the trade.                          │
└─────────────────────────────────────────────┘
```

No charts. No gauges. No "value judgement." Just the facts made visible.

---

## K. FINAL PAGE RHYTHM

| # | Section | Purpose | Type |
|---|---------|---------|------|
| 1 | Hero: Question + Immediate Answer | Establish the decision | Static |
| 2 | The Trade: save €4, spend 20 min | Make the tension visible | Static |
| 3 | Real Cost | Show the arithmetic | Static |
| 4 | The Line: where the money ties | Mathematical boundary | Static |
| 5 | Your Saving, Your Call | Three scenario cards (€4/€12/€20) | Static editorial |
| 6 | What the Journey Difference Looks Like | Access friction breakdown | Static |
| 7 | Decision Debt | Hidden trade-offs | Static |
| 8 | Try Your Own Flights | CTA to Quick Compare | Link |
| 9 | Ad Zone | Editorial placement | Static |

**9 sections. Compact. No interactive controls.** Different rhythm from both existing pages (which have destination tabs and baggage toggle).

---

## L. CLONE-PREVENTION MATRIX

| Element | LHR vs STN | LHR vs LGW | LGW vs STN | Verdict |
|---------|-----------|-----------|-----------|---------|
| Hero logic | Hidden-flip reveal | Conditional answer | Trade-off question | **NEW** |
| Primary interaction | Baggage toggle | Destination tabs | None (editorial) | **NEW** |
| Verdict logic | Binary winner | Margin classes | Saving-worth handoff | **NEW** |
| Real Cost treatment | Two columns + editorial | Two columns + destination rows | Two columns + time contrast | **ADAPT** |
| Threshold treatment | Fare-boundary ruler | Transfer-cost ruler | Saving-worth boundary | **ADAPT** |
| Handoff | None | Decision Handoff (near-tie) | Saving-Worth Handoff (thin margin) | **NEW PATTERN** |
| Contrast moment | Baggage flip | Paddington vs Canary Wharf | €4 saves 20 min | **NEW** |
| Scenarios | Static cards | Group-size note | Three saving-tier cards | **ADAPT** |
| Decision Debt | Copper card | Copper card | Copper card | **REUSE** |
| CTA | Open Compare → | Open Compare → | Open Compare → | **REUSE** |

**New reusable patterns earned: 2 (Saving-Worth Handoff, editorial scenario cards with boundary logic).**

---

## M. SEO ARCHITECTURE

### H1
> "Gatwick or Stansted: which budget airport is actually cheaper?"

### H2 structure
1. "Stansted is usually cheaper — but the margin may not be worth the extra journey" (answer)
2. "How we calculated this" (methodology)
3. "Where the money ties: the €11 boundary" (threshold)
4. "Your saving, your call" (scenarios)
5. "What the journey difference looks like" (access friction)
6. "Hidden trade-offs" (decision debt)

### Internal links
- Links to `/compare/heathrow-vs-stansted/` and `/compare/heathrow-vs-gatwick/`
- Links to `/` (Quick Compare)
- Linked FROM Home (when built)

---

## N. FAQ TRUTH AUDIT

| Question | Classification | Safe? |
|----------|---------------|-------|
| "Is Gatwick cheaper than Stansted?" | **SAFE WITH QUALIFICATION** | "Usually no — but it depends on your flight's price gap." |
| "Which is faster to central London?" | **SAFE** | "Gatwick: 40 min direct to Victoria. Stansted: 60 min with one change." |
| "How much cheaper should a Stansted flight be?" | **SAFE** | "At least €12 to reliably beat Gatwick door-to-door." |
| "Which is better for Victoria?" | **SAFE** | "Gatwick — direct train, shorter journey." |
| "Does the answer change late at night?" | **CHANGEABLE** | Coach access for both. Train schedules change. Refer to current timetable. |
| "Do airlines fly from both airports?" | **SAFE WITH QUALIFICATION** | "easyJet, Jet2, and TUI serve both. Ryanair is Stansted-only." |
| "Which airport is better quality?" | **DO NOT USE** | Subjective. No objective metric available. |
| "Which is more reliable?" | **DO NOT USE** | Single-study data, not official CAA metric. |

---

## O. ADSENSE ZONES

| Zone | Safe? | Position |
|------|-------|----------|
| After FAQ / methodology | ✅ | Editorial |
| Between scenario cards and Decision Debt | ✅ | Editorial |
| Bottom, post-CTA | ✅ | Post-decision |
| Inside the trade contrast | ❌ | Core insight |
| Inside Real Cost | ❌ | Evidence |
| Inside boundary explanation | ❌ | Intellectual hero |
| Inside scenario cards | ❌ | Personal decision handoff |

---

## P. MOBILE BEHAVIOR

- Hero: centered, H1 24px, answer 22px
- The Trade: single column, time + money prominent
- Real Cost: stacked (LGW above STN)
- Saving-Worth cards: stacked vertically, each full-width
- Access friction: stacked, no horizontal tables
- Decision Debt: full-width card
- CTA: full-width button
- No horizontal overflow. No multi-column tables.

---

## Q. COMPONENT STRATEGY

| Component | Verdict | Reason |
|-----------|---------|--------|
| App Header | REUSE AS-IS | Same brand |
| OptionToken | REUSE AS-IS | A/B identity |
| Kicker | REUSE AS-IS | Section labels |
| RealCost | ADAPT | Same structure, no destination rows |
| DecisionDebt | REUSE AS-IS | Same pattern |
| DecisionThreshold | ADAPT WITH DATA | Saving-worth boundary, not transfer-cost |
| LiveComparison (from LHR vs LGW) | DO NOT REUSE | No interactive control |
| DestinationTabs | DO NOT REUSE | No winner flips |
| LhrVsLgwInteractive | DO NOT REUSE | Different interaction model |
| SavingWorthCards | **CREATE NEW** | Three editorial cards |
| AccessFrictionTable | **CREATE NEW** | Time/cost/transfer breakdown |

---

## R. DESIGN-READINESS SCORE

| Criteria | Score | Note |
|----------|-------|------|
| Decision clarity | 8/10 | Trade-off is clear, boundary is precise |
| Uniqueness | 8/10 | Saving-Worth Handoff is genuinely new |
| Evidence integrity | 9/10 | All claims source-attributed, no quality/reliability |
| Interaction value | 6/10 | No interactive control (by design — editorial) |
| Mobile strength | 8/10 | Simple layout, no complex controls |
| SEO depth | 7/10 | FAQ-safe, editorial content, crawlable |
| AdSense compatibility | 7/10 | 3 safe zones, protected core |
| Clone resistance | 9/10 | Structurally different from both existing |
| Implementation feasibility | 9/10 | Mostly static, high reuse, low complexity |
| **TOTAL** | **71/100** | |

---

## S. FINAL RECOMMENDATION

### **READY FOR IMPLEMENTATION WITHOUT NEW HI-FI**

**Reasoning:**

1. The page is mostly static — no interactive controls, no new complex components.
2. The visual patterns (Real Cost, Decision Debt, section labels, OptionToken) are all proven.
3. The two new components (SavingWorthCards, AccessFrictionTable) are editorial, not interactive.
4. The page can be built using the existing server-rendered Decision Page template.
5. No new Claude Design Hi-Fi is required — the existing pattern library covers this.

---

## T. EXACT NEXT PHASE

**Phase 23: Gatwick vs Stansted — Build + Deploy.**

Single-page implementation. Next.js server component + static content. Route: `/compare/gatwick-vs-stansted/`. Reuse existing components. New: data file, saving-worth cards, access-friction table.

---

## U. DETENTE

No code. No route. No CSS. No deploy. Experience spec complete.
