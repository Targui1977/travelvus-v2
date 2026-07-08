/**
 * Travelvus Signature — the line→dot mark.
 *
 * Appears ONLY when Travelvus concludes (Verdict, Verdict Changed).
 * NEVER in chrome, cards, buttons, or headers.
 *
 * Spec: Handoff §03 — "The Verdict — the hero"
 *   - Line: --copperlt (or --copper on navy), 3-4px height
 *   - Dot: --paper (on navy) or --ink (on paper), 4-6px square
 *
 * Variants:
 *   - "verdict": copper-lt line + paper dot (for navy background)
 *   - "default": copper line + ink dot (for paper/card background)
 */

type SignatureVariant = "default" | "verdict";

interface SignatureProps {
  variant?: SignatureVariant;
  className?: string;
}

export default function Signature({
  variant = "default",
  className = "",
}: SignatureProps) {
  const isVerdict = variant === "verdict";

  return (
    <span
      className={`relative inline-block ${className}`}
      style={{ width: 60, height: 18 }}
      role="presentation"
      aria-hidden="true"
    >
      {/* The line */}
      <span
        className="absolute rounded-sm"
        style={{
          left: 0,
          top: isVerdict ? 6 : 5,
          height: isVerdict ? 4 : 3,
          width: isVerdict ? 32 : 40,
          background: isVerdict
            ? "var(--copper-lt)"
            : "var(--copper)",
        }}
      />
      {/* The dot */}
      <span
        className="absolute rounded-sm"
        style={{
          top: isVerdict ? 4 : 3,
          left: isVerdict ? 40 : 44,
          width: isVerdict ? 8 : 6,
          height: isVerdict ? 8 : 6,
          background: isVerdict ? "var(--paper)" : "var(--ink)",
        }}
      />
    </span>
  );
}
