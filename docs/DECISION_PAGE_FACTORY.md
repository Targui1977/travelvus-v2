# TRAVELVUS V2 — DECISION PAGE FACTORY

**Phase 92.0 — Production System Specification**
**Date: July 2026**

---

## 1. DECISION PAGE FACTORY SPECIFICATION

### 1.1 What This System Produces

A Decision Page is a single-URL product page that answers exactly one traveller question:

> "Which option creates the better journey?"

Every page follows the approved 12-section Decision Master 2.0 template and conforms to the `DecisionPageData` contract in `src/lib/decision-page-data.ts`.

### 1.2 Minimum Data Required Per Page

To create one Decision Page, the following data must be provided:

#### IDENTITY (5 fields)
| Field | Example | Source |
|-------|---------|--------|
| `slug` | `berlin-to-london` | Derived from origin–destination |
| `category` | `London Airport Decision` | Fixed per decision type |
| `question` | `Berlin to London — should I choose Heathrow or Stansted?` | Editorial |
| `shortAnswer` | `Heathrow wins for most travellers once total journey time and cost are compared.` | Derived from data |
| `lastReviewed` | `July 2026` | Date of research |

#### COMPARISON DATA (2 options × N factors)
| Field | Example | Source |
|-------|---------|--------|
| Option A name | `Stansted` | Public airport data |
| Option B name | `Heathrow` | Public airport data |
| Option A code | `STN` | IATA |
| Option B code | `LHR` | IATA |

#### PUBLIC FACTS (per airport)
| Field | Example | Source |
|-------|---------|--------|
| Distance from city centre (km) | `55km` | Public airport info |
| Primary rail connection | `Stansted Express` | National Rail |
| Rail time to city centre | `~50 min` | National Rail / TfL |
| Rail off-peak single fare | `~£17` | Published fare |
| Alternative connections | `National Express coach, 75–90 min` | Operator websites |
| Connection frequency | `Every 15–30 min` | Operator schedules |
| Flight time from origin | `~1h 50m` | Typical scheduled |

#### ILLUSTRATIVE ASSUMPTIONS (per page)
| Field | Example | Source |
|-------|---------|--------|
| Typical ticket price A | `~€58 (budget airline)` | Illustrative |
| Typical ticket price B | `~€110 (full-service)` | Illustrative |
| Typical baggage cost A | `+€42` | Illustrative |
| Baggage cost B | `Often included` | Illustrative |
| Total journey cost A | `~€161` | Computed illustrative |
| Total journey cost B | `~€135` | Computed illustrative |
| Door-to-door time A | `~5h 50m` | Computed illustrative |
| Door-to-door time B | `~5h 25m` | Computed illustrative |

#### PUBLIC SOURCES (per page)
| Source | Claims supported |
|--------|-----------------|
| TfL | Elizabeth Line, Piccadilly Line times and fares |
| National Rail | Stansted Express, Heathrow Express times and fares |
| Airport operator | Distances, terminal info |
| Local transit authority | City-to-airport connections |
| IATA | Airport codes |

#### EDITORIAL CONTENT (per page)
| Content | Count | Source |
|---------|-------|--------|
| Winner reasons | 5 | Derived from data comparison |
| Alternative-wins points | 4 | Balanced counter-arguments |
| Traveller scenarios | 6 | Fixed templates with route-specific choices |
| Common mistakes | 4 | Fixed templates with route-specific examples |
| FAQ items | 5–8 | Fixed base set + route-specific additions |
| Continue cards | 3 | Fixed: Real Cost Guide, Time Guide, Hub |

---

## 2. SECTION CLASSIFICATION

Every section on a Decision Page falls into one of five categories:

### 2.1 STATIC — Never changes between pages

| Section | Content |
|---------|---------|
| Header | `HomeHeader` (shared component) |
| Footer | 3-column footer (shared) |
| CTA design | Navy card with copper button |
| Continue Cards layout | 3-column grid |
| Source disclosure layout | Two-column paper-2 section |

