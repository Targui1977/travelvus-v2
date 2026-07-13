#!/usr/bin/env python3
"""Phase 89.1C — Editorial rhythm improvements for 3 long-form articles."""
import re

# ── Helpers ──────────────────────────────────────────────────

def word_count(text):
    return len(text.split())

def sentence_count(text):
    return len(re.findall(r'[.!?]+', text))

def split_long_paragraph(p_tag):
    """Split paragraphs >120 words at sentence boundaries."""
    inner = p_tag.group(1)
    if word_count(inner) <= 120:
        return p_tag.group(0)

    sentences = re.split(r'(?<=[.!?])\s+', inner)
    if len(sentences) < 4:
        return p_tag.group(0)

    # Build 2-3 paragraphs
    mid = len(sentences) // 2
    if len(sentences) >= 6:
        # Split into 3
        third = len(sentences) // 3
        p1 = " ".join(sentences[:third])
        p2 = " ".join(sentences[third:2*third])
        p3 = " ".join(sentences[2*third:])
        return f"\n        <p>{p1}</p>\n\n        <p>{p2}</p>\n\n        <p>{p3}</p>"
    else:
        p1 = " ".join(sentences[:mid])
        p2 = " ".join(sentences[mid:])
        return f"\n        <p>{p1}</p>\n\n        <p>{p2}</p>"

# ── Filler phrase removal ────────────────────────────────────

FILLER_REPLACEMENTS = [
    (r"In today'?s fast-paced travel landscape, the ability to quickly and efficiently compare flight options is essential\.\s*", ""),
    (r"So buckle up and get ready to explore the world of affordable air travel\.\s*", ""),
    (r"Whether you are a budget-conscious backpacker, a frequent business traveler, or a family planning your next vacation, WeGo Flight has something to offer\.\s*", ""),
    (r"Let us dive in and discover how you can unlock incredible savings on your next flight, explore new destinations, and make your travel dreams a reality without emptying your wallet\.\s*", ""),
    (r"The sky is the limit when you have the right tools and strategies at your disposal\.\s*", ""),
]

# ── Bold additions ───────────────────────────────────────────
# These are regex patterns → replacement for adding <strong> to key terms

BOLD_PATTERNS = [
    # Kayak patterns
    (r"(?<!<strong>)Kayak is an online travel search engine(?!</strong>)", r"<strong>Kayak is an online travel search engine</strong>"),
    (r"(?<!<strong>)the cheapest flight is not always the best value(?!</strong>)", r"<strong>the cheapest flight is not always the best value</strong>"),
    (r"(?<!<strong>)be flexible with your travel dates(?!</strong>)", r"<strong>be flexible with your travel dates</strong>"),
    (r"(?<!<strong>)compare prices across multiple airlines(?!</strong>)", r"<strong>compare prices across multiple airlines</strong>"),
    (r"(?<!<strong>)booking in advance can often result in more affordable fares(?!</strong>)", r"<strong>booking in advance</strong> can often result in more affordable fares"),
    (r"(?<!<strong>)review additional fees or charges(?!</strong>)", r"<strong>review additional fees or charges</strong>"),

    # WeGo patterns (key conclusions)
    (r"(?<!<strong>)considering nearby alternatives opens up additional possibilities(?!</strong>)", r"<strong>considering nearby alternatives</strong> opens up additional possibilities"),
    (r"(?<!<strong>)price alerts monitor fare changes(?!</strong>)", r"<strong>price alerts</strong> monitor fare changes"),
    (r"(?<!<strong>)book your flight today(?!</strong>)", r"<strong>book your flight today</strong>"),
    (r"(?<!<strong>)full-price transparency ensures that there are no surprises(?!</strong>)", r"<strong>full-price transparency</strong> ensures that there are no surprises"),
    (r"(?<!<strong>)flying during off-peak periods can significantly reduce your fare(?!</strong>)", r"<strong>flying during off-peak periods</strong> can significantly reduce your fare"),
    (r"(?<!<strong>)baggage fees and seat selection costs may change the total(?!</strong>)", r"<strong>baggage fees and seat selection costs</strong> may change the total"),
]

# ── Callout definitions ──────────────────────────────────────

