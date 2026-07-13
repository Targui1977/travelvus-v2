#!/usr/bin/env python3
"""Phase 89.1B — Real editorial modernization of Tier 1 articles."""
import re, os

ARTICLES = {
    "wego-flight": {
        "category": "Flight Booking Guide",
        "readingTime": "9 min",
        "lastReviewed": "Jul 2026",
        "heroImage": "/legacy/wego-flight/wego-flight-1024x640.webp",
        "heroImageAlt": "WeGo Flight banner showing affordable flight booking",
        "subtitle": "Compare over 800 European providers, find the cheapest fares, and book with confidence using WeGo Flight's powerful search platform.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "WeGo compares 800+ European flight providers in one search.",
            "Flexible date searches can save up to 30% on airfare.",
            "Price alerts notify you when fares drop on your route.",
            "Full-price transparency — no hidden fees at checkout.",
        ],
        "ctaText": "Found your flight? Compare the real journey cost before you book.",
        "ctaLink": "/#compare",
        "ctaHint": "Ticket price is just the start. Baggage, transfers and time change the real cost.",
        "methodologyText": "Travelvus compares complete journeys — not just the listed fare. Once you find a flight on WeGo, our engine adds baggage, airport transfers and door-to-door time to reveal which option really wins.",
        "trustNote": "Flight search platforms compared editorially. Prices and availability change continuously.",
        "related": [
            {"title": "Find Affordable Kayak Flights", "description": "Compare 400+ airlines with Kayak's flight search engine.", "href": "/kayak-flights", "label": "Related Guide"},
            {"title": "London Airport Decisions", "description": "Which London airport really wins for your journey?", "href": "/london-airports", "label": "Decision Guide"},
        ],
        "tocLabels": {
            "cheapest-flight-deals": "Cheapest Flight Deals",
            "find-cheap-flights": "Find Cheap Flights",
            "last-minute-vacation": "Last Minute Vacation",
            "book-smart": "Book Smart",
            "compare-cheapest": "Compare Cheapest",
            "save-up-to-30": "Save up to 30%",
            "find-best-price": "Find Best Price",
            "european-flight-providers": "European Flight Providers",
            "book-your-flight-today": "Book Your Flight Today",
            "cheap-flight-tickets-europe": "Cheap Flight Tickets Europe",
            "travel-like-a-pro": "Travel Like a Pro",
        },
    },
    "kayak-flights": {
        "category": "Flight Booking Guide",
        "readingTime": "5 min",
        "lastReviewed": "Jul 2026",
        "heroImage": "/legacy/kayak-flights/kayak-travel.webp",
        "heroImageAlt": "Kayak Flight",
        "subtitle": "Search across 400+ airlines, compare prices, and discover last-minute deals on one of the most popular flight search platforms.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "Kayak compares fares from 400+ airlines and travel sites in one search.",
            "Flexible date tools and price alerts help you book at the right time.",
            "Package deals bundling flights, hotels and cars can unlock extra savings.",
            "Booking in advance and comparing nearby airports reduces total cost.",
        ],
        "ctaText": "Found a cheap fare? Compare the real journey cost before you book.",
        "ctaLink": "/#compare",
        "ctaHint": "The cheapest ticket isn't always the cheapest journey. Add baggage and transfers.",
        "methodologyText": "Travelvus adds baggage, transfers and time to the fare you found on Kayak. The complete journey cost often tells a different story than the ticket price alone.",
        "trustNote": "Flight search platforms compared editorially. Prices and availability change continuously.",
        "related": [
            {"title": "WeGo Flight Guide", "description": "Compare over 800 European flight providers and save up to 30%.", "href": "/wego-flight", "label": "Related Guide"},
            {"title": "London Airport Decisions", "description": "Which London airport really wins for your journey?", "href": "/london-airports", "label": "Decision Guide"},
        ],
        "tocLabels": {
            "what-is-kayak": "What is Kayak?",
            "benefits-of-kayak": "Benefits of Kayak",
            "find-cheap-deals": "How to Find Cheap Deals",
            "types-of-deals": "Types of Flight Deals",
            "tips": "Tips for Finding the Best Deals",
            "comparing": "Comparing with Other Airlines",
            "best-deals": "Finding the Best Deals",
            "save-money": "Using Kayak to Save Money",
        },
    },
    "tsa-precheck-cost": {
        "category": "Airport Security Guide",
        "readingTime": "4 min",
        "lastReviewed": "Jul 2026",
        "heroImage": "/legacy/tsa-precheck-cost/tsa-precheck-cost.webp",
        "heroImageAlt": "tsa precheck cost",
        "subtitle": "Everything you need to know about TSA PreCheck enrollment, pricing, benefits, and renewal — so you can breeze through airport security.",
        "summaryTitle": "The quick answer",
        "summaryPoints": [
            "TSA PreCheck costs $78 for a 5-year membership.",
            "Renewal is $70 if completed online before expiration.",
            "Members keep shoes, belts, jackets on and laptops in bags.",
            "Enrollment is available online and at airport enrollment centers.",
        ],
        "ctaText": "Planning a trip? Make sure you're comparing the full journey cost.",
        "ctaLink": "/#compare",
        "ctaHint": "Airport choice affects transfer cost and total travel time.",
        "methodologyText": "Travelvus helps you compare the complete journey — ticket, baggage, airport transfers and time. Airport security wait times vary by terminal and time of day. TSA PreCheck can reduce screening time but does not affect the door-to-door journey calculation.",
        "trustNote": "TSA fees and policies sourced from tsa.gov. Verify current pricing before enrolling.",
        "related": [
            {"title": "TSA Lock Guide", "description": "Everything about TSA-approved luggage locks for secure travel.", "href": "/tsa-lock", "label": "Related Guide"},
            {"title": "Global Entry Guide", "description": "Unlock global travel efficiency with expedited customs screening.", "href": "/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide", "label": "Related Guide"},
        ],
        "tocLabels": {
            "what-is-tsa-precheck": "What is TSA PreCheck?",
            "tsa-precheck-enrollment-options": "Enrollment Options",
            "benefits-of-tsa-precheck": "Benefits of TSA PreCheck",
            "current-tsa-precheck-price": "Current Price",
            "how-to-renew-your-tsa-precheck": "How to Renew",
        },
    },
    "points-guy": {
        "category": "Travel Rewards Guide",
        "readingTime": "8 min",
        "lastReviewed": "Jul 2026",
        "heroImage": "/legacy/points-guy/points-guy-1.webp",
        "heroImageAlt": "Points Guy",
        "subtitle": "Master the art of travel hacking — loyalty programmes, credit card points, and strategies to unlock free flights and upgrades.",
        "summaryTitle": "What this guide covers",
        "summaryPoints": [
            "Travel hacking uses loyalty points and miles to reduce flight costs.",
            "Credit card sign-up bonuses are the fastest way to earn points.",
            "Understanding airline alliances multiplies redemption options.",
            "Points valuations help you compare whether a redemption is worth it.",
        ],
        "ctaText": "Using points for a flight? Still compare the real journey cost.",
        "ctaLink": "/#compare",
        "ctaHint": "Even award tickets have taxes, fees and transfer costs. Know the real total.",
        "methodologyText": "Travelvus compares complete journeys — whether you pay with cash or points. Baggage, airport transfers and door-to-door time affect the real cost regardless of how you booked the ticket.",
        "trustNote": "Points valuations and sign-up bonuses change frequently. Verify current offers with each programme.",
        "related": [
            {"title": "WeGo Flight Guide", "description": "Find affordable flights across 800+ European providers.", "href": "/wego-flight", "label": "Related Guide"},
            {"title": "Find Affordable Kayak Flights", "description": "Compare prices across 400+ airlines with Kayak.", "href": "/kayak-flights", "label": "Related Guide"},
        ],
        "tocLabels": {
            "introduction": "Introduction",
            "basics": "The Basics of Travel Hacking",
            "loyalty-programs": "Loyalty Programs",
            "warrior-within": "The Points Warrior Within",
            "travel-writing": "Travel Writing for Points",
        },
    },
    "oyster": {
        "category": "London Transport Guide",
        "readingTime": "3 min",
        "lastReviewed": "Jul 2026",
        "subtitle": "How the Oyster Card works, which type to choose, and how to use it across London's buses, Tube, DLR and overground.",
        "summaryTitle": "The quick answer",
        "summaryPoints": [
            "The Oyster Card is a prepaid smart card valid on all London transport.",
            "Visitor Oyster Cards come preloaded; standard cards use pay-as-you-go.",
            "Daily and weekly fare caps mean you never pay more than a travelcard.",
            "Contactless bank cards and mobile payments work as Oyster alternatives.",
        ],
        "ctaText": "Flying into London? Compare airport transfer costs before you land.",
        "ctaLink": "/london-airports",
        "ctaHint": "Heathrow, Gatwick and Stansted have very different transfer costs and times.",
        "methodologyText": "Travelvus calculates complete London journey costs — including Oyster/contactless fares from each airport to central London. The airport you choose can change the real trip cost by €50 or more.",
        "trustNote": "TfL fare data used for all London transport calculations. Off-peak single fares quoted.",
        "related": [
            {"title": "London Airport Decisions", "description": "Which London airport really wins for your journey?", "href": "/london-airports", "label": "Decision Guide"},
            {"title": "Heathrow vs Gatwick", "description": "The complete decision guide — which airport wins on real cost?", "href": "/guides/heathrow-vs-gatwick", "label": "Flagship Guide"},
        ],
        "tocLabels": {
            "what-is-oyster": "What is an Oyster Card?",
            "benefits": "Benefits of the Oyster Card",
            "types": "Types of Oyster Cards",
            "how-to-use": "How to Use the Oyster Card",
            "networks": "Transport Networks Accepting Oyster",
            "conclusion": "Conclusion",
        },
    },
}

