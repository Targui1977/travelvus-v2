import type { Metadata } from "next";
import LhrVsLgwInteractive from "@/components/decision-page/LhrVsLgwInteractive";
import Kicker from "@/components/ui/Kicker";
import DecisionDebt from "@/components/result/DecisionDebt";
import { getThresholdData } from "@/lib/lhr-vs-lgw-data";

/* ── SEO ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Heathrow or Gatwick: Which London Airport Is Actually Cheaper? | Travelvus",
  description:
    "Gatwick usually wins on money — but your London destination determines by how much. A full comparison of real costs, transfer times, and when the answer changes.",
  alternates: {
    canonical: "/compare/heathrow-vs-gatwick",
  },
};

const THRESHOLD = getThresholdData();

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
          <span className="text-[var(--ink)]">Airports</span>
          <span>Guides</span>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
          &#9776;
        </span>
      </header>

      {/* ═══ 1. HERO — QUESTION + IMMEDIATE ANSWER ═══ */}
      <section style={{ padding: "44px 38px 24px" }}>
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
            <span>2 travellers &middot; Barcelona flights &middot; contactless fares</span>
            <span>&middot;</span>
            <span>Verified Jul 2026</span>
          </div>
        </div>
      </section>

      {/* ═══ 2. LIVE INTERACTIVE — destination selector + verdict + Real Cost ═══ */}
      <section style={{ padding: "8px 38px 30px" }}>
        <LhrVsLgwInteractive />
      </section>

      {/* ═══ 3. WHY DESTINATION CHANGES THE MARGIN ═══ */}
      <section style={{ padding: "6px 38px 10px" }}>
        <div className="editorial-read dp-prose">
          <h2>Why destination changes the margin</h2>
          <p>
            The same airports. The same flights. But your final destination inside
            London determines the transfer cost — and that can turn a clear win into
            almost no win at all.
          </p>
          <p>
            {THRESHOLD.explanation} Most destinations keep Gatwick&rsquo;s transfer
            penalty below that threshold. Paddington, with Heathrow Express advance
            fares, pushes the transfer advantage high enough to create a near-tie.
          </p>
        </div>
      </section>

      {/* ═══ 4. CONTRAST MOMENT ═══ */}
      <section style={{ padding: "8px 38px 30px" }}>
        <div className="editorial-read">
          <div className="contrast-section">
            <h3>Same flights. Two different answers.</h3>
            <p>
              Only the final destination changed. Everything else — flights, bags,
              travellers — stayed the same.
            </p>
            <div className="contrast-pair">
              <div className="contrast-card">
                <span className="contrast-card-label">Canary Wharf</span>
                <div className="contrast-card-value">&euro;37</div>
                <span className="contrast-card-sub">Robust Gatwick win</span>
              </div>
              <div className="contrast-card">
                <span className="contrast-card-label">Paddington</span>
                <div className="contrast-card-value">&euro;1</div>
                <span className="contrast-card-sub">Near-tie &middot; money can&rsquo;t decide</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 5. DECISION DEBT ═══ */}
      <section style={{ padding: "0 38px 20px" }}>
        <div className="editorial-read">
          <DecisionDebt
            title="The hidden trade-offs at each airport"
            textHtml={
              'Gatwick&rsquo;s cheaper flights depend on rail access to London. Without a rail connection, taxi costs rise significantly — eroding the fare advantage. Heathrow offers more transport diversity — Tube, Elizabeth Line, Express, taxi, and coach — but flights are typically €10–20 more for comparable routes.'
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

      {/* ═══ 6. CTA ═══ */}
      <section style={{ padding: "0 38px 20px", textAlign: "center" }}>
        <a
          href="/"
          className="btn-filled inline-block no-underline"
          style={{ padding: "15px 28px" }}
        >
          Open Compare &rarr;
        </a>
      </section>

      {/* ═══ Ad zone ═══ */}
      <section style={{ padding: "0 38px 40px" }}>
        <div className="editorial-read">
          <div className="ad-zone">Ad &middot; editorial zone only</div>
        </div>
      </section>
    </div>
  );
}
