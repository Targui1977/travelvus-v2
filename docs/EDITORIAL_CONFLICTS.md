# Travelvus — Editorial Conflicts & Factual Drift

**Phase 123.0** · **Fecha:** 2026-10-17 · Fuente: auditoría read-only con citas `ruta:línea` relativas al repo. Hechos externos verificados contra fuentes oficiales el 2026-10-17 (ver tabla §4).

---

## 1. Contradicciones Paris

### P1 — Central Paris: dos ganadores opuestos
- `src/app/guides/best-airport-for-central-paris/page.tsx:22` → *"Orly wins for central Paris · CDG for Right Bank"*; `:43` → *"Orly wins for central Paris."*
- `src/data/guide-registry.ts:24` (slug `best-airport-for-central-paris-guide`, misma URL sitemapeada) → *"For most central Paris destinations, CDG is the better choice."*; `:35` → *"CDG is the better airport for central Paris... Orly only wins if the airfare difference is more than €15."*

### P2 — Transfer facts contradictorios entre 4 superficies
| Superficie | CDG | Orly |
|---|---|---|
| `guides/best-airport-for-central-paris:47` | RER B ~35 min, ~€11 | Orlyval+RER ~35 min, ~€14 |
| `guide-registry.ts:26-27` | RER B direct, €12, ~40 min, 0 cambios | Orlyval→RER B, €15, ~50 min, 1 cambio |
| `paris/airport-choice:157-158` | RER B, ~40 min | Orlyval+RER B, ~50 min |
| `paris-airports:17` | RER B ~35 min a Châtelet | "also ~35 min total" |

### P3 — `cdg-vs-orly` contradice registry y hub
- `guides/cdg-vs-orly:26` → *"Fastest to central: Tied ~35 min"*; `:50` → *"Both airports have rail connections that reach central Paris in ~35 minutes."* (registry y hub dicen 40 vs 50)
- `paris-airports:15` → *"Orly wins for medium-haul European flights..."* (registry dice CDG para la mayoría)

### P4 — Montparnasse se autocontradice
- `guides/best-airport-for-montparnasse:22` → CDG *"requires RER B to Denfert-Rochereau (~50 min) then a Metro connection"* vs `:28` → *"RER B direct, ~50 min"*
- Orlybus: *"~35 min"* (`:21`) vs *"~30 min"* (`:27`); CDG→Montparnasse *"~55 min"* (`:26`) vs ~50 min a Denfert (`:22`)

### P5 — "cheapest" vs "central" se contradicen
- `guides/best-airport-for-cheapest-paris:30` → *"CDG is usually the cheaper total journey..."* vs `guides/best-airport-for-central-paris:43` → *"Orly wins for central Paris."*

---

## 2. Contradicciones London

### L1 — Heathrow-vs-Gatwick: guía y compare opuestas (+ guía autocontradictoria)
- `guides/heathrow-vs-gatwick:12,40` → *"Gatwick usually wins on money"*; `:215` → *"For most London destinations, Heathrow wins on total cost..."*; `:178` → *"Heathrow wins."*
- `compare/heathrow-vs-gatwick:54` (H1) → *"Gatwick usually wins on money"*
- La tabla de la propia guía muestra Gatwick más barato por €22 (Victoria `:241`) y €37 (Canary Wharf `:242`) — veredicto Heathrow.

