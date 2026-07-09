# Travelvus V2 — Home Experience Design Contract

**Date:** 2026-07-08
**Phase:** 26
**Status:** READY FOR IMPLEMENTATION
**Route:** `/` (Home wrapper + existing Quick Compare)

---

## A. HOME EXPERIENCE THESIS

> Travelvus Home is the shortest honest answer to: "What is this, does it work, and can I use it right now?"

It must answer five questions in order, without prose bloat, without marketing language, without fake universality. The Quick Compare tool is the destination — Home is the explanation before it.

---

## B. HERO CONTRACT

### H1 candidates evaluated

| # | Candidate | Clarity | Distinct | Truth | Future-proof | Score |
|---|-----------|---------|----------|-------|-------------|-------|
| 1 | "Compare the real trip, not just the ticket." | 9 | 8 | 9 | 9 | **35** |
| 2 | "The ticket price shows one number. We compare the real trip." | 9 | 9 | 9 | 9 | **36** |
| 3 | "Which flight really wins? Travelvus compares the full journey." | 8 | 7 | 8 | 8 | 31 |
| 4 | "Found two flights and can't decide? Travelvus judges the real trip." | 7 | 7 | 8 | 7 | 29 |
| 5 | "Cheaper ticket ≠ cheaper trip. Travelvus shows you why." | 8 | 8 | 7 | 7 | 30 |
| 6 | "Stop guessing. Compare the real cost of your flights." | 7 | 6 | 7 | 8 | 28 |

### Selected H1: **#2**

> "The ticket price shows one number. We compare the real trip."

**Why:** Two sentences. First names the problem (ticket price is insufficient). Second names the solution (Travelvus compares the real trip). Distinct from flight-search copy. True to the product. Survives expansion beyond London.

### Hero contract

```
┌──────────────────────────────────────────────────────┐
│ KICKER: Travelvus                                    │
│                                                      │
│ H1 (serif 46px):                                     │
│ The ticket price shows one number.                   │
│ We compare the real trip.                            │
│                                                      │
│ SUB (sans 16px, muted):                              │
│ Bring two flights you already found. Travelvus       │
│ adds baggage, airport transfers, and door-to-door    │
│ time. Then tells you which really wins — and what    │
│ would change the answer.                             │
│                                                      │
│ [Compare your flights ↓]  (navy CTA, scrolls to QC)  │
│                                                      │
│ EVIDENCE (mono 10px, muted):                         │
│ Verified for London airports · Heathrow, Gatwick,    │
│ Stansted · 3 real comparisons below                 │
└──────────────────────────────────────────────────────┘
```

---

## C. EXACT SECTION ORDER

| # | Section | Scroll position | Visual volume |
|---|---------|----------------|---------------|
| 1 | Hero | Above fold | **Strong** |
| 2 | How Travelvus thinks | After hero | Quiet |
| 3 | Real comparisons (3 proof cards) | Mid-page | Medium |
| 4 | Quick Compare (existing) | Below cards | Strong (existing component) |
| 5 | What Travelvus can answer | Before footer | Quiet |
| 6 | Footer | Bottom | Quiet |

---

## D. PROOF SYSTEM — THREE CARDS

### Structure: **Equal horizontal row on desktop. Stacked on mobile.**

Each card is border-contained, not a navy block, not a generic blog card.

### Card A — Heathrow vs Stansted

```
┌────────────────────────────────────┐
│ EYEBROW (mono, copper):            │
│ Hidden real cost                   │
│                                    │
│ INSIGHT (serif 18px):              │
│ "The €58 ticket produced           │
│  a €204 journey."                  │
│                                    │
│ EVIDENCE (sans 13px, muted):       │
│ Once the checked bag and night     │
│ taxi were counted, Heathrow saved  │
│ €33 — despite the €68 higher fare. │
│                                    │
│ → Heathrow vs Stansted             │
└────────────────────────────────────┘
```

### Card B — Heathrow vs Gatwick

```
┌────────────────────────────────────┐
│ EYEBROW (mono, copper):            │
│ Destination matters                │
│                                    │
│ INSIGHT (serif 18px):              │
│ "Gatwick usually wins on money —   │
│  but your destination changes      │
│  the margin."                      │
│                                    │
│ EVIDENCE (sans 13px, muted):       │
│ Same flights, same travellers.     │
│ Only the London destination        │
│ changed. Paddington: near-tie.     │
│ Canary Wharf: €37 Gatwick win.     │
│                                    │
│ → Heathrow vs Gatwick              │
└────────────────────────────────────┘
```

