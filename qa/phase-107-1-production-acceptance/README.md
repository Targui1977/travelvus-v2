# Phase 107.1B — Production Acceptance Screenshots

**Capture Date:** 2026-07-17
**Production URL:** https://www.travelvus.com
**Commit SHA:** (see latest deployment)
**Deployment ID:** (see latest deployment)

---

## Desktop Screenshots (1440×900)

| # | Filename | URL | Scenario | Expected |
|---|----------|-----|----------|----------|
| 01 | `01-home-quick-compare.png` | `/` | Home page scrolled to Quick Compare | Form visible with canonical BER→STN vs LHR pre-filled |
| 02 | `02-result-verdict.png` | Canonical result URL | Result page after cascade | Navy verdict block: "Heathrow is the better overall deal" |
| 03 | `03-result-evidence.png` | Canonical result URL | Scrolled to Evidence | "What this recommendation is based on" with weighted factors |
| 04 | `04-result-intelligence.png` | Canonical result URL | Scrolled to Intelligence | State label, advantages, trade-offs, flip rules |
| 05 | `05-edit-options-open.png` | Canonical result URL | Edit panel open | "Edit one variable" + "Remove (−€45)" button visible |
| 06 | `06-recommendation-changed.png` | Canonical result URL | After bag removal | "Recommendation changed" banner + updated verdict |
| 07 | `07-result-reverted.png` | Canonical result URL | After undo | Original verdict restored, no changed banner |
| 08 | `08-result-footer.png` | Canonical result URL | Scrolled to bottom | Footer with Home, Methodology, London Airports links |

## Mobile Screenshots (390×844)

| # | Filename | URL | Scenario | Expected |
|---|----------|-----|----------|----------|
| 09 | `09-mobile-verdict.png` | Canonical result URL | Verdict block visible | Readable verdict, no horizontal overflow |
| 10 | `10-mobile-evidence.png` | Canonical result URL | Evidence section | Factors stack vertically, scannable |
| 11 | `11-mobile-flip-rules.png` | Canonical result URL | Flip rules section | IF→THEN rules wrap cleanly within 390px |
| 12 | `12-mobile-edit-options.png` | Canonical result URL | Edit panel open | Toggle button 44px+, panel fits |
| 13 | `13-mobile-recommendation-changed.png` | Canonical result URL | After bag removal | Changed banner fits, no overflow |
| 14 | `14-mobile-no-overflow.png` | Canonical result URL | Full page scrolled | No horizontal scrollbar, all content within 390px |
| 15 | `15-mobile-footer.png` | Canonical result URL | Footer | Footer links visible and tappable |

---

## Capture Instructions

```bash
# Run e2e tests with screenshot capture
npx playwright test --project=desktop --project=mobile

# Or capture specific screenshots manually:
# 1. Open browser at 1440×900
# 2. Navigate to https://www.travelvus.com/result?at=58&af=...
# 3. Wait for cascade to complete
# 4. Capture each state as listed above
```
