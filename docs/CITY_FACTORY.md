# Travelvus City Factory V1

**Phase 108.2**
**Date: 2026-07-17**

---

## Overview

The City Factory makes adding a new city a data-entry exercise. After this framework, zero engine, reasoning, or UI code changes are required.

---

## Quick Start: Adding a City

### Step 1: Register the city

```typescript
// src/data/cities.ts
// Add to SUPPORTED_CITIES array and CITY_REGISTRY:
{
  paris: {
    id: "paris",
    label: "Paris",
    country: "France",
    currency: "EUR",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", fullName: "Paris Charles de Gaulle (CDG)" },
      { code: "ORY", name: "Orly", fullName: "Paris Orly (ORY)" },
    ],
    defaultDestination: "central-paris",
  },
}
```

### Step 2: Create destination dataset

```bash
# Copy template
cp src/data/london-destinations.ts src/data/paris-destinations.ts
# Replace all London-specific data with Paris data
```

### Step 3: Add Quick Compare scenario

```typescript
// src/components/compare/QuickCompare.tsx — getInitialForCity()
case "paris":
  return {
    optionA: { ticketPrice: "€80", origin: "Berlin · BER", destination: "Paris · CDG", ... },
    optionB: { ticketPrice: "€95", origin: "Berlin · BER", destination: "Paris · ORY", ... },
  };
```

### Step 4: Run validator

```typescript
import { validateCity } from "@/lib/__dev__/city-factory";
const result = validateCity("paris");
console.log(result.ready); // true → production-ready
```

### Step 5: Run tests + deploy

```bash
npm test
npm run test:e2e
npm run build
npx vercel --prod --yes
```

---

## Contracts

### CityMetadata (cities.ts)

| Field | Required | Description |
|-------|----------|-------------|
| id | Yes | URL-safe kebab-case ID |
| label | Yes | Display name |
| country | Yes | Country name |
| currency | Yes | ISO currency code |
| airports | Yes | Min 2, each with code/name/fullName |
| defaultDestination | Yes | Destination ID for legacy URLs |

### Destination Dataset

| Field | Required |
|-------|----------|
| id | Yes |
| label, shortLabel | Yes |
| description | Yes |
| zone | Yes |
| representativeStation | Yes |
| transfers (per airport) | Yes |
| sourceLabel, sourceDate, reviewedDate | Yes |

### Transfer Profile

| Field | Required | Type |
|-------|----------|------|
| transferCostEUR | Yes | number > 0 |
| transferDurationMin | Yes | number > 0 |
| mode | Yes | string |
| interchangeCount | Yes | number >= 0 |
| serviceWindow | Yes | string |
| isIllustrative | Yes | boolean |

---

## Validator

```typescript
import { validateCity, validateAllCities } from "@/lib/__dev__/city-factory";

// Single city
const result = validateCity("paris");
console.log(result.ready, result.passed, result.failed);

// All cities
const all = validateAllCities();
all.forEach((r) => console.log(r.cityLabel, r.ready));
```

Checks:
- Registry presence
- Airport count (≥2)
- Destination count (≥5)
- All transfer profiles complete
- All required fields present
- Costs and durations positive
- Currency declared
- Default destination set
- URL-safe city ID

---

## Production Checklist

1. [ ] CityId registered in src/data/cities.ts
2. [ ] Airport profiles defined (min 2)
3. [ ] Currency declared
4. [ ] Default destination set
5. [ ] Destination dataset created
6. [ ] Min 5 destination zones with complete transfer profiles
7. [ ] All transfer fields populated and valid
8. [ ] Source metadata present (sourceLabel, sourceDate, reviewedDate)
9. [ ] Quick Compare: city selectable, canonical scenario defined
10. [ ] Result page: city + destination summary visible
11. [ ] Airport names correct in verdict
12. [ ] Edit panel: destination selector works
13. [ ] Share URL preserves city + destination
14. [ ] isSupportedComparison returns true for airport pair
15. [ ] Validator returns ready=true
16. [ ] Browser tests pass (Home → City → Result → Edit → Revert)
17. [ ] Mobile 390px: no overflow
18. [ ] Documentation complete

---

## Template Generator

```typescript
import { createCityTemplate } from "@/lib/__dev__/city-factory";

const amsterdam = createCityTemplate({
  cityId: "amsterdam",
  cityLabel: "Amsterdam",
  country: "Netherlands",
  currency: "EUR",
  airports: [
    { code: "AMS", name: "Schiphol", fullName: "Amsterdam Schiphol (AMS)" },
  ],
  defaultDestination: "centrum",
  destinationPlaceholders: ["centrum", "zuid", "noord", "oost", "west"],
});

console.log(amsterdam.destinationFile);    // src/data/amsterdam-destinations.ts
console.log(amsterdam.checklistItems);     // 18-item checklist
```

---

## Paris Template

Already generated in `city-factory.ts`:

```typescript
export const PARIS_TEMPLATE = createCityTemplate({
  cityId: "paris",
  cityLabel: "Paris",
  country: "France",
  currency: "EUR",
  airports: [
    { code: "CDG", name: "Charles de Gaulle", fullName: "Paris Charles de Gaulle (CDG)" },
    { code: "ORY", name: "Orly", fullName: "Paris Orly (ORY)" },
  ],
  defaultDestination: "central-paris",
  destinationPlaceholders: [
    "central-paris", "la-defense", "montparnasse", "gare-du-nord", "bercy",
  ],
});
```

The template is ready — only transfer data needs to be researched and entered.

---

## Future Cities

Adding any of these requires only the 5-step process above:

- Amsterdam (AMS)
- Frankfurt (FRA)
- Madrid (MAD)
- Barcelona (BCN)
- Rome (FCO/CIA)
- Milan (MXP/LIN)
- Lisbon (LIS)
- Dublin (DUB)
- Dubai (DXB)
- Zurich (ZRH)
- Tokyo (NRT/HND)
