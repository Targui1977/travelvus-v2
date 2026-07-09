# Travelvus V2 — Home Strategy + Experience Contract

**Date:** 2026-07-08
**Phase:** 25
**Status:** STRATEGY APPROVED — Ready for experience design
**Route decision:** `/` stays as Home + Quick Compare (single page, two zones)

---

## A. RECOMMENDED HOME ROLE

### Home is the product explainer + primary entry point.

It must do three things:

1. **Explain what Travelvus does** — in one sentence, to a cold visitor.
2. **Prove it works** — by showing the three Decision Pages as live evidence.
3. **Hand off to action** — Quick Compare as the primary CTA.

Home is NOT: a marketing landing page, a blog index, an airport directory, a travel guide, or a brand statement page.

### The core promise

> "The ticket price shows one number. Travelvus compares the real trip — door to door, with your bags, at your time of day."

## B. ROUTE STRATEGY

### `/` = Home + Quick Compare (single page)

**Why not move Quick Compare to `/compare`:**

1. The current `/` already has organic presence (even if minimal). Moving it creates a redirect burden.
2. Quick Compare IS the product. Making the homepage a separate marketing page before the tool adds friction.
3. Two Decision Pages already prove the model. The homepage just needs to frame them.

**Architecture:**

```
/  →  Home section (explanation + evidence + CTA)
       ↓
       Quick Compare section (same component, scroll down or CTA jump)
```

### No new routes needed.

`/compare/` does not need an index page yet. The three Decision Pages are linked from Home as evidence cards.

## C. HOME PAGE INFORMATION ARCHITECTURE

### Section order (above the fold first)

| # | Section | Purpose | Type |
|---|---------|---------|------|
| 1 | **Hero** | Product promise + primary CTA | Static |
| 2 | **How it works** | 3-step method: bring flights → real cost → verdict | Static |
| 3 | **Decision Pages** | 3 cards: LHR/STN, LHR/LGW, LGW/STN | Static |
| 4 | **Quick Compare** | Existing component, scrolled or linked | Existing |
| 5 | **What Travelvus can answer** | Supported scenario boundaries | Static |
| 6 | **Footer** | Links, methodology, AdSense zone | Static |

### Total: 6 sections. Compact. No dead zones.

## D. SECTIONS — DETAIL

### 1. Hero

```
┌──────────────────────────────────────────────┐
│ KICKER: Travelvus                             │
│                                               │
│ H1 (serif 46px):                              │
│ The ticket price shows one number.            │
│ We compare the real trip.                     │
│                                               │
│ Sub (sans 16px, muted):                       │
│ Bring two flights you already found.          │
│ Travelvus compares door-to-door costs,        │
│ transfer times, baggage, and hidden fees.     │
│                                               │
│ [Compare your flights →]  (navy CTA)          │
│                                               │
│ Evidence: 3 London airport pairs verified.    │
│ Heathrow, Gatwick, Stansted — Jul 2026.       │
└──────────────────────────────────────────────┘
```

**CTA links to:** Quick Compare section below (anchor) OR directly to `/` Quick Compare input focus.

### 2. How it works

Three concise editorial steps. Serif numbers. Sans explanation.

```
01. Bring two flights you already found.
    Ticket price, departure airport, arrival airport,
    departure and arrival times. That's it.

02. Travelvus compares the real trip.
    Checked baggage, seat fees, airport transfers,
    and door-to-door time — not just the ticket.

03. Get a verdict you can challenge.
    See who wins, by how much, and what would
    change the answer. Edit variables. Undo. Keep.
```

No illustrations. No icons. No diagrams. Just text and space.

### 3. Decision Pages — evidence cards

Three cards in a row. Each: airport pair + one-line insight + link.

