# Airport Choice Hub Architecture

**Phase 110.0**
**Date: 2026-07-17**

---

## Overview

The Airport Choice Hub is a discovery layer sitting above the Decision Engine. It helps users decide *which airport to compare* before entering the detailed comparison.

The hub **never calculates recommendations itself.** All decisions are generated exclusively by the existing Decision Engine.

---

## Architecture

```
City Page (e.g., /paris-airports)
        │
        ▼
Airport Choice Hub (/paris/airport-choice/)
        │
        ├── Airport overview cards (strengths, watch-outs, best-for)
        ├── Quick facts (transfer costs/times per airport)
        ├── Traveller scenarios (with prefilled compare links)
        ├── CTA → Interactive Decision Engine (/result?city=paris&dest=...)
        └── Related guides
                │
                ▼
Interactive Decision Engine (/result)
        │
        ├── Calculation Cascade
        ├── TravelvusVerdict
        ├── RecommendationEvidence
        ├── DecisionIntelligence
        └── Edit + Share
```

---

## Hub Data Model

```typescript
interface CityAirportHub {
  cityId: CityId;
  title: string;
  subtitle: string;
  heroDescription: string;
  airports: HubAirportCard[];
  quickFacts: HubQuickFact[];
  scenarios: HubScenario[];
  comparisonLinks: HubComparisonLink[];
  relatedGuides: { label: string; href: string }[];
  methodology: string;
  lastReviewed: string;
}
```

Each scenario carries a `prefilledParams` URL that launches the Decision Engine with the correct city, destination, and airport pair.

---

## SEO Purpose

The hub serves as:
1. **Top-of-funnel landing page** — "Which Paris airport should I choose?"
2. **Internal linking hub** — connects city pages, comparisons, and guides
3. **Schema-ready** — structured data for airport choice questions
4. **Decision education** — explains methodology before the user commits

---

## Internal Linking

```
/paris-airports (city overview)
    ↓
/paris/airport-choice/ (hub — THIS PAGE)
    ↓
/result?city=paris&dest=central-paris (interactive comparison)
    ↓
/guides/cdg-vs-orly (editorial guide)
/guides/best-airport-for-central-paris (neighbourhood guide)
```

---

## Factory Support

The City Factory checklist now includes hub requirements:
- Airport Choice Hub page created
- Airport cards with strengths/watch-outs/best-for
- Traveller scenarios with prefilled compare links
- Quick facts table
- Related guides linked

---

## Future Cities

Each future city should create its hub at `/{city}/airport-choice/` following the Paris template. Use `src/lib/hub-model.ts` for types and `buildHubCompareUrl()` for prefilled links.
