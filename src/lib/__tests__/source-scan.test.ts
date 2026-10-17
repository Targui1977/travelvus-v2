/**
 * Travelvus V2 — Source Scan Regression Tests
 *
 * Phase 123.1 — guards against the exact defects found in the SEO audit:
 *  - ghost /limitations URL
 *  - broken internal link to a nonexistent guide
 *  - literal template placeholders in comparison pages
 *  - stale "no direct Metro" claims for Orly (Metro 14 opened 2024-06-24)
 *
 * Scans source files on disk (node fs), so it works without rendering pages.
 */

import { describe, it, expect } from "vitest";
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

function collectSources(dir: string, out: { path: string; text: string }[] = []): { path: string; text: string }[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      if (entry === "__tests__" || entry === "node_modules") continue;
      collectSources(full, out);
    } else if (/\.(tsx?)$/.test(entry)) {
      out.push({ path: full.replace(/\\/g, "/"), text: readFileSync(full, "utf8") });
    }
  }
  return out;
}

const src = collectSources(join(process.cwd(), "src"));

describe("source scan — broken internal references", () => {
  it("never links to the ghost /limitations URL", () => {
    for (const f of src) {
      expect(f.text, f.path).not.toMatch(/["'`]\/limitations["'`]/);
    }
  });

  it("never links to the nonexistent financial-district guide", () => {
    for (const f of src) {
      expect(f.text, f.path).not.toContain("/guides/best-airport-for-financial-district");
    }
  });

  it("no canonical points to a non-www or http host", () => {
    for (const f of src) {
      const canonicals = f.text.match(/canonical:\s*["'`]([^"'`]+)["'`]/g) ?? [];
      for (const c of canonicals) {
        const value = c.replace(/canonical:\s*["'`]/, "").replace(/["'`]$/, "");
        if (value.startsWith("http")) {
          expect(value, f.path).toMatch(/^https:\/\/www\.travelvus\.com/);
        }
      }
    }
  });
});

describe("source scan — literal template placeholders in compare pages", () => {
  const compareFiles = src.filter((f) => /src\/app\/compare\/[^/]+\/page\.tsx$/.test(f.path));
  const forbidden = [
    "Depends on destination wins",
    "Tie — depends on destination wins",
    "London City for speed",
    "Depends on budget vs speed wins",
  ];

  it("scans every compare page", () => {
    expect(compareFiles.length).toBeGreaterThanOrEqual(20);
  });

  it("contains no placeholder verdict strings", () => {
    for (const f of compareFiles) {
      for (const bad of forbidden) {
        expect(f.text, `${f.path}: ${bad}`).not.toContain(bad);
      }
    }
  });

  it("has no future factual review dates from the audit (January 2027)", () => {
    for (const f of compareFiles) {
      expect(f.text, f.path).not.toContain('factualReviewDate: "January 2027"');
    }
  });
});

describe("source scan — Paris factual drift", () => {
  const parisFiles = src.filter(
    (f) => /paris|cdg|orly/i.test(f.path) && !/__tests__|node_modules/.test(f.path),
  );

  it("no Paris surface still claims Orly has no direct rail (Metro 14)", () => {
    for (const f of parisFiles) {
      expect(f.text, f.path).not.toMatch(/No direct (M[ée]tro|RER)/);
    }
  });

  it("no Paris surface still cites the retired €9.30 Orlyval premium", () => {
    for (const f of parisFiles) {
      expect(f.text, f.path).not.toMatch(/€?9\.30.*[Oo]rlyval|[Oo]rlyval.*€?9\.30/);
    }
  });

  it("no Paris surface still uses the pre-2026 RER B rail fares (€11.80 / bare €11 / bare €12)", () => {
    // Standalone fare tokens only: "~€11 (approx)" for OrlyBus is the new
    // canonical approximate value and must NOT trip this guard; "€120"
    // (full-service fares) is also legitimate. The lookarounds exclude both.
    const staleRailFare = /€11\.80|(?<!~)€11(?![\d.,])|(?<!~)€12(?![\d.,])/;
    for (const f of parisFiles) {
      expect(f.text, f.path).not.toMatch(staleRailFare);
    }
  });
});
