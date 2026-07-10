# First Question Page — Truth Contract + Family Grammar

**Date:** 2026-07-09
**Phase:** 44
**Final Verdict:** TRUTH CONTRACT LOCKED — READY FOR EXPERIENCE DESIGN

---

## A. MEANING OF "JUSTIFY"

"Justify" in the Travelvus context has THREE layers:

1. **MATHEMATICALLY CHEAPER** (calculable): The alternative airport has a lower total real cost after bags, seats, and transfer are counted. Travelvus CAN calculate this.

2. **MEASURABLY WORTH IT** (showable): The saving exceeds measurable extra friction — time, transfers, cost. Travelvus CAN show the dimensions.

3. **PERSONALLY WORTH IT** (unknowable): Whether €4 is worth 20 extra minutes. Travelvus CANNOT decide this. The page must hand this to the traveller.

---

## B. GENERAL BREAK-EVEN MODEL

```
Required flight saving = fixed_cost_difference

Where fixed_cost_difference = 
  (baggage_A + seat_A + transfer_A)
  − (baggage_B + seat_B + transfer_B)
```

If Airport B (the cheaper-ticket airport) has HIGHER fixed costs, the flight must save MORE than that difference to win on total cost. If Airport B has LOWER fixed costs, any flight saving makes it win.

### Production-proven range

| Airport Pair | Fixed-cost difference | Required flight saving |
|-------------|----------------------|----------------------|
| LHR vs STN | STN: +€101 | STN must save >€101 |
| LHR vs LGW | LGW: −€7 (cheaper) | LHR must save >€7 |
| LGW vs STN | STN: +€16 | STN must save >€16 |

**Key insight: The break-even ranges from €7 to €101.** There is no universal number. The page's job is to explain why.

---

## C. THREE PRODUCTION EXAMPLES

### 1. LHR vs STN

