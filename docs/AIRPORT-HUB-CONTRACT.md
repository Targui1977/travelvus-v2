# London Airports Hub — Truth + Architecture Contract

**Date:** 2026-07-08
**Phase:** 39
**Route:** `/london-airports`
**Page type:** Decision Discovery Hub
**Readiness:** READY FOR EXPERIENCE DESIGN

---

## A. THREE-PAGE CLUSTER AUDIT

| | LHR vs STN | LHR vs LGW | LGW vs STN |
|---|---|---|---|
| Central question | Which flight really wins? | Which airport costs less for YOUR destination? | Is the extra train time worth the saving? |
| Airports | Heathrow, Stansted | Heathrow, Gatwick | Gatwick, Stansted |
| Decision mechanic | Hidden real cost | Destination-sensitive margin | Access-friction tolerance |
| Strongest number | €58 ticket → €204 journey | €37 at Canary Wharf, near-tie at Paddington | €20 flight saving, €16 fixed costs, €4 net |
| Winner flips? | Yes (baggage removal) | Yes (destination) | No (STN wins all, margin thins) |
| Personal handoff? | No (clear winner) | Yes (Paddington near-tie) | Yes (Saving-Worth) |
| Decision type | **THE CHEAP-TICKET TRAP** | **THE DESTINATION EFFECT** | **THE SAVING-WORTH TEST** |

**Cluster coherence: HIGH.** Three distinct mechanics. Three overlapping airport pairs forming a triangle. All within one city. No forced grouping.

---

## B. PRIMARY USER PROBLEM

### "Which London airport comparison should I look at?"

The Hub is NOT an airport directory. It is NOT a London guide. It answers: given that Travelvus has three London airport comparisons, which one matches my trip?

**Winning role: COMPARISON INDEX (B) with DECISION DISCOVERY (C) as secondary.**

---

## C. WINNING HUB ROLE

**COMPARISON INDEX + DECISION DISCOVERY**

The Hub organizes three comparisons by the traveller's situation, not by alphabetical airport order.

---

## D. DECISION-TYPE DISCOVERY VERDICT

### Lead with DECISION PROBLEM, not airport pair.

The three labels are accurate against production pages and understandable to travellers. Each should be expressed as a question the traveller might ask:

1. **"Is the cheaper flight actually cheaper?"** → Heathrow vs Stansted
2. **"Does my London destination change the answer?"** → Heathrow vs Gatwick
3. **"Is a small saving worth the extra journey?"** → Gatwick vs Stansted

These are more useful than listing "Heathrow vs Stansted" three times.

---

## E. SMALLEST USEFUL HUB (5 sections)

| # | Section | Classification |
|---|---------|---------------|
| 1 | Hero: "Compare London airports" | ESSENTIAL |
| 2 | Three decision problems (with airport pairs) | ESSENTIAL |
| 3 | Airport coverage note | ESSENTIAL |
| 4 | Quick Compare CTA | HIGH VALUE |
| 5 | Footer | ESSENTIAL |

**5 sections. No filler. No future placeholders. No empty cards.**

---

## F–G. ROUTE AUDIT + FINAL ROUTE

| Candidate | SEO | Architecture | Legacy Conflict | Scalable | Winner |
|-----------|-----|-------------|----------------|----------|--------|
| `/airports/` | Good | Clean | **Conflicts with future global hub** | Yes | ❌ |
| `/london-airports` | **Best** | Clean | No conflict (404) | Yes | **✅** |
| `/compare/london-airports/` | Good | Nested under /compare | No conflict | Yes | ❌ |
| `/airports/london/` | Good | Nested | **301 → /london/ (legacy)** | Yes | ❌ |

### Winner: **`/london-airports`**

Clean. No legacy conflict (confirmed 404). Scalable (`/paris-airports`, `/new-york-airports`). Matches user mental model.

---

## H. LONDON AIRPORT SCOPE

**Treatment A: Mention only currently covered airports.**

Mention Heathrow, Gatwick, Stansted. Do NOT list Luton, London City, or Southend. The Hub is honest about what it covers. No "Coming soon." No empty placeholders.

---

## I. HUB TRUTH CONTRACT

| Claim | Classification |
|-------|---------------|
| "Three London airport comparisons" | SAFE FROM PRODUCTION |
| Airport names (Heathrow, Gatwick, Stansted) | SAFE |
| Decision-type labels | SAFE FROM PRODUCTION |
| "€58 ticket → €204 journey" | SAFE FROM PRODUCTION |
| "Destination changes the margin" | SAFE FROM PRODUCTION |
| "€20 saving, €16 fixed costs, €4 net" | SAFE FROM PRODUCTION |
| "Covering 3 of 6 London airports" | SAFE WITH QUALIFICATION |
| Airport distances, transfer modes | SAFE FROM PRODUCTION (used editorially only) |
| "Compare your own flights" | SAFE |
| Universal London airport comparison | DO NOT CLAIM |

---

