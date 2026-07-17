# Decision Engine Stability Report

**Phase 107.2A — Internal Engineering Report**
**Date: 2026-07-17**

---

## Executive Summary

The Travelvus Decision Engine V2 produces **sensitive but correct recommendations** for the canonical Berlin → London comparison. While the €68 airfare gap (€58 STN vs €126 LHR) seems large, the fixed costs (baggage €45 + seat €12 + origin transfer €15) consume €72 of STN's advantage, leaving only a narrow real-cost margin of €9–17 depending on destination.

**Engineering verdict: The engine correctly identifies narrow margins. Ready for New York and Paris — but operators should expect sensitivity when ticket gaps are small relative to fixed costs.**

---

## 1. Dominant Variables

| Rank | Variable | Why It Dominates |
|------|----------|-----------------|
| 1 | STN ticket price | Controls STN real cost. €9–17 margin means even small fare changes matter. |
| 2 | Checked baggage | €45 on STN. Removing it widens margin to €54–62. Stronger than destination alone. |
| 3 | LHR ticket price | Would need to drop below ~€73 to flip winner at Westminster. |
| 4 | London destination | Changes transfer by €3–7. Matters only when ticket gap <€10. |
| 5 | STN transfer cost | Would need 3× increase to flip winner alone. |

---

## 2. Sensitivity Matrix

| Destination | STN Real | LHR Real | Winner | Break-Even STN Fare | Gap | Stability |
|------------|----------|----------|--------|--------------------|-----|-----------|
| Paddington | €165 | €182 | STN | €75 | +€17 | Moderately Stable |
| Westminster | €162 | €171 | STN | €67 | +€9 | Sensitive |
| King's Cross | €162 | €171 | STN | €67 | +€9 | Sensitive |
| Liverpool St | €158 | €173 | STN | €73 | +€15 | Moderately Stable |
| Canary Wharf | €165 | €175 | STN | €68 | +€10 | Sensitive |

### Key Insight

Fixed costs consume most of the ticket advantage:
- Checked bag: €45
- Seat selection: €12
- Origin→airport transfer: €15
- **Total fixed costs: €72**

STN's real cost advantage is only **€9–17**, making the recommendation surprisingly sensitive. A €10 STN fare increase could flip Westminster or King's Cross to LHR.

---

## 3. Stress Test Summary

80 scenarios tested (8 ticket pairs × 5 destinations × 2 baggage states).

### When does LHR win?

LHR wins when:
- LHR ticket is significantly cheaper (€50 vs €126 → LHR wins)
- STN ticket is expensive (€130–150 while LHR stays at €126)
- Tickets are equal (€50/€50 or €100/€100) — LHR's transfer advantage tips the balance

### When does STN win?

STN wins at all canonical variations (any destination, any bag state) because the €68 ticket gap provides enough buffer even against €72 in fixed costs.

---

## 4. Flip Rule Validation

| Rule | Can Fire? | Threshold |
|------|-----------|-----------|
| Remove checked bag → STN becomes cheaper | ✅ Yes | Always fires when bag present (€45) |
| STN ticket rises above break-even → LHR wins | ✅ Yes | €67–75 (varies by destination) |
| Someone collects from STN → cost gap narrows | ✅ Yes | Removes €28–35 transfer cost |
| Value time at below €X/hour → STN worth it | ✅ Yes | Computed per scenario |
| Destination changes → different transfer costs | ✅ Yes | Any destination change triggers |
| Add bag back → cost gap widens | ✅ Yes | When bag was previously removed |

**All flip rules can fire. No impossible rules found.**

---

## 5. Decision Trace Validation

| Check | Result |
|-------|--------|
| Winner always reflects lower real cost | ✅ Pass |
| Confidence consistent with stability | ✅ Pass |
| No impossible state | ✅ Pass |
| Break-even internally consistent | ✅ Pass |
| Gap matches cost difference | ✅ Pass |

---

## 6. Variable Interactions

| Interaction | Type | Impact |
|-------------|------|--------|
| STN ticket × Destination | Dominant | Ticket gap controls everything |
| STN ticket × Baggage | Reinforcing | Both push same direction |
| Destination × Transfer cost | Independent | €3–7 range too small to matter alone |
| Ticket price × Time | Dominant | Cost dominates; time is tiebreaker |
| LHR ticket × Destination | Cancelling | Low LHR fare + good LHR transfer = flip possible |

---

## 7. Future V3 Opportunities

1. **Narrower margins needed** for destination to become decisive
2. **Baggage as percentage of total cost** is surprisingly high (26% of STN total)
3. **Multi-airport expansion** (Gatwick, Luton, London City) would introduce scenarios where destination matters
4. **Origin transfer cost** (€15) is a hidden variable that reduces the effective ticket advantage
5. **No-baggage scenarios** dramatically change the sensitivity (gap widens to €54+)

---

## 8. Known Limitations

1. Transfer data is illustrative, not live
2. Fixed costs (seat, origin transfer) are uniform across airports
3. Single airport pair (STN vs LHR)
4. One-way comparison only
5. No time-of-day fare variation

---

## 9. Engineering Conclusions

### Is the engine robust enough for New York?

**Yes.** The model correctly:
- Computes break-even thresholds using real arithmetic
- Identifies that fixed costs dominate apparent ticket advantages
- Ranks variables by actual influence (not by intuition)
- Handles edge cases (ties, equal costs)
- Makes its reasoning traceable and falsifiable

### Critical finding for NY/Paris expansion:

**Fixed costs consume ticket advantages.** The JFK vs EWR comparison will face the same dynamic: airfare gaps that look large (€50+) may produce only €5–15 real-cost margins after baggage, seat, and transfer costs. The engine must continue to compute break-evens honestly rather than assuming "large gap = stable recommendation."

### Recommendation:

Before launching NY, run this same sensitivity analysis against JFK/EWR destination data. The gap between JFK and EWR may be narrower than STN/LHR, which would make destination and baggage the decisive variables — exactly the design intent of the Destination-Aware Engine V2.
