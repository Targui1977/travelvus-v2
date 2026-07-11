import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Travelvus",
  description:
    "Contact Travelvus. We welcome feedback, corrections, and questions about our flight comparison methodology and airport data.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="max-w-[var(--container-decision)] mx-auto w-full bg-[var(--paper)] pb-[90px] shadow-[0_1px_3px_rgba(0,0,0,.06),0_12px_34px_rgba(30,42,51,.10)]">
      <header className="app-header">
        <span className="app-header-brand">
          <span className="app-header-wordmark">Travelvus</span>
          <span className="app-header-line" />
          <span className="app-header-dot" />
        </span>
        <nav className="app-header-nav mobile:hidden">
          <span>Compare</span>
          <Link href="/london-airports" className="no-underline">Airports</Link>
          <Link href="/wego-flight" className="no-underline">Guides</Link>
        </nav>
        <span className="hidden mobile:block text-[20px] font-medium text-[var(--muted)] leading-none cursor-pointer">&#9776;</span>
      </header>

      <div style={{ padding: "48px 38px 30px", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--serif)", fontWeight: 400, fontSize: 40, lineHeight: 1.14, color: "var(--ink)", maxWidth: 560, margin: "0 auto 14px" }}>
          Contact Travelvus
        </h1>
        <p style={{ fontFamily: "var(--sans)", fontSize: 16, lineHeight: 1.55, color: "var(--muted)", maxWidth: 480, margin: "0 auto 24px" }}>
          We welcome feedback, corrections, and questions about our flight comparison methodology and airport data.
        </p>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "14px 38px 30px" }}>
        <p style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.6, color: "#4a5560", margin: "0 0 14px" }}>
          Travelvus is an independent project. We compare the real cost of flights using verified airport transfer data, official TfL and National Rail fares, and a transparent calculation model.
        </p>
        <p style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.6, color: "#4a5560", margin: "0 0 14px" }}>
          If you have found an error in our data, want to suggest an airport pair for comparison, or have questions about how we calculate real costs, we would like to hear from you.
        </p>
        <p style={{ fontFamily: "var(--sans)", fontSize: 15, lineHeight: 1.6, color: "#4a5560", margin: "0 0 14px" }}>
          Please contact us by email at:
        </p>
        <p style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 16, lineHeight: 1.4, color: "var(--ink)", margin: "0 0 24px" }}>
          travelvus@outlook.com
        </p>
        <p style={{ fontFamily: "var(--sans)", fontSize: 13, lineHeight: 1.5, color: "var(--muted)", margin: "0 0 24px" }}>
          We read every message. We aim to respond within a few days. We do not accept guest posts, sponsored content, or link exchanges.
        </p>

        <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
          <Link href="/about" style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--copper)", textDecoration: "none" }}>About Travelvus &rarr;</Link>
          <Link href="/methodology" style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--copper)", textDecoration: "none" }}>How we calculate this &rarr;</Link>
          <Link href="/" style={{ fontFamily: "var(--mono)", fontWeight: 500, fontSize: 13, lineHeight: 1, color: "var(--copper)", textDecoration: "none" }}>Home &rarr;</Link>
        </div>
      </div>

      <footer className="home-footer">
        <div className="home-footer-links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/methodology">Methodology</Link>
          <Link href="/london-airports">London Airports</Link>
        </div>
        <p className="home-footer-note">&copy; 2026 Travelvus.</p>
      </footer>
    </div>
  );
}
