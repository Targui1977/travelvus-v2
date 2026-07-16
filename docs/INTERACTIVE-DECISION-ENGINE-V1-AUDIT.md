# Interactive Decision Engine V1 — Current Flow Audit

**Phase 107.0 — Part A**
**Date: 2026-07-16**

---

## 1. QuickCompare → Result: Complete Flow

### 1.1 Input Fields (QuickCompare)

| Field | Option A (default) | Option B (default) | Validation |
|-------|-------------------|---------------------|------------|
| Ticket price | €58 (editable) | €128 (editable) | Numeric, >0, <=99999, strips €$£ |
| Origin | Berlin · BER | Berlin · BER | Must contain "·" separator |
| Destination | London · STN | London · LHR | Must contain "·" separator |
| Departure time | 21:00 | 17:30 | HH:MM, H:MM, HHMM, HH.MM |
| Arrival time | 23:05 | 19:30 | HH:MM, H:MM, HHMM, HH.MM |

### 1.2 URL Parameters

Encoded via `encodeCompareParams()` → compact keys: `at, af, at2, ad, aa, bt, bf, bt2, bd, ba`.

### 1.3 Server-Side Processing (`result/page.tsx`)

1. `decodeCompareParams()` — extracts 10 fields from URL
2. `normalizeInput()` — parses prices, validates times
3. `isSupportedComparison()` — only BER→STN vs BER→LHR
4. Patches mock data with user ticket prices
5. Recalculates `realCost` and `monetaryWinner`
6. Builds `CalculationResult` via `buildCalculationResult()`

### 1.4 CalculationResult (7 stages)

| Stage ID | What it does |
|----------|-------------|
| `reading_flight_details` | Confirms ticket prices |
| `adding_baggage_and_extras` | Adds checked bag (+€45), seat selection |
| `calculating_airport_transfers` | STN: €86 night taxi, LHR: Included |
| `measuring_journey_time` | Door-to-door: STN 8h05m, LHR 5h10m |
| `calculating_real_cost` | STN €204, LHR €171 |
| `comparing_journeys` | LHR wins on cost (€33 less) |
| `preparing_verdict` | Final recommendation |

### 1.5 Current Result State

**Default (canonical):**
- Winner: Option B (Heathrow)
- Real cost: A=€204, B=€171
- Savings: €33
- Time saved: 2h 55m (LHR 5h10m vs STN 8h05m)
- Confidence: "Strong"
- State: Static — no dynamic reasoning beyond winner/cost/time

### 1.6 Edit Options

- Single toggle: remove checked bag from Option A (−€45)
- Recalculates: `realCost`, `monetaryWinner`, `detectChange`
- If winner flips: shows `VerdictChangedBanner` with cause
- Shows `RobustnessNote` with break-even threshold
- Undo/Keep buttons

### 1.7 Repeated Calculation

- Cascade re-runs on page reload with accelerated timing
- `isRepeated` detected in ResultClient via prior state
- Reduced motion: instant verdict (no cascade animation)

---

## 2. Data Available

| Data point | Source | Availability |
|-----------|--------|-------------|
| Ticket prices (both options) | User input / mock default | Always |
| Airport codes | User input / mock default | Always |
| Checked baggage cost | Mock data (€45 STN, Included LHR) | Always |
| Seat selection cost | Mock data (€15 both) | Always |
| Airport transfer cost | Mock data (€86 STN, Included LHR) | Supported routes only |
| Door-to-door time | Mock data | Supported routes only |
| Real trip cost | Computed from cost lines | Always |
| Monetary winner | Computed | Always |

---

## 3. Data Missing (V1 limitations)

| Missing data | Impact |
|-------------|--------|
| Exact London destination | Transfer costs assume central London |
| Live fare data | Ticket prices are user-provided or illustrative |
| Actual baggage policy | Assumes one checked bag standard |
| Traveller's value of time | Not collected — time advantage shown as raw minutes |
| Late-night transport availability | Assumed available (night taxi for STN) |
| Real-time disruption | No live transit data |
| Return journey costs | One-way comparison only |

---

## 4. Hardcoded Assumptions

1. One checked bag per option (unless removed by user)
2. Standard seat selection
3. Off-peak public transport fares
4. 90-minute pre-flight buffer
5. Central London destination
6. GBP→EUR conversion baked into mock data (no live FX)
7. Only Berlin → Stansted vs Heathrow is supported

---

## 5. Supported Comparison Logic

- `isSupportedComparison()`: checks destination codes are STN + LHR
- Unsupported pairs: limited to ticket comparison only, transfer costs estimated
- Warning displayed: "This airport pair has limited transfer data"

---

## 6. Current Result State (post-cascade)

After cascade completes, ResultClient renders:

1. **Header** — back link, edit options, share
2. **Mobile context strip** — B wins · €33 · 8h05m vs 5h10m
3. **Edit panel** — bag toggle (supported routes only)
4. **VerdictChangedBanner** (if changed)
5. **Inline verdict** — headline with peach highlight
6. **RealCost** — cost columns with editorial text
7. **DoorToDoor** (if unchanged, supported)
8. **DecisionThreshold** (if unchanged, supported)
9. **SecondaryFlips** (if unchanged, supported)
10. **DecisionDebt** (if unchanged, supported)
11. **ContinuationBlock** — links

**Missing from current result:**
- RecommendationEvidence (why this recommendation)
- DecisionIntelligence (state, confidence, flips, trade-offs, unknowns)
- Dynamic reasoning connected to actual calculation

---

## 7. Edit-Option State

Current implementation supports ONE edit: remove checked bag from Option A.

- Sets cost line[1] amount to 0, label to "Checked bag — removed"
- Recalculates realCost
- Detects winner change
- Shows changed state banner
- Undo restores original state
- Keep locks in the change

**Missing:**
- No other editable cost lines
- No destination edit
- No time-of-day edit
- No baggage-weight edit

---

## 8. Repeated-Calculation State

- Detected by `isRepeated` in cascade timing
- Accelerated timing (1800-2600ms vs 3400-4200ms)
- Reduced-motion path skips animation entirely
- `calculatedAt` timestamp prevents stale results

---

## 9. Gap Analysis

| What editorial pages have | What interactive result has | Gap |
|--------------------------|---------------------------|-----|
| DecisionState | — | **Missing** |
| HeroConfidence | Confidence label string | **Different system** |
| Evidence factors (weighted) | — | **Missing** |
| Flip rules (IF→THEN) | SecondaryFlips (HTML) | **Different format** |
| Trade-offs | — | **Missing** |
| Unknowns | — | **Missing** |
| Recommendation text | Verdict headline | **Different format** |
| Decision trace | — | **Missing** |

**Conclusion:** The interactive result has raw numbers but no reasoning layer. Phase 107 bridges every gap by consuming shared types (`DecisionIntelligenceData`, `EvidenceFactor`, `HeroConfidence`) from a pure factory function driven by the existing `CalculationResult`.
