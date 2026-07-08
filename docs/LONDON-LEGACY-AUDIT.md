# /london/ — Legacy Page Pre-Build Audit

**Date:** 2026-07-08
**Phase:** 13.3 — London Legacy URL Assessment
**Build Readiness:** NEEDS SEARCH CONSOLE EVIDENCE + NEEDS COMPLETE CONTENT CREATION

---

## A. LEGACY URL AUDIT

### Metadata

| Field | Value |
|-------|-------|
| URL | `https://travelvus.com/london/` |
| Title | `London Cinematic City Documentary - Outdoor Adventure` |
| Meta description | **MISSING** — no meta description tag |
| Canonical | `https://travelvus.com/london/` |
| OG title | `London Cinematic City Documentary - Outdoor Adventure` |
| OG type | `article` |
| OG image | `wp-content/uploads/2026/03/Miniatura-London.png` |
| Updated | `2026-03-08T19:37:26+00:00` |
| Schema | **NONE** — no JSON-LD or microdata detected |

### Content Structure

```
H1: London Cinematic City Documentary
  TOC:
    H2: About This City         (~60 words, generic)
    H2: City Facts              (~40 words, generic)
  H3: Explore More Cities       → /london/ (self-link card)
```

**Approximate word count:** 100–110 words total.

### Content Assessment

The page is a **placeholder.** It contains:

- A brief generic introduction about "this city" with no London-specific information
- A "City Facts" section that describes template content rather than actual facts
- A template structure designed for a "cinematic documentary" format that was never populated
- Zero mentions of: airports, flights, costs, transport, Oyster card, Heathrow, Stansted, Gatwick, Luton, London City Airport, tube, train, taxi, or any decision-relevant topic
- No date, author, or source attribution

**Unique useful content:** **None.** The page is essentially empty.

### Links

**Internal:** 5 nav links (Home, Cities, Europe, Contact, About) — standard site chrome, no editorial links.
**External:** None.
**Images:** 4 (logo, thumbnail, map pin) — generic stock/design assets.

### Search Intent

The current page targets **no identifiable search intent.** The title "London Cinematic City Documentary - Outdoor Adventure" does not match any likely travel query. The content answers no specific question.

---

## B. EVIDENCE STATUS

| Source | Status | Value |
|--------|--------|-------|
| Search Console | ❌ No access | All click/impression data = UNKNOWN |
| Analytics | ❌ No access | All traffic data = UNKNOWN |
| Backlinks | ❌ No access | UNKNOWN |
| Google Index | ✅ Checked | Part of sitemap (`post-sitemap.xml`), but `site:travelvus.com` returns zero results |
| Sitemap presence | ✅ Confirmed | Listed in post-sitemap with 38 other posts |
| Internal links | ✅ Checked | Minimal — only nav chrome and self-link card |
| Content quality | ✅ Assessed | ~100 words, generic placeholder, no unique value |
| Published date | ✅ Detected | March 2026 (recent — post-dates the 2023 bulk content) |

**Verdict:** The URL has **zero confirmed SEO value** at present. It carries URL authority only by virtue of existing on the domain. All traffic data is unknown without Search Console access.

---

## C. PRESERVATION MAP

| Content Block | Classification | Reason |
|---------------|---------------|--------|
| H1: "London Cinematic City Documentary" | **REMOVE CANDIDATE** | Wrong framing for V2. "Cinematic documentary" does not match decision product. |
| H2: "About This City" | **TRANSFORM** | Could become editorial introduction to London airport decisions. |
| H2: "City Facts" | **TRANSFORM** | Could become key decision-relevant facts (airport count, transit options, typical costs). |
| TOC structure | **UPDATE** | Useful pattern, fill with decision-oriented sections. |
| "Explore More Cities" | **MERGE INTO NEW DECISION MODULE** | Replace with links to specific decision pages or airport comparisons. |
| OG image | **PRESERVE** | Keep if useful; replace with new image if not. |
| Canonical URL | **PRESERVE** | `/london/` is a clean, valuable slug. |
| OG metadata | **UPDATE** | Replace title, add meta description, update OG tags for new content. |
| Site nav links | **PRESERVE** | Standard chrome — will be replaced by V2 header. |