### Card C — Gatwick vs Stansted

```
┌────────────────────────────────────┐
│ EYEBROW (mono, copper):            │
│ The saving that nearly vanished    │
│                                    │
│ INSIGHT (serif 18px):              │
│ "Stansted saves €20 on the flight  │
│  — but €16 more in fixed costs     │
│  leaves only €4."                  │
│                                    │
│ EVIDENCE (sans 13px, muted):       │
│ Stansted was cheaper on the ticket │
│ but baggage and a longer train     │
│ journey nearly erased the gain.    │
│                                    │
│ → Gatwick vs Stansted              │
└────────────────────────────────────┘
```

### Card rules

- Each card shows exactly ONE product insight
- Numbers come from locked production data (no new calculations)
- Links go to the respective Decision Page routes
- No airport photos. No gradients. No star ratings.

---

## E. QUICK COMPARE INTEGRATION

### What changes

- **Remove** the existing Quick Compare hero (H1, supporting copy, eyebrow). Those are absorbed into the new Home hero above.
- **Keep** the Quick Compare component body: header, fields, A/B tokens, vs divider, CTA, Add details link.
- **Add** a quiet editorial label above Quick Compare: "Compare your flights" (section-label style, not a new H1).
- **CTA strategy:** Hero CTA scrolls to Quick Compare via anchor `#compare`. No page navigation needed.

### What must remain untouched

- QuickCompare.tsx component internals
- Field rendering, A/B tokens, vs divider
- URL-state behavior
- `/result` navigation flow
- Mobile tab behavior
- Sticky footer CTA

### How to prevent competing heroes

The new Home hero is the ONLY H1 on the page. Quick Compare's old H1 is removed. The Quick Compare section gets a section-label, not another heading. One page, one hero, one product promise.

---

## F. HOW TRAVELVUS THINKS

### Section label: "How Travelvus thinks"

Three editorial steps. Serif numbers. No icons.

```
┌──────────────────────────────────────────────┐
│ 01. You bring two flights you already found. │
│     Ticket price, airports, departure and    │
│     arrival times. That's it. No search.     │
│     No booking. You already did the work.    │
│                                              │
│ 02. We compare the real trip.                │
│     Checked baggage, seat selection, airport │
│     transfers, and door-to-door time — not   │
│     just the ticket price you saw online.    │
│                                              │
│ 03. You get a verdict you can challenge.     │
│     See who wins, by how much, and exactly   │
│     what would change the answer. Edit       │
│     variables. Test scenarios. Undo. Keep.   │
└──────────────────────────────────────────────┘
```

---

## G. BOUNDARIES CONTRACT

### Section label: "What Travelvus can answer today"

```
┌──────────────────────────────────────────────┐
│ Currently verified for London airports:       │
│ Heathrow, Gatwick, and Stansted.              │
│                                              │
│ For these airports, we compare:              │
│ • Real cost (ticket + baggage + transfer)    │
│ • Door-to-door journey time                  │
│ • What would change the winner               │
│ • Hidden trade-offs between options           │
│                                              │
│ For other airports, you can still compare    │
│ ticket prices — and we'll tell you honestly  │
│ when we don't yet have the full transfer     │
│ data to judge the complete trip.             │
│                                              │
│ Travelvus calculates the money truth.         │
│ Whether the saving is worth the extra        │
│ journey time is personal — we hand that      │
│ decision to you.                             │
└──────────────────────────────────────────────┘
```

---

## H. VISUAL RHYTHM + VOLUME MAP

| Section | Volume | Treatment |
|---------|--------|-----------|
| Hero | **Strong** | Centered. Large serif H1. Navy CTA. Generous whitespace. |
| How Travelvus thinks | Quiet | Editorial width (620px). Numbered steps. Hairline dividers. |
| Real comparisons | Medium | 3 border-contained cards. Paper bg. Copper eyebrows. |
| Quick Compare | **Strong** | Existing component. Full-width. Shadow frame. |
| Boundaries | Quiet | Editorial width. Paper-2 bg or subtle border. |
| Footer | Quiet | Hairline top rule. Mono links. Ad zone. |

