# Travelvus V2 — GSC Import Schema + URL Decision Matrix

**Phase:** 18.1 — COLD-START CORRECTION
**Status:** GSC OBSERVATIONAL ONLY (connected ~24h ago, ~10 impressions)
**Date:** 2026-07-08

---

## ⚠️ CRITICAL CONTEXT (Phase 18.1 override)

GSC was connected approximately **24 hours ago.** Current data: ~10 impressions total.

**This means:**

- Zero impressions = **NO EVIDENCE**, not zero demand
- Zero clicks = **NO EVIDENCE**, not zero value
- No URL may be confirmed for 410 based on current GSC data
- No migration decision can be downgraded based on absent GSC traffic
- GSC data today is **observational only** — early discovery signals, not decision authority

---

## A. GSC Export Instructions

### What to export

Go to [Google Search Console](https://search.google.com/search-console) → travelvus.com property.

#### Export 1: Queries (Performance → Search Results)

1. Click **Search results** under Performance
2. Set date range: **Last 16 months** (max available)
3. Click **+ New** → **Query** (add Query dimension)
4. Click **Export** (top-right) → **Google Sheets** or **Download CSV**
5. Save as `gsc-queries.csv`

#### Export 2: Pages (Performance → Search Results)

1. Same screen → click **+ New** → **Page** (add Page dimension)
2. Remove Query dimension if needed (keep only Page)
3. Export → Save as `gsc-pages.csv`

#### Optional Exports (higher fidelity)

- **Countries** (Performance → + New → Country) → `gsc-countries.csv`
- **Devices** (Performance → + New → Device) → `gsc-devices.csv`

### Where to place files

Drop all CSVs into: `docs/gsc-exports/`

---

## B. Expected CSV Columns

### gsc-queries.csv

| Column | Example | Required |
|--------|---------|----------|
| `query` | "heathrow vs gatwick which is cheaper" | ✅ |
| `clicks` | 42 | ✅ |
| `impressions` | 1200 | ✅ |
| `ctr` | 3.5% | ✅ |
| `position` | 8.3 | ✅ |
| `page` | https://travelvus.com/london/ | If available |

### gsc-pages.csv

| Column | Example | Required |
|--------|---------|----------|
| `page` | https://travelvus.com/tsa-precheck-cost/ | ✅ |
| `clicks` | 156 | ✅ |
| `impressions` | 3400 | ✅ |
| `ctr` | 4.6% | ✅ |
| `position` | 5.2 | ✅ |

---

## C. Join Method

### Step 1: Load CSVs

```python
import pandas as pd
queries = pd.read_csv("docs/gsc-exports/gsc-queries.csv")
pages   = pd.read_csv("docs/gsc-exports/gsc-pages.csv")
```

### Step 2: Extract URL path

```python
def extract_path(url: str) -> str:
    from urllib.parse import urlparse
    parsed = urlparse(url)
    path = parsed.path.rstrip("/") or "/"
    return path
```

### Step 3: Join to Master URL Ledger

```
pages.path  ←→  ledger.url  (normalized to lowercase, no trailing slash variation)
queries.page  ←→  ledger.url  (same normalization)
```

### Step 4: Merge metrics into ledger

For each URL in the master ledger, compute:

```python
ledger_row["total_clicks"]       = pages[pages.path == url].clicks.sum()
ledger_row["total_impressions"]  = pages[pages.path == url].impressions.sum()
ledger_row["total_ctr"]          = total_clicks / total_impressions if total_impressions else 0
ledger_row["avg_position"]       = pages[pages.path == url].position.mean()
ledger_row["top_query"]          = queries[queries.page == url].sort_values("clicks", ascending=False).iloc[0].query
ledger_row["query_count"]        = len(queries[queries.page == url])
```

---

## D. Decision Rules

Apply AFTER joining GSC data to the master ledger:

### Rule 1: Confirmed zero traffic → low migration risk

```
IF total_impressions == 0 AND total_clicks == 0:
    → confidence upgrades from LOW to HIGH
    → 410 CANDIDATE upgrades to CONFIRMED 410 (after 30-day observation)
    → PENDING EVIDENCE resolves to CURRENT PROVISIONAL ACTION
```

### Rule 2: Active traffic → must preserve

```
IF total_clicks > 0 OR total_impressions > 100:
    → action MUST be REBUILD SAME URL or 301 TO SPECIFIC URL
    → 410 CANDIDATE becomes REJECTED
    → PENDING EVIDENCE resolves to PRESERVE TEMPORARILY
```

### Rule 3: High-value queries → prioritize rebuild

```
IF top_query contains high-intent keywords ("vs", "cheaper", "cost", "price", "which"):
    → priority_score += 3
IF avg_position <= 10:
    → priority_score += 2
IF impressions > 1000:
    → priority_score += 2
IF total_clicks > 10:
    → priority_score += 1
```

### Rule 4: Thin content with traffic → rebuild, don't delete

```
IF classification == "410 CANDIDATE" AND total_clicks > 0:
    → reclassify as PRESERVE TEMPORARILY
    → plan rebuild as V2 Decision/Question page
```

### Rule 5: Zero-traffic thin content → confirmed 410

```
IF classification == "410 CANDIDATE" AND total_impressions == 0:
    → upgrade to CONFIRMED 410 (safe to remove after 30-day observation window)
```

---

## E. Priority Scoring Model

After GSC join, each rebuild candidate gets a priority score:

| Factor | Points | Condition |
|--------|--------|-----------|
| Has active traffic | +3 | `total_clicks > 0` |
| Has impressions | +2 | `total_impressions > 100` |
| Ranks top 10 | +2 | `avg_position <= 10` |
| Direct V2 fit | +3 | Classification = DIRECT V2 FIT |
| Adjacent V2 fit | +1 | Classification = ADJACENT V2 FIT |
| High-intent queries | +2 | Query contains "vs", "cost", "price", "cheaper" |
| Reuses existing component | +2 | Page type already built in V1 |
| Monetization potential | +1 | AdSense editorial depth > 0 |

**Maximum score:** 16

### Build order

1. Priority ≥ 12: **Phase 1 rebuild** (first 5 pages after current V1 baseline)
2. Priority 8–11: **Phase 2 rebuild**
3. Priority 4–7: **Phase 3 rebuild**
4. Priority ≤ 3: **Park or 301 to best equivalent**

---

## F. Migration Action Matrix (post-GSC)

| Action | Condition | Implementation |
|--------|-----------|---------------|
| **REBUILD SAME URL** | Traffic + V2 fit + existing component | Build new page at same path |
| **IMPROVE SAME URL** | Traffic + V2 fit + content exists | Rebuild with enhanced content |
| **MERGE + 301** | Duplicate content + traffic | 301 secondary → primary |
| **301 TO SPECIFIC URL** | Traffic + no V2 fit but has close equivalent | 301 to best V2 equivalent |
| **PRESERVE TEMPORARILY** | Traffic + no V2 equivalent yet | Keep URL alive, rebuild later |
| **CONFIRMED 410** | Zero traffic + thin content + no V2 fit | 410 after 30-day observation |
| **PENDING EVIDENCE** | Insufficient data | Re-evaluate after 90 days of V2 live |

**No 301 to Home permitted under any condition.**

---

## G. Next Step (Superseded by Phase 18.1)

**Do NOT export CSVs yet.** GSC data is too immature for CSV analysis. Wait for observation checkpoints.

---

# PHASE 18.1 — COLD-START MIGRATION STRATEGY

## 1. Invalidated Rules (from Phase 18)

| Original Rule | Status | Replacement |
|---------------|--------|-------------|
| "Zero traffic → confidence upgrades, 410 confirmed" | **INVALIDATED** | Zero GSC data → PENDING EVIDENCE. Only 410 with owner-confirmed abandonment. |
| "Active traffic → must preserve" | **STILL VALID** (but threshold lowered) | Any non-zero impression → flag for investigation. |
| Priority scoring model | **FROZEN** | Cannot score without GSC data. Resume when 30+ days of data exist. |

## 2. Current Role of ~10 Impressions

The ~10 impressions currently in GSC are **early discovery signals only.** They may:

- ✅ Reveal themes Google already associates with Travelvus
- ✅ Detect URLs unexpectedly receiving visibility
- ✅ Increase investigation priority for those URLs
- ❌ Confirm a URL for 410
- ❌ Prove absence of demand
- ❌ Prove absence of rankings
- ❌ Decide any migration definitively

## 3. Evidence We CAN Use Now (without GSC maturity)

| Evidence | Status | Can Decide |
|----------|--------|-----------|
| Live HTTP status | ✅ Available | Content removal (404 → plan fix) |
| Sitemap membership | ✅ Available | Identify indexed vs unindexed |
| Content quality assessment | ✅ Available | Identify thin vs substantive |
| WordPress content export | ❌ No access | Would unlock internal link analysis |
| URL age | ✅ Available | Older URLs may have residual authority |
| Owner-confirmed abandonment | ✅ Available | `/london/`, `/cities/`, `/europe/` → APPROVED RETIREMENT |
| SERP manual checks | ✅ Possible | Sample queries, observe presence |
| Topic / V2 strategic fit | ✅ Available | Direct, Adjacent, Legacy, Low |
| Backlink evidence | ❌ No tool access | Would need Ahrefs/Semrush |
| Internal links | ❌ No WP access | Would need WordPress export |

## 4. 7 / 14 / 30 / 60 / 90-Day Observation Plan

| Checkpoint | GSC Data Expected | Decisions Possible | Still Cannot |
|------------|------------------|-------------------|-------------|
| **7 days** | ~50-100 impressions, maybe 2-3 clicks | Identify which URLs Google is discovering first | Confirm any 410. Confirm any rebuild priority. |
| **14 days** | ~200-500 impressions, query patterns emerging | Flag URLs with early query traction. Begin investigating top queries. | Decide any migration action. Score rebuild priority. |
| **30 days** | 1000+ impressions, stable query sample | First-pass priority scoring for top URLs. Identify clearly-zero URLs. | Confirm 410 (need 60+ days). Finalize build order. |
| **60 days** | 2000+ impressions, ranking patterns visible | Confirm zero-traffic URLs safe for 410. Score most rebuild candidates. | Finalize all 70 URLs (some may still need 90 days). |
| **90 days** | 4000+ impressions, mature sample | Final migration decisions for majority of URLs. Only edge cases remain PENDING. | Tiny fraction may still need external backlink data. |

## 5. Revised Migration Decision Framework (Cold-Start)

**Allowed final actions NOW:**

| Action | Condition |
|--------|-----------|
| **REBUILD SAME URL** | Strategically clear + V2 components exist + owner approves |
| **301 TO SPECIFIC URL** | High-confidence duplicate with confirmed primary URL |
| **APPROVED RETIREMENT** | Owner-confirmed abandoned experiment (`/london/`, `/cities/`, `/europe/`) |
| **PRESERVE TEMPORARILY** | Any URL with possible value that cannot yet be confirmed |
| **PENDING EVIDENCE** | All remaining URLs until GSC matures |
| **410 CANDIDATE** | Thin content + no V2 fit — but NEVER upgrade to CONFIRMED from current GSC |

**Never allowed NOW:**
- ❌ 410 CONFIRMED (need 60+ days of zero GSC impressions)
- ❌ Priority scoring based on GSC (need 30+ days)
- ❌ Migration decisions based on "zero traffic" (GSC is too new)

## 6. Conclusions That Remain Safe NOW

| Conclusion | Safe? | Reason |
|-----------|-------|--------|
| 7 high-confidence 301 merges (confirmed duplicates) | ✅ | Content audit, not GSC-dependent |
| `/home/` → `/` 301 | ✅ | Duplicate URL, self-evident |
| 12 URLs marked 410 CANDIDATE | ✅ (as CANDIDATE only) | Thin content confirmed. GSC will confirm/deny traffic. |
| 3 URLs APPROVED RETIREMENT | ✅ | Owner-confirmed abandoned experiment |
| V2 candidate classification (DIRECT/ADJACENT/LEGACY/LOW) | ✅ | Content + strategy, not traffic-dependent |
| Top 10 rebuild priorities | ⚠️ | Retain as provisional. GSC may reorder. |

## 7. Conclusions That Must Return to PENDING EVIDENCE

| Previous Conclusion | Must Return To | Reason |
|--------------------|---------------|--------|
| Any low-confidence migration action | PENDING EVIDENCE | No GSC data to confirm or deny |
| Any URL assumed to have "no traffic" | PENDING EVIDENCE | GSC is 24h old — too early |
| Priority order for rebuilds | PROVISIONAL ONLY | Wait 30+ days for GSC query data |

## 8. Action Executable TODAY Without GSC

**We can rebuild the second Decision Page (Heathrow vs Gatwick) — already done in Phase 16.** The next build(s) should target URLs with:

- ✅ Strategic V2 fit (DIRECT or ADJACENT)
- ✅ Reusable existing V1 component architecture
- ✅ Topic that Travelvus can authoritatively answer
- ✅ No dependency on GSC traffic data to justify

**Candidate:** `/google-flight-matrix/` → Decision Page (flight comparison tool, reusable template, strong V2 fit).

This decision does NOT require GSC data. It is strategically clear from content audit and V2 product fit alone.

---

**DETENTE.** No code. No redirects. No 410. No DNS. No deploy. Awaiting GSC observation checkpoints.
