#!/usr/bin/env python3
"""Phase 89.2 — Mass migration of 13 remaining legacy articles."""
import re, os

ARTICLES = {
    "aaa-travel": {
        "category": "Travel Services Guide",
        "readingTime": "5 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "Discover AAA Travel's exclusive member discounts, vacation packages, and travel planning services.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "AAA Travel offers members exclusive discounts on flights, hotels and packages.",
            "Membership includes roadside assistance alongside travel booking benefits.",
            "AAA travel agents provide personalised trip planning at no extra cost.",
            "Cruise and tour packages through AAA often include member-only perks.",
        ],
        "ctaText": "Found a deal on AAA? Compare the real journey cost before you book.",
        "ctaLink": "/#compare",
        "ctaHint": "Ticket price is just the start. Baggage, transfers and time change the total.",
        "methodologyText": "Travelvus compares complete journeys — ticket, baggage, transfers and time. Once you find a fare through AAA Travel, our engine reveals which option really wins on total cost.",
        "trustNote": "AAA membership benefits and discounts vary by region. Verify current offers before booking.",
        "related": [
            {"title": "Find Affordable Kayak Flights", "description": "Compare 400+ airlines with Kayak's flight search engine.", "href": "/kayak-flights", "label": "Related Guide"},
            {"title": "Costco Vacation Deals", "description": "Uncover the best travel packages and discounts through Costco.", "href": "/costco-vacation", "label": "Related Guide"},
        ],
    },
    "bart-trip-planner": {
        "category": "Transit Guide",
        "readingTime": "4 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "Navigate the Bay Area Rapid Transit system — routes, fares, schedules and tips for seamless travel across San Francisco and the East Bay.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "BART connects San Francisco, Oakland, Berkeley and Bay Area suburbs.",
            "Fares are distance-based; Clipper card offers the best value.",
            "Trains run from early morning until midnight on most lines.",
            "BART connects directly to SFO and OAK airports.",
        ],
        "ctaText": "Flying into the Bay Area? Compare airport transfer costs before you land.",
        "ctaLink": "/london-airports",
        "ctaHint": "SFO and OAK have different BART connections and costs.",
        "methodologyText": "Travelvus calculates complete journey costs including airport transfers. Your choice of airport and transit connection can change the real trip cost significantly.",
        "related": [
            {"title": "MTA Trip Planner Guide", "description": "Navigate NYC's transit system with the MTA trip planner.", "href": "/mta-trip-planner", "label": "Related Guide"},
            {"title": "TriMet Trip Planner", "description": "Plan your journey across Portland's transit network.", "href": "/trimet-trip-planner", "label": "Related Guide"},
        ],
    },
    "costco-vacation": {
        "category": "Travel Deals Guide",
        "readingTime": "4 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "How Costco Travel works, what packages are available, and whether membership travel deals genuinely save you money.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "Costco Travel offers members exclusive vacation packages and cruise deals.",
            "Membership is required to access Costco Travel pricing.",
            "Rental car discounts through Costco often beat public rates.",
            "Package deals bundle flights, hotels and car rentals at competitive prices.",
        ],
        "ctaText": "Found a Costco Travel deal? Compare the real journey cost before you book.",
        "ctaLink": "/#compare",
        "ctaHint": "A cheap package price doesn't always mean the best journey value.",
        "methodologyText": "Travelvus adds baggage, transfers and door-to-door time to any fare. Even Costco package deals deserve a real-cost comparison before booking.",
        "trustNote": "Costco Travel pricing requires active membership. Deals change frequently.",
        "related": [
            {"title": "Expedia TAAP Guide", "description": "Boost your travel agency with Expedia's agent platform.", "href": "/expedia-taap", "label": "Related Guide"},
            {"title": "AAA Travel Guide", "description": "Explore AAA Travel's exclusive member discounts and deals.", "href": "/aaa-travel", "label": "Related Guide"},
        ],
    },
    "defense-travel-system": {
        "category": "Government Travel Guide",
        "readingTime": "5 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "How the Defense Travel System works for US military personnel — booking, authorizations, vouchers and reimbursement.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "DTS is the official travel booking system for US Department of Defense personnel.",
            "All official travel must be authorised through DTS before booking.",
            "The system handles flights, lodging and rental cars in one platform.",
            "Vouchers and reimbursements are processed through DTS after travel.",
        ],
        "ctaText": "Travelling on orders? Still compare the real journey before you go.",
        "ctaLink": "/#compare",
        "ctaHint": "Even government-rate travel has hidden time and transfer costs.",
        "methodologyText": "Travelvus compares complete journeys regardless of how you booked. Government travel rates may save money but the airport, transfer and total time still matter.",
        "related": [
            {"title": "TSA PreCheck Guide", "description": "Everything about TSA PreCheck enrollment, pricing and benefits.", "href": "/tsa-precheck-cost", "label": "Related Guide"},
            {"title": "Global Entry Guide", "description": "Unlock global travel efficiency with expedited customs screening.", "href": "/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide", "label": "Related Guide"},
        ],
    },
    "expedia-taap": {
        "category": "Travel Industry Guide",
        "readingTime": "4 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "How Expedia's Travel Agent Affiliate Programme works — commission rates, booking tools, and benefits for travel professionals.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "Expedia TAAP gives travel agents access to Expedia's full inventory.",
            "Agents earn commission on flights, hotels, packages and activities.",
            "The platform includes agent-only rates and promotional fares.",
            "Booking tools and reporting dashboards support agency operations.",
        ],
        "ctaText": "Booking for a client? Compare the real journey cost before confirming.",
        "ctaLink": "/#compare",
        "ctaHint": "The cheapest fare on Expedia may not be the cheapest complete journey.",
        "methodologyText": "Travelvus calculates complete journey costs. Whether you book through Expedia TAAP or directly, baggage, transfers and time determine the real cost.",
        "trustNote": "Expedia TAAP commission rates and availability vary by market. Verify current terms.",
        "related": [
            {"title": "Costco Vacation Deals", "description": "Uncover the best travel packages and discounts through Costco.", "href": "/costco-vacation", "label": "Related Guide"},
            {"title": "WeGo Flight Guide", "description": "Compare over 800 European flight providers and save up to 30%.", "href": "/wego-flight", "label": "Related Guide"},
        ],
    },
    "irctc-train-ticket-booking": {
        "category": "Transport Booking Guide",
        "readingTime": "5 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "How to book train tickets through IRCTC — registration, Tatkal bookings, waiting lists and online payment for Indian Railways.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "IRCTC is the official online booking platform for Indian Railways.",
            "Tatkal tickets open one day before travel for last-minute bookings.",
            "Waiting list tickets are confirmed based on cancellations.",
            "Online payment supports UPI, cards and net banking.",
        ],
        "ctaText": "Planning an Indian rail journey? Compare total travel time and cost.",
        "ctaLink": "/#compare",
        "ctaHint": "Train class, connections and transfer time affect the real journey.",
        "methodologyText": "Travelvus helps you compare complete journeys — whether by train or plane. Door-to-door time and cost often tell a different story than the ticket price.",
        "related": [
            {"title": "VRL Bus Booking Guide", "description": "Book bus tickets online with VRL's convenient platform.", "href": "/vrl-bus-booking", "label": "Related Guide"},
            {"title": "WeGo Flight Guide", "description": "Compare over 800 European flight providers.", "href": "/wego-flight", "label": "Related Guide"},
        ],
    },
    "mta-trip-planner": {
        "category": "Transit Guide",
        "readingTime": "4 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "Navigate New York City's subway, bus and rail network with the MTA trip planner — routes, fares and real-time service updates.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "The MTA trip planner covers subway, bus, LIRR and Metro-North.",
            "OMNY contactless payment works across all subway and bus routes.",
            "Real-time service updates help you avoid delays and reroutes.",
            "The flat subway fare makes NYC one of the most predictable transit systems.",
        ],
        "ctaText": "Flying into NYC? Compare airport transfer costs before you land.",
        "ctaLink": "/london-airports",
        "ctaHint": "JFK, LaGuardia and Newark have very different transit connections.",
        "methodologyText": "Travelvus calculates complete journey costs including airport transfers. The airport you choose and how you get to the city changes the real trip cost.",
        "related": [
            {"title": "BART Trip Planner Guide", "description": "Navigate the Bay Area with BART's transit system.", "href": "/bart-trip-planner", "label": "Related Guide"},
            {"title": "TriMet Trip Planner", "description": "Plan your journey across Portland's transit network.", "href": "/trimet-trip-planner", "label": "Related Guide"},
        ],
    },
    "top-rated-tourists-attractions-in-rome": {
        "category": "Destination Guide",
        "readingTime": "4 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "The 10 must-see attractions in Rome — from the Colosseum to the Vatican, with practical tips for visiting each one.",
        "summaryTitle": "The quick answer",
        "summaryPoints": [
            "The Colosseum, Roman Forum and Vatican Museums top the must-see list.",
            "Book skip-the-line tickets in advance for major attractions.",
            "Many sites are walkable from the historic centre.",
            "The Roma Pass covers public transport and offers attraction discounts.",
        ],
        "ctaText": "Flying to Rome? Compare the real journey cost before you book.",
        "ctaLink": "/#compare",
        "ctaHint": "Fiumicino and Ciampino airports have very different transfer costs.",
        "methodologyText": "Travelvus compares complete journeys — ticket, baggage, airport transfers and time. Your choice of Rome airport changes the real trip cost by €30 or more.",
        "related": [
            {"title": "Interrailing Europe Guide", "description": "Explore Europe by train with the ultimate interrailing guide.", "href": "/ultimate-guide-to-interrailing-explore-europe-by-train-with-ease", "label": "Related Guide"},
            {"title": "Global Entry Guide", "description": "Speed through US customs with Global Entry.", "href": "/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide", "label": "Related Guide"},
        ],
    },
    "trimet-trip-planner": {
        "category": "Transit Guide",
        "readingTime": "4 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "Plan your journey across Portland with TriMet — MAX light rail, buses, WES commuter rail and the Portland Streetcar.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "TriMet operates MAX light rail, buses and WES commuter rail in the Portland area.",
            "The Hop Fastpass card works across all TriMet services.",
            "MAX Red Line connects directly to Portland International Airport (PDX).",
            "Real-time arrival tracking is available through the TriMet app.",
        ],
        "ctaText": "Flying into Portland? Compare airport transfer costs before you land.",
        "ctaLink": "/london-airports",
        "ctaHint": "PDX is directly served by MAX Red Line light rail.",
        "methodologyText": "Travelvus calculates complete journey costs including airport transfers. Even a well-connected airport like PDX has costs and time that affect the total trip value.",
        "related": [
            {"title": "BART Trip Planner Guide", "description": "Navigate the Bay Area with BART's transit system.", "href": "/bart-trip-planner", "label": "Related Guide"},
            {"title": "MTA Trip Planner Guide", "description": "Navigate NYC's transit system with the MTA trip planner.", "href": "/mta-trip-planner", "label": "Related Guide"},
        ],
    },
    "tsa-lock": {
        "category": "Travel Gear Guide",
        "readingTime": "3 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "Everything about TSA-approved luggage locks — how they work, which ones to buy, and why they matter for US air travel.",
        "summaryTitle": "The quick answer",
        "summaryPoints": [
            "TSA-approved locks allow security officers to open your bag without cutting the lock.",
            "Look for the red diamond logo to confirm a lock is TSA-recognised.",
            "TSA locks are recommended for checked baggage on US flights.",
            "Combination and keyed versions are available from multiple brands.",
        ],
        "ctaText": "Packing for a US trip? Make sure you're comparing the full journey cost.",
        "ctaLink": "/#compare",
        "ctaHint": "Baggage fees, airport transfers and time all affect your real trip cost.",
        "methodologyText": "Travelvus calculates complete journey costs. Your baggage choices — checked or carry-on — affect both the fare and the door-to-door experience.",
        "related": [
            {"title": "TSA PreCheck Guide", "description": "Everything about TSA PreCheck enrollment, pricing and benefits.", "href": "/tsa-precheck-cost", "label": "Related Guide"},
            {"title": "Global Entry Guide", "description": "Unlock global travel efficiency with expedited customs screening.", "href": "/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide", "label": "Related Guide"},
        ],
    },
    "ultimate-guide-to-interrailing-explore-europe-by-train-with-ease": {
        "category": "Rail Travel Guide",
        "readingTime": "4 min",
        "lastReviewed": "Jul 2026",
        "heroImage": "",  # No hero image
        "subtitle": "How Interrail passes work, which pass to choose, and how to plan a multi-country European rail adventure.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "Interrail passes cover train travel across 33 European countries.",
            "Choose between continuous passes and flexible day passes.",
            "High-speed and night trains often require seat reservations.",
            "A well-planned route saves both money and travel time.",
        ],
        "ctaText": "Planning a European rail trip? Compare total journey time and cost.",
        "ctaLink": "/#compare",
        "ctaHint": "Trains vs flights — the real time and cost comparison often surprises travellers.",
        "methodologyText": "Travelvus compares complete journeys — whether by train or plane. Door-to-door time, transfers and total cost reveal which option really wins.",
        "related": [
            {"title": "Rome Attractions Guide", "description": "The 10 must-see attractions in Rome with practical tips.", "href": "/top-rated-tourists-attractions-in-rome", "label": "Related Guide"},
            {"title": "Oyster Card London Guide", "description": "Navigate London's transport system with the Oyster Card.", "href": "/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system", "label": "Related Guide"},
        ],
    },
    "unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide": {
        "category": "Airport Security Guide",
        "readingTime": "3 min",
        "lastReviewed": "Jul 2026",
        "heroImage": "",  # No hero image
        "subtitle": "How Global Entry works, who qualifies, the application process, and whether it is worth the cost for international travellers.",
        "summaryTitle": "The quick answer",
        "summaryPoints": [
            "Global Entry provides expedited US customs screening for pre-approved travellers.",
            "The programme costs $100 for a 5-year membership.",
            "TSA PreCheck is included with Global Entry membership.",
            "Applications require an in-person interview at an enrollment centre.",
        ],
        "ctaText": "Flying internationally? Compare the real journey cost before you book.",
        "ctaLink": "/#compare",
        "ctaHint": "Customs wait time is just one part of the door-to-door journey.",
        "methodologyText": "Travelvus calculates complete journey costs — ticket, baggage, transfers and time. Global Entry saves time at customs but does not change the airport transfer cost.",
        "trustNote": "Global Entry fees and requirements sourced from cbp.gov. Verify current pricing and eligibility before applying.",
        "related": [
            {"title": "TSA PreCheck Guide", "description": "Everything about TSA PreCheck enrollment, pricing and benefits.", "href": "/tsa-precheck-cost", "label": "Related Guide"},
            {"title": "TSA Lock Guide", "description": "Everything about TSA-approved luggage locks for secure travel.", "href": "/tsa-lock", "label": "Related Guide"},
        ],
    },
    "vrl-bus-booking": {
        "category": "Transport Booking Guide",
        "readingTime": "3 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "How to book bus tickets with VRL — online reservations, routes, fares and travel tips for comfortable journeys across India.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "VRL is one of India's largest private bus operators with routes nationwide.",
            "Online booking is available through the VRL website and mobile app.",
            "Multiple bus types are offered including sleeper, semi-sleeper and AC.",
            "Advance booking secures better seat selection and sometimes lower fares.",
        ],
        "ctaText": "Planning an Indian bus journey? Compare total travel cost and time.",
        "ctaLink": "/#compare",
        "ctaHint": "Bus vs train vs flight — the total journey comparison matters.",
        "methodologyText": "Travelvus helps you compare complete journeys. Whether by bus, train or plane, door-to-door time and total cost determine the best choice.",
        "related": [
            {"title": "IRCTC Train Booking Guide", "description": "Book train tickets online with Indian Railways' IRCTC platform.", "href": "/irctc-train-ticket-booking", "label": "Related Guide"},
            {"title": "WeGo Flight Guide", "description": "Compare over 800 European flight providers.", "href": "/wego-flight", "label": "Related Guide"},
        ],
    },
}

