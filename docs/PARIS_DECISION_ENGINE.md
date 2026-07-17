# Paris Decision Engine V1

**Phase 109.0 — First Factory-Generated City**
**Date: 2026-07-17**

---

## Overview

Paris is the first city implemented entirely through the City Factory workflow. Zero engine modifications. Pure data entry + configuration.

---

## Supported Airports

| Code | Name | Full Name |
|------|------|-----------|
| CDG | Charles de Gaulle | Paris Charles de Gaulle (CDG) |
| ORY | Orly | Paris Orly (ORY) |

---

## Supported Destinations

| ID | Label | Station |
|----|-------|---------|
| central-paris | Central Paris | Châtelet–Les Halles |
| la-defense | La Défense | La Défense–Grande Arche |
| montparnasse | Montparnasse | Gare Montparnasse |
| gare-du-nord | Gare du Nord | Gare du Nord |
| bercy | Bercy | Gare de Lyon |

---

## Transfer Profiles

| Destination | CDG Cost | CDG Time | ORY Cost | ORY Time |
|------------|----------|----------|----------|----------|
| Central Paris | €12 | 40min | €15 | 50min |
| La Défense | €12 | 55min | €15 | 70min |
| Montparnasse | €12 | 55min | €11 | 35min |
| Gare du Nord | €12 | 35min | €15 | 55min |
| Bercy | €12 | 50min | €15 | 65min |

---

## Canonical Scenario

| | Option A | Option B |
|---|---------|----------|
| Airport | CDG | ORY |
| Ticket | €80 (illustrative) | €95 (illustrative) |
| Origin | Berlin · BER | Berlin · BER |
| Default destination | Central Paris | |

---

## Illustrative Assumptions

- One checked bag per option (€45 on CDG, included on ORY)
- Standard seat selection (€12)
- Origin → airport transfer (€15)
- RER B / Orlyval + Metro to selected Paris destination
- All costs in EUR
- Sources: RATP, SNCF, Paris Aéroport, Île-de-France Mobilités, July 2026

---

## Factory Compliance

| Requirement | Status |
|-------------|--------|
| City registered in CITY_REGISTRY | ✅ |
| Airport profiles defined | ✅ |
| Destination dataset created | ✅ |
| 5+ destination zones | ✅ (5) |
| All transfer profiles complete | ✅ |
| validateCity("paris") returns ready | ✅ |
| Quick Compare scenario defined | ✅ |
| URL: city=paris + dest= supported | ✅ |
| Zero engine modifications | ✅ |
| Zero reasoning modifications | ✅ |
| Zero UI architecture changes | ✅ |

---

## Known Limitations

1. Transfer data is illustrative, not live
2. Origin is still Berlin (no intra-France comparison)
3. No time-of-day fare variation
4. Orlyval premium (€9.30) included in ORY transfer — actual cost may vary
5. RER B reliability/engineering works not modelled

---

## Files Touched (Factory-Only)

| File | Change |
|------|--------|
| `src/data/cities.ts` | +1 CityId, +1 CITY_REGISTRY entry |
| `src/data/paris-destinations.ts` | New: 5 destinations, 10 transfer profiles |
| `src/lib/city-engine.ts` | +3 switch cases (dispatch only) |
| `src/components/compare/QuickCompare.tsx` | +1 case in getInitialForCity() |
| `src/lib/__tests__/city-factory.test.ts` | +2 Paris tests |

**Zero engine, reasoning, calculation, evidence, or UI architecture files modified.**
