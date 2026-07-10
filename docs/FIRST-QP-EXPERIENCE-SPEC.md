# First Question Page — Experience Design Spec

**Date:** 2026-07-09
**Phase:** 45
**Status:** READY FOR IMPLEMENTATION
**Route candidate:** `/questions/london-airport-break-even`

---

## A. QUESTION PAGE VISUAL IDENTITY

ONE QUESTION → ONE DIRECT CONDITIONAL ANSWER → ONE EXPLANATORY MECHANIC → REAL PROOFS → WHAT CHANGES THE ANSWER → PERSONAL HANDOFF → PRODUCT CONTINUATION

The page is editorial. Not interactive. Not a calculator. Not a form. Three numbers (€101, €7, €16) are the visual spine — they prove the thesis: "there is no single number."

---

## B. SIGNATURE EXPERIENCE

### THE BREAK-EVEN SPREAD

Three dramatically different numbers answering one question. Presented as three editorial comparison strips — NOT cards, NOT a chart, NOT a table.

```
"How much cheaper?"
                    €101         €7          €16
                    ─────       ────        ────
                    LHR/STN     LHR/LGW     LGW/STN
```

Each strip: airport pair label, break-even number (serif, large), one-sentence why. The contrast between €101 and €7 is the page's thesis made visible.

**Why this is right for the first QP:** The mechanic IS the visual. The spread between three numbers IS the answer. No extra explanation layer needed.

---

## C. HERO CONTRACT

```
KICKER: London Airports · Question

H1: "How much cheaper should a London flight be 
     to justify a different airport?"

DIRECT ANSWER (serif, 34px):
"There is no single number. The required saving 
 ranges from about €7 to over €100 — depending 
 on which airports you are comparing."

EVIDENCE LINE (mono, 11px, muted):
Three verified London airport pairs · Heathrow, Gatwick, Stansted · Jul 2026
```

---

## D. DIRECT-ANSWER TREATMENT

### The formula — editorial, not mathematical notation

```
Required flight saving = what the alternative airport costs extra
```

Explained in plain English below:

> "The alternative airport may have a cheaper ticket. But it often has higher fixed costs — more expensive baggage, seat fees, or airport transfer. The flight must save enough to overcome that difference. How much 'enough' is depends on the airport pair."

No LaTeX. No code. Just clear English.

---

## E. THREE-PROOF TREATMENT

### Three horizontal break-even strips

Each strip: airport pair name (left), large break-even number (center), one-sentence explanation (right), Decision Page link.

```
┌──────────────────────────────────────────────────────────────┐
│ Heathrow vs Stansted     >€101                               │
│                          Stansted's flight must save more     │
│                          than €101 to overcome its higher     │
│                          baggage and transfer costs.          │
│                          → Full comparison                    │
├──────────────────────────────────────────────────────────────┤
│ Heathrow vs Gatwick      >€7                                 │
│                          LHR must save more than €7. But it   │
│                          usually costs €20 more — so Gatwick  │
│                          wins for most destinations.          │
│                          → Full comparison                    │
├──────────────────────────────────────────────────────────────┤
│ Gatwick vs Stansted      >€16                                │
│                          At €20 saving (canonical), Stansted  │
│                          just wins — by €4. A thin margin     │
│                          that requires personal judgment.     │
│                          → Full comparison                    │
└──────────────────────────────────────────────────────────────┘
```

Each row: hairline-separated. Numbers are serif, large (28-30px). Explanations are sans, 14px. Links are mono, copper. This is a NEW grammar — not cards, not Home proof rows, not Methodology pipeline.

---

## F. DESTINATION-EFFECT TREATMENT

### Inside "What changes the answer"

A compact editorial paragraph + one LHR/LGW example:

> "Even within one airport pair, your London destination can move the break-even. For Heathrow vs Gatwick: at Victoria, LHR needs to save >€7. At Paddington with advance HEX fares, the two airports nearly tie. The break-even is not fixed — it moves with where you are going."