def get_toc_items(content):
    """Extract TOC items from h2 id attributes."""
    items = []
    for m in re.finditer(r'<h2 id="([^"]+)">([^<]+)</h2>', content):
        items.append({"id": m.group(1), "title": m.group(2)})
    return items

def build_related_code(items):
    lines = ["const related: RelatedItem[] = ["]
    for item in items:
        lines.append("  {")
        for key in ["title", "description", "href", "label"]:
            lines.append(f'    {key}: "{item[key]}",')
        lines.append("  },")
    lines.append("];")
    return "\n".join(lines)

def migrate_article(slug, config):
    path = f"src/app/{slug}/page.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract H1
    h1_match = re.search(r"<h1>(.*?)</h1>", content)
    h1 = h1_match.group(1) if h1_match else slug

    # Extract TOC items
    toc_items = get_toc_items(content)

    # Extract hero image
    hero_img = config.get("heroImage")
    if hero_img is None:  # Not explicitly set (None = auto-detect)
        img_match = re.search(r'<img src="([^"]+)"[^>]*alt="([^"]*)"', content)
        if img_match:
            config["heroImage"] = img_match.group(1)
            config["heroImageAlt"] = img_match.group(2) or h1
        else:
            config["heroImage"] = ""
            config["heroImageAlt"] = ""

    # Build relation code
    related_code = build_related_code(config.get("related", []))

    # Build new import
    new_import = f"""import type {{ Metadata }} from "next";
import {{ LegacyArticleLayout }} from "@/components/legacy";
import type {{ RelatedItem }} from "@/components/legacy";

{related_code}

"""

    # Find and replace the import block
    old_import_pattern = r'import type \{ Metadata \} from "next";\s*import Link from "next/link";\s*import styles from "\.\./legacy-migration\.module\.css";'
    content = re.sub(old_import_pattern, new_import.strip() + "\n", content)

    # Remove old container + header + article opening
    content = re.sub(
        r'export default function \w+\(\) \{\s*return \(\s*<div className="[^"]*"[^>]*>\s*<header className="app-header">.*?</header>\s*<article className=\{styles\.article\}>',
        '', content, flags=re.DOTALL
    )

    # Remove closing article + footer + div
    content = re.sub(
        r'\s*</article>\s*<footer className="home-footer">.*?</footer>\s*</div>\s*\);\s*\}',
        '', content, flags=re.DOTALL
    )

    # Remove old TOC class
    content = content.replace('<ol className={styles.toc}>', '<ol>')

    # Build hero image prop lines
    hero_img_lines = ""
    if config.get("heroImage"):
        hero_img_lines = f'\n      heroImage="{config["heroImage"]}"\n      heroImageAlt="{config.get("heroImageAlt", h1)}"'

    # Build TOC items code
    toc_code = ""
    if toc_items:
        toc_lines = ",\n".join(f'        {{ id: "{t["id"]}", title: "{t["title"]}" }}' for t in toc_items)
        toc_code = f'\n      tocItems={{[\n{toc_lines}\n      ]}}'

    # Build summary points
    sp_lines = ",\n".join(f'        "{p}"' for p in config.get("summaryPoints", []))
    sp_code = f'      summaryPoints={{[\n{sp_lines}\n      ]}}'

    # Build related prop
    related_prop = "\n      related={related}" if config.get("related") else ""

    # Build the complete opening tag
    opening = f"""export default function {slug.replace('-', '').title()}Page() {{
  return (
    <LegacyArticleLayout
      category="{config['category']}"
      title="{h1}"
      subtitle="{config['subtitle']}"
      readingTime="{config['readingTime']}"
      lastReviewed="{config['lastReviewed']}"{hero_img_lines}
      summaryTitle="{config.get('summaryTitle', 'The quick answer')}"
{sp_code}{toc_code}
      ctaText="{config['ctaText']}"
      ctaLink="{config['ctaLink']}"
      ctaHint="{config['ctaHint']}"
      methodologyText="{config['methodologyText']}"
      trustNote="{config.get('trustNote', '')}"{related_prop}
    >
"""

    # Remove H1 from children (it's now a prop)
    content = re.sub(r'\s*<h1>.*?</h1>\s*', '\n', content, count=1)

    # Remove old inline <ol> TOC
    content = re.sub(
        r'\s*(?:\{/\*.*?\*/\}\s*)?<ol>\s*(<li><a href="#[^"]+">[^<]+</a></li>\s*)+</ol>\s*',
        '\n', content, count=1
    )

    # Find the first content element and prepend the opening tag
    # The content after shell removal starts with either a comment, img, or <p>
    first_content = re.search(r'(<!--|\s*<p>|\s*<img|\s*<h2)', content)
    if first_content:
        idx = first_content.start()
        content = content[:idx] + opening + "\n" + content[idx:].lstrip()

    # Close the LegacyArticleLayout at the end
    # Find the export line or end of function
    closing_match = re.search(r'(\s*)(\}\))\s*$', content)
    if not closing_match:
        # Add closing tag before the export line
        content += "\n    </LegacyArticleLayout>\n  );\n}"
    else:
        # Insert closing before the final brace and paren
        pass  # already handled

    # Ensure closing tag exists
    if "</LegacyArticleLayout>" not in content:
        content = content.rstrip() + "\n    </LegacyArticleLayout>\n  );\n}"

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  {slug}: migrated ({len(toc_items)} TOC items)")

# ── Main ─────────────────────────────────────────────────────

if __name__ == "__main__":
    for slug, config in ARTICLES.items():
        migrate_article(slug, config)
    print(f"\nMigrated {len(ARTICLES)} articles.")
