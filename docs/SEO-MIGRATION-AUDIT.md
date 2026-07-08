# Travelvus SEO Migration Audit

**Date:** 2026-07-08
**Source:** WordPress (Rank Math SEO) on Hostinger
**Target:** Next.js V2 on Vercel
**Total URLs discovered:** 70 (56 posts + 11 pages + 3 categories)

---

## Current Site Profile

- **Title:** Travelvus — "Outdoor Adventure" / "Cinematic City Documentaries"
- **Structure:** City-documentary concept with continent-based browsing
- **Blog posts:** 56 generic travel articles (listicles, tool guides, destination pieces)
- **Service pages:** Yacht booking, airport transfer, tours, car rental
- **Categories:** Blog, Cities, Europe (3 total)
- **Traffic data:** UNKNOWN (no Search Console access yet)
- **Backlinks:** UNKNOWN

---

## Classification Key

| Code | Meaning | Action |
|------|---------|--------|
| **KEEP** | Retain exact URL on new site | Rebuild page |
| **IMPROVE** | Rebuild with better content on same URL | Rebuild + enhance |
| **MERGE** | Combine multiple URLs into one | 301 redirect |
| **REDIRECT** | No direct replacement, redirect to best match | 301 redirect |
| **REMOVE** | No value, let 404 | 410 or 404 |

---

## A. PAGES (11 URLs)

| # | URL | Title | Classification | Target | Notes |
|---|-----|-------|---------------|--------|-------|
| 1 | `/` | Home | **KEEP** | Rebuild as V2 Home | Home not yet built in V2 |
| 2 | `/blog/` | Blog index | **IMPROVE** | Rebuild when content exists | Currently empty/unlinked |
| 3 | `/cities/` | Cities archive | **MERGE** | → Future Airports Hub | Concept pivot |
| 4 | `/europe/` | Europe archive | **MERGE** | → Future Airports Hub | Sub-category |
| 5 | `/home/` | Duplicate home | **REDIRECT** | → `/` | Duplicate of `/` |
| 6 | `/about/` | About page | **KEEP** | Rebuild V2 About | Not yet built |
| 7 | `/contact/` | Contact page | **KEEP** | Rebuild V2 Contact | Not yet built |
| 8 | `/yacht-booking/` | Yacht booking service | **REMOVE** | 404/410 | Not in V2 scope |
| 9 | `/airport-transfer/` | Airport transfer service | **MERGE** | → Future Decision Page | Could become LHR vs STN comparison |
| 10 | `/tours-and-activities/` | Tours service | **REMOVE** | 404/410 | Not in V2 scope |
| 11 | `/car-rental/` | Car rental service | **REMOVE** | 404/410 | Not in V2 scope |

## B. CATEGORIES (3 URLs)

| # | URL | Classification | Target |
|---|-----|---------------|--------|
| 1 | `/category/blog/` | **MERGE** | → `/blog/` |
| 2 | `/category/cities/` | **MERGE** | → Future Airports Hub |
| 3 | `/category/europe/` | **MERGE** | → Future Airports Hub |

## C. BLOG POSTS (56 URLs)

### HIGH VALUE — Directly relevant to V2 product vision

