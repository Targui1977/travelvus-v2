# Travelvus V2 — Next Asset Selection

**Date:** 2026-07-08
**Phase:** 20
**Winner:** **THIRD DECISION PAGE — GATWICK VS STANSTED**

---

## A. CURRENT PRODUCT SUFFICIENCY

### What exists now

| Surface | State | Teaches |
|---------|-------|---------|
| Quick Compare | Production | Bring two flights, get verdict |
| Full Result + Verdict Changed | Production | Hidden costs, live decision loop |
| Heathrow vs Stansted | Production | Cheap ticket ≠ cheap trip |
| Heathrow vs Gatwick | Production | Destination determines margin |

### Can Home explain a real product today?

**Partially.** Two Decision Pages is better than one, but still feels like "a couple of comparisons" rather than "a system." Home would feature:

- Quick Compare entry point ✅
- "Heathrow vs Stansted" → Decision Page ✅
- "Heathrow vs Gatwick" → Decision Page ✅
- Methodology/evidence ✅
- Gap: only 2 comparisons, same city, same primary airport (Heathrow in both)

### Verdict: **Home is viable but would feel slightly thin.** A third Decision Page would give Home meaningful variety. Two Decision Pages is borderline sufficient.

---

## B. PREVIOUS SCORING REASSESSMENT (Phase 13.4)

| Candidate | Phase 13.4 Score | Today's Score | Change | Reason |
|-----------|-----------------|---------------|--------|--------|
| LHR vs LCY | 73 | **71** | −2 | Some LHR advantages now duplicated by LHR vs LGW page |
| LGW vs STN | 59 | **67** | +8 | Was undervalued. New capability (quality vs price) not previously recognized. |
| LHR vs LGW | 87 | Built | — | Now in production |
| STN vs LTN | 38 | Still rejected | — | Airline-locked, no real choice |

---

## C. DECISION REALITY BY CANDIDATE

### Gatwick vs Stansted

| Question | Answer |
|----------|--------|
| Do travellers genuinely choose between these? | **Yes, partially.** Both serve easyJet routes where choice exists. |
| Are routes sufficiently substitutable? | **Yes for European short-haul.** Both primarily serve Europe. |
| Is the decision airline-locked? | **Partially.** Ryanair = STN only. easyJet = BOTH. Jet2 = STN only. |
| Does the answer change by destination? | **Yes.** South London → LGW. East London → STN. |
| Is there a real boundary? | **Yes.** Transfer cost + reliability vs flight price. |

**Verdict: GENUINE DECISION for easyJet travellers and south/east London residents.** Stronger than Phase 13.4 recognized.

### Heathrow vs London City

| Question | Answer |
|----------|--------|
| Genuine choice? | **Yes for premium short-haul.** Business travellers. |
| Routes substitutable? | **Partially.** LCY serves ~15 European business routes. |
| Winner changes? | **Yes.** By destination, schedule, time value. |
| Audience size? | **Smaller.** Premium business niche. |

**Verdict: REAL but NARROWER.** Excellent capability demonstration but smaller addressable audience than LGW vs STN.

---

## D. NEW CAPABILITY BY CANDIDATE

### Gatwick vs Stansted → **QUALITY-VS-PRICE WITHIN THE BUDGET TIER**

| Capability | New? | Description |
|-----------|------|-------------|
| Airport quality matters | **NEW** | Gatwick ranked 6th UK, Stansted 29th — reliability enters the decision |
| Airline-independent choice | **NEW** | When easyJet serves BOTH airports, which should you pick? |
| Budget-tier destination model | **EXTENDS** | Builds on LHR vs LGW destination model for south/east London |
| Transfer-time vs flight-time trade-off | **NEW** | Both far from central London; transfer is a dominant cost |

### Heathrow vs London City → **TIME-VALUE FOR PREMIUM TRAVELLERS**

| Capability | New? | Description |
|-----------|------|-------------|
| Proximity premium | **NEW** | LCY is 6mi from City vs LHR 15mi. Time IS money for business travellers. |
| Schedule sensitivity | **NEW** | LCY same-day returns. LHR long-haul connectivity. |
| Premium audience | **NEW** | Different demo from existing budget/mid-market pages |

### Home → **PRODUCT COHERENCE**

Home adds no new decision capability. It organizes existing capabilities into an entry point.

### Google Flight Matrix → **TOOL-CHOICE MECHANIC**

Adds the first non-airport decision. Broadens Travelvus beyond airports but requires new Question Page template.

---

## E. CLONE-RISK AUDIT

### Gatwick vs Stansted

| Aspect | Assessment |
|--------|-----------|
| Reused from LHR vs STN | Transfer-cost model, destination sensitivity |
| Reused from LHR vs LGW | Destination tabs, margin classification |
| Structurally different | **Yes.** Quality/reliability dimension. Airline-independent choice. Both budget-tier (contrast with existing premium-vs-budget and premium-vs-mid). |
| Clone risk | **LOW.** Different airports, different tier, different central tension. |

### Heathrow vs London City

| Aspect | Assessment |
|--------|-----------|
| Reused | Transfer-cost model, verdict system |
| Structurally different | **Yes.** Business traveller context. Time-value premium. Same-day return mechanic. |
| Clone risk | **LOW.** Completely different audience, different decision dynamic. |

---

## F. HOME READINESS

### Smallest credible Home TODAY

A Home could honestly contain:

