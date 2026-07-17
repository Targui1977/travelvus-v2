# New York Product Completion

**Phase 108.1**
**Date: 2026-07-17**

---

## Canonical Scenario

| | Option A | Option B |
|---|---------|----------|
| Airport | JFK | Newark (EWR) |
| Ticket | €95 | €110 |
| Origin | Berlin · BER | Berlin · BER |
| Default destination | Midtown Manhattan | |

---

## Supported NY Destinations

| ID | Label | JFK Transfer | EWR Transfer |
|----|-------|-------------|-------------|
| midtown | Midtown Manhattan | €16 / 50min | €20 / 40min |
| lower-manhattan | Lower Manhattan | €16 / 60min | €20 / 50min |
| financial-district | Financial District | €18 / 65min | €20 / 55min |
| brooklyn-downtown | Brooklyn Downtown | €14 / 40min | €20 / 60min |
| long-island-city | Long Island City | €11 / 45min | €20 / 60min |

---

## Illustrative Assumptions

- One checked bag per option
- Standard seat selection
- 90-minute pre-flight buffer
- AirTrain + subway/LIRR/NJ Transit to destination
- All costs in illustrative EUR (USD→EUR at ~0.92)
- Sources: MTA, NJ Transit, Amtrak, July 2026

---

## URL Contract

```
?city=new-york&dest=midtown&at=95&af=Berlin+%C2%B7+BER&at2=New+York+%C2%B7+JFK&ad=10%3A30&aa=13%3A45&bt=110&bf=Berlin+%C2%B7+BER&bt2=New+York+%C2%B7+EWR&bd=11%3A00&ba=14%3A15
```

---

## Known Limitations

1. Origin is still Berlin (no US domestic comparison yet)
2. Transfer data is illustrative, not live
3. No LaGuardia (LGA) in interactive comparison
4. No time-of-day fare variation
5. USD→EUR conversion is editorial (~0.92), not live FX

---

## Future City Contract

Before a new city can be declared production-ready:

### Dataset Requirements
- [ ] `CityId` registered in `src/data/cities.ts`
- [ ] `CityMetadata` with airports, currency, default destination
- [ ] `src/data/{city}-destinations.ts` with 5+ destination zones
- [ ] Transfer profiles for each supported airport pair
- [ ] All values: illustrative, sourced, dated

### Engine Requirements
- [ ] Supported airport pair in `CITY_REGISTRY`
- [ ] `isSupportedComparison()` returns true for the pair
- [ ] `buildCityOption()` produces correct names + costs
- [ ] Decision context populated with city metadata

### Product Requirements
- [ ] Quick Compare: city selectable, airport fields update
- [ ] Quick Compare: canonical scenario with realistic fares
- [ ] Result page: city + destination summary visible
- [ ] Edit panel: destination selector works
- [ ] Verdict: airport names correct (not inherited from mock)
- [ ] Evidence: city-aware transfer factor
- [ ] Share URL: preserves city + destination

### QA Requirements
- [ ] Playwright journeys: Home → City → Result
- [ ] Playwright: edit + revert for new city
- [ ] Mobile: no overflow at 390px
- [ ] All existing city tests still pass (regression)
- [ ] Production screenshots captured

### Documentation
- [ ] Canonical scenario documented
- [ ] Transfer assumptions documented
- [ ] Known limitations listed