**Verdict: 100% of body content is safe to remove or transform.** The page is a near-empty template. Nothing valuable would be lost.

---

## D. DECISION HUB FIT MATRIX

| Territory | Classification | Reason |
|-----------|---------------|--------|
| Choosing a London airport | **CORE** | Central decision: Heathrow vs Stansted vs Gatwick vs Luton vs London City |
| Airport access (transport links) | **CORE** | Train, tube, taxi, coach — costs and times for each airport |
| Real trip cost comparisons | **CORE** | Ticket + baggage + transfer + seat = real cost (expand existing V1 model) |
| Late arrivals (after 23:00) | **CORE** | Night transport limitations, taxi-only scenarios, cost spikes |
| Early departures | **SUPPORTING** | Similar to late arrivals but for outbound |
| Baggage effects | **CORE** | How checked bags change the winner between airports |
| Solo vs couple vs family | **SUPPORTING** | Scenario-based comparison |
| Oyster vs contactless | **SUPPORTING** | Payment method comparison for in-London travel |
| Express train vs slower alternatives | **SUPPORTING** | Heathrow Express vs Piccadilly line, Stansted Express vs coach |
| Taxi vs public transport | **CORE** | Cost comparison, reliability, night-time |
| London tourist attractions | **TOO BROAD** | Not a decision — belongs in a separate guide |
| London neighborhoods | **TOO BROAD** | Not a flight/trip decision |
| London history / culture | **NOT FIT** | Pure tourism content |
| London hotels | **TOO BROAD** | Future product, not Decision Hub |
| London weather / best time to visit | **NOT FIT** | Generic travel article |

**Verdict:** 5 CORE territories, 4 SUPPORTING, 3 TOO BROAD, 3 NOT FIT. The page has a strong decision-hub identity around airport choices and associated costs.

---

## E. RELATIONSHIP TO EXISTING V1

```
/london/  (Decision Hub)
  ├── /compare/heathrow-vs-stansted/  (existing V1 Decision Page)
  ├── links to / (Quick Compare) with London airports pre-filled
  └── links to /result with canonical London scenario

Direction:
  /london/  →  /compare/heathrow-vs-stansted/   (deep dive)
  /london/  →  /  (open compare tool)
  /  →  /london/   (from Quick Compare: "Explore London airports")
  /result  →  /london/   (from Result: "More London decisions")
```

The existing `/compare/heathrow-vs-stansted/` already proves the concept. `/london/` becomes the entry point and aggregator.

---

## F. RECOMMENDED CENTRAL PROMISE

**Proposed H1 / page promise:**

> "Which London airport actually costs you less?"

**Supporting copy:**

> "The ticket price tells half the story. Compare Heathrow, Stansted, Gatwick, Luton, and London City — door to door, with luggage, at your time of day."

**Test:** Is this strong enough?

- ✅ Answers a real traveller question
- ✅ Introduces the Travelvus decision layer
- ✅ Narrows scope to airports (not generic London guide)
- ✅ Implies comparison, evidence, personalization
- ✅ Connects directly to existing V1 product

---

## G. SMALLEST LONDON CLUSTER (max 10 URLs)

| # | URL | Status | Type |
|---|-----|--------|------|
| 1 | `/london/` | **EXISTS NOW** (legacy) | Decision Hub — overview + airport comparison |
| 2 | `/compare/heathrow-vs-stansted/` | **EXISTS NOW** (V1) | Decision Page |
| 3 | `/compare/heathrow-vs-gatwick/` | **NEW CANDIDATE** | Decision Page |
| 4 | `/compare/stansted-vs-luton/` | **NEW CANDIDATE** | Decision Page |
| 5 | `/compare/heathrow-vs-london-city/` | **NEW CANDIDATE** | Decision Page |
| 6 | `/questions/london-airport-transport-costs/` | **PENDING KEYWORD VALIDATION** | Question Page |
| 7 | `/questions/london-night-arrival-transfer/` | **PENDING KEYWORD VALIDATION** | Question Page |
| 8 | `/questions/london-oyster-vs-contactless/` | **PENDING KEYWORD VALIDATION** | Question Page |
| 9 | `/questions/london-family-airport-transfer/` | **PENDING KEYWORD VALIDATION** | Question Page |
| 10 | `/guides/london-airport-access-map/` | **PENDING KEYWORD VALIDATION** | Reference / editorial |

