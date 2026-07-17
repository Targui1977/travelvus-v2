# Interactive Decision Engine V1 — Documentation

**Phase 107.0 — Part R**
**Date: 2026-07-16**
**Version: 1.0**

---

## Overview

The Interactive Decision Engine V1 connects the interactive Compare→Result flow to the same reasoning systems used by Travelvus editorial pages. The result page now shows not just *who wins*, but *why* — with dynamic evidence, decision intelligence, flip rules, trade-offs, and confidence.

---

## Supported Route

**Berlin (BER) → London**

| Option A | Option B |
|----------|----------|
| Stansted (STN) | Heathrow (LHR) |

This is the **only** supported route in V1. Other airport pairs receive a ticket-only comparison with `insufficient_data` state.

---

## Architecture

```
CalculationResult (existing, server-side)
        │
        ▼
InteractiveDecisionContext  ←── buildDecisionContext()
        │
        ▼
buildInteractiveDecisionOutcome()  ←── Pure factory
        │
        ├── decisionStateRules → DecisionState
        ├── interactiveEvidence → EvidenceFactor[]
        ├── interactiveFlips    → DecisionFlip[]
        └── interactiveTradeoffs → advantages, tradeoffs, unknowns
        │
        ▼
InteractiveDecisionOutcome {
  decisionIntelligence: DecisionIntelligenceData
  evidence: { factors, trace, limitations, strength }
  confidence: HeroConfidence
  changedState?: { cause, consequence, ... }
}
        │
        ▼
ResultClient.tsx renders:
  <RecommendationEvidence />
  <DecisionIntelligence />
```

### Key Principle

**No new calculation.** All reasoning is derived from the existing `CalculationResult`. The factory is pure and synchronous — no APIs, no duplicate cost computation.

---

## Decision States

| State | Trigger | Example |
|-------|---------|---------|
| `recommended` | Clear advantage (≥€50, ≥60min), no estimates | — |
| `conditionally_recommended` | Clear advantage but relies on assumptions | Canonical STN vs LHR |
| `balanced` | Tie on cost, or each option wins a major dimension | Equal total costs |
| `marginal` | Cost diff €15–30 | Cost gap narrows after bag removal |
| `too_close` | Cost diff <€15 AND time diff <30min | Near-equal on all dimensions |
| `insufficient_data` | Unsupported route or missing inputs | Non-Berlin→London pairs |

### State Thresholds (all in EUR)

| Constant | Value | Meaning |
|----------|-------|---------|
| `MEANINGFUL_COST_DIFF` | €15 | Below this → too_close |
| `MARGINAL_COST_DIFF` | €30 | Below this → marginal |
| `CLEAR_COST_DIFF` | €50 | Above this → clear advantage |
| `MEANINGFUL_TIME_DIFF_MIN` | 30 min | Below this → no time advantage claimed |
| `SIGNIFICANT_TIME_DIFF_MIN` | 60 min | Above this → significant time advantage |

---

## Evidence Generation

Up to **5 factors**, maximum **2 critical**. Each factor references actual values from the calculation.

Factors (selected dynamically based on relevance):
1. **Real trip cost** — the complete cost comparison (critical when diff ≥€30)
2. **Airport transfer cost** — explains transfer cost impact (critical when it reverses the ticket-price order)
3. **Total journey time** — door-to-door difference
4. **Baggage & extras** — how baggage assumptions affect the result
5. **Arrival convenience** — transfer experience differences (supporting)
6. **Calculation assumptions** — which assumptions were used (supporting)

Evidence weight levels: `critical`, `high`, `medium`, `supporting`.

---

## Flip Rules

Generated from actual engine state. Every rule is derived from existing cost lines, time values, and assumptions.

V1 supported rules:
1. **Remove/add checked baggage** — how cost gap changes
2. **Ticket price break-even** — what fare change flips the recommendation
3. **Transfer cost change** — impact of free pickup
4. **Value of time** — when time preference changes the answer
5. **Destination change** — if not central London

---

## Trade-offs

Max 3 advantages + 3 trade-offs. Generated from actual comparison data, never generic.

---

## Unknown Information

Only unknowns that **materially affect the result** are shown:
- Exact London destination
- Actual baggage needs
- Live fare at time of booking
- Traveller's value of time
- Late-night transport availability

---

## Currency Treatment

**V1 comparison currency: EUR.** All monetary values in evidence, flips, and trade-offs use EUR exclusively. No silent EUR+GBP mixing.

Transfer costs that originate in GBP (TfL fares) are converted to EUR in the mock data layer before reaching the engine.

---

## Edit Reactivity

When the user edits assumptions (e.g., removes checked baggage):

1. `removeBag()` recalculates `OptionResult.realCost`
2. `useMemo` chain recomputes `decisionContext` → `decisionOutcome`
3. All rendered panels update synchronously:
   - Verdict headline
   - RealCost display
   - RecommendationEvidence (factors, trace, limitations)
   - DecisionIntelligence (state, recommendation, flips, trade-offs, unknowns)

**No stale reasoning remains** — the entire outcome is rebuilt from the updated context.

---

## Verdict Changed State

