# Travelvus V2 — Methodology Truth Contract + Trust Architecture

**Date:** 2026-07-08
**Phase:** 34
**Status:** READY FOR EXPERIENCE DESIGN

---

## A. ACTUAL PRODUCTION METHODOLOGY (forensically audited from code)

### What Travelvus ACTUALLY does

The production system operates through these exact steps:

1. **User enters two flights** in Quick Compare: ticket price, origin airport, destination airport, departure time, arrival time. Travel date is optional.

2. **Airport codes are extracted** via `extractCode()` — parses "London · STN" → "STN".

3. **Comparison is checked** via `isSupportedComparison()`. Currently only BER→STN vs BER→LHR is recognized as the supported canonical pair. All other airport pairs receive a ticket-only comparison.

4. **Real cost is built** from: ticket price + checked baggage + seat selection + origin-to-airport transfer + airport-to-destination transfer. Each cost line has a confidence classification (user-entered, estimate, verified stable).

5. **Monetary winner is determined** by comparing raw totals. The winner is always derived from raw values, never from display-rounded values.

6. **Display values are rounded** via `Math.round()`. A separate `marginDisplay` prevents the "wins by €0" contradiction: when raw margin is non-zero but display rounds to 0, the verdict says "just wins" or uses tie-safe language.

7. **The verdict** explains the result in serif editorial language. When monetary difference is below a meaningful threshold, a personal handoff transfers the decision to the traveller.

8. **UK transport costs** are converted from GBP to EUR at 1.17. Fare basis: walk-up single, contactless/Oyster, off-peak daytime. Both airports measured with identical methodology.

9. **Unsupported comparisons** receive a ticket-only result. No transfer costs, door-to-door times, thresholds, or flips are shown. The system states when data is unavailable.

---

## B. DECISION-STACK CLASSIFICATION

| Layer | Current implementation | Classification |
|-------|----------------------|---------------|
| Ticket price | User-entered, validated numeric | **UNIVERSAL** |
| Baggage cost | Canonical data (estimate), removable via edit | **SUPPORTED AIRPORTS ONLY** |
| Seat cost | Canonical data (estimate) | **SUPPORTED AIRPORTS ONLY** |
| Airport transfer cost | Verified stable (TfL/National Rail) | **SUPPORTED AIRPORTS ONLY** |
| Door-to-door time | Station-to-station + 5min platform + 5min interchange | **SUPPORTED AIRPORTS ONLY** |
| Destination sensitivity | Transfer cost varies by London area | **PAGE-SPECIFIC** (LHR vs LGW only) |
| Variables that change winner | Checked bag removal, flight price gap | **PAGE-SPECIFIC** |
| Hidden trade-offs | Qualitative Debt analysis | **EDITORIAL ONLY** |
| Personal decision handoff | Near-tie → "your call" | **UNIVERSAL** (when margin < threshold) |
| Live fare search | NOT IMPLEMENTED | **NOT CURRENTLY IMPLEMENTED** |
| Live disruption tracking | NOT IMPLEMENTED | **NOT CURRENTLY IMPLEMENTED** |
| Universal airport data | NOT IMPLEMENTED | **NOT CURRENTLY IMPLEMENTED** |

---

## C. CALCULABLE-TRUTH BOUNDARY

### What Travelvus CAN calculate

- Real cost = ticket + baggage + seat + transfer (for supported airports)
- Door-to-door time = flight + buffer + transfer (for supported airports)
- Monetary winner = lower real cost (raw values)
- Margin = cost difference (raw and display)
- Break-even point = where costs equal
- First winning fare = where winner changes
- Transfer penalty = destination-specific cost difference

### What Travelvus CANNOT calculate

- Personal value of time saved
- Personal tolerance for extra journey friction
- Whether €4 is "worth" 20 extra minutes

### The handoff principle

> "Travelvus calculates the money truth. Whether the saving is worth the extra friction is personal."

This principle appears in three verified forms:
1. **LGW/STN Saving-Worth Handoff**: STN wins by €4 — whether that is worth the extra journey is personal.
2. **LHR/LGW Decision Handoff**: Near-tie at Paddington — money stops deciding, time and simplicity take over.
3. **LHR/STN Verdict Change**: Removing baggage changes the winner — the system shows the new truth without judging the user's choice.

---

## D. DATA AND EVIDENCE CONTRACT

| Input | Type | Disclosure | Status |
|-------|------|-----------|--------|
| User ticket prices | User-provided | Displayed as-entered | Numeric validation only |
| Baggage costs | Canonical estimate | Inline confidence dot | `isIncluded` flag for €0 rows |
| Seat costs | Canonical estimate | Inline | Per-airline assumption |
| Transfer fares (GBP) | TfL/National Rail regulated | "Walk-up contactless/Oyster, off-peak" | Verified stable, Mar 2026 |
| GBP→EUR rate | 1.17 mid-market | Stated on page | Est. Jul 2026 |
| Journey times | Station-to-station + allowances | Methodology note | +5min platform, +5min interchange |
| Flight sample fares | Google Flights samples | Labeled as scenario assumption | Not live, not guaranteed |
| Unsupported airports | Ticket-only comparison | Stated explicitly | Honest limitation |

---

## E. ROUNDING CONTRACT

| Operation | Rule |
|-----------|------|
| **Raw calculation** | All arithmetic uses unrounded values |
| **Display totals** | `Math.round()` — nearest whole euro |
| **Display margin** | `Math.round(Math.abs(rawDiff))` — never negative |
| **Winner determination** | Always from raw values (> ±0.005 threshold) |
| **Near-zero non-tie** | `displayAmt === 0 && winner !== "TIE"` → "X just wins" |
| **Exact tie** | `rawDiff within ±0.005` → "They're tied" |

