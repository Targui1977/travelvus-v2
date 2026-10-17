import { test, expect } from "@playwright/test";

/**
 * Phase 123.1.2 — Editorial integrity guards.
 *
 * 1. Every "Here is…" comparison intro must be followed by actual
 *    comparison content (a table), never by the next heading.
 * 2. Related links must use the styled row pattern (flex row with a
 *    bottom border) — not the old unstyled concatenated anchors.
 */

const GUIDE_PAGES = [
  "/guides/fastest-london-airport",
  "/guides/best-airport-for-central-london",
  "/guides/best-airport-for-north-london",
  "/guides/best-airport-for-east-london",
  "/guides/best-airport-for-south-london",
  "/guides/best-london-airport-for-budget-travellers",
  "/guides/best-london-airport-for-business-travel",
  "/guides/cheapest-london-airport",
];

for (const path of GUIDE_PAGES) {
  test(`${path}: comparison intros are followed by content`, async ({ page }) => {
    await page.goto(path);
    await page.waitForLoadState("domcontentloaded");

    const intros = page.locator("p", { hasText: "Here is" });
    const count = await intros.count();
    expect(count, `${path} should contain at least one comparison intro`).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const p = intros.nth(i);
      const tag = await p.evaluate((el) => {
        let sib = el.nextElementSibling;
        while (sib && sib.tagName === "DIV" && (sib as HTMLElement).children.length === 0) sib = sib.nextElementSibling;
        return sib?.tagName ?? null;
      });
      expect(tag, `${path} intro #${i} is not followed by comparison content`).toBe("TABLE");
    }
  });
}

test("related links use the styled row pattern", async ({ page }) => {
  await page.goto("/guides/fastest-london-airport");
  await page.waitForLoadState("domcontentloaded");

  const rows = page.locator("[class*='relatedGuideRow']");
  expect(await rows.count()).toBeGreaterThanOrEqual(3);

  const first = rows.first();
  const style = await first.evaluate((el) => {
    const cs = getComputedStyle(el);
    return { display: cs.display, borderBottom: cs.borderBottomWidth, paddingTop: cs.paddingTop };
  });
  expect(style.display).toBe("flex");
  expect(parseFloat(style.borderBottom)).toBeGreaterThan(0);
  expect(parseFloat(style.paddingTop)).toBeGreaterThan(0);

  // Every row must have a valid internal destination (no href="#").
  const hrefs = await rows.evaluateAll((els) => els.map((e) => e.getAttribute("href")));
  for (const href of hrefs) {
    expect(href).toMatch(/^\/[a-z]/);
  }
});
