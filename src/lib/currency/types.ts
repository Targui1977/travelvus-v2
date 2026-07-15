/**
 * Travelvus V2 — Currency Types
 * ISO 4217 currency codes and structured money values.
 * Phase 100.4 — Global Currency Foundation.
 */

/* ── Currency codes (ISO 4217) ─────────────────────────────── */

export type CurrencyCode =
  | "GBP"  // Pound sterling
  | "EUR"  // Euro
  | "USD"  // US dollar
  | "AED"  // UAE dirham
  | "CHF"  // Swiss franc
  | "JPY"  // Japanese yen
  | "CAD"  // Canadian dollar
  | "AUD"; // Australian dollar

/* ── Structured money value ────────────────────────────────── */

export interface MoneyValue {
  /** Numeric amount in the declared currency */
  amount: number;
  /** ISO 4217 currency code */
  currency: CurrencyCode;
  /** True if this value is approximate (renders with ~ prefix) */
  approximate?: boolean;
  /** Human-readable qualifier, e.g. "off-peak single" */
  qualifier?: string;
  /** Original currency if this is a conversion */
  sourceCurrency?: CurrencyCode;
  /** When the conversion was computed (ISO date) */
  convertedAt?: string;
  /** Conversion rate used */
  conversionRate?: number;
  /** Present as a range [min, max] instead of a single amount */
  range?: [number, number];
  /** True if this is a per-person cost */
  perPerson?: boolean;
  /** Period for recurring costs, e.g. "one-way", "return", "night" */
  period?: string;
  /** Free-text editorial note */
  note?: string;
}

/* ── Helpers ───────────────────────────────────────────────── */

/** Create a simple exact MoneyValue */
export function money(
  amount: number,
  currency: CurrencyCode,
  opts?: Partial<Omit<MoneyValue, "amount" | "currency">>
): MoneyValue {
  return { amount, currency, ...opts };
}

/** Create an approximate MoneyValue */
export function approxMoney(
  amount: number,
  currency: CurrencyCode,
  opts?: Partial<Omit<MoneyValue, "amount" | "currency" | "approximate">>
): MoneyValue {
  return { amount, currency, approximate: true, ...opts };
}
