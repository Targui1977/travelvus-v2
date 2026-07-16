# TRAVELVUS V3 — PRODUCTION EXCELLENCE AUDIT

**Phase 105.0 — Deep Product Audit**
**Date:** 2026-07-16
**Scope:** London (31 pages), New York (3 pages), Paris (3 pages)
**Framework score:** 8.5/10 (pre-audit)

---

## SCORECARD

| Dimension | Score | Key Issue |
|-----------|-------|-----------|
| **Framework** | 8.5/10 | Strong typed contracts; minor CSS bloat |
| **Product** | 7.0/10 | Editorial inconsistencies across ecosystems |
| **Editorial** | 7.5/10 | Conflicting title patterns, universal "clear" confidence |
| **UX** | 7.5/10 | HeroEditorial not used on 10 support guides; Hub pages lack hero |
| **Trust** | 7.0/10 | Confidence labels disconnected from actual verdict uncertainty |
| **Scalability** | 8.5/10 | Proven on 3 cities; CSS pattern resolved; data layer unified |

**Overall product score: 7.6/10**

---

## 1. EDITORIAL CONSISTENCY: 7.5/10

### Issue 1.1 — Inconsistent Guide Title Patterns

| Guide | Title Pattern |
|-------|--------------|
| Heathrow vs Gatwick | "The Complete Decision Guide" |
| Real Cost of a Flight | No suffix — just the H1 |
| Total Travel Time | No suffix — just the H1 |
| JFK vs Newark | "Which New York Airport Is Actually Better?" |
| CDG vs Orly | "Which Paris Airport Is Actually Better?" |

**Problem:** No standard title structure. The London guides use declarative H1s. The NY and Paris guides use question-format H1s. A user scanning search results sees inconsistent patterns.

**Impact:** Weakens brand recognition in SERPs. A user who finds "The Complete Decision Guide" helpful may not click "Which Paris Airport Is Actually Better?" because it looks like a different product.

**Fix:** Standardize to one pattern. **Recommended:** "X vs Y: The Complete Decision Guide" for flagship comparisons. "Best Airport for [Place]: Complete Guide" for neighbourhood guides.

### Issue 1.2 — Universal "Clear" Confidence

Every single guide uses `confidence: "clear"` — even JFK vs Newark ("Too close to call on time alone") and CDG vs Orly ("CDG for international. Orly for domestic." which is inherently conditional).

**Problem:** The confidence label is a decoration, not a signal. When every page says "clear," no page is actually clear. This undermines trust.

**Fix:** Use the confidence contract as designed:
- `"robust"` — strong data supports a clear winner (Heathrow vs Gatwick)
- `"clear"` — editorial recommendation based on typical scenarios (Real Cost Guide)
- `"narrow"` — winner exists but margin is small (JFK vs Newark — 5 min difference)
- `"near-tie"` — no meaningful winner; personal preference decides (CDG vs Orly for most travellers)

### Issue 1.3 — CTA Wording Fragmentation

10+ distinct CTA wordings across the site:
- "Compare your own journey →"
- "Compare your own trip →"
- "Compare your own flights →"
- "Compare your own Paris journey →"
- "Compare your complete journey — door to door."
- "Reveal the real winner"

**Fix:** Standardize to one pattern per context:
- **Flagship Guides:** "Compare your own journey →"
- **Neighbourhood Guides:** "Compare your journey →"
- **Hubs:** "Reveal the real winner"
- **Decision Pages:** "Compare your flight →"

### Issue 1.4 — Decision Summary Inconsistency