| # | URL | Topic | Classification | Target | Notes |
|---|-----|-------|---------------|--------|-------|
| 1 | `/london/` | London cinematic documentary | **IMPROVE** | Rebuild as Heathrow Decision Page hub | Already has content about London — pivot to comparison |
| 2 | `/expedia-taap/` | Expedia TAAP agent program | **KEEP** | Rebuild as Question Page | High-intent travel tool query |
| 3 | `/google-flight-matrix/` | Google Flights Matrix guide | **KEEP** | Rebuild as Question Page | Directly relevant to flight comparison |
| 4 | `/tsa-precheck-cost/` | TSA PreCheck cost guide | **KEEP** | Rebuild as Question Page | High-value evergreen query |
| 5 | `/irctc-train-ticket-booking/` | IRCTC train booking | **KEEP** | Rebuild as Question Page | Indian Railways — huge audience |
| 6 | `/bart-trip-planner/` | BART trip planner guide | **KEEP** | Rebuild as Question Page | Transit tool comparison |
| 7 | `/trimet-trip-planner/` | TriMet trip planner | **KEEP** | Rebuild as Question Page | Transit tool comparison |
| 8 | `/mta-trip-planner/` | MTA trip planner | **KEEP** | Rebuild as Question Page | Transit tool comparison |
| 9 | `/defense-travel-system/` | Army DTS | **KEEP** | Rebuild as Question Page | Niche authority potential |
| 10 | `/points-guy/` | Travel hacking / points | **KEEP** | Rebuild as Decision Page | Strong brand keyword |
| 11 | `/kayak-flights/` | Kayak flights guide | **KEEP** | Rebuild as Decision Page | Flight comparison intent |
| 12 | `/wego-flight/` | Wego flights guide | **KEEP** | Rebuild as Decision Page | Flight comparison intent |
| 13 | `/aaa-travel/` | AAA travel guide | **KEEP** | Rebuild as Question Page | Travel service comparison |
| 14 | `/costco-vacation/` | Costco vacations | **KEEP** | Rebuild as Question Page | Niche travel deals |
| 15 | `/computicket-travel/` | Computicket booking | **KEEP** | Rebuild as Question Page | Travel booking tool |
| 16 | `/go-city-travel-plan-and-tickets/` | Go City passes | **KEEP** | Rebuild as Question Page | City pass comparison |
| 17 | `/unlock-amazing-travel-deals-with-costcotravel-your-ultimate-guide/` | Costco Travel deals | **MERGE** | → Costco vacation page | Duplicate topic of #14 |
| 18 | `/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system/` | Oyster card London | **KEEP** | Rebuild as Decision Page | London transit — core V2 market |
| 19 | `/unlock-the-benefits-of-oyster-card-your-ultimate-guide-to-londons-transit-system/` | Oyster card duplicate | **MERGE** | → Oyster card page (#18) | Duplicate content |
| 20 | `/tsa-lock/` | TSA locks guide | **KEEP** | Rebuild as Question Page | Travel accessory evergreen |
| 21 | `/easy-and-convenient-irctc-railway-booking-your-one-stop-solution-for-booking-train-tickets/` | IRCTC duplicate | **MERGE** | → IRCTC page (#5) | Duplicate content |
| 22 | `/unlock-fast-and-hassle-free-travel-with-tsa-precheck-your-guide-to-streamline-airport-security/` | TSA PreCheck duplicate | **MERGE** | → TSA PreCheck (#3) | Duplicate content |
| 23 | `/maximize-convenience-and-save-time-with-tsa-precheck-your-complete-guide/` | TSA PreCheck duplicate | **MERGE** | → TSA PreCheck (#3) | Third TSA PreCheck article |
| 24 | `/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide/` | Global Entry guide | **KEEP** | Rebuild as Question Page | TSA/airport security |
| 25 | `/cordelia-cruise-the-ultimate-luxury-experience-at-sea/` | Cordelia Cruise | **MERGE** | → cruise comparison hub | Two cruise posts |
| 26 | `/cordelia-cruise-unforgettable-luxury-travel-experience-for-discerning-travelers/` | Cordelia Cruise duplicate | **MERGE** | → cruise comparison hub | Duplicate of #25 |
| 27 | `/unlock-the-world-with-etravel-your-ultimate-guide-to-seamless-online-travel-experience/` | eTravel guide | **KEEP** | Rebuild as Question Page | Booking platform guide |
| 28 | `/book-your-dream-vacation-with-expedia-ca-the-ultimate-travel-platform/` | Expedia CA | **KEEP** | Rebuild as Decision Page | OTA comparison |
| 29 | `/unlock-your-dream-destinations-with-google-travel-the-ultimate-guide-for-seamless-trip-planning-and-booking/` | Google Travel | **KEEP** | Rebuild as Question Page | Travel planning tool |
| 30 | `/convenient-online-ksrtc-bus-booking-book-your-tickets-now/` | KSRTC bus booking | **KEEP** | Rebuild as Question Page | Indian transit |
| 31 | `/vrl-bus-booking/` | VRL bus booking | **KEEP** | Rebuild as Question Page | Indian transit |
| 32 | `/zingbus/` | Zingbus | **KEEP** | Rebuild as Question Page | Bus booking platform |
| 33 | `/easemy-trip-your-ultimate-guide-to-stress-free-travels/` | EaseMyTrip | **KEEP** | Rebuild as Question Page | Indian OTA |
| 34 | `/bilal-travels-explore-the-world-with-the-best-travel-services/` | Bilal Travels | **KEEP** | Rebuild as Question Page | Travel agency guide |
| 35 | `/bonza-airlines/` | Bonza Airlines | **KEEP** | Rebuild as Decision Page | Airline comparison |

### MEDIUM VALUE — Could be rebuilt or redirected

| # | URL | Topic | Classification | Target |
|---|-----|-------|---------------|--------|
| 36 | `/solo-travel/` | Solo travel guide | **REDIRECT** | → Future Guides Hub |
| 37 | `/travelogue/` | Travelogue concept | **REDIRECT** | → Future Guides Hub |
| 38 | `/cheeky-trip/` | Cheeky Trip tool | **KEEP** | Rebuild later |
| 39 | `/army-dts/` | Army DTS | **MERGE** | → `/defense-travel-system/` |
| 40 | `/ef-ultimate-break/` | EF Ultimate Break | **REDIRECT** | → Future Guides Hub |
| 41 | `/marco-polo-hotel/` | Marco Polo Hotel | **REDIRECT** | → Future hotel comparison |
| 42 | `/hawaiian-vacation-packages/` | Hawaii packages | **REDIRECT** | → Future Guides Hub |
| 43 | `/habitas-alula/` | Habitas AlUla resort | **REDIRECT** | → Future hotel comparison |
| 44 | `/ultimate-guide-to-interrailing-explore-europe-by-train-with-ease/` | Interrailing guide | **KEEP** | Rebuild as Question Page |

### LOW VALUE — Generic AI content, likely thin

| # | URL | Topic | Classification |
|---|-----|-------|---------------|
| 45 | `/9-best-luxury-hotels-in-the-world/` | Luxury hotels listicle | **REMOVE** |
| 46 | `/13-most-beautiful-islands-in-the-world/` | Islands listicle | **REMOVE** |
| 47 | `/5-ways-to-tackle-air-travel-woes/` | Air travel tips | **REMOVE** |
| 48 | `/10-best-tropical-vacations/` | Tropical vacations | **REMOVE** |
| 49 | `/top-rated-tourists-attractions-in-rome/` | Rome attractions | **REMOVE** |
| 50 | `/top-10-must-visit-destinations-for-travel-enthusiasts/` | Destinations listicle | **REMOVE** |
| 51 | `/top-10-must-visit-destinations-around-the-world-explore-the-best-destinations-for-your-next-adventure/` | Destinations duplicate | **REMOVE** |
| 52 | `/discover-top-10-must-visit-places-to-go-in-english-ideal-destinations-for-travelers/` | English destinations | **REMOVE** |
| 53 | `/explore-the-enchanting-land-of-japan-plan-your-dream-visit-to-japan-today/` | Japan guide | **REMOVE** |
| 54 | `/explore-africas-stunning-wildlife-on-an-unforgettable-safari-adventure/` | Africa safari | **REMOVE** |
| 55 | `/the-ultimate-guide-to-packing-cubes-how-to-organize-and-maximize-space-in-your-travel-bags/` | Packing cubes | **REMOVE** |
| 56 | `/discover-the-magic-of-plitvice-holiday-resort-your-ultimate-guide-to-the-perfect-vacation/` | Plitvice resort | **REMOVE** |

---

## D. SUMMARY

| Classification | Count |
|---------------|-------|
| **KEEP** (rebuild) | 30 |
| **IMPROVE** (rebuild + enhance) | 2 |
| **MERGE** (combine duplicates) | 10 |
| **REDIRECT** (no direct replacement) | 6 |
| **REMOVE** (thin content) | 12 |

**Pages:** 2 KEEP, 1 IMPROVE, 2 MERGE, 1 REDIRECT, 3 REMOVE
**Categories:** 3 MERGE
**Posts:** 28 KEEP, 1 IMPROVE, 5 MERGE, 6 REDIRECT, 12 REMOVE

---

## E. 301 REDIRECT MAP

Priority redirects (implement in `.htaccess` or Vercel `vercel.json`):

```
# Duplicate home
/home/ → /

# Merged duplicates
/category/blog/ → /blog/
/category/cities/ → /airports/
/category/europe/ → /airports/

# Service pages (not in V2 scope)
/yacht-booking/ → / (temporary)
/car-rental/ → / (temporary)

# High-value duplicate merges
/unlock-amazing-travel-deals-with-costcotravel-your-ultimate-guide/ → /costco-vacation/
/unlock-the-benefits-of-oyster-card-your-ultimate-guide-to-londons-transit-system/ → /unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system/
/easy-and-convenient-irctc-railway-booking-your-one-stop-solution-for-booking-train-tickets/ → /irctc-train-ticket-booking/
/unlock-fast-and-hassle-free-travel-with-tsa-precheck-your-guide-to-streamline-airport-security/ → /tsa-precheck-cost/
/maximize-convenience-and-save-time-with-tsa-precheck-your-complete-guide/ → /tsa-precheck-cost/
/cordelia-cruise-the-ultimate-luxury-experience-at-sea/ → TBD
/cordelia-cruise-unforgettable-luxury-travel-experience-for-discerning-travelers/ → TBD
/army-dts/ → /defense-travel-system/

# Remove (410 Gone for thin AI content)
/9-best-luxury-hotels-in-the-world/ → 410
/13-most-beautiful-islands-in-the-world/ → 410
/5-ways-to-tackle-air-travel-woes/ → 410
/10-best-tropical-vacations/ → 410
/top-rated-tourists-attractions-in-rome/ → 410
/top-10-must-visit-destinations-for-travel-enthusiasts/ → 410
/top-10-must-visit-destinations-around-the-world-explore-the-best-destinations-for-your-next-adventure/ → 410
/discover-top-10-must-visit-places-to-go-in-english-ideal-destinations-for-travelers/ → 410
/explore-the-enchanting-land-of-japan-plan-your-dream-visit-to-japan-today/ → 410
/explore-africas-stunning-wildlife-on-an-unforgettable-safari-adventure/ → 410
/the-ultimate-guide-to-packing-cubes-how-to-organize-and-maximize-space-in-your-travel-bags/ → 410
/discover-the-magic-of-plitvice-holiday-resort-your-ultimate-guide-to-the-perfect-vacation/ → 410
```

---

## F. NEW PAGES NEEDED (future phases)

| Priority | Page Type | From Legacy URLs |
|----------|-----------|-----------------|
| P1 | Home | `/`, `/home/` |
| P2 | Airports Hub | `/cities/`, `/europe/`, `/category/cities/`, `/category/europe/` |
| P2 | About | `/about/` |
| P2 | Contact | `/contact/` |
| P2 | London Decision Pages | 2× Oyster card posts |
| P2 | More Decision Pages | `/kayak-flights/`, `/google-flight-matrix/`, `/wego-flight/` |
| P3 | Question Pages | 15+ high-value tool guides |
| P3 | Guides Hub | `/solo-travel/`, `/travelogue/`, `/ef-ultimate-break/` |

---

## G. DANGEROUS URLs (high risk if broken)

| URL | Risk | Reason |
|-----|------|--------|
| `/expedia-taap/` | HIGH | Strong brand keyword, potential affiliate/backlink value |
| `/google-flight-matrix/` | HIGH | Google brand keyword, flight tool intent |
| `/tsa-precheck-cost/` | HIGH | Massive evergreen search volume |
| `/irctc-train-ticket-booking/` | HIGH | Indian Railways — enormous audience |
| `/bart-trip-planner/` | HIGH | SF Bay Area transit — regional authority |
| `/defense-travel-system/` | MEDIUM | US military niche — unique content |
| `/points-guy/` | MEDIUM | Strong brand keyword |
| `/london/` | MEDIUM | Core V2 market — rebuild as hub |

---

## H. PRE-DNS-CHANGE CHECKLIST

- [ ] V2 Home built and deployed
- [ ] V2 About and Contact pages built
- [ ] Airports Hub built (at minimum placeholder)
- [ ] All 301 redirects prepared in `vercel.json`
- [ ] SSL certificate confirmed on Vercel
- [ ] WordPress backup (full: files + database)
- [ ] Search Console access obtained (verify ownership)
- [ ] AdSense account ready (units prepared)
- [ ] DNS TTL lowered to 300s (48h before switch)
- [ ] Staging test: V2 on temporary subdomain verified
- [ ] All redirects tested on staging
- [ ] SEO metadata verified on all new pages
- [ ] 410s configured for removed content
- [ ] Sitemap generated for V2

## I. POST-MIGRATION CHECKLIST

- [ ] DNS switched (A record → Vercel)
- [ ] SSL active (Vercel auto-provision)
- [ ] All 301s verified live
- [ ] 410s returning correct status
- [ ] Search Console: submit new sitemap
- [ ] Search Console: Change of Address tool
- [ ] Monitor 404 reports in Search Console (72h)
- [ ] AdSense units activated
- [ ] WordPress instance kept online at subdomain for 30 days
- [ ] Old sitemap removed, new sitemap submitted
- [ ] Monitor rankings for high-value pages (weekly × 4 weeks)
- [ ] Fix any broken redirects discovered post-launch

---

**Audit complete.** No code changed. No DNS touched. No deploy executed.
