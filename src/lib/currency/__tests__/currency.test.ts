import { describe, it, expect } from "vitest";
import { money, approxMoney } from "../types";
import { formatMoney, formatCurrencyAmount, getCurrencySymbol } from "../formatMoney";
import { getMarketCurrency, MARKET_CURRENCY } from "../markets";

describe("formatMoney", () => {
  it("formats GBP", () => {
    expect(formatMoney(money(25, "GBP"))).toContain("25");
  });

  it("formats EUR", () => {
    expect(formatMoney(money(46, "EUR"))).toContain("46");
  });

  it("formats USD", () => {
    expect(formatMoney(money(85, "USD"))).toContain("85");
  });

  it("formats AED with explicit code", () => {
    const f = formatMoney(money(120, "AED"));
    expect(f).toContain("120");
  });

  it("formats JPY without decimals", () => {
    const f = formatMoney(money(2500, "JPY"));
    expect(f).not.toContain(".00");
  });

  it("prefixes approximate values", () => {
    const f = formatMoney(approxMoney(25, "GBP"));
    expect(f).toContain("~");
  });

  it("displays ranges", () => {
    const f = formatMoney({ amount: 0, currency: "GBP", range: [25, 35] });
    expect(f).toContain("25");
    expect(f).toContain("35");
  });

  it("handles zero", () => {
    const f = formatMoney(money(0, "GBP"));
    expect(f).toContain("0");
  });
});

describe("formatCurrencyAmount", () => {
  it("formats simple amounts", () => {
    expect(formatCurrencyAmount(100, "EUR")).toContain("100");
  });

  it("supports approximate flag", () => {
    expect(formatCurrencyAmount(50, "GBP", true)).toContain("~");
  });
});

describe("getCurrencySymbol", () => {
  it("returns symbol for GBP", () => {
    expect(getCurrencySymbol("GBP")).toBe("£");
  });
  it("returns symbol for EUR", () => {
    expect(getCurrencySymbol("EUR")).toBe("€");
  });
  it("returns symbol for USD", () => {
    expect(getCurrencySymbol("USD")).toBe("$");
  });
});

describe("market currency mapping", () => {
  it("london returns GBP", () => {
    expect(getMarketCurrency("london")).toBe("GBP");
  });
  it("new-york returns USD", () => {
    expect(getMarketCurrency("new-york")).toBe("USD");
  });
  it("paris returns EUR", () => {
    expect(getMarketCurrency("paris")).toBe("EUR");
  });
  it("dubai returns AED", () => {
    expect(getMarketCurrency("dubai")).toBe("AED");
  });
  it("zurich returns CHF", () => {
    expect(getMarketCurrency("zurich")).toBe("CHF");
  });
  it("tokyo returns JPY", () => {
    expect(getMarketCurrency("tokyo")).toBe("JPY");
  });
  it("all markets have entries", () => {
    expect(Object.keys(MARKET_CURRENCY).length).toBeGreaterThanOrEqual(15);
  });
});

describe("MoneyValue factory", () => {
  it("money() creates exact value", () => {
    const mv = money(100, "EUR");
    expect(mv.amount).toBe(100);
    expect(mv.currency).toBe("EUR");
    expect(mv.approximate).toBeUndefined();
  });

  it("approxMoney() creates approximate value", () => {
    const mv = approxMoney(50, "GBP");
    expect(mv.approximate).toBe(true);
  });
});
