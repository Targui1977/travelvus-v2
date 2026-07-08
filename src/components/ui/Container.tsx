/**
 * Container — the main content wrapper.
 *
 * Travelvus uses different max-widths depending on the surface:
 *   - Compare / Result: 960px
 *   - Decision Page: 1000px
 *   - Editorial reading width: 620px (centered)
 *
 * All containers have:
 *   - warm paper background (--paper)
 *   - bottom padding for breathing room
 *
 * Spec: Handoff §01 — Spacing · geometry · containers
 */

type ContainerWidth = "compare" | "decision" | "editorial" | "full";

interface ContainerProps {
  children: React.ReactNode;
  width?: ContainerWidth;
  className?: string;
}

const widthMap: Record<ContainerWidth, string> = {
  compare: "var(--container-compare)",
  decision: "var(--container-decision)",
  editorial: "var(--reading-width)",
  full: "100%",
};

export default function Container({
  children,
  width = "compare",
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto ${className}`}
      style={{
        maxWidth: widthMap[width],
        width: "100%",
        background: width !== "full" ? "var(--paper)" : "transparent",
        paddingBottom: width !== "full" ? 90 : 0,
      }}
    >
      {children}
    </div>
  );
}