Placed inside Section 6 (What changes the answer). Not a separate major section. One paragraph + one safe number.

---

## G. WHAT-CHANGES-THE-ANSWER TREATMENT

A restrained editorial list. Mono labels. Sans explanations.

```
What moves the break-even:

Airport pair
  Different airports have different fixed-cost profiles.
  The spread ranges from about €7 to over €100.

London destination
  Where in London you are going changes the transfer cost.
  This moves the break-even within the same airport pair.

Checked baggage
  Baggage fees differ by airline and airport. Removing
  baggage changes the fixed-cost difference.

Traveller count
  Fixed costs scale with group size. The break-even per
  person stays the same — but the total saving grows.
```

No grid. No feature matrix. No icons. Three or four editorial rows.

---

## H. MATHEMATICAL / PERSONAL HANDOFF

### Adapted from LGW/STN Saving-Worth pattern + Methodology navy block

```
┌──────────────────────────────────────────────┐
│ THE NUMBERS STOP HERE.                        │
│ YOUR JUDGMENT STARTS HERE.                    │
│                                               │
│ Travelvus can calculate how much cheaper a     │
│ flight must be to overcome an alternative      │
│ airport's higher fixed costs.                  │
│                                               │
│ It cannot decide whether a €4 net saving is    │
│ worth 20 extra minutes on a train. It cannot   │
│ decide whether simplicity matters more than a  │
│ narrow cost advantage.                         │
│                                               │
│ When the numbers are too close, or when time   │
│ and friction enter the equation, Travelvus     │
│ hands the decision to you.                     │
└──────────────────────────────────────────────┘
```

Navy bg. Paper text. Copper kicker. Serif body. Same system as Methodology handoff, adapted for QP context. Reusable pattern for future QPs.

---

## I. PRODUCT CONTINUATION

Primary CTA: **"Compare your own flights" → Quick Compare** (copper button)

Supporting paths:
- "Explore all London airport decisions →" (Hub)
- "How we calculate this →" (Methodology)

Three links. Ordered. Quiet editorial placement below handoff. No link clutter.

---

## J. FULL PAGE RHYTHM

| # | Section | Volume | Role |
|---|---------|--------|------|
| 1 | Hero | **STRONG** | Question + direct answer |
| 2 | The break-even model | MEDIUM | One formula, plain English |
| 3 | How much cheaper? — three proofs | **STRONG** | The visual spine |
| 4 | What moves the break-even | QUIET | Four editorial rows |
| 5 | The numbers stop here | **STRONG** | Navy handoff |
| 6 | Compare your own flights | MEDIUM | CTA + supporting links |

**6 sections. 3 STRONG, 1 MEDIUM, 2 QUIET.** Different silhouette from all existing pages. The three proof strips (Section 3) are the dominant visual moment.

---

## K. QUESTION PAGE FAMILY DESIGN GRAMMAR

### A. What every QP should visually preserve

- Hero: question → direct conditional answer
- One signature visual moment (the mechanic made visible)
- Evidence-qualified production proofs
- Mathematical/personal boundary
- Product continuation CTA

### B. What may change by question

- The visual expression of the mechanic (spread, comparison, threshold)
- The number and format of proofs
- The specific handoff framing

### C. What must never become a template shell

- Three identical proof cards with different airport names
- A Decision Page without the calculator
- A blog post with "Question:" in the H1

### D. Unique mechanic carrier

The signature experience section (Section 3 here, could be elsewhere in other QPs) carries the unique mechanic. For this QP, it's the three-strip break-even spread.

---

## L. CROSS-PAGE DIFFERENTIATION

