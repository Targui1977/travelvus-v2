import { test, expect } from "@playwright/test";

/**
 * Phase 123.1.1 — Surgical visual repair verification.
 *
 * Default: asserts the repaired layout (no horizontal overflow at any
 * width; desktop article column must not collapse).
 *   VISUAL_REPORT=1 → report-only measurements + screenshots.
 *
 * Measures the real rendered layout (bounding boxes + scroll widths),
 * not screenshots alone. Screenshots are saved to test-results/screenshots-1231-1/
 * for human review.
 */

const PAGES = [
  { name: "north-london", path: "/guides/best-airport-for-north-london", expectFixed: true },
  { name: "fastest-london-airport", path: "/guides/fastest-london-airport", expectFixed: true },
  { name: "central-london", path: "/guides/best-airport-for-central-london", expectFixed: true },
  { name: "central-paris", path: "/guides/best-airport-for-central-paris", expectFixed: true },
  { name: "heathrow-vs-gatwick", path: "/guides/heathrow-vs-gatwick", expectFixed: false },
  { name: "canary-wharf", path: "/guides/best-airport-for-canary-wharf", expectFixed: false },
] as const;

const CHECK_FIXED = process.env.VISUAL_REPORT !== "1";
const SHOT_DIR = "test-results/screenshots-1231-1";

const widths = [1440, 1280, 768, 390] as const;

for (const page of PAGES) {
  test.describe(page.name, () => {
    for (const width of widths) {
      test(`@${width}px — measures and screenshots`, async ({ page: p }) => {
        await p.setViewportSize({ width, height: 900 });
        await p.goto(page.path);
        // domcontentloaded: networkidle never settles in dev mode (HMR socket)
        await p.waitForLoadState("domcontentloaded");
        await p.waitForTimeout(400);

        const report: Record<string, unknown> = {};

        const tocRail = p.locator("[class*='tocRail']").first();
        const guideContent = p.locator("[class*='guideContent']").first();

        if ((await tocRail.count()) > 0) {
          report.tocRailWidth = Math.round((await tocRail.boundingBox())?.width ?? 0);
        }
        if ((await guideContent.count()) > 0) {
          report.guideContentWidth = Math.round((await guideContent.boundingBox())?.width ?? 0);
        }
        report.scrollWidth = await p.evaluate(() => document.documentElement.scrollWidth);
        report.innerWidth = await p.evaluate(() => window.innerWidth);

        const overflow = (report.scrollWidth as number) - (report.innerWidth as number);

        await p.screenshot({
          path: `${SHOT_DIR}/${CHECK_FIXED ? "after" : "before"}/${page.name}-${width}.png`,
          fullPage: true,
        });

        if (CHECK_FIXED && page.expectFixed) {
          // 1. Desktop article column must not collapse.
          if (width >= 1280) {
            expect(report.guideContentWidth, `${page.name} article collapsed at ${width}px: ${JSON.stringify(report)}`).toBeGreaterThan(600);
          }
          if (width === 768) {
            expect(report.guideContentWidth, `${page.name} article too narrow at 768px: ${JSON.stringify(report)}`).toBeGreaterThan(500);
          }
        }

        // 2. No horizontal overflow at any width (applies to every page, both modes documented in report).
        if (CHECK_FIXED) {
          expect(overflow, `${page.name} horizontal overflow at ${width}px: ${JSON.stringify(report)}`).toBeLessThanOrEqual(1);
        }

        console.log(`[${CHECK_FIXED ? "AFTER" : "BEFORE"}] ${page.name} @${width}px → ${JSON.stringify(report)}`);
      });
    }
  });
}