### 2.2 EDITORIAL — Human-written per page, data-informed

| Section | Content |
|---------|---------|
| Category label | e.g. "London Airport Decision" |
| Question (H1) | e.g. "Berlin to London — should I choose Heathrow or Stansted?" |
| Short answer | Derived from comparing the data |
| Winner reasons (5) | Why Option B wins on this specific route |
| Alternative points (4) | When the other option makes sense here |
| Traveller scenarios (6) | Who should choose which on this route |
| Common mistakes (4) | Route-specific pitfalls |
| FAQ items (5–8) | Route-specific questions |

### 2.3 CALCULATED — Derivable from data + rules

| Section | Data needed |
|---------|------------|
| Verdict (winner + stats) | Real cost A vs B, time saved |
| At a Glance (5 rows) | Cost, time, convenience, reliability, winner |
| Real cost breakdown | Cost lines for A and B |
| Journey timeline | Door-to-door segments for A and B |

### 2.4 PUBLIC FACTS — Verifiable from authoritative sources

| Data | Source |
|------|--------|
| Airport distances | Airport operator websites |
| Transfer times | TfL, National Rail, transit operators |
| Transfer fares | Published off-peak single fares |
| Flight durations | Typical scheduled times |
| Connection frequencies | Operator timetables |
| City-to-airport connections | Local transit authorities |

### 2.5 ILLUSTRATIVE — Clearly labelled as non-live

| Data | Label |
|------|-------|
| Ticket prices | "~€X — illustrative, varies by airline and season" |
| Baggage costs | "Typically €X on budget airlines" |
| Total journey cost | "Estimated — use Comparison Engine with real data" |
| Verdict | "Illustrative — based on typical scenario" |

---

## 3. EDITORIAL CHECKLIST

Before research begins, verify:

- [ ] Route has genuine traveller search volume (GSC or keyword data)
- [ ] At least two distinct airport/route options exist for this journey
- [ ] Public transport connection data is available for both airports
- [ ] The comparison produces a meaningful difference (not a near-tie)

### Research phase

- [ ] Record airport distances from official airport websites
- [ ] Record primary rail/coach connections from operator websites
- [ ] Record off-peak single fares from published fare tables
- [ ] Record connection frequencies from operator timetables
- [ ] Record typical flight durations from flight search tools
- [ ] Record city-to-airport connections from local transit authorities
- [ ] Save all source URLs for the disclosure section
- [ ] Note the date of each data point for `lastReviewed`

### Writing phase

- [ ] Short answer is genuinely helpful and accurate given the data
- [ ] Winner reasons are specific to this route (not generic)
- [ ] Alternative points are balanced and fair
- [ ] Traveller scenarios cover: business, family, budget, weekend, geography-specific, long-stay
- [ ] Common mistakes are route-specific (not generic travel advice)
- [ ] FAQ items include route-specific questions + standard base set
- [ ] All illustrative values use "~" prefix and are explained
- [ ] No factual claim is made without a recorded source

### Review phase

- [ ] All public fact claims verified against sources
- [ ] All calculations (cost totals, time totals) add up correctly
- [ ] Illustrative assumptions clearly separated from facts
- [ ] `lastReviewed` date is current
- [ ] `factualReviewDate` is set (6 months from now)
- [ ] Sources listed exactly match claims made
- [ ] No "industry standard" or unsourced language

---

## 4. DECISION PAGE CREATION CHECKLIST

### Step 1: Slug and route
- [ ] Slug follows pattern: `[origin]-to-[destination]` (e.g. `berlin-to-london`)
- [ ] Route created at `src/app/compare/[slug]/page.tsx`
- [ ] CSS module copied from approved template (`decision-master/page.module.css`)

### Step 2: Metadata
- [ ] Title: `[Origin] to [Destination]: [Airport A] or [Airport B]? | Travelvus`
- [ ] Description: Specific to the route, 140–160 characters
- [ ] Canonical: `/compare/[slug]`
- [ ] Robots: default (index, follow) for real pages