- Flight prices: STN €58, LHR €126 → STN saves €68 on the flight
- Fixed-cost disadvantage: STN costs €101 more (baggage + transfer)
- Net: STN loses by €33 on total cost
- Break-even: STN must save >€101 (flight price gap of €25 vs LHR's €126)
- **Lesson:** A large ticket-price gap can still be too small

### 2. LHR vs LGW

- Flight prices: LGW €170, LHR €190 → LGW saves €20 on the flight (for 2 pax)
- Fixed-cost difference: LGW has €7 LOWER fixed costs
- Net: LGW wins by €27 on total cost
- Break-even: LHR must save >€7 to win. But LHR is €20 MORE expensive, so LGW holds.
- **Lesson:** When the cheaper airport also has lower fixed costs, even a small saving wins

### 3. LGW vs STN

- Flight prices: STN €75, LGW €95 → STN saves €20 on the flight
- Fixed-cost disadvantage: STN costs €16 more
- Net: STN wins by €4 on total cost
- Break-even: STN must save >€16. Canonical saves €20 — narrow win.
- **Lesson:** When the break-even is close, the margin matters personally

---

## D. DESTINATION-EFFECT AUDIT

The LHR/LGW page proves that destination changes the break-even within one airport pair. For this Question Page:

- Use LHR/LGW as the CONCEPTUAL example: "Even within one airport pair, your London destination changes the fixed-cost difference"
- Do NOT create a full destination matrix
- The key qualification: "The break-even depends on where in London you are going. These numbers use Victoria as the reference. Your own destination may shift the answer."
- Production-safe: the destination effect is proven for LHR/LGW but NOT generalized to all pairs

---

## E. BAGGAGE-EFFECT AUDIT

Baggage is PART OF the fixed-cost difference. Removing baggage from the equation changes the break-even:

- LHR vs STN without bags: STN fixed = 12+15+74 = 101. LHR fixed = 12+15+18 = 45. Disadvantage = 56. Required saving >€56. Still loses at €68 saving.

The page should explain this conceptually without creating an airline-by-airline baggage matrix. Treatment: one paragraph + link to Methodology for the full contract.

---

## F. MATHEMATICAL VS PERSONAL BOUNDARY

**LAYER 1 (calculable):**
> "Whether the alternative airport is mathematically cheaper depends on the fixed-cost difference. For Stansted vs Gatwick, the Stansted flight must save at least €16 to be cheaper on total cost."

**LAYER 2 (personal):**
> "Whether a €4 net saving is worth 20 extra minutes is a question only you can answer. Travelvus shows the numbers. The decision is yours."

The LGW/STN Saving-Worth Handoff is the EXACT example, reused editorially as the page's personal-handoff moment.

---

## G. ANSWER ARCHITECTURE

1. **Direct answer:** "There is no single number. The required saving depends on which airports you are comparing."
2. **Why:** The break-even model explained
3. **The spread:** Three real London examples showing the range (€7 to €101)
4. **What changes the break-even:** destination effect, baggage effect
5. **What the numbers cannot decide:** Personal handoff
6. **Find your own break-even:** Quick Compare CTA

---

## H. QUESTION PAGE FAMILY GRAMMAR

### REQUIRED elements (every QP must have):

1. One real traveller question as H1
2. Direct conditional answer (the principle, not a universal number)
3. One primary Travelvus mechanic (e.g., BREAK-EVEN SAVING)
4. At least one production-safe example using verified data
5. Explicit evidence boundary (what IS and IS NOT calculated)
6. Personal handoff where the numbers stop
7. Product continuation (Quick Compare CTA or Decision Page link)

### OPTIONAL elements:

- Multiple production examples (if they demonstrate different aspects)
- Secondary mechanics
- Destination or scenario qualifications
- Relationship map to Decision Pages
- Methodology link

### FORBIDDEN:

- Pretending one universal number applies
- Claiming coverage beyond verified data
- Collapsing mathematical truth into personal judgment (or vice versa)
- Cloning Decision Page format
- Building a template farm where QP N+1 is identical to QP N with a different airport name

### What must be UNIQUE on every QP:

- The traveller question
- The primary mechanic
- The production examples used as proof
- The personal-handoff framing

---

## I. CANNIBALIZATION BOUNDARY

| Page | Job | QP does NOT replace |
|------|-----|-------------------|
| `/london-airports` | Discovery | QP is a principle page, not a discovery surface |
| LHR/STN DP | Specific pair comparison | QP references it as an example |
| LHR/LGW DP | Specific pair comparison | QP references the destination effect |
| LGW/STN DP | Specific pair comparison | QP references the saving-worth test |
| `/methodology` | How the product works | QP applies the method to one question |
| `/` Quick Compare | Enter two flights | QP leads to it |

**Boundary is stable.** The QP owns THE GENERAL PRINCIPLE. Decision Pages own THE SPECIFIC PAIR DECISIONS.

---

## J. INTERNAL-LINK CONTRACT

| Link | Classification |
|------|---------------|
| QP → LHR/STN DP (as example) | REQUIRED |
| QP → LHR/LGW DP (as example) | REQUIRED |
| QP → LGW/STN DP (as example) | REQUIRED |
| QP → Quick Compare | REQUIRED |
| QP → Methodology | REQUIRED |
| Hub → QP (as a question card) | REQUIRED |
| Home → QP | HIGH VALUE |
| LHR/STN → QP | OPTIONAL (LHR/STN already has a threshold section) |
| LHR/LGW → QP | OPTIONAL |
| LGW/STN → QP | OPTIONAL (already has saving-worth handoff) |

---

## K. SEO READINESS BOUNDARY

**PRODUCT READINESS: HIGH** — The break-even model is proven. All data exists.

**VERIFIED SEO OPPORTUNITY: UNKNOWN** — No keyword tool data. No Search Console query data for break-even questions. GSC is cold-start.

**Decision:** Product readiness is sufficient. The Question Page should be built on product merit. SEO verification can follow after GSC matures. No external keyword tool is required before design.

---

## L. CLAIM SAFETY MATRIX

| Claim | Classification |
|-------|---------------|
| "There is no single amount a flight needs to be cheaper." | **SAFE** |
| "The break-even saving depends on the airport pair." | **SAFE** |
| "For Stansted vs Gatwick, the Stansted flight must save at least €16." | **SAFE** (from production data) |
| "Your London destination can change the answer." | **SAFE** (proven for LHR/LGW) |
| "Baggage can change the break-even point." | **SAFE WITH QUALIFICATION** (explain as part of fixed-cost difference) |
| "The cheapest ticket is often not the cheapest trip." | **SAFE** |
| "Travelvus can calculate how much cheaper another airport needs to be." | **SAFE WITH QUALIFICATION** (for supported pairs only) |

---

## M. FINAL PAGE CONTRACT

| Field | Value |
|-------|-------|
| **Core question** | "How much cheaper should a London flight be to justify a different airport?" |
| **Direct answer** | "It depends on the airport pair — the required saving ranges from about €7 to over €100 depending on which airports you are comparing." |
| **Mathematical model** | Required flight saving = max(0, fixed_cost_difference) |
| **Primary mechanic** | BREAK-EVEN SAVING |
| **Secondary mechanic** | PERSONAL HANDOFF (when saving is near the break-even) |
| **Production proofs** | LHR/STN (€101 needed), LHR/LGW (€7 needed), LGW/STN (€16 needed) |
| **Evidence reused** | All transfer costs (TfL/National Rail), GBP→EUR (1.17), fare methodology |
| **Evidence missing** | None — all derivable from production data |
| **What the page proves** | Break-even varies dramatically by airport pair |
| **What it does NOT prove** | Universal break-even for all London airports |
| **Personal-handoff boundary** | When net saving <€5: "The numbers stop here." |
| **Unique role** | Explains the general principle that all 3 Decision Pages demonstrate |
| **Required links** | 3 DPs, Quick Compare, Methodology, Hub |
| **Route** | TBD in Experience Design phase |

---

## N. NEXT PHASE

### A — TRUTH CONTRACT LOCKED — READY FOR EXPERIENCE DESIGN

**Phase 45: First Question Page — Experience Design.**

Do NOT combine Design + Build + Deploy. Design the page experience, then implement in a subsequent phase.

---

## O. DETENTE

No implementation. No design. No deploy. Contract complete.
