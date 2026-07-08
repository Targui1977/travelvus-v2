/**
 * HairlineDivider — a 1px separator line.
 *
 * Travelvus separates sections with hairlines, not shadows or
 * heavy borders. In-page separation is done with these and the
 * warm/lighter card surface — not elevation.
 *
 * Spec: Handoff §01 — "Shadows are near-absent by design."
 *   Section divider: 1px --line, margin 26px 0
 *   Cost-row rule: 1px --line
 *   Threshold top rule: 1px --ink (border-top)
 *
 * Variants:
 *   - "section": 1px --line, 26px margin (between sections)
 *   - "row": 1px --line, no margin (between cost rows)
 *   - "ink": 1px --ink, no margin (threshold top rule)
 */

type DividerVariant = "section" | "row" | "ink";

interface HairlineDividerProps {
  variant?: DividerVariant;
  className?: string;
}

const variantStyles: Record<
  DividerVariant,
  { color: string; margin: string }
> = {
  section: { color: "var(--line)", margin: "26px 0" },
  row: { color: "var(--line)", margin: "0" },
  ink: { color: "var(--ink)", margin: "0" },
};

export default function HairlineDivider({
  variant = "section",
  className = "",
}: HairlineDividerProps) {
  const { color, margin } = variantStyles[variant];

  return (
    <hr
      className={`border-0 ${className}`}
      style={{
        borderTop: `1px solid ${color}`,
        margin,
      }}
      role="presentation"
    />
  );
}
