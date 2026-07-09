# Travelvus V2 — GSC Import Schema + URL Decision Matrix

**Phase:** 18
**Status:** AWAITING OWNER GSC EXPORTS
**Date:** 2026-07-08

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

## G. Next Step

1. Owner exports GSC CSVs → places in `docs/gsc-exports/`
2. I load, join to master ledger, apply decision rules
3. I produce **final migration action** for all 70 URLs
4. I produce **prioritized build order** for legacy pages
5. Phase 18 closes → Migration plan becomes evidence-based

---

**DETENTE.** Awaiting CSVs. No code changes. No redirects. No DNS. No deploy.