### Step 3: Data object
- [ ] `DecisionPageData` contract fully populated
- [ ] All 14 required fields present
- [ ] `validateDecisionPage()` returns empty array
- [ ] Public sources documented in `sources` array
- [ ] Illustrative assumptions documented in `assumptions` array

### Step 4: Content
- [ ] 12 sections rendered in correct order
- [ ] Verdict appears in section 2 (immediately after hero)
- [ ] At a Glance uses correct grid component
- [ ] Real cost breakdown arithmetic verified
- [ ] Journey timeline stages add up to stated totals
- [ ] Source/assumption disclosure present before CTA
- [ ] Continue cards point to 3 approved guides

### Step 5: Internal links
- [ ] Links to at least 2 other relevant Travelvus pages
- [ ] No broken links (verify all hrefs return 200)
- [ ] CTA links to Comparison Engine

### Step 6: Quality
- [ ] TypeScript compiles without errors
- [ ] All existing tests pass
- [ ] Production build succeeds
- [ ] Responsive: verified at 390px, 768px, 1440px
- [ ] No horizontal overflow at any breakpoint
- [ ] Header unchanged from shared component
- [ ] Footer unchanged from shared component
- [ ] Verdict uses shared `TravelvusVerdict`
- [ ] FAQ uses shared `FAQAccordion`
- [ ] No hero/body image duplication

---

## 5. VALIDATION RULES

### 5.1 Automated (compile-time)

```ts
// Run validateDecisionPage() before build
const issues = validateDecisionPage(data);
if (issues.length > 0) {
  throw new Error(`Decision Page [${slug}] validation failed: ${issues.join(", ")}`);
}
```

**Required fields check:**
- `slug` must be non-empty
- `question` must be non-empty and end with "?"
- `shortAnswer` must be non-empty
- `verdict.line` must be non-empty
- `atAGlance` must have exactly 5 rows (last row `isFinal: true`)
- `winnerReasons` must have 3–5 items
- `alternative.points` must have 3–5 items
- `costBreakdown` must have 4–7 rows
- `journeyTimeline` must have 4–7 stages (last `isFinal: true`)
- `scenarios` must have 5–7 items
- `commonMistakes` must have 3–5 items
- `faqItems` must have 5–10 items
- `cta.title` and `cta.buttonHref` must be non-empty
- `continueCards` must have exactly 3 items

### 5.2 Manual (editorial review)

- All public fact claims traceable to a named source
- All illustrative values use "~" or equivalent hedging
- No unsourced "industry standard" language
- Winner reasons are specific to this route
- Alternative points are genuinely balanced
- Arithmetic in cost breakdown and timeline is correct
- FAQ items are not duplicates of main sections
- `lastReviewed` date is within 30 days of deployment

### 5.3 Visual (production QA)

- Verdict appears immediately after hero (section 2)
- At a Glance grid is readable at 390px
- Source disclosure is present and readable
- Continue cards are 3 unique links, all 200
- Footer is absolute final element
- No horizontal overflow at any breakpoint

---

## 6. PRODUCTION WORKFLOW

```
RESEARCH (30 min)
  ├── Verify search volume exists
  ├── Gather public facts from official sources
  ├── Record transfer times, fares, frequencies
  └── Save all source URLs

POPULATE (20 min)
  ├── Fill DecisionPageData object
  ├── Compute illustrative totals
  ├── Write editorial content (reasons, alternative, scenarios, mistakes)
  └── Write FAQ items

VALIDATE (5 min)
  ├── Run validateDecisionPage()
  ├── Verify arithmetic
  ├── Check all sources documented
  └── Verify no unsourced claims

BUILD (5 min)
  ├── Create route directory
  ├── Copy CSS module
  ├── Write page.tsx with DATA object
  ├── Run tsc --noEmit
  └── Run npm test

DEPLOY (5 min)
  ├── git commit
  ├── git push
  └── npx vercel --prod

VERIFY (5 min)
  ├── Open production URL
  ├── Check all 12 sections render
  ├── Verify responsive at 3 breakpoints
  ├── Check internal links
  └── Confirm noindex NOT set (for real pages)
```