---

## F. COVERAGE BOUNDARY

### Full real-cost comparison (ALL of the above)
✅ BER→STN vs BER→LHR (canonical supported pair)

### Decision Pages with verified transfer data
✅ LHR vs STN, LHR vs LGW, LGW vs STN

### Ticket-only comparison
✅ Any other airport pair (user sees ticket comparison, honest limitation message)

### NOT supported
❌ Non-London airports for full comparison
❌ Live fare data
❌ Live disruption
❌ Guaranteed taxi prices
❌ Universal baggage policies

---

## G. TRUST ARCHITECTURE

### Proposed page sequence

1. **What Travelvus does** — the decision stack explained in plain English
2. **How the numbers work** — real cost equation, data sources, rounding
3. **Where the numbers stop** — the personal-handoff boundary
4. **What we can compare today** — coverage, supported pairs, unsupported honesty
5. **Proof: three real comparisons** — each Decision Page demonstrates one capability
6. **Where to go next** — links to Quick Compare and Decision Pages

---

## H. THREE PROOF EXAMPLES

| Decision Page | Methodology Lesson | Safe Number |
|--------------|-------------------|-------------|
| LHR vs STN | A cheaper ticket can become the more expensive trip after hidden costs | €58 ticket → €204 journey |
| LHR vs LGW | Same flights, different London destination → different winning margin | €37 (Canary Wharf) vs €0 near-tie (Paddington) |
| LGW vs STN | Flight saving vs fixed-cost disadvantage → the margin tells the story | €20 flight saving, €16 fixed costs, €4 net |

---

## I. INTERNAL-LINK REPAIR PLAN

| Link | Classification |
|------|---------------|
| Header → Methodology | REQUIRED |
| Footer → Methodology | REQUIRED |
| Home → Methodology | REQUIRED |
| All 3 Decision Pages → Methodology ("How we calculated this") | REQUIRED |
| /result → Methodology (evidence footnote) | HIGH VALUE |
| Methodology → Home | REQUIRED |
| Methodology → Quick Compare | REQUIRED |
| Methodology → each Decision Page (as proof examples) | REQUIRED |

---

## J. SEO ROLE AND ROUTE

| Field | Value |
|-------|-------|
| Route | `/methodology` |
| Title | "How Travelvus Compares Flights — Methodology & Evidence | Travelvus" |
| H1 | "How Travelvus compares two flights" |
| Meta | "Travelvus compares the real trip — not just the ticket. How we calculate real cost, door-to-door time, and what changes the answer." |
| H2 structure | What we do / How the numbers work / Where the numbers stop / What we can compare / Real examples |
| FAQ | Optional — 3-4 safe Q&A |
| JSON-LD | `HowTo` or `FAQ` schema optional |

---

## K. ADSENSE

**Zero ad zones on Methodology.** This is a trust page. Ads would undermine its purpose.

---

## L. CLAIM-SAFETY LEDGER

| Claim | Classification |
|-------|---------------|
| "We compare the real trip, not just the ticket" | SAFE |
| "We add baggage, transfers, and door-to-door time" | SAFE WITH QUALIFICATION (supported airports only) |
| "All totals are rounded to the nearest euro" | SAFE |
| "The winner is always calculated from exact values" | SAFE |
| "Transfer costs are from official TfL and National Rail sources" | SAFE |
| "GBP→EUR at 1.17 (July 2026 estimate)" | SAFE |
| "We use walk-up single, contactless/Oyster, off-peak fares" | SAFE |
| "Both airports are measured with identical methodology" | SAFE |
| "We compare every flight" | DO NOT CLAIM — only supported pairs |
| "Our data is live" | DO NOT CLAIM — all data is static/periodic |
| "We guarantee the cheapest option" | DO NOT CLAIM — decision support, not guarantee |
| "We cover all London airports" | SAFE WITH QUALIFICATION — 3 of 6 covered |
| "We tell you when we can't fully compare" | SAFE |

---

## M. PAGE-TYPE DEFINITION

### **HYBRID: METHODOLOGY + TRUST + EVIDENCE PAGE**

This is not a pure methodology document (which would be dry and technical). It is not a pure trust page (which would be marketing). It is a hybrid: methodology explained honestly, evidence disclosed transparently, limitations stated clearly.

**Reusable grammar:** When Travelvus adds new data sources, new airport pairs, or new decision types, this page becomes the anchor for all "How we calculated this" links.

---

## N. CONFLICTS OR INCONSISTENCIES IN PRODUCTION

**None found.** The production system is internally consistent. All three Decision Pages follow the same evidence contracts. The rounding contract is uniform. The supported/unsupported distinction is enforced in code and visible to users. The personal-handoff boundary is applied consistently.

One observation: Methodology notes are currently scattered inline across pages (`lvg-evidence-note` paragraphs). This is correct for individual pages but creates duplication. The Methodology page will become the single canonical reference, reducing inline explanation burden on future pages.

---

## O. SCOPE FOR NEXT PHASE

**Phase 35: Methodology Page — Experience Design + Implementation + Deploy.**

Single page at `/methodology`. Server-rendered (SSG). Links FROM Home, all 3 DPs, Result, Footer. Links TO Home, Quick Compare, all 3 DPs. Internal-link graph repaired. No data files changed. CSS reuse from existing editorial patterns. 2-3 new CSS classes maximum.

---

## P. RECOMMENDATION

### ✅ READY FOR EXPERIENCE DESIGN

## Q. DETENTE

No implementation. No code. No deploy. Truth contract complete.
