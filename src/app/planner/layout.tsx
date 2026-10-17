import type { Metadata } from "next";

/**
 * The planner page is a client component ("use client"), which cannot
 * export metadata directly. This layout provides its metadata instead.
 */
export const metadata: Metadata = {
  title: "Arrival Planner — Plan Your Airport Transfer | Travelvus",
  description:
    "Plan your airport arrival: door-to-door timing, transfer options and what to expect after you land at London, Paris or New York airports.",
  alternates: { canonical: "/planner" },
};

export default function PlannerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
