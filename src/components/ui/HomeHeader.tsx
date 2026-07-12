"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "@/app/page.module.css";

export default function HomeHeader() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;

  // Determine active nav item
  const isCompareActive = pathname === "/" || pathname?.startsWith("/result");
  const isAirportsActive = pathname?.startsWith("/compare/") || pathname === "/london-airports";
  const isGuidesActive =
    pathname?.startsWith("/google-flight-matrix") ||
    pathname?.startsWith("/questions/") ||
    pathname === "/wego-flight" ||
    pathname === "/kayak-flights" ||
    pathname === "/tsa-precheck-cost" ||
    pathname === "/expedia-taap" ||
    pathname?.startsWith("/unlock-") ||
    pathname?.startsWith("/ultimate-") ||
    pathname === "/points-guy" ||
    pathname === "/irctc-train-ticket-booking" ||
    pathname === "/defense-travel-system" ||
    pathname === "/bart-trip-planner" ||
    pathname === "/trimet-trip-planner" ||
    pathname === "/mta-trip-planner" ||
    pathname === "/aaa-travel" ||
    pathname === "/costco-vacation" ||
    pathname === "/tsa-lock" ||
    pathname === "/vrl-bus-booking" ||
    pathname === "/top-rated-tourists-attractions-in-rome";

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); } };
    if (open) {
      document.addEventListener("mousedown", handler);
      document.addEventListener("keydown", esc);
      document.body.style.overflow = "hidden";
      menuRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => { setOpen(false); btnRef.current?.focus(); };

  const desktopLink = (href: string, label: string, active: boolean) => (
    <Link
      href={href}
      className={`${styles.headerNavLink} ${active ? styles.headerNavLinkActive : ""}`}
    >
      {label}
    </Link>
  );

  const mobileLink = (href: string, label: string, active: boolean) => (
    <Link
      href={href}
      className={`${styles.mobileNavLink} ${active ? styles.mobileNavLinkActive : ""}`}
      onClick={() => setOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className={styles.header} ref={ref}>
      <Link href="/" className={styles.headerBrandLink}>
        <span className={styles.headerBrand}>
          <span className={styles.headerWordmark}>Travelvus</span>
          <span className={styles.headerLine} />
          <span className={styles.headerDot} />
        </span>
      </Link>

      <nav className={styles.headerNav}>
        {desktopLink("/", "Compare", isCompareActive)}
        {desktopLink("/london-airports", "Airport Decisions", isAirportsActive)}
        {desktopLink("/wego-flight", "Guides", isGuidesActive)}
        <Link href="/#compare" className={styles.headerCta}>Open Engine →</Link>
      </nav>

      <button
        ref={btnRef}
        className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        aria-controls="mobile-menu"
      >
        <span /><span /><span />
      </button>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
        role="navigation"
        aria-label="Mobile navigation"
        tabIndex={-1}
      >
        {mobileLink("/", "Compare", isCompareActive)}
        {mobileLink("/london-airports", "Airport Decisions", isAirportsActive)}
        {mobileLink("/wego-flight", "Guides", isGuidesActive)}
        {mobileLink("/methodology", "Methodology", false)}
        {mobileLink("/about", "About", pathname === "/about")}
        {mobileLink("/contact", "Contact", pathname === "/contact")}
      </div>
    </header>
  );
}
