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
/* PARIS GUIDES (15)                                            */
/* ═══════════════════════════════════════════════════════════ */

const PARIS_GUIDES: GuideConfig[] = [
  // Destination guides
  {
    slug: "best-airport-for-central-paris-guide", type: "destination", cityId: "paris", destinationId: "central-paris",
    title: "Best Airport for Central Paris — CDG or Orly?", description: "Which Paris airport is best for central Paris destinations like Châtelet, Louvre, and Le Marais?",
    headline: "Which airport is best for Central Paris?",
    intro: "Central Paris — Châtelet, the Louvre, Le Marais — is the heart of the city. Both CDG and Orly connect here, but the experience differs. CDG's direct RER B reaches Châtelet in 40 minutes. Orly requires the Orlyval shuttle plus RER B, taking 50 minutes and costing more. For most central Paris destinations, CDG is the better choice.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "RER B direct to Châtelet–Les Halles in 40 minutes. No shuttle, no interchange. Step-free access at the station. Cheaper transfer (€12 vs €15). More airline choice.", transferNote: "RER B direct, €12, ~40 min, 0 interchanges" },
      { code: "ORY", name: "Orly", why: "Orlyval shuttle to Antony, then RER B to Châtelet. The Orlyval premium (€9.30) pushes the transfer cost to €15. The interchange adds complexity. Only better if the airfare is significantly cheaper.", transferNote: "Orlyval → RER B, €15, ~50 min, 1 interchange" },
    ],
    transferFacts: [
      { label: "CDG → Châtelet", value: "€12", note: "RER B direct, ~40 min" },
      { label: "ORY → Châtelet", value: "€15", note: "Orlyval + RER B, ~50 min" },
      { label: "CDG transfer cost", value: "€12", note: "RER B single, no premium" },
      { label: "ORY transfer cost", value: "€15", note: "€9.30 Orlyval premium included" },
    ],
    takeaway: "CDG is the better airport for central Paris. Direct RER B, cheaper transfer, faster journey. Orly only wins if the airfare difference is more than €15 — use the Decision Engine to check.",
    ctaLabel: "Compare CDG vs ORY for Central Paris →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Montparnasse", href: "/guides/best-airport-for-montparnasse" },
      { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
      { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
    ], lastReviewed: "July 2026",
  },
  // Bercy destination
  {
    slug: "best-airport-for-bercy", type: "destination", cityId: "paris", destinationId: "bercy",
    title: "Best Airport for Bercy — CDG or Orly?", description: "Which Paris airport is best for Bercy, Gare de Lyon, and the 12e arrondissement?",
    headline: "Which airport is best for Bercy?",
    intro: "Bercy and Gare de Lyon are in eastern Paris. Neither airport has a direct connection — both require at least one change. CDG reaches Gare de Lyon via RER B to Châtelet then RER A or Metro 14 (~50 min). Orly requires Orlyval plus two changes (~65 min). CDG is the better choice for this area.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "RER B to Châtelet, then RER A or Metro 14 to Gare de Lyon — about 50 minutes. One interchange. The new Metro 14 extension makes this increasingly smooth.", transferNote: "RER B → Metro 14/RER A, €12, ~50 min, 1 interchange" },
      { code: "ORY", name: "Orly", why: "Orlyval to Antony, RER B to Châtelet, then Metro 14 to Gare de Lyon — about 65 minutes with two interchanges. The Orlyval premium adds cost and the transfer complexity makes this the less attractive option.", transferNote: "Orlyval → RER B → Metro 14, €15, ~65 min, 2 interchanges" },
    ],
    transferFacts: [
      { label: "CDG → Gare de Lyon", value: "€12", note: "RER B → Metro 14, ~50 min" },
      { label: "ORY → Gare de Lyon", value: "€15", note: "Orlyval → RER B → Metro 14, ~65 min" },
      { label: "CDG interchange count", value: "1", note: "One change at Châtelet" },
      { label: "ORY interchange count", value: "2", note: "Two changes: Antony + Châtelet" },
    ],
    takeaway: "CDG is better for Bercy/Gare de Lyon. Faster (50 min vs 65 min), cheaper (€12 vs €15), and fewer interchanges. Use the Decision Engine to confirm with your actual airfares.",
    ctaLabel: "Compare CDG vs ORY for Bercy →", ctaHref: buildHubCompareUrl("paris", "bercy"),
    relatedGuides: [
      { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris-guide" },
      { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "July 2026",
  },
  // Traveller guides
  {
    slug: "best-airport-for-business-paris", type: "traveller", cityId: "paris", travellerScenario: "business",
    title: "Best Paris Airport for Business Travellers", description: "Which Paris airport is best for business travel? Compare CDG vs Orly for speed, lounges, and La Défense access.",
    headline: "Which Paris airport is best for business travellers?",
    intro: "Business travel values speed, reliability, and proximity to business districts. CDG dominates here: direct RER to La Défense (55 min), more airline lounges, better business-class options. For La Défense specifically, CDG is 15 minutes faster and €3 cheaper on transfer.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "More business-class routes, better lounges (Star Alliance, SkyTeam), faster to La Défense (55 min), direct to Gare du Nord for Eurostar connections. The clear business-travel choice for Paris.", transferNote: "RER B direct to Gare du Nord (35 min), to La Défense (55 min)" },
      { code: "ORY", name: "Orly", why: "Primarily serves European budget airlines — fewer business-class options, fewer lounges. Transfer to La Défense takes 70 min with two changes. Only viable for domestic French business travel or if the meeting is near Montparnasse.", transferNote: "Orlyval + 2 RER changes, ~70 min to La Défense" },
    ],
    transferFacts: [
      { label: "CDG → La Défense", value: "€12", note: "RER B → RER A, ~55 min" },
      { label: "ORY → La Défense", value: "€15", note: "Orlyval → RER B → RER A, ~70 min" },
      { label: "CDG → Gare du Nord", value: "€12", note: "RER B direct, ~35 min" },
      { label: "CDG lounges", value: "8+", note: "Multiple Star Alliance + SkyTeam lounges" },
    ],
    takeaway: "CDG is the business traveller's airport. Faster transfers, more lounges, better connections. Orly only for domestic French business or Montparnasse-area meetings.",
    ctaLabel: "Compare CDG vs ORY for business →", ctaHref: buildHubCompareUrl("paris", "la-defense"),
    relatedGuides: [
      { label: "Best Airport for La Défense", href: "/guides/best-airport-for-la-defense" },
      { label: "Best Airport for Gare du Nord", href: "/guides/best-airport-for-gare-du-nord" },
      { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-backpackers-paris", type: "traveller", cityId: "paris", travellerScenario: "lowest-cost",
    title: "Best Paris Airport for Backpackers", description: "Which Paris airport is cheapest for backpackers? Budget airlines, no checked bags, and cheapest transfers compared.",
    headline: "Which Paris airport is best for backpackers?",
    intro: "Backpackers travel light — no checked bags, no seat selection, just the cheapest door-to-door journey. Orly is popular with Ryanair and easyJet. But CDG's cheaper transfer (€12 vs €15) and competitive budget fares often make it the better total deal. Here's how they stack up.",
    airports: [
      { code: "ORY", name: "Orly", why: "More budget airline routes from Orly — Ryanair, easyJet, Vueling all operate here. If you find a €30 fare, it's hard to beat. But the €15 Orlyval transfer eats into savings. For Montparnasse, Orlybus (€11) is the cheapest airport-to-Paris connection of all.", transferNote: "Orlybus €11 to Montparnasse, Orlyval+RER €15 to central" },
      { code: "CDG", name: "Charles de Gaulle", why: "CDG also has budget airline terminals (Terminal 3 for Ryanair, 2B/D for easyJet). The €12 RER B transfer is cheaper than Orly's, and there's no shuttle premium. More competition on routes means competitive fares.", transferNote: "RER B €12 direct to central Paris — no shuttle premium" },
    ],
    transferFacts: [
      { label: "Cheapest CDG transfer", value: "€12", note: "RER B to central Paris" },
      { label: "Cheapest ORY transfer", value: "€11", note: "Orlybus to Montparnasse" },
      { label: "CDG → central Paris", value: "€12", note: "RER B direct" },
      { label: "ORY → central Paris", value: "€15", note: "Orlyval premium unavoidable for central" },
    ],
    takeaway: "Orly wins for Montparnasse (Orlybus €11). CDG wins for everywhere else (RER B €12 direct). Check both on the Decision Engine — budget airline fares fluctuate, and the cheaper ticket isn't always the cheaper journey.",
    ctaLabel: "Compare cheapest CDG vs ORY →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
      { label: "Best Airport for Montparnasse", href: "/guides/best-airport-for-montparnasse" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-luxury-paris", type: "traveller", cityId: "paris", travellerScenario: "business",
    title: "Best Paris Airport for Luxury Travellers", description: "Which Paris airport offers the best premium experience? Lounges, fast-track, private transfers, and first-class arrivals.",
    headline: "Which Paris airport is best for luxury travellers?",
    intro: "Luxury travel is about experience, not cost. CDG is the clear winner: more premium lounges, better fast-track security, more airline first-class and business-class routes, and easier private transfer access. Orly serves primarily economy and budget airlines.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "CDG has dedicated first-class and business-class terminals for Air France and partner airlines. Multiple premium lounges (Air France La Première lounge is among the world's best). Fast-track security and passport control. Direct RER or chauffeured transfer to central Paris. The only choice for luxury arrivals.", transferNote: "Premium lounge access, fast-track, chauffeur transfers available" },
      { code: "ORY", name: "Orly", why: "Orly has limited premium facilities. Air France operates some business-class routes from Orly, but the lounge and fast-track offering is significantly smaller than CDG. The Orlyval shuttle is inconsistent with a luxury arrival experience.", transferNote: "Limited premium facilities, shuttle transfer required" },
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
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-early-departure-paris", type: "traveller", cityId: "paris", travellerScenario: "business",
    title: "Best Paris Airport for Early Departures", description: "Which Paris airport is best for early morning flights? RER and shuttle schedules, airport hotels, and transfer reliability.",
    headline: "Which Paris airport is best for early departures?",
    intro: "Early morning flights mean navigating Paris before the RER and Metro are running at full frequency. CDG has earlier RER B service (first train ~4:50) and more airport hotels. Orly's Orlyval doesn't start until 6:00 — too late for 7am flights. For early departures, CDG is the safer choice.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "RER B starts at ~4:50 from central Paris, arriving CDG by 5:25 — enough for 7am flights. Multiple airport hotels (Ibis, Novotel, Hilton, Sheraton) for the night before. Taxi/ride-share available 24h as backup.", transferNote: "RER B from 4:50, airport hotels from €80/night" },
      { code: "ORY", name: "Orly", why: "Orlyval shuttle starts at 6:00 — too late for flights before 8am. No direct RER access. You'll need a taxi or rideshare (€35–50) for early departures. Airport hotels exist but are limited.", transferNote: "Orlyval starts 6:00 — taxi needed for earlier flights" },
    ],
    transferFacts: [
      { label: "CDG first RER", value: "04:50", note: "From central Paris, arrives ~05:25" },
      { label: "ORY first shuttle", value: "06:00", note: "Orlyval — too late for early flights" },
      { label: "CDG airport hotels", value: "5+", note: "Ibis to Hilton on-site or nearby" },
      { label: "ORY airport hotels", value: "3", note: "Limited options, mostly mid-range" },
    ],
    takeaway: "CDG is better for early departures. Earlier RER service, more airport hotels, and 24h taxi backup. Orly requires a taxi for any flight before 8:30am.",
    ctaLabel: "Compare CDG vs ORY for early flights →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Business", href: "/guides/best-airport-for-business-paris" },
      { label: "Best Airport for Late Arrival", href: "/guides/best-airport-for-late-night-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-late-night-paris", type: "traveller", cityId: "paris", travellerScenario: "late-night",
    title: "Best Paris Airport for Late-Night Arrivals", description: "Which Paris airport is best for late-night arrivals? Transport after midnight, safety, and transfer options.",
    headline: "Which Paris airport is best for late-night arrivals?",
    intro: "Arriving late at night limits your transfer options. CDG has RER B until 00:30 and Noctilien night buses after that. Orly's Orlyval closes at 23:30, leaving only taxis and limited night buses. For late arrivals, CDG is the safer and more predictable choice.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "RER B runs until 00:30. After that, Noctilien night buses (N143, N140) serve CDG throughout the night. Taxis are available 24h with fixed fares to central Paris (€55 Right Bank, €60 Left Bank).", transferNote: "RER B until 00:30, Noctilien night buses 24h, taxi ~€55" },
      { code: "ORY", name: "Orly", why: "Orlyval closes at 23:30. After that, only the Orlybus (until 00:30 to Denfert-Rochereau) and taxis. Night bus service is limited. Taxis have fixed fares to Paris (€35 Right Bank, €40 Left Bank).", transferNote: "Orlyval closes 23:30, Orlybus until 00:30, taxi ~€35" },
    ],
    transferFacts: [
      { label: "CDG last RER", value: "00:30", note: "After that: Noctilien buses or taxi ~€55" },
      { label: "ORY last shuttle", value: "23:30", note: "After that: Orlybus until 00:30 or taxi ~€35" },
      { label: "CDG night bus", value: "24h", note: "Noctilien N143/N140, every 30 min" },
      { label: "ORY night bus", value: "Limited", note: "Fewer routes, less frequent than CDG" },
    ],
    takeaway: "CDG is better for late-night arrivals. RER B runs later (00:30 vs 23:30), night buses are more frequent, and the airport is busier and better-lit at night. Orly is quieter but riskier if your flight is delayed past 23:30.",
    ctaLabel: "Compare CDG vs ORY late-night →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Early Departure", href: "/guides/best-airport-for-early-departure-paris" },
      { label: "Best Airport for Business", href: "/guides/best-airport-for-business-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-carry-on-paris", type: "traveller", cityId: "paris", travellerScenario: "lowest-cost",
    title: "Best Paris Airport for Carry-On Only", description: "Which Paris airport wins when you travel with carry-on only? No baggage fees changes the cost comparison.",
    headline: "Which Paris airport is best for carry-on only?",
    intro: "Travelling with carry-on only changes the airport equation. Without checked baggage fees, budget airlines become genuinely cheaper. Orly's budget-airline advantage becomes real when you're not paying €25–45 for a checked bag. But CDG's cheaper transfer still matters. Here's how they compare for the carry-on traveller.",
    airports: [
      { code: "ORY", name: "Orly", why: "Budget airlines from Orly become much more competitive when you're not paying baggage fees. A €40 Ryanair fare + €15 transfer = €55 total. That's hard for CDG to beat. Orlybus to Montparnasse at €11 makes this even stronger for southern Paris.", transferNote: "Budget fares from €30–50, Orlybus €11 to Montparnasse" },
      { code: "CDG", name: "Charles de Gaulle", why: "CDG also has budget terminals with competitive carry-on-only fares. The cheaper transfer (€12) and direct RER keep it competitive. More airline choice means more chances to find a deal.", transferNote: "RER B €12 direct, budget terminals T3 and 2B/D" },
    ],
    transferFacts: [
      { label: "ORY budget fare range", value: "€30–60", note: "Ryanair, easyJet, Vueling — carry-on included" },
      { label: "CDG budget fare range", value: "€40–80", note: "easyJet, Ryanair, Norwegian — carry-on included" },
      { label: "ORY + transfer total", value: "€41–75", note: "Airfare + €11–15 transfer" },
      { label: "CDG + transfer total", value: "€52–92", note: "Airfare + €12 transfer" },
    ],
    takeaway: "Orly often wins for carry-on-only travellers — especially to Montparnasse (Orlybus €11). But check CDG too — the fare gap varies. The Decision Engine shows real totals for your specific travel date.",
    ctaLabel: "Compare carry-on CDG vs ORY →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Cheapest Paris Airport", href: "/guides/best-airport-for-cheapest-paris" },
      { label: "Best Airport for Backpackers", href: "/guides/best-airport-for-backpackers-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-first-time-paris", type: "traveller", cityId: "paris", travellerScenario: "family",
    title: "Best Paris Airport for First-Time Visitors", description: "Which Paris airport is easiest for first-time visitors? Direct trains, clear signage, and stress-free arrival compared.",
    headline: "Which Paris airport is best for first-time visitors?",
    intro: "First time in Paris? You want the simplest arrival possible. CDG offers a direct RER B train to central Paris — no changes, no shuttle transfers, clear signage in English and French. Orly requires figuring out the Orlyval shuttle plus an RER change, which can be confusing after a long flight. For first-timers, CDG is the friendlier introduction to Paris.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "Follow the 'RER B — Paris by train' signs. Buy a €12 ticket at the blue machines (English available). Board the train. 40 minutes later you're at Châtelet in the heart of Paris. No changes. Simple, predictable, well-signed.", transferNote: "Direct RER B, €12, clear English/French signage, 40 min" },
      { code: "ORY", name: "Orly", why: "Find the Orlyval platform. Buy a €15 ticket. Ride the shuttle to Antony. Get off. Find the RER B platform. Buy another ticket or validate your transfer. Board the RER to Paris. It works — but it's more steps, more confusing, and harder with jet lag.", transferNote: "Orlyval shuttle + RER B change, €15, more complex for first-timers" },
    ],
    transferFacts: [
      { label: "CDG transfer steps", value: "1", note: "Buy ticket → board RER B → arrive Paris" },
      { label: "ORY transfer steps", value: "3", note: "Orlyval → buy/validate → RER B → arrive Paris" },
      { label: "CDG signage", value: "Bilingual", note: "English/French throughout" },
      { label: "ORY signage", value: "Bilingual", note: "English/French but more complex routing" },
    ],
    takeaway: "CDG is the better airport for first-time visitors. Direct RER B, simpler transfer, clearer signage. The €12 fare and single train ride make your first Paris arrival stress-free. Orly is manageable but adds unnecessary complexity for newcomers.",
    ctaLabel: "Compare CDG vs ORY for first-timers →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Central Paris", href: "/guides/best-airport-for-central-paris-guide" },
      { label: "Best Airport for Families", href: "/guides/best-airport-for-families-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-airport-hotel-paris", type: "traveller", cityId: "paris", travellerScenario: "business",
    title: "Best Paris Airport for Airport Hotel Stays", description: "Which Paris airport has better airport hotels? Compare CDG vs Orly for overnight stays before early flights or after late arrivals.",
    headline: "Which Paris airport is best for airport hotel stays?",
    intro: "Staying at an airport hotel before an early flight or after a late arrival? CDG has significantly more options — from Ibis Budget to Sheraton and Hilton, many connected to terminals by walkway or free shuttle. Orly has fewer hotels, mostly mid-range, and fewer are directly connected to terminals.",
    airports: [
      { code: "CDG", name: "Charles de Gaulle", why: "Over 20 airport hotels across all price points. The Sheraton is inside Terminal 2. Ibis, Novotel, Hilton, CitizenM, and Pullman are connected by free CDGVal shuttle. Options from €60 to €300+.", transferNote: "20+ hotels, many connected by CDGVal free shuttle" },
      { code: "ORY", name: "Orly", why: "Fewer than 10 airport hotels, mostly mid-range (Ibis, Novotel, Mercure). Only a few are directly connected to terminals. Options from €70 to €180. Adequate but limited compared to CDG.", transferNote: "<10 hotels, fewer terminal-connected options" },
    ],
    transferFacts: [
      { label: "CDG airport hotels", value: "20+", note: "€60–300+, Sheraton inside T2" },
      { label: "ORY airport hotels", value: "<10", note: "€70–180, mostly mid-range" },
      { label: "CDG hotel shuttle", value: "CDGVal", note: "Free, connects all terminals + hotels" },
      { label: "ORY hotel shuttle", value: "Limited", note: "Fewer hotels, less consistent shuttles" },
    ],
    takeaway: "CDG is better for airport hotel stays — more choice, better price range, and the free CDGVal shuttle connects everything. If you need an airport hotel, CDG is the clear winner.",
    ctaLabel: "Compare CDG vs ORY →", ctaHref: buildHubCompareUrl("paris", "central-paris"),
    relatedGuides: [
      { label: "Best Airport for Early Departure", href: "/guides/best-airport-for-early-departure-paris" },
      { label: "Best Airport for Late Arrival", href: "/guides/best-airport-for-late-night-paris" },
      { label: "CDG vs Orly", href: "/guides/cdg-vs-orly" },
    ], lastReviewed: "July 2026",
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
    intro: "Paddington is in west London — and Heathrow has a clear advantage. The Heathrow Express reaches Paddington in 15 minutes direct. The Elizabeth Line does it in 28 minutes for less. Stansted requires a 75-minute cross-London journey with two changes. For Paddington, Heathrow is the overwhelming winner.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "Heathrow Express direct to Paddington in 15 minutes — the fastest airport-to-London connection of any airport. Elizabeth Line takes 28 minutes for half the price. Both arrive directly at Paddington station with step-free access.", transferNote: "Heathrow Express €29/15min or Elizabeth Line €18/28min, direct" },
      { code: "STN", name: "Stansted", why: "Stansted Express to Liverpool Street, then Circle/Hammersmith Line to Paddington — about 75 minutes with two changes. Much longer and more complex. Only viable if the airfare is dramatically cheaper.", transferNote: "Stansted Express + Tube, ~75 min, 2 interchanges" },
    ],
    transferFacts: [
      { label: "LHR → Paddington (Express)", value: "€29", note: "Heathrow Express direct, 15 min" },
      { label: "LHR → Paddington (Elizabeth)", value: "€18", note: "Elizabeth Line direct, 28 min" },
      { label: "STN → Paddington", value: "€35", note: "Stansted Express + Tube, 75 min" },
      { label: "LHR time advantage", value: "60 min", note: "Heathrow is 60 min faster to Paddington" },
    ],
    takeaway: "Heathrow is the clear choice for Paddington. 15–28 minutes direct vs 75 minutes with changes. Unless the Stansted airfare is dramatically cheaper, Heathrow wins every time.",
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "paddington"),
    relatedGuides: [
      { label: "Best Airport for Westminster", href: "/guides/best-airport-for-westminster" },
      { label: "Best Airport for Canary Wharf", href: "/guides/best-airport-for-canary-wharf" },
      { label: "Heathrow vs Gatwick", href: "/guides/heathrow-vs-gatwick" },
    ], lastReviewed: "July 2026",
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
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-canary-wharf", type: "destination", cityId: "london", destinationId: "canary-wharf",
    title: "Best Airport for Canary Wharf — Heathrow or Stansted?", description: "Which London airport is best for Canary Wharf? East London's business district has different airport dynamics.",
    headline: "Which airport is best for Canary Wharf?",
    intro: "Canary Wharf is in east London — and here, Stansted becomes competitive. Heathrow requires a long cross-London journey (Elizabeth Line to Canary Wharf, ~60 min). Stansted Express to Liverpool Street then DLR or Tube east reaches Canary Wharf in ~85 min. For east London, the Heathrow advantage narrows considerably.",
    airports: [
      { code: "LHR", name: "Heathrow", why: "Elizabeth Line direct to Canary Wharf in ~48 minutes. No changes, modern trains, step-free access. The Elizabeth Line has transformed this connection — it's now competitive even for east London.", transferNote: "Elizabeth Line direct, €22, ~48 min, 0 interchanges" },
      { code: "STN", name: "Stansted", why: "Stansted Express to Liverpool Street, then DLR or Jubilee Line to Canary Wharf. About 85 minutes with one change. Stansted is geographically closer to east London, but the indirect rail connection eats into that advantage.", transferNote: "Stansted Express + DLR/Jubilee, €35, ~85 min, 1 interchange" },
    ],
    transferFacts: [
      { label: "LHR → Canary Wharf", value: "€22", note: "Elizabeth Line direct, ~48 min" },
      { label: "STN → Canary Wharf", value: "€35", note: "Stansted Express + DLR, ~85 min" },
      { label: "LHR interchange count", value: "0", note: "Elizabeth Line direct — no changes" },
      { label: "STN interchange count", value: "1", note: "Change at Liverpool Street" },
    ],
    takeaway: "Heathrow still wins for Canary Wharf — the Elizabeth Line's direct connection (48 min) beats Stansted's longer journey (85 min). But the gap is smaller than for west London. Use the Decision Engine to check if a cheaper Stansted fare changes the picture.",
    ctaLabel: "Compare Heathrow vs Stansted →", ctaHref: buildHubCompareUrl("london", "canary-wharf"),
    relatedGuides: [
      { label: "Best Airport for Westminster", href: "/guides/best-airport-for-westminster" },
      { label: "Best Airport for Paddington", href: "/guides/best-airport-for-paddington" },
      { label: "Fastest London Airport", href: "/guides/fastest-london-airport" },
    ], lastReviewed: "July 2026",
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
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-cheapest-london", type: "traveller", cityId: "london", travellerScenario: "lowest-cost",
    title: "Cheapest London Airport — Heathrow or Stansted?", description: "Which London airport is actually cheapest? Real trip cost comparison including baggage and transfers.",
    headline: "Which London airport is actually cheapest?",
    intro: "Stansted's €58 ticket looks much cheaper than Heathrow's €126. But real trip cost tells a different story. After adding baggage (€45), seat selection (€12), and the longer transfer (€32), Stansted's advantage narrows significantly. For some destinations, they're nearly tied. Here's the real comparison.",
    airports: [
      { code: "STN", name: "Stansted", why: "Lower ticket prices (€58+) but higher transfer costs (€28–35) and baggage fees (€45). The real cost advantage depends heavily on your destination and whether you need a checked bag.", transferNote: "Ticket €58+ + bag €45 + transfer €28–35 = real cost from €131" },
      { code: "LHR", name: "Heathrow", why: "Higher ticket prices (€126+) but lower transfer costs (€18–29) and baggage often included. For central London, the real cost gap is often smaller than the ticket prices suggest.", transferNote: "Ticket €126+ + bag often included + transfer €18–29 = real cost from €156" },
    ],
    transferFacts: [
      { label: "STN ticket + bag + transfer", value: "€131+", note: "Real cost for 1 person with checked bag" },
      { label: "LHR ticket + bag + transfer", value: "€156+", note: "Real cost for 1 person (bag often included)" },
      { label: "STN cheapest total", value: "€86+", note: "Carry-on only, no bag fee" },
      { label: "LHR cheapest total", value: "€144+", note: "Carry-on only" },
    ],
    takeaway: "Stansted is usually cheaper — but the gap is smaller than it looks. With a checked bag, Stansted saves ~€25. Without one, it saves ~€58. But the longer transfer (70+ min vs 50 min) and late-night constraints mean 'cheapest' isn't always 'best value.' Use the Decision Engine.",
    ctaLabel: "Compare real cost LHR vs STN →", ctaHref: buildHubCompareUrl("london", "westminster"),
    relatedGuides: [
      { label: "Best Airport for Families", href: "/guides/best-airport-for-families-london" },
      { label: "Fastest London Airport", href: "/guides/fastest-london-airport" },
      { label: "Heathrow vs Gatwick", href: "/guides/heathrow-vs-gatwick" },
    ], lastReviewed: "July 2026",
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
    intro: "Midtown Manhattan is New York's core — Times Square, Grand Central, Rockefeller Center. Newark reaches Penn Station in ~40 minutes via NJ Transit — faster than JFK's AirTrain + LIRR (~50 min). But JFK has more airline choice and can be cheaper. Here's the breakdown.",
    airports: [
      { code: "EWR", name: "Newark", why: "NJ Transit from Newark Airport to Penn Station takes 30–40 minutes. From Penn Station you're in the heart of Midtown. Total transfer ~40 min — the fastest airport-to-Midtown connection. United Airlines hub means lots of routes.", transferNote: "AirTrain + NJ Transit, €20, ~40 min to Midtown" },
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica, then LIRR to Grand Central — about 50 minutes. More airline choice than Newark, often cheaper international fares. The new LIRR Grand Central connection has improved this route significantly.", transferNote: "AirTrain + LIRR to Grand Central, €16, ~50 min" },
    ],
    transferFacts: [
      { label: "EWR → Midtown", value: "€20", note: "AirTrain + NJ Transit, ~40 min" },
      { label: "JFK → Midtown", value: "€16", note: "AirTrain + LIRR to Grand Central, ~50 min" },
      { label: "EWR time advantage", value: "10 min", note: "Newark is ~10 min faster to Midtown" },
      { label: "JFK cost advantage", value: "€4", note: "JFK transfer is €4 cheaper" },
    ],
    takeaway: "Newark is faster to Midtown (40 min vs 50 min). JFK is slightly cheaper on transfer (€16 vs €20). The difference is small — your airline and airfare should decide. Use the Decision Engine to compare real totals.",
    ctaLabel: "Compare JFK vs Newark for Midtown →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Lower Manhattan", href: "/guides/best-airport-for-lower-manhattan" },
      { label: "Best Airport for Brooklyn", href: "/guides/best-airport-for-downtown-brooklyn" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-lower-manhattan", type: "destination", cityId: "new-york", destinationId: "lower-manhattan",
    title: "Best Airport for Lower Manhattan — JFK or Newark?", description: "Which New York airport is best for Lower Manhattan? Greenwich Village, SoHo, East Village airport comparison.",
    headline: "Which airport is best for Lower Manhattan?",
    intro: "Lower Manhattan — Greenwich Village, SoHo, the East Village — is served by both airports, but neither has a direct connection. Newark reaches Penn Station then requires a downtown subway (50 min total). JFK takes 60 min via AirTrain + LIRR + subway. Newark has a slight edge.",
    airports: [
      { code: "EWR", name: "Newark", why: "NJ Transit to Penn Station, then downtown subway (1/2/3 lines) to Lower Manhattan — about 50 minutes total. Works reliably. Penn Station to Lower Manhattan is a short subway ride.", transferNote: "AirTrain + NJ Transit + subway, €20, ~50 min" },
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica, LIRR to Penn Station, then downtown subway — about 60 minutes. More changes than Newark. The LIRR connection adds reliability but also time.", transferNote: "AirTrain + LIRR + subway, €16, ~60 min" },
    ],
    transferFacts: [
      { label: "EWR → Lower Manhattan", value: "€20", note: "NJ Transit + subway, ~50 min" },
      { label: "JFK → Lower Manhattan", value: "€16", note: "AirTrain + LIRR + subway, ~60 min" },
      { label: "EWR time advantage", value: "10 min", note: "Faster by about 10 minutes" },
      { label: "Both require", value: "2 changes", note: "Neither airport is direct to Lower Manhattan" },
    ],
    takeaway: "Newark has a slight edge for Lower Manhattan — about 10 minutes faster. But neither airport has a great connection. Check airfares on the Decision Engine — the fare difference may matter more than the time difference.",
    ctaLabel: "Compare JFK vs Newark for Lower Manhattan →", ctaHref: buildHubCompareUrl("new-york", "lower-manhattan"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Financial District", href: "/guides/best-airport-for-financial-district" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-downtown-brooklyn", type: "destination", cityId: "new-york", destinationId: "brooklyn-downtown",
    title: "Best Airport for Downtown Brooklyn — JFK or Newark?", description: "Which New York airport is best for Downtown Brooklyn? JFK is geographically closer and has a direct LIRR connection.",
    headline: "Which airport is best for Downtown Brooklyn?",
    intro: "Downtown Brooklyn is JFK territory. AirTrain + LIRR reaches Atlantic Terminal in 40 minutes direct — the best airport-to-Brooklyn connection in New York. Newark requires NJ Transit to Penn Station then a subway back to Brooklyn (60 min). For Brooklyn, JFK wins clearly.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica, then LIRR direct to Atlantic Terminal–Barclays Center in Downtown Brooklyn. 40 minutes, one change. This is the fastest and most convenient Brooklyn airport connection available.", transferNote: "AirTrain + LIRR direct, €14, ~40 min to Atlantic Terminal" },
      { code: "EWR", name: "Newark", why: "NJ Transit to Penn Station, then 2/3/4/5 subway to Atlantic Avenue. About 60 minutes. It works but feels like going into Manhattan just to come back out to Brooklyn. The extra distance and subway change add time and complexity.", transferNote: "AirTrain + NJ Transit + subway, €20, ~60 min" },
    ],
    transferFacts: [
      { label: "JFK → Downtown Brooklyn", value: "€14", note: "AirTrain + LIRR direct to Atlantic Terminal, ~40 min" },
      { label: "EWR → Downtown Brooklyn", value: "€20", note: "NJ Transit + subway, ~60 min" },
      { label: "JFK time advantage", value: "20 min", note: "JFK is 20 min faster to Brooklyn" },
      { label: "JFK cost advantage", value: "€6", note: "JFK is €6 cheaper on transfer" },
    ],
    takeaway: "JFK is the clear winner for Downtown Brooklyn. Faster (40 min vs 60 min) and cheaper (€14 vs €20). The direct LIRR connection to Atlantic Terminal makes JFK the obvious Brooklyn airport.",
    ctaLabel: "Compare JFK vs Newark for Brooklyn →", ctaHref: buildHubCompareUrl("new-york", "brooklyn-downtown"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for LIC", href: "/guides/best-airport-for-lic" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-lic", type: "destination", cityId: "new-york", destinationId: "long-island-city",
    title: "Best Airport for Long Island City — JFK or Newark?", description: "Which New York airport is best for Long Island City? JFK is closer with a direct subway connection.",
    headline: "Which airport is best for Long Island City?",
    intro: "Long Island City is in Queens — just across from Manhattan. JFK is geographically closer and has a direct E subway connection to Court Square (45 min). Newark requires NJ Transit to Penn Station then the E subway back to Queens (60 min). JFK wins clearly for LIC.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica, then E subway direct to Court Square in LIC. 45 minutes, one change. The E line runs 24/7. This is the most convenient airport connection for LIC and the Queens waterfront.", transferNote: "AirTrain + E subway direct, €11, ~45 min" },
      { code: "EWR", name: "Newark", why: "NJ Transit to Penn Station, then E subway back east to Court Square. About 60 minutes. The extra distance and backtracking make Newark significantly less convenient for Queens destinations.", transferNote: "AirTrain + NJ Transit + E subway, €20, ~60 min" },
    ],
    transferFacts: [
      { label: "JFK → LIC", value: "€11", note: "AirTrain + E subway direct, ~45 min" },
      { label: "EWR → LIC", value: "€20", note: "NJ Transit + E subway, ~60 min" },
      { label: "JFK is €9 cheaper", value: "€11 vs €20", note: "Almost half the transfer cost" },
      { label: "JFK is 15 min faster", value: "45 vs 60 min", note: "No Manhattan backtracking needed" },
    ],
    takeaway: "JFK is the clear winner for Long Island City. Cheaper (€11 vs €20), faster (45 vs 60 min), and a direct subway connection from Jamaica. Newark only makes sense if the airfare difference is very large.",
    ctaLabel: "Compare JFK vs Newark for LIC →", ctaHref: buildHubCompareUrl("new-york", "long-island-city"),
    relatedGuides: [
      { label: "Best Airport for Brooklyn", href: "/guides/best-airport-for-downtown-brooklyn" },
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "July 2026",
  },
  {
    slug: "best-airport-for-families-ny", type: "traveller", cityId: "new-york", travellerScenario: "family",
    title: "Best New York Airport for Families", description: "Which New York airport is best for families? Direct trains, step-free access, and baggage costs compared.",
    headline: "Which New York airport is best for families?",
    intro: "Flying into New York with kids and luggage? Both JFK and Newark have their strengths. JFK's AirTrain + LIRR to Grand Central is step-free and has luggage space. Newark's NJ Transit to Penn Station is also step-free but busier. Here's how they compare for families.",
    airports: [
      { code: "JFK", name: "JFK", why: "AirTrain to Jamaica is step-free. LIRR to Grand Central or Penn Station has dedicated luggage areas. Journey takes 50 min to Midtown. JFK terminals have good family facilities — play areas in T4 and T5, family restrooms throughout.", transferNote: "AirTrain + LIRR, €16, ~50 min, step-free, luggage space" },
      { code: "EWR", name: "Newark", why: "AirTrain to Newark Liberty Station, then NJ Transit to Penn Station. About 40 min — faster than JFK. Penn Station can be overwhelming with children during rush hour. NJ Transit trains have luggage racks but can be crowded.", transferNote: "AirTrain + NJ Transit, €20, ~40 min, step-free, can be crowded" },
    ],
    transferFacts: [
      { label: "JFK → Midtown", value: "€16", note: "AirTrain + LIRR, step-free, luggage space" },
      { label: "EWR → Midtown", value: "€20", note: "AirTrain + NJ Transit, step-free, faster" },
      { label: "JFK family facilities", value: "Good", note: "Play areas in T4/T5, family restrooms" },
      { label: "EWR family facilities", value: "Adequate", note: "Standard facilities, fewer dedicated family areas" },
    ],
    takeaway: "Newark is slightly faster (40 min vs 50 min). JFK has better terminal facilities for families and a less crowded LIRR experience. The difference is small. Choose based on airfare and airline — use the Decision Engine.",
    ctaLabel: "Compare with family baggage →", ctaHref: buildHubCompareUrl("new-york", "midtown"),
    relatedGuides: [
      { label: "Best Airport for Midtown", href: "/guides/best-airport-for-midtown" },
      { label: "Best Airport for Brooklyn", href: "/guides/best-airport-for-downtown-brooklyn" },
      { label: "JFK vs Newark", href: "/guides/jfk-vs-newark" },
    ], lastReviewed: "July 2026",
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
