/**
 * Travelvus V2 — Reusable Trust Page Layout
 * Shared template for methodology, editorial standards, data coverage, limitations.
 * Phase 116.0.
 */

import Link from "next/link";
import Footer from "@/components/ui/Footer";

const DS = {
  h1: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 40, lineHeight: 1.12, color: "var(--ink)", margin: 0, letterSpacing: "-0.015em" } as React.CSSProperties,
  h2: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, lineHeight: 1.2, color: "var(--ink)", margin: 0 } as React.CSSProperties,
  body: { fontFamily: "var(--sans)", fontWeight: 400, fontSize: 15, lineHeight: 1.62, color: "var(--muted)" } as React.CSSProperties,
  monoLabel: { fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.07em", textTransform: "uppercase" } as React.CSSProperties,
  monoMeta: { fontFamily: "var(--mono)", fontWeight: 400, fontSize: 9, letterSpacing: "0.05em", color: "var(--pmuted)" } as React.CSSProperties,
  container: { maxWidth: 780, margin: "0 auto", padding: "0 24px" } as React.CSSProperties,
};

export default function TrustPage({
  title, description, sections, lastReviewed,
}: {
  title: string; description: string;
  sections: { heading: string; body: string | React.ReactNode }[];
  lastReviewed: string;
}) {
  return (
    <>
      <header className="app-header">
        <div style={{ maxWidth: 920, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <span className="app-header-brand">
            <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
              <span className="app-header-wordmark">Travelvus</span><span className="app-header-line" /><span className="app-header-dot" />
            </Link>
          </span>
          <nav className="app-header-nav" style={{ display: "flex", gap: 8 }}>
            <Link href="/" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Home</Link>
            <Link href="/methodology" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Methodology</Link>
            <Link href="/about" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>About</Link>
          </nav>
        </div>
      </header>
      <style>{`.hub-nav-link:hover { color: var(--copper) !important; background: rgba(184,92,56,.06) !important; }`}</style>
      <main>
        <section style={{ background: "var(--paper)", padding: "52px 0 36px" }}>
          <div style={DS.container}>
            <h1 style={DS.h1}>{title}</h1>
            <p style={{ ...DS.body, margin: "14px 0 0", maxWidth: 560 }}>{description}</p>
          </div>
        </section>
        <section style={{ padding: "40px 0" }}>
          <div style={DS.container}>
            {sections.map((s, i) => (
              <div key={i} style={{ marginBottom: i < sections.length - 1 ? 40 : 0 }}>
                <h2 style={{ ...DS.h2, marginBottom: 10, fontSize: 22 }}>{s.heading}</h2>
                {typeof s.body === "string" ? (
                  <p style={DS.body}>{s.body}</p>
                ) : s.body}
              </div>
            ))}
          </div>
        </section>
        <section style={{ borderTop: "1px solid var(--line)", padding: "32px 0 52px" }}>
          <div style={DS.container}>
            <p style={{ ...DS.monoMeta }}>Last reviewed: {lastReviewed}</p>
          </div>
        </section>
      </main>
      <Footer columns={[
        { title: "Trust", links: [{ label: "Methodology", href: "/methodology" }, { label: "Editorial Standards", href: "/editorial-standards" }, { label: "Limitations", href: "/limitations" }] },
        { title: "Product", links: [{ label: "Compare", href: "/" }, { label: "Arrival Planner", href: "/planner" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
      ]} />
    </>
  );
}
