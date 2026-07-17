import { defineConfig, devices } from "@playwright/test";

/**
 * Travelvus V2 — Playwright configuration.
 * Phase 107.1B — Production acceptance browser tests.
 *
 * Targets production by default. Override with BASE_URL env var.
 */

const BASE_URL = process.env.BASE_URL ?? "https://www.travelvus.com";

export default defineConfig({
  testDir: "./e2e",
  timeout: 60_000,
  expect: { timeout: 15_000 },
  fullyParallel: false,
  retries: 0,
  workers: 1,
  reporter: "list",

  use: {
    baseURL: BASE_URL,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "desktop",
      use: { ...devices["Desktop Chrome"], viewport: { width: 1440, height: 900 } },
    },
    {
      name: "mobile",
      use: { ...devices["Pixel 5"], viewport: { width: 390, height: 844 } },
    },
  ],
});
