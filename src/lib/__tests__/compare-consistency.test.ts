/**
 * Travelvus V2 — Compare Pages Consistency Tests
 *
 * Phase 123.1 — regression guards for the repaired comparison pages:
 *  - every atAGlance verdict must mention its winner
 *  - every "saves ~€N" figure must equal |costA − costB|
 *  - every "~N min faster" figure must equal |timeA − timeB|
 *  - review dates are current
 * These encode the audit contract (docs/EDITORIAL_CONFLICTS.md L9).
 *
 * The three engine-driven pages (heathrow-vs-stansted, heathrow-vs-gatwick,
 * gatwick-vs-stansted) use a different template and are covered by their
 * own threshold/engine tests.
 */

import { describe, it, expect } from "vitest";

const DATA_PAGES = [
  "heathrow-vs-luton", "heathrow-vs-london-city", "gatwick-vs-luton",
  "gatwick-vs-london-city", "luton-vs-london-city", "stansted-vs-luton",
  "stansted-vs-london-city",
  "amsterdam-to-london", "barcelona-to-london", "berlin-to-london",
  "dublin-to-london", "frankfurt-to-london", "lisbon-to-london",
  "madrid-to-london", "milan-to-london", "paris-to-london", "rome-to-london",
] as const;

function parseMinutes(value: string): number | null {
  const m = value.match(/(\d+)h\s*(\d+)m/);
  if (!m) return null;
  return Number(m[1]) * 60 + Number(m[2]);
}

function parseMoney(value: string): number | null {
  const m = value.match(/[€£$](\d+)(?![\d.,])/);
  if (!m) return null;
  return Number(m[1]);
}

type GlanceRow = { factor: string; winner: string; a: string; b: string; verdict: string; isFinal?: boolean };

const NON_AIRPORT_WINNERS = new Set(["—", "Tie", "Split decision"]);

describe("compare pages — verdict consistency", () => {
  for (const slug of DATA_PAGES) {
    it(`${slug}: verdicts mention their winners`, async () => {
      const mod = await import(`../../app/compare/${slug}/page`);
      const DATA = mod.DATA;
      expect(DATA, "page must export DATA").toBeDefined();
      for (const row of DATA.atAGlance as GlanceRow[]) {
        if (!row.verdict || !row.winner) continue;
        if (NON_AIRPORT_WINNERS.has(row.winner)) continue;
        expect(
          row.verdict,
          `row "${row.factor}" winner "${row.winner}" but verdict "${row.verdict}"`,
        ).toContain(row.winner);
      }
    });

    it(`${slug}: "saves ~N" figures equal |costA − costB|`, async () => {
      const mod = await import(`../../app/compare/${slug}/page`);
      const rows = (mod.DATA.atAGlance as GlanceRow[]).filter((r) => /cost/i.test(r.factor));
      for (const row of rows) {
        const a = parseMoney(row.a);
        const b = parseMoney(row.b);
        const claimed = row.verdict.match(/saves\s*~?[€£$](\d+)/i)?.[1];
        if (a === null || b === null || !claimed) continue;
        expect(
          Math.abs(a - b),
          `${slug} "${row.factor}": a=${row.a} b=${row.b} but verdict says saves ~${claimed}`,
        ).toBe(Number(claimed));
      }
    });

    it(`${slug}: "~N faster" figures equal |timeA − timeB|`, async () => {
      const mod = await import(`../../app/compare/${slug}/page`);
      const rows = (mod.DATA.atAGlance as GlanceRow[]).filter((r) => /time/i.test(r.factor));
      for (const row of rows) {
        const a = parseMinutes(row.a);
        const b = parseMinutes(row.b);
        const claimed = row.verdict.match(/(\d+)\s*min(?:utes)?\s*faster/i)?.[1];
        if (a === null || b === null || !claimed) continue;
        expect(
          Math.abs(a - b),
          `${slug} "${row.factor}": a=${row.a} b=${row.b} but verdict says ~${claimed} faster`,
        ).toBe(Number(claimed));
      }
    });

    it(`${slug}: review dates are current`, async () => {
      const mod = await import(`../../app/compare/${slug}/page`);
      const DATA = mod.DATA;
      expect(DATA.lastReviewed).toBe("October 2026");
      expect(DATA.factualReviewDate).toBe("April 2027");
    });
  }
});

describe("compare pages — threshold consistency (engine-driven pages)", () => {
  it("heathrow-vs-stansted: threshold matches the break-even page (>€101)", async () => {
    const mod = await import("../../app/compare/heathrow-vs-stansted/page");
    const t = mod.THRESHOLD;
    expect(t.lineValue).toBe(101);
    expect(t.currentValue).toBe(68);
    // current saving (68) is €33 short of the line: Heathrow still wins on total
    expect(t.lineValue - t.currentValue).toBe(33);
  });

  it("heathrow-vs-gatwick: threshold derives from the shared model", async () => {
    const mod = await import("../../app/compare/heathrow-vs-gatwick/page");
    expect(mod.THRESHOLD).toBeDefined();
    expect(typeof mod.THRESHOLD.flightAdvantage).toBe("number");
    expect(mod.THRESHOLD.explanation).toContain("Gatwick");
  });
});
