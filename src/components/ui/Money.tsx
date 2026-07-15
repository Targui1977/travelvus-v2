import type { MoneyValue } from "@/lib/currency/types";
import { formatMoney } from "@/lib/currency/formatMoney";

/** Reusable monetary display component. Accepts structured MoneyValue data. */
interface Props {
  value: MoneyValue;
  /** Compact display with narrow symbol */
  compact?: boolean;
  /** Show ISO code alongside the symbol */
  showCode?: boolean;
  /** Additional CSS class */
  className?: string;
}

export default function Money({ value, compact, showCode, className }: Props) {
  const display = showCode
    ? `${formatMoney(value, { compact })} ${value.currency}`
    : formatMoney(value, { compact });

  return (
    <span
      className={className}
      aria-label={`${value.approximate ? "approximately " : ""}${value.amount} ${value.currency}${value.qualifier ? ` (${value.qualifier})` : ""}`}
    >
      {display}
    </span>
  );
}
