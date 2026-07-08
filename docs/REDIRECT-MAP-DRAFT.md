# Travelvus V2 — Redirect Map Draft

**Status:** DRAFT — DO NOT IMPLEMENT YET
**Date:** 2026-07-08
**Confidence:** PENDING Search Console data

---

## HIGH CONFIDENCE (7 redirects — confirmed duplicates)

```
# TSA PreCheck duplicates
/unlock-fast-and-hassle-free-travel-with-tsa-precheck-your-guide-to-streamline-airport-security/ → /tsa-precheck-cost/
/maximize-convenience-and-save-time-with-tsa-precheck-your-complete-guide/ → /tsa-precheck-cost/

# IRCTC duplicate
/easy-and-convenient-irctc-railway-booking-your-one-stop-solution-for-booking-train-tickets/ → /irctc-train-ticket-booking/

# Costco duplicate
/unlock-amazing-travel-deals-with-costcotravel-your-ultimate-guide/ → /costco-vacation/

# Oyster Card duplicate
/unlock-the-benefits-of-oyster-card-your-ultimate-guide-to-londons-transit-system/ → /unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system/

# Army DTS duplicate
/army-dts/ → /defense-travel-system/

# Duplicate home
/home/ → /
```

---

## MEDIUM CONFIDENCE (need Search Console verification)

```
# Cordelia Cruise — pending content audit to determine primary
# One of these → the other (TBD after content review)
# /cordelia-cruise-the-ultimate-luxury-experience-at-sea/
# /cordelia-cruise-unforgettable-luxury-travel-experience-for-discerning-travelers/

# Categories — redirect to V2 hubs when built
# /category/blog/ → /blog/
# /category/cities/ → /airports/
# /category/europe/ → /airports/
```

---

## LOW CONFIDENCE (pending evidence)

```
# Service pages — no V2 equivalent exists yet
# /yacht-booking/ → PENDING
# /tours-and-activities/ → PENDING
# /car-rental/ → PENDING
# /airport-transfer/ → PENDING

# Thin content — proposed 410 but pending Search Console confirmation
# /9-best-luxury-hotels-in-the-world/ → 410 CANDIDATE
# /13-most-beautiful-islands-in-the-world/ → 410 CANDIDATE
# /5-ways-to-tackle-air-travel-woes/ → 410 CANDIDATE
# /10-best-tropical-vacations/ → 410 CANDIDATE
# /top-rated-tourists-attractions-in-rome/ → 410 CANDIDATE
# /top-10-must-visit-destinations-for-travel-enthusiasts/ → 410 CANDIDATE
# /top-10-must-visit-destinations-around-the-world-explore-the-best-destinations-for-your-next-adventure/ → 410 CANDIDATE
# /discover-top-10-must-visit-places-to-go-in-english-ideal-destinations-for-travelers/ → 410 CANDIDATE
# /explore-the-enchanting-land-of-japan-plan-your-dream-visit-to-japan-today/ → 410 CANDIDATE
# /explore-africas-stunning-wildlife-on-an-unforgettable-safari-adventure/ → 410 CANDIDATE
# /the-ultimate-guide-to-packing-cubes-how-to-organize-and-maximize-space-in-your-travel-bags/ → 410 CANDIDATE
# /discover-the-magic-of-plitvice-holiday-resort-your-ultimate-guide-to-the-perfect-vacation/ → 410 CANDIDATE
```

---

## Implementation Notes

- Use `vercel.json` for redirects (not next.config rewrites)
- 301 for permanent moves, 410 for deliberately removed content
- Test all redirects on staging before production DNS switch
- Do NOT implement until Search Console data confirms zero traffic for 410 candidates