**Total estimated time per Decision Page: ~70 minutes**

Breakdown:
- Research: 30 min (one-time per route)
- Content population: 20 min
- Validation: 5 min
- Build + deploy: 10 min
- Verification: 5 min

---

## 7. SCALABILITY REPORT

### 7.1 Current capacity

| Metric | Value |
|--------|-------|
| Decision Pages in production | 1 (`/compare/berlin-to-london`) |
| Approved template | Decision Master 2.0 |
| Typed contract | `DecisionPageData` |
| Shared components | HomeHeader, TravelvusVerdict, FAQAccordion |
| Reusable CSS | `page.module.css` (copy per page) |

### 7.2 Bottlenecks

| Bottleneck | Severity | Mitigation |
|-----------|----------|------------|
| CSS module duplication per page | Low | Extract to shared `decision-page.module.css` after 3–5 pages |
| Manual research per route | Medium | Build a research template; batch similar routes |
| Editorial writing per page | Medium | Create FAQ/scenario/mistake templates with route-specific slots |
| Build time per page | Low | 40 routes currently; Next.js static generation scales well |
| Vercel deploy per page | Low | Single deploy per batch; no per-page overhead |

### 7.3 Scaling projections

| Pages | Cumulative build time | Cumulative deploy time | Feasible per week |
|-------|----------------------|----------------------|-------------------|
| 5 | ~2 min | ~20s | 5 (one developer) |
| 25 | ~3 min | ~25s | 10 (one developer, batched) |
| 100 | ~5 min | ~30s | 15 (one developer, templated) |
| 500 | ~15 min | ~60s | 20 (templated + automated) |

### 7.4 Automation potential

| Task | Automatable? | Effort to automate |
|------|-------------|-------------------|
| Route + directory creation | Yes | Low (script) |
| CSS module copy | Yes | Already solved (cp) |
| Public fact gathering | Partial | High (scraping APIs) |
| Illustrative cost computation | Yes | Medium (formula) |
| FAQ base set | Yes | Low (template) |
| Scenario templates | Yes | Low (template) |
| Source disclosure | Partial | Medium (template + manual) |
| Editorial writing (reasons, alternative) | No | Human required |
| Build verification | Yes | Low (CI) |

---

## 8. ESTIMATED PRODUCTION TIME PER PAGE

| Phase | First page | Subsequent pages (same route type) |
|-------|-----------|-----------------------------------|
| Research | 30 min | 15–20 min (transfer data reusable) |
| Content | 20 min | 10–15 min (templates accelerate) |
| Validation | 5 min | 3 min |
| Build + Deploy | 10 min | 5 min |
| Verify | 5 min | 3 min |
| **Total** | **~70 min** | **~35–45 min** |

A single developer can produce **8–10 Decision Pages per day** at steady state.

---

## 9. RECOMMENDED ORDER — FIRST 25 DECISION PAGES

### Priority tiers

#### TIER 1 — London Airport Decisions (highest search volume, existing internal links)

| # | Route | Question |
|---|-------|----------|
| 1 | `/compare/berlin-to-london` | ✅ DONE |
| 2 | `/compare/paris-to-london` | Paris → London: Heathrow or Gatwick? |
| 3 | `/compare/amsterdam-to-london` | Amsterdam → London: Heathrow, Gatwick or Stansted? |
| 4 | `/compare/barcelona-to-london` | Barcelona → London: Which airport wins? |
| 5 | `/compare/rome-to-london` | Rome → London: Heathrow or Stansted? |
| 6 | `/compare/dublin-to-london` | Dublin → London: Heathrow, Gatwick or City? |
| 7 | `/compare/new-york-to-london` | New York → London: Heathrow or Gatwick? |
| 8 | `/compare/madrid-to-london` | Madrid → London: Which airport wins? |
| 9 | `/compare/lisbon-to-london` | Lisbon → London: Heathrow, Gatwick or Stansted? |
| 10 | `/compare/milan-to-london` | Milan → London: Linate, Malpensa or Bergamo? |

