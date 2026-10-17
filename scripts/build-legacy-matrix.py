import re, pathlib, csv

status = {}
for line in pathlib.Path('/tmp/legacy-final.txt').read_text(encoding='utf-8').splitlines():
    num, url, rest = line.split('|', 2)
    status[url] = rest.split()[0]

ledger = pathlib.Path('docs/MASTER-URL-LEDGER.md').read_text(encoding='utf-8')
entries = re.findall(r'\| (\d+) \| `([^`]+)` \| \w+ \| ([^|]+) \| 200 \| No \| [^|]+ \| \*?\*?([^*|]+?)\*?\*? \|', ledger)

M = {
 '/blog/': ('Blog index', None, 'NO-REPLACEMENT', 'no V2 blog exists; do not redirect to home'),
 '/cities/': ('Cities overview', None, 'NO-REPLACEMENT', 'no single V2 equivalent (3 city hubs exist)'),
 '/europe/': ('Europe overview', None, 'NO-REPLACEMENT', 'no single V2 equivalent'),
 '/yacht-booking/': ('Yacht booking', None, 'NO-REPLACEMENT', 'no V2 equivalent; off-strategy'),
 '/airport-transfer/': ('Airport transfer (generic)', '/guides/total-travel-time-comparison', 'PARTIAL', 'intent overlaps transfer content; evaluate as future transfer hub'),
 '/tours-and-activities/': ('Tours & activities', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/car-rental/': ('Car rental', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/category/blog/': ('Blog category index', None, 'NO-REPLACEMENT', 'no V2 blog'),
 '/category/cities/': ('Cities category', None, 'NO-REPLACEMENT', 'no single equivalent'),
 '/category/europe/': ('Europe category', None, 'NO-REPLACEMENT', 'no single equivalent'),
 '/london/': ('London landing (core market)', '/london-airports', 'YES', 'V2 hub covers the intent; strongest redirect candidate'),
 '/computicket-travel/': ('Computicket booking', None, 'NO-REPLACEMENT', 'off-strategy brand post'),
 '/go-city-travel-plan-and-tickets/': ('Go City passes', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/unlock-amazing-travel-deals-with-costcotravel-your-ultimate-guide/': ('Costco duplicate', '/costco-vacation', 'YES', 'high-confidence duplicate (redirect-map draft)'),
 '/unlock-the-benefits-of-oyster-card-your-ultimate-guide-to-londons-transit-system/': ('Oyster duplicate', '/unlock-the-convenience-of-oyster-card-your-ultimate-guide-to-londons-transport-system', 'YES', 'high-confidence duplicate (redirect-map draft)'),
 '/easy-and-convenient-irctc-railway-booking-your-one-stop-solution-for-booking-train-tickets/': ('IRCTC duplicate', '/irctc-train-ticket-booking', 'YES', 'high-confidence duplicate (redirect-map draft)'),
 '/unlock-fast-and-hassle-free-travel-with-tsa-precheck-your-guide-to-streamline-airport-security/': ('TSA PreCheck duplicate 1', '/tsa-precheck-cost', 'YES', 'high-confidence duplicate (redirect-map draft)'),
 '/maximize-convenience-and-save-time-with-tsa-precheck-your-complete-guide/': ('TSA PreCheck duplicate 2', '/tsa-precheck-cost', 'YES', 'high-confidence duplicate (redirect-map draft)'),
 '/cordelia-cruise-the-ultimate-luxury-experience-at-sea/': ('Cordelia cruise 1', None, 'NO-REPLACEMENT', '410 candidate after GSC zero-traffic window'),
 '/cordelia-cruise-unforgettable-luxury-travel-experience-for-discerning-travelers/': ('Cordelia cruise 2 (dup)', None, 'NO-REPLACEMENT', '410 candidate; pick primary only if rebuilt'),
 '/unlock-the-world-with-etravel-your-ultimate-guide-to-seamless-online-travel-experience/': ('eTravel platform', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/book-your-dream-vacation-with-expedia-ca-the-ultimate-travel-platform/': ('Expedia CA', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/unlock-your-dream-destinations-with-google-travel-the-ultimate-guide-for-seamless-trip-planning-and-booking/': ('Google Travel', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/convenient-online-ksrtc-bus-booking-book-your-tickets-now/': ('KSRTC bus', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/zingbus/': ('Zingbus', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/easemy-trip-your-ultimate-guide-to-stress-free-travels/': ('EaseMyTrip', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/bilal-travels-explore-the-world-with-the-best-travel-services/': ('Bilal Travels agency', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/bonza-airlines/': ('Bonza Airlines', None, 'NO-REPLACEMENT', 'airline ceased operations; 410 candidate'),
 '/solo-travel/': ('Solo travel', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/travelogue/': ('Travelogue', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/cheeky-trip/': ('Cheeky Trip', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/army-dts/': ('Army DTS duplicate', '/defense-travel-system', 'YES', 'high-confidence duplicate (redirect-map draft)'),
 '/ef-ultimate-break/': ('EF Ultimate Break', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/marco-polo-hotel/': ('Hotel review', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/hawaiian-vacation-packages/': ('Hawaii packages', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/habitas-alula/': ('Habitas AlUla hotel', None, 'NO-REPLACEMENT', 'off-strategy'),
 '/9-best-luxury-hotels-in-the-world/': ('Thin listicle', None, 'NO-REPLACEMENT', '410 candidate (60d zero-impression rule)'),
 '/13-most-beautiful-islands-in-the-world/': ('Thin listicle', None, 'NO-REPLACEMENT', '410 candidate'),
 '/5-ways-to-tackle-air-travel-woes/': ('Thin listicle', None, 'NO-REPLACEMENT', '410 candidate'),
 '/10-best-tropical-vacations/': ('Thin listicle', None, 'NO-REPLACEMENT', '410 candidate'),
 '/top-10-must-visit-destinations-for-travel-enthusiasts/': ('Thin listicle', None, 'NO-REPLACEMENT', '410 candidate'),
 '/top-10-must-visit-destinations-around-the-world-explore-the-best-destinations-for-your-next-adventure/': ('Thin listicle (dup)', None, 'NO-REPLACEMENT', '410 candidate'),
 '/discover-top-10-must-visit-places-to-go-in-english-ideal-destinations-for-travelers/': ('Thin listicle', None, 'NO-REPLACEMENT', '410 candidate'),
 '/explore-the-enchanting-land-of-japan-plan-your-dream-visit-to-japan-today/': ('Thin destination', None, 'NO-REPLACEMENT', '410 candidate'),
 '/explore-africas-stunning-wildlife-on-an-unforgettable-safari-adventure/': ('Thin destination', None, 'NO-REPLACEMENT', '410 candidate'),
 '/the-ultimate-guide-to-packing-cubes-how-to-organize-and-maximize-space-in-your-travel-bags/': ('Thin accessory', None, 'NO-REPLACEMENT', '410 candidate'),
 '/discover-the-magic-of-plitvice-holiday-resort-your-ultimate-guide-to-the-perfect-vacation/': ('Thin hotel', None, 'NO-REPLACEMENT', '410 candidate'),
}

rows = []
for num, url, title, action in entries:
    if status.get(url) == '404':
        topic, cand, equiv, note = M.get(url, (title.strip(), None, 'NO-REPLACEMENT', 'no V2 equivalent'))
        proposed = '301-CANDIDATE' if cand else ('410-CANDIDATE' if '410 candidate' in note else 'NO-REPLACEMENT')
        rows.append({
            'legacy_url': url,
            'topic': topic,
            'live_status': '404',
            'v2_replacement_candidate': cand or '',
            'intent_equivalent': equiv,
            'proposed_action': proposed,
            'gsc_evidence_required': 'yes (mandatory before 410; recommended before 301)',
            'notes': note,
        })

with open('docs/LEGACY_V1_REDIRECT_MATRIX.csv', 'w', newline='', encoding='utf-8') as f:
    w = csv.DictWriter(f, fieldnames=['legacy_url','topic','live_status','v2_replacement_candidate','intent_equivalent','proposed_action','gsc_evidence_required','notes'])
    w.writeheader()
    w.writerows(rows)

from collections import Counter
print('404 rows:', len(rows), Counter(r['proposed_action'] for r in rows))