def build_toc_items(article_slug, toc_labels):
    """Build TOC items array from known anchor IDs."""
    return [{"id": aid, "title": label} for aid, label in toc_labels.items()]

def build_related_code(items):
    lines = ["const related: RelatedItem[] = ["]
    for item in items:
        lines.append("  {")
        for key in ["title", "description", "href", "label"]:
            lines.append(f'    {key}: "{item[key]}",')
        lines.append("  },")
    lines.append("];")
    return "\n".join(lines)

def build_props(article_slug, config):
    props = []

    props.append(f'      category="{config["category"]}"')

    # Extract H1 from article
    path = f"src/app/{article_slug}/page.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find H1 text
    h1_match = re.search(r"<h1>(.*?)</h1>", content)
    if h1_match:
        h1_text = h1_match.group(1)
        props.append(f'      title="{h1_text}"')

    props.append(f'      subtitle="{config["subtitle"]}"')
    props.append(f'      readingTime="{config["readingTime"]}"')
    props.append(f'      lastReviewed="{config["lastReviewed"]}"')

    if "heroImage" in config:
        props.append(f'      heroImage="{config["heroImage"]}"')
        props.append(f'      heroImageAlt="{config["heroImageAlt"]}"')

    props.append(f'      summaryTitle="{config["summaryTitle"]}"')

    # Summary points
    sp = ",\n".join(f'        "{p}"' for p in config["summaryPoints"])
    props.append(f'      summaryPoints={{[\n{sp}\n      ]}}')

    # TOC items
    toc_items = build_toc_items(article_slug, config["tocLabels"])
    ti_lines = ",\n".join(f'        {{ id: "{t["id"]}", title: "{t["title"]}" }}' for t in toc_items)
    props.append(f'      tocItems={{[\n{ti_lines}\n      ]}}')

    props.append(f'      ctaText="{config["ctaText"]}"')
    props.append(f'      ctaLink="{config["ctaLink"]}"')
    props.append(f'      ctaHint="{config["ctaHint"]}"')
    props.append(f'      methodologyText="{config["methodologyText"]}"')

    if "trustNote" in config:
        props.append(f'      trustNote="{config["trustNote"]}"')

    if "related" in config:
        props.append(f"      related={{related}}")

    return "\n".join(props)

