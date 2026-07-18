import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/ui/Footer";
import { generateCoverageMatrix, generateGapReport, EXPANSION_CHECKLIST } from "@/lib/__dev__/coverage-engine";

export const metadata: Metadata = {
  title: "City Coverage Dashboard | Travelvus Internal",
  robots: "noindex, nofollow",
};

const DS = {
  h1: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 36, lineHeight: 1.12, color: "var(--ink)", margin: 0 } as React.CSSProperties,
  h2: { fontFamily: "var(--serif)", fontWeight: 400, fontSize: 22, lineHeight: 1.2, color: "var(--ink)", margin: 0 } as React.CSSProperties,
  mono: { fontFamily: "var(--mono)", fontWeight: 500, fontSize: 9, letterSpacing: "0.06em", textTransform: "uppercase" } as React.CSSProperties,
  container: { maxWidth: 920, margin: "0 auto", padding: "0 24px" } as React.CSSProperties,
};

const STATUS_COLORS: Record<string, string> = { complete: "var(--ok)", partial: "var(--copper)", missing: "var(--pmuted)" };

export default function CoverageDashboard() {
  const matrix = generateCoverageMatrix();
  const gaps = generateGapReport();

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
            <Link href="/" className="hub-nav-link" style={{ font: "600 14px/1 Geist, sans-serif", letterSpacing: "0.01em", color: "#3c4650", padding: "7px 14px", borderRadius: 20, textDecoration: "none" }}>Home</Link>
          </nav>
        </div>
      </header>
      <style>{`.hub-nav-link:hover { color: var(--copper) !important; background: rgba(184,92,56,.06) !important; }`}</style>

      <main>
        <section style={{ background: "var(--paper)", padding: "48px 0 36px" }}>
          <div style={DS.container}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
              <h1 style={DS.h1}>City Coverage Dashboard</h1>
              <span style={{ ...DS.mono, color: "var(--copper)", background: "rgba(184,92,56,0.08)", padding: "4px 10px", borderRadius: 12 }}>Internal</span>
            </div>
            <p style={{ fontFamily: "var(--sans)", fontSize: 14, color: "var(--muted)", margin: "8px 0 0" }}>Editorial completeness across all supported cities. Auto-generated from registries.</p>
          </div>
        </section>

        {/* Coverage Matrix */}
        <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "40px 0" }}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, marginBottom: 20 }}>Coverage Matrix</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {matrix.map(city => (
                <div key={city.cityId} style={{ padding: "24px 28px", background: "var(--card)", border: "1px solid var(--line)", borderRadius: 10 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16, flexWrap: "wrap", gap: 8 }}>
                    <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 24, color: "var(--ink)" }}>{city.cityLabel}</span>
                    <span style={{ fontFamily: "var(--mono)", fontWeight: 600, fontSize: 18, color: city.completionPct >= 75 ? "var(--ok)" : city.completionPct >= 50 ? "var(--copper)" : "var(--pmuted)" }}>
                      {city.completionPct}%
                    </span>
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
                    {city.metrics.map((m, i) => (
                      <div key={i} style={{
                        padding: "10px 14px", borderRadius: 6,
                        background: m.status === "complete" ? "rgba(30,42,51,0.03)" : m.status === "partial" ? "rgba(184,92,56,0.04)" : "transparent",
                        border: `1px solid ${m.status === "missing" ? "var(--line)" : "transparent"}`,
                      }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 2 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: STATUS_COLORS[m.status], flex: "none" }} />
                          <span style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 8, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--pmuted)" }}>{m.label}</span>
                        </div>
                        <span style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--ink)" }}>{m.current}/{m.target}</span>
                      </div>
                    ))}
                  </div>
                  {city.gaps.length > 0 && (
                    <div style={{ marginTop: 14, paddingTop: 14, borderTop: "1px solid var(--line)" }}>
                      <span style={{ ...DS.mono, color: "var(--copper)", display: "block", marginBottom: 6 }}>Gaps ({city.gaps.length})</span>
                      <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                        {city.gaps.map((g, i) => (
                          <span key={i} style={{ fontFamily: "var(--sans)", fontSize: 11, color: "var(--muted)" }}>— {g}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gap Report */}
        <section style={{ padding: "40px 0" }}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, marginBottom: 16 }}>Detailed Gap Report</h2>
            {gaps.map(city => (
              <div key={city.cityId} style={{ marginBottom: 28 }}>
                <span style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 18, color: "var(--ink)", display: "block", marginBottom: 10 }}>{city.cityLabel}</span>
                {city.missingGuides.length > 0 && (
                  <div style={{ marginBottom: 10 }}>
                    <span style={{ ...DS.mono, color: "var(--copper)", display: "block", marginBottom: 4 }}>Missing Guides</span>
                    {city.missingGuides.map((g, i) => <div key={i} style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>— {g}</div>)}
                  </div>
                )}
                {city.missingKnowledge.length > 0 && (
                  <div style={{ marginBottom: 10 }}>
                    <span style={{ ...DS.mono, color: "var(--copper)", display: "block", marginBottom: 4 }}>Missing Knowledge</span>
                    {city.missingKnowledge.map((k, i) => <div key={i} style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>— {k}</div>)}
                  </div>
                )}
                {city.generalGaps.length > 0 && (
                  <div>
                    <span style={{ ...DS.mono, color: "var(--pmuted)", display: "block", marginBottom: 4 }}>General</span>
                    {city.generalGaps.map((g, i) => <div key={i} style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>— {g}</div>)}
                  </div>
                )}
                {city.missingGuides.length === 0 && city.missingKnowledge.length === 0 && city.generalGaps.length === 0 && (
                  <div style={{ fontFamily: "var(--sans)", fontSize: 12, color: "var(--ok)" }}>No gaps detected.</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Expansion Checklist */}
        <section style={{ background: "var(--paper-2)", borderTop: "1px solid var(--line)", padding: "40px 0" }}>
          <div style={DS.container}>
            <h2 style={{ ...DS.h2, marginBottom: 16 }}>Expansion Readiness Checklist</h2>
            <p style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--muted)", marginBottom: 16 }}>All items must pass before a new city can be declared production-ready.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {EXPANSION_CHECKLIST.map((item, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "baseline" }}>
                  <span style={{ fontFamily: "var(--mono)", fontWeight: 400, fontSize: 9, color: "var(--pmuted)", flex: "none" }}>{String(i + 1).padStart(2, "0")}</span>
                  <span style={{ fontFamily: "var(--sans)", fontSize: 13, color: "var(--ink)", lineHeight: 1.5 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer columns={[
        { title: "Internal", links: [{ label: "Coverage Dashboard", href: "/coverage" }, { label: "Methodology", href: "/methodology" }] },
        { title: "Product", links: [{ label: "Compare", href: "/" }, { label: "About", href: "/about" }] },
      ]} />
    </>
  );
}
