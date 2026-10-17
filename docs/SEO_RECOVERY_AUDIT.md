# Travelvus — SEO Recovery Audit

**Phase 123.0** · **Fecha:** 2026-10-17 · **Alcance:** auditoría read-only (no se modificó código de producto)
**Producción:** https://www.travelvus.com · **Repo:** `travelvus-build/travelvus-v2`

**Base de evidencia:**
- Inventario de 134 rutas públicas desde el App Router + 2 registries (`guide-registry.ts` 37 slugs, `knowledge-registry.ts` 16 slugs) → CSV en [AUDIT_ROUTES.csv](AUDIT_ROUTES.csv)
- Verificación HTTP en vivo de las 134 URLs + sitemap + robots.txt (2026-10-17)
- Lectura editorial de todos los clusters Paris/London/NY + 22 páginas legacy con file:line
- Auditoría de datos y motores de cálculo + verificación de facts contra fuentes oficiales (RATP/ÎdFM, TfL, Heathrow Express, Stansted Express, NJ Transit, Eurostar — acceso 2026-10-17)
- QA: 346/346 tests, build OK, lint 181 errores (cosméticos)

**Observaciones GSC proporcionadas por el owner (28 días):** 81 indexed, 84 not indexed (32 redirects, 17 404, 2 robots-blocked, 29 crawled-not-indexed, 4 alternate canonical) · 42 impresiones · 0 clics. **Sin exports de GSC, la asignación URL→bucket permanece NO VERIFICADA** (ver §C).

---

## A. Hipótesis de causa raíz, ordenadas por evidencia

| # | Hipótesis | Evidencia | Verdicto |
|---|-----------|-----------|----------|
| H1 | **Contenido contradictorio**: el sitio publica respuestas opuestas a las mismas preguntas (Orly vs CDG, Heathrow vs Gatwick, STN threshold) en URLs indexables simultáneas | 30+ contradicciones confirmadas con file:line (ver EDITORIAL_CONFLICTS.md); 5 superficies Paris con datos distintos; placeholders literales en producción ("Depends on destination wins") | **CONFIRMADO como defecto** (su efecto ranking es hipótesis) |
| H2 | **Errores factuales**: fares/times desactualizados vs tarifas oficiales 2026 (RER B €14, Metro 14 a Orly desde jun-2024, taxis Paris, AirTrain $8.75, Newark $17.25) | 14 facts verificados OUTDATED contra fuentes oficiales | **CONFIRMADO** |
| H3 | **Cobertura de indexación incompleta**: 44 rutas indexables fuera del sitemap; 1 URL 404 dentro del sitemap; lastmod falso (fecha de build para las 87) | Verificación HTTP en vivo | **CONFIRMADO** |
| H4 | **Dominio nuevo en fase cold-start**: dominio lanzado ~jul-2026, ~3 meses de edad, sin backlinks medibles | Git/deploy history; 42 impresiones/0 clics es consistente con un dominio nuevo sin autoridad | **PLAUSIBLE** (sin datos de backlinks, no verificable) |
| H5 | **Duplicados sin señal canónica**: 3 pares `-guide`/no-guide live, todos self-canonical, 2 pares con títulos idénticos | Verificación HTTP | **CONFIRMADO como defecto** |
| H6 | **Inconsistencia de canonical/metadata**: 17 páginas sin canonical, formatos mixtos (relativo vs absoluto), sin metadataBase | Verificación HTTP + source | **CONFIRMADO como defecto** |
| H7 | **Dilución de crawl por residuos V1**: 31 URLs fantasma en GSC (165 descubiertas vs 134 rutas) = URLs V1 sin redirect | 48 URLs V1 sin ruta ni redirect en MASTER-URL-LEDGER; solo 1 de 7 redirects planificados implementado | **PLAUSIBLE** (los buckets GSC exactos requieren export) |

**Conclusión honesta:** los defectos H1-H3, H5-H6 están probados como defectos del sitio. Que sean LA causa de la baja visibilidad no se puede probar sin datos GSC por URL y sin datos de backlinks. La hipótesis más defendible por evidencia combinada: **un dominio de 3 meses con contenido contradictorio, facts desactualizados y sitemap incompleto no tiene condiciones para competir** — cada capa de defecto amplifica la siguiente.

---

## B. Inventario de indexabilidad (Part A + E)

**Universo:** 134 URLs públicas = 81 estáticas + 37 guides dinámicas + 16 knowledge dinámicas. 130 indexables por diseño, 4 noindex deliberados (`/coverage`, `/decision-master`, `/visual-system-preview`, `/result`).

