import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ITA Matrix vs Google Flights: Which Flight Search Tool? | Travelvus",
  description:
    "For most searches, Google Flights. For advanced routing control, ITA Matrix. Neither calculates the real trip cost — Travelvus does. Verified July 2026.",
  alternates: { canonical: "/google-flight-matrix/" },
};

const TASKS = [
  {
    label: "I need to find the cheapest dates to fly",
    evidence:
      "Google Flights has a date grid, price graph, and flexible-date exploration. ITA Matrix has a simpler 30-day calendar but no price trend data.",
    outcome: "GOOGLE FLIGHTS",
    boundary: false,
  },
  {
    label: "I need to track a fare and get alerts when the price changes",
    evidence:
      "Google Flights tracks prices and sends email alerts. ITA Matrix has no price monitoring or notification system.",
    outcome: "GOOGLE FLIGHTS",
    boundary: false,
  },
  {
    label: "I need to search quickly, on my phone, without a learning curve",
    evidence:
      "Google Flights has a modern responsive interface built for fast searches. ITA Matrix is a desktop-era research tool with a steeper learning curve. Neither has a dedicated mobile app.",
    outcome: "GOOGLE FLIGHTS",
    boundary: false,
  },
  {
    label: "I need to control the exact routing — force or avoid specific connections",
    evidence:
      "ITA Matrix has routing codes that let you specify airlines, connection airports, stop counts, and connection times. Google Flights cannot do this.",
    outcome: "ITA MATRIX",
    boundary: false,
  },
  {
    label: "I need to filter by aircraft type or see the fare class before booking",
    evidence:
      "ITA Matrix exposes aircraft filters and fare class codes. Neither is visible in Google Flights. Useful for mileage runners and travellers with aircraft preferences.",
    outcome: "ITA MATRIX",
    boundary: false,
  },
  {
    label:
      "I need to know which flight really costs less — after baggage, transfers, and door-to-door time",
    evidence:
      "Neither ITA Matrix nor Google Flights adds baggage, seat selection, or airport transfers. Both show the ticket price. Neither shows the trip cost.",
    outcome: "FIND IN EITHER TOOL → VERIFY IN TRAVELVUS",
    boundary: true,
  },
];