---

## I. SEO CONTRACT

| Field | Value |
|-------|-------|
| Title | "Travelvus — Compare Two Flights and Find Out Which Really Wins" |
| Meta description | "Found two flights and can't decide? Travelvus compares the real trip — door-to-door costs, baggage, transfers, and time. Verified for London airports." |
| H1 | "The ticket price shows one number. We compare the real trip." |
| H2 | "How Travelvus thinks" · "Real comparisons" · "What Travelvus can answer today" |
| Canonical | `/` |
| SSR | Server-rendered (SSG). Hero, steps, cards, boundaries all in HTML source. Quick Compare client-side. |

---

## J. ADSENSE-SAFE ZONES

| Zone | Safe? | Reason |
|------|-------|--------|
| Between How Travelvus thinks and Real comparisons | ✅ | Editorial transition |
| Between Real comparisons and Quick Compare | ✅ | Transition to tool |
| Footer | ✅ | Post-content |
| Inside Hero | ❌ | Core promise |
| Inside proof cards | ❌ | Product evidence |
| Inside Quick Compare | ❌ | Core product |
| Inside boundaries | ❌ | Trust statement |

---

## K. MOBILE CONTRACT

| Section | Desktop | Mobile |
|---------|---------|--------|
| Hero | Centered, 46px H1, generous space | 28px H1, tighter, CTA full-width |
| How Travelvus thinks | 620px editorial width, 3 rows | Same structure, narrower, readable |
| Proof cards | 3 horizontal cards | Stacked vertically, full-width |
| Quick Compare | Existing responsive component | Existing mobile tabs |
| Boundaries | 620px editorial | Full-width, compact |
| Footer | 3-column links | Stacked, center-aligned |

---

## L. COMPONENT REUSE MAP

| Component | Source | Reuse |
|-----------|--------|-------|
| App Header | Existing | REUSE AS-IS |
| QuickCompare | Existing | REUSE (internal logic untouched) |
| OptionToken | Existing | REUSE (in cards if needed) |
| Kicker | Existing | REUSE (hero, card eyebrows) |
| SectionLabel (numbered) | Existing | REUSE (01, 02, 03) |
| HairlineDivider | Existing | REUSE |
| ProofCard | **NEW** | Editorial card with insight + evidence |
| HomeHero | **NEW** | Centered hero block |
| BoundarySection | **NEW** | Editorial honesty statement |
| HomeFooter | **NEW** | Minimal footer |

---

## M. FILES EXPECTED TO CHANGE

| File | Change |
|------|--------|
| `src/app/page.tsx` | Add Home wrapper above QuickCompare |
| `src/app/globals.css` | +60 lines: hero, proof cards, boundaries |
| `src/components/compare/QuickCompare.tsx` | Remove hero (H1, copy, eyebrow) — keep body only |

## N. FILES THAT MUST REMAIN UNTOUCHED

| File | Reason |
|------|--------|
| `src/app/result/*` | Production surface |
| `src/app/compare/*` | Production surfaces |
| `src/lib/*` | Data contracts |
| `src/components/result/*` | Shared result components |
| `src/components/ui/*` | Primitives |

## O. IMPLEMENTATION RISKS

| Risk | Severity | Mitigation |
|------|----------|-----------|
| Quick Compare hero removal breaks visual flow | MEDIUM | Test with existing QC users; keep section-label transition |
| Proof cards feel like generic blog | LOW | Each shows one product insight, not an article preview |
| Home feels longer than necessary | LOW | 6 sections, no prose bloat, editorial density |
| Mobile scroll too long | MEDIUM | Compact sections. QC reachable via CTA anchor. |

## P. CLONE-RISK ASSESSMENT

**LOW.** Home is a new page type that doesn't clone any existing Travelvus surface. The proof cards are editorial summaries, not mini Decision Pages. The hero is a product promise, not a comparison question.

## Q. RECOMMENDATION

### ✅ READY FOR IMPLEMENTATION

Home can be built with 4 new components on `/`. Quick Compare hero absorbed into Home. No route changes. No new data files. All Decision Pages unchanged.

## R. EXACT NEXT PHASE

**Phase 27: Home Implementation + Deploy.**

## S. DETENIDO

No code. No design changes. No deploy. Spec complete.
