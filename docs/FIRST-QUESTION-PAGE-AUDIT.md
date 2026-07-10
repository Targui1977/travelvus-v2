# Travelvus V2 — First Question Page Opportunity Audit

**Date:** 2026-07-09
**Phase:** 43
**Final Verdict:** A — ONE QUESTION PAGE IS CLEARLY READY
**Winner:** "How much cheaper should a London flight be to justify a different airport?"

---

## A. QUESTION PAGE TYPE DEFINITION

A Travelvus Question Page:

1. **Answers one high-intent traveller question** — the answer exists before the user enters specific flights
2. **Uses existing Travelvus decision logic** — real cost, break-even, personal handoff
3. **Is broader than one Decision Page** — draws on multiple comparisons or a general principle
4. **Leads naturally into the product** — links to Quick Compare or relevant Decision Pages
5. **Does not duplicate existing content** — not a Hub page, not a pair comparison, not Methodology

### What it is NOT

- A formula one-for-one clone of a Decision Page with the airport names removed
- A generic SEO article that happens to mention airports
- An FAQ page disguised as editorial content
- A methodology page with a question mark in the title
- A comparison requiring two specific flight inputs from the user

---

## B. EXISTING-SYSTEM OPPORTUNITY MAP

The current system implies these traveller questions without directly answering them:

| Implied Question | Current Location | Gap |
|-----------------|-----------------|-----|
| "Is a cheaper ticket actually cheaper after transfers?" | LHR/STN DP | Only answered for LHR vs STN; not generalized |
| "Does my destination change the winner?" | LHR/LGW DP | Only answered for LHR vs LGW |
| "Is a small saving worth extra friction?" | LGW/STN DP | Only answered for LGW vs STN |
| "How much cheaper should a flight be to justify a further airport?" | NONE (implied by all 3) | **No page answers this directly** |
| "Which London airport is cheapest?" | Hub | Hub is discovery, not an answer |
| "How do I compare real flight costs?" | Methodology | Methodology explains the product, not the question |

The strongest gap: **"How much cheaper should a flight be to justify a different airport?"** This question is implied by all three Decision Pages but answered by none of them directly.

---

## C. CANDIDATE SHORTLIST

### 1. "How much cheaper should a London flight be to justify a different airport?"
**Intent:** Decision-support. The user has found a cheaper flight to a different airport and wants to know if the saving is large enough.
**Mechanic:** BREAK-EVEN SAVING — the transfer-cost penalty each airport carries, and the flight-price gap needed to overcome it.
**Evidence:** All transfer costs verified (TfL/National Rail). Sample flight prices as scenario assumptions.
**Risk:** Could feel thin without enough airport data. But 3 airports is sufficient for a principle-explaining page.

### 2. "Which London airport is actually cheapest?"
**Intent:** Broad comparison. The user doesn't know which airports to compare.
**Mechanic:** REAL COST GAP — shows transfer cost as the hidden equalizer.
**Risk:** Cannibalizes the Hub. The Hub already answers this at a discovery level. A full answer requires comprehensive airport data we don't have.

### 3. "Why did my cheaper flight end up costing more?"
**Intent:** Post-purchase pain. The user already booked and discovered hidden costs.
**Mechanic:** HIDDEN COST REVERSAL.
**Risk:** Retrospective. Doesn't lead naturally into Quick Compare (user already booked). Less product value.

### 4. "Is it worth flying to a London airport farther from the city?"
**Intent:** Trade-off. The user is weighing convenience vs price.
**Mechanic:** SAVING-WORTH TEST.
**Risk:** Closely related to candidate 1 but broader — less specific, harder to answer definitively.

### 5. "How much does airport transfer cost change the real price of a London flight?"
**Intent:** Informational. The user wants to understand the cost structure.
**Mechanic:** REAL COST GAP.
**Risk:** Could feel like Methodology. Too close to "how Travelvus works."

### 6. "What is the real cost of flying to London?"
**Intent:** Too broad. Could mean anything.
**Risk:** Weak. No specific decision mechanic.

---

## D. CANNIBALIZATION MATRIX

| Candidate | Hub | LHR/STN | LHR/LGW | LGW/STN | Methodology | Risk |
|-----------|-----|---------|---------|---------|-------------|------|
| 1. Breakeven saving | Low | Low | Low | Low | Low | **SAFE** |
| 2. Cheapest airport | **HIGH** | Medium | Medium | Medium | Low | **REJECT** |
| 3. Why more expensive | Low | Low | Low | Low | Medium | Low |
| 4. Farther airport worth it | Medium | Low | Low | Low | Low | Low |
| 5. Transfer cost impact | Low | Low | Low | Low | **HIGH** | **REJECT** |
| 6. Real cost of flying | Medium | Low | Low | Low | Medium | Low |

---

## E. EVIDENCE-READINESS MATRIX

| Candidate | Safe from production | Needs qualification | New data needed | Ready? |
|-----------|---------------------|-------------------|-----------------|--------|
| 1. Breakeven saving | Transfer costs, Heathrow/Gatwick/Stansted spreads | Sample flight prices | None | **YES** |
| 2. Cheapest airport | Transfer costs | Would need all 6 London airports for authority | Yes — Luton, LCY, SEN | NO |
| 3. Why more expensive | LHR/STN canonical example | Generalization limited | None | YES |
| 4. Farther airport worth it | 3 airport transfer costs | Sample prices | None | YES |
| 5. Transfer cost impact | Same as Methodology | Risk of duplication | None | YES (but cannibalizes) |
| 6. Real cost of flying | Transfer costs | Too broad | Airport-agnostic data needed | NO |

---

## F. SCALABILITY ASSESSMENT

