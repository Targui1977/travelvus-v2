import Link from "next/link";
import type { Metadata } from "next";
import LhrVsLgwInteractive from "@/components/decision-page/LhrVsLgwInteractive";
import Kicker from "@/components/ui/Kicker";
import DecisionDebt from "@/components/result/DecisionDebt";
import { getThresholdData, DESTINATIONS, calculateResult } from "@/lib/lhr-vs-lgw-data";

/* ── SEO ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Heathrow or Gatwick: Which London Airport Is Actually Cheaper? | Travelvus",
  description:
    "Gatwick usually wins on money — but your London destination determines by how much. Compare real costs, transfer times, and when the answer changes.",
  alternates: { canonical: "/compare/heathrow-vs-gatwick" },
};

const THRESHOLD = getThresholdData();

/* Contrast data — computed server-side from verified matrix */
const canaryWharf = calculateResult(DESTINATIONS[2]); // Canary Wharf
const paddington = calculateResult(DESTINATIONS[1]);  // Paddington

/* ═══════════════════════════════════════════════════════ */

export default function DecisionPage() {
  return (
    <div className="max-w-[var(--container-decision)] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
      {/* ═══ Header ═══ */}
      <header className="app-header">
        <span className="app-header-brand">
          <span className="app-header-wordmark">Travelvus</span>
          <span className="app-header-line" />
          <span className="app-header-dot" />
        </span>
        <nav className="app-header-nav mobile:hidden">
          <span>Compare</span>
          <Link href="/london-airports" className="text-[var(--ink)] no-underline">Airports</Link>
          <Link href="/wego-flight" className="no-underline">Guides</Link>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
          &#9776;
        </span>
      </header>

      {/* ═══ HERO — question + answer ═══ */}
      <section style={{ padding: "44px 38px 28px" }}>
        <div className="editorial-read" style={{ textAlign: "center" }}>
          <Kicker color="copper" className="mb-[14px]">
            London Airports &middot; Decision
          </Kicker>
          <h1 className="font-[var(--serif)] font-normal text-[40px] leading-[1.14] tracking-[-0.01em] text-[var(--muted)] mb-[16px] mobile:text-[24px] mobile:leading-[1.16]">
            Heathrow or Gatwick: which London airport is actually cheaper?
          </h1>
          <p className="font-[var(--serif)] font-normal text-[34px] leading-[1.2] text-[var(--ink)] mobile:text-[24px] mobile:leading-[1.22]">
            Gatwick usually wins on money —{" "}
            <span style={{ borderBottom: "2px solid var(--copper)", paddingBottom: 2 }}>
              but your destination determines by how much.
            </span>
          </p>
          <div
            style={{
              display: "flex",
              gap: 14,
              justifyContent: "center",
              marginTop: 18,
              fontFamily: "var(--mono)",
              fontWeight: 400,
              fontSize: 11,
              lineHeight: 1,
              color: "var(--muted)",
            }}
          >
            <span>2 travellers &middot; Barcelona flights &middot; Verified Jul 2026</span>
          </div>
        </div>
      </section>

      {/* ═══ LIVE DECISION MODULE ═══ */}
      <section style={{ padding: "0 38px 28px" }}>
        <LhrVsLgwInteractive />
      </section>

      {/* ═══ 02 — THE LINE ═══ */}
      <section style={{ padding: "8px 38px 24px" }}>
        <div className="editorial-read">
          <div className="section-label">
            <span className="section-label-num">02</span>
            <span className="section-label-title">The line — where the transfer penalty erases the flight advantage</span>
          </div>
          <p className="lvg-evidence-note" style={{ maxWidth: 560, marginBottom: 12 }}>
            Gatwick flights are about &euro;{Math.abs(THRESHOLD.flightAdvantage)} cheaper
            for 2 travellers before any transfer costs. Gatwick can absorb up to
            &euro;{Math.abs(THRESHOLD.flightAdvantage)} in higher transfer costs
            and still win. Most destinations keep Gatwick&rsquo;s transfer penalty
            below that line. Paddington — with Heathrow Express advance fares —
            pushes the transfer advantage high enough to create a near-tie.
          </p>
          <div className="method-box">
            <b>How this works.</b> Flight advantage (&minus;&euro;34)
            vs transfer disadvantage (varies by destination). When transfer
            penalty exceeds flight advantage, the winner changes. For most
            London destinations, the penalty stays below the threshold — Gatwick
            holds. Only Paddington pushes it to the boundary.
          </div>
        </div>
      </section>

      {/* ═══ 03 — CONTRAST MOMENT ═══ */}
      <section style={{ padding: "4px 38px 24px" }}>
        <div className="editorial-read">
          <div className="section-label">
            <span className="section-label-num">03</span>
            <span className="section-label-title">Same flights. Two different answers.</span>
          </div>
          <div className="contrast-section">
            <p style={{ maxWidth: 560, margin: "0 0 16px" }}>
              Only the final destination changed. Everything else — flights,
              bags, travellers — stayed the same.
            </p>
            <div className="contrast-pair">
              <div className="contrast-card">
                <span className="contrast-card-label">Canary Wharf</span>
                <div className="contrast-card-value">&euro;{canaryWharf.marginDisplay}</div>
                <span className="contrast-card-sub">Robust Gatwick win</span>
              </div>
              <div className="contrast-card">
                <span className="contrast-card-label">Paddington</span>
                <div className="contrast-card-value">&euro;{paddington.marginDisplay}</div>
                <span className="contrast-card-sub">Near-tie &middot; money can&rsquo;t decide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 04 — DECISION DEBT ═══ */}
      <section style={{ padding: "0 38px 20px" }}>
        <div className="editorial-read">
          <div className="section-label">
            <span className="section-label-num">04</span>
            <span className="section-label-title">The hidden trade-offs</span>
          </div>
          <DecisionDebt
            title="What each airport costs beyond money"
            textHtml={
              'Gatwick&rsquo;s cheaper flights depend on rail access to London. Without a rail connection, taxi costs rise significantly — eroding the fare advantage. Heathrow offers more transport diversity — Tube, Elizabeth Line, Express, taxi, and coach — but flights are typically &euro;10–20 more for comparable routes.'
            }
            factors={[
              "Rail-dependent",
              "South London bias",
              "HEX advance fare gap",
              "Terminal simplicity (2 vs 4)",
              "Budget-friendly airlines",
            ]}
          />
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding: "24px 38px 20px", textAlign: "center" }}>
        <div className="editorial-read">
          <p className="font-[var(--serif)] font-normal text-[22px] leading-[1.3] text-[var(--ink)] mb-[16px]">
            Bring your own two flights.
          </p>
          <a
            href="/"
            className="btn-filled inline-block no-underline"
            style={{ padding: "15px 28px", background: "var(--copper)" }}
          >
            Open Compare &rarr;
          </a>
        </div>
      </section>

      <div style={{ padding: "0 38px 8px", textAlign: "center" }}><Link href="/london-airports" className="font-[var(--sans)] text-[13px] text-[var(--copper)] no-underline hover:underline">{/* ═══ Ad zone ═══ */}larr; More London airports</Link></div>

      {/* ═══ Ad zone ═══ */}
      <section style={{ padding: "0 38px 40px" }}>
        <div className="editorial-read">
          <div className="ad-zone">Ad &middot; editorial zone only</div>
        </div>
      </section>
    </div>
  );
}