Flagship Guides use a 3-part decision summary (Who it's for / Decision it solves / Key takeaway). Support guides use a 2-part summary (missing "Who it's for").

**Fix:** Standardize to 3-part for all editorial pages. Use 2-part only for pure reference pages (Hubs).

---

## 2. DECISION PSYCHOLOGY: 7.0/10

### Issue 2.1 — Weak "Why Trust" Signals

The trust signals exist (methodology badge, review date, source disclosure) but they are passive. They sit at the bottom of pages. The hero contains no immediate trust anchor beyond "Methodology verified."

**Fix:** Add one trust capsule near the verdict: "Verified with [Source Name] data · Reviewed [date]." This is already in the metadata but isn't visually connected to the decision moment.

### Issue 2.2 — No Visual Distinction Between Strong and Weak Verdicts

JFK vs Newark says "Too close to call on time alone." Heathrow vs Gatwick says "Heathrow wins." Both use the identical navy verdict block. A near-tie should not look visually identical to a strong win.

**Fix:** The verdict component already supports accent stats. Use a lighter treatment (reduced padding, no copper accent) for narrow/near-tie verdicts, and the full dark navy block for robust/clear winners.

### Issue 2.3 — Missing "One Thing to Remember"

No page has a single memorable takeaway that a user could repeat to a friend. The Key Takeaway in the decision summary serves this function but is buried in a card with 2 other items.

**Fix:** Add one bold sentence immediately after the verdict: "The one thing to remember: [X]." This becomes the social proof — the sentence users quote when recommending Travelvus to friends.

---

## 3. INFORMATION HIERARCHY: 7.5/10

### Issue 3.1 — Hub Pages Don't Use HeroEditorial

The London Decision Center uses HeroEditorial. The NY Hub and Paris Hub use raw inline hero markup. This creates a visual fork — the London page looks more authoritative than NY and Paris.

**Fix:** Migrate NY and Paris Hubs to HeroEditorial. The component already supports the hub use case (question H1, subtitle, category, CTA, visual slot).

### Issue 3.2 — 10 Support Guides Don't Use HeroEditorial

The 10 London support guides use raw `guideHero` CSS classes. Only the 6 premium pages (Decision Center + 3 London Guides + 2 NY Guides) use HeroEditorial. The support guides feel like a different, older product.

**Fix:** Migrate all support guides to HeroEditorial. Each gets a decision card, a snapshot row, and a CTA in the hero.

### Issue 3.3 — Verdict Position Inconsistency

In the Flagship Guides, the Verdict appears after the worked example. In the Decision Pages, the Verdict appears immediately after the At A Glance section. Both are valid, but the inconsistency confuses the product pattern.

**Fix:** Document the rule: **Flagship Guides** → Verdict after worked example (the example proves the verdict). **Decision Pages** → Verdict after At A Glance (the data IS the proof).

---

## 4. VISUAL HIERARCHY: 7.5/10

### Issue 4.1 — Oversized Whitespace on Hub Pages

The NY Hub and Paris Hub have `padding: "48px 52px"` on the main container. The London Decision Center (using HeroEditorial) has tighter padding. The Hub pages feel spacious but less information-dense than the HeroEditorial-based pages.

**Fix:** Migrate Hubs to HeroEditorial. This also fixes the spacing inconsistency.

### Issue 4.2 — Airport Distance Map Inconsistency

The map appears in the hero for 6 pages (via HeroEditorial) but in the body for the 3 Hubs (raw component). The map's visual weight and label readability vary significantly between these contexts.

**Fix:** After migrating Hubs to HeroEditorial, the map will always appear in the hero's visual slot with consistent sizing.

### Issue 4.3 — Decision Card Overcrowding

The current Decision Card shows: winner, timeSaved, moneySaved, bestFor, avoidFor, confidence. On mobile, this is 6 data points in a navy card. The hierarchy is flat — everything has similar visual weight.

**Fix:** Establish a clear reading order: 1) Winner (largest, peach italic), 2) Primary metric (money OR time, whichever is more decisive), 3) Secondary metric, 4) Best-for statement, 5) Confidence footnote.

---

## 5. COMPONENT CONSISTENCY: 8.0/10

### Status: Good. Minor issues.

- Footer is now shared across all 10 support guides ✅
- Decision Page CSS is shared ✅
- HeroEditorial is consistent across 6 pages ✅
- guide.module.css is consistent across all guides ✅
- Money component is used across all 3 ecosystems ✅

