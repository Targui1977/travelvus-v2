"use client";

/** Trust Graphic — typographic-only trust row.
 *  Spec: travelvus-visual-system-v1/trust-graphic/SPEC.md */

interface Props {
  verified?: boolean;
  lastReviewed: string;
  sources: string[];
  methodologyHref?: string;
}

export default function TrustGraphic({ verified = true, lastReviewed, sources, methodologyHref }: Props) {
  return (
    <div style={{ padding: "20px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
          fontFamily: "var(--mono)",
          fontWeight: 500,
          fontSize: 10,
          color: "var(--muted)",
        }}
      >
        {verified && (
          <>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--ok)", flex: "none" }} />
              Verified data
            </span>
            <span style={{ color: "var(--line-2)" }}>·</span>
          </>
        )}
        <span>Reviewed {lastReviewed}</span>
        <span style={{ color: "var(--line-2)" }}>·</span>
        <span>Sources: {sources.join(", ")}</span>
        {methodologyHref && (
          <>
            <span style={{ color: "var(--line-2)" }}>·</span>
            <a
              href={methodologyHref}
              style={{ color: "var(--copper)", textDecoration: "none", borderBottom: "1px solid rgba(184,92,56,0.3)" }}
            >
              Full methodology →
            </a>
          </>
        )}
      </div>
    </div>
  );
}
