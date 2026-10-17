# SEO Experiment Framework
**Travelvus V2 — Phase 123.0**

---

## Overview

Every SEO change should be treated as an experiment: measurable, time-bound, and reversible. This framework defines how experiments are designed, executed, and evaluated.

---

## Experiment Principles

1. **One variable at a time.** Change only title, or only meta description, or only internal links. Never multiple variables simultaneously.
2. **Minimum 14-day measurement window.** Search rankings take time to stabilize.
3. **Control group required.** Compare the changed page against similar unchanged pages.
4. **Reversible.** Every change must be undoable if performance degrades.
5. **Documented.** Every experiment logged with hypothesis, change, and result.

---

## Experiment Categories

### Category 1 — Title Tag Optimization

| Experiment | Hypothesis | Measurement |
|-----------|-----------|-------------|
| Add year to title | "2026" in title increases CTR for freshness-sensitive queries | CTR change vs control group, 30 days |
| Question-format title | "Which airport?" format outperforms statement format | CTR change, 30 days |
| Include airport codes | "(CDG vs ORY)" in title improves relevance signal | Impressions + CTR, 30 days |
| Remove brand suffix | Shorter titles improve CTR on mobile | CTR change on mobile vs desktop |

### Category 2 — Meta Description Optimization

| Experiment | Hypothesis | Measurement |
|-----------|-----------|-------------|
| Include cost estimate | "Transfer from €12" in description increases CTR | CTR change, 14 days |
| Include time estimate | "40 minutes direct" in description increases CTR | CTR change, 14 days |
| Question format | Description that mirrors the search query improves CTR | CTR change, 30 days |
| Benefit-led | "Save money and time" framing outperforms factual | CTR change, 30 days |

### Category 3 — Internal Linking

| Experiment | Hypothesis | Measurement |
|-----------|-----------|-------------|
| Add 3 related guide links | More internal links improve crawl depth and page authority | Impressions change, 30 days |
| Add hub link from every guide | Strengthens hub page authority | Hub page impressions, 30 days |
| Cross-link knowledge → guides | Knowledge pages pass authority to guides | Guide impressions, 30 days |
| Add "next step" CTA | Contextual CTAs increase page-per-session | Pages per session, 14 days |

### Category 4 — Content

| Experiment | Hypothesis | Measurement |
|-----------|-----------|-------------|
| Add transfer cost table | Structured data increases featured snippet eligibility | Impressions + CTR, 30 days |
| Add FAQ section | FAQ content captures "People also ask" traffic | Impressions for question queries, 30 days |
| Shorten intro paragraph | More concise intros reduce bounce rate | Bounce rate, 14 days |
| Add "bottom line" summary | Summary box increases time on page and CTR | Time on page + CTR, 30 days |

### Category 5 — Planner Visibility

| Experiment | Hypothesis | Measurement |
|-----------|-----------|-------------|
| Homepage CTA for Planner | More users discover the Planner | Planner sessions, 14 days |
| Guide sidebar CTA | Contextual Planner links increase engagement | Planner sessions from guides, 14 days |
| Post-result Planner link | Users who compared want arrival planning | Planner sessions from /result, 14 days |
| "Plan your arrival" on hubs | Hub visitors are pre-decision — Planner is natural next step | Planner sessions from hubs, 14 days |

---

## Experiment Lifecycle

```
HYPOTHESIZE → DESIGN → IMPLEMENT → MEASURE → DECIDE
                                            ├── KEEP (performance improved)
                                            ├── REVERT (performance degraded)
                                            └── ITERATE (inconclusive — refine and retry)
```

---

## Experiment Log Template

```markdown
### Experiment #{id}
- **Date:** YYYY-MM-DD
- **Page(s):** /guides/best-airport-for-{slug}
- **Variable:** Title tag format
- **Hypothesis:** Adding "(CDG vs ORY)" to title will increase CTR by >0.5%
- **Change:** Before → After (exact strings)
- **Control Group:** Other destination guides with unchanged titles
- **Start Date:** YYYY-MM-DD
- **End Date:** YYYY-MM-DD (+14 days minimum)
- **Result:** [PENDING / KEEP / REVERT / ITERATE]
- **Data:** CTR before: X% → CTR after: Y% (change: +Z%)
- **Decision:** [TBD]
```

---

## Running Experiments Safely

- Never experiment on more than 5% of total pages simultaneously
- Never experiment on hub pages without a control city
- Always wait for the full measurement window before deciding
- Document every experiment — even failed ones — in the experiment log
- Review experiment results quarterly to identify patterns
