# Travelvus V2 — Remote QA Checklist

**Preview URL:** `https://travelvus-v2-ibaot1qqi-tarek-mihoubi-s-projects.vercel.app`

> Prerequisite: Disable Deployment Protection in Vercel Dashboard → Settings → Deployment Protection.

---

## 1. Routes — Basic Smoke Test

| # | Route | Check |
|---|-------|-------|
| 1.1 | `/` | Page loads. Heading: "You found two flights. Which really wins?" |
| 1.2 | `/` | Option A fields: €58, BER → STN, 20:40 → 23:15 |
| 1.3 | `/` | Option B fields: €126, BER → LHR, 14:10 → 16:45 |
| 1.4 | `/` | "vs" divider visible between A and B |
| 1.5 | `/` | CTA button: "See which option really wins" |
| 1.6 | `/result` | Page loads. Verdict: "Option B — Heathrow — is the better overall deal." |
| 1.7 | `/result` | Real Cost: A = €204, B = €171 |
| 1.8 | `/result` | Door-to-Door: 2h 55m gap hero visible |
| 1.9 | `/result` | Decision Threshold: "The line" section present |
| 1.10 | `/compare/heathrow-vs-stansted` | Page loads. H1: "Is Stansted actually cheaper than Heathrow?" |
| 1.11 | `/compare/heathrow-vs-stansted` | Answer: "Usually no. Heathrow wins for most travellers." |
| 1.12 | `/compare/heathrow-vs-stansted` | Live comparison module visible (€204 vs €171) |
| 1.13 | `/compare/heathrow-vs-stansted` | Scenarios grid: "Try your situation" + 5 scenario cards |
| 1.14 | `/compare/heathrow-vs-stansted` | CTA: "Open Compare →" links to `/` |

---

## 2. Flows — End-to-End

### Flow A: Quick Compare → Full Result (canonical)

| # | Step | Expected |
|---|------|----------|
| 2A.1 | Open `/` | Canonical data pre-filled |
| 2A.2 | Click "See which option really wins" | Navigates to `/result?at=58&...` |
| 2A.3 | Check URL | Contains `at=58` (not `at=€58`) |
| 2A.4 | Verify Verdict | "Option B — Heathrow — is the better overall deal." |
| 2A.5 | Verify Real Cost | A = €204, B = €171 |
| 2A.6 | Verify time | A = 8h 05m, B = 5h 10m, saves 2h 55m |

### Flow B: Edited ticket → dynamic verdict

| # | Step | Expected |
|---|------|----------|
| 2B.1 | At `/`, change A ticket to `20` | Field shows "€20" |
| 2B.2 | Click CTA | Navigates to `/result?at=20&...` |
| 2B.3 | Verify Real Cost | A = €166, B = €171 |
| 2B.4 | Verify Verdict | A wins on money, NOT B |
| 2B.5 | Confirm headline | Contains "wins on money" |

### Flow C: Unsupported airport → partial result

| # | Step | Expected |
|---|------|----------|
| 2C.1 | At `/`, change A destination to `Paris · CDG` | Field updated |
| 2C.2 | Click CTA | Navigates to `/result` |
| 2C.3 | Verify | Only ticket comparison shown (no STN taxi, no canonical costs) |
| 2C.4 | Verify | Door-to-Door and Decision Threshold NOT shown |

### Flow D: Verdict Changed

| # | Step | Expected |
|---|------|----------|
| 2D.1 | Open `/result` with canonical data | B wins (€204 vs €171) |
| 2D.2 | Click "Edit options" | Edit panel appears |
| 2D.3 | Click "Remove (−€45)" | Verdict Changed banner appears |
| 2D.4 | Verify banner | "Verdict changed" chip + cause text |
| 2D.5 | Verify cause | "You removed Option A's checked bag (€45)" |
| 2D.6 | Verify new Verdict | "Option A — Stansted — now wins on money." |
| 2D.7 | Verify Real Cost | A = €159, edited row marked with old→new |
| 2D.8 | Verify robustness | "depends on the estimated night taxi cost... below €86" |
| 2D.9 | Click "↺ Undo change" | Restores A = €204, B wins again |
| 2D.10 | Repeat edit, click "Keep this change" | Banner disappears, A = €159 persists |

### Flow E: Decision Page → Quick Compare

| # | Step | Expected |
|---|------|----------|
| 2E.1 | Open `/compare/heathrow-vs-stansted` | Page loads correctly |
| 2E.2 | Click "Remove checked bag (−€45)" in live comparison | A changes from €204 to €159 |
| 2E.3 | Click "Restore checked bag (+€45)" | A returns to €204 |
| 2E.4 | Click "Open Compare →" | Navigates to `/` |

### Flow F: Refresh stability

| # | Step | Expected |
|---|------|----------|
| 2F.1 | At `/result` (any state), press F5 | Page reloads without error |
| 2F.2 | Browser back button | Returns to previous page correctly |
| 2F.3 | Direct access `/result` (no params) | Shows canonical fallback (€204 vs €171) |

### Flow G: Share

| # | Step | Expected |
|---|------|----------|
| 2G.1 | At `/result` with params, click "Share" | Web Share API opens OR clipboard copy |
| 2G.2 | Open shared/copied URL in new tab | Same state reproduced |

---

## 3. Responsive — Visual QA

Test each route at these widths (Chrome DevTools responsive mode):

| Width | Device |
|-------|--------|
| 1440px | Desktop |
| 1024px | Tablet landscape |
| 720px | Breakpoint threshold |
| 390px | iPhone 14 |
| 360px | Small Android |

### `/` (Quick Compare)

