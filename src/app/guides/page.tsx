import type { Metadata } from "next";
import Link from "next/link";
import HomeHeader from "@/components/ui/HomeHeader";
import Footer from "@/components/ui/Footer";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Travel Decision Guides: Airports, Rental Cars & Real Costs | Travelvus",
  description: "Independent decision guides for airports, rental cars and the real cost of travel — each one answers one question: which option really wins?",
  alternates: { canonical: "/guides" },
};

interface GuideCard {
  tag: string;
  title: string;
  em?: string;
  desc: string;
  href: string;
}

const FEATURED: GuideCard[] = [
  {
    tag: "Rental car decisions",
    title: "Flight delayed?",
    em: "What happens to your rental car booking",
    desc: "Verified grace periods, flight-number protection, closed desks and no-show fees — company by company, country by country.",
    href: "/guides/rental-car-pickup-flight-delayed",
  },
  {
    tag: "Rental car decisions",
    title: "Rental car across borders?",
    em: "The Dubrovnik cross-border fee guide",
    desc: "Which companies publish their Bosnia and Montenegro crossing fees — and what happens if you don't declare the trip.",
    href: "/guides/dubrovnik-car-rental-cross-border-fees",
  },
  {
    tag: "Travel costs & practical guides",
    title: "Cheapest ticket, or cheapest journey?",
    em: "The real cost of a flight",
    desc: "Baggage, transfers and hidden fees decide what a flight actually costs. A worked method to compare two options properly.",
    href: "/guides/real-cost-of-a-flight",
  },
  {
    tag: "Airport & transfer decisions",
    title: "Which airport for central Paris?",
    em: "CDG, Orly or Beauvais",
    desc: "Metro 14 changed the Paris airport equation. Neighbourhood-by-neighbourhood guidance with verified 2026 fares.",
    href: "/guides/best-airport-for-central-paris",
  },
];

interface Category {
  id: string;
  title: string;
  kicker: string;
  intro: string;
  items: { title: string; desc: string; href: string }[];
}

const CATEGORIES: Category[] = [
  {
    id: "airport",
    title: "Airport & Transfer Decisions",
    kicker: "01 · Airport & transfer decisions",
    intro: "One question each: which airport actually serves your destination best — on time, cost and convenience.",
    items: [
      { title: "Best airport for central London", desc: "Westminster, Soho and the West End — Heathrow's Elizabeth Line changes the answer", href: "/guides/best-airport-for-central-london" },
      { title: "Best airport for east London", desc: "London City's DLR vs Stansted for Hackney, Stratford and Docklands", href: "/guides/best-airport-for-east-london" },
      { title: "Best airport for north London", desc: "Luton or Stansted for Camden, Islington and King's Cross", href: "/guides/best-airport-for-north-london" },
      { title: "Best airport for south London", desc: "Gatwick's direct trains vs crossing central London from Heathrow", href: "/guides/best-airport-for-south-london" },
      { title: "Best airport for west London", desc: "Heathrow's natural territory — but the Piccadilly Line has limits", href: "/guides/best-airport-for-west-london" },
      { title: "Best London airport for budget travellers", desc: "Ryanair, Wizz Air and easyJet: which base really saves you money", href: "/guides/best-london-airport-for-budget-travellers" },
      { title: "Best London airport for business travel", desc: "London City for Canary Wharf; Heathrow for everything else international", href: "/guides/best-london-airport-for-business-travel" },
      { title: "Best London airport for families", desc: "Direct trains, step-free access and luggage with children", href: "/guides/best-london-airport-for-families" },
      { title: "Cheapest London airport", desc: "Ticket price vs total journey cost, worked with one checked bag", href: "/guides/cheapest-london-airport" },
      { title: "Fastest London airport", desc: "Destination-by-destination door-to-door times across all five airports", href: "/guides/fastest-london-airport" },
      { title: "Heathrow vs Gatwick: the complete decision guide", desc: "Where Gatwick really wins — and the Paddington near-tie explained", href: "/guides/heathrow-vs-gatwick" },
      { title: "Best airport for central Paris", desc: "Orly's Metro 14 changed the Left Bank equation", href: "/guides/best-airport-for-central-paris" },
      { title: "Cheapest Paris airport", desc: "Both rail transfers cost €14 now — the airfare decides", href: "/guides/best-airport-for-cheapest-paris" },
      { title: "Best Paris airport for families", desc: "Two direct trains to central Paris: how to choose with luggage", href: "/guides/best-airport-for-families-paris" },
      { title: "Best airport for Gare du Nord", desc: "CDG's direct RER B vs Orly's Metro 14 with one change", href: "/guides/best-airport-for-gare-du-nord" },
      { title: "Best airport for La Défense", desc: "Metro 14 plus RER A flipped the business-district answer", href: "/guides/best-airport-for-la-defense" },
      { title: "Best airport for Montparnasse", desc: "Orlybus vs the RER B — southern Paris's real options", href: "/guides/best-airport-for-montparnasse" },
      { title: "CDG vs Orly", desc: "Long-haul vs closer and faster: the full Paris comparison", href: "/guides/cdg-vs-orly" },
      { title: "Best airport for Manhattan", desc: "JFK, Newark or LaGuardia — by neighbourhood and by fare", href: "/guides/best-airport-for-manhattan" },
      { title: "JFK vs Newark", desc: "The two international hubs compared on time, cost and reliability", href: "/guides/jfk-vs-newark" },
    ],
  },
  {
    id: "rental",
    title: "Rental Car Decisions",
    kicker: "02 · Rental car decisions",
    intro: "The fine print of picking up a car — delays, borders and the fees nobody shows at checkout.",
    items: [
      { title: "Flight delayed? Your rental car booking", desc: "Grace periods, flight-number protection and after-hours fees by company and country", href: "/guides/rental-car-pickup-flight-delayed" },
      { title: "Dubrovnik cross-border rental fees", desc: "Sixt, Hertz, Enterprise and Nova — published fees for Bosnia and Montenegro", href: "/guides/dubrovnik-car-rental-cross-border-fees" },
    ],
  },
  {
    id: "costs",
    title: "Travel Costs & Practical Guides",
    kicker: "03 · Travel costs & practical guides",
    intro: "The methods behind every Travelvus decision — so you can run the same comparison yourself.",
    items: [
      { title: "The real cost of a flight", desc: "A worked method to compare two flights on total cost, not ticket price", href: "/guides/real-cost-of-a-flight" },
      { title: "Total travel time comparison", desc: "Flight duration is one segment — compare the door-to-door journey", href: "/guides/total-travel-time-comparison" },
    ],
  },
];

