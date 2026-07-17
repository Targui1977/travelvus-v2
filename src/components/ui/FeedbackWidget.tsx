"use client";

import { useState } from "react";

export default function FeedbackWidget({ pageSlug }: { pageSlug: string }) {
  const [sent, setSent] = useState(false);

  const subject = encodeURIComponent(`Travelvus feedback: ${pageSlug}`);
  const body = encodeURIComponent(`Page: ${typeof window !== "undefined" ? window.location.href : pageSlug}\n\nWhat needs attention:\n\n`);
  const mailto = `mailto:feedback@travelvus.com?subject=${subject}&body=${body}`;

  return (
    <div style={{
      marginTop: 32, padding: "14px 18px",
      border: "1px solid var(--line)", borderRadius: 10,
      background: "var(--card)", opacity: 0.75,
    }}>
      {sent ? (
        <p style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--ok)", margin: 0 }}>Thank you — feedback received.</p>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--pmuted)" }}>Something wrong?</span>
          <a
            href={mailto}
            onClick={() => setSent(true)}
            style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--copper)", textDecoration: "underline", cursor: "pointer" }}
          >
            Report incorrect info
          </a>
          <span style={{ color: "var(--line)" }}>·</span>
          <a
            href={mailto}
            onClick={() => setSent(true)}
            style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--copper)", textDecoration: "underline", cursor: "pointer" }}
          >
            Suggest improvement
          </a>
        </div>
      )}
    </div>
  );
}
