# Travelvus — Phase 123.3 GSC Evidence Report

**Fecha:** 2026-10-18 · **Modo:** análisis read-only · **Sin deploy, sin cambios de app**

---

## 1. Importación y verificación

- Dos ZIPs idénticos localizados en Downloads: `travelvus.com-Performance-on-Search-2026-10-18.zip` y `… (1).zip` — **byte-idénticos** (7 CSVs cada uno, hashes SHA-256 iguales). Importada una copia a `docs/gsc-exports/`.
- Periodo: **2026-07-17 → 2026-10-16** (92 días) · Tipo: Web · **Íntegramente PREVIO a los fixes 123.1** (deploy 17-oct): este export mide el estado PRE-fix.

## 2. Control totals (verificados, discrepancia preservada)

| Fuente | Filas | Impresiones | Clics |
|---|---|---|---|
| Chart (diario) | 92 | **1,225** | 0 |
| Pages | 59 | 1,324 | 0 |
| Queries | 318 | 949 | 0 |
| Countries | 77 | 1,225 | 0 |

**Discrepancia (1,324 > 1,225 > 949) — explicación, sin redistribución:** GSC aplica umbrales de anonimización distintos por dimensión. Una query que aparece en varias páginas suma su impresión en CADA fila de Pages (sobreconteo vs total único), y las queries de bajo volumen (<~10 imp) se eliminan o agregan en cubos anonimizados en Queries (subconteo). El Chart diario es el total canónico del periodo. **No se normaliza ni se inventa ninguna fila.**

## 3. Tendencia mensual (dato clave)

| Mes | Impresiones |
|---|---|
| 2026-07 | 713 |
| 2026-08 | 393 |
| 2026-09 | 105 |
| 2026-10 (1-16) | 14 |

**Declive -85% jul→sep y -98% hacia octubre, TODO pre-fixes.** Últimos 10 días: ~1 imp/día. Hipótesis (no demostrada): fase de descubrimiento inicial (contenido legacy ITA Matrix) decayendo + V2 aún sin rankear. **Los fixes de octubre NO pueden evaluarse con este export** — se necesita el siguiente export (nov+).

## 4. Mercados (Countries.csv)

US **288** · UK **198** · Vietnam 79 · Canada **70** · Filipinas 52 · India 45 · Australia **36** · Alemania 34 · Italia 27 · Francia 27.

Tier-1 (US+UK+CA+AU) = 592/1,225 (48%) — consistente con la estrategia EN de airport decisions. Vietnam/Filipinas/India (176) correlacionan con contenido legacy (ITA Matrix, IRCTC/VRL). Limitación explícita: el export no tiene cruce query×país ni página×país — no se fabrican cross-tabs.

## 5. Clasificación de Pages.csv (59 filas)

- **43 filas = URLs V2 actuales (host www canónico)**
- **16 filas = host non-www** (`travelvus.com` sin www): variantes que hoy 308→www. Incluyen señales residuales de páginas legacy que ahora dan 404: `/computicket-travel` 12 imp @27.17, `/10-best-tropical-vacations` 7 @77, `/9-best-luxury-hotels` 1 @20, `/top-10-must-visit-destinations` ×2 (1 @21 y 1 @25), `/europe` 2 @**5.5**.
- 0 filas de assets técnicos en Pages (los 17 assets de "crawled-not-indexed" no generaron impresiones — correcto).

## 6. Legacy vs V2 en impresiones

- **`/google-flight-matrix` = 809 imp (61% del total de Pages)** @ pos 40 — la casi totalidad del tráfico es la página legacy ITA Matrix. Las queries lo confirman: ~700 de 949 query-impresiones son variantes "ita matrix"/"flight matrix"/"airfare matrix" (~75%).
- **V2 real (decisiones de aeropuerto) ≈ 90-110 imp en 3 meses** — las semillas: `/guides/best-airport-for-central-paris` 16 @10.0 · `/london/airport-choice` 9 @2.11 · `/paris-airports` 11 @43.4 · `/london-airports` 5 @38.6 · `/knowledge/heathrow-express-guide` 47 @71.8 · sleeping ×4 · `/compare/gatwick-vs-stansted` 4 @30.8 · `/compare/heathrow-vs-stansted` 1 @17 · `/questions/london-airport-break-even` 1 @19.
- **El declive de impresiones NO debe atribuirse a V2**: es principalmente el decaimiento de la página ITA Matrix legacy.

## 7. Reconciliación de los buckets de indexación (evidencia del owner, capturas 12-oct)

**A. 29 crawled-not-indexed:** 17 assets técnicos (`/_next/static`, CSS/JS/fonts/favicon) + 8 legacy V1 + 4 rutas V2: `/questions/london-airport-break-even`, `/compare/gatwick-vs-stansted`, `/methodology`, `/bart-trip-planner`. Las 4 son rutas V2 actuales ✓ (verificadas en inventario). **Las 2 primeras tienen impresiones en el export** (1 @19 y 4 @30.8) → servidas en SERPs en algún momento del periodo; la captura es una instantánea. No es penalty: es estado transitorio normal. Acción: re-evaluar con el siguiente snapshot.

**B. 4 alternate canonical:** `vrl-bus-booking`, `trimet-trip-planner`, `top-rated-tourists-attractions-in-rome`, `expedia-taap` — **todas legacy, todas en non-www** (last crawl may-jun 2026). Google eligió la versión www (que existe y está en el sitemap); el 308 non-www→www ya lo resuelve. **NO implican a los pares `-guide` V2** — cero cambios de canonical en V2.

**C. 2 robots-blocked:** `/result?…` con query params de viajes personalizados — **intencional** (Decision Engine personalizado; disallow + noindex). NO desbloquear.

**D. 17 404:** legacy V1 (`/blog/`, listicles, servicios, hoteles) + `/limitations` (ya corregido en 123.1 → `/limits`) + `/europe` (tiene 2 imp @5.5 residual en non-www → NEEDS EVIDENCE) + `/north-america`. Un 404 histórico no exige redirect.

**E. 32 redirects:** www↔non-www, http↔https, trailing slash, `/home`, legacy. **Canonicalización legítima, no defecto** — ruido amplificado porque el sitemap V1 histórico usaba base non-www (corregido en 121.1). Decae solo.

## 8. Limitaciones honestas

- 0 clics en 3 meses = no hay señal de conversión alguna todavía.
- Posiciones con 1-16 impresiones son muestras mínimas — no prueban rankings sostenibles.
- Competitividad SERP externa: **NOT VERIFIED** (sin research SERP en vivo).
- Sin cruce query×país ni página×país en el export.
- Ausencia en Pages.csv ≠ no indexada (puede ser solo 0 impresiones en el periodo).
- El export termina el 16-oct: los fixes de 123.1+ no tienen efecto medible aún.
