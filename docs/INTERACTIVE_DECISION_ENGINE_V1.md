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
- Keyboard editing (bag toggle button) preserved

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
