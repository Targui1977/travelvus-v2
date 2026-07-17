/**
 * Travelvus V2 — Reusable Decision Guide Page Template
 *
 * Renders any decision guide from a typed GuideConfig.
 * Consumes Decision Engine datasets — never duplicates reasoning.
 * Phase 112.0.
 */

import type { GuideConfig } from "@/lib/guide-model";
import Link from "next/link";
import Footer from "@/components/ui/Footer";

const DS = {
  h1: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 40, lineHeight: 1.12, color: "var(--ink)", margin: 0, letterSpacing: "-0.015em" } as React.CSSProperties,
  h2: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 28, lineHeight: 1.2, color: "var(--ink)", margin: 0 } as React.CSSProperties,
  body: { fontFamily: "var(--sans)", fontWeight: 400, fontSize: 15, lineHeight: 1.6, color: "var(--muted)" } as React.CSSProperties,
  bodySm: { fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.5, color: "var(--muted)" } as React.CSSProperties,
  monoLabel: { fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.07em", textTransform: "uppercase" } as React.CSSProperties,
  monoMeta: { fontFamily: "var(--mono)", fontWeight: 400, fontSize: 9, letterSpacing: "0.05em", color: "var(--pmuted)" } as React.CSSProperties,
  card: { padding: "24px 28px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 } as React.CSSProperties,
  cta: { display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 32px", background: "var(--navy)", color: "var(--paper)", fontFamily: "var(--sans)", fontWeight: 600, fontSize: 15, borderRadius: 10, textDecoration: "none", letterSpacing: "-0.01em", boxShadow: "0 1px 3px rgba(30,42,51,0.10)" } as React.CSSProperties,
  container: { maxWidth: 780, margin: "0 auto", padding: "0 24px" } as React.CSSProperties,
  section: { padding: "48px 0" } as React.CSSProperties,
};

export default function GuidePage({ guide }: { guide: GuideConfig }) {
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
            <Link href={`/${guide.cityId}-airports`} className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none", transition: "color 0.2s, background 0.2s" }}>Airports</Link>
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
              <Link href={`/${guide.cityId}/airport-choice`} style={{ color: "var(--pmuted)", textDecoration: "none" }}>Airport Choice</Link><span style={{ opacity: 0.3 }}>›</span>
              <span style={{ color: "var(--copper)" }}>Guide</span>
            </div>
            <h1 style={{ ...DS.h1, maxWidth: 660 }}>{guide.headline}</h1>
            <p style={{ ...DS.body, margin: "14px 0 0", maxWidth: 560 }}>{guide.intro}</p>
          </div>
        </section>

        {/* Airport Recommendations */}
        <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "48px 0" }}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, marginBottom: 20 }}>Which airport is best?</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {guide.airports.map((ap, i) => (
                <div key={ap.code} style={DS.card}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 10 }}>
                    {i === 0 && <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 9, color: "var(--copper)", letterSpacing: "0.06em", textTransform: "uppercase" }}>Recommended</span>}
                    <span style={{ fontFamily: "var(--mono)", fontWeight: 700, fontSize: 18, color: i === 0 ? "var(--navy)" : "var(--pmuted)", letterSpacing: "0.02em" }}>{ap.code}</span>
                    <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 20, color: "var(--ink)" }}>{ap.name}</span>
                  </div>
                  <p style={{ ...DS.bodySm, marginBottom: 6 }}>{ap.why}</p>
                  <p style={{ ...DS.bodySm, color: "var(--pmuted)", fontSize: 12 }}>{ap.transferNote}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transfer comparison */}
        <section style={DS.section}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, marginBottom: 16 }}>Transfer comparison</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {guide.transferFacts.map((f, i) => (
                <div key={i} style={{ ...DS.card, display: "flex", alignItems: "center", gap: 14, padding: "16px 20px" }}>
                  <div style={{ flex: 1 }}><div style={{ ...DS.monoLabel, color: "var(--pmuted)", marginBottom: 2 }}>{f.label}</div><div style={{ ...DS.bodySm, fontSize: 11 }}>{f.note}</div></div>
                  <div style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 22, color: "var(--ink)", flex: "none" }}>{f.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Takeaway + CTA */}
        <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "48px 0" }}>
          <div style={DS.container}>
            <div style={{ ...DS.card, background: "var(--paper)", padding: "28px 32px" }}>
              <span style={{ ...DS.monoLabel, color: "var(--copper)", display: "block", marginBottom: 8 }}>The bottom line</span>
              <p style={{ ...DS.body, margin: "0 0 20px", color: "var(--ink)" }}>{guide.takeaway}</p>
              <Link href={guide.ctaHref} style={DS.cta}>
                {guide.ctaLabel} <span style={{ fontSize: 17, lineHeight: 1 }}>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Related guides */}
        <section style={{ padding: "48px 0" }}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, fontSize: 22, marginBottom: 16 }}>Related guides</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
              {guide.relatedGuides.map((g, i) => (
                <Link key={i} href={g.href} style={{ ...DS.card, textDecoration: "none", display: "block", padding: "18px 20px" }}>
                  <div style={{ fontFamily: "var(--serif)", fontSize: 16, color: "var(--ink)", marginBottom: 4, lineHeight: 1.25 }}>{g.label}</div>
                  <div style={{ ...DS.monoLabel, color: "var(--copper)", fontSize: 8 }}>Read guide →</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section style={{ padding: "0 0 52px" }}>
          <div style={DS.container}>
            <details style={{ opacity: 0.55 }}>
              <summary style={{ ...DS.monoLabel, color: "var(--muted)", cursor: "pointer", display: "inline-block" }}>How we determine this</summary>
              <p style={{ ...DS.bodySm, marginTop: 10, maxWidth: 540 }}>This guide is generated from the Travelvus Decision Engine using verified airport datasets, destination transfer profiles, and door-to-door comparison methodology. Recommendations are data-driven — not editorial opinion. Transfer costs are illustrative EUR values. Airfares are illustrative planning estimates.</p>
              <p style={{ ...DS.monoMeta, marginTop: 6 }}>Last reviewed: {guide.lastReviewed}</p>
            </details>
          </div>
        </section>
      </main>

      <Footer columns={[
        { title: "Cities", links: [{ label: "London Airports", href: "/london-airports" }, { label: "New York Airports", href: "/new-york-airports" }, { label: "Paris Airports", href: "/paris-airports" }] },
        { title: "Guides", links: guide.relatedGuides.slice(0, 3).map(g => ({ label: g.label, href: g.href })) },
        { title: "Product", links: [{ label: "Compare", href: "/" }, { label: "Methodology", href: "/methodology" }, { label: "About", href: "/about" }] },
      ]} />
    </>
  );
}
