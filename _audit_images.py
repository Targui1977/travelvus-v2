"""Audit all 18 legacy articles for duplicated hero images."""
import re, glob, os

ARTICLES = [
    "wego-flight", "kayak-flights", "tsa-precheck-cost", "points-guy",
    "unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system",
    "aaa-travel", "bart-trip-planner", "costco-vacation", "defense-travel-system",
    "expedia-taap", "irctc-train-ticket-booking", "mta-trip-planner",
    "top-rated-tourists-attractions-in-rome", "trimet-trip-planner", "tsa-lock",
    "ultimate-guide-to-interrailing-explore-europe-by-train-with-ease",
    "unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide",
    "vrl-bus-booking",
]

duplicates = []

for slug in ARTICLES:
    path = f"src/app/{slug}/page.tsx"
    if not os.path.exists(path):
        # Try the long oyster path
        if "oyster" not in slug:
            print(f"  SKIP: {slug} — file not found at {path}")
        continue

    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Extract hero image from LegacyArticleLayout props
    hero_match = re.search(r'heroImage="([^"]+)"', content)
    if not hero_match:
        print(f"  {slug}: no hero image (text-led)")
        continue

    hero_src = hero_match.group(1)
    if not hero_src:
        print(f"  {slug}: empty hero image string")
        continue

    # Find the closing > of the LegacyArticleLayout opening tag
    # Content starts after that
    tag_end = content.find(">", content.find("<LegacyArticleLayout"))
    if tag_end == -1:
        print(f"  {slug}: could not find layout tag end")
        continue

    body = content[tag_end + 1:]

    # Find all img tags in the body
    body_imgs = re.findall(r'<img[^>]*src="([^"]+)"', body)

    hero_base = os.path.basename(hero_src)
    found_dupes = [img for img in body_imgs if hero_src in img or hero_base in img]

    if found_dupes:
        duplicates.append((slug, path, hero_src, found_dupes))
        print(f"  {slug}: DUPLICATE — hero={hero_src}, body={found_dupes}")
    else:
        unique_count = len(body_imgs)
        if unique_count > 0:
            print(f"  {slug}: clean — {unique_count} unique inline image(s)")
        else:
            print(f"  {slug}: clean — no inline images")

print(f"\n=== SUMMARY ===")
print(f"Total articles audited: {len(ARTICLES)}")
print(f"Duplicates found: {len(duplicates)}")
for slug, path, hero, dupes in duplicates:
    print(f"  {slug}: {hero}")

if not duplicates:
    print("  NONE — all articles clean")
