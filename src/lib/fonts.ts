import localFont from "next/font/local";

/**
 * Travelvus V2 — Self-hosted font configuration.
 *
 * All three type families are extracted from the approved
 * Design-to-Code Handoff Specification bundle and served locally.
 * No external CDN dependency.
 */

export const geistSans = localFont({
  src: [
    {
      path: "../../public/fonts/geist-sans-400-normal-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/geist-sans-500-normal-latin.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/geist-sans-600-normal-latin.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/geist-sans-700-normal-latin.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--sans",
  display: "swap",
  fallback: ["Hanken Grotesk", "system-ui", "sans-serif"],
});

export const instrumentSerif = localFont({
  src: [
    {
      path: "../../public/fonts/instrument-serif-400-normal-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/instrument-serif-400-italic-latin.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});

export const ibmPlexMono = localFont({
  src: [
    {
      path: "../../public/fonts/ibm-plex-mono-400-normal-latin.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ibm-plex-mono-500-normal-latin.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ibm-plex-mono-600-normal-latin.woff2",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--mono",
  display: "swap",
  fallback: ["ui-monospace", "monospace"],
});