#### TIER 2 — Multi-airport city pairs (high traveller confusion)

| # | Route | Question |
|---|-------|----------|
| 11 | `/compare/paris-airports` | Paris: CDG or Orly? |
| 12 | `/compare/new-york-airports` | New York: JFK, Newark or LaGuardia? |
| 13 | `/compare/tokyo-airports` | Tokyo: Narita or Haneda? |
| 14 | `/compare/milan-airports` | Milan: Malpensa, Linate or Bergamo? |
| 15 | `/compare/stockholm-airports` | Stockholm: Arlanda, Bromma or Skavsta? |
| 16 | `/compare/oslo-airports` | Oslo: Gardermoen, Torp or Rygge? |
| 17 | `/compare/brussels-airports` | Brussels: Zaventem or Charleroi? |
| 18 | `/compare/frankfurt-airports` | Frankfurt: FRA or Hahn? |
| 19 | `/compare/barcelona-airports` | Barcelona: El Prat, Girona or Reus? |
| 20 | `/compare/rome-airports` | Rome: Fiumicino or Ciampino? |

#### TIER 3 — Schedule/time decisions (unique Travelvus angle)

| # | Route | Question |
|---|-------|----------|
| 21 | `/compare/morning-vs-evening-flight` | Morning or evening flight: which creates the better journey? |
| 22 | `/compare/direct-vs-connecting` | Direct or connecting flight: when is the layover worth it? |
| 23 | `/compare/early-departure-vs-late-departure` | Early departure or late departure: which is really faster? |
| 24 | `/compare/budget-vs-full-service` | Budget airline or full-service: which is cheaper door-to-door? |
| 25 | `/compare/Heathrow-terminal-2-vs-5` | Heathrow Terminal 2 or Terminal 5: does it change your journey? |

---

## 10. TEMPLATE DATA REUSE

### FAQ base set (applicable to all London airport decisions)

```
1. Which London airport is cheapest overall?
2. How long does transfer take from [Airport A] to central London?
3. How long does transfer take from [Airport B] to central London?
4. Does the time of day change which airport is better?
5. What if I am flying from [Origin City]?
```

### Scenario base set (applicable to all airport decisions)

```
1. Business traveller → [faster transfer airport]
2. Family with children → [simpler transfer airport]
3. Budget traveller → [cheaper ticket airport]
4. Weekend trip → [faster total journey]
5. Heading to [specific area] → [geographically closer airport]
6. Long stay or relocation → [either — cost decides]
```

### Common mistakes base set

```
1. Choosing by ticket price only → Add baggage, transfer, and schedule time
2. Ignoring airport transfer → [Airport A] is [X]km from the city
3. Forgetting baggage costs → Budget airlines charge €30–60 per checked bag
4. Assuming shorter flight = faster → Transfer time often outweighs flight difference
```

### Continue cards (fixed for all pages)

```
1. Real Cost of a Flight → /guides/real-cost-of-a-flight
2. Total Travel Time Comparison → /guides/total-travel-time-comparison
3. [Contextual Hub] → /london-airports (or relevant hub)
```

---

## 11. DELIVERY CHECKPOINTS

Before marking a Decision Page as production-ready:

- [ ] `validateDecisionPage()` returns 0 issues
- [ ] All 12 sections render in production
- [ ] Verdict appears in section 2
- [ ] Source disclosure present with named sources
- [ ] Illustrative assumptions clearly labelled
- [ ] Arithmetic verified in cost breakdown and timeline
- [ ] No horizontal overflow at 390px, 768px, 1440px
- [ ] All internal links return 200
- [ ] Header and footer match shared components
- [ ] No hero/body image duplication
- [ ] `lastReviewed` is within 30 days
- [ ] `factualReviewDate` is set to +6 months
- [ ] Route is indexable (no `noindex`)

---

**END OF FACTORY SPECIFICATION**