### Issue 5.1 — HeroEditorial Gap

10 support guides still use raw `guideHero` CSS. Their pages look structurally different from the premium guides.

### Issue 5.2 — Related Cards Inconsistency

Flagship Guides use `styles.relatedGuideCard` (guide.module.css). Decision Pages use inline-styled "Continue your decision" cards. Hubs have no related section.

**Fix:** Extract the "Continue your decision" card grid as a shared component.

---

## 6. TRUST ARCHITECTURE: 7.0/10

### Issue 6.1 — Methodology Link is Buried

Every page has a methodology link — but it's always in the footer or a small source disclosure at the bottom. The hero contains "Methodology verified" as a metadata item, but this is just text. It is not clickable. It does not explain what "verified" means.

**Fix:** Make "Methodology verified" a clickable link in the hero metadata row. It should link directly to `/methodology`.

### Issue 6.2 — Source Disclosure is Invisible Without Scrolling

The source/assumption disclosure is always the last content section before the CTA. A user who reads only the hero and verdict never sees it. Trust is built at the bottom of the page, not at the decision moment.

**Fix:** Add a one-line trust note directly below the verdict: "Based on [Source] data. Illustrative example. [Learn more →]"

### Issue 6.3 — No Human Voice

Every page reads like a product — efficient, data-driven, precise. But there is no human editorial voice. No "We believe…" No "Here is what we found…" The methodology page has this, but individual pages do not.

**Fix:** Add one editorial sentence per guide in the decision summary: "Travelvus analysed the transfer data. Here is what the numbers show."

---

## 7. BRAND CONSISTENCY: 7.5/10

### Would someone recognize a Travelvus screenshot without the logo?

**On premium pages (Decision Center + Flagship Guides): YES.** The navy verdict block, copper accents, serif H1, mono labels, peach winner text — this is a distinctive visual language.

**On support guides: PARTIALLY.** They use the same typography and colours but lack the HeroEditorial structure (no decision card, no snapshot, no visual slot). They look like a simpler, older version of the same product.

**On Decision Pages: MOSTLY.** The 12-section template is recognizable but the inline-styled sections (no shared card components) create visual drift between pages.

**On Hubs: PARTIALLY.** NY and Paris Hubs don't use HeroEditorial. They look like well-designed editorial pages but don't carry the Travelvus "decision product" visual signature.

### Fix: Migrate all pages to HeroEditorial. This single change makes every page visually identifiably Travelvus.

---

## 8. SCALABILITY: 8.5/10

### Strengths
- Paris validated in ~35 minutes with 95% code reuse
- Data layer pattern is proven across 3 cities
- Decision Page Factory is documented and ready for mass production
- Shared CSS eliminates the main architectural blocker

### Future Bottlenecks

| Bottleneck | Severity | Fix |
|-----------|----------|-----|
| HeroEditorial not used on all pages | MEDIUM | Migrate 10 support guides + 2 hubs |
| No automated visual regression testing | MEDIUM | Add screenshot-based tests for the 6 reference pages |
| Decision Pages still use inline styles for some sections | LOW | Extract shared section components |
| No automated editorial consistency checks | LOW | Add linting for title patterns, confidence labels, CTA wording |

---

## 9. PERFORMANCE: 8.0/10

- **71 static pages** pre-rendered at build time. Zero runtime overhead.
- **1 dynamic page** (`/result`) — SSR with client hydration. Acceptable.
- **Shared CSS** eliminates 17 duplicate files. Bundle size reduced.
- **No runtime dependencies** beyond React and Next.js. No third-party UI libraries.
- **Component sizes are healthy:** HeroEditorial (322 lines), JourneyDiagram (152), AirportComparisonMap (156), Footer (90).

### Issue 9.1 — Large CSS File