- **Product promise:** "Compare two flights and find out which really wins."
- **Quick Compare entry:** CTA to `/`
- **Featured comparisons:** 2 Decision Page cards (LHR vs STN, LHR vs LGW)
- **Methodology:** "How Travelvus works" — real cost, door-to-door, threshold
- **Evidence note:** Supported scenario boundaries

### Would Home strengthen the system more than a third Decision Page?

**No.** A third Decision Page:
- Makes Home feel richer (3 comparisons vs 2)
- Proves the London airport cluster is real
- Gives Home meaningful navigation variety
- Adds a new capability (quality/reliability)

Home with 2 Decision Pages is a teaser. Home with 3 is a system.

---

## G. GOOGLE FLIGHT MATRIX TIMING

| Build order | Gain | Loss |
|------------|------|------|
| Before Home | Premature — Home has no airport pages to feature yet | Feels disconnected from airport product |
| After Home | Reasonable — Home routes users into it | Home still thin with only 2 DP |
| After third DP + Home | **Optimal.** Broadens beyond airports AFTER the core cluster is established | Delays non-airport expansion |

**Recommendation:** Build after third DP + Home. The airport system should feel complete before expanding into tool-choice territory.

---

## H. SEO / INTERNAL-LINK LEVERAGE

| Candidate | Standalone SEO | Internal Links FROM | Links TO QC | Strengthens Existing | Future Cluster | Ads Depth |
|-----------|---------------|---------------------|-------------|---------------------|----------------|-----------|
| LGW vs STN | Medium | Home, LHR vs STN, LHR vs LGW | ✅ | ✅ Adds budget tier | London airports | Medium |
| LHR vs LCY | Medium-Low | Home, LHR vs STN | ✅ | ✅ Adds business tier | London airports | Low |
| Home | **High** | All surfaces | ✅ | ✅ Organizes everything | Entire site | **High** |
| GFM QP | Medium | Home, Quick Compare | ✅ (weak) | ❌ Different cluster | Flight tools | Medium |

---

## I. BUILD EFFICIENCY

| Candidate | Research | Truth | Design | Code Reuse | New Components | Total Effort |
|-----------|---------|-------|--------|-----------|---------------|-------------|
| LGW vs STN | Low | Low | Low | **90%** | 1 (data) | **Lowest** |
| LHR vs LCY | Medium | Medium | Low | 85% | 1 (data) | Low |
| Home | Medium | Low | **High** | 50% | 5+ (layout, cards, nav) | **Highest** |
| GFM QP | High | Medium | High | 30% | 5+ (new template) | High |

---

## J. FINAL SCORING (0–100)

| Criteria | Max | LGW vs STN | LHR vs LCY | Home | GFM QP |
|----------|-----|-----------|-----------|------|--------|
| Strategic leverage | 20 | **16** | 13 | 17 | 12 |
| Genuine user decision | 15 | **12** | 11 | N/A | 10 |
| New reusable capability | 15 | **13** | 14 | 8 | 12 |
| SEO potential | 10 | 7 | 6 | **10** | 8 |
| Internal-link leverage | 10 | **8** | 7 | **9** | 6 |
| Product coherence | 10 | **9** | 7 | **9** | 5 |
| Monetization fit | 5 | 3 | 2 | **5** | 3 |
| Build efficiency | 5 | **5** | 4 | 1 | 2 |
| Truth-contract feasibility | 5 | **5** | 4 | 5 | 3 |
| Low clone risk | 5 | **4** | 5 | 5 | 5 |
| **TOTAL** | **100** | **82** | 73 | 76 | 66 |

---

## K. EXACT WINNER

### **GATWICK VS STANSTED — 82/100**

---

## L. WHY IT WINS NOW

1. **Completes the budget tier.** LHR vs STN = premium vs budget. LHR vs LGW = premium vs mid. LGW vs STN = mid vs budget. All three tiers of London airport decision are now covered.

2. **Proves repeatability beyond 2.** A third Decision Page using the same template proves the format genuinely scales — not just a pair.

3. **Makes Home credible.** Home with 3 Decision Pages can honestly say "Compare London's airports" — not just "compare Heathrow to two others."

4. **Lowest build cost.** 90% code reuse. Only new data file needed. Proven template, proven components, proven deployment.

5. **New capability: quality/reliability in the decision.** Gatwick ranks 6th in UK, Stansted 29th. This is a real dimension current pages don't explore.

6. **GSC-independent.** Buildable today without waiting for Search Console data.

## M. WHAT WAITS AND WHY

| Candidate | When | Why waiting |
|-----------|------|-------------|
| **Home** | After 3rd DP | Needs richer content. 3 comparisons > 2. |
| **LHR vs LCY** | After Home | Narrower audience. Premium business niche. Better after core cluster feels complete. |
| **Google Flight Matrix** | After Home + QP template design | Requires new page type. Strategic value in broadening beyond airports — but after core cluster. |

## N. EXACT NEXT PHASE

**Phase 21: Gatwick vs Stansted Decision Contract + Implementation.**

1. Research Gatwick and Stansted transfer costs, times, and route overlap (especially easyJet routes)
2. Define canonical scenario with genuine choice
3. Identify the primary decision mechanic: quality/reliability + destination + airline choice
4. Build using existing template (same architecture as LHR vs LGW)
5. Add to London airport cluster

---

## O. DETENTE

No code. No design. No deploy. No redirects. No DNS. No WordPress changes. Selection only.
