import type { MetadataRoute } from "next";
import { getAllPublicUrls, SITE_HOST } from "@/lib/site-inventory";

/**
 * Priority & change-frequency policy.
 * lastModified is intentionally omitted: the repo has no reliable
 * per-URL publication/update dates, and a fabricated date (or a
 * build-date stamped on every URL) is worse than none.
 */
const PRIORITY: Record<string, { priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }> = {
  "/": { priority: 1.0, freq: "weekly" },
};

function priorityFor(path: string): { priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] } {
  if (path === "/") return { priority: 1.0, freq: "weekly" };
  if (path === "/planner" || path.endsWith("/airport-choice") || path.endsWith("-airports") || path === "/london-airport-decision-center") {
    return { priority: 0.9, freq: "weekly" };
  }
  if (path.startsWith("/compare/") || path.startsWith("/guides/")) return { priority: 0.8, freq: "monthly" };
  if (path.startsWith("/knowledge/")) return { priority: 0.7, freq: "monthly" };
  if (path.startsWith("/questions/")) return { priority: 0.7, freq: "monthly" };
  if (["/methodology", "/editorial-standards", "/data-coverage", "/limits"].includes(path)) return { priority: 0.7, freq: "monthly" };
  return { priority: 0.5, freq: "monthly" };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllPublicUrls().map((path) => {
    const { priority, freq } = priorityFor(path);
    return {
      url: `${SITE_HOST}${path === "/" ? "" : path}`,
      changeFrequency: freq,
      priority,
    };
  });
}
