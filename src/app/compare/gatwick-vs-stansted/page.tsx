import Link from "next/link";
import type { Metadata } from "next";
import Kicker from "@/components/ui/Kicker";
import OptionToken from "@/components/ui/OptionToken";
import DecisionDebt from "@/components/result/DecisionDebt";
import { CANONICAL, getVerdict, getScenarios, getAccessFriction } from "@/lib/lgw-vs-stn-data";

/* ── SEO ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Gatwick or Stansted: Which Budget Airport Is Actually Cheaper? | Travelvus",
  description:
    "Stansted is usually cheaper on the ticket — but the extra train time and higher fixed costs may erase the saving. Compare real costs and when the margin is worth it.",
  alternates: { canonical: "/compare/gatwick-vs-stansted" },
};

/* ═══════════════════════════════════════════════════════ */

export default function DecisionPage() {
  const t = CANONICAL;
  const v = getVerdict(t.verdictState);
  const scenarios = getScenarios();
  const friction = getAccessFriction();

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

      {/* ═══ HERO ═══ */}
      <section style={{ padding: "44px 38px 28px" }}>
        <div className="editorial-read" style={{ textAlign: "center" }}>
          <Kicker color="copper" className="mb-[14px]">
            London Airports &middot; Decision
          </Kicker>
          <h1 className="font-[var(--serif)] font-normal text-[40px] leading-[1.14] tracking-[-0.01em] text-[var(--muted)] mb-[16px] mobile:text-[24px] mobile:leading-[1.16]">
            Gatwick or Stansted: which budget airport is actually cheaper?
          </h1>
          <p className="font-[var(--serif)] font-normal text-[34px] leading-[1.2] text-[var(--ink)] mobile:text-[24px] mobile:leading-[1.22]">
            Stansted saves &euro;{t.stnFlightAdvantage} on the flight —{" "}
            <span style={{ borderBottom: "2px solid var(--copper)", paddingBottom: 2 }}>
              but &euro;{t.stnFixedDisadvantage} more in fixed costs narrows the net saving to &euro;{t.displayDiff}.
            </span>
          </p>
          <p className="lvg-evidence-note" style={{ marginTop: 12 }}>
            The money truth is calculable. Whether the trade is worth it is personal.
          </p>
          <div
            style={{
              display: "flex", gap: 14, justifyContent: "center", marginTop: 14,
              fontFamily: "var(--mono)", fontWeight: 400, fontSize: 11, lineHeight: 1, color: "var(--muted)",
            }}
          >
            <span>1 traveller &middot; Victoria &middot; daytime &middot; Jul 2026</span>
          </div>
        </div>
      </section>

      {/* ═══ MONEY TRUTH ═══ */}
      <section style={{ padding: "8px 38px 28px" }}>
        <div className="editorial-read">
          <div className="lvg-module">
            <div className="lvg-module-hd">
              <span className="lvg-module-kicker">The trade</span>
            </div>
            <div className="lvg-verdict">
              <span className="lvg-verdict-label">Money truth</span>
              <div className="lvg-verdict-line">{v.headline}</div>
              <p className="lvg-verdict-interp">{v.subtext}</p>
              {v.handoff && (
                <div className="lvg-handoff lvg-handoff-visible">
                  <span className="lvg-handoff-kicker">Your call.</span>
                  <p className="lvg-handoff-text">{v.handoffText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 01 — REAL COST ═══ */}
      <section style={{ padding: "0 38px 24px" }}>
        <div className="editorial-read">
          <div className="section-label">
            <span className="section-label-num">01</span>
            <span className="section-label-title">Real cost — door to door</span>
          </div>
          <div className="dest-cost">
            <div className="dest-cost-col">
              <div className="dest-cost-hd">
                <OptionToken option="A" state="neutral" size="compact" />
                <span className="dest-cost-name">Gatwick</span>
                <span className="dest-cost-code">LGW</span>
              </div>
              <div className="dest-cost-row"><span className="dest-cost-row-label">Flight</span><span className="dest-cost-row-amount">&euro;{t.lgwFlight}</span></div>
              <div className="dest-cost-row"><span className="dest-cost-row-label">Checked bag</span><span className="dest-cost-row-amount">&euro;{t.lgwBag}</span></div>
              <div className="dest-cost-row"><span className="dest-cost-row-label">Seat</span><span className="dest-cost-row-amount">&euro;{t.lgwSeatRaw}</span></div>
              <div className="dest-cost-row"><span className="dest-cost-row-label">Southern → Victoria</span><span className="dest-cost-row-amount">&euro;{t.lgwTransfer}</span></div>
              <div className="dest-cost-total">
                <span className="dest-cost-total-label">Real cost</span>
                <span className="dest-cost-total-num" style={{ color: t.moneyWinner === "LGW" ? "var(--ink)" : "var(--grey)" }}>&euro;{t.lgwTotal}</span>
              </div>
            </div>
            <div className="dest-cost-col">
              <div className="dest-cost-hd">
                <OptionToken option="B" state={t.moneyWinner === "STN" ? "winner" : "neutral"} size="compact" />
                <span className="dest-cost-name">Stansted</span>
                <span className="dest-cost-code">STN</span>
              </div>
              <div className="dest-cost-row"><span className="dest-cost-row-label">Flight</span><span className="dest-cost-row-amount">&euro;{t.stnFlight}</span></div>
              <div className="dest-cost-row"><span className="dest-cost-row-label">Checked bag</span><span className="dest-cost-row-amount">&euro;{t.stnBag}</span></div>
              <div className="dest-cost-row"><span className="dest-cost-row-label">Seat</span><span className="dest-cost-row-amount">&euro;{t.stnSeatRaw}</span></div>
              <div className="dest-cost-row"><span className="dest-cost-row-label">Express + Tube → Victoria</span><span className="dest-cost-row-amount">&euro;{t.stnTransfer}</span></div>
              <div className="dest-cost-total">
                <span className="dest-cost-total-label">Real cost</span>
                <span className="dest-cost-total-num" style={{ color: t.moneyWinner === "STN" ? "var(--ink)" : "var(--grey)" }}>&euro;{t.stnTotal}</span>
              </div>
            </div>
          </div>
          <p className="lvg-evidence-note">
            Totals rounded. UK transport at 1 GBP &asymp; 1.17 EUR. Walk-up contactless/Oyster, off-peak.
          </p>
        </div>
      </section>

      {/* ═══ 02 — THE LINE ═══ */}
      <section style={{ padding: "4px 38px 20px" }}>
        <div className="editorial-read">
          <div className="section-label">
            <span className="section-label-num">02</span>
            <span className="section-label-title">Where the money ties</span>
          </div>
          <p className="lvg-evidence-note" style={{ maxWidth: 560, marginBottom: 12 }}>
            Stansted&rsquo;s flight is &euro;{t.stnFlightAdvantage} cheaper, but its fixed costs
            (baggage + transfer) are &euro;{t.stnFixedDisadvantage} higher than Gatwick&rsquo;s.
            The break-even is at a flight saving of &euro;{t.tiePointDisplay} — below that,
            Gatwick wins on total cost. Above that, Stansted wins.
          </p>
          <div className="method-box">
            <b>Two boundaries.</b> The &euro;{t.tiePointDisplay} break-even is mathematical.
            Whether &euro;{t.displayDiff} is worth 20 extra minutes is personal — Travelvus
            calculates the money truth but cannot decide your tolerance for extra journey time.
          </div>
        </div>
      </section>

      {/* ═══ 03 — SAVING-WORTH SCENARIOS ═══ */}
      <section style={{ padding: "8px 38px 24px" }}>
        <div className="editorial-read">
          <div className="section-label">
            <span className="section-label-num">03</span>
            <span className="section-label-title">Your saving, your call</span>
          </div>
          <div className="saving-cards">
            {scenarios.map((s, i) => (
              <div key={i} className={`saving-card ${s.handoffActive ? "saving-card-handoff" : ""}`}>
                <span className="saving-card-value">{s.label}</span>
                <span className="saving-card-result">{s.moneyResult}</span>
                <span className="saving-card-boundary">{s.boundaryRelation}</span>
                <p className="saving-card-text">{s.handoffText}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 04 — ACCESS FRICTION ═══ */}
      <section style={{ padding: "4px 38px 20px" }}>
        <div className="editorial-read">
          <div className="section-label">
            <span className="section-label-num">04</span>
            <span className="section-label-title">What the journey difference looks like</span>
          </div>
          <div className="friction-table">
            {friction.primary.map((f, i) => (
              <div key={i} className="friction-row">
                <span className="friction-label">{f.label}</span>
                <span className="friction-lgw">{f.lgw}</span>
                <span className="friction-stn">{f.stn}</span>
              </div>
            ))}
          </div>
          <p className="lvg-evidence-note">
            Gatwick: 1 direct train to Victoria (40 min). Stansted: train + Tube change (60 min).
          </p>
        </div>
      </section>

      {/* ═══ 05 — DECISION DEBT ═══ */}
      <section style={{ padding: "0 38px 20px" }}>
        <div className="editorial-read">
          <div className="section-label">
            <span className="section-label-num">05</span>
            <span className="section-label-title">The hidden trade-offs</span>
          </div>
          <DecisionDebt
            title="What each airport costs beyond money"
            textHtml="Stansted&rsquo;s saving depends on accepting 20 extra minutes and a train change. Gatwick delivers you to Victoria on one direct train — but its flights are typically €10–20 more. Both serve European routes. easyJet serves both airports; Ryanair is Stansted-only."
            factors={["20 min extra journey", "1 extra train change", "Ryanair STN-only", "easyJet serves both", "Comparable rail frequency"]}
          />
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section style={{ padding: "6px 38px 20px" }}>
        <div className="editorial-read">
          <div className="section-label">
            <span className="section-label-num"></span>
            <span className="section-label-title">Quick answers</span>
          </div>
          <div className="faq-list">
            <div className="faq-item">
              <h3 className="faq-q">Is Gatwick cheaper than Stansted?</h3>
              <p className="faq-a">Usually no — Stansted flights are typically €10–20 cheaper. But Stansted&rsquo;s higher fixed costs (baggage + transfer) can narrow the real saving to a few euros, and for some destinations Gatwick wins on total cost.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">How much cheaper should a Stansted flight be to win?</h3>
              <p className="faq-a">Stansted needs to save at least €{t.tiePointDisplay} on the flight to reliably beat Gatwick on total door-to-door cost — because its fixed costs are about €{t.stnFixedDisadvantage} higher.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">Which airport is faster to central London?</h3>
              <p className="faq-a">Gatwick: 40 minutes direct to Victoria on one train. Stansted: 60 minutes with a train change. Gatwick wins on time and simplicity for most central London destinations.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">Which airport is better for Victoria?</h3>
              <p className="faq-a">Gatwick — the Southern Railway serves Victoria directly in 40 minutes. Stansted requires the Express to Liverpool Street plus a connecting Tube, adding 20 minutes and a change.</p>
            </div>
            <div className="faq-item">
              <h3 className="faq-q">Do airlines fly from both airports?</h3>
              <p className="faq-a">easyJet, Jet2, and TUI serve both Gatwick and Stansted — so you can sometimes choose between airports on the same airline. Ryanair serves Stansted only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA + Related ═══ */}
      <section style={{ padding: "24px 38px 20px", textAlign: "center" }}>
        <div className="editorial-read">
          <p className="font-[var(--serif)] font-normal text-[22px] leading-[1.3] text-[var(--ink)] mb-[16px]">
            Test your own flights.
          </p>
          <a href="/" className="btn-filled inline-block no-underline" style={{ padding: "15px 28px", background: "var(--copper)" }}>
            Open Compare &rarr;
          </a>
          <div style={{ marginTop: 24, display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/compare/heathrow-vs-stansted/" className="font-[var(--sans)] text-[13px] text-[var(--copper)] no-underline hover:underline">
              Heathrow vs Stansted &rarr;
            </a>
            <a href="/compare/heathrow-vs-gatwick/" className="font-[var(--sans)] text-[13px] text-[var(--copper)] no-underline hover:underline">
              Heathrow vs Gatwick &rarr;
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 38px 40px" }}>
        <div className="editorial-read"><div className="ad-zone">Ad &middot; editorial zone only</div></div>
      </section>
    </div>
  );
}