`decision-page.module.css` is 907 lines. It serves 18 Decision Pages but could be split by section (hero, cards, tables, timeline) to allow tree-shaking for pages that don't use all sections.

**Risk:** LOW. 907 lines of CSS is negligible for modern browsers. Address only if bundle analysis shows it as a bottleneck.

---

## 10. COMPETITIVE MOAT: 8.0/10

### What competitors CAN copy:
- Airport data and transfer facts (public information)
- Comparison table layouts
- Neighbourhood recommendations (editorial, not proprietary)
- FAQ content (generic answers)

### What competitors CANNOT copy:
- **The integrated visual system** — AirportComparisonMap + JourneyDiagram + RealCostInfographic form a proprietary visual language. Competitors would need to rebuild their entire design system to match it.
- **The typed data architecture** — `DecisionPageData`, `HeroEditorialProps`, `MoneyValue`, `AirportMarker` are an implicit product specification. Copying the pages without the contracts produces an unmaintainable mess.
- **The Calculation Experience** — the sequence cascade + state machine + aria-live announcements is a patented product interaction. Competitors can display comparison results but cannot replicate the "earned verdict" psychological moment.
- **The HeroEditorial discriminated union** — the visual slot that enforces exactly ONE visual type per page is an architectural constraint that prevents visual chaos. Competitors will inevitably add multiple visuals, degrading the experience.
- **The market-unified data layer** — `london-airports-data.ts`, `ny-airports-data.ts`, `paris-airports-data.ts` are a growing proprietary dataset. Each new city adds competitive advantage.

### Where the moat is weak:
- **Editorial voice** — currently generic. A competitor with a stronger editorial personality could differentiate despite having weaker data.
- **Trust signals** — competitors can add methodology pages, source disclosures, and review dates. Travelvus does not yet have an unassailable trust advantage.
- **Personalization** — the Comparison Engine requires manual input. A competitor with a "where are you going?" wizard could feel more helpful to casual users.

---

## TOP 30 IMPROVEMENTS

### Priority A — Immediate (product quality, low effort)

| # | Problem | Fix | Effort | Impact |
|---|---------|-----|--------|--------|
| A1 | All pages use `confidence: "clear"` universally | Use appropriate confidence per page: robust/clear/narrow/near-tie | 30 min | Trust |
| A2 | 10 support guides lack HeroEditorial | Migrate to HeroEditorial with decision card + snapshot | 90 min | Brand, UX |
| A3 | NY + Paris Hubs don't use HeroEditorial | Migrate to HeroEditorial with visual slot | 30 min | Brand, UX |
| A4 | Confidence labels disconnected from verdict | Add confidence footnote to Decision Card: "Clear recommendation based on..." | 20 min | Trust |
| A5 | Methodology badge not clickable | Make "Methodology verified" a link in hero metadata | 10 min | Trust |
| A6 | CTA wording fragmented (6+ variants) | Standardize to 2 patterns: "Compare your own journey →" + "Reveal the real winner" | 20 min | Editorial |
| A7 | Guide title patterns inconsistent | Standardize: "X vs Y: The Complete Decision Guide" for flagships | 15 min | Editorial |
| A8 | No "one thing to remember" takeaway | Add bold sentence after verdict on every guide | 30 min | Psychology |

### Priority B — Next (product depth, medium effort)

| # | Problem | Fix | Effort | Impact |
|---|---------|-----|--------|--------|
| B1 | No visible trust anchor near verdict | Add one-line trust note below verdict: "Based on TfL data · Illustrative example · Learn more →" | 20 min | Trust |
| B2 | Decision Card overcrowded on mobile | Establish visual hierarchy: Winner > Primary metric > Secondary > Best-for > Confidence | 30 min | UX |
| B3 | Verdict block visually identical for strong/weak decisions | Lighter treatment for narrow/near-tie verdicts | 60 min | Psychology |
| B4 | Support guide decision summary missing "Who it's for" | Standardize to 3-part summary on all pages | 30 min | Editorial |
| B5 | No human editorial voice | Add one "Travelvus found..." sentence per guide | 30 min | Trust, Brand |
| B6 | Related cards inconsistent across page types | Extract shared ContinueDecisionCards component | 45 min | Component |
| B7 | Source disclosure invisible without scrolling | Add compact source line below verdict | 20 min | Trust |
| B8 | No automated editorial consistency checks | Add lint rules for title patterns, confidence, CTA | 60 min | Quality |