| # | Width | Check |
|---|-------|-------|
| 3.1 | 1440 | Three-column layout: A \| vs \| B |
| 3.2 | 720 | Still desktop layout (three columns visible) |
| 3.3 | 390 | Mobile: A/B tabs visible, single column fields |
| 3.4 | 390 | Tab switcher works (tap B → shows B fields) |
| 3.5 | 390 | Sticky CTA footer visible |
| 3.6 | 390 | No horizontal overflow |
| 3.7 | 360 | All fields visible, no text cut off |
| 3.8 | 360 | Dep/Arr fields side-by-side |

### `/result` (Full Result)

| # | Width | Check |
|---|-------|-------|
| 3.9 | 1440 | Full result: Verdict → Real Cost → Door-to-Door → Threshold |
| 3.10 | 390 | Mobile: sticky winner strip visible |
| 3.11 | 390 | Verdict readable at 26px serif |
| 3.12 | 390 | Real Cost stacked (A above B) |
| 3.13 | 390 | Door-to-door gap 64px, totals below |
| 3.14 | 390 | Decision Threshold: both ticks visible |
| 3.15 | 390 | Verdict Changed: Undo/Keep footer sticky |
| 3.16 | 360 | No horizontal overflow |
| 3.17 | 360 | All section labels readable |

### `/compare/heathrow-vs-stansted` (Decision Page)

| # | Width | Check |
|---|-------|-------|
| 3.18 | 1440 | Centered editorial layout: question → answer → live comparison |
| 3.19 | 390 | Value before prose: answer visible immediately |
| 3.20 | 390 | Live comparison: A vs B readable |
| 3.21 | 390 | Scenario cards stacked (single column) |
| 3.22 | 390 | Decision Threshold comprehensible |
| 3.23 | 360 | No horizontal overflow |
| 3.24 | 360 | CTA button accessible |

---

## 4. Visual QA — Fidelity

| # | Check | Expected |
|---|-------|----------|
| 4.1 | Fonts loaded | Instrument Serif (headings), Geist (body), IBM Plex Mono (numbers/kickers) |
| 4.2 | Fonts self-hosted | No Google Fonts network requests in DevTools |
| 4.3 | Paper background | Warm `#F4F1EA` on paper containers |
| 4.4 | Navy Verdict | Dark `#1E2A33` background, paper text |
| 4.5 | Copper accent | `#B85C38` — used sparingly (threshold, verdict highlight) |
| 4.6 | No gradients | Zero CSS gradients anywhere |
| 4.7 | No decorative shadows | Only outer container shadow present |
| 4.8 | Hairline dividers | `1px solid #E6DDCC` between sections |
| 4.9 | Decision Threshold | Two ticks, one copper segment, no extra elements |
| 4.10 | Serif count | ≤ 3 serif elements per screen (not counting same-element repetition) |
| 4.11 | Italic usage | Only on functional words (Heathrow in verdict, "decision debt") |
| 4.12 | Winner signal | Token + weight + position, NOT green/red |
| 4.13 | Loser color | Grey `#8A959D`, never red |
| 4.14 | Quick Compare | Underline fields (not boxed inputs) |
| 4.15 | Quick Compare | "vs" serif italic with vertical rails |

---

## 5. Technical QA

| # | Check | How |
|---|-------|-----|
| 5.1 | Console errors | F12 → Console. Should be empty (ignore browser extension warnings) |
| 5.2 | 404 assets | Network tab → filter by 404. Should be empty. |
| 5.3 | Font requests succeed | Network tab → Font. All woff2 should be 200. |
| 5.4 | CSS loaded | Elements → Styles. Custom properties (`--paper`, `--navy`, etc.) present. |
| 5.5 | Hydration errors | Console. No "hydrated but attributes didn't match" (except `suppressHydrationWarning` on body for extensions). |
| 5.6 | Share button | Click "Share" → check clipboard or share dialog |
| 5.7 | URL params survive refresh | At `/result?at=58&...`, refresh → same content |
| 5.8 | `Add details to refine` | Not an active link (no navigation on click) |
| 5.9 | Dead nav items | "Airports" and "Guides" in header are not clickable links |
| 5.10 | No `href="#"` | Search page source for `href="#"` — should be 0 results |
| 5.11 | No AdSense scripts | Search page source for `adsbygoogle` — should be 0 results |
| 5.12 | No Vercel-specific APIs | Search source for `@vercel/` — should be 0 results |

---

## 6. SEO — Basic

| # | Route | Check | Expected |
|---|-------|-------|----------|
| 6.1 | `/` | `<title>` | "Travelvus — Which really wins?" |
| 6.2 | `/` | `<meta name="description">` | Present, non-empty |
| 6.3 | `/` | `<h1>` count | Exactly 1 |
| 6.4 | `/compare/heathrow-vs-stansted` | `<title>` | "Is Stansted Actually Cheaper Than Heathrow? \| Travelvus" |
| 6.5 | `/compare/heathrow-vs-stansted` | `<meta name="description">` | Present, contains relevant keywords |
| 6.6 | `/compare/heathrow-vs-stansted` | `<link rel="canonical">` | "/compare/heathrow-vs-stansted" |
| 6.7 | `/compare/heathrow-vs-stansted` | `<h1>` count | Exactly 1 |
| 6.8 | All routes | Server-rendered content | View page source → content visible without JS |
| 6.9 | All routes | Semantic HTML | `header`, `nav`, `main`/`section`, `h1`-`h3`, proper nesting |

---

## 7. Quick Reference — Known Acceptable Warnings

- **`cz-shortcut-listen` hydration mismatch**: Browser extension (ColorZilla). Ignore — `suppressHydrationWarning` is on `<body>`.
- **Vercel Deployment Protection redirect**: Site requires login. Disable in Dashboard → Settings → Deployment Protection.
