/**
 * Travelvus V2 — Reusable Knowledge Page Template
 * Educational content. Explains facts, does not recommend actions.
 * Phase 114.0.
 */

import type { KnowledgeConfig } from "@/lib/knowledge-model";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

const DS = {
  h1: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 40, lineHeight: 1.12, color: "var(--ink)", margin: 0, letterSpacing: "-0.015em" } as React.CSSProperties,
  h2: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 26, lineHeight: 1.2, color: "var(--ink)", margin: 0 } as React.CSSProperties,
  body: { fontFamily: "var(--sans)", fontWeight: 400, fontSize: 15, lineHeight: 1.62, color: "var(--muted)" } as React.CSSProperties,
  monoLabel: { fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.07em", textTransform: "uppercase" } as React.CSSProperties,
  monoMeta: { fontFamily: "var(--mono)", fontWeight: 400, fontSize: 9, letterSpacing: "0.05em", color: "var(--pmuted)" } as React.CSSProperties,
  card: { padding: "20px 24px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 } as React.CSSProperties,
  cta: { display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", background: "var(--navy)", color: "var(--paper)", fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, borderRadius: 10, textDecoration: "none", letterSpacing: "-0.01em" } as React.CSSProperties,
  container: { maxWidth: 780, margin: "0 auto", padding: "0 24px" } as React.CSSProperties,
};

export default function KnowledgePage({ page }: { page: KnowledgeConfig }) {
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
            <Link href={`/${page.cityId}-airports`} className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Airports</Link>
            <Link href="/methodology" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Methodology</Link>
          </nav>
        </div>
      </header>
      <style>{`.hub-nav-link:hover { color: var(--copper) !important; background: rgba(184,92,56,.06) !important; }`}</style>

      <main>
        {/* Hero */}
        <section style={{ background: "var(--paper)", padding: "52px 0 36px" }}>
          <div style={DS.container}>
            <div style={{ ...DS.monoMeta, marginBottom: 20, display: "flex", gap: 6, alignItems: "center" }}>
              <Link href="/" style={{ color: "var(--pmuted)", textDecoration: "none" }}>Home</Link><span style={{ opacity: 0.3 }}>›</span>
              <Link href={`/${page.cityId}/airport-choice`} style={{ color: "var(--pmuted)", textDecoration: "none" }}>Airport Choice</Link><span style={{ opacity: 0.3 }}>›</span>
              <span style={{ color: "var(--muted)" }}>Knowledge</span>
            </div>
            <h1 style={{ ...DS.h1, maxWidth: 660 }}>{page.headline}</h1>
            <p style={{ ...DS.body, margin: "14px 0 0", maxWidth: 560 }}>{page.intro}</p>
          </div>
        </section>

        {/* Key Facts */}
        <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "40px 0" }}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, marginBottom: 16, fontSize: 22 }}>Key facts</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {page.keyFacts.map((f, i) => (
                <div key={i} style={{ ...DS.card, display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <span style={{ ...DS.monoLabel, color: "var(--pmuted)" }}>{f.label}</span>
                  <span style={{ fontFamily: "var(--sans)", fontWeight: 600, fontSize: 14, color: "var(--ink)", textAlign: "right" }}>{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section style={{ padding: "48px 0" }}>
          <div style={DS.container}>
            {page.sections.map((s, i) => (
              <div key={i} style={{ marginBottom: i < page.sections.length - 1 ? 36 : 0 }}>
                <h2 style={{ ...DS.h2, fontSize: 22, marginBottom: 10 }}>{s.heading}</h2>
                <p style={{ ...DS.body, fontSize: 14, lineHeight: 1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        {page.tips.length > 0 && (
          <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "40px 0" }}>
            <div style={DS.container}>
              <h2 style={{ ...DS.h2, fontSize: 22, marginBottom: 16 }}>Practical tips</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {page.tips.map((t, i) => (
                  <div key={i} style={{ ...DS.card, display: "flex", gap: 10, alignItems: "baseline" }}>
                    <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 11, color: "var(--copper)", flex: "none" }}>{String(i + 1).padStart(2, "0")}</span>
                    <span style={DS.body}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: "40px 0" }}>
          <div style={DS.container}>
            <div style={{ ...DS.card, background: "var(--paper)", padding: "28px 32px", textAlign: "center" }}>
              <span style={{ ...DS.monoLabel, color: "var(--copper)", display: "block", marginBottom: 8 }}>Ready to decide?</span>
              <Link href={page.ctaHref} style={DS.cta}>{page.ctaLabel} <span style={{ fontSize: 17 }}>→</span></Link>
            </div>
          </div>
        </section>

        {/* Related */}
        <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "40px 0" }}>
          <div style={DS.container}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <div>
                <h3 style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 10 }}>Decision Guides</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {page.relatedGuides.map((g, i) => (
                    <Link key={i} href={g.href} style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", textDecoration: "none", lineHeight: 1.4 }}>{g.label} →</Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 10 }}>More Knowledge</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {page.relatedKnowledge.map((k, i) => (
                    <Link key={i} href={k.href} style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", textDecoration: "none", lineHeight: 1.4 }}>{k.label} →</Link>
                  ))}
                </div>
              </div>
            </div>
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid var(--line)" }}>
              <Link href={page.hubLink.href} style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--copper)", textDecoration: "none", fontWeight: 500 }}>{page.hubLink.label} →</Link>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section style={{ padding: "0 0 52px" }}>
          <div style={DS.container}>
            <details style={{ opacity: 0.5 }}>
              <summary style={{ ...DS.monoLabel, color: "var(--muted)", cursor: "pointer", display: "inline-block" }}>About this information</summary>
              <p style={{ ...DS.body, fontSize: 12, marginTop: 8, maxWidth: 540 }}>This knowledge page is based on official airport websites, transport authority data, and editorial research. Information is reviewed periodically but may not reflect real-time conditions. Always check with your airline and the official airport website before travelling.</p>
              <p style={{ ...DS.monoMeta, marginTop: 4 }}>Last reviewed: {page.lastReviewed}</p>
            </details>
          </div>
        </section>
      </main>

      <Footer columns={[
        { title: "Cities", links: [{ label: "London Airports", href: "/london-airports" }, { label: "New York Airports", href: "/new-york-airports" }, { label: "Paris Airports", href: "/paris-airports" }] },
        { title: "Knowledge", links: page.relatedKnowledge.slice(0, 3).map(k => ({ label: k.label, href: k.href })) },
        { title: "Product", links: [{ label: "Compare", href: "/" }, { label: "Methodology", href: "/methodology" }, { label: "About", href: "/about" }] },
      ]} />
    </>
  );
}