## J. NEW EVIDENCE REQUIRED

**None.** All Hub content derives from existing production pages. No new data files needed.

---

## K. AIRPORT RELATIONSHIP MODEL

**No visual map.** No triangle diagram. No connection lines. The Hub uses three editorial rows — each row describes one decision problem and links to the corresponding Decision Page. This is sufficient for 3 comparisons. If the cluster grows to 6+, a visual model may be justified.

---

## L. DISCOVERY LOGIC

**Purely editorial.** No interactive selector. No wizard. No "which airport" chooser. Three editorial rows. Each row: decision question → airport pair → one-line insight → link.

Mobile: three stacked rows. Desktop: three rows with sufficient spacing.

---

## M. INTERNAL-LINK REPAIR CONTRACT

| Link | Classification | Placement |
|------|---------------|-----------|
| Home → Hub | **REQUIRED** | Home proof cards area or how-it-works section |
| Hub → 3 DPs | **REQUIRED** | Three decision rows |
| Hub → Methodology | **REQUIRED** | "How we compare" link |
| Hub → Quick Compare | **REQUIRED** | CTA section |
| Footer → Hub | **REQUIRED** | Footer links row |
| Each DP → Hub | **REQUIRED** | "More London airports →" contextual link |
| Header "Airports" → Hub | **REQUIRED** | Nav item becomes active link |
| Methodology → Hub | HIGH VALUE LATER | After Hub is live |

---

## N. HEADER CONSEQUENCE

**"Airports" in Header becomes a real link to `/london-airports`.**

This is the first moment the "Airports" nav item has a real destination. Currently it's a dead span. Making it a link to the Hub gives users a real navigation surface and closes a product gap that has existed since Phase 1.

Desktop: text link, same style as current. Active when on Hub or any DP. Mobile: same treatment.

---

## O. SEO INTENT ARCHITECTURE

| Field | Value |
|-------|-------|
| Primary intent | Comparison / decision discovery |
| Secondary intents | Airport information, London-specific |
| Excluded intents | Universal airport guide, cheap flights, booking |
| **Title** | "Compare London Airports — Which Is Actually Cheaper? | Travelvus" |
| **H1** | "Compare London airports" |
| **Meta** | "Heathrow, Gatwick, or Stansted? Three real comparisons showing which airport is cheaper — depending on your destination, baggage, and what you value." |
| H2 structure | Which comparison matches your trip? / What we cover / Compare your own flights |

---

## P. SSR / CRAWLABILITY

All content server-rendered (SSG). No JavaScript required. Decision rows, airport coverage, and CTA all in HTML source.

---

## Q. ADSENSE ROLE

**One restrained ad zone** — between the three decision rows and the CTA. Protected: hero, decision rows, coverage note. The Hub's discovery function takes priority over monetization.

---

## R. SCALABILITY MODEL

| Element | Classification |
|---------|---------------|
| Decision rows (problem → pair → insight) | MULTI-AIRPORT-CITY REUSABLE |
| Airport coverage note | MULTI-AIRPORT-CITY REUSABLE |
| "London" specificity in copy | LONDON-SPECIFIC |
| Hero framing | LONDON-SPECIFIC |
| CTA → Quick Compare | TRAVELVUS GLOBAL |
| Footer | TRAVELVUS GLOBAL |

---

## S. CLONE-RISK FINDINGS

| Existing page | Similar section | Risk | Protection |
|---------------|----------------|------|-----------|
| Home | Decision rows vs proof cards | MEDIUM | Decision rows are problem-first, not airport-first. No card layout. No copper eyebrows. |
| Methodology | Proof rows | LOW | Hub rows are discovery, not evidence. |
| Decision Pages | Hero | LOW | Hub hero is "Compare London airports" not a specific comparison question. |

**Clone risk: LOW.** The Hub earns its own grammar through decision-problem-first organization, which no existing page uses.

---

## T. PAGE-TYPE DEFINITION

### DECISION DISCOVERY HUB

**What users do:** Find the London airport comparison that matches their trip situation.

**What Google understands:** A comparison index page for London airports, with structured links to detailed comparisons.

**What future pages reuse:** Decision-row grammar, coverage-note pattern, Hub → DP link pattern, Hub → Methodology link pattern.

---

## U. EXACT BOTTLENECK SOLVED

**Internal-link graph.** All 3 Decision Pages get a parent node. 2 dead ends become connected. Header "Airports" becomes a real destination.

---

## V. EXACT CAPABILITY ADDED

**DISCOVERY + CLUSTER NAVIGATION**

Travelvus gains its first navigation hub — a parent node that organizes related content by decision problem rather than by URL hierarchy.

---

## W. RECOMMENDATION

### ✅ READY FOR EXPERIENCE DESIGN

---

## X. NEXT PHASE

**Phase 40: London Airports Hub — Experience Design + Implementation.**

---

## Y. DETENTE

No implementation. No code. No deploy. No redirects. Contract complete.
