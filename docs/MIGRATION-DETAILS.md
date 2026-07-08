# Travelvus V2 — Migration Details

**Date:** 2026-07-08

---

## 1. MERGE GROUPS (Exact)

### Group A: TSA PreCheck (3 URLs → 1)

| Role | URL |
|------|-----|
| **PRIMARY** | `/tsa-precheck-cost/` |
| Secondary | `/unlock-fast-and-hassle-free-travel-with-tsa-precheck-your-guide-to-streamline-airport-security/` |
| Secondary | `/maximize-convenience-and-save-time-with-tsa-precheck-your-complete-guide/` |

**Reason:** Three posts on identical topic with near-identical AI content. The primary has the cleanest slug and title. Secondary URLs → **301 to primary**.

**Content to preserve:** Any unique statistics, dates, or regulatory details from the secondaries (if any exist after content audit).

---

### Group B: IRCTC (2 URLs → 1)

| Role | URL |
|------|-----|
| **PRIMARY** | `/irctc-train-ticket-booking/` |
| Secondary | `/easy-and-convenient-irctc-railway-booking-your-one-stop-solution-for-booking-train-tickets/` |

**Reason:** Same topic. Primary slug is cleaner. Secondary → **301 to primary**.

---

### Group C: Costco Travel (2 URLs → 1)

| Role | URL |
|------|-----|
| **PRIMARY** | `/costco-vacation/` |
| Secondary | `/unlock-amazing-travel-deals-with-costcotravel-your-ultimate-guide/` |

**Reason:** Same topic. Primary slug is shorter. Secondary → **301 to primary**.

---

### Group D: Oyster Card London (2 URLs → 1)

| Role | URL |
|------|-----|
| **PRIMARY** | `/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system/` |
| Secondary | `/unlock-the-benefits-of-oyster-card-your-ultimate-guide-to-londons-transit-system/` |

**Reason:** Same topic. Both have long slugs. Primary is marginally better. Secondary → **301 to primary**.

**Note:** In V2, consider rebuilding this as a cleaner `/oyster-card-london/` and 301 both legacy URLs to the new one. TBD in build phase.

---

### Group E: Cordelia Cruise (2 URLs → 1)

| Role | URL |
|------|-----|
| **PRIMARY** | PENDING CONTENT AUDIT |
| Secondary | PENDING CONTENT AUDIT |

**Reason:** Both need content review to determine which has more substance. **PENDING EVIDENCE.**

---

### Group F: Army DTS / Defense Travel System (2 URLs → 1)

| Role | URL |
|------|-----|
| **PRIMARY** | `/defense-travel-system/` |
| Secondary | `/army-dts/` |

**Reason:** Same topic. Primary is more descriptive. Secondary → **301 to primary**.

---

## 2. 12 URLs — 410 CANDIDATE REAUDIT

All 12 are confirmed thin listicles or generic AI content with zero index evidence.

| # | URL | Assessment |
|---|-----|------------|
| 1 | `/9-best-luxury-hotels-in-the-world/` | Standard listicle, no unique content. 410 CANDIDATE. |
| 2 | `/13-most-beautiful-islands-in-the-world/` | Thin blog spam. Stock photos. 410 CANDIDATE. |
| 3 | `/5-ways-to-tackle-air-travel-woes/` | Generic tips. 410 CANDIDATE. |
| 4 | `/10-best-tropical-vacations/` | Typo in URL. Generic listicle. 410 CANDIDATE. |
| 5 | `/top-rated-tourists-attractions-in-rome/` | Generic destination guide. 410 CANDIDATE. |
| 6 | `/top-10-must-visit-destinations-for-travel-enthusiasts/` | Generic listicle. 410 CANDIDATE. |
| 7 | `/top-10-must-visit-destinations-around-the-world-explore-the-best-destinations-for-your-next-adventure/` | Duplicate listicle. 410 CANDIDATE. |
| 8 | `/discover-top-10-must-visit-places-to-go-in-english-ideal-destinations-for-travelers/` | Generic listicle. 410 CANDIDATE. |
| 9 | `/explore-the-enchanting-land-of-japan-plan-your-dream-visit-to-japan-today/` | Generic. Not V2 relevant. 410 CANDIDATE. |
| 10 | `/explore-africas-stunning-wildlife-on-an-unforgettable-safari-adventure/` | Generic. 410 CANDIDATE. |
| 11 | `/the-ultimate-guide-to-packing-cubes-how-to-organize-and-maximize-space-in-your-travel-bags/` | Off-topic for V2. 410 CANDIDATE. |
| 12 | `/discover-the-magic-of-plitvice-holiday-resort-your-ultimate-guide-to-the-perfect-vacation/` | Hotel review. 410 CANDIDATE. |

