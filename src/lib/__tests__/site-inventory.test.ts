/**
 * Travelvus V2 — Site Inventory Tests
 *
 * Phase 123.1 — SEO recovery regression tests.
 * Validates the single source of truth for public routes:
 *  - no duplicates, no trailing slashes, no noindex leaks
 *  - registry slugs all resolve inside the inventory
 *  - the /limitations ghost URL can never reappear
 */

import { describe, it, expect } from "vitest";
import {
  getAllPublicUrls,
  STATIC_INDEXABLE_ROUTES,
  NOINDEX_ROUTES,
  SITE_HOST,
} from "../site-inventory";
import { getAllGuideSlugs } from "@/data/guide-registry";
import { getAllKnowledgeSlugs } from "@/data/knowledge-registry";

describe("site inventory — structural invariants", () => {
  it("contains no duplicate URLs", () => {
    const urls = getAllPublicUrls();
    expect(new Set(urls).size).toBe(urls.length);
  });

  it("is sorted", () => {
    const urls = getAllPublicUrls();
    expect([...urls].sort((a, b) => a.localeCompare(b))).toEqual(urls);
  });

  it("every URL starts with / and has no trailing slash (except root)", () => {
    for (const url of getAllPublicUrls()) {
      expect(url.startsWith("/")).toBe(true);
      if (url !== "/") expect(url.endsWith("/")).toBe(false);
    }
  });

  it("excludes internal/noindex routes", () => {
    const urls = getAllPublicUrls();
    for (const hidden of NOINDEX_ROUTES) {
      expect(urls).not.toContain(hidden);
    }
  });

  it("includes the real /limits route and never the ghost /limitations", () => {
    const urls = getAllPublicUrls();
    expect(urls).toContain("/limits");
    expect(urls).not.toContain("/limitations");
  });

  it("covers every registry guide and knowledge slug", () => {
    const urls = new Set(getAllPublicUrls());
    for (const slug of getAllGuideSlugs()) {
      expect(urls.has(`/guides/${slug}`)).toBe(true);
    }
    for (const slug of getAllKnowledgeSlugs()) {
      expect(urls.has(`/knowledge/${slug}`)).toBe(true);
    }
  });

  it("covers city hubs for every supported city", () => {
    const urls = new Set(getAllPublicUrls());
    expect(urls.has("/london/airport-choice")).toBe(true);
    expect(urls.has("/new-york/airport-choice")).toBe(true);
    expect(urls.has("/paris/airport-choice")).toBe(true);
  });

  it("static list has no duplicates", () => {
    expect(new Set(STATIC_INDEXABLE_ROUTES).size).toBe(STATIC_INDEXABLE_ROUTES.length);
  });

  it("host is canonical www over https", () => {
    expect(SITE_HOST).toBe("https://www.travelvus.com");
  });
});