### L2 — Norte de Londres / King's Cross: 3 respuestas
- `guides/best-airport-for-north-london:25,41` → Luton (Thameslink) para Camden/Islington/King's Cross
- `london-airport-decision-center:74` → asigna **STN** a (Camden, Islington, King's Cross)
- `guide-registry.ts:427` → *"Stansted is actually faster to King's Cross than Heathrow"*

### L3 — Último Stansted Express: 23:30 vs 00:30
- `london-airport-decision-center:148` → *"the last Stansted Express leaves around 23:30."*
- `guide-registry.ts:561,564` y `london/airport-choice:45` → 00:30

### L4 — Heathrow Express a Paddington: 15 vs 30 min
- `guides/best-airport-for-central-london:47`, `london-airport-decision-center:84`, `guide-registry.ts:313` → 15 min
- `london/airport-choice:51` → *"~30 min — fastest"* pero `:57` → *"15 min"* (autocontradicción + conflicto con los otros 3)

### L5 — Business travel: LCY vs Heathrow
- `guides/best-london-airport-for-business-travel:25,41` → **LCY** para Canary Wharf/City
- `guide-registry.ts:451,453,462` → *"Heathrow dominates... The clear business-travel choice"* (LCY ni siquiera aparece)

### L6 — "Cheapest London airport": 3 marcos distintos
- `guides/cheapest-london-airport:41` → condicional, sin ganador único
- `guide-registry.ts:414` → *"Stansted is usually cheaper... saves ~€25 (con maleta) / ~€58 (sin)"*
- `guides/best-london-airport-for-budget-travellers:25` → *"Stansted wins for Ryanair... Luton wins for Wizz... Gatwick wins for easyJet"*

### L7 — Umbral Stansted: 3 valores incompatibles
- `compare/heathrow-vs-stansted:25-27` → umbral **€62**, actual €68 → ganaría Stansted
- Misma página `:37` → worked example: Stansted €204 vs Heathrow €171 → **gana Heathrow por €33**
- `questions/london-airport-break-even:15-18` → umbral **>€101**, "at the observed €68 saving, it still loses by €33"

### L8 — "Fastest London airport": LCY vs Heathrow según página
- `guides/fastest-london-airport:41` → LCY para Canary Wharf/City/este; Heathrow para oeste
- `guide-registry.ts:473,484` → *"Heathrow wins on speed for most destinations"* (omite LCY)

### L9 — Compare pages con columnas invertidas y placeholders literales
- `compare/heathrow-vs-luton:32` → winner "Heathrow", `a: "~£140"`, `b: "~£100"`, veredicto *"Heathrow saves ~£40"* — el valor más barato está en la columna de Luton; `:43` coloca *"~£45 (Wizz Air/easyJet)"* en la columna de Heathrow; `:50` pone "24km west" en `a` pero `:54` pone el transfer de Luton en `a`
- `compare/gatwick-vs-luton:32` → winner "Gatwick" con `a: "~£105"` vs `b: "~£100"` (Luton más barato); `:33` vs `:54` intercambian los tiempos 30/40 min
- **Placeholders visibles en producción**: `compare/heathrow-vs-london-city:18,23` y `compare/gatwick-vs-london-city:18,23` → *"Depends on destination wins"*; `compare/stansted-vs-luton:18` → *"Tie — depends on destination wins"*; `compare/luton-vs-london-city:18` → *"London City for speed, Luton for budget wins"*; `compare/stansted-vs-london-city:18` → *"Depends on budget vs speed wins"*
- `compare/heathrow-vs-london-city:166` → muestra `~£155` vs `~£160` y resalta el `~£160` como mejor

### L10 — London City descrito con líneas que no tiene (error factual)
- `compare/amsterdam-to-london:62-64` → *"London City... Elizabeth Line — ~35 min, ~£12"*, *"LCY has the Piccadilly Line"*, *"cheapest way from LCY is Piccadilly Line... Elizabeth Line"* — **LCY solo tiene DLR**
- Repetido en `compare/dublin-to-london:62,64`; "Gatwick Express" colocado en la columna Stansted en `compare/frankfurt-to-london:46,54`, `compare/milan-to-london:46,54`, `compare/rome-to-london:46,54`
- Gatwick Express 45 vs 30 min en la misma página: `compare/barcelona-to-london:54` vs `:61` (y mismo patrón en lisbon, madrid, paris-to-london)

---

## 3. Contradicciones New York

- **N1** — Upper East/West Side: `guides/best-airport-for-manhattan:178-179` → LaGuardia vs `guides/jfk-vs-newark:264` → Newark
- **N2** — Financial District: `guides/best-airport-for-manhattan:180` → JFK vs `guides/jfk-vs-newark:263` → Newark
- **N3** — JFK→Midtown: 35 min/$15 (`best-airport-for-manhattan:162`, `jfk-vs-newark:163`) vs 50 min/€16 (`guide-registry.ts:615,619`, `new-york/airport-choice:45`)
- **N4** — Hub vs guías: `new-york-airports:122` marca `isWinner: JFK` mientras ambas guías (`best-airport-for-manhattan:99`, `jfk-vs-newark:99`) marcan EWR
- **N5** — Taxi LGA: $35–55 (`best-airport-for-manhattan:164,42`) vs $35–50 (`:178`)
- **N6** — Badge "Recommended" por orden de array (`GuidePage.tsx:66-68`), no por ganador declarado: JFK primero pero takeaway dice Newark (`guide-registry.ts:706,715`)

---

## 4. Facts verificados contra fuentes oficiales (acceso 2026-10-17)

| Claim en repo (file:line) | Oficial 2026 | Verdicto |
|---|---|---|
| RER B CDG: €11 / €11.80 / €12 (`paris-airports-data.ts:21`, `paris-destinations.ts:65,82`, `guide-registry.ts:26`) | **€14.00** (tarifa unificada aeropuerto ÎdFM/Bonjour RATP, desde 01-ene-2026) | **OUTDATED** (3 valores distintos en el repo) |
| Orlyval+RER: €14/€15 + *"€9.30 Orlyval premium"* (`paris-airports-data.ts:35`, `guide-registry.ts:27,33`, `paris/airport-choice:149`) | **€14** tarifa única; **el premium €9.30 ya no existe** | **OUTDATED** |
| *"No direct Métro or RER"* para Orly (`paris-airports-data.ts:42`, `paris/airport-choice:150`, guía estática:26) | **Metro 14 llega a Orly desde 24-jun-2024** (~25-26 min a Châtelet, directo) | **OUTDATED** (invalida la premisa de varias guías) |
| Taxis Paris: CDG €55/€60, Orly €35/€40 (6+ archivos) | **CDG €56 derecha/€65 izquierda; Orly €45 derecha/€36 izquierda** (arrêté 24-dic-2025, desde 01-feb-2026) | **OUTDATED** — repo además tiene invertido izquierda/derecha en Orly |
| CDGVAL *"24/7"* (`knowledge-registry.ts:27,34`) | 04:00–01:00 + bus nocturno | **PARTLY OUTDATED** |
| Heathrow Express ~£25 / €29 (`london-airports-data.ts:46`, `knowledge-registry.ts:220`) | **£26** single (advance desde £10) · 15 min CONFIRMADO | **OUTDATED (menor)** |
| Elizabeth line ~£12 off-peak vs €18 (`london-airports-data.ts:45` vs `knowledge-registry.ts:222`) | ~£14.60 flat a Paddington; off-peak Heathrow retirado 01-mar-2026 (fuente TfL no imprimió la tarifa — UNVERIFIED estricto) | **INCONSISTENTE / likely OUTDATED** |
| Stansted Express ~£17 / €28 (`london-airports-data.ts:82`, `knowledge-registry.ts:251`) | Advance desde £9.90; walk-up ~£21-23 | **OUTDATED/INCOMPLETO** |
| Luton *"No direct rail — shuttle bus (DART)"* (`london-airports-data.ts:104`) | DART = people mover ferroviario automático, 24/7, £4.90 | **INCORRECTO** (no es bus) |
| JFK AirTrain $8.50 / *"AirTrain+Subway ~$8"* (`knowledge-registry.ts:377,379`, `ny-airports-data.ts:47`) | AirTrain **$8.75** (resolución NYC Council 24-sep-2026); subway $2.90-3.00 → combinado ~$8 imposible | **OUTDATED/INCORRECTO** |
| Newark NJ Transit $15/$15.50, AirTrain *"free"* (`ny-airports-data.ts:67`, `knowledge-registry.ts:408-418`) | **$17.25** total (incluye access fee); AirTrain "free" solo con billete NJT/Amtrak | **OUTDATED** |
| Eurostar Paris→London 2h15 (`compare/paris-to-london:57`) | **2h17** Paris→London (2h15 es London→Paris) | **OUTDATED (menor)** |
| T7 *"€4 — standard T+ covers both"* (`knowledge-registry.ts:96`) | Tipo T+ retirado en reforma tarifaria 2025 | **LIKELY OUTDATED** |
| *"Orlyval + RER C direct"* a Versailles (`paris-airports-data.ts:66`) | Orlyval termina en Antony (RER B); requiere más cambios | **INCORRECTO** |
| Fecha de revisión *"January 2027"* (`compare/paris-to-london:90`) | Fecha futura respecto a hoy | **INVÁLIDO** |
| Skytrax 2025 LGA / obras JFK "through 2030" / EWR surcharge $17.50 (`ny-airports-data.ts:53,73,92`) | Sin fuente oficial verificable | **UNVERIFIED** |

**Fuentes oficiales usadas:** iledefrance-mobilites.fr (tarifas 2026), bonjour-ratp.fr (tickets aeropuerto, Orlyval, CDGVAL), ratpgroup.com (dossier Metro 14), service-public.gouv.fr A15396 (taxis), heathrowexpress.com, tfl.gov.uk/fares, stanstedexpress.com, lutondart.com, njtransit.com/ewr, newarkairport.com, eurostar.com, sncf-voyageurs.com. (Varias páginas oficiales devolvieron 403/404; en esos casos el veredicto se basa en resúmenes de búsqueda de dichas páginas oficiales y se marca como tal.)

---

## 5. Errores de engine (fuente técnica, no editorial)

1. **Handoff de tiempo usa el ganador por dinero** — `LhrVsLgwInteractive.tsx:61-69`: para Paddington (LHR 25 min vs LGW 55 min) imprime *"Gatwick wins on time by 30 minutes"* cuando el `timeWinner` computado es LHR (`lhr-vs-lgw-data.ts:114-117`).
2. **Frases causales hardcodeadas** — `normalize.ts:144` (si A es más barato, siempre dice "still takes longer door-to-door") y `:152` (si B es más barato, "is faster door-to-door") sin computar nada.
3. **Umbral no derivado del mock** — `compare/heathrow-vs-stansted:21-32` usa 62/68; el mock computa ganador a €24 de ahorro (`mock-data.ts:80-92`); el worked example da -€33.
4. **Paris reutiliza vuelos mock de Londres** — `city-engine.ts:156-181` + `mock-data.ts:17-53`: con defaults del hub (CDG €80, ORY €95) produce **Orly gana por €27** — una tercera respuesta que ninguna página Paris publica.
5. **`LiveComparison.tsx:22`** hardcodea el coste sin maleta (159) sin derivarlo de la línea de equipaje.
6. **Colisión exacta de ruta** — registry slug `best-airport-for-families-london` (`guide-registry.ts:377`) nunca se renderiza: gana la página estática del mismo path; su contenido es código muerto.
7. **Prosa London-específica en motores genéricos** — `derive-content.ts:41,109-114,227-231` ("Stansted", "Heathrow"), `calculation-contract.ts:123-125,168-174` ("TfL off-peak single", "central London destination") usados también para Paris/NY.
8. **`isIllustrative:false`** en transfers Paris (`paris-destinations.ts:86,94`) contradice el comentario del propio archivo (`:64`) y la metodología del hub (`paris/airport-choice:178`).

---

## 6. Clusters de intención duplicada (síntesis Part C)

| Cluster | URLs | Canónica recomendada (fase futura) | Conflicto |
|---|---|---|---|
| Paris central / CDG-vs-Orly | `/guides/best-airport-for-central-paris`, `/guides/best-airport-for-central-paris-guide`, `/guides/cdg-vs-orly`, `/paris-airports`, `/paris/airport-choice` | `/guides/best-airport-for-central-paris` (editorial); `/paris-airports` hub | ✅ opuesto |
| London broad | `/london-airport-decision-center`, `/london-airports`, `/london/airport-choice` | decision-center + hub; choice se fusiona después | ✅ parcial |
| London persona (business/cheapest/fastest) | estáticas vs registry `-london` | estática donde existe | ✅ opuestos |
| London airport-pair | 10 `compare/*` vs `/guides/heathrow-vs-gatwick` | compare | ✅ opuesto |
| NY borough | `/guides/best-airport-for-manhattan`, `/guides/jfk-vs-newark`, registry midtown/etc. | estáticas | ✅ opuestos |
| Paris-to-London | única URL | sí misma (fix in place) | ✅ interno |
| Break-even | `/questions/london-airport-break-even` vs cluster Stansted | consolidar después | ✅ umbrales |

**Regla aplicada:** esta fase NO redirige, NO borra, NO noindexea. Solo documenta. Las consolidaciones se planifican en RECOVERY_30_60_90.md.