def migrate_article(slug, config):
    path = f"src/app/{slug}/page.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Build related items code
    related_code = build_related_code(config.get("related", []))

    # Build new import block
    new_import = f"""import type {{ Metadata }} from "next";
import {{ LegacyArticleLayout }} from "@/components/legacy";
import type {{ RelatedItem }} from "@/components/legacy";

{related_code}
"""

    # 1. Replace imports
    old_import = 'import type { Metadata } from "next";\nimport { LegacyArticleLayout } from "@/components/legacy";\nimport type { RelatedItem } from "@/components/legacy";\n\n'
    # Find the actual current import block
    import_match = re.search(
        r'import type \{ Metadata \} from "next";.*?const related: RelatedItem\[\] = \[.*?\];',
        content, re.DOTALL
    )
    if import_match:
        content = content[:import_match.start()] + new_import + content[import_match.end():]
    else:
        # Fallback: try simpler import pattern
        old_simple = 'import type { Metadata } from "next";\nimport { LegacyArticleLayout } from "@/components/legacy";\nimport type { RelatedItem } from "@/components/legacy";'
        if old_simple in content:
            idx = content.index(old_simple)
            # Find where the related array ends
            rest = content[idx + len(old_simple):]
            array_end = rest.find("];\n")
            if array_end != -1:
                content = content[:idx] + new_import + rest[array_end + 3:]

    # 2. Remove H1 from children (it's now a prop)
    content = re.sub(r'\s*<h1>.*?</h1>\s*', '\n', content, count=1)

    # 3. Replace the opening LegacyArticleLayout tag with full props
    props_str = build_props(slug, config)

    # Find <LegacyArticleLayout related={related}> and replace
    old_tag = "<LegacyArticleLayout related={related}>"
    new_tag = f"<LegacyArticleLayout\n{props_str}\n    >"

    if old_tag in content:
        content = content.replace(old_tag, new_tag)
    else:
        print(f"  WARNING: Could not find opening tag in {slug}")
        # Try alternative
        alt_tag = "<LegacyArticleLayout"
        idx = content.find(alt_tag)
        if idx != -1:
            end = content.find(">", idx)
            content = content[:idx] + new_tag + content[end+1:]

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  {slug}: migrated")

if __name__ == "__main__":
    for slug, config in ARTICLES.items():
        article_slug = slug if slug != "oyster" else "unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system"
        migrate_article(article_slug, config)
    print("Done.")