When editing changes the monetary winner:
- `changedState` is populated with cause, consequence, previous winner, new winner
- "Recommendation changed" messaging is specific: names the changed input
- No celebration effects; no generic "Results updated."

---

## Accessibility

- Reasoning section wrapped in `aria-live="polite"` for screen reader announcements
- Evidence uses semantic list structure
- Flip rules use explicit IF → THEN text pattern
- State/strength communicated by labels (not color alone)
- Keyboard editing preserved (44px min touch target, `aria-expanded`)
- Progressive disclosure controls use native `<details>` with keyboard support

---

## Result Hierarchy (Phase 107.1)

1. **Calculation Cascade** — animated step-by-step (transient)
2. **TravelvusVerdict** — dominant recommendation component (navy block)
3. **Real Cost + Door-to-Door** — executive metrics
4. **RecommendationEvidence** — "Why this recommendation" (factors + trace only)
5. **DecisionIntelligence** — "When it changes + what you give up" (state, advantages, tradeoffs, flips, limitations, unknowns)
6. **Edit assumptions** — baggage toggle
7. **Continuation** — related links

### Evidence vs Intelligence Responsibility Boundary

| Component | Answers | Contains |
|-----------|---------|----------|
| **RecommendationEvidence** | Which facts drove the current recommendation? | Weighted factors + decision trace |
| **DecisionIntelligence** | When would the recommendation change, and what trade-offs remain? | State, recommendation, summary, advantages, tradeoffs, flips, limitations, unknowns |

**Evidence does NOT repeat:** flip rules, limitations, unknowns, or strength.
**Intelligence does NOT repeat:** weighted evidence factors or the decision trace.

---

## Progressive Disclosure Policy (Phase 107.1)

- **Always visible:** recommendation, state label, evidence factors, advantages, trade-offs, first 3 flip rules, limitations
- **Collapsed by default** (via `<details>`): extended flip rules (>3), unknown information
- All collapsed controls use native `<details>/<summary>` with keyboard support

---

## Edit Feedback States (Phase 107.1)

| Scenario | Behaviour |
|----------|-----------|
| Edit changes winner | "Recommendation changed" banner + exact cause + undo/keep |
| Edit does NOT change winner | "Recommendation unchanged" note + updated metrics |
| Revert edit | Full return to original — no stale banner, evidence, or flips |
| Repeated edits | Each recalculation produces fresh outcome; no stale data |

---

## Production Acceptance Checklist (Phase 107.1)

- [x] TypeScript: zero errors
- [x] Lint: passing
- [x] All 285 tests passing
- [x] Production build: 74 routes, clean
- [x] Deployed: https://www.travelvus.com
- [x] Redundancies removed: DecisionThreshold, SecondaryFlips, DecisionDebt
- [x] Evidence/Intelligence boundary documented
- [x] Progressive disclosure: flips >3 + unknowns collapsed
- [x] Edit button: 44px touch target, aria-expanded
- [x] Unchanged-edit feedback implemented
- [x] Mobile context strip handles all 3 edit states

---

## Known V1 UX Limitations (Phase 107.1)

1. No browser-based interaction tests (Playwright) — relies on unit tests + build verification
2. No automated visual regression screenshots
3. Mobile QA done via responsive build verification, not device-level testing
4. Edge states (malformed URL, rapid toggling) tested at unit level only
5. Currency formatting uses inline `€` prefix rather than `formatMoney()` for most dynamic values
6. The cascade animation is the only "delight" moment — the reasoning section is functional/editorial

---

## Performance

- All new functions are pure and synchronous
- No external API calls, no new network requests
- No duplicate calculations — factory reads existing `CalculationResult`
- `useMemo` prevents unnecessary recomputation
- Bundle impact: ~750 lines of pure logic (~2KB gzipped)
- No new npm dependencies

---

## Limitations (V1)

1. **Single route only** — Berlin → Stansted vs Heathrow
2. **One-way comparison** — return journey not considered
3. **Illustrative fares** — not live pricing
4. **Central London assumption** — transfer costs assume Zone 1 destination
5. **Single edit type** — only baggage toggle; no destination, time, or fare edits
6. **Static transfer data** — TfL fares not live

---

## Future Extension (V2+)

- Multi-market support (NY, Paris)
- Live fare integration
- Return-journey comparison
- Destination selector (affects transfer costs)
- Time-of-day transfer pricing
- Interactive calculator with full engine connection

---

## Files

| File | Purpose |
|------|---------|
| `src/lib/interactive/interactive-decision-context.ts` | Typed context bridge |
| `src/lib/interactive/decision-state-rules.ts` | Thresholds + state/confidence mapping |
| `src/lib/interactive/interactive-evidence.ts` | Dynamic evidence generation |
| `src/lib/interactive/interactive-flips.ts` | Flip rule generation |
| `src/lib/interactive/interactive-tradeoffs.ts` | Trade-offs + unknowns |
| `src/lib/interactive/interactive-decision-outcome.ts` | Core factory orchestrator |
| `src/lib/interactive/index.ts` | Barrel export |
| `src/lib/__tests__/interactive-decision-engine.test.ts` | 72 tests |
