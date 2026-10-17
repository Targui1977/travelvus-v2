/**
 * Travelvus V2 — Internal Links Validation Tests
 *
 * Phase 123.1 — every related-guide/knowledge link emitted from the
 * registries must resolve to a real public URL in the site inventory.
 * Prevents the financial-district-style broken links from reappearing.
 */

import { describe, it, expect } from "vitest";
import { getAllPublicUrls, NOINDEX_ROUTES } from "../site-inventory";
import { GUIDE_REGISTRY } from "@/data/guide-registry";
import { KNOWLEDGE_REGISTRY } from "@/data/knowledge-registry";

describe("registry internal links resolve", () => {
  const valid = new Set(getAllPublicUrls());
  // In-app targets: the Decision Engine result screen and home compare
  // are valid CTA destinations even though they are not in the sitemap.
  const validCta = new Set([...getAllPublicUrls(), ...NOINDEX_ROUTES, "/"]);

  it("every guide relatedGuides href is a real public URL", () => {
    for (const [slug, guide] of Object.entries(GUIDE_REGISTRY)) {
      for (const related of guide.relatedGuides ?? []) {
        expect(valid.has(related.href), `broken href ${related.href} in guide ${slug}`).toBe(true);
      }
    }
  });

  it("every guide ctaHref is a valid in-app path", () => {
    for (const [slug, guide] of Object.entries(GUIDE_REGISTRY)) {
      if (!guide.ctaHref) continue;
      const path = guide.ctaHref.split("?")[0].replace(/#.*$/, "");
      expect(validCta.has(path), `broken ctaHref ${guide.ctaHref} in guide ${slug}`).toBe(true);
    }
  });

  it("every knowledge relatedGuides/relatedKnowledge/hubLink href is a real public URL", () => {
    for (const [slug, entry] of Object.entries(KNOWLEDGE_REGISTRY)) {
      for (const related of entry.relatedGuides ?? []) {
        expect(valid.has(related.href), `broken guide href ${related.href} in knowledge ${slug}`).toBe(true);
      }
      for (const related of entry.relatedKnowledge ?? []) {
        expect(valid.has(related.href), `broken knowledge href ${related.href} in knowledge ${slug}`).toBe(true);
      }
      if (entry.hubLink) {
        expect(valid.has(entry.hubLink.href), `broken hubLink ${entry.hubLink.href} in knowledge ${slug}`).toBe(true);
      }
    }
  });
});
