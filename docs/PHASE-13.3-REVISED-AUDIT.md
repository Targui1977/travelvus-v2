# Phase 13.3 — Revised Audit: Owner Context Correction

**Date:** 2026-07-08
**Status:** Previous conclusions SUPERSEDED by owner context
**Previous document:** `docs/LONDON-LEGACY-AUDIT.md` (retain for history, conclusions withdrawn)

---

## A. ABANDONED YOUTUBE EXPERIMENT — IDENTIFIED URLs

The owner confirms: Travelvus had a YouTube channel with ~6 city videos. Each video had a companion web page. The experiment was intended to attract search traffic and connect viewers to YouTube. It was **abandoned permanently.**

### Confirmed experiment pages

| URL | Title | Type | Status | Content |
|-----|-------|------|--------|---------|
| `/london/` | London Cinematic City Documentary - Outdoor Adventure | Post | 200 | ~100 words, generic template |
| `/cities/` | Cities | Page | 200 | Hub page, only links to London |
| `/europe/` | Europe | Page | 200 | Continent page, only links to London |

### Confirmed NEVER created (404)

| URL | Status |
|-----|--------|
| `/asia/` | 404 |
| `/north-america/` | 404 |
| `/middle-east/` | 404 |
| `/tokyo/` | 404 |
| `/paris/` | 404 |
| `/barcelona/` | 404 |
| `/rome/` | 404 |
| `/berlin/` | 404 |
| `/madrid/` | 404 |
| `/amsterdam/` | 404 |

**Total YouTube experiment URLs: 3** (all thin, all abandoned, zero strategic value).

---

## B. PREVIOUS CONCLUSIONS SUPERSEDED

| Previous Conclusion | Status | Reason |
|--------------------|--------|--------|
| `/london/` should be preserved as a Decision Hub | **WITHDRAWN** | Abandoned experiment. Owner does not want to revive this strategy. |
| `/london/` is a clean valuable slug | **WITHDRAWN** | Slug alone is not evidence of value. |
| 10-URL London cluster proposed | **MOVED TO HYPOTHESIS** | Strategic hypothesis only, not approved architecture. |
| Central promise "Which London airport costs less?" | **MOVED TO HYPOTHESIS** | Interesting territory, but not tied to /london/. |
| `/london/` in Top 10 rebuild list | **REMOVED** | No mandatory preservation value. |
| `/london/` as HIGH risk URL | **DOWNGRADED** | Now LOW risk — no content to protect, no traffic known. |

---

## C. CORRECTED HIGH-RISK LEGACY LIST

Removing London from high-risk (it has no content to protect). Top 8 high-risk URLs based on brand keyword potential, V2 alignment, and search intent:

| # | URL | Risk | Reason |
|---|-----|------|--------|
| 1 | `/expedia-taap/` | HIGH | Strong brand keyword, affiliate potential |
| 2 | `/google-flight-matrix/` | HIGH | Google brand, flight comparison intent |
| 3 | `/tsa-precheck-cost/` | HIGH | Massive evergreen search volume |
| 4 | `/irctc-train-ticket-booking/` | HIGH | Indian Railways — enormous audience |
| 5 | `/bart-trip-planner/` | HIGH | Regional transit authority |
| 6 | `/defense-travel-system/` | HIGH | US military niche |
| 7 | `/points-guy/` | MEDIUM | Brand keyword |
| 8 | `/kayak-flights/` | MEDIUM | Flight comparison intent |

London removed. Oyster Card and MTA downgraded to MEDIUM (less strategic urgency than top 6).

---

## D. CORRECTED TOP 10 LEGACY PAGES TO REBUILD FIRST

| Rank | URL | Reason | V2 Type |
|------|-----|--------|---------|
| 1 | `/google-flight-matrix/` | Directly aligned with flight comparison product | Decision Page |
| 2 | `/tsa-precheck-cost/` | Massive evergreen search volume | Question Page |
| 3 | `/expedia-taap/` | Strong brand keyword, affiliate potential | Question Page |
| 4 | `/kayak-flights/` | Flight comparison intent | Decision Page |
| 5 | `/irctc-train-ticket-booking/` | Indian Railways — massive audience | Question Page |
| 6 | `/points-guy/` | Strong brand keyword | Decision Page |
| 7 | `/bart-trip-planner/` | Regional authority — SF Bay Area | Question Page |
| 8 | `/defense-travel-system/` | US military niche — unique content | Question Page |
| 9 | `/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system/` | London transit — V2 market | Decision Page |
| 10 | `/wego-flight/` | Flight comparison intent | Decision Page |

**Changes:** London removed, Oyster Card moved down, Wego added.

