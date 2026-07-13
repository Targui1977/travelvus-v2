# LEGACY ARTICLE FACTUAL REVIEW BACKLOG

**Created:** 2026-07-13 — Phase 89.2  
**Purpose:** Potentially unstable facts across all 18 legacy articles that should be verified in a future editorial audit.

---

## Priority: HIGH

Claims about current pricing, fees, or programme terms that may have changed.

| Article | Claim | Risk | Priority |
|---------|-------|------|----------|
| `/tsa-precheck-cost` | "TSA PreCheck costs $78 for a 5-year membership" | Fee changed by TSA | HIGH |
| `/tsa-precheck-cost` | "Renewal is $70 if completed online" | Renewal fee may have changed | HIGH |
| `/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide` | "Global Entry costs $100 for a 5-year membership" | Fee set by CBP, may change | HIGH |
| `/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide` | "TSA PreCheck is included with Global Entry" | Policy may change | HIGH |
| `/costco-vacation` | Costco membership pricing references | Membership fee changes annually | HIGH |
| `/expedia-taap` | TAAP commission rates | Commission structures change | HIGH |

## Priority: MEDIUM

Claims about provider counts, savings percentages, or platform capabilities.

| Article | Claim | Risk | Priority |
|---------|-------|------|----------|
| `/wego-flight` | "over 800 European providers" | Provider count changes | MEDIUM |
| `/wego-flight` | "save up to 30% on airfare" | Savings claim may not be current | MEDIUM |
| `/kayak-flights` | "more than 400 airlines" | Airline count changes over time | MEDIUM |
| `/kayak-flights` | "savings of up to 60% off" | Promotional claim may be outdated | MEDIUM |
| `/points-guy` | Credit card sign-up bonus amounts | Offers change frequently | MEDIUM |
| `/points-guy` | Points valuations | Valuation models change | MEDIUM |
| `/aaa-travel` | AAA membership benefits and discounts | Varies by region and year | MEDIUM |
| `/vrl-bus-booking` | VRL route network and bus types | Operator may change services | MEDIUM |
| `/irctc-train-ticket-booking` | Tatkal booking rules and timing | IRCTC policies change | MEDIUM |
| `/defense-travel-system` | DTS policies and workflow | Government system updates | MEDIUM |

## Priority: LOW

Claims about transport schedules, routes, or general travel advice.

| Article | Claim | Risk | Priority |
|---------|-------|------|----------|
| `/bart-trip-planner` | BART fares, schedules, Clipper card pricing | Transit agency updates | LOW |
| `/mta-trip-planner` | NYC subway fare ($2.90) | Fare increases periodically | LOW |
| `/trimet-trip-planner` | TriMet fares, MAX lines | Transit agency updates | LOW |
| `/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system` | Oyster daily/weekly caps | TfL adjusts annually | LOW |
| `/tsa-lock` | TSA lock approval criteria | TSA security policies | LOW |
| `/top-rated-tourists-attractions-in-rome` | Attraction entry fees, opening hours | Seasonal and annual changes | LOW |
| `/ultimate-guide-to-interrailing-explore-europe-by-train-with-ease` | Interrail pass prices and country count | Eurail updates annually | LOW |

---

## TOTAL: 24 potentially unstable claims across 18 articles

### Review cadence

- **HIGH priority**: Review every 6 months or when policy change is announced
- **MEDIUM priority**: Review annually
- **LOW priority**: Review when article receives a content update

### Remediation approach

When a claim is found to be outdated:
1. Update the factual claim in the source file
2. Update `lastReviewed` date in the LegacyArticleLayout props
3. Commit with message: `fact: update [claim] in [article-route]`
4. Deploy

---

**END OF BACKLOG**
