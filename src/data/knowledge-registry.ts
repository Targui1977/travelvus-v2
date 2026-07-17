/**
 * Travelvus V2 — Knowledge Registry
 * Educational content. Explains facts, does not recommend actions.
 * Phase 114.0.
 */

import type { KnowledgeConfig } from "@/lib/knowledge-model";
import { buildHubCompareUrl } from "@/lib/hub-model";

/* ═══════════════════════════════════════════════════════════ */
/* PARIS KNOWLEDGE (6)                                          */
/* ═══════════════════════════════════════════════════════════ */

const PARIS_KNOWLEDGE: KnowledgeConfig[] = [
  {
    slug: "cdg-terminals-guide", cityId: "paris", category: "terminals",
    title: "CDG Terminals Guide — Charles de Gaulle Layout Explained | Travelvus",
    description: "Complete guide to CDG terminals: T1, T2 (2A-2G), T3. Which terminal for which airline, how to navigate, and transfer between terminals.",
    headline: "CDG terminals explained",
    intro: "Charles de Gaulle has three main terminals: T1 (Star Alliance, international), T2 (the largest — seven sub-terminals 2A through 2G for Air France, SkyTeam, and others), and T3 (budget airlines including Ryanair). Understanding the layout before you arrive saves time and stress.",
    keyFacts: [
      { label: "Terminals", value: "3 main (T1, T2, T3)" },
      { label: "T2 sub-terminals", value: "7 (2A–2G)" },
      { label: "T1 airlines", value: "Star Alliance, international" },
      { label: "T3 airlines", value: "Ryanair, some budget carriers" },
      { label: "Transfer between terminals", value: "CDGVal free shuttle" },
      { label: "CDGVal frequency", value: "Every 4 minutes, 24/7" },
    ],
    sections: [
      { heading: "Terminal 1", body: "T1 is the iconic circular terminal. It serves Star Alliance airlines (Lufthansa, United, Singapore Airlines) and many non-aligned international carriers. The central building has a distinctive design with escalators crossing through a bright atrium. Satellite boarding gates are accessed via underground walkways. T1 has a single security checkpoint serving all gates." },
      { heading: "Terminal 2 (2A–2G)", body: "T2 is CDG's largest terminal complex — essentially seven terminals in a line. 2A and 2C serve non-Schengen international flights. 2B and 2D serve Schengen and domestic flights. 2E (K, L, M gates) is Air France's long-haul hub. 2F is Air France's Schengen terminal. 2G serves regional Air France and Hop! flights. The TGV station and CDGVal connect everything. Allow 20–30 minutes between sub-terminals." },
      { heading: "Terminal 3", body: "T3 is the budget terminal — primarily Ryanair and some charter flights. It's a single, simpler building with basic facilities. Walking distance from the RER B station (unlike T1/T2 which require the CDGVal). If you're flying Ryanair, you're almost certainly departing from T3. Check your ticket — some budget airlines also use T2B or T2D." },
    ],
    tips: ["Download the Paris Aéroport app — it has live terminal maps and walking-time estimates", "CDGVal connects all terminals in 8 minutes max — it's free and runs 24/7", "T2E has three gate areas (K, L, M) — check which one before heading through security", "If connecting between T1 and T2, allow at least 45 minutes for the transfer"],
    relatedGuides: [
      { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris-guide" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ],
    relatedKnowledge: [
      { label: "How to get from CDG to Paris", href: "/knowledge/cdg-to-central-paris" },
      { label: "Sleeping at CDG", href: "/knowledge/sleeping-at-cdg" },
    ],
    hubLink: { label: "Paris Airport Choice Hub →", href: "/paris/airport-choice" },
    ctaLabel: "Compare CDG vs Orly →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    lastReviewed: "July 2026",
  },
  {
    slug: "cdg-to-central-paris", cityId: "paris", category: "transfers",
    title: "How to Get from CDG to Central Paris — All Transfer Options | Travelvus",
    description: "Complete guide to CDG→Paris transfers: RER B, Roissybus, taxi, ride-share. Costs, times, and which option is best for your situation.",
    headline: "How to get from CDG to central Paris",
    intro: "CDG is 25km northeast of Paris. You have four main options: RER B train (€12, 35–40 min), Roissybus (€16, 60 min), taxi (€55 fixed Right Bank, €60 Left Bank), or ride-share. The RER B is the best choice for most travellers — direct, affordable, and frequent.",
    keyFacts: [
      { label: "RER B cost", value: "€12" },
      { label: "RER B time", value: "35–40 min" },
      { label: "Taxi Right Bank", value: "€55 fixed" },
      { label: "Taxi Left Bank", value: "€60 fixed" },
      { label: "First train", value: "04:50" },
      { label: "Last train", value: "00:30" },
    ],
    sections: [
      { heading: "RER B — the best option for most people", body: "The RER B is a commuter train connecting CDG to central Paris. Buy a €12 ticket at the blue machines (English available, cards accepted). Trains run every 10–15 minutes from 04:50 to 00:30. The train stops at Gare du Nord (35 min), Châtelet–Les Halles (40 min), Denfert-Rochereau, and continues to southern suburbs. Step-free access at major stations. Luggage racks available. This is the option Travelvus recommends for most travellers." },
      { heading: "Roissybus — direct but slower", body: "Roissybus runs from CDG (all terminals) to Opéra Garnier in central Paris. €16, takes about 60 minutes in normal traffic — longer at peak. Buses run every 15–20 minutes from 06:00 to 00:30. Less frequent than the RER B and slower, but it's a single-seat ride with no changes. Good if you're staying near Opéra or don't want to navigate the RER with heavy luggage." },
      { heading: "Taxi and ride-share", body: "Official Paris taxis from CDG have fixed fares: €55 to anywhere on the Right Bank, €60 to the Left Bank. These are regulated and you should never pay more. Follow 'Taxi' signs to the official rank — ignore touts inside the terminal. Uber and Bolt also operate from CDG but fares vary with demand and can be higher than the fixed taxi rate during peak hours." },
    ],
    tips: ["Buy the RER B ticket from the blue machines, not the ticket window — machines are faster and have English", "Keep your RER ticket — you need it to exit at your destination station", "If arriving late (after 23:00), pre-book a taxi or take the RER if your destination is on the line", "The fixed taxi fare applies to official taxis at the rank only — check the sticker on the window"],
    relatedGuides: [
      { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris-guide" },
      { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
    ],
    relatedKnowledge: [
      { label: "CDG Terminals Guide", href: "/knowledge/cdg-terminals-guide" },
      { label: "Orly to Central Paris", href: "/knowledge/orly-to-central-paris" },
    ],
    hubLink: { label: "Paris Airport Choice Hub →", href: "/paris/airport-choice" },
    ctaLabel: "Compare CDG vs Orly →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    lastReviewed: "July 2026",
  },
  {
    slug: "orly-to-central-paris", cityId: "paris", category: "transfers",
    title: "How to Get from Orly to Central Paris — All Transfer Options | Travelvus",
    description: "Complete guide to Orly→Paris transfers: Orlyval + RER B, Orlybus, taxi, tram. Costs, times, and best options per destination.",
    headline: "How to get from Orly to central Paris",
    intro: "Orly is 13km south of Paris. Your main options: Orlyval shuttle + RER B (€15, 50 min), Orlybus to Denfert-Rochereau (€11, 30–35 min), Tram T7 to Villejuif then Metro (€4, 60+ min), or taxi (€35 Right Bank, €40 Left Bank). Orlybus is the best value — direct, frequent, and cheaper than the Orlyval.",
    keyFacts: [
      { label: "Orlyval + RER B", value: "€15 / 50 min" },
      { label: "Orlybus", value: "€11 / 30–35 min" },
      { label: "Taxi Right Bank", value: "€35 fixed" },
      { label: "Taxi Left Bank", value: "€40 fixed" },
      { label: "Orlyval first/last", value: "06:00–23:30" },
      { label: "Orlybus first/last", value: "06:00–00:30" },
    ],
    sections: [
      { heading: "Orlybus — best value for most destinations", body: "Orlybus runs direct from Orly (all terminals) to Denfert-Rochereau in southern Paris. €11, 30–35 minutes, no changes. From Denfert-Rochereau you can connect to Metro lines 4 and 6 or RER B. Buses run every 10–20 minutes from 06:00 to 00:30. This is Travelvus's recommended option for most travellers arriving at Orly — cheaper and simpler than the Orlyval." },
      { heading: "Orlyval + RER B — connected but premium-priced", body: "The Orlyval is a dedicated light-rail shuttle from Orly to Antony RER B station. From Antony, RER B trains run to central Paris. The total journey takes about 50 minutes and costs €15 (including the Orlyval premium of €9.30). It's reliable but the shuttle-to-train change at Antony adds complexity. Not recommended if Orlybus serves your destination." },
      { heading: "Tram T7 — the cheapest option", body: "Tram T7 runs from Orly to Villejuif–Louis Aragon (Metro 7 terminus). From there, Metro 7 serves central Paris. This costs only €4 (a standard T+ ticket covers both tram and Metro) but takes 60+ minutes. Best for budget travellers with time and light luggage. Not recommended after dark in unfamiliar areas." },
    ],
    tips: ["Orlybus is €11 — cheaper and simpler than Orlyval. Use it unless your destination is better served by RER B", "Orlyval closes at 23:30 — if your flight arrives after 23:00, plan for Orlybus or taxi", "Tram T7 + Metro is only €4 — the cheapest airport transfer in Paris", "Fixed taxi fares from Orly are lower than CDG — €35 Right Bank, €40 Left Bank"],
    relatedGuides: [
      { label: "Best Airport for Montparnasse", href: "/guides/best-airport-for-montparnasse" },
      { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
    ],
    relatedKnowledge: [
      { label: "CDG to Central Paris", href: "/knowledge/cdg-to-central-paris" },
      { label: "Sleeping at Orly", href: "/knowledge/sleeping-at-orly" },
    ],
    hubLink: { label: "Paris Airport Choice Hub →", href: "/paris/airport-choice" },
    ctaLabel: "Compare CDG vs Orly →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    lastReviewed: "July 2026",
  },
  {
    slug: "sleeping-at-cdg", cityId: "paris", category: "hotels",
    title: "Sleeping at CDG — Airport Hotels, Rest Zones & Overnight Guide | Travelvus",
    description: "Complete guide to sleeping at Charles de Gaulle Airport: on-site hotels, terminal rest zones, sleeping pods, and what to expect overnight.",
    headline: "Sleeping at CDG — hotels, rest zones, and overnight guide",
    intro: "CDG is one of Europe's better airports for overnight stays. Over 20 hotels serve the airport — from Ibis Budget (€60) to the Sheraton inside Terminal 2 (€200+). Free rest zones with reclining seats exist in T1 and T2E. The airport stays open 24/7 and the CDGVal shuttle runs all night — meaning you can access any terminal at any hour.",
    keyFacts: [
      { label: "On-site hotels", value: "20+" },
      { label: "Cheapest hotel", value: "~€60 (Ibis Budget)" },
      { label: "Sheraton T2", value: "Inside Terminal 2" },
      { label: "Free rest zones", value: "T1 and T2E" },
      { label: "CDGVal 24h", value: "Yes — connects all terminals" },
      { label: "Airport open 24h", value: "Yes" },
    ],
    sections: [
      { heading: "On-site hotels", body: "CDG has over 20 hotels serving the airport. The Sheraton is inside Terminal 2 (walk from your gate). Ibis, Novotel, Hilton, Pullman, and CitizenM are connected by free CDGVal shuttle. Ibis Budget is the cheapest (~€60/night). CitizenM offers compact luxury rooms (~€120). Most hotels have 24h reception and early breakfast options from 04:00 for morning flights." },
      { heading: "Free rest zones", body: "CDG has free rest zones with reclining seats in Terminal 1 (near gates 10–20) and Terminal 2E (K gates area). These are quiet, dimly lit areas with padded seats designed for resting. They're not beds — but they're free, safe, and patrolled by security. Bring a travel pillow and eye mask. Power outlets are available. These fill up during peak disruption periods." },
      { heading: "Staying in the terminal overnight", body: "CDG terminals remain open 24/7. Benches with armrests discourage lying down — but the rest zones are specifically designed for overnight waiting. Food options after 22:00 are limited — bring snacks. Showers are available in some lounges (paid access) and at the Sheraton fitness centre (day pass available). Security patrols regularly — it's safe but keep valuables close." },
    ],
    tips: ["Book the Ibis Budget if you just need a bed — it's the cheapest and the CDGVal connects it to all terminals", "The free rest zones fill up during disruption — arrive early if you know you'll need one", "Bring a travel pillow and eye mask — even the rest zones have ambient light", "Morning flights: most hotels start breakfast at 04:00 — ask at check-in"],
    relatedGuides: [
      { label: "Best Airport for Early Departure", href: "/guides/best-airport-for-early-departure-paris" },
      { label: "Best Airport for Airport Hotel", href: "/guides/best-airport-for-airport-hotel-paris" },
    ],
    relatedKnowledge: [
      { label: "CDG Terminals Guide", href: "/knowledge/cdg-terminals-guide" },
      { label: "Sleeping at Orly", href: "/knowledge/sleeping-at-orly" },
    ],
    hubLink: { label: "Paris Airport Choice Hub →", href: "/paris/airport-choice" },
    ctaLabel: "Compare CDG vs Orly →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    lastReviewed: "July 2026",
  },
  {
    slug: "sleeping-at-orly", cityId: "paris", category: "hotels",
    title: "Sleeping at Orly — Airport Hotels, Rest Areas & Overnight Guide | Travelvus",
    description: "Complete guide to sleeping at Orly Airport: hotels, rest areas, and overnight tips. Fewer options than CDG but manageable.",
    headline: "Sleeping at Orly — hotels, rest areas, and overnight guide",
    intro: "Orly has fewer overnight options than CDG. About 8 hotels serve the airport — mostly mid-range (Ibis, Novotel, Mercure, €70–150). The airport closes some areas overnight, and the Orlyval shuttle stops at 23:30. Plan ahead — Orly is manageable for overnight stays but has fewer facilities than CDG.",
    keyFacts: [
      { label: "On-site hotels", value: "~8" },
      { label: "Cheapest hotel", value: "~€70 (Ibis Budget)" },
      { label: "Free rest zones", value: "Limited (South Terminal)" },
      { label: "Orlyval last train", value: "23:30" },
      { label: "Airport hours", value: "Some areas close 23:30–04:30" },
      { label: "24h food options", value: "Very limited" },
    ],
    sections: [
      { heading: "On-site hotels", body: "Orly has about 8 hotels — Ibis Budget, Ibis Styles, Novotel, Mercure, and a few independents. Most are a short shuttle ride from the terminals. Ibis Budget is the cheapest (~€70). None are directly inside the terminal — unlike CDG's Sheraton. All have 24h reception. Book ahead — Orly hotels fill up faster during disruption because there are fewer options." },
      { heading: "Staying in the terminal", body: "Orly's South Terminal (Sud) has some rest areas with seating. The West Terminal (Ouest) has limited overnight facilities. Parts of the airport close between 23:30 and 04:30 — you may be asked to move to a designated waiting area. Food options after 22:00 are very limited — McDonalds in South Terminal is usually the last option. Bring snacks." },
    ],
    tips: ["Book Orly hotels ahead — with only 8 options, they fill up fast during disruption", "If you're stuck overnight, stay in the South Terminal — it has the most facilities", "Bring food — Orly's options after 22:00 are extremely limited", "If you have a choice, CDG is better for overnight stays"],
    relatedGuides: [
      { label: "Best Airport for Late Arrival", href: "/guides/best-airport-for-late-night-paris" },
      { label: "Best Airport for Airport Hotel", href: "/guides/best-airport-for-airport-hotel-paris" },
    ],
    relatedKnowledge: [
      { label: "Sleeping at CDG", href: "/knowledge/sleeping-at-cdg" },
      { label: "Orly to Central Paris", href: "/knowledge/orly-to-central-paris" },
    ],
    hubLink: { label: "Paris Airport Choice Hub →", href: "/paris/airport-choice" },
    ctaLabel: "Compare CDG vs Orly →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    lastReviewed: "July 2026",
  },
  {
    slug: "when-to-arrive-at-cdg", cityId: "paris", category: "check-in",
    title: "When to Arrive at CDG — Check-in Times, Security, & Boarding | Travelvus",
    description: "How early should you arrive at CDG? Check-in deadlines, security wait times, and terminal-specific advice for stress-free departure.",
    headline: "When to arrive at CDG — check-in, security, and boarding guide",
    intro: "CDG recommends arriving 2 hours before Schengen flights and 3 hours before international/long-haul flights. In practice, 2 hours is usually enough for Schengen if you have no checked bags; 2.5 hours gives a comfortable margin. T1 security can be slow during the 07:00–09:00 peak. T2E K gates (long-haul) require extra time for passport control after security.",
    keyFacts: [
      { label: "Schengen flights", value: "2 hours before" },
      { label: "International flights", value: "3 hours before" },
      { label: "Check-in closes", value: "40–60 min before (varies)" },
      { label: "Boarding starts", value: "30–40 min before departure" },
      { label: "Peak security (T1)", value: "07:00–09:00" },
      { label: "Fast-track available", value: "SkyPriority, business class" },
    ],
    sections: [
      { heading: "Recommended arrival times", body: "For Schengen flights with carry-on only: arrive 90 minutes before. With checked bags: 2 hours. For international/long-haul: 2.5 hours is comfortable, 3 hours is CDG's official recommendation. T2E K/L/M gates (Air France long-haul) require passport control after security — add 15 minutes. Morning peaks (07:00–09:00) add 15–20 minutes to security queues." },
      { heading: "Check-in deadlines", body: "Check-in desks typically close 60 minutes before departure for international flights and 40 minutes for Schengen. Online check-in opens 30 hours before departure for most airlines. If you've checked in online and have no bags, you can arrive later — but don't cut it below 60 minutes for international or 45 minutes for Schengen. Bag drop queues can be long during peak hours." },
    ],
    tips: ["Check in online — it saves 15–20 minutes at the airport", "T1 security queue is notoriously slow 07:00–09:00 — arrive earlier if flying from T1", "T2E K gates require passport control after security — allow an extra 15 minutes", "Air France app shows real-time security wait times for T2E and T2F"],
    relatedGuides: [
      { label: "Best Airport for Early Departure", href: "/guides/best-airport-for-early-departure-paris" },
      { label: "CDG Terminals Guide", href: "/guides/best-airport-for-bercy" },
    ],
    relatedKnowledge: [
      { label: "CDG Terminals Guide", href: "/knowledge/cdg-terminals-guide" },
      { label: "CDG to Central Paris", href: "/knowledge/cdg-to-central-paris" },
    ],
    hubLink: { label: "Paris Airport Choice Hub →", href: "/paris/airport-choice" },
    ctaLabel: "Compare CDG vs Orly →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    lastReviewed: "July 2026",
  },
];

/* ═══════════════════════════════════════════════════════════ */
/* LONDON KNOWLEDGE (5)                                         */
/* ═══════════════════════════════════════════════════════════ */

const LONDON_KNOWLEDGE: KnowledgeConfig[] = [
  {
    slug: "heathrow-express-guide", cityId: "london", category: "transfers",
    title: "Heathrow Express Explained — Cost, Time & Alternatives | Travelvus",
    description: "Complete guide to the Heathrow Express: cost, journey time, vs Elizabeth Line, vs Piccadilly Line. Which Heathrow train should you take?",
    headline: "Heathrow Express explained — is it worth it?",
    intro: "The Heathrow Express is the fastest airport-to-central-London connection in the UK — 15 minutes from Heathrow to Paddington, non-stop. At €29 it's also the most expensive per minute of any London airport transfer. The Elizabeth Line takes 28 minutes for €18 — half the price for 13 more minutes. For most travellers, the Elizabeth Line is the better value.",
    keyFacts: [
      { label: "Heathrow Express time", value: "15 min" },
      { label: "Heathrow Express cost", value: "€29 (single)" },
      { label: "Elizabeth Line time", value: "28 min" },
      { label: "Elizabeth Line cost", value: "€18 (single)" },
      { label: "First train", value: "05:10" },
      { label: "Last train", value: "23:25" },
    ],
    sections: [
      { heading: "Heathrow Express vs Elizabeth Line", body: "The Heathrow Express is 13 minutes faster than the Elizabeth Line (15 min vs 28 min) but costs €11 more (€29 vs €18). The Express runs every 15 minutes, the Elizabeth Line every 15–30 minutes. Both arrive at Paddington. For most travellers, the Elizabeth Line is the better choice — nearly as fast, significantly cheaper, and integrated into the TfL network. The Express only wins if 13 minutes is genuinely critical." },
      { heading: "When the Express IS worth it", body: "Business travellers with tight schedules. Late arrivals when you need to reach central London as fast as possible. If your employer is paying. If you've already bought a Heathrow Express ticket as part of a package. In all other cases, take the Elizabeth Line or Piccadilly Line." },
    ],
    tips: ["Buy Heathrow Express tickets online in advance — up to 30% cheaper than at the station", "The Elizabeth Line uses the same platforms at Paddington — follow signs carefully", "If you have an Oyster or contactless card, use the Elizabeth Line — no separate ticket needed"],
    relatedGuides: [
      { label: "Best Airport for Paddington", href: "/guides/best-airport-for-paddington" },
      { label: "Fastest London Airport", href: "/guides/fastest-london-airport" },
    ],
    relatedKnowledge: [
      { label: "Stansted Express Guide", href: "/knowledge/stansted-express-guide" },
      { label: "Sleeping at Heathrow", href: "/knowledge/sleeping-at-heathrow" },
    ],
    hubLink: { label: "London Airport Choice Hub →", href: "/london/airport-choice" },
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "paddington"),
    lastReviewed: "July 2026",
  },
  {
    slug: "stansted-express-guide", cityId: "london", category: "transfers",
    title: "Stansted Express Explained — Cost, Time & Tips | Travelvus",
    description: "Complete guide to the Stansted Express: cost, journey time, connections to central London, and how it compares to other airport transfers.",
    headline: "Stansted Express explained — what you need to know",
    intro: "The Stansted Express is the dedicated train service from Stansted Airport to London Liverpool Street. It takes 47–55 minutes and costs €28 single. From Liverpool Street you connect to the Tube, Elizabeth Line, or DLR for onward travel. It's reliable and frequent (every 15 minutes) but requires a connecting journey to reach most London destinations.",
    keyFacts: [
      { label: "Journey time", value: "47–55 min" },
      { label: "Cost", value: "€28 (single)" },
      { label: "Frequency", value: "Every 15 min" },
      { label: "First train", value: "05:30" },
      { label: "Last train", value: "00:30" },
      { label: "Arrives at", value: "Liverpool Street" },
    ],
    sections: [
      { heading: "The journey explained", body: "From Stansted Airport station (a 5-minute walk from the terminal), the train runs non-stop to Tottenham Hale (30 min) then continues to Liverpool Street (47–55 min total). At Liverpool Street, you connect to the Central, Circle, Hammersmith & City, and Metropolitan lines, as well as the Elizabeth Line and DLR. Liverpool Street is in the City of London — excellent for the financial district, Shoreditch, and east London. For west London, add 20–30 minutes of Tube travel." },
      { heading: "Stansted Express vs other options", body: "The National Express coach is cheaper (€15–20) but takes 90+ minutes in traffic. Driving takes 60–90 minutes depending on traffic. For most travellers, the Stansted Express is the best balance of speed and reliability. Book online in advance for the best fares — walk-up tickets cost more." },
    ],
    tips: ["Book online in advance — tickets are cheaper than at the station", "Tottenham Hale station connects to the Victoria Line — often a faster route to central London than going all the way to Liverpool Street", "The train has dedicated luggage areas — use them, aisles get crowded"],
    relatedGuides: [
      { label: "Best Airport for Liverpool Street", href: "/guides/best-airport-for-westminster" },
      { label: "Cheapest London Airport", href: "/guides/best-airport-for-cheapest-london" },
    ],
    relatedKnowledge: [
      { label: "Heathrow Express Guide", href: "/knowledge/heathrow-express-guide" },
      { label: "Sleeping at Stansted", href: "/knowledge/sleeping-at-stansted" },
    ],
    hubLink: { label: "London Airport Choice Hub →", href: "/london/airport-choice" },
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "westminster"),
    lastReviewed: "July 2026",
  },
  {
    slug: "sleeping-at-heathrow", cityId: "london", category: "hotels",
    title: "Sleeping at Heathrow — Airport Hotels, Rest Zones & Overnight | Travelvus",
    description: "Complete guide to sleeping at Heathrow: hotels, terminal rest zones, and overnight tips for Britain's busiest airport.",
    headline: "Sleeping at Heathrow — hotels, rest zones, and overnight guide",
    intro: "Heathrow is well-equipped for overnight stays. Over 15 hotels serve the airport — from Ibis Budget (€55) to the Sofitel inside Terminal 5 (€200+). All terminals have rest zones with seating. The airport stays open 24/7. Free Tube-night-bus connections to central London run on Friday and Saturday nights. One of Europe's better airports for an overnight stay.",
    keyFacts: [
      { label: "On-site hotels", value: "15+" },
      { label: "Cheapest hotel", value: "~€55 (Ibis Budget)" },
      { label: "Sofitel T5", value: "Inside Terminal 5" },
      { label: "24h food", value: "Limited — bring snacks" },
      { label: "Rest zones", value: "Available in all terminals" },
      { label: "Airport open 24h", value: "Yes" },
    ],
    sections: [
      { heading: "On-site hotels", body: "Heathrow has over 15 hotels across all price points. The Sofitel is inside Terminal 5 (walk from Arrivals). The Aerotel is inside Terminal 3 (airside — you don't need to clear immigration). Ibis Budget, Premier Inn, Hilton, and Marriott are connected by free Hotel Hoppa bus or local buses. Ibis Budget is the cheapest (~€55). Premier Inn offers reliable mid-range comfort (~€80)." },
      { heading: "Rest zones and terminal sleeping", body: "All Heathrow terminals have rest zones with seating. Terminal 5 has the best facilities — quiet areas near Gates A and B with reclining chairs. Power outlets are widely available. Terminal 2 and 3 are busier and noisier. Food options after 22:00 are limited to vending machines and a few coffee shops. Security patrols regularly — the airport is safe." },
    ],
    tips: ["Aerotel T3 is airside — you don't need to clear immigration. Great for transit passengers", "The free Hotel Hoppa bus is unreliable — take a local bus (cheaper and more frequent)", "Terminal 5 has the best rest zones — head there if you're stuck overnight"],
    relatedGuides: [
      { label: "Fastest London Airport", href: "/guides/fastest-london-airport" },
      { label: "Best Airport for Families", href: "/guides/best-airport-for-families-london" },
    ],
    relatedKnowledge: [
      { label: "Heathrow Express Guide", href: "/knowledge/heathrow-express-guide" },
      { label: "Sleeping at Stansted", href: "/knowledge/sleeping-at-stansted" },
    ],
    hubLink: { label: "London Airport Choice Hub →", href: "/london/airport-choice" },
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "westminster"),
    lastReviewed: "July 2026",
  },
  {
    slug: "sleeping-at-stansted", cityId: "london", category: "hotels",
    title: "Sleeping at Stansted — Airport Hotels & Overnight Guide | Travelvus",
    description: "Complete guide to sleeping at Stansted Airport: hotels, rest zones, overnight tips. Fewer options than Heathrow — plan ahead.",
    headline: "Sleeping at Stansted — hotels and overnight guide",
    intro: "Stansted has limited overnight facilities. About 5 hotels serve the airport — Radisson Blu (connected to terminal, €100+), Holiday Inn Express, Premier Inn, and Ibis Budget (€50+). The terminal has limited rest zones. The last Stansted Express departs at 00:30 and the first returns at 05:30 — if you're stuck between those times, you're at the airport until morning.",
    keyFacts: [
      { label: "On-site hotels", value: "~5" },
      { label: "Cheapest hotel", value: "~€50 (Ibis Budget)" },
      { label: "Radisson Blu", value: "Connected to terminal" },
      { label: "Free rest zones", value: "Very limited" },
      { label: "Last/first train", value: "00:30 / 05:30" },
      { label: "24h food", value: "Minimal — bring snacks" },
    ],
    sections: [
      { heading: "On-site hotels", body: "Stansted has about 5 hotels. The Radisson Blu is the best — directly connected to the terminal via a covered walkway, modern rooms, €100+. Holiday Inn Express and Premier Inn are a 5-minute shuttle ride away (€70–90). Ibis Budget is the cheapest at ~€50 — basic but clean. Book ahead — with only 5 options, Stansted hotels fill up during disruption." },
    ],
    tips: ["Book Stansted hotels as early as possible — with only 5 options, they fill up quickly", "The Radisson Blu is worth the premium for early-morning flights — connected directly to the terminal", "If you're on a budget, the Ibis Budget is clean and functional — but book it early"],
    relatedGuides: [
      { label: "Cheapest London Airport", href: "/guides/best-airport-for-cheapest-london" },
      { label: "Best Airport for Late Arrival", href: "/guides/best-airport-for-families-london" },
    ],
    relatedKnowledge: [
      { label: "Sleeping at Heathrow", href: "/knowledge/sleeping-at-heathrow" },
      { label: "Stansted Express Guide", href: "/knowledge/stansted-express-guide" },
    ],
    hubLink: { label: "London Airport Choice Hub →", href: "/london/airport-choice" },
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "westminster"),
    lastReviewed: "July 2026",
  },
  {
    slug: "heathrow-arrival-guide", cityId: "london", category: "check-in",
    title: "How Early to Arrive at Heathrow — Check-in Times & Security | Travelvus",
    description: "How early should you arrive at Heathrow? Check-in deadlines, security wait times, and terminal-specific advice.",
    headline: "How early to arrive at Heathrow",
    intro: "Heathrow recommends 2 hours before European flights and 3 hours before long-haul. In practice, 90 minutes is usually enough for European with carry-on only. Terminal 5 security is efficient; Terminal 2 can be slow during the 06:00–09:00 peak. If you're checking bags, add 20 minutes. Fast-track security is available with business class and some credit cards.",
    keyFacts: [
      { label: "European flights", value: "2 hours before" },
      { label: "Long-haul flights", value: "3 hours before" },
      { label: "Check-in closes", value: "60 min before (most airlines)" },
      { label: "Fastest terminal security", value: "T5 (average 5–10 min)" },
      { label: "Peak hours", value: "06:00–09:00" },
      { label: "Fast-track", value: "Business class, status, some cards" },
    ],
    sections: [
      { heading: "Terminal-by-terminal guide", body: "T5 (British Airways, Iberia): the most efficient — security averages 5–10 minutes outside peak. T2 (Star Alliance): can be slow during the 06:00–09:00 rush — allow 15–20 minutes for security. T3 (Virgin, Delta, Emirates): variable — long-haul heavy, can be busy. T4 (SkyTeam): generally quiet but furthest from central London — allow extra transfer time getting there." },
    ],
    tips: ["Check in online and get a mobile boarding pass — saves 15–20 minutes", "T5 security is fastest — if you have a choice of terminals, choose T5", "Fast-track is included with business class and available for purchase (~€12) at T2, T3, T5"],
    relatedGuides: [
      { label: "Fastest London Airport", href: "/guides/fastest-london-airport" },
      { label: "Best Airport for Business", href: "/guides/best-airport-for-families-london" },
    ],
    relatedKnowledge: [
      { label: "Heathrow Express Guide", href: "/knowledge/heathrow-express-guide" },
      { label: "Sleeping at Heathrow", href: "/knowledge/sleeping-at-heathrow" },
    ],
    hubLink: { label: "London Airport Choice Hub →", href: "/london/airport-choice" },
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "westminster"),
    lastReviewed: "July 2026",
  },
];