---

## H. INTERNAL-LINK LOGIC

**User flow (forward):**

```
Google: "which London airport is cheaper"
  → /london/
    → "Compare Heathrow vs Stansted"  → /compare/heathrow-vs-stansted/
    → "Compare Heathrow vs Gatwick"   → /compare/heathrow-vs-gatwick/
    → "Compare your own flights"      → / (Quick Compare)
    → "Heathrow vs Stansted result"   → /result (canonical)
```

**Reverse flow (upward):**

```
/compare/heathrow-vs-stansted/
  → "More London decisions" → /london/

/ (Quick Compare — user types LHR vs STN)
  → "London airport guide" → /london/

/result (after comparing London airports)
  → "Explore more London decisions" → /london/
```

**Cluster internal linking:**

```
/london/ → each Decision Page
/london/ → each Question Page
Each Decision Page → /london/
Each Question Page → /london/ + relevant Decision Page
```

---

## I. ADSENSE BOUNDARIES

**Safe zones for ads on /london/:**

| Zone | Type | Rationale |
|------|------|-----------|
| After editorial intro, before comparison module | Banner | Editorial content, not decision-critical |
| Between Question Page links | In-feed | Informational, user browsing |
| Bottom of page, after all decision content | Footer banner | Post-decision, not interfering |
| Sidebar (desktop only, if implemented) | Skyscraper | Editorial companion, not in decision flow |

**NO-GO zones:**

| Zone | Reason |
|------|--------|
| Inside live comparison module | Core product — no ads |
| Between airport comparison rows | Decision data — protected |
| Within threshold visualization | Intellectual hero — protected |
| Inside any verdict block | Authority surface — protected |
| Between tabs or controls | Interaction zone — protected |

---

## J. BUILD READINESS VERDICT

### **NEEDS SEARCH CONSOLE EVIDENCE + NEEDS COMPLETE CONTENT CREATION**

**Reasoning:**

1. **No SEO data available.** Without Search Console, we don't know if `/london/` has any traffic, impressions, or rankings. The risk of replacing it is unknown.

2. **Content must be created from scratch.** The legacy page has ~100 words of generic placeholder text. There is nothing to preserve, update, or merge. 100% of the new page would be original content.

3. **The V1 architecture supports it.** `/compare/heathrow-vs-stansted/` already proves the Decision Page format works. The missing pieces are:
   - Additional airport pairs (Gatwick, Luton, London City)
   - The hub page itself
   - Question Pages for supporting content

4. **URL is clean and valuable.** `/london/` is an excellent slug for SEO. It should not be changed.

**Recommended next step:** Obtain Search Console data. If `/london/` has zero impressions, the build risk is minimal (nothing to lose). If it has traffic, preserve and enhance rather than replace.

---

## K. INFORMATION STILL NEEDED FROM YOU

| # | Item | Priority | Impact |
|---|------|----------|--------|
| 1 | Google Search Console access for travelvus.com | **CRITICAL** | Determines whether legacy URL has value to protect |
| 2 | Decision on cluster size | HIGH | Confirms build scope |
| 3 | Keyword research for London airport queries | MEDIUM | Validates which Decision Pages to build first |
| 4 | Confirmation that /london/ should be the first hub | MEDIUM | Sets build priority |
| 5 | WordPress content export (full) | LOW | May reveal additional London-related content |

---

## L. DETENTE

No code written. No routes created. No redirects. No deployment. No WordPress changes. Audit only.
