/**
 * Phase 107.1B — Production Screenshot Capture
 *
 * Captures all 15 required screenshots from the live production domain.
 * Run: npx playwright test --config=playwright.config.ts e2e/capture-screenshots.spec.ts
 */

import { test } from "@playwright/test";
import path from "path";

const CANONICAL_URL =
  "/result?at=58&af=Berlin+%C2%B7+BER&at2=London+%C2%B7+STN&ad=20%3A40&aa=23%3A15&bt=126&bf=Berlin+%C2%B7+BER&bt2=London+%C2%B7+LHR&bd=14%3A10&ba=16%3A45";

const SCREENSHOT_DIR = path.resolve("qa/phase-107-1-production-acceptance");

async function waitForResult(page: any) {
  await page.waitForSelector("text=What this recommendation is based on", {
    timeout: 30_000,
  });
}

/* ═══════════════════════════════════════════════════════════ */
/* DESKTOP 1440×900                                              */
/* ═══════════════════════════════════════════════════════════ */

test.describe("Desktop Screenshots", () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test("01-home-quick-compare", async ({ page }) => {
    await page.goto("/");
    await page.waitForTimeout(2000);
    // Scroll to Quick Compare section
    await page.goto("/#compare");
    await page.waitForTimeout(1000);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "01-home-quick-compare.png"),
      fullPage: false,
    });
  });

  test("02-result-verdict", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    // Scroll to top to show the verdict
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "02-result-verdict.png"),
      fullPage: false,
    });
  });

  test("03-result-evidence", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    // Scroll to the Evidence section
    const evidence = page.getByText("What this recommendation is based on");
    await evidence.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "03-result-evidence.png"),
      fullPage: false,
    });
  });

  test("04-result-intelligence", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    // Scroll to DecisionIntelligence
    const intelligence = page.getByText(/Advantages|Trade-offs/).first();
    await intelligence.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "04-result-intelligence.png"),
      fullPage: false,
    });
  });

  test("05-edit-options-open", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    // Open edit panel
    const editBtn = page.getByRole("button", { name: /Edit options/ });
    await editBtn.click();
    await page.waitForTimeout(500);
    // Scroll to show edit panel
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "05-edit-options-open.png"),
      fullPage: false,
    });
  });

  test("06-recommendation-changed", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    // Open edit and remove bag
    const editBtn = page.getByRole("button", { name: /Edit options/ });
    await editBtn.click();
    await page.waitForTimeout(300);
    const removeBtn = page.getByRole("button", { name: /Remove.*45/ });
    await removeBtn.click();
    await page.waitForTimeout(2000);
    // Scroll to show changed state
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "06-recommendation-changed.png"),
      fullPage: false,
    });
  });

  test("07-result-reverted", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    // Change and then revert
    const editBtn = page.getByRole("button", { name: /Edit options/ });
    await editBtn.click();
    await page.waitForTimeout(300);
    const removeBtn = page.getByRole("button", { name: /Remove.*45/ });
    await removeBtn.click();
    await page.waitForTimeout(1500);
    // Click Undo
    const undoBtn = page.getByRole("button", { name: /Undo|Restore/ });
    await undoBtn.first().click();
    await page.waitForTimeout(1500);
    // Scroll to top
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "07-result-reverted.png"),
      fullPage: false,
    });
  });

  test("08-result-footer", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    // Scroll to footer
    const footer = page.locator("footer").last();
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "08-result-footer.png"),
      fullPage: false,
    });
  });
});

/* ═══════════════════════════════════════════════════════════ */
/* MOBILE 390×844                                                */
/* ═══════════════════════════════════════════════════════════ */

test.describe("Mobile Screenshots", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("09-mobile-verdict", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "09-mobile-verdict.png"),
      fullPage: false,
    });
  });

  test("10-mobile-evidence", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    const evidence = page.getByText("What this recommendation is based on");
    await evidence.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "10-mobile-evidence.png"),
      fullPage: false,
    });
  });

  test("11-mobile-flip-rules", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    const flips = page.getByText("When the recommendation changes");
    await flips.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "11-mobile-flip-rules.png"),
      fullPage: false,
    });
  });

  test("12-mobile-edit-options", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    const editBtn = page.getByRole("button", { name: /Edit options/ });
    await editBtn.click();
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "12-mobile-edit-options.png"),
      fullPage: false,
    });
  });

  test("13-mobile-recommendation-changed", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    const editBtn = page.getByRole("button", { name: /Edit options/ });
    await editBtn.click();
    await page.waitForTimeout(300);
    const removeBtn = page.getByRole("button", { name: /Remove.*45/ });
    await removeBtn.click();
    await page.waitForTimeout(2000);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "13-mobile-recommendation-changed.png"),
      fullPage: false,
    });
  });

  test("14-mobile-no-overflow", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    // Scroll through entire page to check overflow
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "14-mobile-no-overflow.png"),
      fullPage: true,
    });
  });

  test("15-mobile-footer", async ({ page }) => {
    await page.goto(CANONICAL_URL);
    await waitForResult(page);
    const footer = page.locator("footer").last();
    await footer.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, "15-mobile-footer.png"),
      fullPage: false,
    });
  });
});
