/**
 * Travelvus V2 — Money Formatter
 * Uses Intl.NumberFormat for locale-aware currency display.
 * Phase 100.4 — Global Currency Foundation.
 */

import type { CurrencyCode, MoneyValue } from "./types";

/* ── Locale per currency ───────────────────────────────────── */

const CURRENCY_LOCALE: Record<CurrencyCode, string> = {
  GBP: "en-GB",
  EUR: "de-DE",
  USD: "en-US",
  AED: "ar-AE",
  CHF: "de-CH",
  JPY: "ja-JP",
  CAD: "en-CA",
  AUD: "en-AU",
};

/* ── Public API ────────────────────────────────────────────── */

/** Format a MoneyValue to a display string (e.g. "£25", "~€46", "£25–£35") */
export function formatMoney(mv: MoneyValue, opts?: { compact?: boolean }): string {
  const { amount, currency, approximate, range } = mv;

  // Range display
  if (range) {
    const [lo, hi] = range;
    const loStr = formatAmount(lo, currency, opts);
    const hiStr = formatAmount(hi, currency, opts);
    const prefix = approximate ? "~" : "";
    return `${prefix}${loStr}–${hiStr}`;
  }

  const formatted = formatAmount(amount, currency, opts);
  return approximate ? `~${formatted}` : formatted;
}

/** Format a number + currency code to a display string */
export function formatAmount(
  amount: number,
  currency: CurrencyCode,
  opts?: { compact?: boolean }
): string {
  const locale = CURRENCY_LOCALE[currency] || "en-GB";

  try {
    const formatter = new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      currencyDisplay: opts?.compact ? "narrowSymbol" : "symbol",
      minimumFractionDigits: 0,
      maximumFractionDigits: currency === "JPY" ? 0 : 2,
    });
    return formatter.format(amount);
  } catch {
    // Fallback for environments without full Intl support
    return `${currency} ${amount.toFixed(currency === "JPY" ? 0 : 2)}`;
  }
}

/** Format a MoneyValue with explicit ISO code appended (e.g. "£25 GBP") */
export function formatMoneyWithCode(mv: MoneyValue): string {
  const formatted = formatMoney(mv);
  return `${formatted} ${mv.currency}`;
}

/** Format a simple (non-MoneyValue) amount for inline use */
export function formatCurrencyAmount(
  amount: number,
  currency: CurrencyCode,
  approximate?: boolean
): string {
  const mv: MoneyValue = { amount, currency, approximate };
  return formatMoney(mv);
}

/** Get just the currency symbol for a code */
export function getCurrencySymbol(currency: CurrencyCode): string {
  return formatAmount(0, currency).replace(/[\d.,\s]/g, "").trim() || currency;
}