**Sitemap: 87 entradas.** Estado:
- ✅ 86 rutas válidas · ❌ **1 URL 404 dentro del sitemap**: `/limitations` (la ruta real es `/limits`)
- ❌ **44 rutas indexables fuera del sitemap**: 17 compare, 22 guías estáticas (incl. `/guides/cdg-vs-orly` con 20 inlinks), `/london-airport-decision-center`, `/limits`, 3 legacy
- ❌ **lastmod falso**: las 87 URLs llevan la fecha de build (2026-08-10), no su fecha real de modificación

**HTTP en vivo (134/134 rutas):** todas 200. Cero redirects entre rutas actuales. Hostname correcto (non-www→www 308, http→https, trailing slash 308-off).

**Orfandad:** 32 páginas con 0 inlinks internos (29 indexables). `/new-york-airports` es callejón sin salida (solo CTAs `/#compare`). Link interno roto: `/guides/best-airport-for-financial-district` (guide-registry.ts:650) → 404.

**Canonical:** 17 páginas sin canonical (incl. los 3 hubs `*/airport-choice`, `/planner`, `/methodology`, `/limits`). 64 canonicals relativos vs 53 absolutos (sin metadataBase en layout). Todos self-referenciales: **los 3 pares duplicados `-guide` no emiten ninguna señal canónica entre sí**.

**Residuos V1:** 48 URLs del ledger V1 sin ruta ni redirect (incl. `/london/` marcada "REBUILD SAME URL" en su día). De 7 redirects planificados (REDIRECT-MAP-DRAFT), solo `/home` está implementado.

**Structured data:** cero JSON-LD en todo el codebase.

---

## C. Reconciliación GSC (Part B)

**Qué cuadra con los datos del owner:**
- **"87 discovered sitemap URLs"** = exactamente las 87 entradas del sitemap actual. Reconciliación cerrada: 86 rutas válidas + 1 404 (`/limitations`).
- **165 URLs en GSC (81+84) vs 134 rutas actuales** = 31 URLs fantasma: residuos V1 (48 URLs del ledger sin redirect), variantes non-www/trailing-slash, y entradas históricas del sitemap (v1 emitía 28 URLs con base `https://travelvus.com` non-www hasta Phase 121.1).
- **"2 robots-blocked"**: hipótesis de alta probabilidad = `/result` y `/coverage`, las únicas 2 URLs disallowed en robots.txt + noindex a nivel de página. **No confirmado sin export.**
- **"4 alternate canonical"**: candidatos posibles = los 2 pares con títulos idénticos (`la-defense`, `gare-du-nord` ± `-guide`); no hay cross-canonicals en vivo, así que el origen exacto **no es verificable sin export**.

**Qué permanece NO VERIFICADO (requiere exports GSC):**
- La asignación URL→bucket de los 32 redirects, 17 404, 29 crawled-not-indexed.
- Query-level data (por qué 42 impresiones en qué queries).

**Spec de importación GSC (exacto):** ya existe en [GSC-IMPORT-SCHEMA.md](GSC-IMPORT-SCHEMA.md). Para esta fase se necesitan además:
1. **Page Indexing → Export de las 4 tablas** (Redirected / Not found 404 / Crawled not indexed / Alternate page) → `gsc-indexing-{bucket}.csv`
2. **Performance → Pages** (28d) → `gsc-pages.csv`
3. **Sitemaps → Detalles del sitemap** (87 discovered) → screenshot o CSV
4. Depositar en `docs/gsc-exports/` y re-ejecutar la reconciliación: cada URL del export se mapea al CSV de rutas con la regla de normalización de GSC-IMPORT-SCHEMA.md §C.

---

## D. Contradicciones editoriales confirmadas (Part C/D)

Resumen — el detalle completo con file:line y quotes está en [EDITORIAL_CONFLICTS.md](EDITORIAL_CONFLICTS.md):

- **Paris**: ganador opuesto central Paris (Orly vs CDG) entre 5 superficies; tiempos 35/40/50 min según archivo; Montparnasse se autocontradice; cheapest vs central se contradicen.
- **London**: guide vs compare Heathrow-Gatwick con conclusiones opuestas; umbral Stansted 3 valores (€62 / >€101 / €33 loss); 4 compare pages con columnas invertidas y placeholders literales visibles; London City descrito con Elizabeth Line/Piccadilly (solo tiene DLR) en 5+ páginas.
- **New York**: Manhattan vs jfk-vs-newark dan ganadores opuestos por barrio; JFK 35 vs 50 min; hub marca JFK mientras las guías marcan Newark.
- **Paris-to-London**: veredicto "Heathrow wins" invertido respecto a sus propias tablas (Gatwick 30 min más rápido); columnas cambian de significado entre filas; totals no derivan de sus line items; fecha de revisión "January 2027" (futura).
- **Engine**: handoff de tiempo muestra el ganador por dinero; frases causales hardcodeadas; el único path de cálculo para Paris reutiliza vuelos mock de Londres → tercera respuesta (Orly €27).

---

