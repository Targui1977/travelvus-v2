/**
 * OptionToken — the circular A/B identity marker.
 *
 * Persists from Quick Compare through Verdict, Real Cost,
 * Door-to-Door, Decision Threshold, and Verdict Changed.
 *
 * The user must never wonder which option is A and which is B.
 *
 * Spec: Handoff §03 — "Option A / Option B (persistent identities)"
 *   - Neutral / losing: outline 1.5px --grey, transparent bg, --grey text
 *   - Winning: filled --navy bg, --paper text
 *   - Size: 26px (standard), 20px (compact, e.g. cost column headers)
 *   - Font: sans, weight 600, letter inside
 */

type TokenState = "neutral" | "winner";

interface OptionTokenProps {
  option: "A" | "B";
  state?: TokenState;
  size?: "standard" | "compact";
  className?: string;
}

export default function OptionToken({
  option,
  state = "neutral",
  size = "standard",
  className = "",
}: OptionTokenProps) {
  const dims = size === "compact" ? 20 : 26;
  const fontSize = size === "compact" ? 10 : 13;
  const borderWidth = size === "compact" ? 1.2 : 1.5;

  const isWinner = state === "winner";

  return (
    <span
      className={`inline-flex items-center justify-center flex-none rounded-full ${className}`}
      style={{
        width: dims,
        height: dims,
        border: isWinner ? "none" : `${borderWidth}px solid var(--grey)`,
        background: isWinner ? "var(--navy)" : "transparent",
        color: isWinner ? "var(--paper)" : "var(--grey)",
        fontFamily: "var(--sans)",
        fontWeight: 600,
        fontSize,
        lineHeight: 1,
      }}
      aria-label={`Option ${option}${isWinner ? " (winner)" : ""}`}
    >
      {option}
    </span>
  );
}
