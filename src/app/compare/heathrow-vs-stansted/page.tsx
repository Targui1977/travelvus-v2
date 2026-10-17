import Link from "next/link";
import type { Metadata } from "next";
import LiveComparison from "@/components/decision-page/LiveComparison";
import Kicker from "@/components/ui/Kicker";
import DecisionThreshold from "@/components/result/DecisionThreshold";
import SecondaryFlips from "@/components/result/SecondaryFlips";
import DecisionDebt from "@/components/result/DecisionDebt";
import { MOCK_RESULT } from "@/lib/mock-data";

/* ── SEO ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Is Stansted Actually Cheaper Than Heathrow? | Travelvus",
  description:
    "Stansted often has the cheaper ticket. But Heathrow can still be the cheaper trip. A full comparison of real costs, door-to-door time, and when each airport wins.",
  alternates: {
    canonical: "/compare/heathrow-vs-stansted",
  },
};

/* ── Static data ──────────────────────────────────────── */
export const THRESHOLD = {
  ...MOCK_RESULT.threshold,
  leadLabel: "The line — where Stansted becomes worth it",
  statementHtml:
    'Stansted only wins once the flight saves more than <em class="threshold-amt">€101</em> upfront. Today it saves €68 — €33 short, so Heathrow still wins on total cost.',
  lineValue: 101,
  currentValue: 68,
  distanceToLine: 33,
  linePct: 72.1,
  nowPct: 48.6,
  gapLabel: "€33 short of the line",
};

const EXPLANATION_PARAS = [
  "The ticket price you see on a flight-search site is only part of the story. Once you add the cost of getting to the departure airport, checked baggage, seat selection, and — crucially — the transfer from the arrival airport into central London, the picture can shift dramatically.",
  "Heathrow is connected to central London by the Piccadilly line (off-peak ~£6) and the Heathrow Express (£26). Stansted relies on the Stansted Express train (~£22) or a coach (75–90 min, ~£10–15) — and after about 00:30, when the last Express has gone, a taxi becomes the realistic option at €70–90.",
  "This is why a €58 Stansted ticket can produce a €204 journey, while a €126 Heathrow ticket can land at €171. The airport you fly into shapes every cost that follows.",
];

const SCENARIOS = [
  {
    title: "Solo · no bag · daytime",
    description:
      "Wide fare gap, nothing to check, train still running. Stansted often wins here.",
    outcome: "→ Stansted wins",
  },
  {
    title: "Couple · 1 checked bag",
    description:
      "The fare gap narrows but does not close: the paid bag and the pricier transfer still put Heathrow ahead.",
    outcome: "→ Heathrow wins",
  },
  {
    title: "Family · 2+ checked bags",
    description:
      "Multiple bags multiply the hidden costs. Heathrow almost always wins for families.",
    outcome: "→ Heathrow wins",
  },
  {
    title: "Late arrival · after 00:30",
    description:
      "Once the last Stansted Express has gone, a taxi into London is the realistic option — that single line can add €70–90 and flip the comparison.",
    outcome: "→ Heathrow wins",
  },
  {
    title: "Someone collects you",
    description:
      "If a friend picks you up from Stansted, the transfer cost disappears — and the cheap ticket finally wins.",
    outcome: "→ Stansted wins",
  },
];

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

      {/* ═══ 1. QUESTION + IMMEDIATE ANSWER ═══ */}
      <section style={{ padding: "44px 38px 28px" }}>
        <div className="editorial-read" style={{ textAlign: "center" }}>
          <Kicker color="copper" className="mb-[14px]">
            London Airports &middot; Decision
          </Kicker>
          <h1 className="font-[var(--serif)] font-normal text-[40px] leading-[1.14] tracking-[-0.01em] text-[var(--muted)] mb-[16px] mobile:text-[24px] mobile:leading-[1.16]">
            Is Stansted actually cheaper than Heathrow?
          </h1>
          <p className="font-[var(--serif)] font-normal text-[34px] leading-[1.2] text-[var(--ink)] mobile:text-[24px] mobile:leading-[1.22]">
            Usually no.{" "}
            <span
              style={{
                borderBottom: "2px solid var(--copper)",
                paddingBottom: 2,
              }}
            >
              Heathrow wins
            </span>{" "}
            for most travellers.
          </p>
          {/* Confidence metadata — discreet */}
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
            <span className="confidence-tag" style={{ color: "var(--muted)" }}>
              <span className="confidence-dot strong" />
              Official + transit data
            </span>
            <span>&middot;</span>
            <span>Verified Oct 2026</span>
            <span>&middot;</span>
            <span>Volatility: medium</span>
          </div>
        </div>
      </section>

      {/* ═══ 2. LIVE COMPARISON ═══ */}
      <section style={{ padding: "0 38px 30px" }}>
        <LiveComparison
          initialA={{ cost: 204, time: "8h 05m" }}
          initialB={{ cost: 171, time: "5h 10m" }}
        />
      </section>

      {/* ═══ 3. EXPLANATION ═══ */}
      <section style={{ padding: "6px 38px 10px" }}>
        <div className="editorial-read dp-prose">
          <h2>Why the cheaper ticket isn&rsquo;t the cheaper trip</h2>
          {EXPLANATION_PARAS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* ═══ 4. DECISION THRESHOLD ═══ */}
      <section style={{ padding: "8px 38px 30px" }}>
        <div className="editorial-read">
          <div className="dp-prose" style={{ marginBottom: 24 }}>
            <h2>So when does Stansted actually win?</h2>
            <p className="big">
              Only when two things line up: the fare gap is wide, and
              you&rsquo;re travelling light.
            </p>
          </div>
          <DecisionThreshold data={THRESHOLD} />
          <div style={{ marginTop: 16 }}>
            <SecondaryFlips
              flips={[
                {
                  conditionHtml:
                    "<b>No checked baggage</b> keeps the real cost low",
                  outcomeHtml:
                    '<span class="flip-arrow">→</span> Stansted leads by about €12',
                },
                {
                  conditionHtml:
                    "If <b>someone collects you</b> from Stansted",
                  outcomeHtml:
                    '<span class="flip-arrow">→</span> Stansted wins by about €41',
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ═══ 5. DECISION DEBT ═══ */}
      <section style={{ padding: "0 38px 30px" }}>
        <div className="editorial-read">
          <DecisionDebt
            title="The hidden trade-off with Stansted"
            textHtml={
              'Choosing Stansted means accepting more <span class="debt-term">decision debt</span> — a secondary airport farther from the city, a late arrival window after the last train, a taxi-only late-night option, and greater dependence on estimated taxi costs that can swing the comparison.'
            }
            factors={[
              "Secondary airport",
              "Late arrival risk",
              "Late-night taxi risk",
              "Bag not included",
              "Estimate-dependent",
            ]}
          />
        </div>
      </section>

      {/* ═══ 6. SCENARIOS ═══ */}
      <section style={{ padding: "8px 38px 30px" }}>
        <div style={{ maxWidth: 820, margin: "0 auto" }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontWeight: 600,
              fontSize: 10,
              lineHeight: 1,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 14,
            }}
          >
            Try your situation
          </div>
          <div className="scenario-grid">
            {SCENARIOS.map((s, i) => (
              <div key={i} className="scenario-card">
                <h4>{s.title}</h4>
                <p>{s.description}</p>
                <span className="scenario-outcome">{s.outcome}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. CTA ═══ */}
      <section style={{ padding: "0 38px 20px", textAlign: "center" }}>
        <a
          href="/"
          className="btn-filled inline-block no-underline"
          style={{ padding: "15px 28px" }}
        >
          Open Compare &rarr;
        </a>
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
