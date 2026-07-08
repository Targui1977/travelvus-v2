# Travelvus V2 — Second Decision Page Selection Gate

**Date:** 2026-07-08
**Phase:** 13.4
**Status:** Evaluation complete. Recommendation: **Heathrow vs Gatwick.**

---

## A. CANDIDATE TABLE

| # | Pair | Type | Airport Distance | Price Tier | Primary Carriers |
|---|------|------|-----------------|------------|-----------------|
| 1 | Heathrow vs Gatwick | Airport vs Airport | 15mi vs 28mi | Premium vs Mid | BA/VS vs easyJet/BA |
| 2 | Stansted vs Luton | Airport vs Airport | 34mi vs 32mi | Budget vs Budget | Ryanair vs Wizz |
| 3 | Gatwick vs Stansted | Airport vs Airport | 28mi vs 38mi | Mid vs Budget | easyJet vs Ryanair |
| 4 | Heathrow vs London City | Airport vs Airport | 15mi vs 6mi | Premium vs Premium | BA vs BA CityFlyer |
| 5 | Heathrow Express vs Elizabeth Line | Rail vs Rail | Same airport | £25 vs £14 | N/A |

---

## B. DECISION REALITY FINDINGS

### 1. Heathrow vs Gatwick — **GENUINE DECISION** ✅

Travellers actively choose between these. Both serve short-haul and long-haul. Both are major hubs. The trade-off is real: closer/more expensive vs further/cheaper. Different transport modes create real cost differences. Destination inside London changes winner. **Strong candidate.**

### 2. Stansted vs Luton — **WEAK DECISION** ❌

The airline locks the airport. Ryanair = Stansted. Wizz = Luton. Travellers rarely choose between them; they choose an airline and get the airport. Nearly identical budget profile. Low product learning value. **Rejected.**

### 3. Gatwick vs Stansted — **MODERATE DECISION** ⚠️

Similar to LHR vs STN (mid vs budget) but both are farther from central London. Introduces destination-sensitivity: south London favours Gatwick, east London favours Stansted. Teaches a new dimension but structurally similar to existing page.

### 4. Heathrow vs London City — **GENUINE DECISION** ✅

Completely different dynamic. Premium business traveller choice. Proximity vs connectivity. LCY: 22min DLR for £3.40. LHR: 15min HEX for £25 or 50min tube for £5.50. Teaches TIME-VS-COST within the premium segment. Different audience. Different decision logic.

### 5. Heathrow Express vs Elizabeth Line — **TOO NARROW** ❌

Single-mode comparison. Same origin, different price/speed trade-off. Interesting as a future Question Page, but too narrow for a full Decision Page that needs to demonstrate the product system. Limited reuse value.

### Verdict on decision reality:

| Candidate | Is it a real choice? | Trade-off? | Winner changes? |
|-----------|---------------------|------------|-----------------|
| LHR vs LGW | ✅ Yes | Cost vs convenience | Yes, by London destination |
| STN vs LTN | ❌ Airline-locked | Almost none | Rarely |
| LGW vs STN | ⚠️ Sometimes | Location vs price | Yes, by London destination |
| LHR vs LCY | ✅ Yes | Connectivity vs speed | Yes, by flight type |
| HX vs EL | ⚠️ Yes but narrow | Time vs money | Sometimes |

---

## C. SERP / SEARCH-INTENT FINDINGS

| Candidate | Primary Query | Intent | Current SERP | Gap |
|-----------|--------------|--------|-------------|-----|
| LHR vs LGW | "Heathrow vs Gatwick which is better" | Comparison | Blog posts, generic guides | No decision-layered comparison exists |
| STN vs LTN | "Stansted vs Luton" | Comparison | Blog posts, airline-biased | Low search volume, airline-driven |
| LGW vs STN | "Gatwick vs Stansted" | Comparison | TripAdvisor forums, generic guides | Forum-driven, no structured comparison |
| LHR vs LCY | "London City vs Heathrow business" | Business decision | Business travel blogs | Underserved niche, high-value audience |
| HX vs EL | "Heathrow Express vs Elizabeth line" | Transport choice | Travel blogs, cost comparison | Narrow, seasonal traffic |

**Search intent verdict:** LHR vs LGW has the broadest, most diverse search audience. LHR vs LCY targets a high-value niche. STN vs LTN and LGW vs STN have less search volume and fewer unique queries.

Data: UNKNOWN (no Search Console). Pattern assessment based on SERP analysis and keyword logic only.

---

## D. TRUTH-CONTRACT REQUIREMENTS

### Heathrow vs Gatwick

| Type | Data Needed | Stability |
|------|------------|----------|
| STABLE | Airport locations, rail links, coach routes | Permanent |
| STABLE | Distance from central London | Permanent |
| CHANGEABLE | Fares (BA, easyJet, Virgin, etc.) | Weekly/daily |
| CHANGEABLE | Train ticket prices | Regulated, annual changes |
| ESTIMATE | Taxi costs (traffic-dependent) | ±20% |
| ESTIMATE | Peak vs off-peak journey times | Traffic-dependent |