**Final status for all 12:** 410 CANDIDATE — PENDING EVIDENCE (no Search Console data to confirm zero traffic). If Search Console shows zero impressions for 16 months, upgrade to FINAL 410. If any have traffic, reassign to REDIRECT.

---

## 3. SERVICE PAGES — CORRECTED

| URL | Previous Proposal | Corrected Action |
|-----|-------------------|-----------------|
| `/yacht-booking/` | 301 → / | **PENDING EVIDENCE** — Rebuild later or 410 |
| `/tours-and-activities/` | 301 → / | **PENDING EVIDENCE** — Rebuild later or 410 |
| `/car-rental/` | 301 → / | **PENDING EVIDENCE** — Rebuild later or 410 |
| `/airport-transfer/` | Merge → Decision Page | **PENDING EVIDENCE** — Rebuild as LHR/STN comparison |

**None redirected to Home.** Home is not a parking destination.

---

## 4. CATEGORIES AUDIT

| URL | Status | Indexed | Traffic | Action |
|-----|--------|---------|---------|--------|
| `/category/blog/` | 200 | No | UNKNOWN | **PENDING EVIDENCE** — Possible 301 → `/blog/` |
| `/category/cities/` | 200 | No | UNKNOWN | **PENDING EVIDENCE** — Possible 301 → future Airports Hub |
| `/category/europe/` | 200 | No | UNKNOWN | **PENDING EVIDENCE** — Possible 301 → future Airports Hub |

If categories have zero impressions: 301 to closest V2 equivalent. If they have traffic: KEEP and redirect when hub is built.

---

## 5. HIGH-RISK URL PROFILES

### Profile 1: `/expedia-taap/`
- **Topic:** Expedia Travel Agent Affiliate Program
- **Search intent:** Travel agents looking for booking platform
- **Known signals:** Zero indexed pages (site: search)
- **Legacy value:** AI-generated but substantive (500+ words)
- **V2 role:** Question Page — "Is Expedia TAAP worth it for travel agents?"
- **Action:** **REBUILD SAME URL** — Keep slug exactly
- **Risk:** LOW (no current traffic) but HIGH future potential (strong brand keyword)

### Profile 2: `/google-flight-matrix/`
- **Topic:** Google Flights Matrix tool guide
- **Search intent:** Flight comparison, travel hacking
- **Known signals:** Zero indexed pages
- **V2 role:** Decision Page — directly aligned with V2 product
- **Action:** **REBUILD SAME URL**
- **Risk:** LOW (no traffic) but core V2 alignment

### Profile 3: `/tsa-precheck-cost/`
- **Topic:** TSA PreCheck pricing and application guide
- **Search intent:** "how much does TSA PreCheck cost"
- **Known signals:** Zero indexed pages
- **V2 role:** Question Page — evergreen query, high search volume potential
- **Action:** **REBUILD SAME URL**
- **Risk:** LOW (no traffic)

### Profile 4: `/irctc-train-ticket-booking/`
- **Topic:** Indian Railways online booking guide
- **Search intent:** "how to book IRCTC tickets online"
- **Known signals:** Zero indexed pages
- **V2 role:** Question Page — massive Indian audience
- **Action:** **REBUILD SAME URL**
- **Risk:** LOW (no traffic)

