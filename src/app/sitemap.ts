import type { MetadataRoute } from "next";
import { getAllGuideSlugs } from "@/data/guide-registry";
import { getAllKnowledgeSlugs } from "@/data/knowledge-registry";
import { SUPPORTED_CITIES } from "@/data/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.travelvus.com";
  const today = new Date().toISOString().split("T")[0]!;

  const entries: MetadataRoute.Sitemap = [];

  const add = (url: string, priority: number, freq: "weekly" | "monthly" = "monthly") => {
    entries.push({ url, lastModified: today, changeFrequency: freq, priority });
  };

  // Home
  add(baseUrl, 1.0, "weekly");

  // City hubs
  for (const cityId of SUPPORTED_CITIES) {
    add(`${baseUrl}/${cityId}/airport-choice`, 0.9, "weekly");
    add(`${baseUrl}/${cityId}-airports`, 0.8, "monthly");
  }

  // Decision guides
  for (const slug of getAllGuideSlugs()) {
    add(`${baseUrl}/guides/${slug}`, 0.8, "monthly");
  }

  // Knowledge articles
  for (const slug of getAllKnowledgeSlugs()) {
    add(`${baseUrl}/knowledge/${slug}`, 0.7, "monthly");
  }

  // Trust pages
  add(`${baseUrl}/methodology`, 0.8, "monthly");
  add(`${baseUrl}/editorial-standards`, 0.7, "monthly");
  add(`${baseUrl}/data-coverage`, 0.7, "monthly");
  add(`${baseUrl}/limitations`, 0.7, "monthly");
  add(`${baseUrl}/planner`, 0.9, "weekly");

  // Static pages
  add(`${baseUrl}/about`, 0.5, "monthly");
  add(`${baseUrl}/contact`, 0.5, "monthly");

  // Legacy articles (still valid routes)
  const legacy = [
    "compare/heathrow-vs-stansted", "compare/heathrow-vs-gatwick", "compare/gatwick-vs-stansted",
    "questions/london-airport-break-even", "google-flight-matrix", "expedia-taap",
    "vrl-bus-booking", "trimet-trip-planner", "top-rated-tourists-attractions-in-rome",
    "tsa-precheck-cost", "kayak-flights", "points-guy", "irctc-train-ticket-booking",
    "defense-travel-system", "bart-trip-planner", "mta-trip-planner", "aaa-travel",
    "costco-vacation", "tsa-lock", "wego-flight",
  ];
  for (const slug of legacy) {
    add(`${baseUrl}/${slug}`, 0.5, "monthly");
  }

  return entries;
}