```
┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐
│ Heathrow vs Stansted │ │ Heathrow vs Gatwick  │ │ Gatwick vs Stansted  │
│                     │ │                     │ │                     │
│ "The €58 ticket     │ │ "Gatwick usually    │ │ "Stansted saves €20 │
│  produced a €204    │ │  wins on money —    │ │  on the flight —    │
│  journey."          │ │  but your destina-  │ │  but €16 more in    │
│                     │ │  tion changes the   │ │  fixed costs."      │
│                     │ │  margin."           │ │                     │
│ → Compare           │ │ → Compare           │ │ → Compare           │
└─────────────────────┘ └─────────────────────┘ └─────────────────────┘
```

**Design constraint:** NOT generic blog cards. NOT airport photos. Each card shows the central insight of that Decision Page in one sentence — the proof that Travelvus works.

### 4. Quick Compare

The existing component. Scrolls into view or CTA jumps to it. No redesign needed.

### 5. What Travelvus can answer

Honest boundary statement. Compact. Editorial.

```
┌──────────────────────────────────────────────┐
│ What Travelvus can compare today              │
│                                               │
│ Currently verified for London airports:       │
│ Heathrow, Gatwick, and Stansted.              │
│                                               │
│ For these airports, we compare:               │
│ real cost (ticket + baggage + transfer)       │
│ door-to-door journey time                     │
│ what would change the winner                  │
│ hidden trade-offs                             │
│                                               │
│ For other airports, you can compare tickets   │
│ and we'll tell you honestly when we don't     │
│ yet have the full transfer data.              │
└──────────────────────────────────────────────┘
```

No overpromising. No fake universality.

### 6. Footer

Minimal. Links: Home, Compare (anchor), LHR/STN, LHR/LGW, LGW/STN. Methodology note. Ad zone placeholder.

## E. INTERNAL LINKS

```
Home (/)
  ├── Quick Compare (anchor #compare or scroll)
  ├── /compare/heathrow-vs-stansted/
  ├── /compare/heathrow-vs-gatwick/
  ├── /compare/gatwick-vs-stansted/
  └── /result (via Quick Compare flow)

Decision Pages
  └── Home (/) via header wordmark

Quick Compare
  └── /result (via CTA)
  └── Home (same page, scroll up)
```

Home does NOT link to Airports Hub or Guides Hub (they don't exist yet).

## F. SEO PLAN

### H1

> "Compare the real cost of your flights — not just the ticket price."

### Title

> "Travelvus — Compare Two Flights and Find Out Which Really Wins"

### Meta description

> "Found two flights and can't decide? Travelvus compares the real trip — door-to-door costs, baggage, transfers, and time. Currently verified for London airports."

### Structure

- One H1
- Three H2s (How it works, Real comparisons, Compare your flights)
- Three Decision Page cards as structured content
- Server-rendered (SSG)
- Crawlable methodology and boundaries

### Canonical

`/` (unchanged — Quick Compare was already `/`)

## G. RISKS

| Risk | Severity | Mitigation |
|------|----------|-----------|
| Home dilutes Quick Compare focus | MEDIUM | Quick Compare remains visually prominent, not buried |
| 3 cards look like generic blog index | MEDIUM | Each card shows the product insight, not an article title |
| Boundary section sounds defensive | LOW | Framed as honesty, not limitation. "We tell you when we don't know." |
| Mobile scroll too long | MEDIUM | Compact sections. CTA sticky. Hero → cards → Quick Compare. No prose bloat. |
| Home before all airport pairs exist | LOW | 3 pairs is sufficient proof. More can be added later. |

## H. EXACT NEXT PHASE

**Phase 26: Home Experience Design + Implementation.**

1. Design the Home zone above Quick Compare on `/`
2. Keep Quick Compare component unchanged
3. Build the 5 new sections (hero, how-it-works, evidence cards, boundaries, footer)
4. No new routes. No redirects. All existing routes unchanged.
5. Deploy when approved.

---

**STRATEGY COMPLETE.** No code. No design. No deploy. Awaiting approval to proceed.
