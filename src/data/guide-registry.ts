/**
 * Travelvus V2 — Guide Registry
 *
 * Central registry for all programmatic decision guides.
 * Each guide is a GuideConfig entry. The dynamic route
 * /guides/[slug] renders any registered guide via GuidePage.
 *
 * Phase 113.0.
 */

import type { GuideConfig } from "@/lib/guide-model";
import { buildHubCompareUrl } from "@/lib/hub-model";

/* ═══════════════════════════════════════════════════════════ */
/* PARIS GUIDES (12)                                            */
/* ═══════════════════════════════════════════════════════════ */

const PARIS_GUIDES: GuideConfig[] = [
  // Destination guides
  {
    slug: "best-airport-for-central-paris-guide", type: "destination", cityId: "paris", destinationId: "central-paris",
    title: "Best Airport for Central Paris — CDG or Orly?", description: "Which Paris airport is best for central Paris destinations like Châtelet, Louvre, and Le Marais?",
    headline: "Which airport is best for Central Paris?",
    intro: "Central Paris — Châtelet, the Louvre, Le Marais — is the heart of the city. Since Metro 14 reached Orly in 2024, Orly is the fastest airport to central Paris: a direct train to Châtelet in about 25 minutes for €14. CDG's direct RER B takes ~35–40 minutes and costs the same €14, but it is the better choice for the Right Bank and northern arrondissements. Orly wins the Châtelet core and the Left Bank; CDG wins the Right Bank.",
    airports: [
      { code: "ORY", name: "Orly", why: "Metro 14 runs direct from Orly to Châtelet in about 25 minutes — no shuttle, no interchange. The €14 airport ticket covers the journey. Taxis to Paris cost €36–45, cheaper than CDG. The best choice for the Châtelet core, the Left Bank and the 5e–7e.", transferNote: "Metro 14 direct, €14, ~25 min, 0 interchanges" },
      { code: "CDG", name: "Charles de Gaulle", why: "RER B direct to Châtelet–Les Halles in ~35–40 minutes, with step-free access at major stations. Same €14 airport ticket. Better for the Right Bank (8e, 9e, 18e), Roissybus to Opéra, and most long-haul routes.", transferNote: "RER B direct, €14, ~35–40 min, 0 interchanges" },
    ],
    transferFacts: [
      { label: "ORY → Châtelet", value: "€14", note: "Metro 14 direct, ~25 min" },
      { label: "CDG → Châtelet", value: "€14", note: "RER B direct, ~35–40 min" },
      { label: "ORY taxi to Paris", value: "€36–45", note: "Official flat fare — Left Bank €36, Right Bank €45" },
      { label: "CDG taxi to Paris", value: "€56–65", note: "Official flat fare — Right Bank €56, Left Bank €65" },
    ],
    takeaway: "Orly wins for the Châtelet core and the Left Bank: Metro 14 direct in ~25 min beats CDG's ~35–40 min RER B, and both cost €14. CDG wins for the Right Bank and northern Paris, where its RER B and Roissybus land closer — and it is the only option for most long-haul routes. Use the Decision Engine to confirm with your airfares.",
    ctaLabel: "Compare CDG vs ORY for Central Paris →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Montparnasse", href: "/guides/best-airport-for-montparnasse" },
      { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
      { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
    ], lastReviewed: "October 2026",
  },
  // La Défense destination
  {
    slug: "best-airport-for-la-defense-guide", type: "destination", cityId: "paris", destinationId: "la-defense",
    title: "Best Airport for La Défense — CDG or Orly?", description: "Which Paris airport is best for La Défense business district? Orly is now faster via Metro 14.",
    headline: "Which airport is best for La Défense?",
    intro: "La Défense is Europe's largest business district, west of central Paris. Neither airport has a direct connection, but Orly now wins: Metro 14 to Châtelet (~25 min) plus RER A to La Défense (~10 min) takes about 40 minutes with one change. CDG's RER B → RER A takes about 50 minutes. Both use the €14 airport ticket. CDG still has more business-class routes and lounges, so check your airline first.",
    airports: [
      { code: "ORY", name: "Orly", why: "Metro 14 to Châtelet (~25 min), then RER A to La Défense (~10 min) — about 40 minutes total with one change. The €14 airport ticket covers the rail journey. Faster than CDG since Metro 14 opened to Orly in 2024.", transferNote: "Metro 14 → RER A, €14, ~40 min, 1 change" },
      { code: "CDG", name: "Charles de Gaulle", why: "RER B to Châtelet then RER A to La Défense — about 50 minutes with one change. CDG has more business-class routes, lounges and long-haul connections, which may matter more than the 10-minute time gap.", transferNote: "RER B → RER A, €14, ~50 min, 1 change" },
    ],
    transferFacts: [
      { label: "ORY → La Défense", value: "€14", note: "Metro 14 → RER A, ~40 min" },
      { label: "CDG → La Défense", value: "€14", note: "RER B → RER A, ~50 min" },
      { label: "ORY time advantage", value: "10 min", note: "Orly is ~10 min faster to La Défense" },
      { label: "Transfer cost", value: "€14", note: "Same airport ticket from both airports" },
    ],
    takeaway: "Orly is the faster airport for La Défense — about 40 min via Metro 14 + RER A versus ~50 min from CDG — and both cost €14. CDG remains the better choice when your airline, long-haul connection or lounge access matters more than the transfer.",
    ctaLabel: "Compare CDG vs ORY for La Défense →", ctaHref: buildHubCompareUrl("paris", "la-defense"),
    relatedGuides: [
      { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris-guide" },
      { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
  // Gare du Nord destination
  {
    slug: "best-airport-for-gare-du-nord-guide", type: "destination", cityId: "paris", destinationId: "gare-du-nord",
    title: "Best Airport for Gare du Nord — CDG or Orly?", description: "Which Paris airport is best for Gare du Nord? CDG has a direct RER B in ~35–40 min.",
    headline: "Which airport is best for Gare du Nord?",
    intro: "Gare du Nord is Paris's busiest railway station — and CDG has a direct RER B connection in ~35–40 minutes. No changes, trains every 10–15 minutes, €14. Orly requires Metro 14 to Châtelet then RER B or D (~45 min, one change). For Eurostar, Thalys, or TGV connections, CDG remains the clear choice.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "RER B direct to Gare du Nord in ~35–40 minutes. No changes. €14 airport ticket. Ideal for connecting to Eurostar, Thalys, or TGV services — the fastest airport-to-station connection in Paris.", transferNote: "RER B direct, €14, ~35–40 min, 0 changes" },
      { code: "ORY", name: "Orly", why: "Metro 14 to Châtelet (~25 min), then RER B or D to Gare du Nord (~15 min) — about 45 minutes with one change, on the same €14 airport ticket. Direct and workable, but slower than CDG's one-seat ride.", transferNote: "Metro 14 → RER B/D, €14, ~45 min, 1 change" },
    ],
    transferFacts: [
      { label: "CDG → Gare du Nord", value: "€14", note: "RER B direct, ~35–40 min — fastest" },
      { label: "ORY → Gare du Nord", value: "€14", note: "Metro 14 + RER B/D, ~45 min" },
      { label: "CDG time advantage", value: "10 min", note: "CDG is ~10 min faster" },
      { label: "CDG changes", value: "0", note: "Direct — no changes needed" },
    ],
    takeaway: "CDG is the better airport for Gare du Nord — ~35–40 minutes direct on RER B versus ~45 with a change from Orly. Both cost €14, so only consider Orly if the airfare saving is significant.",
    ctaLabel: "Compare CDG vs ORY for Gare du Nord →", ctaHref: buildHubCompareUrl("paris", "gare-du-nord"),
    relatedGuides: [
      { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris-guide" },
      { label: "Best Airport for La Défense", href: "/guides/best-airport-for-la-defense-guide" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
  // Bercy destination
  {
    slug: "best-airport-for-bercy", type: "destination", cityId: "paris", destinationId: "bercy",
    title: "Best Airport for Bercy — CDG or Orly?", description: "Which Paris airport is best for Bercy, Gare de Lyon, and the 12e arrondissement? Metro 14 makes Orly the fastest.",
    headline: "Which airport is best for Bercy?",
    intro: "Bercy and Gare de Lyon are both on Metro 14 — and that makes Orly the winner. Metro 14 runs direct from Orly to Bercy in about 20 minutes, €14. CDG requires RER B to Châtelet then Metro 14, about 50 minutes with one change. For this corner of eastern Paris, Orly is now clearly faster.",
    airports: [
      { code: "ORY", name: "Orly", why: "Metro 14 direct to Bercy in about 20 minutes — no interchange. The €14 airport ticket covers the whole ride, and Gare de Lyon is one stop further on the same line.", transferNote: "Metro 14 direct, €14, ~20 min, 0 interchanges" },
      { code: "CDG", name: "Charles de Gaulle", why: "RER B to Châtelet then Metro 14 to Bercy — about 50 minutes with one change. Same €14 ticket, but the interchange and longer RER ride make it the slower option.", transferNote: "RER B → Metro 14, €14, ~50 min, 1 interchange" },
    ],
    transferFacts: [
      { label: "ORY → Bercy", value: "€14", note: "Metro 14 direct, ~20 min" },
      { label: "CDG → Bercy", value: "€14", note: "RER B → Metro 14, ~50 min" },
      { label: "ORY interchange count", value: "0", note: "Direct on Metro 14" },
      { label: "CDG interchange count", value: "1", note: "One change at Châtelet" },
    ],
    takeaway: "Orly is the better airport for Bercy and Gare de Lyon: Metro 14 direct in ~20 min versus ~50 min from CDG, both at €14. Only choose CDG if your flight or a long-haul connection requires it.",
    ctaLabel: "Compare CDG vs ORY for Bercy →", ctaHref: buildHubCompareUrl("paris", "bercy"),
    relatedGuides: [
      { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris-guide" },
      { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
  // Traveller guides
  {
    slug: "best-airport-for-business-paris", type: "traveller", cityId: "paris", travellerScenario: "business",
    title: "Best Paris Airport for Business Travellers", description: "Which Paris airport is best for business travel? Compare CDG vs Orly for speed, lounges, and La Défense access.",
    headline: "Which Paris airport is best for business travellers?",
    intro: "Business travel values speed, reliability, and proximity to business districts. For La Défense, Orly is now the faster option: Metro 14 + RER A takes about 40 minutes, versus about 50 from CDG. Both cost €14. CDG still has more business-class routes and lounges, so the right choice depends on your airline and where the meeting is.",
    airports: [
      { code: "ORY", name: "Orly", why: "Metro 14 direct to Châtelet (~25 min) then RER A to La Défense (~10 min) — about 40 minutes total. Also direct to Bercy (~20 min) on the same line. Compact terminal, cheaper taxis (€36–45).", transferNote: "Metro 14 → RER A, €14, ~40 min to La Défense" },
      { code: "CDG", name: "Charles de Gaulle", why: "Direct RER B to Gare du Nord (~35–40 min) and Châtelet (~35–40 min), with more business-class routes, long-haul connections and lounges. RER B → RER A to La Défense takes ~50 min.", transferNote: "RER B direct, €14, ~35–40 min to central Paris" },
    ],
    transferFacts: [
      { label: "ORY → La Défense", value: "€14", note: "Metro 14 → RER A, ~40 min" },
      { label: "CDG → La Défense", value: "€14", note: "RER B → RER A, ~50 min" },
      { label: "CDG → Gare du Nord", value: "€14", note: "RER B direct, ~35–40 min" },
      { label: "CDG lounges", value: "8+", note: "Multiple Star Alliance + SkyTeam lounges" },
    ],
    takeaway: "Orly wins on transfer speed to La Défense (~40 vs ~50 min) and Bercy (~20 min), at the same €14 fare. CDG wins on airline choice, long-haul connections and lounges. Match the airport to your flight and meeting location.",
    ctaLabel: "Compare CDG vs ORY for business →", ctaHref: buildHubCompareUrl("paris", "la-defense"),
    relatedGuides: [
      { label: "Best Airport for La Défense", href: "/guides/best-airport-for-la-defense" },
      { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
      { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-backpackers-paris", type: "traveller", cityId: "paris", travellerScenario: "lowest-cost",
    title: "Best Paris Airport for Backpackers", description: "Which Paris airport is cheapest for backpackers? Budget airlines, no checked bags, and cheapest transfers compared.",
    headline: "Which Paris airport is best for backpackers?",
    intro: "Backpackers travel light — no checked bags, no seat selection, just the cheapest door-to-door journey. Both airports now cost the same €14 by rail, so the airfare decides. Orly has more budget airline routes and a cheaper bus (Orlybus ~€11, approximate) to Montparnasse. Here's how they stack up.",
    airports: [
      { code: "ORY", name: "Orly", why: "More budget airline routes — Ryanair, easyJet and Vueling all operate from Orly. The €14 airport ticket covers Metro 14 to central Paris or Orlyval + RER B. For Montparnasse, Orlybus is about €11 (approximate) — the cheapest airport-to-Paris connection.", transferNote: "Metro 14 €14 to central; Orlybus ~€11 (approx) to Montparnasse" },
      { code: "CDG", name: "Charles de Gaulle", why: "CDG also has budget terminals (T3 for Ryanair, 2B/D for easyJet) and the same €14 RER B ticket. More airline competition can mean cheaper fares on some routes — and there is no shuttle premium either way now.", transferNote: "RER B €14 direct to central Paris" },
    ],
    transferFacts: [
      { label: "CDG rail to central", value: "€14", note: "RER B direct" },
      { label: "ORY rail to central", value: "€14", note: "Metro 14 direct" },
      { label: "Cheapest ORY transfer", value: "~€11", note: "Orlybus to Montparnasse (approximate)" },
      { label: "Cheapest CDG transfer", value: "€14", note: "RER B to central Paris" },
    ],
    takeaway: "There is no transfer-cost winner any more: both airports cost €14 by rail. Orly's Orlybus (~€11, approximate) is cheaper to Montparnasse, and Orly has more budget routes. Compare the airfares — that is where the real difference is.",
    ctaLabel: "Compare cheapest CDG vs ORY →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
      { label: "Best Airport for Montparnasse", href: "/guides/best-airport-for-montparnasse" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-luxury-paris", type: "traveller", cityId: "paris", travellerScenario: "business",
    title: "Best Paris Airport for Luxury Travellers", description: "Which Paris airport offers the best premium experience? Lounges, fast-track, private transfers, and first-class arrivals.",
    headline: "Which Paris airport is best for luxury travellers?",
    intro: "Luxury travel is about experience, not cost. CDG is the clear winner: more premium lounges, better fast-track security, more airline first-class and business-class routes, and easier private transfer access. Orly serves primarily economy and budget airlines, and its direct link to Paris is a metro (Line 14) — quick, but not a premium arrival.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "CDG has dedicated first-class and business-class terminals for Air France and partner airlines. Multiple premium lounges (Air France La Première lounge is among the world's best). Fast-track security and passport control. Direct RER or chauffeured transfer to central Paris. The only choice for luxury arrivals.", transferNote: "Premium lounge access, fast-track, chauffeur transfers available" },
      { code: "ORY", name: "Orly", why: "Orly has limited premium facilities. Air France operates some business-class routes from Orly, but the lounge and fast-track offering is significantly smaller than CDG. Its direct connection to Paris is Metro 14 — practical and fast, but not a luxury arrival experience.", transferNote: "Limited premium facilities; Metro 14 or taxi transfer" },
    ],
    transferFacts: [
      { label: "CDG premium lounges", value: "8+", note: "Including La Première (Air France First)" },
      { label: "ORY premium lounges", value: "2", note: "Limited, primarily Air France business" },
      { label: "CDG → central chauffeured", value: "~€80", note: "Private transfer, ~40 min" },
      { label: "ORY → central chauffeured", value: "~€60", note: "Private transfer, ~35 min" },
    ],
    takeaway: "CDG is the luxury traveller's Paris airport. Better lounges, better fast-track, better airline options. Orly only makes sense for private-jet arrivals at the dedicated business aviation terminal.",
    ctaLabel: "See CDG premium options →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Business", href: "/guides/best-airport-for-business-paris" },
      { label: "Best Airport for Families", href: "/guides/best-airport-for-families-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-early-departure-paris", type: "traveller", cityId: "paris", travellerScenario: "business",
    title: "Best Paris Airport for Early Departures", description: "Which Paris airport is best for early morning flights? RER and shuttle schedules, airport hotels, and transfer reliability.",
    headline: "Which Paris airport is best for early departures?",
    intro: "Early morning flights mean navigating Paris before the RER and Metro are running at full frequency. CDG has the earlier rail start — RER B from about 05:00 (approximate) — and more airport hotels. Orly's Metro 14 starts around 05:30 (approximate) and Orlyval around 06:00 (approximate), so very early flights need a taxi. For early departures, CDG is the safer choice.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "RER B starts at about 05:00 (approximate), reaching CDG before 06:00 — enough for most 7–8am flights. Multiple airport hotels (Ibis, Novotel, Hilton, Sheraton) for the night before. Taxi/ride-share available 24h as backup; official taxi €56 Right Bank / €65 Left Bank.", transferNote: "RER B from ~05:00 (approx), airport hotels from ~€80/night" },
      { code: "ORY", name: "Orly", why: "Metro 14 starts around 05:30 (approximate) and Orlyval around 06:00 (approximate) — a taxi is usually needed for flights before 07:30. Official taxis cost €45 Right Bank / €36 Left Bank, cheaper than CDG. Airport hotels exist but are limited.", transferNote: "Metro 14 from ~05:30, Orlyval from ~06:00 — taxi for very early flights" },
    ],
    transferFacts: [
      { label: "CDG first RER", value: "~05:00", note: "Approximate — from central Paris" },
      { label: "ORY first Metro 14", value: "~05:30", note: "Approximate — earlier than Orlyval" },
      { label: "CDG airport hotels", value: "5+", note: "Ibis to Hilton on-site or nearby" },
      { label: "ORY airport hotels", value: "3", note: "Limited options, mostly mid-range" },
    ],
    takeaway: "CDG is better for early departures: the RER B starts earlier (~05:00 approximate) and there are more airport hotels. Orly's Metro 14 starts around 05:30, so very early flights need a taxi — though Orly's flat fares are cheaper (€36–45).",
    ctaLabel: "Compare CDG vs ORY for early flights →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Business", href: "/guides/best-airport-for-business-paris" },
      { label: "Best Airport for Late Arrival", href: "/guides/best-airport-for-late-night-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-late-night-paris", type: "traveller", cityId: "paris", travellerScenario: "late-night",
    title: "Best Paris Airport for Late-Night Arrivals", description: "Which Paris airport is best for late-night arrivals? Transport after midnight, safety, and transfer options.",
    headline: "Which Paris airport is best for late-night arrivals?",
    intro: "Arriving late at night limits your transfer options. CDG has RER B until about 00:30 and Noctilien night buses after that. Orly has Metro 14 until roughly 00:40 (approximate) and Orlyval until about 23:35, then taxis — which are cheaper than CDG's. The winner depends on how late you land.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "RER B runs until about 00:30. After that, Noctilien night buses (N143, N140) serve CDG throughout the night. Official taxis: €56 Right Bank / €65 Left Bank.", transferNote: "RER B until ~00:30, Noctilien night buses, taxi €56–65" },
      { code: "ORY", name: "Orly", why: "Metro 14 runs until roughly 00:40 (approximate) — often later than the RER B — and Orlyval until about 23:35. After that, only taxis and limited night buses. Official taxis: €45 Right Bank / €36 Left Bank, cheaper than CDG.", transferNote: "Metro 14 until ~00:40 (approx), taxi €36–45" },
    ],
    transferFacts: [
      { label: "CDG last RER", value: "~00:30", note: "After that: Noctilien buses or taxi €56–65" },
      { label: "ORY last Metro 14", value: "~00:40", note: "Approximate — exact last train unverified" },
      { label: "CDG night bus", value: "24h", note: "Noctilien N143/N140, every 30 min" },
      { label: "ORY night bus", value: "Limited", note: "Fewer routes, less frequent than CDG" },
    ],
    takeaway: "It is close: CDG's RER B runs to ~00:30 with Noctilien night buses, while Orly's Metro 14 runs to roughly 00:40 (approximate) and Orly's taxis are cheaper (€36–45 vs €56–65). If you land after 01:00, Orly is the cheaper taxi; if your airline offers a choice, let the flight decide.",
    ctaLabel: "Compare CDG vs ORY late-night →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Early Departure", href: "/guides/best-airport-for-early-departure-paris" },
      { label: "Best Airport for Business", href: "/guides/best-airport-for-business-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-carry-on-paris", type: "traveller", cityId: "paris", travellerScenario: "lowest-cost",
    title: "Best Paris Airport for Carry-On Only", description: "Which Paris airport wins when you travel with carry-on only? No baggage fees changes the cost comparison.",
    headline: "Which Paris airport is best for carry-on only?",
    intro: "Travelling with carry-on only changes the airport equation. Without checked baggage fees, budget airlines become genuinely cheaper. Both airports now cost €14 by rail, so the airfare gap decides. Orly's budget-airline advantage becomes real when you're not paying €25–45 for a checked bag. Here's how they compare.",
    airports: [
      { code: "ORY", name: "Orly", why: "Budget airlines from Orly become much more competitive when you're not paying baggage fees. A €40 Ryanair fare + €14 rail ticket = €54 total. Orlybus to Montparnasse is about €11 (approximate), making southern Paris even cheaper.", transferNote: "Budget fares, €14 Metro 14 to central, Orlybus ~€11 (approx) to Montparnasse" },
      { code: "CDG", name: "Charles de Gaulle", why: "CDG also has budget terminals with competitive carry-on-only fares. The same €14 RER B ticket and direct train keep it competitive. More airline choice means more chances to find a deal.", transferNote: "RER B €14 direct, budget terminals T3 and 2B/D" },
    ],
    transferFacts: [
      { label: "ORY budget fare range", value: "€30–60", note: "Ryanair, easyJet, Vueling — carry-on included" },
      { label: "CDG budget fare range", value: "€40–80", note: "easyJet, Ryanair, Norwegian — carry-on included" },
      { label: "ORY + transfer total", value: "€44–74", note: "Airfare + €14 rail (Orlybus ~€11 approx)" },
      { label: "CDG + transfer total", value: "€54–94", note: "Airfare + €14 rail" },
    ],
    takeaway: "Orly often wins for carry-on-only travellers — more budget routes and a cheaper bus to Montparnasse (~€11 approximate). But both airports now charge the same €14 by rail, so compare the airfares: the Decision Engine shows real totals for your date.",
    ctaLabel: "Compare carry-on CDG vs ORY →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
      { label: "Best Airport for Backpackers", href: "/guides/best-airport-for-backpackers-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-first-time-paris", type: "traveller", cityId: "paris", travellerScenario: "family",
    title: "Best Paris Airport for First-Time Visitors", description: "Which Paris airport is easiest for first-time visitors? Direct trains, clear signage, and stress-free arrival compared.",
    headline: "Which Paris airport is best for first-time visitors?",
    intro: "First time in Paris? You want the simplest arrival possible — and both airports now have a direct train. Orly's Metro 14 runs straight to Châtelet in about 25 minutes; CDG's RER B takes ~35–40 minutes to the same station. Both cost €14. For most first trips, which stay central or on the Left Bank, Orly is the simpler introduction; CDG is better for the Right Bank and most long-haul routes.",
    airports: [
      { code: "ORY", name: "Orly", why: "Follow the 'Métro 14 — Paris' signs, buy the €14 airport ticket and board. About 25 minutes later you're at Châtelet in the heart of Paris — no shuttle, no interchange. Clear bilingual signage and one simple step make it the easiest arrival for central and Left Bank stays.", transferNote: "Metro 14 direct, €14, ~25 min, bilingual signage" },
      { code: "CDG", name: "Charles de Gaulle", why: "Follow the 'RER B — Paris by train' signs, buy the €14 ticket and board. ~35–40 minutes later you're at Châtelet or Gare du Nord — no changes. Bilingual signage throughout. The better first arrival for the Right Bank, and the only option for most long-haul flights.", transferNote: "Direct RER B, €14, ~35–40 min, bilingual signage" },
    ],
    transferFacts: [
      { label: "ORY transfer steps", value: "1", note: "Buy ticket → board Metro 14 → arrive Châtelet" },
      { label: "CDG transfer steps", value: "1", note: "Buy ticket → board RER B → arrive central Paris" },
      { label: "ORY → Châtelet", value: "€14", note: "Metro 14 direct, ~25 min" },
      { label: "CDG → Châtelet", value: "€14", note: "RER B direct, ~35–40 min" },
    ],
    takeaway: "Both airports now offer a one-train arrival at €14, so first-timers no longer need to avoid Orly. Orly's Metro 14 is the simplest option for central and Left Bank stays (~25 min); CDG's RER B is better for the Right Bank and is the usual choice for long-haul flights.",
    ctaLabel: "Compare CDG vs ORY for first-timers →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris-guide" },
      { label: "Best Airport for Families", href: "/guides/best-airport-for-families-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-airport-hotel-paris", type: "traveller", cityId: "paris", travellerScenario: "business",
    title: "Best Paris Airport for Airport Hotel Stays", description: "Which Paris airport has better airport hotels? Compare CDG vs Orly for overnight stays before early flights or after late arrivals.",
    headline: "Which Paris airport is best for airport hotel stays?",
    intro: "Staying at an airport hotel before an early flight or after a late arrival? CDG has significantly more options — from Ibis Budget to Sheraton and Hilton, many connected to terminals by walkway or the free CDGVal shuttle (04:00–01:00, with an overnight replacement bus). Orly has fewer hotels, mostly mid-range, and fewer are directly connected to terminals.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "Over 20 airport hotels across all price points. The Sheraton is inside Terminal 2. Ibis, Novotel, Hilton, CitizenM, and Pullman are connected by the free CDGVal shuttle, which runs 04:00–01:00 with an overnight replacement bus. Options from €60 to €300+.", transferNote: "20+ hotels, many connected by the free CDGVal (04:00–01:00 + night bus)" },
      { code: "ORY", name: "Orly", why: "Fewer than 10 airport hotels, mostly mid-range (Ibis, Novotel, Mercure). Only a few are directly connected to terminals. Options from €70 to €180. Adequate but limited compared to CDG.", transferNote: "<10 hotels, fewer terminal-connected options" },
    ],
    transferFacts: [
      { label: "CDG airport hotels", value: "20+", note: "€60–300+, Sheraton inside T2" },
      { label: "ORY airport hotels", value: "<10", note: "€70–180, mostly mid-range" },
      { label: "CDG hotel shuttle", value: "CDGVal", note: "Free, 04:00–01:00 + overnight replacement bus" },
      { label: "ORY hotel shuttle", value: "Limited", note: "Fewer hotels, less consistent shuttles" },
    ],
    takeaway: "CDG is better for airport hotel stays — more choice, better price range, and the free CDGVal shuttle connects everything. If you need an airport hotel, CDG is the clear winner.",
    ctaLabel: "Compare CDG vs ORY →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Early Departure", href: "/guides/best-airport-for-early-departure-paris" },
      { label: "Best Airport for Late Arrival", href: "/guides/best-airport-for-late-night-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "October 2026",
  },
];

/* ═══════════════════════════════════════════════════════════ */
/* LONDON GUIDES (5)                                             */
/* ═══════════════════════════════════════════════════════════ */

const LONDON_GUIDES: GuideConfig[] = [
  {
    slug: "best-airport-for-paddington", type: "destination", cityId: "london", destinationId: "paddington",
    title: "Best Airport for Paddington — Heathrow or Stansted?", description: "Which London airport is best for Paddington? Compare Heathrow vs Stansted transfer costs, times, and real trip cost.",
    headline: "Which airport is best for Paddington?",
    intro: "Paddington is in west London — and Heathrow has a clear advantage. The Heathrow Express reaches Paddington in 15 minutes direct. The Elizabeth Line does it in about 35 minutes for less. Stansted requires a 75-minute cross-London journey with two changes. For Paddington, Heathrow is the overwhelming winner.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "Heathrow Express direct to Paddington in 15 minutes — the fastest airport-to-London connection of any airport. Elizabeth Line takes about 35 minutes for half the price. Both arrive directly at Paddington station with step-free access.", transferNote: "Heathrow Express €30/15min (£26) or Elizabeth Line €18/~35min, direct" },
      { code: "STN", name: "Stansted", why: "Stansted Express to Liverpool Street, then Circle/Hammersmith Line to Paddington — about 75 minutes with two changes. Much longer and more complex. Only viable if the airfare is dramatically cheaper.", transferNote: "Stansted Express + Tube, ~75 min, 2 interchanges" },
    ],
    transferFacts: [
      { label: "LHR → Paddington (Express)", value: "€30", note: "Heathrow Express direct, 15 min (≈£26)" },
      { label: "LHR → Paddington (Elizabeth)", value: "€18", note: "Elizabeth Line direct, ~35 min" },
      { label: "STN → Paddington", value: "€35", note: "Stansted Express + Tube, 75 min" },
      { label: "LHR time advantage", value: "60 min", note: "Heathrow is 60 min faster to Paddington" },
    ],
    takeaway: "Heathrow is the clear choice for Paddington. 15–35 minutes direct vs 75 minutes with changes. Unless the Stansted airfare is dramatically cheaper, Heathrow wins every time.",
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "paddington"),
    relatedGuides: [
      { label: "Best Airport for Westminster", href: "/guides/best-airport-for-westminster" },
      { label: "Best Airport for Canary Wharf", href: "/guides/best-airport-for-canary-wharf" },
      { label: "Heathrow vs Gatwick", href: "/guides/heathrow-vs-gatwick" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-westminster", type: "destination", cityId: "london", destinationId: "westminster",
    title: "Best Airport for Westminster — Heathrow or Stansted?", description: "Which London airport is best for Westminster? Compare Heathrow vs Stansted for the heart of central London.",
    headline: "Which airport is best for Westminster?",
    intro: "Westminster is the tourist heart of London — Big Ben, the Abbey, the London Eye. Heathrow connects via Piccadilly Line or Elizabeth Line to Westminster in 50 minutes. Stansted takes 70+ minutes with changes. For Westminster, Heathrow saves you 20+ minutes and a more straightforward journey.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "Piccadilly Line or Elizabeth Line to central London, then District/Circle to Westminster. About 50 minutes. Well-signed, step-free at Westminster station. Familiar Tube journey that works reliably.", transferNote: "Piccadilly/Elizabeth Line + District, €18, ~50 min" },
      { code: "STN", name: "Stansted", why: "Stansted Express to Tottenham Hale, Victoria Line to Green Park, then District/Circle to Westminster. About 70 minutes. Two changes. Works fine but takes noticeably longer.", transferNote: "Stansted Express + 2 Tube changes, €32, ~70 min" },
    ],
    transferFacts: [
      { label: "LHR → Westminster", value: "€18", note: "Piccadilly/Elizabeth + District, ~50 min" },
      { label: "STN → Westminster", value: "€32", note: "Stansted Express + 2 Tubes, ~70 min" },
      { label: "LHR time to Westminster", value: "~50 min", note: "Via Piccadilly Line" },
      { label: "STN time to Westminster", value: "~70 min", note: "20 min slower than Heathrow" },
    ],
    takeaway: "Heathrow is better for Westminster — faster, simpler, and cheaper on transfer. Stansted only makes sense with a significantly lower airfare. Use the Decision Engine to check your specific trip.",
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "westminster"),
    relatedGuides: [
      { label: "Best Airport for Paddington", href: "/guides/best-airport-for-paddington" },
      { label: "Best Airport for Canary Wharf", href: "/guides/best-airport-for-canary-wharf" },
      { label: "Cheapest London Airport", href: "/guides/cheapest-london-airport" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-canary-wharf", type: "destination", cityId: "london", destinationId: "canary-wharf",
    title: "Best Airport for Canary Wharf — Heathrow or Stansted?", description: "Which London airport is best for Canary Wharf? East London's business district has different airport dynamics.",
    headline: "Which airport is best for Canary Wharf?",
    intro: "Canary Wharf is in east London — and here, Stansted becomes competitive. Heathrow requires a long cross-London journey (Elizabeth Line to Canary Wharf, ~45 min). Stansted Express to Liverpool Street then DLR or Tube east reaches Canary Wharf in ~85 min. For east London, the Heathrow advantage narrows considerably.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "Elizabeth Line direct to Canary Wharf in ~45 minutes. No changes, modern trains, step-free access. The Elizabeth Line has transformed this connection — it's now competitive even for east London.", transferNote: "Elizabeth Line direct, €22, ~45 min, 0 interchanges" },
      { code: "STN", name: "Stansted", why: "Stansted Express to Liverpool Street, then DLR or Jubilee Line to Canary Wharf. About 85 minutes with one change. Stansted is geographically closer to east London, but the indirect rail connection eats into that advantage.", transferNote: "Stansted Express + DLR/Jubilee, €35, ~85 min, 1 interchange" },
    ],
    transferFacts: [
      { label: "LHR → Canary Wharf", value: "€22", note: "Elizabeth Line direct, ~45 min" },
      { label: "STN → Canary Wharf", value: "€35", note: "Stansted Express + DLR, ~85 min" },
      { label: "LHR interchange count", value: "0", note: "Elizabeth Line direct — no changes" },
      { label: "STN interchange count", value: "1", note: "Change at Liverpool Street" },
    ],
    takeaway: "Heathrow still wins for Canary Wharf — the Elizabeth Line's direct connection (45 min) beats Stansted's longer journey (85 min). But the gap is smaller than for west London. Use the Decision Engine to check if a cheaper Stansted fare changes the picture.",
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "canary-wharf"),
    relatedGuides: [
      { label: "Best Airport for Westminster", href: "/guides/best-airport-for-westminster" },
      { label: "Best Airport for Paddington", href: "/guides/best-airport-for-paddington" },
      { label: "Fastest London Airport", href: "/guides/fastest-london-airport" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-families-london", type: "traveller", cityId: "london", travellerScenario: "family",
    title: "Best London Airport for Families", description: "Which London airport is best for families with children? Direct trains, step-free access, and baggage compared.",
    headline: "Which London airport is best for families?",
    intro: "Travelling with children to London? Direct trains and step-free access matter more than saving a few euros. Heathrow's Elizabeth Line and Piccadilly Line offer step-free access to central London. Stansted requires a train change and has limited step-free options. For families, Heathrow is the easier, less stressful choice.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "Elizabeth Line and Piccadilly Line both have step-free access from Heathrow to central London. No changes needed. Trains have space for luggage and pushchairs. Terminals have family facilities including baby-changing and play areas.", transferNote: "Elizabeth/Piccadilly Line direct, step-free, family facilities" },
      { code: "STN", name: "Stansted", why: "Stansted Express to Liverpool Street requires a change for most destinations. The Express is step-free but connecting Tube stations may not be. Stansted is fine for families with older children but adds friction for those with pushchairs and multiple bags.", transferNote: "Stansted Express + change required, varying step-free access" },
    ],
    transferFacts: [
      { label: "LHR → central London", value: "Direct", note: "No changes, step-free, luggage space" },
      { label: "STN → central London", value: "1+ changes", note: "Change at Liverpool St, variable step-free" },
      { label: "LHR family facilities", value: "Yes", note: "Play areas, baby-changing, family lanes" },
      { label: "LHR baggage inclusion", value: "Often", note: "Full-service airlines often include bags" },
    ],
    takeaway: "Heathrow is the better airport for families. Direct trains, step-free access, better terminal facilities, and included baggage on many airlines make the journey significantly easier. Use the Decision Engine to compare total costs including all family baggage.",
    ctaLabel: "Compare with family baggage →", ctaHref: buildHubCompareUrl("london", "westminster"),
    relatedGuides: [
      { label: "Cheapest London Airport", href: "/guides/cheapest-london-airport" },
      { label: "Best for Westminster", href: "/guides/best-airport-for-westminster" },
      { label: "Heathrow vs Gatwick", href: "/guides/heathrow-vs-gatwick" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-cheapest-london", type: "traveller", cityId: "london", travellerScenario: "lowest-cost",
    title: "Cheapest London Airport — Heathrow or Stansted?", description: "Which London airport is actually cheapest? Real trip cost comparison including baggage and transfers.",
    headline: "Which London airport is actually cheapest?",
    intro: "Stansted's €58 headline ticket looks much cheaper than Heathrow's €126. But the ticket is not the trip. Add a checked bag (€45), the Stansted Express (~€26) and a Tube connection, and the gap narrows sharply — in our Heathrow vs Stansted worked comparison, the budget journey can end up the dearer one. Whether Stansted is really cheaper depends on your bag, your fare and your destination.",
    airports: [
      { code: "STN", name: "Stansted", why: "Lower headline fares (€58+) but higher transfer costs (~€26–35) and baggage fees (€45). With a checked bag and a walk-up Stansted Express fare, the real cost can exceed a full-service Heathrow journey.", transferNote: "Ticket €58+ + bag €45 + transfer €26–35 — the gap narrows fast" },
      { code: "LHR", name: "Heathrow", why: "Higher headline fares (€126+) but lower transfer costs (€18–30) and baggage often included. On a like-for-like fare the real cost gap is smaller than the ticket prices suggest — and can reverse.", transferNote: "Ticket €126+ + bag often included + transfer €18–30 — closer than it looks" },
    ],
    transferFacts: [
      { label: "Headline fare gap", value: "~€68", note: "Stansted ticket vs Heathrow ticket — before bags and transfers" },
      { label: "STN checked bag", value: "€45", note: "Budget-airline bag fee" },
      { label: "STN transfer", value: "~€26–35", note: "Stansted Express ~£22 plus Tube, or coach plus Tube" },
      { label: "LHR transfer", value: "~€18–30", note: "Elizabeth Line ~£15 or Heathrow Express £26" },
    ],
    takeaway: "Stansted usually has the cheaper headline fare — but that is not the whole trip. With a checked bag and a Stansted Express ticket, the gap narrows sharply and can disappear. Compare the full journey, including bags and transfers, before you book. See our Heathrow vs Stansted comparison for the worked model.",
    ctaLabel: "Compare real cost LHR vs STN →", ctaHref: buildHubCompareUrl("london", "westminster"),
    relatedGuides: [
      { label: "Best Airport for Families", href: "/guides/best-airport-for-families-london" },
      { label: "Fastest London Airport", href: "/guides/fastest-london-airport" },
      { label: "Heathrow vs Stansted", href: "/compare/heathrow-vs-stansted" },
    ], lastReviewed: "October 2026",
  },
  // King's Cross destination
  {
    slug: "best-airport-for-kings-cross", type: "destination", cityId: "london", destinationId: "kings-cross",
    title: "Best Airport for King's Cross — Luton or Heathrow?", description: "Which London airport is best for King's Cross and St Pancras? Compare Luton vs Heathrow for Eurostar connections.",
    headline: "Which airport is best for King's Cross?",
    intro: "King's Cross and St Pancras are major rail hubs — Eurostar, Thameslink, and national rail services. Luton's DART rail link plus Thameslink runs direct to St Pancras in ~40 minutes, and St Pancras is next door to King's Cross. Heathrow's Piccadilly Line takes ~55 minutes. Stansted Express reaches Liverpool Street in ~50 minutes and still needs a Tube connection — around 60 minutes in total — so it is not the fastest option here.",
    airports: [
      { code: "LTN", name: "Luton", why: "DART automated people mover to Luton Airport Parkway (5 min, £4.90), then Thameslink direct to St Pancras International (~30 min). Total ~40 minutes to the King's Cross/St Pancras complex with one easy change at Parkway — the fastest airport connection to this part of London.", transferNote: "DART + Thameslink to St Pancras, €18, ~40 min, 1 change" },
      { code: "LHR", name: "Heathrow", why: "Piccadilly Line direct to King's Cross takes ~55 minutes. No changes, but about 15 minutes slower than Luton. Elizabeth Line to Farringdon then Thameslink/Circle to King's Cross is slightly faster (~50 min) but requires a change.", transferNote: "Piccadilly Line direct, €18, ~55 min, 0 changes" },
    ],
    transferFacts: [
      { label: "LTN → King's Cross", value: "€18", note: "DART + Thameslink to St Pancras, ~40 min" },
      { label: "LHR → King's Cross", value: "€18", note: "Piccadilly Line direct, ~55 min" },
      { label: "LTN time advantage", value: "15 min", note: "Luton is faster to King's Cross/St Pancras" },
      { label: "Transfer cost", value: "Tie", note: "Both transfers cost about €18 (£15)" },
    ],
    takeaway: "Luton is the fastest airport for King's Cross (~40 min vs ~55 min from Heathrow) and costs about the same on transfer (€18). If your fare lands at Luton, take it. Heathrow remains the better option for west and central London, and Stansted works for the Liverpool Street corridor.",
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "kings-cross"),
    relatedGuides: [
      { label: "Best Airport for Paddington", href: "/guides/best-airport-for-paddington" },
      { label: "Best Airport for Westminster", href: "/guides/best-airport-for-westminster" },
      { label: "Fastest London Airport", href: "/guides/fastest-london-airport" },
    ], lastReviewed: "October 2026",
  },
  // Traveller guides — 7 patterns
  {
    slug: "best-airport-for-business-london", type: "traveller", cityId: "london", travellerScenario: "business",
    title: "Best London Airport for Business Travellers", description: "Which London airport is best for business travel? Speed, lounges, and City/Canary Wharf access compared.",
    headline: "Which London airport is best for business travellers?",
    intro: "Business travellers value speed, reliability, and proximity to business districts — so the answer depends on where you work. London City wins for Canary Wharf and the City: DLR to Bank in ~25 minutes and roughly 20 minutes from landing to train. Heathrow wins for west and central London and for long-haul: Heathrow Express to Paddington in 15 minutes and the Elizabeth Line to Canary Wharf in ~45. Stansted is viable for the Liverpool Street corridor, with the Stansted Express direct in ~50 minutes.",
    airports: [
      { code: "LCY", name: "London City", why: "DLR to Bank in ~25 minutes and Canary Wharf in ~20. The tiny terminal means roughly 20 minutes from landing to train. Best for the City and Docklands — but no long-haul routes and limited lounges.", transferNote: "DLR to Bank, €4, ~25 min, 0 changes" },
      { code: "LHR", name: "Heathrow", why: "Elizabeth Line direct to Canary Wharf (~45 min) and Heathrow Express to Paddington (15 min). 10+ business-class lounges, fast-track security, and the widest long-haul network. The clear choice for west and central London.", transferNote: "Heathrow Express/Elizabeth Line, multiple lounges, fast-track" },
      { code: "STN", name: "Stansted", why: "Stansted Express direct to Liverpool Street (~50 min) — good for the City and Shoreditch. But limited lounges and no fast-track. Only viable if the meeting is near Liverpool Street.", transferNote: "Stansted Express to Liverpool St, limited business facilities" },
    ],
    transferFacts: [
      { label: "LCY → Bank (DLR)", value: "€4", note: "DLR direct, ~25 min — best for Canary Wharf/City" },
      { label: "LHR → Paddington (Express)", value: "€30", note: "Heathrow Express direct, 15 min (≈£26)" },
      { label: "LHR → Canary Wharf", value: "€22", note: "Elizabeth Line direct, ~45 min" },
      { label: "STN → Liverpool St", value: "€26", note: "Stansted Express direct, ~50 min (≈£22)" },
    ],
    takeaway: "There is no single business airport. London City wins for the City and Canary Wharf (DLR ~25 min). Heathrow wins for west and central London and long-haul (Express 15 min, most lounges). Stansted is viable mainly for the Liverpool Street corridor (~50 min direct).",
    ctaLabel: "Compare business access →", ctaHref: buildHubCompareUrl("london", "canary-wharf"),
    relatedGuides: [
      { label: "Best Airport for Canary Wharf", href: "/guides/best-airport-for-canary-wharf" },
      { label: "Fastest London Airport", href: "/guides/fastest-london-airport" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-fastest-london", type: "traveller", cityId: "london", travellerScenario: "fastest-arrival",
    title: "Fastest London Airport — Heathrow vs Stansted", description: "Which London airport gets you to central London fastest? Door-to-door times compared.",
    headline: "Which London airport is fastest to central London?",
    intro: "Heathrow wins on speed for most destinations: 15 min to Paddington (Express), ~35 min (Elizabeth Line), or 50–60 min (Piccadilly). But London City is faster for the City and Canary Wharf — DLR to Bank in ~25 minutes. Luton reaches St Pancras in ~40 minutes via DART + Thameslink, and Stansted's fastest connection is ~50 min to Liverpool Street.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "Heathrow Express: 15 min to Paddington. Elizabeth Line: ~35 min to Paddington. The fastest airport-to-Paddington connection in the UK. Piccadilly Line takes longer (50 min) but runs 24h on weekends. Best for west and central London.", transferNote: "15–50 min depending on mode — fastest to west London" },
      { code: "LCY", name: "London City", why: "DLR to Bank in ~25 minutes and Canary Wharf in ~20. The fastest airport for the City and Docklands, and about 20 minutes from landing to train. Limited to short-haul European routes.", transferNote: "DLR to Bank, ~25 min — fastest for the City" },
      { code: "STN", name: "Stansted", why: "Stansted Express takes ~50 min to Liverpool Street. From there, add Tube time to your final destination. It is competitive for the City/Liverpool Street corridor; for King's Cross or anywhere west, Luton or Heathrow is faster.", transferNote: "~50 min to Liverpool St, then Tube — total varies by destination" },
    ],
    transferFacts: [
      { label: "LHR → Paddington (Express)", value: "15 min", note: "Fastest airport connection in the UK" },
      { label: "LCY → Bank (DLR)", value: "~25 min", note: "Fastest for Canary Wharf and the City" },
      { label: "LTN → St Pancras", value: "~40 min", note: "DART rail link + Thameslink" },
      { label: "STN → Liverpool St", value: "~50 min", note: "Stansted Express direct" },
    ],
    takeaway: "Heathrow is fastest for west and central London, London City for the City and Canary Wharf, and Luton for King's Cross/St Pancras (~40 min). Stansted is competitive only for Liverpool Street (~50 min). The 'fastest airport' depends on your destination.",
    ctaLabel: "Compare door-to-door times →", ctaHref: buildHubCompareUrl("london", "westminster"),
    relatedGuides: [
      { label: "Best Airport for Paddington", href: "/guides/best-airport-for-paddington" },
      { label: "Best Airport for King's Cross", href: "/guides/best-airport-for-kings-cross" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-backpackers-london", type: "traveller", cityId: "london", travellerScenario: "lowest-cost",
    title: "Best London Airport for Backpackers", description: "Which London airport is cheapest for backpackers? Budget airlines, no checked bags, cheapest transfers.",
    headline: "Which London airport is best for backpackers?",
    intro: "Backpackers travel light and cheap. Stansted's budget airlines (Ryanair, easyJet) offer lower base fares. With carry-on only, you avoid the €45 baggage fee. The cheaper ticket makes Stansted genuinely cheaper for backpackers — even with the longer transfer.",
    airports: [
      { code: "STN", name: "Stansted", why: "Ryanair and easyJet hub. Fares from €20–50 if you book ahead. No bag fee with carry-on only. Stansted Express to Liverpool Street then hostel-bound. The cheapest door-to-door option for budget travellers.", transferNote: "Budget fares €20–50, carry-on included, transfer €26–35" },
      { code: "LHR", name: "Heathrow", why: "More expensive base fares on full-service airlines. But cheaper transfer (€18 vs €26–35). If you find a cheap Heathrow fare, the lower transfer cost makes it competitive.", transferNote: "Higher fares but cheaper transfer — check both" },
    ],
    transferFacts: [
      { label: "STN budget fare", value: "€20–50", note: "Ryanair, easyJet — book ahead" },
      { label: "LHR budget fare", value: "€60–100", note: "Fewer budget options from Heathrow" },
      { label: "STN total (carry-on)", value: "€46–85", note: "Fare + €26 transfer" },
      { label: "LHR total (carry-on)", value: "€78–118", note: "Fare + €18 transfer" },
    ],
    takeaway: "Stansted is usually cheaper for backpackers — especially with carry-on only. Budget airlines + no bag fees = genuine savings. But always check both on the Decision Engine.",
    ctaLabel: "Compare cheapest STN vs LHR →", ctaHref: buildHubCompareUrl("london", "westminster"),
    relatedGuides: [
      { label: "Cheapest London Airport", href: "/guides/best-airport-for-cheapest-london" },
      { label: "Best Airport for King's Cross", href: "/guides/best-airport-for-kings-cross" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-luxury-london", type: "traveller", cityId: "london", travellerScenario: "business",
    title: "Best London Airport for Luxury Travellers", description: "Which London airport offers the best premium experience? Lounges, fast-track, and chauffeur transfers compared.",
    headline: "Which London airport is best for luxury travellers?",
    intro: "Heathrow is the luxury traveller's London airport. T5 has the Concorde Room (BA First), multiple premium lounges, personal shopping, and chauffeur transfers. The Sofitel is inside T5. Stansted has one Escape Lounge and no premium airline facilities.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "T5 Concorde Room for BA First. Multiple Star Alliance and SkyTeam lounges. Personal shopping, champagne bars, spa. Sofitel inside T5. Heathrow Express or chauffeur to central London. The only choice for luxury arrivals.", transferNote: "Premium lounges, personal shopping, chauffeur available" },
      { code: "STN", name: "Stansted", why: "One Escape Lounge (paid access, €30). No airline-first or business-class lounges. No fast-track. No premium transfer options. Not a luxury airport by any measure.", transferNote: "Limited to one paid-access lounge" },
    ],
    transferFacts: [
      { label: "LHR premium lounges", value: "10+", note: "Including Concorde Room (BA First)" },
      { label: "STN premium lounges", value: "1", note: "Escape Lounge only (paid access)" },
      { label: "LHR → central chauffeur", value: "~€80", note: "Private transfer, ~40 min" },
      { label: "STN → central chauffeur", value: "~€100", note: "Private transfer, ~60 min" },
    ],
    takeaway: "Heathrow is the only choice for luxury travellers. Premium lounges, personal shopping, chauffeur transfers, and the Sofitel. Stansted doesn't compete in this category.",
    ctaLabel: "See Heathrow premium options →", ctaHref: buildHubCompareUrl("london", "paddington"),
    relatedGuides: [
      { label: "Best Airport for Business", href: "/guides/best-airport-for-business-london" },
      { label: "Fastest London Airport", href: "/guides/best-airport-for-fastest-london" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-early-london", type: "traveller", cityId: "london", travellerScenario: "business",
    title: "Best London Airport for Early Departures", description: "Which London airport is best for early flights? First trains, airport hotels, and reliable transfers.",
    headline: "Which London airport is best for early departures?",
    intro: "Heathrow has more early-morning options: first Heathrow Express at 05:10, first Piccadilly Line at 05:00, 15+ airport hotels. Stansted's first Express is at 05:30 — adequate but later. For flights before 07:00, Heathrow is the safer choice.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "First Heathrow Express at 05:10 (arrives 05:25). First Piccadilly Line at ~05:00 from central London. 15+ airport hotels including Aerotel airside at T3. 24h taxi available.", transferNote: "First train 05:10, 15+ hotels, 24h taxi" },
      { code: "STN", name: "Stansted", why: "First Stansted Express at 05:30 (arrives 06:17). Limited airport hotels (~5). Taxi from central London is expensive (€100+). Adequate but fewer options than Heathrow.", transferNote: "First train 05:30, ~5 hotels, taxi €100+" },
    ],
    transferFacts: [
      { label: "LHR first train", value: "05:10", note: "Heathrow Express, arrives 05:25" },
      { label: "STN first train", value: "05:30", note: "Stansted Express, arrives 06:17" },
      { label: "LHR airport hotels", value: "15+", note: "Including Aerotel T3 (airside)" },
      { label: "STN airport hotels", value: "~5", note: "Radisson Blu connected to terminal" },
    ],
    takeaway: "Heathrow is better for early departures — earlier trains, more hotels, better backup options. Stansted works for flights after 07:30.",
    ctaLabel: "Compare LHR vs STN early morning →", ctaHref: buildHubCompareUrl("london", "westminster"),
    relatedGuides: [
      { label: "Best Airport for Business", href: "/guides/best-airport-for-business-london" },
      { label: "Sleeping at Heathrow", href: "/knowledge/sleeping-at-heathrow" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-late-london", type: "traveller", cityId: "london", travellerScenario: "late-night",
    title: "Best London Airport for Late Arrivals", description: "Which London airport is best for late-night arrivals? Transport after midnight and safety compared.",
    headline: "Which London airport is best for late-night arrivals?",
    intro: "Heathrow has better late-night options. Piccadilly Line runs 24h on Friday and Saturday nights. Night buses serve Heathrow. Taxis are available 24h. Stansted's last Express is at 00:30 — after that, you're taking an expensive taxi or waiting until 05:30.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "Piccadilly Line 24h (Fri–Sat). Night Tube on Central and Victoria lines for connections. Night buses N9 to central London. Taxis available 24h. Better-lit, busier, safer-feeling at night.", transferNote: "24h Tube (Fri–Sat), night buses, 24h taxis" },
      { code: "STN", name: "Stansted", why: "Last Stansted Express at 00:30. After that: only taxi or wait until 05:30. National Express coaches run through the night but take 90+ minutes. Limited facilities. Quiet and isolated-feeling after midnight.", transferNote: "Last train 00:30, then taxi or 90-min coach" },
    ],
    transferFacts: [
      { label: "LHR last Tube", value: "00:30 (24h Fri–Sat)", note: "Piccadilly Line, Night Tube weekends" },
      { label: "STN last train", value: "00:30", note: "Then nothing until 05:30" },
      { label: "LHR night bus", value: "N9", note: "To central London, hourly" },
      { label: "STN night coach", value: "National Express", note: "90+ min to central London" },
    ],
    takeaway: "Heathrow is far better for late-night arrivals — 24h Tube on weekends, better night buses, safer environment. Stansted is risky after 00:30.",
    ctaLabel: "Compare LHR vs STN late-night →", ctaHref: buildHubCompareUrl("london", "westminster"),
    relatedGuides: [
      { label: "Best Airport for Early Departure", href: "/guides/best-airport-for-early-london" },
      { label: "Sleeping at Stansted", href: "/knowledge/sleeping-at-stansted" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-carry-on-london", type: "traveller", cityId: "london", travellerScenario: "lowest-cost",
    title: "Best London Airport for Carry-On Only", description: "Which London airport wins with carry-on only? No baggage fees change the cost comparison.",
    headline: "Which London airport is best for carry-on only?",
    intro: "Without checked baggage fees, Stansted's budget airlines become genuinely cheaper. No €45 bag fee means the ticket price advantage translates directly to real savings. But Heathrow's cheaper transfer (€18 vs €26–35) narrows the gap. Here's how they compare.",
    airports: [
      { code: "STN", name: "Stansted", why: "Ryanair/easyJet fares from €20–50 with carry-on included. No €45 bag fee to erode savings. The cheapest door-to-door option — even with the longer transfer.", transferNote: "Fare €20–50 + transfer €26–35, no bag fee" },
      { code: "LHR", name: "Heathrow", why: "Higher base fares but cheaper transfer. With carry-on only and a competitive fare, Heathrow can be close. Check both on the Decision Engine.", transferNote: "Higher fares, cheaper transfer — check both" },
    ],
    transferFacts: [
      { label: "STN carry-on total", value: "€46–85", note: "Fare + €26 transfer, no bag fee" },
      { label: "LHR carry-on total", value: "€78–118", note: "Fare + €18 transfer, no bag fee" },
      { label: "STN saving vs LHR", value: "€30+", note: "With carry-on only, STN is significantly cheaper" },
      { label: "STN time cost", value: "+20 min", note: "Longer transfer than Heathrow" },
    ],
    takeaway: "Stansted is significantly cheaper for carry-on-only travellers. The budget airline advantage is real when you're not paying baggage fees. Use the Decision Engine to confirm for your dates.",
    ctaLabel: "Compare carry-on STN vs LHR →", ctaHref: buildHubCompareUrl("london", "westminster"),
    relatedGuides: [
      { label: "Cheapest London Airport", href: "/guides/best-airport-for-cheapest-london" },
      { label: "Best Airport for Backpackers", href: "/guides/best-airport-for-backpackers-london" },
    ], lastReviewed: "October 2026",
  },
];

/* ═══════════════════════════════════════════════════════════ */
/* NEW YORK GUIDES (5)                                           */
/* ═══════════════════════════════════════════════════════════ */

const NY_GUIDES: GuideConfig[] = [
  {
    slug: "best-airport-for-midtown", type: "destination", cityId: "new-york", destinationId: "midtown",
    title: "Best Airport for Midtown Manhattan — JFK or Newark?", description: "Which New York airport is best for Midtown? Compare JFK vs Newark transfer costs, times, and real trip cost.",
    headline: "Which airport is best for Midtown Manhattan?",
    intro: "Midtown Manhattan is New York's core — Times Square, Grand Central, Rockefeller Center. Newark reaches Penn Station in ~40–45 minutes via NJ Transit; JFK's AirTrain + LIRR reaches Grand Central in ~35–40 minutes. Both land in Midtown in about 40 minutes — Newark is a single-seat ride, while JFK has more airline choice and can be cheaper. Here's the breakdown.",
    airports: [
      { code: "EWR", name: "Newark", why: "NJ Transit from Newark Airport to Penn Station takes about 30 minutes on the train — ~40–45 minutes door to door — and ends in the heart of Midtown. A single-seat ride with no change at Jamaica. United Airlines hub means lots of routes.", transferNote: "AirTrain + NJ Transit, €16, ~40–45 min to Penn Station" },
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica, then LIRR to Grand Central — about 35–40 minutes. More airline choice than Newark, often cheaper international fares. The LIRR Grand Central connection has improved this route significantly.", transferNote: "AirTrain + LIRR to Grand Central, €15, ~35–40 min" },
    ],
    transferFacts: [
      { label: "EWR → Midtown", value: "€16", note: "AirTrain + NJ Transit, ~40–45 min (fare includes AirTrain fee)" },
      { label: "JFK → Midtown", value: "€15", note: "AirTrain + LIRR to Grand Central, ~35–40 min" },
      { label: "EWR routing", value: "1 seat", note: "NJ Transit direct to Penn Station — no change at Jamaica" },
      { label: "JFK cost advantage", value: "~€1", note: "Transfers cost almost the same" },
    ],
    takeaway: "Both airports reach Midtown in about 40 minutes. Newark wins on simplicity — a single-seat NJ Transit ride ends at Penn Station — while JFK can be marginally cheaper and has more airline choice. Your airline and airfare should decide. Use the Decision Engine to compare real totals.",
    ctaLabel: "Compare JFK vs Newark for Midtown →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Lower Manhattan", href: "/guides/best-airport-for-lower-manhattan" },
      { label: "Best Airport for Brooklyn", href: "/guides/best-airport-for-downtown-brooklyn" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-lower-manhattan", type: "destination", cityId: "new-york", destinationId: "lower-manhattan",
    title: "Best Airport for Lower Manhattan — JFK or Newark?", description: "Which New York airport is best for Lower Manhattan? Greenwich Village, SoHo, East Village airport comparison.",
    headline: "Which airport is best for Lower Manhattan?",
    intro: "Lower Manhattan — Greenwich Village, SoHo, the East Village — is served by both airports, but neither has a direct connection. Newark reaches Penn Station then requires a downtown subway (50 min total). JFK takes 60 min via AirTrain + LIRR + subway. Newark has a slight edge.",
    airports: [
      { code: "EWR", name: "Newark", why: "NJ Transit to Penn Station, then downtown subway (1/2/3 lines) to Lower Manhattan — about 50 minutes total. Works reliably. Penn Station to Lower Manhattan is a short subway ride.", transferNote: "AirTrain + NJ Transit + subway, €16, ~50 min" },
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica, LIRR to Penn Station, then downtown subway — about 60 minutes. More changes than Newark. The LIRR connection adds reliability but also time.", transferNote: "AirTrain + LIRR + subway, €15, ~60 min" },
    ],
    transferFacts: [
      { label: "EWR → Lower Manhattan", value: "€16", note: "NJ Transit + subway, ~50 min" },
      { label: "JFK → Lower Manhattan", value: "€15", note: "AirTrain + LIRR + subway, ~60 min" },
      { label: "EWR time advantage", value: "10 min", note: "Faster by about 10 minutes" },
      { label: "Both require", value: "2 changes", note: "Neither airport is direct to Lower Manhattan" },
    ],
    takeaway: "Newark has a slight edge for Lower Manhattan — about 10 minutes faster. But neither airport has a great connection. Check airfares on the Decision Engine — the fare difference may matter more than the time difference.",
    ctaLabel: "Compare JFK vs Newark for Lower Manhattan →", ctaHref: buildHubCompareUrl("new-york", "lower-manhattan"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-downtown-brooklyn", type: "destination", cityId: "new-york", destinationId: "brooklyn-downtown",
    title: "Best Airport for Downtown Brooklyn — JFK or Newark?", description: "Which New York airport is best for Downtown Brooklyn? JFK is geographically closer and has a direct LIRR connection.",
    headline: "Which airport is best for Downtown Brooklyn?",
    intro: "Downtown Brooklyn is JFK territory. AirTrain + LIRR reaches Atlantic Terminal in 40 minutes direct — the best airport-to-Brooklyn connection in New York. Newark requires NJ Transit to Penn Station then a subway back to Brooklyn (60 min). For Brooklyn, JFK wins clearly.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica, then LIRR direct to Atlantic Terminal–Barclays Center in Downtown Brooklyn. 40 minutes, one change. This is the fastest and most convenient Brooklyn airport connection available.", transferNote: "AirTrain + LIRR direct, €14, ~40 min to Atlantic Terminal" },
      { code: "EWR", name: "Newark", why: "NJ Transit to Penn Station, then 2/3/4/5 subway to Atlantic Avenue. About 60 minutes. It works but feels like going into Manhattan just to come back out to Brooklyn. The extra distance and subway change add time and complexity.", transferNote: "AirTrain + NJ Transit + subway, €16, ~60 min" },
    ],
    transferFacts: [
      { label: "JFK → Downtown Brooklyn", value: "€14", note: "AirTrain + LIRR direct to Atlantic Terminal, ~40 min" },
      { label: "EWR → Downtown Brooklyn", value: "€16", note: "NJ Transit + subway, ~60 min" },
      { label: "JFK time advantage", value: "20 min", note: "JFK is 20 min faster to Brooklyn" },
      { label: "JFK cost advantage", value: "€2", note: "JFK is €2 cheaper on transfer" },
    ],
    takeaway: "JFK is the clear winner for Downtown Brooklyn. Faster (40 min vs 60 min) and cheaper (€14 vs €16). The direct LIRR connection to Atlantic Terminal makes JFK the obvious Brooklyn airport.",
    ctaLabel: "Compare JFK vs Newark for Brooklyn →", ctaHref: buildHubCompareUrl("new-york", "brooklyn-downtown"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for LIC", href: "/guides/best-airport-for-lic" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-lic", type: "destination", cityId: "new-york", destinationId: "long-island-city",
    title: "Best Airport for Long Island City — JFK or Newark?", description: "Which New York airport is best for Long Island City? JFK is closer with a direct subway connection.",
    headline: "Which airport is best for Long Island City?",
    intro: "Long Island City is in Queens — just across from Manhattan. JFK is geographically closer and has a direct E subway connection to Court Square (45 min). Newark requires NJ Transit to Penn Station then the E subway back to Queens (60 min). JFK wins clearly for LIC.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica, then E subway direct to Court Square in LIC. 45 minutes, one change. The E line runs 24/7. This is the most convenient airport connection for LIC and the Queens waterfront.", transferNote: "AirTrain + E subway direct, €11, ~45 min" },
      { code: "EWR", name: "Newark", why: "NJ Transit to Penn Station, then E subway back east to Court Square. About 60 minutes. The extra distance and backtracking make Newark significantly less convenient for Queens destinations.", transferNote: "AirTrain + NJ Transit + E subway, €16, ~60 min" },
    ],
    transferFacts: [
      { label: "JFK → LIC", value: "€11", note: "AirTrain + E subway direct, ~45 min" },
      { label: "EWR → LIC", value: "€16", note: "NJ Transit + E subway, ~60 min" },
      { label: "JFK is €5 cheaper", value: "€11 vs €16", note: "About a third less on the transfer" },
      { label: "JFK is 15 min faster", value: "45 vs 60 min", note: "No Manhattan backtracking needed" },
    ],
    takeaway: "JFK is the clear winner for Long Island City. Cheaper (€11 vs €16), faster (45 vs 60 min), and a direct subway connection from Jamaica. Newark only makes sense if the airfare difference is very large.",
    ctaLabel: "Compare JFK vs Newark for LIC →", ctaHref: buildHubCompareUrl("new-york", "long-island-city"),
    relatedGuides: [
      { label: "Best Airport for Brooklyn", href: "/guides/best-airport-for-downtown-brooklyn" },
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-families-ny", type: "traveller", cityId: "new-york", travellerScenario: "family",
    title: "Best New York Airport for Families", description: "Which New York airport is best for families? Direct trains, step-free access, and baggage costs compared.",
    headline: "Which New York airport is best for families?",
    intro: "Flying into New York with kids and luggage? Both JFK and Newark have their strengths. JFK's AirTrain + LIRR to Grand Central is step-free and has luggage space. Newark's NJ Transit to Penn Station is also step-free but busier. Here's how they compare for families.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica is step-free. LIRR to Grand Central or Penn Station has dedicated luggage areas. Journey takes ~35–40 min to Midtown. JFK terminals have good family facilities — play areas in T4 and T5, family restrooms throughout.", transferNote: "AirTrain + LIRR, €15, ~35–40 min, step-free, luggage space" },
      { code: "EWR", name: "Newark", why: "AirTrain to Newark Liberty Station, then NJ Transit to Penn Station. About 40–45 min. Penn Station can be overwhelming with children during rush hour. NJ Transit trains have luggage racks but can be crowded.", transferNote: "AirTrain + NJ Transit, €16, ~40–45 min, step-free, can be crowded" },
    ],
    transferFacts: [
      { label: "JFK → Midtown", value: "€15", note: "AirTrain + LIRR, step-free, luggage space" },
      { label: "EWR → Midtown", value: "€16", note: "AirTrain + NJ Transit, step-free" },
      { label: "JFK family facilities", value: "Good", note: "Play areas in T4/T5, family restrooms" },
      { label: "EWR family facilities", value: "Adequate", note: "Standard facilities, fewer dedicated family areas" },
    ],
    takeaway: "Both airports reach Midtown in about 40 minutes. JFK has better terminal facilities for families and a less crowded LIRR experience. The difference is small. Choose based on airfare and airline — use the Decision Engine.",
    ctaLabel: "Compare with family baggage →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Brooklyn", href: "/guides/best-airport-for-downtown-brooklyn" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "October 2026",
  },
  // Traveller guides — 7 patterns
  {
    slug: "best-airport-for-cheapest-ny", type: "traveller", cityId: "new-york", travellerScenario: "lowest-cost",
    title: "Cheapest New York Airport — JFK or Newark?", description: "Which New York airport is actually cheapest? Real trip cost including baggage and transfers.",
    headline: "Which New York airport is actually cheapest?",
    intro: "JFK often has lower total costs: AirTrain + LIRR is cheaper than Newark's NJ Transit, and more airline competition means competitive fares. But Newark's United hub can produce deals. The cheaper ticket isn't always the cheaper journey — here's the real comparison.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain + LIRR transfer costs €11–15 depending on destination. More airline competition keeps fares competitive. Often the cheaper total journey despite Newark sometimes having lower base fares.", transferNote: "Transfer €11–15, competitive fares, more airlines" },
      { code: "EWR", name: "Newark", why: "NJ Transit transfer costs €16 to most destinations — more than JFK. But United hub can produce lower fares on specific routes. Check both — the fare gap can overcome the transfer cost difference.", transferNote: "Transfer €16, United hub can mean lower fares" },
    ],
    transferFacts: [
      { label: "JFK → Midtown", value: "€15", note: "AirTrain + LIRR to Grand Central" },
      { label: "EWR → Midtown", value: "€16", note: "AirTrain + NJ Transit to Penn Station" },
      { label: "JFK cheapest total", value: "€11+fare", note: "LIC via E subway — cheapest JFK transfer" },
      { label: "EWR cheapest total", value: "€16+fare", note: "No cheap transfer option from Newark" },
    ],
    takeaway: "JFK is usually cheaper on total cost — lower transfer costs and competitive fares. Newark can win with exceptional United deals. Use the Decision Engine to compare your specific dates.",
    ctaLabel: "Compare real cost JFK vs Newark →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Brooklyn", href: "/guides/best-airport-for-downtown-brooklyn" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-business-ny", type: "traveller", cityId: "new-york", travellerScenario: "business",
    title: "Best New York Airport for Business Travellers", description: "Which New York airport is best for business travel? Speed, lounges, and Midtown/Financial District access.",
    headline: "Which New York airport is best for business travellers?",
    intro: "For Midtown offices, Newark's single-seat NJ Transit ride to Penn Station (~40–45 min door to door) is hard to beat. JFK's AirTrain + LIRR reaches Grand Central in ~35–40 min but requires a change at Jamaica. For the Financial District, both are competitive. JFK has more international business-class routes and better lounges; Newark wins on simplicity.",
    airports: [
      { code: "EWR", name: "Newark", why: "NJ Transit to Penn Station: ~30 min on the train, ~40–45 min door to door. A single-seat ride with no change at Jamaica — the simplest route to Midtown West. United hub with strong domestic network. Better for Midtown meetings.", transferNote: "NJ Transit 1 seat to Penn Station, ~40–45 min door to door" },
      { code: "JFK", name: "JFK", why: "More international business-class routes. Better lounges (Amex Centurion, Delta Sky Club, BA Galleries). AirTrain + LIRR to Grand Central (~35–40 min) or Penn Station. Better for international business travel.", transferNote: "AirTrain + LIRR ~35–40 min, premium lounges, more routes" },
    ],
    transferFacts: [
      { label: "EWR → Midtown", value: "€16", note: "NJ Transit, ~30 min train, ~40–45 min door to door" },
      { label: "JFK → Midtown", value: "€15", note: "AirTrain + LIRR, ~35–40 min" },
      { label: "EWR routing", value: "1 seat", note: "No change at Jamaica — direct to Penn Station" },
      { label: "JFK lounges", value: "8+", note: "Centurion, Sky Club, BA Galleries" },
    ],
    takeaway: "Newark wins for Midtown business on simplicity (single-seat NJ Transit to Penn Station). JFK wins for international business travel (more routes, better lounges). Choose based on where your meeting is and where you're flying from.",
    ctaLabel: "Compare JFK vs Newark business →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Financial District", href: "/guides/best-airport-for-midtown" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-fastest-ny", type: "traveller", cityId: "new-york", travellerScenario: "fastest-arrival",
    title: "Fastest New York Airport — JFK or Newark?", description: "Which New York airport gets you to Manhattan fastest? Door-to-door times compared.",
    headline: "Which New York airport is fastest to Manhattan?",
    intro: "Both airports reach Midtown in about 40 minutes. Newark's NJ Transit is the simplest ride — a single seat to Penn Station, ~40–45 min door to door. JFK's AirTrain + LIRR reaches Grand Central in ~35–40 min but requires a change at Jamaica. For Brooklyn and Queens, JFK is faster. The 'fastest' airport depends on where you're going.",
    airports: [
      { code: "EWR", name: "Newark", why: "NJ Transit to Penn Station: ~30 min train + AirTrain = ~40–45 min door to door to Midtown, with no change at Jamaica. The simplest rail route into Midtown. Also faster to Lower Manhattan (50 min vs 60).", transferNote: "~40–45 min to Midtown — single-seat NJ Transit" },
      { code: "JFK", name: "JFK", why: "AirTrain + LIRR to Grand Central: ~35–40 min to Midtown, with one change at Jamaica. To Brooklyn (40 min) and LIC (45 min), JFK is faster than Newark. The 'fastest' label depends entirely on your destination.", transferNote: "~35–40 min to Midtown; faster to Brooklyn/Queens" },
    ],
    transferFacts: [
      { label: "EWR → Midtown", value: "~40–45 min", note: "Single-seat NJ Transit to Penn Station" },
      { label: "JFK → Midtown", value: "~35–40 min", note: "AirTrain + LIRR to Grand Central" },
      { label: "JFK → Brooklyn", value: "~40 min", note: "Faster to Brooklyn — JFK wins" },
      { label: "EWR → Brooklyn", value: "~60 min", note: "Slower to Brooklyn — Newark loses" },
    ],
    takeaway: "Newark is the simplest and fastest single-seat ride to Midtown (~40–45 min door to door). JFK is fastest to Brooklyn and Queens. The 'fastest airport' depends on your destination. Use the Decision Engine to see door-to-door times for your specific trip.",
    ctaLabel: "Compare door-to-door times →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Brooklyn", href: "/guides/best-airport-for-downtown-brooklyn" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-backpackers-ny", type: "traveller", cityId: "new-york", travellerScenario: "lowest-cost",
    title: "Best New York Airport for Backpackers", description: "Which New York airport is cheapest for backpackers? Budget travel with carry-on only.",
    headline: "Which New York airport is best for backpackers?",
    intro: "Backpackers need the cheapest door-to-door journey. JFK's AirTrain + E subway to LIC costs just €11 — the cheapest of the JFK and Newark transfers. Newark's cheapest transfer is €16. For budget travellers heading to hostels in Brooklyn or Queens, JFK is the clear winner.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain + E subway to Court Square (LIC): €11 total. Cheapest of the JFK and Newark transfers. LIC and Brooklyn have the best hostel options. JFK is closer to both. The natural choice for backpackers.", transferNote: "€11 to LIC via E subway — cheapest JFK transfer" },
      { code: "EWR", name: "Newark", why: "NJ Transit minimum €16 to anywhere — about 50% more than JFK's cheapest transfer. Only makes sense if you find a dramatically cheaper flight into Newark.", transferNote: "Minimum €16 transfer — more expensive than JFK" },
    ],
    transferFacts: [
      { label: "JFK cheapest transfer", value: "€11", note: "AirTrain + E subway to LIC/Queens" },
      { label: "EWR cheapest transfer", value: "€16", note: "NJ Transit to Penn Station" },
      { label: "JFK → Brooklyn hostels", value: "€14", note: "AirTrain + LIRR to Atlantic Terminal" },
      { label: "EWR → Brooklyn hostels", value: "€16", note: "NJ Transit + subway — longer and pricier" },
    ],
    takeaway: "JFK is the backpacker's New York airport. Cheaper transfers, closer to Brooklyn/Queens hostels, and the €11 E subway option is the cheapest JFK or Newark transfer.",
    ctaLabel: "Compare cheapest JFK vs Newark →", ctaHref: buildHubCompareUrl("new-york", "long-island-city"),
    relatedGuides: [
      { label: "Cheapest NY Airport", href: "/guides/best-airport-for-cheapest-ny" },
      { label: "Best Airport for LIC", href: "/guides/best-airport-for-lic" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-early-ny", type: "traveller", cityId: "new-york", travellerScenario: "business",
    title: "Best New York Airport for Early Departures", description: "Which New York airport is best for early flights? First trains, airport hotels, and reliable transfers.",
    headline: "Which New York airport is best for early departures?",
    intro: "JFK has better early-morning options: AirTrain runs 24/7, LIRR starts early (~5:00 from Jamaica), and the TWA Hotel is connected to T5. Newark's NJ Transit starts ~5:00 as well, but JFK has more airport hotels and the 24h AirTrain makes terminal access easier.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain 24/7 to all terminals. LIRR from Jamaica starts ~5:00. TWA Hotel connected to T5. 10+ airport hotels. More options for early morning flights.", transferNote: "AirTrain 24/7, TWA Hotel at T5, 10+ hotels" },
      { code: "EWR", name: "Newark", why: "NJ Transit starts ~5:00 from Penn Station. Marriott connected to terminal. ~6 airport hotels. Adequate but fewer options than JFK. Works for flights after 7:00.", transferNote: "NJ Transit from ~5:00, Marriott at terminal, ~6 hotels" },
    ],
    transferFacts: [
      { label: "JFK first LIRR", value: "~05:00", note: "From Jamaica to Grand Central/Penn" },
      { label: "EWR first NJ Transit", value: "~05:00", note: "From Penn Station to Newark Airport" },
      { label: "JFK airport hotels", value: "10+", note: "Including TWA Hotel at T5" },
      { label: "EWR airport hotels", value: "~6", note: "Marriott connected to terminal" },
    ],
    takeaway: "JFK is slightly better for early departures — more hotels, 24h AirTrain, and the TWA Hotel. Both airports have ~5:00 first trains. The difference is small.",
    ctaLabel: "Compare JFK vs Newark early →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Business", href: "/guides/best-airport-for-business-ny" },
      { label: "Sleeping at JFK", href: "/knowledge/sleeping-at-jfk" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-late-ny", type: "traveller", cityId: "new-york", travellerScenario: "late-night",
    title: "Best New York Airport for Late Arrivals", description: "Which New York airport is best for late-night arrivals? Transport after midnight and safety.",
    headline: "Which New York airport is best for late-night arrivals?",
    intro: "JFK is better for late arrivals: AirTrain runs 24/7, the E subway runs 24/7, and the A train from Howard Beach also runs 24/7. Newark's NJ Transit stops around 01:30 — after that, taxi is your only option. For flights arriving after midnight, JFK is the safer choice.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain 24/7. E subway 24/7 to Queens and Midtown. A train 24/7 from Howard Beach. Multiple 24h transport options. Busier, better-lit, more security presence at night.", transferNote: "AirTrain 24/7, E and A subway 24/7, always an option" },
      { code: "EWR", name: "Newark", why: "NJ Transit stops around 01:30. After that, only taxi ($50–70 to Manhattan). AirTrain runs 24/7 but the train connection doesn't. Limited late-night facilities. Riskier for delayed flights.", transferNote: "NJ Transit stops ~01:30 — taxi only after that" },
    ],
    transferFacts: [
      { label: "JFK 24h options", value: "AirTrain + E/A subway", note: "Always a public-transport option" },
      { label: "EWR after 01:30", value: "Taxi only", note: "NJ Transit stops — no public transport" },
      { label: "JFK taxi to Midtown", value: "$70 flat + ~$7–12 surcharges", note: "Flat fare to Manhattan; tolls and tip extra" },
      { label: "EWR taxi to Midtown", value: "$50–70 + $17.50 surcharge", note: "Metered, plus airport surcharge and tolls" },
    ],
    takeaway: "JFK is much better for late-night arrivals. 24/7 subway means you always have a public-transport option. Newark after 01:30 means an expensive taxi. If your flight lands after midnight, choose JFK.",
    ctaLabel: "Compare JFK vs Newark late →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Early Departure", href: "/guides/best-airport-for-early-ny" },
      { label: "Sleeping at Newark", href: "/knowledge/sleeping-at-newark" },
    ], lastReviewed: "October 2026",
  },
  {
    slug: "best-airport-for-first-time-ny", type: "traveller", cityId: "new-york", travellerScenario: "business",
    title: "Best New York Airport for First-Time Visitors", description: "Which New York airport is easiest for first-time visitors? Simple transfers and clear navigation.",
    headline: "Which New York airport is best for first-time visitors?",
    intro: "First time in New York? Newark offers the simplest arrival: AirTrain → NJ Transit → Penn Station → you're in Midtown. One train, clear signage, 40 minutes. JFK requires AirTrain → LIRR or subway → more decisions, more complexity. For first-timers, Newark's straightforward NJ Transit connection is the friendlier introduction to the city.",
    airports: [
      { code: "EWR", name: "Newark", why: "AirTrain to Newark Airport Station. Buy NJ Transit ticket to Penn Station. 30-minute train ride. Arrive at Penn Station in Midtown — Madison Square Garden, Hudson Yards, Times Square are steps away. Simple, linear, hard to get lost.", transferNote: "AirTrain → NJ Transit → Penn Station. Simple." },
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica. Decide: LIRR (faster, more expensive) or E subway (slower, cheaper). Then navigate to your destination. More choices = more complexity for jet-lagged first-timers. Works fine but requires more decisions.", transferNote: "AirTrain → choose LIRR or subway → more complex" },
    ],
    transferFacts: [
      { label: "EWR transfer steps", value: "2", note: "AirTrain → NJ Transit → arrive Penn Station" },
      { label: "JFK transfer steps", value: "3+", note: "AirTrain → choose mode → navigate subway/LIRR" },
      { label: "EWR arrival", value: "Penn Station", note: "Right in Midtown — easy to orient" },
      { label: "JFK arrival", value: "Grand Central/Jamaica", note: "Depends on which option you choose" },
    ],
    takeaway: "Newark is better for first-time visitors — simpler transfer, clearer navigation, arrives right in Midtown. JFK works but requires more decisions when you're tired and unfamiliar with New York.",
    ctaLabel: "Compare JFK vs Newark first-timer →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Business", href: "/guides/best-airport-for-business-ny" },
    ], lastReviewed: "October 2026",
  },
];

/* ═══════════════════════════════════════════════════════════ */
/* MASTER REGISTRY                                               */
/* ═══════════════════════════════════════════════════════════ */

export const GUIDE_REGISTRY: Record<string, GuideConfig> = {};

for (const g of [...PARIS_GUIDES, ...LONDON_GUIDES, ...NY_GUIDES]) {
  GUIDE_REGISTRY[g.slug] = g;
}

export function getGuide(slug: string): GuideConfig | undefined {
  return GUIDE_REGISTRY[slug];
}

export function getGuidesByCity(cityId: string): GuideConfig[] {
  return Object.values(GUIDE_REGISTRY).filter((g) => g.cityId === cityId);
}

export function getAllGuideSlugs(): string[] {
  return Object.keys(GUIDE_REGISTRY);
}
