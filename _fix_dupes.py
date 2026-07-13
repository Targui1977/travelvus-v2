"""Remove duplicate hero images from 11 Phase 89.2 articles."""
import re, os

DUPLICATES = {
    "aaa-travel": "/legacy/aaa-travel/aaa-travel.jpg",
    "bart-trip-planner": "/legacy/bart-trip-planner/bart-trip-planner-1024x768.webp",
    "costco-vacation": "/legacy/costco-vacation/costco-vacation-1024x683.jpg",
    "defense-travel-system": "/legacy/defense-travel-system/defense-travel-system-1024x935.jpeg",
    "expedia-taap": "/legacy/expedia-taap/expedia-taap-1024x576.jpg",
    "irctc-train-ticket-booking": "/legacy/irctc-train-ticket-booking/irctc-train-ticket-booking-1024x576.jpeg",
    "mta-trip-planner": "/legacy/mta-trip-planner/mta-trip-planner-1024x512.webp",
    "top-rated-tourists-attractions-in-rome": "/legacy/top-rated-tourists-attractions-in-rome/colleseium.png",
    "trimet-trip-planner": "/legacy/trimet-trip-planner/trimet-trip-planner-1-1024x683.jpg",
    "tsa-lock": "/legacy/tsa-lock/tsa-lock.jpg",
    "vrl-bus-booking": "/legacy/vrl-bus-booking/vrl-bus-booking-1024x576.png",
}

for slug, hero_img in DUPLICATES.items():
    path = f"src/app/{slug}/page.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Find the opening LegacyArticleLayout tag end
    tag_start = content.find("<LegacyArticleLayout")
    tag_end = content.find(">", tag_start)
    if tag_end == -1:
        print(f"  {slug}: could not find layout tag")
        continue

    # Body is everything after the opening tag
    before_body = content[:tag_end + 1]
    body = content[tag_end + 1:]

    # Remove <img> tags that match the hero image
    # Pattern: <img ... src="HERO_IMG" ... />  with optional whitespace around
    escaped = re.escape(hero_img)
    pattern = re.compile(r'\s*<img\s+[^>]*src="' + escaped + r'"[^>]*/>\s*')

    new_body, count = pattern.subn('\n', body)

    # Special: rome has the duplicate TWICE
    if count > 1:
        print(f"  {slug}: removed {count} duplicate instances")

    if count > 0:
        new_content = before_body + new_body
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"  {slug}: removed {count} duplicate(s)")
    else:
        print(f"  {slug}: no match found (may already be clean)")

print("Done.")
