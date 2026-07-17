# Interactive Decision Engine V1 — Browser QA

**Phase 107.1B**
**Date: 2026-07-17**
**Production: https://www.travelvus.com**

---

## Canonical Test Scenario

| Parameter | Option A (Stansted) | Option B (Heathrow) |
|-----------|-------------------|---------------------|
| Ticket price | €58 | €126 |
| Origin | Berlin · BER | Berlin · BER |
| Destination | London · STN | London · LHR |
| Departure | 20:40 | 14:10 |
| Arrival | 23:15 | 16:45 |

**Production Result URL:**
```
/result?at=58&af=Berlin+%C2%B7+BER&at2=London+%C2%B7+STN&ad=20%3A40&aa=23%3A15&bt=126&bf=Berlin+%C2%B7+BER&bt2=London+%C2%B7+LHR&bd=14%3A10&ba=16%3A45
```

**Default recommendation:** Option B (Heathrow) — €33 cheaper, 2h 55m faster.

**Baggage edit:** Remove checked bag from Option A (−€45). Winner changes from B to A.

---

## Quick Compare Form

- **Home page:** `/#compare`
- **Submit button:** `aria-label="Reveal the real winner"`
- **Fields:** ticket price, origin, destination, departure time, arrival time (×2 options)
- **Fields use:** `aria-label` attributes matching the field labels
- **Navigation:** `encodeCompareParams()` → router.push → `/result?`

---

## Result Page Structure

| Order | Section | Selector |
|-------|---------|----------|
| 1 | Calculation Cascade | Animated (transient, ~4s) |
| 2 | TravelvusVerdict | `.verdict-block` |
| 3 | Real Cost | `text=Real trip cost` |
| 4 | Door-to-Door | `text=Door-to-door time` |
| 5 | RecommendationEvidence | `text=What this recommendation is based on` |
| 6 | DecisionIntelligence | `text=Conditionally recommended` (state label) |
| 7 | Edit panel | `role=button[name="Edit options"]` |
| 8 | Continuation links | `text=Compare another pair` |

### Interactive Controls

| Control | Selector |
|---------|----------|
| Edit toggle | `role=button[name="Edit options"]` |
| Remove bag | `role=button[name=/Remove.*45/]` |
| Restore bag | `role=button[name=/Restore.*45/]` |
| Undo change | `role=button[name=/Undo/]` |
| Keep change | `role=button[name=/Keep/]` |
| Flip details | `details > summary` (progressive disclosure) |
| Unknowns details | `details > summary` (progressive disclosure) |

---

## Running Browser Tests

```bash
# Against production
npm run test:e2e:production

# Against local dev
BASE_URL=http://localhost:3000 npm run test:e2e

# All projects (desktop + mobile)
npm run test:e2e:all

# Mobile only
npm run test:e2e:mobile
```

---

## Test Journeys (10)

1. **Home to Result** — complete canonical flow
2. **Decision Consistency** — verdict, evidence, intelligence all agree
3. **Edit Changes Result** — bag removal flips recommendation
4. **Edit Does Not Change** — unchanged feedback
5. **Revert** — undo restores original
6. **Direct URL** — refresh survives, editing works
7. **Unsupported/Invalid** — honest messaging, no crash
8. **Keyboard** — full keyboard interaction
9. **Reduced Motion** — instant result, no animation block
10. **Mobile** — no overflow at 390px, readable content

---

## Known Limitations

1. Screenshots must be captured manually or via a separate Playwright screenshot script
2. No visual regression comparison pipeline
3. Tests target production by default (requires internet)
4. Cascade timing affects test duration (~4s per test)
5. Mobile tests use Pixel 5 viewport (390×844)