### Profile 5: `/bart-trip-planner/`
- **Topic:** BART transit planner for San Francisco Bay Area
- **Search intent:** "BART trip planner how to use"
- **V2 role:** Question Page — transit comparison
- **Action:** **REBUILD SAME URL**

### Profile 6: `/defense-travel-system/`
- **Topic:** US Army Defense Travel System
- **Search intent:** Military personnel needing DTS help
- **V2 role:** Question Page — niche authority
- **Action:** **REBUILD SAME URL**

### Profile 7: `/points-guy/`
- **Topic:** Travel hacking / credit card points
- **Search intent:** "how to become a points guy" / travel hacking guide
- **V2 role:** Decision Page or Question Page
- **Action:** **REBUILD SAME URL**

### Profile 8: `/london/`
- **Topic:** London cinematic documentary
- **Search intent:** London travel guide
- **V2 role:** Decision Page hub — core V2 market
- **Action:** **REBUILD SAME URL** — Expand to Heathrow/Stansted comparison hub
- **Risk:** LOW (no traffic) but strategic for V2

---

## 6. TOP 10 LEGACY PAGES TO REBUILD FIRST

| Rank | URL | Reason | V2 Type |
|------|-----|--------|---------|
| 1 | `/london/` | Core V2 market — London airport hub | Decision Page Hub |
| 2 | `/google-flight-matrix/` | Directly aligned with flight comparison | Decision Page |
| 3 | `/tsa-precheck-cost/` | Massive evergreen search volume | Question Page |
| 4 | `/expedia-taap/` | Strong brand keyword, affiliate potential | Question Page |
| 5 | `/kayak-flights/` | Flight comparison intent | Decision Page |
| 6 | `/irctc-train-ticket-booking/` | Indian Railways — massive audience | Question Page |
| 7 | `/points-guy/` | Strong brand keyword | Decision Page |
| 8 | `/bart-trip-planner/` | Regional authority — SF Bay Area | Question Page |
| 9 | `/defense-travel-system/` | US military niche — unique content | Question Page |
| 10 | `/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system/` | London transit — core V2 market | Decision Page |

All 10: **REBUILD SAME URL.** No slug changes recommended.

---

## 7. V2 CANDIDATE CLASSIFICATION (35 URLs)

| Classification | Count | URLs |
|---------------|-------|------|
| **DIRECT V2 FIT** | 8 | London, Google Flights, TSA PreCheck, Expedia TAAP, Kayak, Points Guy, Oyster Card, Wego |
| **ADJACENT V2 FIT** | 12 | IRCTC, BART, TriMet, MTA, DTS, AAA, Costco, Computicket, Go City, Global Entry, eTravel, Expedia CA |
| **LEGACY SEO ASSET** | 10 | Bonza, KSRTC, VRL, Zingbus, EaseMyTrip, Bilal, Google Travel, Interrailing, Solo, Travelogue |
| **LOW STRATEGIC FIT** | 5 | EF Break, Marco Polo, Hawaii, Habitas, Cheeky Trip |

---

## 8. MIGRATION MATRIX — FINAL

| Action | Count | Confidence |
|--------|-------|------------|
| **REBUILD SAME URL** | 33 | HIGH (content exists, V2-relevant topic) |
| **301 TO SPECIFIC URL** | 7 | HIGH (confirmed duplicates) |
| **PENDING EVIDENCE** | 18 | LOW (need Search Console data) |
| **410 CANDIDATE** | 12 | LOW (need Search Console confirmation) |

**Zero** URLs proposed for 301 → Home.

---

## 9. REDIRECT DRAFT

See `docs/REDIRECT-MAP-DRAFT.md`.

---

## 10. DATA NEEDED FROM YOU

To finalize the 30 pending decisions, I need:

1. **Google Search Console access** (for travelvus.com property)
2. **Google Analytics access** (if any exists)
3. **WordPress admin login** (to export content and verify internal links)
4. **Backlink checker** (Ahrefs, Semrush, or free alternative)

Without this data, the migration plan stays at LOW confidence for 30 of 70 URLs.