## E. Defectos técnicos: reales vs opcionales (Part E)

**Defectos reales (P0/P1):**
1. `/limitations` en sitemap → 404 (sitemap.ts:39; link roto en TrustPage.tsx:69 compartido por 4 páginas)
2. 44 rutas indexables fuera del sitemap (sitemap.ts legacy list incompleta)
3. lastmod falso = fecha de build (sitemap.ts:8,13)
4. 48 URLs V1 sin redirect (6 de 7 redirects planificados no implementados, next.config.ts)
5. 17 páginas sin canonical; metadataBase ausente (layout.tsx)
6. Link interno roto `/guides/best-airport-for-financial-district` (guide-registry.ts:650)
7. `/planner` sin metadata (título genérico heredado) pese a priority 0.9 en sitemap
8. `/new-york-airports` sin outlinks internos + muestra páginas live como "Coming soon" (new-york-airports/page.tsx:47-54,272,300)

**Mejoras opcionales (P2):**
- Cero structured data (JSON-LD FAQ/Article) — oportunidad, no bloqueante
- Canonicals relativos sin `<base>` — funcionales pero frágiles
- 404 con título de homepage y sin canonical
- Lint: 181 errores cosméticos (unescaped entities en legacy, any en specs, unused vars)

**Correcto y no tocar:** hostname canonicalization, trailing slash, robots.txt, noindex de tools internas, peso de páginas (57-84KB, TTFB ~0.12s), SSR/SSG de todas las rutas, 346/346 tests, build limpio.

---

## F. Valor de contenido por familia (Part F)

| Familia | Veredicto | Acción prioritaria |
|---------|-----------|--------------------|
| Compare London (20) | 4 con columnas invertidas/placeholders; 10 city-to-London son templates casi idénticos con errores de etiquetas | **P0** corregir datos; reescribir las 5 con errores factuales |
| Guías estáticas (22) | Ricas (92-327 líneas) pero con contradicciones internas y 6 "broken promises" (tablas anunciadas que no existen) | **P1** alinear ganadores + completar tablas |
| Guías registry (37) | Clones de 15-23 líneas; 3 duplican estáticas con respuesta opuesta; 1 colisión exacta de ruta (`best-airport-for-families-london`) | **P1** canonical/consolidación posterior |
| Hubs (7) | Decision-center rico; NY hub con contenido muerto; hubs sin canonical | **P1** |
| Knowledge (16) | Útiles, pero con fares desactualizados (AirTrain, NJ Transit, CDGVAL 24/7) | **P1** refresh de facts |
| Legacy (22) | Tier 1 (break-even, real-cost, total-time) compite con la metodología V2; resto: sin conflicto pero diluye el foco | **P2** revisión posterior, no redirects ahora |
| Trust/About (5) | Correctos; `/limitations` roto | **P0** fix del link |

---

## G. Tests y build (Part I)

- ✅ `npm test`: 346/346 passed (11 files)
- ✅ `npm run build`: correcto; 134 rutas prerenderizadas (SSG/static + 2 dinámicas)
- ⚠️ `npm run lint`: 181 errores — 64 `react/no-unescaped-entities` (legacy), 63 `no-explicit-any` (e2e specs), 54 `no-unused-vars` (engines). Cosméticos, sin impacto runtime/SEO.
- ✅ Cobertura Paris/London/NY: los 3 hubs + decision centers permanecen 100% (score model CITY_EXPANSION_STANDARD sin cambios de rutas)

---

## H. Siguiente fase segura de implementación

**Phase 123.1 — Reparaciones críticas (P0)**, sin cambios de URL:
1. Fix sitemap: `/limitations`→`/limits`, añadir las 44 rutas indexables que faltan, lastmod real por archivo
2. Fix de facts en el dataset canónico Paris (€14, Metro 14, taxis 2026) + superficies dependientes
3. Fix de las 4 compare pages con columnas invertidas + placeholders
4. Fix del link interno roto y del footer compartido
5. `metadataBase` + canonical en las 17 páginas que no lo tienen

**No se hará en 123.1:** redirects masivos, noindex, consolidación de URLs, borrados. Todo ello requiere primero los exports GSC de §C y aprobación explícita del plan de consolidación (RECOVERY_30_60_90.md).

**Backlog completo priorizado:** [SEO_RECOVERY_BACKLOG.md](SEO_RECOVERY_BACKLOG.md) · **Plan 30/60/90:** [RECOVERY_30_60_90.md](RECOVERY_30_60_90.md) · **Contradicciones detalladas:** [EDITORIAL_CONFLICTS.md](EDITORIAL_CONFLICTS.md)

---

*Regla final cumplida: ningún claim sobre la causa de la baja visibilidad se presenta como probado; los defectos del sitio están confirmados con evidencia, su impacto en ranking es hipótesis hasta que existan datos GSC por URL.*
