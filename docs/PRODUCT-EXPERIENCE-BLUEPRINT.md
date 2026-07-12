# TRAVELVUS V2 — PRODUCT EXPERIENCE BLUEPRINT

**Phase:** 88.1  
**Status:** FOUNDATION — Contract, state machine, and tests built. No visual cascade yet.  
**Date:** 2026-07-12  
**Owner approval:** Pending  

---

## TABLE OF CONTENTS

1. [Product Philosophy](#1-product-philosophy)
2. [Complete User Journey](#2-complete-user-journey)
3. [Interaction Timeline](#3-interaction-timeline)
4. [State Machine](#4-state-machine)
5. [Component Inventory](#5-component-inventory)
6. [Motion System](#6-motion-system)
7. [Accessibility](#7-accessibility)
8. [Responsive Behaviour](#8-responsive-behaviour)
9. [Architecture](#9-architecture)
10. [Implementation Roadmap](#10-implementation-roadmap)
11. [Risks](#11-risks)
12. [Alternative Concepts Considered](#12-alternative-concepts-considered)
13. [Why the Selected Concept is Superior](#13-why-the-selected-concept-is-superior)

---

## 1. PRODUCT PHILOSOPHY

### 1.1 The Core Belief

> Travelvus does NOT compare tickets. Travelvus compares journeys.

The user arrives having already found two flights. They paste them in. Travelvus calculates the REAL trip — baggage, transfers, time, hidden costs — and answers: **Which really wins?**

### 1.2 The Psychological Gap

The current flow is:

```
Fill fields → Click "Reveal the real winner" → Instant result
```

This is **too fast.** It does not communicate intelligence. The engine performs genuine reasoning — comparing costs, adding baggage, calculating transfers, weighing time against money — but the user never *sees* this reasoning. The result appears instantly, which paradoxically undermines trust. The user thinks: *"That was too quick. Is this just a simple calculator?"*

### 1.3 The Design Goal

Design a premium psychological journey between button click and final verdict that:

1. **Creates confidence** — not frustration  
2. **Communicates intelligence** — without fakery  
3. **Makes the verdict feel earned** — not simply displayed  
4. **Shows the reasoning** — each visible step maps to a real computation  

### 1.4 The Emotional Arc

```
Anticipation  →  Building confidence  →  Tension  →  Revelation  →  Understanding
(button click)   (steps unfolding)      (pause)     (verdict)      (explore reasoning)
```

### 1.5 Design Principles (Non-Negotiable)

| Principle | Meaning |
|-----------|---------|
| **No spinner** | Spinners say "waiting." Travelvus says "working." |
| **No fake AI chat** | Travelvus is a decision engine, not a chatbot. |
| **No fake typing** | Text does not type itself. Values appear when computed. |
| **No loading bar** | Loading bars pretend to measure progress. Steps represent real work. |
| **No meaningless percentages** | Every number shown is a computed value from the engine. |
| **Everything shown = real calculation step** | Each visible step corresponds to a function in the decision engine. |

### 1.6 The Tone

Travelvus is:

- **Serious**, not playful  
- **Measured**, not flashy  
- **Evidence-based**, not opinionated  
- **Confident**, not arrogant  
- **Transparent**, not opaque  

The experience must feel like a well-dressed analyst walking you through a dossier — not a tech demo, not a magic trick.

---

## 2. COMPLETE USER JOURNEY

### 2.1 The Full Arc (7 Phases)

```
PHASE 1: INTENT
User fills Quick Compare fields (unchanged from current)

PHASE 2: COMMITMENT
User clicks "Reveal the real winner"
Button transitions to inactive state
Form area begins to recede

PHASE 3: CALCULATION CASCADE (THE NEW EXPERIENCE)
Seven real calculation steps appear sequentially
Each step: computing → resolved with value
Completed steps persist, slightly dimmed
User watches the engine reason

PHASE 4: ANTICIPATION PAUSE
All seven steps complete
Brief moment of stillness (~800ms)
Completed steps compress into a summary ribbon
The navy Verdict area begins to emerge

PHASE 5: VERDICT REVEAL
The Travelvus Verdict block rises into view
Headline appears: "Heathrow wins."
Peach italic on the winner name
Three stats animate in with counter effect
Confidence tag + provenance appear

PHASE 6: EXPLORATION
User scrolls down through:
  → Real Cost breakdown (both options, side by side)
  → Door-to-Door time comparison
  → Decision Threshold (the line)
  → Secondary Flips
  → Decision Debt
  → Continuation: "Compare another pair" / Methodology

PHASE 7: ACTION
User either:
  A. Edits a variable (remove bag, etc.) → Verdict Changed flow
  B. Clicks "Compare another pair" → back to Home
  C. Reads Methodology → trust deepening
  D. Browses related comparisons → engagement
```

### 2.2 The Seven Calculation Steps

Each step maps 1:1 to a real computation in the decision engine.  
**Labels corrected per Phase 88.1 engine audit — no step implies functionality the engine lacks.**

| Step | Label | What happens | Real function |
|------|-------|-------------|---------------|
| 1 | **Reading your flight details** | Confirms the user-provided fares and routes for Option A and Option B | `decodeCompareParams()` + `normalizeInput()` |
| 2 | **Adding baggage and extras** | Includes seat selection and checked baggage costs from pre-configured data | `costLines[1-2]` from mock data |
| 3 | **Calculating airport transfers** | Applies known transfer costs from each airport to destination | `costLines[3-4]` from mock data; TfL fares |
| 4 | **Measuring total journey time** | Door-to-door minutes including pre-flight buffer | `doorToDoorMinutes` from mock data |
| 5 | **Calculating real trip cost** | Sums ticket + baggage + seat + transfer for each option | `calcRealCost()` |
| 6 | **Comparing both journeys** | Weighs cost against time; computes break-even threshold | `monetaryWinner()` + `deriveThreshold()` |
| 7 | **Preparing your Travelvus Verdict** | Builds the verdict headline, subtext, and confidence label | `buildVerdict()` |

**Honesty note:** Steps 2-4 use pre-configured data (mock data currently), not live lookups. The labels say "Adding" / "Calculating" / "Measuring" — not "Checking" / "Looking up" / "Retrieving." This distinction is intentional and mandatory. Future phases may replace mock data with dynamic lookups, at which point labels like "Checking baggage policies" would become honest.

### 2.3 What the User Sees During the Cascade

```
┌─────────────────────────────────────────────────────┐
│  Travelvus                                           │
│                                                       │
│  ✓  Reading ticket prices                             │
│     Option A: £58   Option B: £126                    │
│                                                       │
│  ✓  Checking baggage policies                        │
│     Option A: +£42 checked   Option B: Included       │
│                                                       │
│  ◉  Calculating airport transfers...                 │
│     Estimating transfer from Gatwick to Canary Wharf  │
│                                                       │
│  ○  Measuring journey time                           │
│                                                       │
│  ○  Computing real cost                              │
│                                                       │
│  ○  Comparing complete journeys                      │
│                                                       │
│  ○  Preparing your verdict                           │
│                                                       │
└─────────────────────────────────────────────────────┘
```

### 2.4 The Verdict Reveal Moment

After Step 7 completes, all steps collapse into a thin summary ribbon at the top:

```
┌─────────────────────────────────────────────────────┐
│  ✓ 7 calculations complete · 2 data sources · <1s   │
└─────────────────────────────────────────────────────┘
```

Then the navy Verdict block emerges:

```
┌─────────────────────────────────────────────────────┐
│  ┌───────────────────────────────────────────────┐  │
│  │                                               │  │
│  │  TRAVELVUS VERDICT                    ✦ sig   │  │
│  │                                               │  │
│  │  Heathrow — wins.                             │  │
│  │          ^─── peach italic                    │  │
│  │                                               │  │
│  │  The cheaper ticket was Gatwick at £58, but   │  │
│  │  once baggage and transfer are counted,       │  │
│  │  Heathrow is the better overall deal.         │  │
│  │                                               │  │
│  │  ┌──────────┐  ┌──────────┐  ┌────────────┐  │  │
│  │  │ Real trip│  │  Money   │  │  Journey   │  │  │
│  │  │  cost    │  │  saved   │  │   time     │  │  │
│  │  │  £144    │  │   £27    │  │ 71 min     │  │  │
│  │  │          │  │          │  │  faster    │  │  │
│  │  └──────────┘  └──────────┘  └────────────┘  │  │
│  │                                               │  │
│  │  ● Strong confidence · TfL + National Rail    │  │
│  │                                               │  │
│  └───────────────────────────────────────────────┘  │
│                                                       │
│  ─── SCROLL DOWN FOR FULL BREAKDOWN ───→              │
└─────────────────────────────────────────────────────┘
```

---

## 3. INTERACTION TIMELINE

### 3.1 The Complete Sequence (ms timeline) — FIRST CALCULATION

```
t=0ms       User clicks "Reveal the real winner"
            Button: scale-down + disabled state
            Form area: opacity transition begins (200ms)

t=200ms     Form area faded to 40%
            Calculation area materializes
            Step 1: "Reading your flight details" — computing
            Subtle pulse animation on indicator

t=650ms     Step 1 resolves: ✓ + values
            "€58 · €126"
            Step 2: "Adding baggage and extras" — computing

t=1100ms    Step 2 resolves
            "+€45 · Included"
            Step 3: "Calculating airport transfers" — computing

t=1550ms    Step 3 resolves
            "+€74 · +€18"
            Step 4: "Measuring total journey time" — computing

t=2000ms    Step 4 resolves
            "8h 05m · 5h 10m"
            Step 5: "Calculating real trip cost" — computing

t=2450ms    Step 5 resolves
            "€204 · €171"
            Step 6: "Comparing both journeys" — computing

t=2900ms    Step 6 resolves
            "€33 more · Wins on cost"
            Step 7: "Preparing your Travelvus Verdict" — computing

t=3350ms    Step 7 resolves
            "Travelvus Verdict ready."

t=3350ms    ═══ ANTICIPATION PAUSE ═══
to          7 steps compress into summary ribbon (400ms)
t=3750ms    Brief stillness (200ms)
            Navy verdict area begins to emerge

t=3950ms    ═══ VERDICT REVEAL BEGINS ═══
            Verdict block rises (ease-out-cubic, 600ms)

t=4200ms    ═══ EXPERIENCE COMPLETE ═══
            User can scroll, interact, edit
```

**Total first calculation: ~3.8–4.2 seconds**

### 3.1a Repeated Calculation (same session)

```
t=0ms       Click "Reveal the real winner"
t=100ms     All 7 steps appear pre-resolved as summary ribbon
t=400ms     Verdict block visible
t=600ms     Experience complete
```

**Total repeated: ~1.8–2.6 seconds**

### 3.1b Reduced Motion

```
t=0ms       Click "Reveal the real winner"
t=50ms      Form fades out
t=100ms     Summary ribbon + Verdict appear (static)
t=300ms     Experience complete
```

**Total reduced motion: ~0–0.9 seconds**

### 3.2 Skip Mechanism

At any point during the cascade, the user can trigger skip via:

- **"Show result now" button** — visible control above the step cascade
- **Escape key** — keyboard-accessible, immediate
- **Reduced motion preference** — automatic skip (no animation)
- **Repeated calculation** — accelerated path for subsequent comparisons in same session

**Scroll does NOT skip.** Scrolling during the cascade is normal scroll behavior. It does not trigger a skip — this prevents accidental skips, especially on mobile where scroll gestures are common.

The skip is animated: steps collapse rapidly (300ms), verdict reveals normally (800ms).

### 3.3 Reduced Motion Timeline

When `prefers-reduced-motion: reduce` is active:

```
t=0ms       User clicks "Reveal the real winner"
t=50ms      Form fades out
t=100ms     All 7 steps appear simultaneously, pre-resolved with values
t=800ms     Verdict appears (static, no counter animation)
t=900ms     Experience complete
```

**Total: ~0.9 seconds** — fast, accessible, no animation.

---

## 4. STATE MACHINE

### 4.1 States

```
                    ┌──────────────┐
                    │              │
                    │     IDLE     │  ← Form visible, waiting for input
                    │              │
                    └──────┬───────┘
                           │ click "Reveal the real winner"
                           ▼
                    ┌──────────────┐
                    │              │
                    │  SUBMITTING  │  ← Button disabled, form begins to fade
                    │              │
                    └──────┬───────┘
                           │ 200ms
                           ▼
                    ┌──────────────┐
                    │              │
                    │ CALCULATING  │  ← Steps 1-7 appear sequentially
                    │              │      Each step: computing → resolved
                    └──────┬───────┘
                           │ all 7 steps resolved
                           ▼
                    ┌──────────────┐
                    │  PREPARING   │  ← Anticipation pause
                    │   VERDICT    │      Steps compress into summary ribbon
                    │              │
                    └──────┬───────┘
                           │ 800ms pause complete
                           ▼
                    ┌──────────────┐
                    │              │
                    │  REVEALING   │  ← Verdict block animates in
                    │              │      Headline, subtext, stats
                    └──────┬───────┘
                           │ all verdict elements visible
                           ▼
                    ┌──────────────┐
                    │              │
                    │  REVEALED    │  ← Verdict fully displayed
                    │              │      Stats animated, confidence shown
                    └──────┬───────┘
                           │ user scrolls or interacts
                           ▼
                    ┌──────────────┐
                    │              │
                    │  EXPLORING   │  ← User scrolling through Real Cost,
                    │              │      Door-to-Door, Threshold, etc.
                    └──────────────┘
```

### 4.2 Transitions

| From | To | Trigger | Duration |
|------|----|---------|----------|
| IDLE | SUBMITTING | Click "Reveal the real winner" | 200ms |
| SUBMITTING | CALCULATING | Automatic | 0ms (immediate) |
| CALCULATING | PREPARING_VERDICT | Step 7 resolved | 0ms (immediate) |
| PREPARING_VERDICT | REVEALING | Anticipation pause complete | 800ms pause |
| REVEALING | REVEALED | All verdict elements complete | ~1400ms |
| REVEALED | EXPLORING | User scroll interaction | N/A |
| **ANY** | REVEALING | **SKIP** (click/press Esc/scroll) | 300ms fast-forward |

### 4.3 Skip Flow

```
Any CALCULATING/REVEALING_STEPS/PREPARING_VERDICT state
  → User clicks "Show result now" OR presses Escape
    → All pending steps flash-resolve (300ms)
    → SKIPPED state
    → VERDICT_READY dispatched
    → Verdict reveals (600ms)
    → VERDICT_VISIBLE
```

Scroll does NOT trigger skip. Only explicit user action (button click or Escape key) triggers skip.

### 4.4 Sub-States (CALCULATING)

Each step has its own micro state:

```
PENDING  →  COMPUTING  →  RESOLVED
  ○            ◉             ✓
```

| Sub-state | Visual | Duration |
|-----------|--------|----------|
| PENDING | Dim, no value, waiting | Until previous step resolves |
| COMPUTING | Active pulse, subtle glow, "Calculating..." | 400-600ms |
| RESOLVED | Checkmark, value displayed, slight dim | Permanent |

### 4.4 Error State

If computation fails (should never happen with current engine, but must be designed):

```
CALCULATING → ERROR
```

- The failing step shows: ✗ "Could not compute [step name]"
- A retry button appears
- All previously resolved steps remain visible
- User can click "Show what we know" to skip to partial result

---

## 5. COMPONENT INVENTORY

### 5.1 New Components

All new components go in `src/components/experience/`.  
**None exist yet. Do not create until Phase 88.1.**

| Component | File | Responsibility |
|-----------|------|----------------|
| `CalculationExperience` | `CalculationExperience.tsx` | Orchestrator. Owns state machine, sequences steps, manages skip. Wraps the full flow from SUBMITTING → REVEALED. |
| `CalculationStep` | `CalculationStep.tsx` | Single step row. Props: `label`, `status` (pending\|computing\|resolved), `valueA?`, `valueB?`, `detail?`. Renders the indicator + label + resolved values. |
| `StepIndicator` | `StepIndicator.tsx` | The ○/◉/✓ icon for each step. Handles the pulse animation during COMPUTING. |
| `StepTimeline` | `StepTimeline.tsx` | Vertical connector line between steps. Visually links the cascade. |
| `VerdictReveal` | `VerdictReveal.tsx` | Wraps the existing `TravelvusVerdict` (from guides) with reveal animation. Handles the emergence, headline fade, and stat counters. |
| `CalculationSummary` | `CalculationSummary.tsx` | The compressed ribbon showing "✓ 7 calculations complete." Expandable to show all steps inline. |
| `ExperienceContainer` | `ExperienceContainer.tsx` | Layout shell. Handles the form-to-cascade transition. Renders form or cascade based on state. |
| `SkipListener` | `SkipListener.tsx` | Invisible overlay during CALCULATING. Listens for click, Escape, or scroll intent. Fires skip callback. |

### 5.2 Modified Existing Components

| Component | Modification |
|-----------|-------------|
| `QuickCompare` | Accept `onReveal?: () => void` callback. After validation, call onReveal instead of navigating immediately. Disable itself during SUBMITTING/CALCULATING states. |
| `ResultClient` | Accept `skipExperience?: boolean` prop. When true, renders the legacy instant result (preserved for direct URL access, crawlers, reduced motion). |
| `TravelvusVerdict` | Already supports counter animation. VerdictReveal wraps it rather than modifying it. |

### 5.3 Component Tree

```
ExperienceContainer
├── QuickCompare (form, visible during IDLE/SUBMITTING)
│   └── [existing form fields + CTA button]
│
├── CalculationExperience (visible during CALCULATING → REVEALED)
│   ├── SkipListener (overlay during CALCULATING)
│   ├── CalculationSummary (visible after PREPARING_VERDICT)
│   ├── StepTimeline
│   │   └── CalculationStep × 7
│   │       └── StepIndicator
│   └── VerdictReveal (visible during REVEALING → REVEALED)
│       └── TravelvusVerdict (existing, from guides)
│
└── ResultClient (visible during EXPLORING)
    ├── RealCost (existing)
    ├── DoorToDoor (existing)
    ├── DecisionThreshold (existing)
    ├── SecondaryFlips (existing)
    ├── DecisionDebt (existing)
    └── ContinuationBlock (existing)
```

### 5.4 Component API Sketches

**CalculationExperience**

```ts
interface CalculationExperienceProps {
  /** Pre-computed step data from the server */
  steps: CalculationStepData[];
  /** Final verdict data */
  verdict: VerdictData;
  /** Full result data for the scrollable section below */
  resultData: FullResultData;
  /** Called when experience completes */
  onComplete: () => void;
  /** Called when user skips */
  onSkip: () => void;
}

interface CalculationStepData {
  id: string;
  label: string;
  detail: string;          // What the engine is doing right now
  valueDisplayA?: string;  // Option A's value (shown when resolved)
  valueDisplayB?: string;  // Option B's value (shown when resolved)
  evidenceNote?: string;   // "TfL fare data · Off-peak single"
}
```

**CalculationStep**

```ts
interface CalculationStepProps {
  label: string;
  detail: string;
  status: "pending" | "computing" | "resolved";
  valueA?: string;
  valueB?: string;
  evidenceNote?: string;
  isLast?: boolean;
}
```

**VerdictReveal**

```ts
interface VerdictRevealProps {
  verdictLine: string;     // "Heathrow — wins."
  subtextHtml: string;
  stats: [VerdictStat, VerdictStat, VerdictStat];
  confidenceLabel: string;
  provenance: string;
  onRevealComplete: () => void;
}
```

---

## 6. MOTION SYSTEM

### 6.1 Philosophy

> "Measured confidence, not flashy tech."

Travelvus motion is:
- **Purposeful** — every animation communicates progress
- **Restrained** — nothing bounces, springs, or wobbles
- **Consistent** — one easing curve throughout: `cubic-bezier(0.33, 0, 0.67, 1)` (ease-out-cubic)
- **Serious** — matches the brand's analytical, evidence-based tone

### 6.2 Easing

| Use | Easing | CSS |
|-----|--------|-----|
| Step transitions | ease-out-cubic | `cubic-bezier(0.33, 0, 0.67, 1)` |
| Verdict block entrance | ease-out-cubic | Same |
| Counter animations | ease-out-cubic | Same (matches existing `TravelvusVerdict`) |
| Opacity fades | ease-out | `cubic-bezier(0, 0, 1, 1)` — half duration |
| Skip fast-forward | ease-in-out | `cubic-bezier(0.42, 0, 0.58, 1)` — faster |

### 6.3 Durations

| Animation | Duration | Notes |
|-----------|----------|-------|
| Step: pending → computing | 300ms | Fade in + slight slide from below (8px) |
| Step: computing → resolved | 400ms | Checkmark scale (0→1) + value fade |
| Step indicator pulse | 1200ms loop | Subtle opacity pulse (0.6 → 1 → 0.6) during COMPUTING |
| Steps compress into summary | 600ms | Height collapse + opacity fade on detail |
| Verdict block entrance | 800ms | Rise from below (24px) + opacity (0→1) |
| Headline fade-in | 400ms | Delayed 200ms after block entrance begins |
| Subtext fade-in | 300ms | Delayed 600ms after block entrance begins |
| Stat counter | 700ms | Per stat, staggered by 150ms (matches existing) |
| Confidence tag fade | 300ms | After last stat completes |
| Skip fast-forward | 300ms | All pending steps flash-resolve simultaneously |
| Form fade-out | 200ms | Opacity 1 → 0.4 |

### 6.4 Micro-Interactions

| Trigger | Effect |
|---------|--------|
| Step resolves | Checkmark scales 0→1.15→1 (subtle pop, 300ms) |
| Value appears | Fades in with 4px upward slide |
| User hovers on resolved step | Step background brightens slightly, cursor: default |
| User hovers on summary ribbon | Ribbon shows "Click to expand" hint |
| Verdict stats | Counter animation with ease-out deceleration (existing pattern) |
| "Scroll down" indicator | Subtle bounce arrow (only bounce in the system — it's functional, not decorative) |

### 6.5 Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations reduced to 0ms or instant state changes */
  /* Steps appear pre-resolved, verdict shows immediately */
  /* Counter animation: show final value instantly (existing behavior preserved) */
}
```

The existing `TravelvusVerdict` already handles reduced motion by setting values to targets immediately. The new components must follow the same pattern.

### 6.6 GPU-Accelerated Properties Only

Animate only `opacity` and `transform`. Never animate `height`, `width`, `top`, `left`, or any layout-triggering property. Use `will-change` sparingly on elements that animate.

---

## 7. ACCESSIBILITY

### 7.1 Screen Reader Announcements

| Event | Announcement | aria-live |
|-------|-------------|-----------|
| Cascade begins | "Travelvus is analysing your trip. 7 calculations." | polite |
| Step enters COMPUTING | "Calculating [step name]." | polite |
| Step resolves | "[Step name] complete. [key value]." | polite |
| All steps complete | "All 7 calculations complete. Preparing your verdict." | polite |
| Verdict reveals | "[Winner] wins. Real trip cost [€X]. Money saved [€Y]. [Z] minutes faster." | assertive |
| Verdict complete | "Verdict ready. Scroll down for full breakdown." | polite |
| Skip triggered | "Skipping to verdict." | polite |
| Error | "Could not complete [step name]. Select to retry or continue with partial results." | assertive |

### 7.2 aria-live Regions

```html
<!-- Polite region for step-by-step progress -->
<div aria-live="polite" aria-atomic="true" class="sr-only">
  <!-- Dynamically updated with current step status -->
</div>

<!-- Assertive region for verdict (overrides polite queue) -->
<div aria-live="assertive" aria-atomic="true" class="sr-only">
  <!-- Updated once when verdict reveals -->
</div>
```

### 7.3 Focus Management

| Transition | Focus target |
|-----------|-------------|
| IDLE → SUBMITTING | Focus moves to first calculation step (for SR users) |
| CALCULATING → PREPARING_VERDICT | Focus stays, announcements handle progress |
| REVEALING → REVEALED | Focus moves to verdict headline (`h2`) |
| Skip triggered | Focus moves to verdict headline |
| Error | Focus moves to the failed step's retry button |

### 7.4 Keyboard Support

| Key | Context | Action |
|-----|---------|--------|
| Enter / Space | On "Reveal the real winner" button | Begin experience |
| Escape | Any time during CALCULATING | Skip to verdict |
| Tab | After REVEALED | Navigate through interactive elements (edit, links, expand) |
| Enter / Space | On summary ribbon | Expand/collapse calculation steps |
| Arrow keys | Expanded calculation steps | Navigate between steps |

### 7.5 Screen Reader Only Content

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

Used for:
- Step-by-step status text
- Live region announcements
- Hidden labels on icon-only elements
- Calculation evidence that is visually displayed but needs SR context

### 7.6 Color Contrast

All text in the calculation cascade must meet WCAG AA:
- Labels on `--paper` (#F4F1EA): use `--ink` (#1E2A33) — ratio 12.7:1 ✓
- Muted text on paper: use `--muted` (#6B7078) — ratio 4.5:1 ✓
- Verdict text on navy (#1E2A33): use `--paper` (#F4F1EA) — ratio 12.7:1 ✓
- Copper (#B85C38) on paper: ratio 4.6:1 ✓ (large text only, 18px+)

---

## 8. RESPONSIVE BEHAVIOUR

### 8.1 Breakpoints

Travelvus uses a single primary breakpoint:

| Breakpoint | Target | Usage |
|-----------|--------|-------|
| **900px** | Mobile ↔ Desktop | Matches existing `HomeHeader` hamburger nav gate |
| 720px | Compact mobile | Additional tightening for small screens (legacy globals.css patterns) |

### 8.2 Desktop (≥901px)

```
┌─────────────────────────────────────────────────────────────┐
│                                                               │
│   [Calculation Cascade — centered, max-width 680px]           │
│                                                               │
│   ○  Reading ticket prices                                    │
│   ✓  Checking baggage policies                               │
│      Option A: +£42 checked    Option B: Included             │
│   ◉  Calculating airport transfers...                        │
│      Estimating Gatwick → Canary Wharf                       │
│   ○  Measuring journey time                                  │
│   ○  Computing real cost                                     │
│   ○  Comparing complete journeys                             │
│   ○  Preparing your verdict                                  │
│                                                               │
│   ─── then ───                                                │
│                                                               │
│   ┌─────────────────────────────────────────────────────┐    │
│   │  TRAVELVUS VERDICT                                   │    │
│   │  Heathrow — wins.                                    │    │
│   │  ...                                                  │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                               │
│   ┌──────────┐  ┌──────────┐                                 │
│   │ REAL COST│  │ DOOR-TO  │  ← side-by-side columns         │
│   │ A vs B   │  │ -DOOR    │                                  │
│   └──────────┘  └──────────┘                                 │
│                                                               │
└─────────────────────────────────────────────────────────────┘
```

- Steps are vertically stacked, centered in the content area
- Values for Option A and Option B appear side by side when both are relevant
- Verdict block is full-width within the container
- Post-verdict content uses existing two-column grid where applicable

### 8.3 Tablet (721px – 900px)

- Same layout as desktop
- Step labels and values scale proportionally
- Side-by-side value display maintained
- Slightly reduced padding (24px vs 38px)

### 8.4 Mobile (≤720px)

```
┌─────────────────────────────────┐
│                                  │
│  [Calculation Cascade]           │
│                                  │
│  ✓ Ticket prices                 │
│    A: £58 · B: £126              │
│                                  │
│  ✓ Baggage policies              │
│    A: +£42 · B: Included         │
│                                  │
│  ◉ Airport transfers...          │
│    Gatwick → Canary Wharf        │
│                                  │
│  ○ Journey time                  │
│  ○ Real cost                     │
│  ○ Comparing                     │
│  ○ Preparing verdict             │
│                                  │
│  ─── then ───                    │
│                                  │
│  ┌──────────────────────────┐   │
│  │ TRAVELVUS VERDICT         │   │
│  │ Heathrow — wins.          │   │
│  │                           │   │
│  │ Real trip cost  £144      │   │
│  │ Money saved      £27      │   │
│  │ Journey time  71 min      │   │
│  └──────────────────────────┘   │
│                                  │
│  [Full-width single column      │
│   for all sections below]       │
│                                  │
└─────────────────────────────────┘
```

- Steps are more compact
- Value pairs show on same line, separated by "·"
- "Computing" detail text is shorter
- Verdict stats stack vertically (matching existing mobile pattern)
- All post-verdict content is single-column
- Touch targets ≥44px (WCAG AAA)

### 8.5 Very Small Screens (≤375px)

- Step labels truncate if needed (with ellipsis)
- Value font sizes reduce by 1-2px
- Verdict headline: 24px (matches existing `.verdict-block h2` mobile)
- No horizontal overflow tolerated at any width ≥320px

---

## 9. ARCHITECTURE

### 9.1 Integration Principle

> The Calculation Experience is a **progressive enhancement layer** over the existing Result page. It does NOT replace the Result. It wraps the transition.

### 9.2 Data Flow

```
┌─────────────────────────────────────────────────────────┐
│                     SERVER (SSR)                         │
│                                                          │
│  page.tsx (result)                                       │
│  ├── decodeCompareParams()                               │
│  ├── normalizeInput()                                    │
│  ├── isSupportedComparison()                             │
│  ├── calcRealCost()                                      │
│  ├── monetaryWinner()                                    │
│  ├── buildVerdict()                                      │
│  │                                                       │
│  │  NEW: Also produces `calculationSteps` array          │
│  │  with pre-computed values for each of the 7 steps     │
│  │                                                       │
│  └── Passes everything to ResultClient                    │
│                                                          │
└──────────────────────┬──────────────────────────────────┘
                       │ props
                       ▼
┌─────────────────────────────────────────────────────────┐
│                    CLIENT                                 │
│                                                          │
│  ResultClient                                            │
│  ├── [NEW] <CalculationExperience>                       │
│  │   ├── Manages state machine (IDLE → REVEALED)         │
│  │   ├── Sequences 7 steps using pre-computed data       │
│  │   │   (NO re-computation — values come from server)   │
│  │   ├── Handles skip / reduced motion / SR              │
│  │   └── Renders <VerdictReveal> at end                  │
│  │                                                       │
│  └── [EXISTING] Sections below verdict                   │
│      ├── RealCost, DoorToDoor, Threshold, etc.           │
│      └── All existing interactive states preserved       │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### 9.3 Why Server-Computed Steps + Client-Sequenced Reveal

| Approach | Pros | Cons |
|----------|------|------|
| **Compute SSR, reveal client** | Uses real computed values. No duplicate logic. SEO-safe. Fast. Honest to the mission. | Steps are "revealed" not "computed live." |
| Re-compute client-side | Every step is live computation. Maximum "realness." | Duplicates decision engine logic. Potential drift. Slower. More code. |
| Pure CSS animation | Zero JS overhead. Simple. | Cannot show real values. Feels fake. Violates design principles. |

**Selected: SSR compute + Client reveal.** The engine DID compute these values. The experience is showing the reasoning process, not re-running it. This is honest: every value displayed was genuinely computed by the decision engine. The user sees "what the engine found," not "the engine working in real-time." The latter would require duplicating the entire decision engine on the client — a maintenance risk with zero user-perceptible benefit.

### 9.4 URL Strategy

| URL | Behaviour |
|-----|-----------|
| `/?optionA=58&optionB=126&...` → click "Reveal" → `/result?optionA=58&...` | Full Calculation Experience (new) |
| `/result?optionA=58&optionB=126&...` (direct URL access) | Skip experience, show instant result (existing behaviour preserved) |
| `/result?optionA=58&...&skipExperience=1` | Explicit skip |
| Googlebot / crawler | SSR delivers complete result content. No JS required. SEO intact. |

The `skipExperience` flag is set automatically when:
- User accesses `/result` directly (not via the Quick Compare form)
- `prefers-reduced-motion: reduce` is active
- The query param `skipExperience=1` is present

### 9.5 Architecture Compliance

| Rule | Compliance |
|------|-----------|
| Shared HomeHeader | ✓ Experience renders inside ResultClient, which uses existing header |
| Shared TravelvusVerdict | ✓ VerdictReveal wraps the existing component |
| Shared FAQAccordion | N/A — not used on Result page |
| Shared MobileTOC | N/A — not used on Result page |
| CSS custom properties | ✓ All new styles reference `var(--navy)`, `var(--paper)`, etc. |
| Breakpoint 900px | ✓ Desktop/mobile gate matches HomeHeader |
| No duplicate global components | ✓ Experience is additive, never duplicative |
| Route-local CSS Module | ✓ New styles in `src/components/experience/experience.module.css` |
| Zero WordPress hotlinks | ✓ No external assets |

### 9.6 File Structure (Phase 88.1 — ACTUAL)

```
src/
├── components/
│   └── experience/                    ← NEW DIRECTORY (88.1)
│       ├── CalculationExperience.tsx   ← Orchestrator: state machine, cascade timer, skip
│       ├── CalculationStep.tsx         ← Single step: indicator + label + values
│       ├── CalculationStepList.tsx     ← Renders all 7 steps from contract
│       ├── SkipToVerdict.tsx           ← "Show result now" button + Escape handler
│       ├── ExperienceStatus.tsx        ← aria-live announcements (polite + assertive)
│       ├── experience.module.css       ← Foundation styles (900px breakpoint)
│       └── index.ts                   ← Barrel export
│
├── lib/
│   ├── calculation-contract.ts         ← NEW (88.1): typed CalculationResult + factory
│   ├── experience-state.ts             ← NEW (88.1): state machine + reducer + guards
│   ├── __tests__/
│   │   ├── calculation-contract.test.ts ← NEW (88.1): 21 tests
│   │   └── experience-state.test.ts    ← NEW (88.1): 35 tests
│   │   └── truth-contract.test.ts      ← EXISTING: 50 tests (untouched)
│   │   └── lgw-vs-stn.test.ts          ← EXISTING (untouched)
│   │   └── lhr-vs-lgw.test.ts          ← EXISTING (untouched)
│
├── app/
│   └── result/
│       ├── page.tsx                    ← UNCHANGED (integration in 88.7)
│       └── ResultClient.tsx            ← UNCHANGED (integration in 88.7)
```

---

## 10. IMPLEMENTATION ROADMAP

### 10.1 Phases

| Phase | Name | Scope | Est. effort | Status |
|-------|------|-------|-------------|--------|
| **88.1** | Foundation | `calculation-contract.ts`, `experience-state.ts`, `CalculationExperience`, `CalculationStep`, `CalculationStepList`, `SkipToVerdict`, `ExperienceStatus`, tests, blueprint corrections. | 1 session | ✅ DONE |
| **88.2** | Animation | Full motion system: step transitions, pulse, checkmark animation, step compression. | 1 session | Pending |
| **88.3** | Verdict Reveal | Verdict entrance animation, stat counters. Summary ribbon polish. | 1 session | Pending |
| **88.4** | Skip + Reduced Motion Polish | Skip animation polish, Escape key, full reduced-motion path verification. | 1 session | Pending |
| **88.5** | Accessibility Verification | aria-live regions (already foundation-built), SR testing, focus management verification, keyboard navigation audit. | 1 session | Pending |
| **88.6** | Responsive Polish | Mobile/tablet layout refinement, touch targets, compact step display testing at all 9 breakpoints. | 1 session | Pending |
| **88.7** | Integration | Wire into `QuickCompare` → `ResultClient`. URL strategy. Crawler fallback. | 1 session | Pending |
| **88.8** | Polish + QA | Cross-browser testing, 320-1440px verification, final TS/lint/test/build check. | 1 session | Pending |
| **88.9** | Deploy + Verify | Deploy to Vercel production. Verify on www.travelvus.com. Architecture Compliance Report. Owner approval. | 1 session | Pending |

**Total: ~9 sessions** (non-destructive, each phase is independently shippable)

### 10.2 Dependency Graph

```
88.1 Foundation ✅
  ├── 88.2 Animation (pending)
  │     └── 88.3 Verdict Reveal (pending)
  │           ├── 88.4 Skip + Reduced Motion Polish (pending)
  │           ├── 88.5 Accessibility Verification (pending)
  │           └── 88.6 Responsive Polish (pending)
  │                 └── 88.7 Integration (pending)
  │                       └── 88.8 Polish + QA (pending)
  │                             └── 88.9 Deploy + Verify (pending)
  └── (88.5, 88.6 can run in parallel after 88.3)
```

### 10.3 Rollout Strategy

| Stage | Audience | Behaviour |
|-------|----------|-----------|
| 1. Dev | Local only | Full experience, toggle skip |
| 2. Staging | Preview deploy | Test with real data, all devices |
| 3. Production | 100% | Calculation Experience active for all form submissions |
| 4. Fallback | Direct URL / crawlers | Instant result (legacy behaviour preserved) |

No feature flag needed — the URL strategy (§9.4) naturally segments the audiences.

---

## 11. RISKS

### 11.1 Risk Matrix

| Risk | Severity | Likelihood | Mitigation |
|------|----------|------------|------------|
| **Perceived slowness** — Users find ~4.2s too long | Medium | Medium | Skip mechanism ("Show result now" button + Escape key). Repeated calculations use accelerated ~2s path. User-tunable: if analytics show high skip rates, reduce step count or duration. |
| **Perceived fakeness** — Users see through the sequential reveal as "just animation" | Medium | Low | Every value displayed is real, computed by the engine. Evidence notes cite data sources. No fake loading bars or percentages. |
| **Mobile performance** — Animation jank on low-end devices | Low | Medium | Animate only `opacity` + `transform`. Use `will-change` sparingly. Test on Moto G4 class device. Reduced motion path as fallback. |
| **Accessibility regression** — SR users lose access to result content | High | Low | Full aria-live strategy. Direct URL access shows instant result. Progressive enhancement ensures content is always in the DOM. |
| **Architecture drift** — Experience layer diverges from Result page | Medium | Low | Experience wraps existing components. Result page remains the source of truth. Server computation unchanged. |
| **SEO damage** — Crawlers can't see content behind the experience | High | Very Low | SSR renders complete result. Crawlers access `/result?...` directly. Progressive enhancement — content in DOM before JS runs. |
| **Quick Compare integration** — Form state conflicts with experience state | Low | Medium | Clear state machine boundaries. Form disables during SUBMITTING. Experience owns the transition. |
| **User confusion** — "Why is it showing me steps? Just give me the answer." | Low | Low | Skip mechanism prominent. Returning users may skip habitually — that's fine. The experience is for first-time trust building. |

### 11.2 Failure Modes

| Failure | User sees | Recovery |
|---------|-----------|----------|
| JS fails to load | Instant result (SSR fallback) | None needed — content is in HTML |
| Step animation throws | Skip to verdict | Error boundary catches, shows static result |
| Network interrupted during SSR | Next.js error page | Standard 500 handling |

---

## 12. ALTERNATIVE CONCEPTS CONSIDERED

### 12.1 Concept A: "AI Chat"

Steps appear as chat messages from "Travelvus":  
*"I'm reading your ticket prices..."*  
*"Option A is £58, Option B is £126."*

**Rejected because:** Travelvus is not a chatbot. This pattern implies conversational AI, which Travelvus is not. It also introduces the risk of users trying to "chat back." The tone is wrong for an analytical decision engine.

### 12.2 Concept B: "Split-Screen Race"

Option A and Option B compute side by side in real-time, racing to completion. Each side shows its own cascade of costs being added.

**Rejected because:** The comparison is already side-by-side in the result. The anticipation doesn't come from the race — it comes from the sequential build-up of evidence. Also, the "race" metaphor implies competition when Travelvus is impartial.

### 12.3 Concept C: "Card Flip"

Each calculation step is a card. Cards flip from "Computing..." on the back to the resolved value on the front.

**Rejected because:** Too playful for the brand tone. Card flips are associated with gamification and casual apps. Travelvus is serious and measured.

### 12.4 Concept D: "Timeline Scroll"

Instead of a timed sequence, the user scrolls down through the calculation steps. Each scroll reveals the next step.

**Rejected because:** Passive scrolling doesn't create anticipation. The engine should feel like it's working, not like the user is reading a static document. Scrolling also removes the "pause before verdict" moment, which is critical for emotional weight.

### 12.5 Concept E: "Data Dashboard"

All steps appear at once as a dashboard of real-time widgets. Each widget populates asynchronously as data arrives.

**Rejected because:** The computation is not asynchronous — it's near-instant. Faking async widgets would require artificial delays with no real computation behind them, violating the "everything shown = real calculation" principle.

### 12.6 Concept F: "Progressive Disclosure" (Alternative to Selected)

Similar to the selected concept, but steps expand inline rather than cascading vertically. Each step's detail pushes the next step down.

**Rejected because:** Layout shift during animation is jarring. Fixed-height cascade with pre-allocated space for each step provides a smoother, more predictable experience.

---

## 13. WHY THE SELECTED CONCEPT IS SUPERIOR

### 13.1 The Selected Concept: "Calculation Cascade"

A sequential vertical cascade of 7 calculation steps, each mapping 1:1 to a real engine function, revealed with measured timing, culminating in an earned Verdict reveal with emotional weight.

### 13.2 Superiority Argument

**1. Honesty.** Every step corresponds to a real computation. The values shown are genuinely computed by the decision engine. No fake loading bars, no fake AI, no fake typing. This is the only concept that fully satisfies the "Everything shown must represent a real calculation step" principle.

**2. Emotional Arc.** The cascade naturally builds tension. Step 1 ("Reading ticket prices") is mundane. Step 5 ("Computing real cost") is revealing. Step 6 ("Comparing complete journeys") is decisive. Step 7 ("Preparing your verdict") is anticipatory. The pause before the verdict reveal creates the moment of truth. This arc is impossible with instant-result or all-at-once approaches.

**3. Transparency.** Completed steps remain visible (as a compressed summary). The user can inspect the chain of reasoning. This supports the evidence-based brand positioning and differentiates Travelvus from black-box comparison sites.

**4. Brand Alignment.** The restrained motion, serious tone, and evidence-backed presentation match the existing design language perfectly. The cascade uses existing design tokens, existing components, and the existing ease-out-cubic animation curve. It feels like Travelvus, not like a different product.

**5. Progressive Enhancement.** The SSR delivers complete result content. The cascade is a client-side enhancement layer. Crawlers, direct URL visitors, and reduced-motion users get the instant result. No SEO risk. No accessibility regression.

**6. Measurable Success.** The experience has clear metrics:
- Skip rate: % of users who skip the cascade
- Completion rate: % who watch the full cascade
- Time-to-verdict: average seconds to verdict reveal
- Verdict interaction rate: % who scroll below the verdict

These metrics will tell us if the experience is working or needs tuning — something impossible with purely visual redesigns.

**7. Non-Destructive.** The cascade wraps existing components. No existing page is modified. The Result page, Decision Pages, Guides, and Home remain untouched. If the experience needs to be removed, it's a clean revert.

**8. Phased Delivery.** The 9-phase roadmap allows each piece to be built, tested, and shipped independently. The foundation ships first. Each subsequent phase adds polish. We never break production.

---

## APPENDIX A: Engine Audit — Step-to-Function Truth Table

**Audited:** 2026-07-12, Phase 88.1  
**Source files:** `src/lib/navigation.ts`, `normalize.ts`, `decision-engine.ts`, `derive-content.ts`, `types.ts`, `mock-data.ts`

| # | Visible Step | Real Function(s) | Source File | Exists? | Honest Label? |
|---|-------------|------------------|-------------|---------|---------------|
| 1 | Reading your flight details | `decodeCompareParams()` parses URL params; `normalizeInput()` validates prices/airports/times | `navigation.ts`, `normalize.ts` | ✓ Fully | ✓ — confirms user input |
| 2 | Adding baggage and extras | `MOCK_RESULT.costLines[1-2]` — pre-configured baggage + seat costs | `mock-data.ts` | Partial — hardcoded | ✓ — "Adding" is honest (no live lookup implied) |
| 3 | Calculating airport transfers | `MOCK_RESULT.costLines[3-4]` — pre-configured transfer costs (TfL off-peak single for supported routes) | `mock-data.ts` | Partial — hardcoded | ✓ — "Calculating" means applying known fares |
| 4 | Measuring total journey time | `MOCK_RESULT.doorToDoorMinutes` — pre-configured times with 90-min buffer | `mock-data.ts` | Partial — hardcoded | ✓ — "Measuring" from configured data |
| 5 | Calculating real trip cost | `calcRealCost()` sums all cost lines | `decision-engine.ts` | ✓ Fully | ✓ — genuine computation |
| 6 | Comparing both journeys | `monetaryWinner()` determines winner; `deriveThreshold()` computes break-even point | `decision-engine.ts`, `derive-content.ts` | ✓ Fully | ✓ — genuine computation |
| 7 | Preparing your Travelvus Verdict | `buildVerdict()` produces headline, subtext, confidence, provenance | `normalize.ts` | ✓ Fully | ✓ — text generated from computed values |

### Missing Capabilities Discovered

| Capability | Current State | Impact |
|-----------|---------------|--------|
| Dynamic baggage policy lookup | Hardcoded in `MOCK_RESULT`. No airline/fare-class database. | Steps 2 values are static for the one supported scenario |
| Dynamic transfer cost calculation | Hardcoded in `MOCK_RESULT`. Only STN→Central (night taxi) and LHR→Central (Piccadilly) | Steps 3-4 are static for the supported STN vs LHR pair |
| Real confidence model | Static labels: "Confidence · Strong" / "Confidence · Estimate" | No dynamic confidence scoring exists |
| Multi-scenario support | `isSupportedComparison()` only returns true for STN vs LHR | All other airport pairs get ticket-only comparison |

**None of these are blockers for the Calculation Experience.** The experience reveals what the engine computed — it doesn't fabricate missing capabilities. The warnings array in the calculation contract communicates limitations transparently.

### Submission Entry Points Audit

| Entry Point | File | Type | Canonical? |
|------------|------|------|-----------|
| Quick Compare (embedded, Home page) | `src/components/compare/QuickCompare.tsx` | Client component, `router.push(/result?${params})` | ✅ YES — only submission path |
| Home demo engine | `src/app/page.tsx` | Static demo, no submission | ❌ Static display only |
| Decision Page interactive modules | `src/components/decision-page/` | Local state manipulation | ❌ No result page navigation |

**Conclusion:** Exactly ONE canonical submission path. All entry points will eventually invoke the same Calculation Experience and result contract via `router.push(/result?${params})`.

## APPENDIX B: Design Token Usage

All new components reference these existing tokens:

```css
/* Backgrounds */
background: var(--paper);        /* Cascade background */
background: var(--navy);         /* Verdict block */
background: var(--card);         /* Resolved step hover */

/* Text */
color: var(--ink);               /* Step labels, values */
color: var(--muted);             /* Evidence notes, detail text */
color: var(--paper);             /* Text on navy */
color: var(--copper);            /* Step numbers, active indicator */
color: var(--peach);             /* Winner name in verdict */
color: var(--pmuted);            /* Provenance on navy */
color: var(--ok);                /* Included / €0 values */

/* Borders & Dividers */
border-color: var(--line);       /* Step separators */
border-color: var(--line-2);     /* Summary ribbon border */

/* Typography */
font-family: var(--sans);        /* Labels, detail text */
font-family: var(--serif);       /* Verdict headline, big numbers */
font-family: var(--mono);        /* Step numbers, confidence, values */

/* Geometry */
border-radius: var(--radius-card);     /* Summary ribbon, step hover */
border-radius: var(--radius-button);  /* Skip button */
```

## APPENDIX C: Existing Components NOT Modified

These components are used as-is, never duplicated:

| Component | Location | Used in |
|-----------|----------|---------|
| `HomeHeader` | `src/components/ui/HomeHeader.tsx` | Result page header (unchanged) |
| `TravelvusVerdict` | `src/components/guide/TravelvusVerdict.tsx` | Wrapped by `VerdictReveal` |
| `Signature` | `src/components/ui/Signature.tsx` | Inside verdict (unchanged) |
| `RealCost` | `src/components/result/` | Below verdict (unchanged) |
| `DoorToDoor` | `src/components/result/` | Below verdict (unchanged) |
| `DecisionThreshold` | `src/components/result/` | Below verdict (unchanged) |
| `SecondaryFlips` | `src/components/result/` | Below verdict (unchanged) |
| `DecisionDebt` | `src/components/result/` | Below verdict (unchanged) |
| `VerdictChangedBanner` | `src/components/result/` | Verdict Changed flow (unchanged) |

## APPENDIX D: Quick Reference Card

```
┌─────────────────────────────────────────────────────────┐
│              CALCULATION CASCADE — AT A GLANCE           │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  DURATION:     ~3.8-4.2s first time, ~1.8-2.6s repeat  │
│  STEPS:        7 (details → baggage → transfer → time   │
│                      → real cost → compare → verdict)    │
│  EASING:       ease-out-cubic everywhere                │
│  SKIP:         "Show result now" button + Escape key    │
│  SCROLL:       Does NOT skip (prevents mobile accidents) │
│  REDUCED:      All steps appear instantly (~0-0.9s)     │
│  SEO:          SSR delivers complete result content     │
│  COMPONENTS:   5 new in src/components/experience/      │
│  TESTS:        56 new (144 total, up from 88)           │
│  TOKENS:       All existing CSS custom properties       │
│  BREAKPOINT:   900px (mobile/desktop gate)              │
│  PHASE 88.1:   ✅ Foundation complete                   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

**END OF BLUEPRINT**

*This document defines the Product Experience architecture for Travelvus V2.*  
*No code has been written. Implementation begins after owner approval.*  
*Phase 88.1 will create the foundation components and the calculation-steps library.*
