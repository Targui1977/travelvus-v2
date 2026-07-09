import type { Metadata } from "next";
import Link from "next/link";

/* ── SEO ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "How Travelvus Compares Flights — Methodology & Evidence | Travelvus",
  description:
    "Travelvus compares the real trip — not just the ticket. How we calculate real cost, door-to-door time, and what changes the answer. Verified for London airports.",
  alternates: { canonical: "/methodology" },
};

/* ═══════════════════════════════════════════════════════ */

export default function MethodologyPage() {
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
          <span>Airports</span>
          <span>Guides</span>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
          &#9776;
        </span>
      </header>

      {/* ═══ 1. HERO ═══ */}
      <section className="method-hero">
        <span className="kicker" style={{ color: "var(--copper)" }}>
          Methodology
        </span>
        <h1 className="method-hero-h1">How Travelvus compares two flights</h1>
        <p className="method-hero-sub">
          We add what the ticket price leaves out — then tell you exactly where
          the calculation ends and your judgment begins.
        </p>
        <p className="method-hero-evidence">
          Verified for London airports &middot; Heathrow, Gatwick, Stansted
          &middot; Jul 2026
        </p>
      </section>

      {/* ═══ 2. THE DECISION PIPELINE ═══ */}
      <section className="method-section">
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">The decision pipeline</span>
        </div>

        <div className="pipeline-list">
          <div className="pipeline-row">
            <span className="pipeline-num">01</span>
            <div className="pipeline-body">
              <span className="pipeline-label">The ticket number</span>
              <p className="pipeline-text">
                You bring the price you found. Travelvus does not search or
                book flights. The ticket price is the starting number — not the
                final cost.
              </p>
            </div>
            <span className="pipeline-tag">User-provided</span>
          </div>

          <div className="pipeline-row">
            <span className="pipeline-num">02</span>
            <div className="pipeline-body">
              <span className="pipeline-label">The real trip</span>
              <p className="pipeline-text">
                We add checked baggage, seat selection, and airport transfers —
                measured identically for both options. Transfer costs come from
                official TfL and National Rail sources.
              </p>
            </div>
            <span className="pipeline-tag">Sourced data</span>
          </div>

          <div className="pipeline-row">
            <span className="pipeline-num">03</span>
            <div className="pipeline-body">
              <span className="pipeline-label">The calculable winner</span>
              <p className="pipeline-text">
                The lower real cost wins. The winner is always determined from
                exact values, never from rounded display numbers.
              </p>
            </div>
            <span className="pipeline-tag">Calculated</span>
          </div>

          <div className="pipeline-row">
            <span className="pipeline-num">04</span>
            <div className="pipeline-body">
              <span className="pipeline-label">What can change the answer</span>
              <p className="pipeline-text">
                Remove baggage. Change the fare gap. Switch destination.
                Travelvus recalculates and shows exactly what flipped the
                verdict.
              </p>
            </div>
            <span className="pipeline-tag">Calculated</span>
          </div>

          <div className="pipeline-row pipeline-boundary">
            <span className="pipeline-num">05</span>
            <div className="pipeline-body">
              <span className="pipeline-label">Where the numbers stop</span>
              <p className="pipeline-text">
                When the monetary difference is too small, or when time and
                simplicity matter, Travelvus hands the decision to you — with
                all the measurable facts visible.
              </p>
            </div>
            <span className="pipeline-tag">Your judgment</span>
          </div>
        </div>
      </section>

      {/* ═══ 3. THE NUMBERS WE USE ═══ */}
      <section className="method-section">
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">The numbers we use</span>
        </div>

        <div className="evidence-list">
          <div className="evidence-band">
            <span className="evidence-band-label">What you provide</span>
            <p className="evidence-band-text">
              Ticket price, airports, departure and arrival times. You already
              found the flights. Travelvus does not search or book.
            </p>
            <span className="evidence-band-tag">User-provided</span>
          </div>

          <div className="evidence-band">
            <span className="evidence-band-label">What we source</span>
            <p className="evidence-band-text">
              Airport transfer costs from official TfL and National Rail
              sources. Walk-up single, contactless/Oyster, off-peak daytime.
              Both airports measured identically. GBP converted to EUR at 1.17
              (July 2026 estimate).
            </p>
            <span className="evidence-band-tag">Sourced · updated periodically</span>
          </div>

          <div className="evidence-band">
            <span className="evidence-band-label">What we estimate</span>
            <p className="evidence-band-text">
              Sample flight fares, baggage policies, and representative journey
              times. These are scenario assumptions — not live data, not
              guaranteed prices. We label estimates clearly.
            </p>
            <span className="evidence-band-tag">Estimate · scenario assumption</span>
          </div>
        </div>
      </section>

      {/* ═══ 4. ROUNDING ═══ */}
      <section className="method-section">
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">Raw values decide. Rounded values display.</span>
        </div>
        <p className="method-prose">
          The winner is always determined from exact values. Displayed totals
          are rounded to the nearest euro. A small raw win never shows as
          &ldquo;wins by &euro;0&rdquo; — we say &ldquo;just wins&rdquo;
          instead. Exact ties remain ties.
        </p>
        <div className="rounding-example">
          <div className="rounding-row">
            <span className="rounding-label">Raw</span>
            <span className="rounding-val">LGW &euro;145.52</span>
            <span className="rounding-dot">&middot;</span>
            <span className="rounding-val">STN &euro;141.17</span>
            <span className="rounding-arrow">&rarr;</span>
            <span className="rounding-winner">STN wins by &euro;4.35</span>
          </div>
          <div className="rounding-row">
            <span className="rounding-label">Display</span>
            <span className="rounding-val">LGW &euro;146</span>
            <span className="rounding-dot">&middot;</span>
            <span className="rounding-val">STN &euro;141</span>
            <span className="rounding-arrow">&rarr;</span>
            <span className="rounding-winner">STN wins by &euro;4</span>
          </div>
        </div>
      </section>

      {/* ═══ 5. PERSONAL HANDOFF ═══ */}
      <section className="method-section">
        <div className="handoff-block">
          <span className="handoff-block-kicker">The numbers stop here.</span>
          <span className="handoff-block-headline">Your priorities start here.</span>
          <p className="handoff-block-text">
            Travelvus can calculate the money truth. It cannot decide whether
            &euro;4 is worth 20 extra minutes on a train. It cannot decide
            whether simplicity matters more than a narrow cost advantage.
          </p>
          <p className="handoff-block-text">
            When the margin is too thin for arithmetic alone, Travelvus hands
            the decision to you — with all the measurable facts visible.
          </p>
          <p className="handoff-block-footnote">
            This is not a limitation. It is the product.
          </p>
        </div>
      </section>

      {/* ═══ 6. COVERAGE ═══ */}
      <section className="method-section">
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">What we can compare today</span>
        </div>

        <div className="coverage-list">
          <div className="coverage-card coverage-full">
            <span className="coverage-card-label">Full comparison</span>
            <p className="coverage-card-text">
              Heathrow, Gatwick, and Stansted. Real cost, door-to-door time,
              what changes the winner, and hidden trade-offs.
            </p>
            <span className="coverage-card-foot">3 Decision Pages available</span>
          </div>

          <div className="coverage-card coverage-partial">
            <span className="coverage-card-label">Ticket comparison only</span>
            <p className="coverage-card-text">
              Any other airport pair. You can still compare ticket prices. We
              tell you honestly when we don&rsquo;t yet have the full transfer
              data.
            </p>
            <span className="coverage-card-foot">
              <Link href="/">Use Quick Compare &rarr;</Link>
            </span>
          </div>

          <div className="coverage-card coverage-none">
            <span className="coverage-card-label">Not yet available</span>
            <p className="coverage-card-text">
              Live fare tracking, live disruption data, guaranteed taxi prices,
              and universal baggage policies for every airline.
            </p>
            <span className="coverage-card-foot">We tell you what we know, not what we guess</span>
          </div>
        </div>
      </section>

      {/* ═══ 7. THREE PROOFS ═══ */}
      <section className="method-section">
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">See the system working</span>
        </div>

        <div className="proof-list">
          <Link href="/compare/heathrow-vs-stansted/" className="proof-row">
            <span className="proof-num">01</span>
            <span className="proof-label">Heathrow vs Stansted</span>
            <span className="proof-lesson">
              A cheaper ticket can become the more expensive trip after hidden
              costs are counted.
            </span>
            <span className="proof-evidence">
              The &euro;58 ticket produced a &euro;204 journey &rarr;
            </span>
          </Link>

          <Link href="/compare/heathrow-vs-gatwick/" className="proof-row">
            <span className="proof-num">02</span>
            <span className="proof-label">Heathrow vs Gatwick</span>
            <span className="proof-lesson">
              The same flights can produce very different margins depending on
              where in London you are going.
            </span>
            <span className="proof-evidence">
              &euro;37 at Canary Wharf &middot; near-tie at Paddington &rarr;
            </span>
          </Link>

          <Link href="/compare/gatwick-vs-stansted/" className="proof-row">
            <span className="proof-num">03</span>
            <span className="proof-label">Gatwick vs Stansted</span>
            <span className="proof-lesson">
              A mathematical winner can still require a personal judgment when
              the margin is thin.
            </span>
            <span className="proof-evidence">
              &euro;20 flight saving &middot; &euro;16 fixed costs &middot;
              &euro;4 net &rarr;
            </span>
          </Link>
        </div>
      </section>

      {/* ═══ 8. CTA ═══ */}
      <section className="method-section" style={{ textAlign: "center" }}>
        <Link href="/" className="btn-filled inline-block no-underline" style={{ padding: "15px 28px", background: "var(--copper)" }}>
          Open Compare &rarr;
        </Link>
      </section>

      {/* ═══ 9. FOOTER ═══ */}
      <footer className="home-footer">
        <div className="home-footer-links">
          <Link href="/">Home</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/compare/heathrow-vs-stansted/">Heathrow vs Stansted</Link>
          <Link href="/compare/heathrow-vs-gatwick/">Heathrow vs Gatwick</Link>
          <Link href="/compare/gatwick-vs-stansted/">Gatwick vs Stansted</Link>
        </div>
        <p className="home-footer-note">
          &copy; 2026 Travelvus. UK transport at 1 GBP &asymp; 1.17 EUR.
          Walk-up contactless/Oyster, off-peak. Totals rounded. Winner from raw values.
        </p>
      </footer>
    </div>
  );
}
