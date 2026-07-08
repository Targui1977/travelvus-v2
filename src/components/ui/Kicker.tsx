/**
 * Kicker — mono section label, uppercase, tight tracking.
 *
 * Used for:
 *   - Section numbering ("01", "02") in results
 *   - "The Verdict" label in the verdict block
 *   - Eyebrow labels in Decision Pages
 *   - Confidence tag text
 *
 * Spec: Handoff §01 — Type scale
 *   mono · 600 · 10px · .14–.16em · UPPER
 *
 * Color variants:
 *   - "copper": for section numbers, eyebrows (--copper)
 *   - "copper-lt": for kickers on navy (--copper-lt)
 *   - "muted": for standard section labels (--muted)
 */

type KickerColor = "copper" | "copper-lt" | "muted";

interface KickerProps {
  children: React.ReactNode;
  color?: KickerColor;
  as?: "span" | "div";
  className?: string;
}

const colorMap: Record<KickerColor, string> = {
  copper: "var(--copper)",
  "copper-lt": "var(--copper-lt)",
  muted: "var(--muted)",
};

export default function Kicker({
  children,
  color = "copper",
  as: Tag = "span",
  className = "",
}: KickerProps) {
  return (
    <Tag
      className={`kicker ${className}`}
      style={{ color: colorMap[color] }}
    >
      {children}
    </Tag>
  );
}