WEGO_CALLOUTS = [
    # After "Cheapest Flight Deals" intro paragraph
    (r'(<h2 id="cheapest-flight-deals">Cheapest Flight Deals</h2>\s*<p>.*?</p>)',
     r'\1\n\n<div className="callout calloutImportant">\n<span className="calloutLabel">Important to know</span>\n<p className="calloutText">Listed fares can change after baggage, seats or transfer costs are added. The cheapest ticket price is not always the cheapest journey.</p>\n</div>'),

    # After "Find Cheap Flights" section, near the baggage paragraph
    (r'(<p>Baggage policies are another crucial factor to consider when comparing cheap flight options\..*?</p>)',
     r'\1\n\n<div className="callout calloutInsight">\n<span className="calloutLabel">Travelvus Insight</span>\n<p className="calloutText">A cheap flight only wins when the complete journey — ticket, baggage, transfers and time — remains cheaper. Always compare the total, not just the fare.</p>\n</div>'),

    # After "Book Smart" intro
    (r'(<h2 id="book-smart">Book Smart</h2>\s*<p>.*?</p>)',
     r'\1\n\n<div className="callout calloutTip">\n<span className="calloutLabel">Booking tip</span>\n<p className="calloutText">Compare final checkout totals, not the first search result price. Baggage, seat selection and payment fees can add 20–40% to the listed fare.</p>\n</div>'),

    # After "Compare Cheapest" intro
    (r'(<h2 id="compare-cheapest">Compare Cheapest</h2>\s*<p>.*?</p>)',
     r'\1\n\n<div className="callout calloutInsight">\n<span className="calloutLabel">Travelvus Insight</span>\n<p className="calloutText">The cheapest visible fare may use a less convenient airport or schedule. Factor in transfer time and cost before deciding.</p>\n</div>'),
]

KAYAK_CALLOUTS = [
    # After "What is Kayak?" section
    (r'(<h2 id="what-is-kayak">.*?</h2>\s*<p>.*?</p>)',
     r'\1\n\n<div className="callout calloutImportant">\n<span className="calloutLabel">Important to know</span>\n<p className="calloutText">Kayak is a search and comparison platform, not the final seller. The booking provider, payment terms and customer support depend on which site you click through to.</p>\n</div>'),

    # After "Types of Flight Deals" section (but before the h2) — insert after the last <p> in that section
    (r'(<h2 id="tips">Tips for Finding the Best Kayak Flight Deals</h2>)',
     r'<div className="callout calloutInsight">\n<span className="calloutLabel">Travelvus Insight</span>\n<p className="calloutText">The cheapest visible fare may use a less convenient airport or schedule. Booking directly with the airline often gives you better support if plans change.</p>\n</div>\n\n\1'),

    # After "Comparing" section
    (r'(<h2 id="best-deals">Finding the Best Deals on Kayak Flight Reservations</h2>)',
     r'<div className="callout calloutTip">\n<span className="calloutLabel">Before you book</span>\n<p className="calloutText">Check baggage rules, change conditions and the actual booking provider. A €20 saving is not worth it if changes cost €100.</p>\n</div>\n\n\1'),
]

# ── Apply transformations ────────────────────────────────────

def process_article(path, callouts):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # 1. Remove filler phrases
    for pattern, replacement in FILLER_REPLACEMENTS:
        content = re.sub(pattern, replacement, content)

    # 2. Add bold emphasis
    for pattern, replacement in BOLD_PATTERNS:
        content = re.sub(pattern, replacement, content)

    # 3. Insert callouts
    for pattern, replacement in callouts:
        new_content = re.sub(pattern, replacement, content, count=1)
        if new_content == content:
            print(f"  WARNING: callout pattern not matched: {pattern[:80]}...")
        content = new_content

    # 4. Split long paragraphs
    def split_paragraphs(match):
        return split_long_paragraph(match)
    content = re.sub(r'<p>(.{200,})</p>', split_paragraphs, content, flags=re.DOTALL)

    if content == original:
        print(f"  No changes made")
    else:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"  Applied rhythm improvements")

# ── Main ─────────────────────────────────────────────────────

if __name__ == "__main__":
    print("wego-flight:")
    process_article("src/app/wego-flight/page.tsx", WEGO_CALLOUTS)

    print("kayak-flights:")
    process_article("src/app/kayak-flights/page.tsx", KAYAK_CALLOUTS)

    print("points-guy:")
    process_article("src/app/points-guy/page.tsx", [])  # Points Guy gets paragraph splits + bold only

    print("Done.")
