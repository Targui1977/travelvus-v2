import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-[var(--container-decision)] mx-auto w-full bg-[var(--paper)] min-h-screen shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
      <header className="app-header">
        <span className="app-header-brand">
          <span className="app-header-wordmark">Travelvus</span>
          <span className="app-header-line" />
          <span className="app-header-dot" />
        </span>
      </header>

      <div
        style={{
          textAlign: "center",
          padding: "80px 38px 60px",
        }}
      >
        <h1
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: 36,
            lineHeight: 1.15,
            color: "var(--ink)",
            marginBottom: 14,
          }}
        >
          This page does not exist.
        </h1>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: 15,
            lineHeight: 1.55,
            color: "var(--muted)",
            maxWidth: 440,
            margin: "0 auto 28px",
          }}
        >
          The page you are looking for may have moved or no longer exists.
        </p>

        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              display: "inline-block",
              background: "var(--navy)",
              color: "var(--paper)",
              borderRadius: 10,
              padding: "13px 22px",
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 14,
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            Home &rarr;
          </Link>
          <Link
            href="/#compare"
            style={{
              display: "inline-block",
              background: "var(--copper)",
              color: "#fff",
              borderRadius: 10,
              padding: "13px 22px",
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 14,
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            Open Quick Compare &rarr;
          </Link>
          <Link
            href="/london-airports"
            style={{
              display: "inline-block",
              border: "1px solid var(--line-2)",
              color: "var(--ink)",
              borderRadius: 10,
              padding: "13px 22px",
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 14,
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            London Airports &rarr;
          </Link>
        </div>
      </div>

      <footer className="home-footer">
        <div className="home-footer-links">
          <Link href="/">Home</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/london-airports">London Airports</Link>
        </div>
      </footer>
    </div>
  );
}
