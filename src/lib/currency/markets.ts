/**
 * Travelvus V2 — Market-to-Currency Mapping
 * Each market key maps to its local destination currency.
 * Phase 100.4 — Global Currency Foundation.
 */

import type { CurrencyCode } from "./types";

export type MarketKey =
  | "london"
  | "new-york"
  | "paris"
  | "frankfurt"
  | "madrid"
  | "barcelona"
  | "rome"
  | "milan"
  | "lisbon"
  | "amsterdam"
  | "berlin"
  | "dublin"
  | "dubai"
  | "zurich"
  | "tokyo";

/** Primary currency for each destination market */
export const MARKET_CURRENCY: Record<MarketKey, CurrencyCode> = {
  london: "GBP",
  "new-york": "USD",
  paris: "EUR",
  frankfurt: "EUR",
  madrid: "EUR",
  barcelona: "EUR",
  rome: "EUR",
  milan: "EUR",
  lisbon: "EUR",
  amsterdam: "EUR",
  berlin: "EUR",
  dublin: "EUR",
  dubai: "AED",
  zurich: "CHF",
  tokyo: "JPY",
};

/** Human-readable market label */
export const MARKET_LABEL: Record<MarketKey, string> = {
  london: "London",
  "new-york": "New York",
  paris: "Paris",
  frankfurt: "Frankfurt",
  madrid: "Madrid",
  barcelona: "Barcelona",
  rome: "Rome",
  milan: "Milan",
  lisbon: "Lisbon",
  amsterdam: "Amsterdam",
  berlin: "Berlin",
  dublin: "Dublin",
  dubai: "Dubai",
  zurich: "Zurich",
  tokyo: "Tokyo",
};

/** Get the local currency for a market */
export function getMarketCurrency(market: MarketKey): CurrencyCode {
  return MARKET_CURRENCY[market];
}