**Feasibility: HIGH.** All stable facts are publicly available. Train prices are regulated. Taxi estimates can be ranged. Same data quality as LHR vs STN.

### Heathrow vs London City

| Type | Data Needed | Stability |
|------|------------|----------|
| STABLE | DLR route, HEX route | Permanent |
| CHANGEABLE | LCY flight prices (premium, smaller market) | Daily |
| ESTIMATE | LCY departure lounge wait times | Operational |

**Feasibility: MEDIUM.** LCY serves fewer routes. Fare data is more niche. Harder to build a universally-true comparison because LCY destinations are limited.

---

## E. REUSABLE DECISION MODEL

| Candidate | Model Created | Future Value |
|-----------|--------------|-------------|
| LHR vs LGW | **DESTINATION-SENSITIVE AIRPORT MODEL** — winner depends on where in London you're going | High — applies to any city with multiple airports |
| STN vs LTN | Minimal — too similar to existing | Low |
| LGW vs STN | **DISTANCE-BASED BUDGET TIER MODEL** — mid-budget vs extreme-budget | Medium — applies to other cities |
| LHR vs LCY | **BUSINESS-TRAVELLER PRIORITY MODEL** — speed vs cost for premium segment | High — different audience, different decision logic |
| HX vs EL | **SAME-ROUTE TRANSPORT MODE COMPARISON** | Low — too narrow for platform |

---

## F. SCORING TABLE

| Dimension | LHR vs LGW | STN vs LTN | LGW vs STN | LHR vs LCY | HX vs EL |
|-----------|-----------|-----------|-----------|-----------|---------|
| 1. Real search decision | **9** | 3 | 6 | 8 | 6 |
| 2. SEO opportunity | **9** | 4 | 6 | 7 | 5 |
| 3. Product learning | **9** | 3 | 5 | 8 | 4 |
| 4. Difference from LHR vs STN | **8** | 2 | 5 | 9 | 10 |
| 5. Threshold quality | **8** | 4 | 6 | 7 | 5 |
| 6. Scenario-flip quality | **9** | 3 | 6 | 7 | 4 |
| 7. Truth-contract feasibility | **9** | 7 | 7 | 6 | 8 |
| 8. Future reuse | **9** | 3 | 6 | 8 | 4 |
| 9. AdSense editorial depth | **8** | 4 | 5 | 6 | 3 |
| 10. Quick Compare integration | **9** | 5 | 7 | 7 | 5 |
| **TOTAL /100** | **87** | 38 | 59 | 73 | 54 |

---

## G. WINNER: HEATHROW VS GATWICK

Score: **87/100.**

---

## H. EXACT NEW PRODUCT CAPABILITY PROVED

**DESTINATION-SENSITIVE DECISION MODEL.**

Heathrow vs Stansted proved: cheap-far vs expensive-close.

Heathrow vs Gatwick proves: **within the mid-to-premium tier, your London destination picks the winner.**

This is NOT a clone. It introduces:

1. **Location-as-decision-variable:** South London → Gatwick wins. West London → Heathrow wins. The winner flips based on WHERE in London you're going, not just HOW you get there.

2. **Multiple transport modes:** Gatwick Express, Thameslink, Southern, National Express, taxi. Each has different cost/time profiles for different group sizes.

3. **Long-haul + short-haul:** Unlike STN (budget only), both LHR and LGW serve long-haul. The comparison works for multiple traveller types.

4. **Group-size sensitivity:** Gatwick Express for 1 person vs taxi for 3 people produces different winners. Teaches GROUP-SIZE DECISION MODEL.

5. **Broader audience:** Appeals to budget-conscious short-haul AND long-haul leisure travellers. Wider than the pure-budget STN audience.

---

## I. REQUIRED DATA BEFORE DESIGN

| # | Data | Priority | Source |
|---|------|----------|--------|
| 1 | Current Gatwick Express + Thameslink fares (2026) | HIGH | National Rail |
| 2 | Current Heathrow Express + Elizabeth Line fares | HIGH | TfL / HX |
| 3 | Typical taxi costs LHR→Zone 1 and LGW→Zone 1 | HIGH | Fare estimators |
| 4 | Coach prices (National Express, easyBus) | MEDIUM | Operator websites |
| 5 | Sample flight prices (LHR vs LGW, 3-5 routes) | MEDIUM | Flight search |
| 6 | Discounted advance fares for both airports | LOW | Operator websites |
| 7 | Baggage policies (BA, easyJet, Virgin at both) | LOW | Airline websites |

**Stable facts are verifiable from public data. No APIs required.** Can build with mock data first, verify with real data before production.

---

## J. RECOMMENDED NEXT PHASE

**Phase 14: Heathrow vs Gatwick Decision Page Design + Build.**

Architecture: exact same template as `/compare/heathrow-vs-stansted/`. Reuse: DecisionThreshold, LiveComparison, DecisionDebt, SecondaryFlips, option tokens, all CSS, all fonts. Net-new: data, editorial content, scenario configurations.

Route: `/compare/heathrow-vs-gatwick/`

---

## K. DETENTE

No code. No route. No design. No deployment. Evaluation only. Recommendation: **Heathrow vs Gatwick.**
