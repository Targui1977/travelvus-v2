import type { Metadata } from "next";
import { QuickCompare } from "@/components/compare";
import Link from "next/link";

/* ── SEO ─────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Travelvus — Compare Two Flights and Find Out Which Really Wins",
  description:
    "Found two flights and can't decide? Travelvus compares the real trip — door-to-door costs, baggage, transfers, and time. Verified for London airports.",
  alternates: { canonical: "/" },
};

/* ═══════════════════════════════════════════════════════ */

export default function HomePage() {
  return (
    <div className="max-w-[var(--container-compare)] mx-auto w-full bg-[var(--paper)] shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
      {/* ═══ Header ═══ */}
      <header className="app-header">
        <span className="app-header-brand">
          <span className="app-header-wordmark">Travelvus</span>
          <span className="app-header-line" />
          <span className="app-header-dot" />
        </span>
        <nav className="app-header-nav mobile:hidden">
          <span className="text-[var(--ink)]">Compare</span>
          <span>Airports</span>
          <span>Guides</span>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
          &#9776;
        </span>
      </header>

      {/* ═══ 1. HERO ═══ */}
      <section className="home-hero">
        <span
          className="kicker mb-[14px]"
          style={{ color: "var(--copper)", display: "block", textAlign: "center" }}
        >
          Travelvus
        </span>
        <h1 className="home-hero-h1">
          The ticket price shows one number.
          <br />
          We compare the real trip.
        </h1>
        <p className="home-hero-sub">
          Bring two flights you already found. Travelvus adds baggage, airport
          transfers, and door-to-door time. Then tells you which really wins
          &mdash; and what would change the answer.
        </p>
        <a href="#compare" className="home-hero-cta">
          Compare your flights &darr;
        </a>
        <p className="home-hero-evidence">
          Verified for London airports &middot; Heathrow, Gatwick, Stansted
          &middot; 3 real comparisons below
        </p>
      </section>

      {/* ═══ 2. HOW TRAVELVUS THINKS ═══ */}
      <section className="home-how">
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">How Travelvus thinks</span>
        </div>
        <div className="home-step">
          <span className="home-step-num">01</span>
          <p className="home-step-text">
            <b>You bring two flights you already found.</b>{" "}Ticket price,
            airports, departure and arrival times. That&rsquo;s it. No search.
            No booking. You already did the work.
          </p>
        </div>
        <div className="home-step">
          <span className="home-step-num">02</span>
          <p className="home-step-text">
            <b>We compare the real trip.</b>{" "}Checked baggage, seat selection,
            airport transfers, and door-to-door time &mdash; not just the
            ticket price you saw online.
          </p>
        </div>
        <div className="home-step">
          <span className="home-step-num">03</span>
          <p className="home-step-text">
            <b>You get a verdict you can challenge.</b>{" "}See who wins, by how
            much, and exactly what would change the answer. Edit variables.
            Test scenarios. Undo. Keep.
          </p>
        </div>
        <p className="lvg-evidence-note" style={{ marginTop: 10 }}>
          <Link href="/methodology" className="text-[var(--copper)] no-underline hover:underline">
            How Travelvus works &rarr;
          </Link>
        </p>
      </section>

      {/* ═══ 3. PROOF CARDS ═══ */}
      <section className="home-proofs">
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">Real comparisons</span>
        </div>
        <div className="home-proof-grid">
          {/* Card 1: LHR vs STN */}
          <Link href="/compare/heathrow-vs-stansted/" className="home-proof-card">
            <span className="home-proof-eyebrow">Hidden real cost</span>
            <span className="home-proof-insight">
              &ldquo;The &euro;58 ticket produced a &euro;204 journey.&rdquo;
            </span>
            <span className="home-proof-evidence">
              Once the checked bag and night taxi were counted, Heathrow saved
              &euro;33 &mdash; despite the &euro;68 higher fare.
            </span>
            <span className="home-proof-link">Heathrow vs Stansted &rarr;</span>
          </Link>

          {/* Card 2: LHR vs LGW */}
          <Link href="/compare/heathrow-vs-gatwick/" className="home-proof-card">
            <span className="home-proof-eyebrow">Destination matters</span>
            <span className="home-proof-insight">
              &ldquo;Gatwick usually wins on money &mdash; but your destination
              changes the margin.&rdquo;
            </span>
            <span className="home-proof-evidence">
              Same flights, same travellers. Only the London destination
              changed. Paddington: near-tie. Canary Wharf: &euro;37 Gatwick win.
            </span>
            <span className="home-proof-link">Heathrow vs Gatwick &rarr;</span>
          </Link>

          {/* Card 3: LGW vs STN */}
          <Link href="/compare/gatwick-vs-stansted/" className="home-proof-card">
            <span className="home-proof-eyebrow">The saving that nearly vanished</span>
            <span className="home-proof-insight">
              &ldquo;Stansted saves &euro;20 on the flight &mdash; but &euro;16
              more in fixed costs leaves only &euro;4.&rdquo;
            </span>
            <span className="home-proof-evidence">
              Stansted was cheaper on the ticket but baggage and a longer train
              journey nearly erased the gain.
            </span>
            <span className="home-proof-link">Gatwick vs Stansted &rarr;</span>
          </Link>
        </div>
      </section>

      {/* ═══ 4. QUICK COMPARE ═══ */}
      <section id="compare" className="home-compare-section">
        <div className="section-label" style={{ paddingLeft: 38, paddingRight: 38, marginBottom: 12 }}>
          <span className="section-label-num"></span>
          <span className="section-label-title">Compare your flights</span>
        </div>
        <div className="compare-body-wrapper">
          <QuickCompare standalone={false} />
        </div>
      </section>

      {/* ═══ 5. BOUNDARIES ═══ */}
      <section className="home-bounds">
        <div className="section-label">
          <span className="section-label-num"></span>
          <span className="section-label-title">What Travelvus can answer today</span>
        </div>
        <div className="home-bounds-content">
          <p>
            <b>Currently verified for London airports:</b> Heathrow, Gatwick,
            and Stansted.
          </p>
          <p>
            For these airports, we compare real cost (ticket + baggage +
            transfer), door-to-door journey time, what would change the
            winner, and hidden trade-offs between options.
          </p>
          <p>
            <b>For other airports,</b> you can still compare ticket prices
            &mdash; and we&rsquo;ll tell you honestly when we don&rsquo;t yet
            have the full transfer data to judge the complete trip.
          </p>
          <p className="home-bounds-note">
            Travelvus calculates the money truth. Whether the saving is worth
            the extra journey time is personal &mdash; we hand that decision
            to you.
          </p>
        </div>
      </section>

      {/* ═══ 6. FOOTER ═══ */}
      <footer className="home-footer">
        <div className="home-footer-links">
          <Link href="/">Home</Link>
          <Link href="/compare/heathrow-vs-stansted/">Heathrow vs Stansted</Link>
          <Link href="/compare/heathrow-vs-gatwick/">Heathrow vs Gatwick</Link>
          <Link href="/compare/gatwick-vs-stansted/">Gatwick vs Stansted</Link>
        </div>
        <div className="home-footer-ad">
          <div className="ad-zone">Ad &middot; editorial zone only</div>
        </div>
        <p className="home-footer-note">
          &copy; 2026 Travelvus. Methodology: walk-up contactless fares, UK
          transport at 1 GBP &asymp; 1.17 EUR. All totals rounded.
        </p>
      </footer>
    </div>
  );
}