---

## E. CORRECTED V2 CANDIDATE COUNTS

| Classification | Count | Change |
|---------------|-------|--------|
| **DIRECT V2 FIT** | 7 | -1 (London removed) |
| **ADJACENT V2 FIT** | 12 | No change |
| **LEGACY SEO ASSET** | 10 | No change |
| **LOW STRATEGIC FIT** | 5 | No change |
| **RETIREMENT CANDIDATES** | 3 | +3 (London, Cities, Europe) |

Total: **34** V2-relevant URLs (was 35, London removed to retirement).

---

## F. CORRECTED MIGRATION MATRIX

| Action | Count | Change |
|--------|-------|--------|
| **REBUILD SAME URL** | 32 | -1 (London removed) |
| **301 TO SPECIFIC URL** | 7 | No change |
| **PENDING EVIDENCE** | 16 | -2 (3 retirement candidates moved, 1 added to pending) |
| **410 CANDIDATE** | 12 | No change |
| **APPROVED FOR RETIREMENT — PENDING EVIDENCE** | 3 | +3 (London, Cities, Europe) |

**Total: 70.**

---

## G. RETIREMENT CANDIDATES

| URL | Classification | Rationale |
|-----|---------------|-----------|
| `/london/` | APPROVED FOR RETIREMENT — PENDING FINAL EVIDENCE | Abandoned YouTube experiment. ~100 words. No unique content. No V2 role. |
| `/cities/` | APPROVED FOR RETIREMENT — PENDING FINAL EVIDENCE | Experiment hub page. Only links to London. Template content. |
| `/europe/` | APPROVED FOR RETIREMENT — PENDING FINAL EVIDENCE | Experiment continent page. Only links to London. Template content. |

All three require Search Console confirmation before final 410. If zero traffic confirmed → 410. If any traffic → 301 to best V2 equivalent (future Decision Hub, NOT Home).

---

## H. CONFIRMATION — NO REDIRECTS IMPLEMENTED

Zero redirects. Zero 410s. Zero DNS changes. Zero code changes. All audit only.

---

## I. NEXT-BUILD SCORING

Five candidates scored on 0–3 scale (3 = best):

| Criteria | A. Home | B. 2nd Decision Page | C. 1st Question Page | D. London Airports Hub | E. Multi-Airport Compare |
|----------|---------|---------------------|----------------------|----------------------|--------------------------|
| Product learning | 1 | 3 | 2 | 2 | 3 |
| SEO opportunity | 2 | 2 | 3 | 2 | 2 |
| Proves repeatability | 1 | 3 | 2 | 1 | 2 |
| Reuses V1 architecture | 2 | 3 | 1 | 1 | 2 |
| Migration value | 1 | 2 | 3 | 0 | 0 |
| Premature architecture risk | 2 | 1 | 1 | 3 | 3 |
| Monetization value | 3 | 2 | 2 | 2 | 2 |
| **TOTAL** | **12** | **16** | **14** | **11** | **14** |

---

## J. RECOMMENDATION

### **Build: A SECOND DECISION PAGE (e.g., Heathrow vs Gatwick)**

**Rationale:**

1. **Proves repeatability.** The strongest test of Travelvus: can we build a second Decision Page without inventing new architecture? If we can replicate the Heathrow vs Stansted page for another airport pair, we prove the model scales.

2. **Maximum reuse.** The Decision Page template, components, decision engine, and editorial patterns already exist. Building a second one validates the architecture with minimal new code.

3. **Lowest risk.** Doesn't require new page types (Home, Hub, Question Page). Doesn't force premature taxonomy decisions. Stays within the proven V1 surface set.

4. **Product learning.** Teaches us whether the Decision Page format generalizes beyond the canonical Heathrow-Stansted example. Reveals what's template vs what's unique per airport pair.

**Why NOT Home first:** Home locks in navigation, positioning, and the entry experience before we've proven the repeatable product. Home should wait until we have multiple Decision Pages and at least one Question Page to feature.

**Why NOT a Question Page first:** Question Pages require a different template and SEO strategy. They're valuable but don't prove the core product repeatability the way a second Decision Page does.

**Why NOT London Airports Hub:** Requires creating a new page type (Hub) with multi-airport comparison logic. Higher architectural risk. Better to build after 2-3 Decision Pages exist to link from.

---

## K. DETENTE

No code. No routes. No design. No deployment. No redirects. Audit and recommendation only.

**Recommended next build:** Second Decision Page (Heathrow vs Gatwick or equivalent London airport pair). Reuses 100% of existing V1 architecture. Proves product repeatability before expanding to new page types.