/* ═══════════════════════════════════════════════════════════ */
/* NEW YORK KNOWLEDGE (4)                                       */
/* ═══════════════════════════════════════════════════════════ */

const NY_KNOWLEDGE: KnowledgeConfig[] = [
  {
    slug: "airtrain-jfk-guide", cityId: "new-york", category: "transfers",
    title: "AirTrain JFK Explained — Cost, Routes & Connections | Travelvus",
    description: "Complete guide to AirTrain JFK: how it works, cost, connections to LIRR and subway, and tips for navigating JFK's transit system.",
    headline: "AirTrain JFK explained — how it works and what it costs",
    intro: "AirTrain JFK is the automated light-rail system connecting all JFK terminals to the LIRR (Jamaica Station) and subway (Howard Beach and Jamaica). It costs $8.50 (€8) and runs 24/7 every 4–12 minutes. AirTrain is free between terminals — you only pay when exiting at Jamaica or Howard Beach. From Jamaica, LIRR trains reach Grand Central in 20 minutes (additional $5–10).",
    keyFacts: [
      { label: "AirTrain cost", value: "$8.50 (€8)" },
      { label: "Frequency", value: "Every 4–12 min" },
      { label: "Operating hours", value: "24/7" },
      { label: "Terminal connection", value: "Free between terminals" },
      { label: "Jamaica to Grand Central", value: "20 min via LIRR" },
      { label: "Jamaica to Penn Station", value: "20 min via LIRR" },
    ],
    sections: [
      { heading: "How AirTrain works", body: "AirTrain has three routes: the Jamaica Line (red — to Jamaica Station for LIRR connections), the Howard Beach Line (green — to Howard Beach for A subway), and the All Terminals Loop (gold — circles all terminals). The system is fully automated with clear signage in multiple languages. Trains run on elevated tracks with views of the airport and Queens." },
      { heading: "Connecting to the city", body: "At Jamaica Station, transfer to the LIRR (Long Island Rail Road) for Grand Central (20 min), Penn Station (20 min), or Atlantic Terminal Brooklyn (20 min). LIRR tickets cost $5–10 depending on destination. At Howard Beach, transfer to the A subway — cheaper ($2.90) but slower (50+ min to Midtown). For most travellers, the LIRR connection at Jamaica is the best option." },
    ],
    tips: ["AirTrain is free between terminals — don't pay if you're just changing terminals", "Buy a MetroCard or use OMNY contactless for AirTrain — cash not accepted at exit gates", "LIRR from Jamaica is much faster than the A train from Howard Beach — worth the extra cost", "AirTrain runs 24/7 — reliable even for late-night arrivals"],
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Brooklyn", href: "/guides/best-airport-for-downtown-brooklyn" },
    ],
    relatedKnowledge: [
      { label: "Newark AirTrain Guide", href: "/knowledge/airtrain-newark-guide" },
      { label: "Sleeping at JFK", href: "/knowledge/sleeping-at-jfk" },
    ],
    hubLink: { label: "New York Airport Choice Hub →", href: "/new-york/airport-choice" },
    ctaLabel: "Compare JFK vs Newark →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    lastReviewed: "July 2026",
  },
  {
    slug: "airtrain-newark-guide", cityId: "new-york", category: "transfers",
    title: "Newark AirTrain Explained — NJ Transit, Amtrak & Manhattan | Travelvus",
    description: "Complete guide to Newark AirTrain: connection to NJ Transit and Amtrak, costs, times, and how to reach Manhattan from EWR.",
    headline: "Newark AirTrain explained — how to reach Manhattan",
    intro: "Newark's AirTrain connects all terminals to Newark Liberty Airport Station, where you transfer to NJ Transit or Amtrak trains to New York Penn Station. AirTrain is free within the airport. The NJ Transit train to Penn Station takes 30 minutes and costs $15.50 (€15). Combined with the AirTrain, total transfer is about 40 minutes — the fastest airport-to-Midtown connection in New York.",
    keyFacts: [
      { label: "AirTrain cost", value: "Free (included in NJ Transit ticket)" },
      { label: "NJ Transit to Penn", value: "$15.50 (€15), 30 min" },
      { label: "Total transfer time", value: "~40 min to Midtown" },
      { label: "Operating hours", value: "AirTrain 24/7, NJ Transit until ~01:30" },
      { label: "Amtrak option", value: "Faster, more expensive (~$25+)" },
      { label: "Last NJ Transit", value: "~01:30 (check schedule)" },
    ],
    sections: [
      { heading: "How the transfer works", body: "Take AirTrain from any terminal to Newark Liberty Airport Station (free, 5–10 min). At the station, buy an NJ Transit ticket to New York Penn Station ($15.50) from the machines. Trains run every 15–30 minutes depending on time of day. The train journey takes about 30 minutes. You arrive at Penn Station in Midtown Manhattan — connected to the A/C/E and 1/2/3 subways. Amtrak also serves this station — faster but more expensive." },
      { heading: "Late-night limitations", body: "NJ Transit stops running at approximately 01:30. After that, you'll need a taxi or ride-share to Manhattan (~$50–70). AirTrain continues to run 24/7. Plan ahead for late arrivals — if your flight lands after 00:30, assume you'll miss the last train." },
    ],
    tips: ["NJ Transit tickets are cheaper when bought at the station machine vs on the train", "Amtrak is faster and more comfortable — worth the premium for business travellers", "If arriving after 00:30, plan for taxi/ride-share — NJ Transit will likely have stopped", "Penn Station is huge — follow signs carefully, it's easy to get turned around"],
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Financial District", href: "/guides/best-airport-for-midtown" },
    ],
    relatedKnowledge: [
      { label: "AirTrain JFK Guide", href: "/knowledge/airtrain-jfk-guide" },
      { label: "Sleeping at Newark", href: "/knowledge/sleeping-at-newark" },
    ],
    hubLink: { label: "New York Airport Choice Hub →", href: "/new-york/airport-choice" },
    ctaLabel: "Compare JFK vs Newark →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    lastReviewed: "July 2026",
  },
  {
    slug: "sleeping-at-jfk", cityId: "new-york", category: "hotels",
    title: "Sleeping at JFK — Airport Hotels, Rest Zones & Overnight | Travelvus",
    description: "Complete guide to sleeping at JFK Airport: TWA Hotel, rest zones, nearby hotels, and overnight tips for New York's largest airport.",
    headline: "Sleeping at JFK — hotels, rest zones, and overnight guide",
    intro: "JFK has one of the world's most iconic airport hotels — the TWA Hotel, connected to Terminal 5, a restored 1962 Eero Saarinen building with a rooftop pool and cocktail bar (€180+). Beyond the TWA, JFK has ~10 nearby hotels — from Days Inn (€80) to Crowne Plaza and Hilton (€150+). Rest zones exist in most terminals. AirTrain runs 24/7 so you can reach any terminal at any hour.",
    keyFacts: [
      { label: "TWA Hotel", value: "Connected to T5, €180+" },
      { label: "Nearby hotels", value: "~10 (Days Inn to Hilton)" },
      { label: "Cheapest hotel", value: "~€80 (Days Inn)" },
      { label: "Rest zones", value: "Available in most terminals" },
      { label: "AirTrain 24h", value: "Yes — connects all terminals" },
      { label: "24h food (T5)", value: "Limited after 22:00" },
    ],
    sections: [
      { heading: "TWA Hotel — the iconic option", body: "The TWA Hotel is inside the landmark TWA Flight Center at Terminal 5. Rooms are soundproofed with runway views, and the rooftop pool and observation deck are open year-round. Connected to T5 via a walkway. At €180+ it's not cheap — but it's one of the most memorable airport hotels in the world. Book months ahead — it sells out regularly." },
      { heading: "Budget and mid-range options", body: "JFK has about 10 nearby hotels — Days Inn (€80), Hampton Inn (€120), Crowne Plaza (€150), Hilton (€180). Most are a 5–10 minute shuttle ride from the terminals. The AirTrain connects to Federal Circle station where hotel shuttles pick up. All have 24h reception. Book ahead — JFK hotels fill up quickly during weather disruption." },
    ],
    tips: ["The TWA Hotel rooftop pool is open to non-guests for a day pass — worth it even if you're not staying", "Hotel shuttles pick up at Federal Circle AirTrain station — not at individual terminals", "If you're on a budget, the Days Inn is the cheapest — but it's basic"],
    relatedGuides: [
      { label: "Best Airport for Late Arrival", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Early Departure", href: "/guides/best-airport-for-midtown" },
    ],
    relatedKnowledge: [
      { label: "AirTrain JFK Guide", href: "/knowledge/airtrain-jfk-guide" },
      { label: "Sleeping at Newark", href: "/knowledge/sleeping-at-newark" },
    ],
    hubLink: { label: "New York Airport Choice Hub →", href: "/new-york/airport-choice" },
    ctaLabel: "Compare JFK vs Newark →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    lastReviewed: "July 2026",
  },
  {
    slug: "sleeping-at-newark", cityId: "new-york", category: "hotels",
    title: "Sleeping at Newark — Airport Hotels & Overnight Guide | Travelvus",
    description: "Complete guide to sleeping at Newark Airport: hotels, rest zones, and overnight tips. More limited than JFK — plan ahead.",
    headline: "Sleeping at Newark — hotels and overnight guide",
    intro: "Newark has about 6 airport hotels — the Marriott is connected to the terminal (the only true on-site option), plus nearby options including Wyndham, SpringHill Suites, and Fairfield Inn. Rest zones are limited. NJ Transit stops around 01:30 — if you arrive after that, you're staying at the airport or taking an expensive taxi to Manhattan. Plan ahead — Newark has fewer overnight options than JFK or Heathrow.",
    keyFacts: [
      { label: "On-site hotels", value: "~6" },
      { label: "Marriott", value: "Connected to terminal (€150+)" },
      { label: "Cheapest hotel", value: "~€90" },
      { label: "Rest zones", value: "Very limited" },
      { label: "Last NJ Transit", value: "~01:30" },
      { label: "24h food", value: "Minimal" },
    ],
    sections: [
      { heading: "On-site hotels", body: "The Marriott is the only hotel connected to the terminal — convenient but expensive (€150+). Wyndham, SpringHill Suites, Fairfield Inn, and a few others are a short shuttle ride away. With only 6 options, Newark hotels fill up quickly during disruption. Book ahead — especially during winter when Northeast weather causes cancellations." },
    ],
    tips: ["The Newark Marriott is the only hotel connected to the terminal — book it if you have an early flight", "If you're arriving after 01:30, pre-book a hotel — the last NJ Transit train will have departed", "Newark's rest zones are among the worst of any major US airport — don't rely on them"],
    relatedGuides: [
      { label: "Best Airport for Late Arrival", href: "/guides/best-airport-for-midtown" },
      { label: "Newark AirTrain Guide", href: "/guides/best-airport-for-midtown" },
    ],
    relatedKnowledge: [
      { label: "Sleeping at JFK", href: "/knowledge/sleeping-at-jfk" },
      { label: "Newark AirTrain Guide", href: "/knowledge/airtrain-newark-guide" },
    ],
    hubLink: { label: "New York Airport Choice Hub →", href: "/new-york/airport-choice" },
    ctaLabel: "Compare JFK vs Newark →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    lastReviewed: "July 2026",
  },
];

/* ═══════════════════════════════════════════════════════════ */
/* MASTER REGISTRY                                               */
/* ═══════════════════════════════════════════════════════════ */

export const KNOWLEDGE_REGISTRY: Record<string, KnowledgeConfig> = {};

for (const k of [...PARIS_KNOWLEDGE, ...LONDON_KNOWLEDGE, ...NY_KNOWLEDGE]) {
  KNOWLEDGE_REGISTRY[k.slug] = k;
}

export function getKnowledge(slug: string): KnowledgeConfig | undefined {
  return KNOWLEDGE_REGISTRY[slug];
}

export function getKnowledgeByCity(cityId: string): KnowledgeConfig[] {
  return Object.values(KNOWLEDGE_REGISTRY).filter((k) => k.cityId === cityId);
}

export function getAllKnowledgeSlugs(): string[] {
  return Object.keys(KNOWLEDGE_REGISTRY);
}