| Page | Similar to | Deliberately different |
|------|-----------|----------------------|
| Home | Hero hierarchy | No cards, no steps, no QC embedded |
| Methodology | Navy handoff, editorial tone | No pipeline, no evidence bands, no rounding example |
| Hub | London airport context | No decision rows, no airport discovery grammar |
| LHR/STN | Break-even concept | No pair comparison, no live module, no threshold ruler |
| LHR/LGW | Destination effect reference | No destination tabs, no margin classification |
| LGW/STN | Saving-worth handoff | No cost table, no scenario cards |

**Clone risk: LOW.** The Question Page earns its own grammar through the break-even spread + question-first hierarchy.

---

## M. INTERNAL-LINK PLACEMENT

| Link | Placement |
|------|-----------|
| QP → LHR/STN | Inside proof strip 1 |
| QP → LHR/LGW | Inside proof strip 2 |
| QP → LGW/STN | Inside proof strip 3 |
| QP → QC | CTA section (primary button) |
| QP → Methodology | Supporting link below CTA |
| QP → Hub | Supporting link below CTA |
| Hub → QP | As a question card (implementation phase) |
| Home → QP | Contextual (implementation phase) |

---

## N. SEO STRUCTURE

| Field | Working direction |
|-------|------------------|
| Route | `/questions/london-airport-break-even` |
| Title | "How Much Cheaper Should a London Flight Be? | Travelvus" |
| H1 | "How much cheaper should a London flight be to justify a different airport?" |
| H2 | The break-even model / How much cheaper? Three real answers / What moves the break-even / When the numbers stop |
| Canonical | `/questions/london-airport-break-even` |

---

## O. AD DECISION

**Zero ad zones at launch.** The page is editorial trust content. Its primary role is to establish the Question Page format and prove the break-even mechanic. Ads would undermine the mathematical/personal boundary. Revisit after the QP family has 3+ members.

---

## P. RESPONSIVE CONTRACT

| Section | Desktop | Mobile (390) |
|---------|---------|-------------|
| Hero | Centered, 40px H1 | 28px H1, compact |
| Break-even model | 620px editorial width | Full width, readable |
| Proof strips | Three horizontal rows, large numbers | Stacked, numbers 24px, readable |
| What moves | Editorial rows, hairline dividers | Stacked |
| Handoff | Navy block, 620px | Full-width navy |
| CTA | Centered button | Full-width button |

No horizontal overflow. No tiny text. Numbers remain the visual anchor at all widths.

---

## Q. COMPONENT STRATEGY

| Element | Strategy |
|---------|----------|
| App Header | REUSE |
| Kicker | REUSE |
| BreakEvenStrip | CREATE NEW (editorial row with large number) |
| NavyHandoffBlock | ADAPT (from Methodology) |
| EditorialRow | CREATE NEW (for "what moves" section) |
| btn-filled | REUSE |
| Home proof cards | DO NOT REUSE |
| Hub decision rows | DO NOT REUSE |
| Methodology pipeline | DO NOT REUSE |

---

## R. ACCEPTANCE CHECKLIST

- [ ] One H1, one header
- [ ] Direct answer visible before scroll
- [ ] No universal-number implication
- [ ] Three break-even proof strips (not cards, not rows)
- [ ] Numbers €101, €7, €16 visible and large
- [ ] Scenario qualification on each strip
- [ ] Destination effect explained in "what moves"
- [ ] Mathematical/personal boundary explicit (navy handoff)
- [ ] Primary CTA → Quick Compare
- [ ] Mobile: strips stack, numbers readable
- [ ] No clone of existing page types
- [ ] Zero ad zones
- [ ] All links functional

---

## S. CLONE-RISK VERDICT: LOW

---

## T. IMPLEMENTATION SCOPE

- 1 new page file + CSS module
- 1-2 new components (BreakEvenStrip, editorial rows)
- Hub + Home links (2 source files modified)
- No data changes. No arithmetic changes. No existing route changes.

---

## U. FINAL RECOMMENDATION

### ✅ READY FOR IMPLEMENTATION

---

## V. NEXT PHASE

**Phase 46: First Question Page — Implementation + Deploy.**
