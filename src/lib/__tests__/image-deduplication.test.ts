/**
 * Travelvus V2 — Image Deduplication Guardrail
 *
 * Permanent rule: A Hero image must appear only once within its own page.
 * The same source must not be repeated inside the article body.
 *
 * Phase 89.3
 */

import { describe, it, expect } from "vitest";
import fs from "fs";
import path from "path";

/* ── All legacy article paths ──────────────────────────────── */

const LEGACY_ARTICLES = [
  "wego-flight",
  "kayak-flights",
  "tsa-precheck-cost",
  "points-guy",
  "unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system",
  "aaa-travel",
  "bart-trip-planner",
  "costco-vacation",
  "defense-travel-system",
  "expedia-taap",
  "irctc-train-ticket-booking",
  "mta-trip-planner",
  "top-rated-tourists-attractions-in-rome",
  "trimet-trip-planner",
  "tsa-lock",
  "ultimate-guide-to-interrailing-explore-europe-by-train-with-ease",
  "unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide",
  "vrl-bus-booking",
];

/* ── Helpers ───────────────────────────────────────────────── */

function getArticlePath(slug: string): string {
  return path.resolve(
    __dirname,
    `../../app/${slug}/page.tsx`
  );
}

function extractHeroImage(content: string): string | null {
  const match = content.match(/heroImage="([^"]+)"/);
  return match ? match[1] : null;
}

function extractBodyImages(content: string): string[] {
  // Find body content after the LegacyArticleLayout opening tag
  const tagStart = content.indexOf("<LegacyArticleLayout");
  if (tagStart === -1) return [];

  const tagEnd = content.indexOf(">", tagStart);
  if (tagEnd === -1) return [];

  const body = content.slice(tagEnd + 1);

  // Extract all img src attributes
  const imgRegex = /<img[^>]*src="([^"]+)"/g;
  const sources: string[] = [];
  let match;
  while ((match = imgRegex.exec(body)) !== null) {
    sources.push(match[1]);
  }
  return sources;
}

/* ── Tests ─────────────────────────────────────────────────── */

describe("Image deduplication guardrail", () => {
  for (const slug of LEGACY_ARTICLES) {
    it(`${slug}: hero image does not repeat in body`, () => {
      const filePath = getArticlePath(slug);

      // Skip if file doesn't exist (graceful for CI)
      if (!fs.existsSync(filePath)) {
        console.warn(`  SKIP: ${filePath} not found`);
        return;
      }

      const content = fs.readFileSync(filePath, "utf-8");

      const heroImage = extractHeroImage(content);
      // Text-led heroes (no image) are fine — nothing to deduplicate
      if (!heroImage || heroImage === "") return;

      const bodyImages = extractBodyImages(content);

      // Check for exact path match
      const duplicates = bodyImages.filter(
        (bodyImg) =>
          bodyImg === heroImage ||
          path.basename(bodyImg) === path.basename(heroImage)
      );

      if (duplicates.length > 0) {
        // Provide a clear failure message
        expect(
          `DUPLICATE in ${slug}: hero="${heroImage}" also found in body: [${duplicates.join(", ")}]`
        ).toBe("CLEAN");
      }

      // If we get here, no duplicates — pass implicitly
      expect(duplicates).toHaveLength(0);
    });
  }

  it("all 18 legacy articles exist on disk", () => {
    let found = 0;
    for (const slug of LEGACY_ARTICLES) {
      const filePath = getArticlePath(slug);
      if (fs.existsSync(filePath)) found++;
    }
    expect(found).toBe(18);
  });
});

describe("Tier 1 articles preserve unique inline images", () => {
  it("wego-flight keeps 2 unique inline images", () => {
    const content = fs.readFileSync(getArticlePath("wego-flight"), "utf-8");
    const bodyImages = extractBodyImages(content);
    expect(bodyImages.length).toBeGreaterThanOrEqual(2);
    // Verify these are unique (not the hero)
    expect(bodyImages.every((img) => !img.includes("wego-flight-1024x640"))).toBe(true);
  });

  it("tsa-precheck-cost keeps its unique inline image", () => {
    const content = fs.readFileSync(getArticlePath("tsa-precheck-cost"), "utf-8");
    const bodyImages = extractBodyImages(content);
    expect(bodyImages.length).toBeGreaterThanOrEqual(1);
    expect(bodyImages.every((img) => !img.includes("tsa-precheck-cost.webp"))).toBe(true);
  });

  it("rome-attractions keeps 9 unique inline images", () => {
    const content = fs.readFileSync(
      getArticlePath("top-rated-tourists-attractions-in-rome"),
      "utf-8"
    );
    const bodyImages = extractBodyImages(content);
    expect(bodyImages.length).toBeGreaterThanOrEqual(9);
  });

  it("expedia-taap keeps its unique inline image", () => {
    const content = fs.readFileSync(getArticlePath("expedia-taap"), "utf-8");
    const bodyImages = extractBodyImages(content);
    expect(bodyImages.length).toBeGreaterThanOrEqual(1);
  });
});
