#!/usr/bin/env python3
"""Migrate Tier 1 legacy articles to use LegacyArticleLayout."""
import re

# Article definitions: slug -> related items
ARTICLES = {
    "kayak-flights": [
        {"title": "WeGo Flight Guide", "description": "Compare over 800 European flight providers and save up to 30%.", "href": "/wego-flight", "label": "Related Guide"},
        {"title": "London Airport Decisions", "description": "Which London airport really wins for your journey?", "href": "/london-airports", "label": "Decision Guide"},
    ],
    "tsa-precheck-cost": [
        {"title": "TSA Lock Guide", "description": "Everything about TSA-approved luggage locks for secure travel.", "href": "/tsa-lock", "label": "Related Guide"},
        {"title": "Global Entry Guide", "description": "Unlock global travel efficiency with expedited customs screening.", "href": "/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide", "label": "Related Guide"},
    ],
    "points-guy": [
        {"title": "WeGo Flight Guide", "description": "Find affordable flights across 800+ European providers.", "href": "/wego-flight", "label": "Related Guide"},
        {"title": "Find Affordable Kayak Flights", "description": "Compare prices across 400+ airlines with Kayak.", "href": "/kayak-flights", "label": "Related Guide"},
    ],
}

OYSTER_RELATED = [
    {"title": "London Airport Decisions", "description": "Which London airport really wins for your journey?", "href": "/london-airports", "label": "Decision Guide"},
    {"title": "Heathrow vs Gatwick", "description": "The complete decision guide — which airport wins on real cost?", "href": "/guides/heathrow-vs-gatwick", "label": "Flagship Guide"},
]

OLD_IMPORT = 'import type { Metadata } from "next";\nimport Link from "next/link";\nimport styles from "../legacy-migration.module.css";'

def build_related_code(items):
    code = "const related: RelatedItem[] = [\n"
    for item in items:
        code += f'  {{\n    title: "{item["title"]}",\n    description: "{item["description"]}",\n    href: "{item["href"]}",\n    label: "{item["label"]}",\n  }},\n'
    code += "];\n"
    return code

def build_new_import(items):
    return f'import type {{ Metadata }} from "next";\nimport {{ LegacyArticleLayout }} from "@/components/legacy";\nimport type {{ RelatedItem }} from "@/components/legacy";\n\n{build_related_code(items)}'

# Pattern: opening shell (container div + header + article opening)
# Matches with flexible whitespace
SHELL_OPEN = re.compile(
    r'export default function \w+\(\) \{\s*'
    r'return \(\s*'
    r'<div className="max-w-\[var\(--container-decision\)\][^"]*"[^>]*>\s*'
    r'<header className="app-header">.*?</header>\s*'
    r'<article className=\{styles\.article\}>',
    re.DOTALL
)

# Pattern: closing shell (article close + footer + div close + function close)
SHELL_CLOSE = re.compile(
    r'\s*</article>\s*'
    r'<footer className="home-footer">.*?</footer>\s*'
    r'\s*</div>\s*'
    r'\);\s*'
    r'\}',
    re.DOTALL
)

def migrate_article(slug, related_items):
    path = f"src/app/{slug}/page.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    original = content

    # 1. Replace imports
    new_import = build_new_import(related_items)
    content = content.replace(OLD_IMPORT, new_import)

    # 2. Replace opening shell
    def replace_open(m):
        return f'export default function {slug.replace("-", "").title()}Page() {{\n  return (\n    <LegacyArticleLayout related={{related}}>'

    # Try to find the function name from the match
    match = SHELL_OPEN.search(content)
    if not match:
        print(f"  WARNING: Could not find opening shell in {slug}")
        return False

    # Extract function name
    func_match = re.search(r'export default function (\w+)', match.group(0))
    func_name = func_match.group(1) if func_match else f"{slug.replace('-', '').title()}Page"

    # Manual replacement: find the pattern
    # The opening div
    div_pattern = r'<div className="max-w-\[var\(--container-decision\)\][^"]*"[^>]*>'
    header_pattern = r'<header className="app-header">.*?</header>'
    article_open = r'<article className=\{styles\.article\}>'

    full_pattern = rf'(export default function \w+\(\) \{{\s*return \()\s*{div_pattern}\s*{header_pattern}\s*{article_open}'

    replacement = rf'\1\n    <LegacyArticleLayout related={{related}}>'

    content = re.sub(full_pattern, replacement, content, flags=re.DOTALL)

    # 3. Replace closing shell
    footer_pattern = r'</article>\s*<footer className="home-footer">.*?</footer>\s*</div>\s*\);\s*\}'
    content = re.sub(footer_pattern, '    </LegacyArticleLayout>\n  );\n}', content, flags=re.DOTALL)

    # 4. Replace TOC class
    content = content.replace('<ol className={styles.toc}>', '<ol>')

    if content == original:
        print(f"  WARNING: No changes made to {slug}")
        return False

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  {slug}: migrated successfully")
    return True

# Also handle oyster card (different path)
def migrate_oyster():
    path = "src/app/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system/page.tsx"
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace imports
    content = content.replace(OLD_IMPORT, build_new_import(OYSTER_RELATED))

    # Replace opening shell
    content = re.sub(
        rf'(export default function \w+\(\) \{{\s*return \()\s*{r"<div className=\"max-w-\[var\(--container-decision\)\][^\"]*\"[^>]*>"}\s*{r"<header className=\"app-header\">.*?</header>"}\s*{r"<article className=\{styles\.article\}>"}',
        r'\1\n    <LegacyArticleLayout related={related}>',
        content, flags=re.DOTALL
    )

    # Replace closing shell
    content = re.sub(
        r'</article>\s*<footer className="home-footer">.*?</footer>\s*</div>\s*\);\s*\}',
        '    </LegacyArticleLayout>\n  );\n}',
        content, flags=re.DOTALL
    )

    # Replace TOC
    content = content.replace('<ol className={styles.toc}>', '<ol>')

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"  oyster-card: migrated successfully")

if __name__ == "__main__":
    for slug, related in ARTICLES.items():
        migrate_article(slug, related)
    migrate_oyster()
    print("Done.")
