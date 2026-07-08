# Travelvus V1 — Baseline Freeze

**Date:** 2026-07-08  
**Commit:** `f4c961e` (to be tagged `travelvus-v1-baseline`)  
**Production:** `https://travelvus-v2-16r95errl-tarek-mihoubi-s-projects.vercel.app`

---

## Approved Routes

| Route | Type | Description |
|-------|------|-------------|
| `/` | Static (SSG) | Quick Compare — bring two flights, get a verdict |
| `/result` | Dynamic (SSR) | Full Result + Verdict Changed — the complete decision surface |
| `/compare/heathrow-vs-stansted` | Static (SSG) | Decision Page — editorial + live comparison |

---

## Architecture

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 with CSS custom properties as canonical design tokens
- **Fonts:** Self-hosted (Instrument Serif, Geist Sans, IBM Plex Mono) — zero external CDN
- **State transfer:** URL search params (compact keys, normalized values)
- **SSR:** `/result` is server-rendered with content visible in HTML source
- **Testing:** Vitest — 42 test cases covering all critical pure functions
- **Zero Vercel-specific dependencies** — runs on any Next.js-compatible Node.js host

---

## Supported Comparison Contract

Only **BER → STN vs BER → LHR** receives the full rich result:

- Real Cost breakdown (5 cost lines per option)
- Door-to-Door time (8h05m vs 5h10m)
- Decision Threshold with measured ruler
- Secondary flip scenarios
- Decision Debt analysis

**Unsupported comparisons** (any other airport pair) receive a partial truth-safe result:
- Ticket price comparison only
- No invented transfer costs, door-to-door times, or thresholds

---

## Canonical Scenario

| | Option A (Stansted) | Option B (Heathrow) |
|---|---|---|
| Ticket | €58 | €126 |
| Checked bag | €45 | included |
| Seat | €12 | €12 |
| Origin → airport | €15 | €15 |
| Airport → Central | €74 (night taxi) | €18 (Piccadilly) |
| **Real cost** | **€204** | **€171** |
| Door-to-door | 8h 05m | 5h 10m |

**Verdict:** B wins by €33 and saves 2h 55m.

---

## Threshold Semantics (final)

- **Tie boundary** (break-even): A ticket = €25 (A total = B total = €171)
- **First winning fare** (displayed "The line"): A ticket = €24
- **Distance to winning** (canonical): 58 − 24 = €34
- At tie (€25): tie-safe language, no false "wins"
- At win (€24): A wins by €1
- All threshold values derived dynamically from current state

---

## Truth Contract Rules

1. All visible editorial text derives from current state, never from static MOCK_RESULT
2. `derive-content.ts` computes: editorial, threshold, flips, context strip, changed consequence
3. Secondary flips filter out already-applied changes
4. Verdict Changed only fires on genuine winner flip (oldWinner ≠ newWinner)
5. Estimations (e.g., taxi) flagged with robustness note showing dynamic break-even

---

## Test Suite

- **42 test cases** in 1 file (`src/lib/__tests__/truth-contract.test.ts`)
- Coverage: normalization (7), code extraction (2), comparison check (2), URL encoding (1), cost calculation (4), monetary winner (3), change detection (3), estimate threshold (1), verdict building (3), editorial derivation (3), threshold derivation (5), flip derivation (4), changed consequence (3)

---

## Known Intentional Limitations

- Only STN vs LHR receives the full rich result
- Unsupported comparisons receive partial truth-safe results (ticket comparison only)
- No universal airport data engine
- No backend, no database, no CMS
- No live fare API integration
- No real AdSense integration (placeholder structure only)
- Home, Airports Hub, Guides Hub not built
- "Add details to refine" is visual affordance only (non-functional)
- Airports/Guides in header nav are non-interactive (no pages exist)
- Door-to-door times are canonical data, not dynamically calculated from flight times
- Share uses Web Share API with clipboard fallback (URL-based, no account system)
- Decision Page threshold values are editorial/illustrative, not dynamically derived

---

## Git

- **Branch:** master
- **Remote:** none yet (local only)
- **Tag:** `travelvus-v1-baseline`
- **Reference files** (outside repo): `Travelvus Handoff Spec.html`, `Travelvus Hi-Fi.html`, `travelvus-hifi-final-full.png.png`