| Candidate | Repeatable for other cities? | Unique per page? | Template risk? |
|-----------|---------------------------|-----------------|----------------|
| 1. Breakeven saving | **YES** — every multi-airport city | **YES** — each city has different spreads | **LOW** |
| 2. Cheapest airport | YES | NO — generic comparison | HIGH |
| 3. Why more expensive | YES | NO — same mechanic each city | MEDIUM |
| 4. Farther airport worth it | YES | YES | LOW |
| 5. Transfer cost impact | YES | NO | HIGH (template farm) |
| 6. Real cost of flying | NO | NO | HIGH |

---

## G. SEO OPPORTUNITY ASSESSMENT

| Candidate | Query specificity | Decision urgency | SERP weakness | Travelvus authority |
|-----------|-----------------|-----------------|---------------|-------------------|
| 1. Breakeven saving | High | High | High — no page answers this directly | Strong |
| 2. Cheapest airport | Medium | Medium | Reddit/forums dominate | Weak — only 3 airports |
| 3. Why more expensive | Low | Low (post-hoc) | Blog posts | Medium |
| 4. Farther airport worth it | High | High | Forums + generic blogs | Strong |
| 5. Transfer cost impact | Medium | Low | TfL/transport sites dominate | Weak |
| 6. Real cost of flying | Low | Low | Too broad | Weak |

---

## H. WEIGHTED SCORING

| Criteria | Max | #1 Breakeven | #2 Cheapest | #3 Why | #4 Farther | #5 Transfer | #6 Real |
|----------|-----|-------------|------------|--------|-----------|-------------|---------|
| Product fit | 25 | **22** | 12 | 15 | 18 | 10 | 8 |
| Search-intent distinctness | 20 | **18** | 10 | 12 | 16 | 8 | 6 |
| Evidence readiness | 15 | **14** | 6 | 11 | 12 | 10 | 5 |
| Internal-link value | 15 | **14** | 10 | 8 | 11 | 6 | 5 |
| SEO opportunity | 10 | **9** | 5 | 5 | 8 | 4 | 3 |
| Scalability | 10 | **9** | 5 | 6 | 8 | 4 | 3 |
| Low cannibalization | 5 | **5** | 1 | 4 | 3 | 1 | 3 |
| **TOTAL** | **100** | **91** | 49 | 61 | 76 | 43 | 33 |

---

## I. WINNER

### Candidate #1: **"How much cheaper should a London flight be to justify a different airport?"**

Score: **91/100.**

This page teaches the BREAK-EVEN SAVING mechanic — the most reusable Travelvus concept not yet expressed as a standalone page.

---

## J. WINNER CONTRACT

### Exact question
> "How much cheaper should a London flight be to justify flying into a different airport?"

### Why this page deserves to exist
Every Decision Page implies a break-even — the point where the flight-price gap overcomes the transfer-cost penalty. But no single page explains this principle across airports. This page fills that gap.

### What it answers
- The transfer-cost penalty each London airport carries (in euro ranges, using verified data)
- The flight-price gap needed to overcome it
- Why a €20 saving might be enough at one airport but not another
- The personal-handoff boundary: when the saving is too small for arithmetic alone

### What it deliberately does NOT answer
- "Which airport should I choose?" (that's what Decision Pages and Quick Compare are for)
- Prices for every possible route (uses representative ranges, not live data)
- Universal coverage (London only, 3 airports)

### Primary mechanic
**BREAK-EVEN SAVING** — the exact point where the cheaper flight's saving overcomes the higher transfer cost.

### Secondary mechanic
**PERSONAL HANDOFF** — when the saving is in the narrow zone, the decision belongs to the traveller.

### Evidence it can reuse
- All verified transfer costs (TfL/National Rail, Jul 2026)
- GBP→EUR conversion (1.17)
- Walk-up contactless/Oyster fare basis
- Heathrow, Gatwick, Stansted spread: €13–50 transfer cost range
- Break-even range: ~€11 (Gatwick) to ~€34 (Stansted vs Heathrow)

### New evidence required
**None.** All claims derivable from existing production data.

### Routes that should link to it
- London Airports Hub (as a question card)
- Home (as a featured question)
- All 3 Decision Pages ("How we calculated the break-even →")
- Methodology

### Routes it should link to
- All 3 Decision Pages (as worked examples)
- Quick Compare ("Test your own break-even →")
- Methodology ("How we calculate this →")
- London Airports Hub ("Compare specific airports →")

### Why it is the correct first Question Page
1. Implied by all 3 Decision Pages but answered by none
2. Teaches a genuinely reusable concept (BREAK-EVEN SAVING)
3. Requires zero new external data
4. Scales to every multi-airport city
5. Does not cannibalize existing content
6. Leads naturally into the product
7. Establishes the Question Page grammar with a clear, specific template

---

## K. WHAT WAITS

| Candidate | Why |
|-----------|-----|
| #4 "Farther airport worth it" | Strong #2. Build after first QP template is proven. |
| #3 "Why more expensive" | Lower product connection. Build if post-purchase audience grows. |
| #2 "Cheapest airport" | Requires 6-airport coverage. Not ready. |
| #5 + #6 | Weak. Probably never build. |

---

## L. NEXT PHASE

**Phase 44: Break-Even Saving Question Page — Experience Design + Implementation + Deploy.**

Single page. Server-rendered. New Question Page grammar. Reuses existing transfer-cost evidence. Links to all 3 DPs and Quick Compare. No new data files.

---

## M. FINAL VERDICT

### A — ONE QUESTION PAGE IS CLEARLY READY

The break-even saving question is the strongest first Question Page. It is implied by every existing Decision Page, requires zero new data, teaches a reusable concept, and fills a genuine product gap.

---

**DETENTE.** No design. No implementation. No deploy. Selection complete.
