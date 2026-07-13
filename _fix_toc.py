import re, glob

import os
for path in list(glob.glob("src/app/*/page.tsx")) + list(glob.glob("src/app/unlock-*/page.tsx")):
    parts = path.replace("\\", "/").split("/")
    slug = parts[2] if len(parts) > 2 else ""
    targets = [
        "wego-flight", "kayak-flights", "tsa-precheck-cost", "points-guy",
        "unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system"
    ]
    if slug not in targets:
        continue

    with open(path, "r", encoding="utf-8") as f:
        content = f.read()

    # Remove old inline TOC: <ol> containing multiple <li><a href="#... patterns
    pattern = r'(\s*\{/\*.*?Table of Contents.*?\*/\}\s*)?<ol>\s*(<li><a href="#[^"]+">[^<]+</a></li>\s*)+</ol>\s*'
    new_content = re.sub(pattern, "\n", content, count=1)

    if new_content != content:
        with open(path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"{path}: removed old TOC")
    else:
        print(f"{path}: no old TOC found (may already be removed)")