export default function ToolChoicePage() {
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
          <Link href="/london-airports" className="no-underline">
            Airports
          </Link>
          <span>Guides</span>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">
          &#9776;
        </span>
      </header>

      {/* ═══ 1. HERO ═══ */}
      <section className={styles.hero}>
        <span
          className={`kicker ${styles.heroKicker}`}
          style={{ color: "var(--copper)" }}
        >
          Flight Search Tools &middot; Decision
        </span>
        <h1 className={styles.heroH1}>
          Should you use ITA Matrix or Google Flights to find your flights?
        </h1>
        <p className={styles.heroAnswer}>
          For most searches, Google Flights. For advanced routing control, ITA
          Matrix. For comparing the real total cost, both &mdash; then
          Travelvus.
        </p>
        <p className={styles.heroEvidence}>
          ITA Matrix and Google Flights capabilities verified July 2026
          &middot; Official Google documentation
        </p>
      </section>

      {/* ═══ 2. ENTITY CORRECTION ═══ */}
      <section className={styles.entityNote}>
        <p>
          This page is at /google-flight-matrix/ &mdash; a phrase some
          travellers use. It usually refers to ITA Matrix. We use the real
          product names throughout.
        </p>
      </section>

      {/* ═══ 3. CAPABILITY CONTEXT ═══ */}
      <section className={styles.section}>
        <div className={styles.contextWrap}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelNum}></span>
            <h2 className={styles.sectionLabelTitle}>What each tool does</h2>
          </div>
          <p className={styles.contextP}>
            <b>Google Flights</b> is the fast, modern flight search tool at
            flights.google.com. It finds flights across 300+ airline and OTA
            partners, tracks prices with email alerts, and shows you the
            cheapest dates to fly. When you find a flight, it hands you off to
            the airline or travel agency to book.
          </p>
          <p className={styles.contextP}>
            <b>ITA Matrix</b> is the power tool at matrix.itasoftware.com. It
            exposes routing codes, aircraft filters, fare class visibility, and
            connection controls that consumer search tools hide. It does not
            sell tickets &mdash; it is a research instrument for constructing
            complex itineraries.
          </p>
        </div>
      </section>

      {/* ═══ 4. TASK → TOOL SYSTEM ═══ */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.sectionLabelNum}></span>
          <h2 className={styles.sectionLabelTitle}>
            Which tool for which task
          </h2>
        </div>
        <div className={styles.taskList}>
          {TASKS.map((task, i) => (
            <div
              key={i}
              className={`${styles.taskRow} ${task.boundary ? styles.taskBoundary : ""}`}
            >
              <div className={styles.taskBody}>
                <div className={styles.taskLabel}>{task.label}</div>
                <div className={styles.taskEvidence}>{task.evidence}</div>
              </div>
              <div className={styles.taskOutcome}>
                {task.boundary ? (
                  <div className={styles.taskOutcomeDual}>
                    FIND IN EITHER TOOL
                    <span>&darr;</span>
                    VERIFY IN TRAVELVUS
                  </div>
                ) : (
                  <div className={styles.taskOutcomeSingle}>
                    {task.outcome}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ 5. HINGE ═══ */}
      <section className={styles.hinge}>
        <hr className={styles.hingeRule} />
        <p className={styles.hingeLine}>
          Find flights there. Verify the real cost here.
        </p>
      </section>

      {/* ═══ 6. TRAVELVUS HANDOFF RELAY ═══ */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.sectionLabelNum}></span>
          <h2 className={styles.sectionLabelTitle}>What neither tool answers</h2>
        </div>
        <div className={styles.relay}>
          <div className={styles.relayStage}>
            <span className={styles.relayNum}>1</span>
            <span className={styles.relayLabel}>Find</span>
            <p className={styles.relayText}>
              Use ITA Matrix or Google Flights to find two flight options. Note
              the ticket price, airports, and times.
            </p>
          </div>
          <div className={styles.relayConnector}>&rarr;</div>
          <div className={styles.relayStage}>
            <span className={styles.relayNum}>2</span>
            <span className={styles.relayLabel}>Enter</span>
            <p className={styles.relayText}>
              Manually carry those fields into Travelvus Quick Compare. No
              import. No API. Just the numbers you already have.
            </p>
          </div>
          <div className={styles.relayConnector}>&rarr;</div>
          <div className={styles.relayStage}>
            <span className={styles.relayNum}>3</span>
            <span className={styles.relayLabel}>Compare</span>
            <p className={styles.relayText}>
              Travelvus adds baggage, seat selection, airport transfers, and
              door-to-door time. You get the real winner.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 7. PRODUCT CONTINUATION ═══ */}
      <section className={styles.ctaSection}>
        <Link href="/#compare" className={styles.ctaPrimaryBtn}>
          Open Quick Compare &rarr;
        </Link>
        <div className={styles.ctaSupporting}>
          <Link href="/methodology">How Travelvus calculates this &rarr;</Link>
          <Link href="/questions/london-airport-break-even">
            How airport break-evens work &rarr;
          </Link>
        </div>
      </section>

      {/* ═══ Footer ═══ */}
      <footer className="home-footer">
        <div className="home-footer-links">
          <Link href="/">Home</Link>
          <Link href="/london-airports">London Airports</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/questions/london-airport-break-even">
            Break-even question
          </Link>
          <Link href="/compare/heathrow-vs-stansted/">
            Heathrow vs Stansted
          </Link>
          <Link href="/compare/heathrow-vs-gatwick/">
            Heathrow vs Gatwick
          </Link>
          <Link href="/compare/gatwick-vs-stansted/">
            Gatwick vs Stansted
          </Link>
        </div>
        <p className="home-footer-note">
          &copy; 2026 Travelvus. ITA Matrix and Google Flights capabilities
          verified July 2026. UK transport at 1 GBP &asymp; 1.17 EUR.
          Walk-up contactless/Oyster, off-peak. Totals rounded. Winner from
          raw values.
        </p>
      </footer>
    </div>
  );
}