const TOTAL_GUIDES = new Set([
  ...FEATURED.map((g) => g.href),
  ...CATEGORIES.flatMap((c) => c.items.map((i) => i.href)),
]).size;

const HUB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Travel Decision Guides — Airports, Rental Cars & Real Costs",
  description: "Independent decision guides for airports, rental cars and the real cost of travel.",
  url: "https://www.travelvus.com/guides",
  publisher: { "@type": "Organization", name: "Travelvus", url: "https://www.travelvus.com" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      ...new Map(
        [...FEATURED, ...CATEGORIES.flatMap((c) => c.items)].map((g) => [g.href, g]),
      ).values(),
    ].map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: g.title,
      url: `https://www.travelvus.com${g.href}`,
    })),
  },
};

export default function GuidesIndexPage() {
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HUB_JSON_LD) }} />
      <div className={styles.shell}>
        <HomeHeader />

        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroRule} />
            <span className={styles.heroEyebrow}>Travelvus · Editorial Guides</span>
            <h1 className={styles.heroTitle}>Travel Decisions, Compared</h1>
            <p className={styles.heroSub}>
              Independent guides to help travelers understand the real costs, conditions
              and trade-offs behind their bookings. Every guide answers one decision —
              with verified numbers and the sources to check them.
            </p>
            <div className={styles.heroMeta}>
              <span className={styles.heroCount}>{TOTAL_GUIDES} decision guides · Independent travel decision guides</span>
            </div>
          </div>
        </section>

        {/* ═══ FEATURED ═══ */}
        <div className={styles.body}>
          <div className={styles.sectionHead}>
            <div>
              <span className={styles.sectionKicker}>Featured</span>
              <h2 className={styles.sectionTitle}>Start with these four</h2>
            </div>
          </div>
          <div className={styles.featuredGrid}>
            {FEATURED.map((g) => (
              <Link key={g.href} href={g.href} className={styles.featuredCard}>
                <span className={styles.featuredTag}>{g.tag}</span>
                <h3 className={styles.featuredTitle}>
                  {g.title} <em>{g.em}</em>
                </h3>
                <p className={styles.featuredDesc}>{g.desc}</p>
                <span className={styles.featuredCta}>Read the guide</span>
              </Link>
            ))}
          </div>

          {/* ═══ CATEGORIES ═══ */}
          {CATEGORIES.map((cat) => (
            <section key={cat.id}>
              <div className={styles.sectionHead}>
                <div>
                  <span className={styles.sectionKicker}>{cat.kicker}</span>
                  <h2 className={styles.sectionTitle}>{cat.title}</h2>
                </div>
                <span className={styles.sectionCount}>{cat.items.length} guides</span>
              </div>
              <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--dv-body)", margin: "0 0 6px", maxWidth: 640 }}>
                {cat.intro}
              </p>
              <ul className={styles.categoryList}>
                {cat.items.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.categoryItem}>
                      <span>
                        <span className={styles.categoryItemTitle}>{item.title}</span>
                        <span className={styles.categoryItemDesc}>{item.desc}</span>
                      </span>
                      <span className={styles.categoryItemArrow} aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <Footer verifiedWith="TfL · National Rail · Public airport information" />
      </div>
    </div>
  );
}
