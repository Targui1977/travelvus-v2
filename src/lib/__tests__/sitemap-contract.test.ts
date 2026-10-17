/**
 * Travelvus V2 — Sitemap Contract Tests
 *
 * Phase 123.1 — SEO recovery regression tests.
 * Guards the sitemap contract:
 *  - every emitted URL is absolute on the canonical host
 *  - no fabricated lastModified dates
 *  - home keeps top priority
 *  - noindex/ghost URLs can never be emitted
 */

import { describe, it, expect } from "vitest";
import sitemap from "@/app/sitemap";
import { NOINDEX_ROUTES } from "../site-inventory";

describe("sitemap contract", () => {
  const entries = sitemap();

  it("emits entries for all public URLs", () => {
    expect(entries.length).toBeGreaterThan(100);
  });

  it("every URL is absolute on the canonical host", () => {
    for (const entry of entries) {
      expect(entry.url.startsWith("https://www.travelvus.com")).toBe(true);
    }
  });

  it("emits no lastModified (no reliable per-URL dates exist)", () => {
    for (const entry of entries) {
      expect(entry.lastModified).toBeUndefined();
    }
  });

  it("home is present with top priority", () => {
    const home = entries.find((e) => e.url === "https://www.travelvus.com");
    expect(home).toBeDefined();
    expect(home?.priority).toBe(1.0);
  });

  it("never emits noindex routes or the /limitations ghost", () => {
    const urls = entries.map((e) => e.url.replace("https://www.travelvus.com", ""));
    for (const hidden of NOINDEX_ROUTES) expect(urls).not.toContain(hidden);
    expect(urls).not.toContain("/limitations");
    expect(urls).toContain("/limits");
  });

  it("has no duplicate URLs", () => {
    const urls = entries.map((e) => e.url);
    expect(new Set(urls).size).toBe(urls.length);
  });
});
