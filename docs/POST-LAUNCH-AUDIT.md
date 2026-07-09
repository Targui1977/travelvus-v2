# Travelvus V2 — Post-Launch System Audit + Next Move Selection

**Date:** 2026-07-08
**Phase:** 33
**Status:** AUDIT COMPLETE — Recommend **METHODOLOGY / HOW TRAVELVUS WORKS** as next move

---

## A. CURRENT PRODUCT MATURITY

**Assessment: B — A SMALL BUT COHERENT DECISION PRODUCT**

Travelvus is no longer a single tool. It is a system of 6 surfaces that work together:

- Home explains the product and routes users into Quick Compare
- Quick Compare accepts two flights and navigates to Result
- Result produces a full verdict with Real Cost, Threshold, Verdict Changed
- 3 Decision Pages prove the model on real London airport pairs with distinct decision mechanics

The system is coherent, internally consistent, and honest about its boundaries. It is NOT yet "the beginning of a scalable decision-intelligence system" — it still operates within a single city cluster with a single comparison format.

---

## B. STRONGEST CURRENT CAPABILITY

**DECISION GRAMMAR REPEATABILITY.**

The Decision Page format has been proven across 3 different airport pairs with 3 different central tensions:
1. Hidden cost reveal (LHR vs STN)
2. Destination-sensitive margin (LHR vs LGW)
3. Access-friction tolerance (LGW vs STN)

This is Travelvus's strongest proof point. The grammar scales.

---

## C. BIGGEST CURRENT BOTTLENECK

**WEAK INTERNAL-LINK GRAPH + MISSING TRUST SURFACE.**

The internal-link audit reveals:

| Page | Links to |
|------|---------|
| Home | All 3 DPs |
| LHR/STN | Only Home + itself |
| LHR/LGW | Only Home + itself |
| LGW/STN | Home + both other DPs |
| /result | Not audited (dynamic, no editorial links) |

**Key problem:** Two of three Decision Pages are dead ends. A user on LHR/STN cannot discover LHR/LGW or LGW/STN without returning to Home. There is no discovery surface. No methodology page explains the calculations. No trust layer exists beyond the in-page evidence notes.

---

## D. TOP 5 BOTTLENECKS

| Rank | Bottleneck | Impact |
|------|-----------|--------|
| **1** | **No trust/methodology surface** | Users can't understand HOW Travelvus works without reading inline notes scattered across pages |
| **2** | **Weak internal-link graph** | 2 of 3 Decision Pages are dead ends. No cross-page discovery |
| **3** | **London-only coverage** | All 3 comparisons are within one city. System cannot yet demonstrate generality |
| **4** | **Only one page type** | Decision Pages dominate. No Question Pages. No hub. Risk of format concentration |
| **5** | **No discovery/navigation hub** | Airport Hub would connect the London cluster but doesn't exist yet |

---

## E. REASSESSED ROADMAP

### Old roadmap (superseded)

1. ~~Third Decision Page~~ ✅ Done
2. ~~Home~~ ✅ Done
3. Heathrow vs London City
4. Google Flight Matrix Question Page
5. Broader migration

### Reassessment

Steps 3 and 4 assumed the system needed more pages. The audit reveals the system needs better CONNECTIONS between existing pages and a stronger TRUST FOUNDATION before expanding into new territories.

- **Heathrow vs London City**: Still valuable. Adds business-traveller segment. But a 4th Decision Page within the same city cluster creates format concentration without solving navigation.
- **Google Flight Matrix**: Still valuable. Diversifies page types. But introduces tool-choice territory before the airport system feels complete.

**Revised priority:** Trust layer → internal-link graph → then expansion.

---

## F. CANDIDATE SCORING TABLE

| Criteria | A. LHR vs LCY | B. Flight Matrix QP | C. Methodology | D. Airport Hub | E. Legacy Migration |
|----------|-------------|-------------------|---------------|----------------|-------------------|
| Product capability | 7 | 8 | **9** | 6 | 3 |
| SEO surface | 6 | 8 | **9** | 7 | 6 |
| Internal-link leverage | 5 | 4 | **9** | **9** | 2 |
| Page-type diversification | 2 | **9** | 7 | 8 | 3 |
| Reuse efficiency | 9 | 3 | 7 | 6 | 1 |
| Evidence availability | 7 | 6 | **10** | 8 | 4 |
| Truth safety | 7 | 5 | **10** | 8 | 6 |
| Monetization potential | 5 | 6 | **8** | 6 | 2 |
| Strategic differentiation | 5 | 8 | 7 | 6 | 4 |
| Future scalability | 6 | 7 | **9** | 8 | 5 |
| Implementation effort | 7 | 4 | **8** | 5 | 2 |
| Clone risk | 4 | **9** | 9 | 7 | 5 |
| **TOTAL** | **70** | **77** | **102** | **84** | **43** |