### Priority C — Future (product excellence, higher effort)

| # | Problem | Fix | Effort | Impact |
|---|---------|-----|--------|--------|
| C1 | No visual regression testing | Add Playwright screenshot tests for 6 reference pages | 120 min | Quality |
| C2 | 907-line CSS could be modularized | Split decision-page CSS by section | 60 min | Performance |
| C3 | Airport comparison map labels vary by context | Standardize label format: code + distance + direction | 30 min | Visual |
| C4 | Decision Pages use inline styles for some cards | Extract shared DecisionCardSection, SnapshotRow components | 90 min | Component |
| C5 | No dark mode support | Not required — travel content is daytime-use. Skip. | N/A | N/A |
| C6 | Hub pages lack related/continue section | Add Continue Your Decision section to all hubs | 30 min | UX |
| C7 | No breadcrumb navigation | Add breadcrumbs to guides: Home > [City] > [Guide Title] | 45 min | UX, SEO |

### Priority D — Ideas (strategic, requires design)

| # | Idea | Rationale |
|---|------|-----------|
| D1 | **"Decision Score"** — a single number 1-10 for each airport on each route | Quantifies the qualitative comparison. Users compare scores intuitively. |
| D2 | **Personalized Wizard** — "Where are you going in [City]?" → recommends airport | Bridges the gap between editorial content and the Comparison Engine. |
| D3 | **Print/Save PDF** — one-click PDF of the full comparison | Business travellers preparing for trips. |
| D4 | **Community Verdict** — "X% of travellers chose [Airport] for this route" | Social proof. Requires backend. |
| D5 | **Transfer Time Guarantee** — "If your transfer takes longer than our estimate, we'll update the page." | Trust signal. Editorial commitment to accuracy. |
| D6 | **Audio Summary** — 60-second audio version of each guide | Accessibility. Commuters. |
| D7 | **Compare Any Two Pages** — side-by-side view of two airport guides | Power users comparing across cities. |

---

## IMPLEMENTATION ROADMAP

```
Week 1 — Priority A (8 items, ~4 hours)
  → All pages use appropriate confidence labels
  → 10 support guides + 2 hubs migrated to HeroEditorial
  → Methodology link clickable
  → CTA + title patterns standardized
  → "One thing to remember" on every guide
  → Product score: 7.6 → 8.5/10

Week 2 — Priority B (8 items, ~5 hours)
  → Trust anchor near verdict
  → Decision Card hierarchy
  → Verdict visual distinction
  → Decision summary standardization
  → Human editorial voice
  → Shared ContinueDecisionCards component
  → Source line below verdict
  → Product score: 8.5 → 9.0/10

Week 3+ — Priority C (7 items, ~7 hours)
  → Visual regression tests
  → CSS modularization
  → Shared section components
  → Breadcrumbs
  → Product score: 9.0 → 9.3/10
```

---

## SUMMARY

Travelvus V3 is a **7.6/10 product** on an **8.5/10 framework**. The architecture is excellent — the framework scales to any city with 95% code reuse. The product quality gap is editorial consistency, trust signaling, and universal HeroEditorial adoption.

**After Priority A**: the product feels like one cohesive system rather than three generations of pages. Score: 8.5/10.

**After Priority B**: the product communicates trust at every decision moment. Score: 9.0/10.

**After Priority C**: the product is world-class. Score: 9.3/10.

The remaining 0.7 points (Priority D ideas) require design exploration and backend investment — appropriate for a future growth phase, not the current consolidation sprint.

---

**END OF AUDIT**
