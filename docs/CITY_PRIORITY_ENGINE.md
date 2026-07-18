# City Priority Engine
**Travelvus V2 — Phase 122.0**

---

## How We Prioritize Future Cities

The Priority Engine scores every candidate city using 7 objective criteria. Cities with the highest scores enter the expansion pipeline first.

---

## Scoring Criteria

### 1. Search Demand (25 points)
Monthly search volume for airport comparison queries.
- **5 pts**: <1,000 searches/month
- **10 pts**: 1,000–5,000
- **15 pts**: 5,000–20,000
- **20 pts**: 20,000–100,000
- **25 pts**: >100,000

### 2. Airport Complexity (20 points)
How many viable airports exist? More complexity = more decision value.
- **5 pts**: 1 dominant airport
- **10 pts**: 2 airports with clear winner
- **15 pts**: 2+ airports with destination-dependent winner
- **20 pts**: 3+ airports with complex trade-offs

### 3. International Relevance (15 points)
How many international travellers face this airport choice?
- **5 pts**: Primarily domestic
- **10 pts**: Regional hub
- **15 pts**: Major international gateway

### 4. Data Availability (15 points)
How easy is it to research and verify transfer data?
- **5 pts**: Limited public data
- **10 pts**: Adequate — requires research
- **15 pts**: Excellent — official APIs, clear fares

### 5. Editorial Uniqueness (10 points)
Does this city add diversity to the Travelvus portfolio?
- **3 pts**: Similar to existing cities (e.g., another European capital)
- **7 pts**: New continent or transport pattern
- **10 pts**: Radically different (e.g., Asian megacity, multi-airport metro)

### 6. Competition (10 points)
How many existing comparison tools cover this city?
- **10 pts**: Very few / none
- **5 pts**: Some competition
- **2 pts**: Heavily covered

### 7. Expansion Effort (5 points)
Estimated hours to full completion using City Factory.
- **5 pts**: <10 hours (simple metro, 2 airports, good data)
- **3 pts**: 10–20 hours
- **1 pt**: >20 hours (complex transfers, >3 airports, limited data)

---

## Candidate City Scores

| Rank | City | Demand | Complexity | Intl | Data | Unique | Comp | Effort | **Total** |
|------|------|--------|-----------|------|------|--------|------|--------|-----------|
| 1 | Amsterdam (AMS) | 15 | 10 | 15 | 15 | 3 | 5 | 5 | **68** |
| 2 | Frankfurt (FRA) | 15 | 10 | 15 | 15 | 3 | 5 | 5 | **68** |
| 3 | Dubai (DXB) | 20 | 10 | 15 | 10 | 7 | 5 | 5 | **72** |
| 4 | Tokyo (NRT/HND) | 20 | 20 | 15 | 10 | 10 | 10 | 3 | **88** |
| 5 | Madrid (MAD) | 10 | 10 | 10 | 15 | 3 | 5 | 5 | **58** |
| 6 | Barcelona (BCN) | 10 | 10 | 10 | 15 | 3 | 5 | 5 | **58** |
| 7 | Rome (FCO/CIA) | 15 | 15 | 15 | 10 | 3 | 5 | 5 | **68** |
| 8 | Milan (MXP/LIN) | 10 | 15 | 10 | 10 | 3 | 5 | 5 | **58** |
| 9 | Lisbon (LIS) | 10 | 10 | 10 | 10 | 3 | 5 | 5 | **53** |
| 10 | Dublin (DUB) | 10 | 10 | 10 | 15 | 3 | 5 | 5 | **58** |
| 11 | Zurich (ZRH) | 10 | 10 | 10 | 15 | 3 | 5 | 5 | **58** |
| 12 | Istanbul (IST/SAW) | 20 | 20 | 15 | 5 | 10 | 10 | 3 | **83** |

---

## Recommended Expansion Order

Based on the Priority Engine, the recommended expansion sequence is:

1. **Tokyo** (88) — Highest score. Two airports (NRT/HND) with dramatically different profiles. Asian expansion. High search demand. Low competition.
2. **Istanbul** (83) — Two airports (IST/SAW) on different continents. Unique transfer complexity. Growing international hub.
3. **Dubai** (72) — Single primary airport but high search demand. Gateway to Middle East.
4. **Amsterdam** (68) — Simple metro, good data, high European relevance.
5. **Frankfurt** (68) — Major European hub, good data, complements existing cities.

---

## When to Re-Evaluate

Scores should be reviewed:
- After every city launch (priorities may shift)
- When new transport infrastructure opens (e.g., new airport, new train line)
- When search trends shift significantly (quarterly review)
- When new data sources become available