---

## G. CAPABILITY GAINED BY EACH CANDIDATE

| Candidate | New Capability |
|-----------|---------------|
| **Methodology** | TRUST LAYER — explains the calculation model, establishes authority, anchors every other page |
| Airport Hub | DISCOVERY — connects the London cluster, improves internal-link graph, crawlable navigation |
| Flight Matrix QP | PAGE-TYPE DIVERSIFICATION — first non-airport decision, first Question Page template |
| LHR vs LCY | FOURTH AIRPORT PAIR — premium segment, time-value mechanic |
| Legacy Migration | MIGRATION SAFETY — URL preservation, redirect preparation |

---

## H. PAGE-TYPE BALANCE

Current: Home (1) + Decision Pages (3) + Tool (1) + Result (1) = **6 surfaces, 2 page types.**

A fourth Decision Page would make it **4 of 7 = 57% Decision Pages.** This is format concentration. The system would benefit from page-type diversification BEFORE adding more Decision Pages.

A Methodology page adds a new page type (editorial/trust) AND strengthens the existing system. A Question Page would add a THIRD page type.

---

## I. INTERNAL-LINK GRAPH FINDING

**Current state: Hub-and-spoke with 2 broken spokes.**

Home is the hub. LHR/STN and LHR/LGW are dead-end spokes — they link back to Home but not to each other or to related content. Only LGW/STN links to sibling pages.

**What fixes this:**

1. A Methodology page gives every Decision Page a place to link for "How we calculated this" — creating bidirectional trust links.
2. An Airport Hub gives every Decision Page a parent "More London airports" link — creating a cluster.
3. Both together create a true graph: Home → Hub → DPs → Methodology, with all nodes interconnected.

---

## J. MIGRATION TIMING

**DEFER.** GSC has ~24 hours of data. No 410 decisions can be confirmed. No redirects should be implemented. Only confirmed retirements (/london/, /cities/, /europe/) are safe to plan. Migration preparation can resume when GSC reaches 30+ days of observation.

---

## K. HIGHEST-LEVERAGE NEXT MOVE

### ✅ METHODOLOGY / HOW TRAVELVUS WORKS

**Route:** `/methodology` or `/how-travelvus-works`

**What it is:** A single editorial page that explains:

- What Travelvus calculates (real cost, door-to-door, threshold)
- What Travelvus does NOT calculate (live prices, all airports, personal preference)
- How the numbers work (the equation, not the data)
- The currency contract (GBP→EUR at 1.17)
- The fare contract (walk-up, contactless, off-peak)
- The time contract (station-to-station + platform + interchange)
- The evidence sources (TfL, National Rail, operator websites)
- The supported comparison contract (London airports verified; others = partial)
- The personal-handoff principle (money truth vs personal tolerance)

**What it is NOT:** A marketing page, a blog post, an FAQ list, or a legal disclaimer.

---

## L. WHY IT WINS NOW

1. **Every existing page benefits.** Methodology gives Home, all 3 DPs, and Result a single place to link "How we calculated this" — replacing scattered inline evidence notes with a structured trust surface.

2. **SEO multiplier.** A methodology page ranks for "how does [product] work" queries AND passes authority to every page that links to it. It earns links naturally.

3. **Low truth risk.** The methodology is already proven. All contracts are locked. No new data. No new calculations. Just explanation of existing system.

4. **Answers the #1 bottleneck.** Trust is the missing layer. Adding it strengthens everything else.

5. **Enables future pages.** Every future Decision Page, Question Page, or Hub can link to Methodology for "How we calculated this" — reducing inline explanation burden.

6. **Builds before expansion.** Expanding to Heathrow vs London City or Google Flight Matrix before the trust layer exists creates more pages that all need inline methodology. Building Methodology first creates a single anchor that future pages reference.

---

## M. WHY OTHERS WAIT

| Candidate | Why waiting |
|-----------|-------------|
| LHR vs LCY | Fourth Decision Page within same cluster. Format concentration risk. Better after Methodology + Hub exist. |
| Flight Matrix QP | Valuable page-type diversification. But launching a tool-choice page before the trust layer exists weakens authority. Build after Methodology. |
| Airport Hub | Close second. Would benefit from Methodology existing first (Hub → Methodology links). Build immediately after Methodology. |
| Legacy Migration | GSC too immature. Defer 30+ days. |

---

## N. EXACT NEXT PHASE

**Phase 34: Methodology Page — Experience Design + Implementation.**

Single page. Server-rendered. Editorial. Links FROM every Decision Page, Home, and Result. Links TO Home.

---

## O. DETENTE

No implementation. No code. No deploy. Audit complete.
