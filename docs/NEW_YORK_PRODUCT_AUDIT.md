# New York Product Completion Audit

**Phase 108.1 — Part A**
**Date: 2026-07-17**

---

## Remaining London Dependencies (Fixed in Phase 108.1)

| Dependency | Status | Fix |
|-----------|--------|-----|
| Quick Compare hardcoded "Berlin · BER" origin | ✅ Fixed | `getInitialForCity()` switches airports per city |
| Quick Compare hardcoded "London · STN/LHR" | ✅ Fixed | Dynamic from city registry |
| `buildVerdict` hardcoded "Stansted"/"Heathrow" | ✅ Fixed | Passes `placeA`/`placeB` params |
| `buildChangedState` hardcoded airport names | ✅ Fixed | Uses `optionA.name`/`optionB.name` |
| `buildCityOption` not setting airport name | ✅ Fixed | Looks up name from city registry |
| Decision context `londonDestinationId` field | ✅ Fixed | Added generic `destinationId` + `cityId` |
| URL only had `ld=` param | ✅ Fixed | Added `city=` + `dest=` (legacy `ld=` kept) |
| Evidence referenced `ctx.londonDestinationLabel` | ✅ Fixed | Now uses `ctx.destinationLabel` |
| Flips referenced `context.londonDestinationLabel` | ✅ Fixed | Now uses `context.destinationLabel` |
| Tradeoffs hardcoded "London" in unknowns | ✅ Fixed | Generic "destination" text |
| `isSupportedComparison` only STN/LHR | ✅ Fixed | City-aware via airport registry |

## New York Canonical Scenario

| Parameter | Option A (JFK) | Option B (Newark) |
|-----------|---------------|-------------------|
| Ticket price | €95 (illustrative) | €110 (illustrative) |
| Origin | Berlin · BER | Berlin · BER |
| Destination | New York · JFK | New York · EWR |
| Departure | 10:30 | 11:00 |
| Arrival | 13:45 | 14:15 |

**Default destination:** Midtown Manhattan

**Illustrative assumptions:**
- One checked bag (€45 on JFK, included on EWR)
- Standard seat selection (€12)
- Origin → airport transfer (€15)
- AirTrain + transit to selected NY destination
- All costs in illustrative EUR (converted from USD at ~0.92)
- Source: MTA, NJ Transit, Amtrak, July 2026
