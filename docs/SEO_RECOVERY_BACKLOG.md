# Travelvus — SEO Recovery Backlog (Priorizado)

**Phase 123.0** · **Fecha:** 2026-10-17 · Sin números de impacto inventados: "beneficio esperado" se expresa cualitativamente. Esfuerzo: S (<2h) · M (2-8h) · L (>8h).

---

## P0 — Cálculos rotos, errores factuales, bloqueadores de indexación

| # | URL/Archivo | Evidencia | Severidad | Acción propuesta | Beneficio esperado | Esfuerzo | Riesgo regresión | Verificación |
|---|---|---|---|---|---|---|---|---|
| P0-1 | `compare/paris-to-london/page.tsx` (todo) | Veredicto invertido vs sus tablas (31-32, 54-55), columnas cambian de significado, totals no derivan de line items, fecha revisión "January 2027" (90) | Crítica | Reescribir la página desde UN único objeto de datos: aeropuertos en scope (quitar Stansted del título o añadir su columna), Gatwick Express 30 min (un solo valor), totals = suma de componentes, veredicto derivado del total, fecha real | Elimina la página más autocontradictoria del sitio; la única página Paris-London deja de dar 3 respuestas | M | Bajo (página aislada, sin tests que dependan) | Unit test del cálculo + QA visual de las 3 columnas |
| P0-2 | Paris: 5 superficies Orly/CDG (`paris-destinations.ts`, `paris-airports-data.ts`, `guide-registry.ts:24-35`, `knowledge-registry.ts:52-98`, `paris/airport-choice`, guía estática central, `cdg-vs-orly`) | Ganador opuesto + fares 3 valores (€11/€11.80/€12 vs oficial €14) + "No direct Métro" falso desde jun-2024 + €9.30 premium inexistente + taxis invertidos | Crítica | Crear UN dataset canónico Paris con facts oficiales 2026 (€14 ambas, Metro 14 ~25 min, taxis €56/65 y €45/36, CDGVAL 04:00-01:00) y propagar a las 7 superficies; alinear ganadores con un solo criterio (p.ej. por arrondissement) | Fin del conflicto más visible del sitio; consistencia en 7 URLs indexables | L | Medio (toca 7 superficies + tests de datasets) | Tests de dataset + grep de fares antiguos = 0 + QA visual |
| P0-3 | 4 compare pages invertidas: `compare/heathrow-vs-luton`, `compare/gatwick-vs-luton`, `compare/heathrow-vs-london-city`, `compare/gatwick-vs-london-city` (+ `luton-vs-london-city`, `stansted-vs-london-city`, `stansted-vs-luton`) | Columnas a/b intercambiadas (32-54), placeholders literales "Depends on destination wins" (18,23), winner labels erróneos | Crítica | Corregir el mapeo de columnas del template + reemplazar todos los placeholders por frases reales; arreglar `heathrow-vs-luton:43` (Wizz/easyJet en columna Heathrow) | 7 páginas dejan de mostrar datos invertidos y texto roto | M | Medio (template compartido — validar las 10 city-to-London) | QA visual de las 7 + test del render de ganador |
| P0-4 | `compare/heathrow-vs-stansted` umbral 62/68 + worked example -€33 + break-even >€101 | 3 valores incompatibles del mismo umbral (25-27 vs 37 vs break-even:15-18); mock dice €24 | Crítica | Derivar umbral y worked example del MISMO dataset (`lgw-vs-stn` pattern); alinear `questions/london-airport-break-even` con él | Una sola respuesta al query más transitado del cluster Stansted | M | Medio (toca 2 páginas + engine) | Unit test del tiePoint + QA |
| P0-5 | `src/app/sitemap.ts` | `/limitations` → 404 (la ruta es `/limits`); 44 rutas indexables fuera; lastmod = fecha de build (2026-08-10) para las 87 | Alta | Fix del slug; añadir las 44 rutas (17 compare, 22 guías estáticas, decision-center, `/limits`, 3 legacy); lastmod por archivo real (git) o eliminarlo; considerar excluir las 4 noindex | Sitemap limpio: 0 404s, 174 URLs válidas, señales de frescura honestas | S | Bajo | `curl sitemap.xml` + script de validación contra rutas |
| P0-6 | `components/ui/TrustPage.tsx:69` | Footer compartido de 4 páginas (methodology, editorial-standards, data-coverage, limits) enlaza `/limitations` → 404 | Alta | Corregir a `/limits` | Elimina 4 enlaces internos rotos | S | Bajo | grep + curl 200 |
| P0-7 | `guide-registry.ts:650` | Enlace a `/guides/best-airport-for-financial-district` — ruta inexistente | Alta | Eliminar el related-link o crear la ruta | Elimina 404 interno desde páginas de guías | S | Bajo | grep + curl |
| P0-8 | London City mal etiquetado: `compare/amsterdam-to-london:62-64`, `compare/dublin-to-london:62,64` (+ frankfurt/milan/rome Gatwick Express en columna STN; 45 vs 30 min en barcelona/lisbon/madrid/paris) | LCY descrito con Elizabeth Line/Piccadilly — LCY solo tiene DLR | Alta | Reescribir los transfer labels de las 5 páginas city-to-London con datos reales por aeropuerto (LCY: DLR ~25 min ~£3.30) | Elimina errores factuales en 5 URLs de intención transaccional | M | Bajo (páginas aisladas) | grep de "Elizabeth Line" en páginas LCY = 0 |
| P0-9 | NY fares: `ny-airports-data.ts:45-50,66-73`, `knowledge-registry.ts:377-419` | AirTrain $8.50→$8.75; "AirTrain+Subway ~$8" imposible; Newark $15/15.50→$17.25; "free" condicional | Alta | Actualizar al oficial 2026; corregir la frase "free" (solo con billete NJT/Amtrak) | Facts correctos en 2 datasets + 4 páginas knowledge | S | Bajo | Test de dataset + grep |
| P0-10 | London fares: `london-airports-data.ts:45-46,64-65,82-83,100-105`, `knowledge-registry.ts:217-258` | HEx £25→£26; Elizabeth £12 vs €18 inconsistentes; Stansted Express sin advance lead-in; DART descrito como "shuttle bus" | Alta | Unificar fares en un solo valor con fecha de verificación; DART = people mover ferroviario | Consistencia London en todos los compare | M | Bajo-Medio | Test + grep |

---

## P1 — Canibalización, correcciones editoriales importantes, enlaces

| # | URL/Archivo | Evidencia | Acción propuesta | Beneficio esperado | Esfuerzo | Riesgo | Verificación |
|---|---|---|---|---|---|---|---|
| P1-1 | Pares `-guide`: `central-paris`, `la-defense`, `gare-du-nord` (estática vs registry) | Ambas live, self-canonical, títulos idénticos en 2 pares, solo el `-guide` está en sitemap | Elegir canónica editorial (la estática, más rica) → añadir las estáticas al sitemap; canonical del `-guide` → estática. Consolidación total (redirect) SOLO después de datos GSC | Una señal única por intent | S-M | **Medio** (cambiar canonicals sin datos GSC puede costar tráfico residual; por eso el redirect se posterga) | GSC "Alternate page" debe bajar de 4 a 0 en 30-60d |
| P1-2 | Guías London: 6 "broken promises" (`central-london:43-46`, `north-london:42-43`, `business-travel:43`, `fastest-london-airport:43`, `cheapest-london-airport:43`) | Párrafo "Here is how the airports compare:" seguido de nada | Añadir las tablas prometidas (ya existe el dato en `london-airports-data.ts`) | 6 páginas pasan de promesa rota a utilidad real | M | Bajo | QA visual |
| P1-3 | Ganadores contradictorios por cluster: L2 (north/Kings Cross), L5 (business LCY vs LHR), L8 (fastest), N1-N4 (Manhattan vs jfk-vs-newark, hub vs guías), L6 (cheapest 3 marcos) | Ver EDITORIAL_CONFLICTS §2-3 | Alinear cada cluster a UN ganador con criterio explícito por persona/destino; marcar condiciones en las 2 superficies | Consistencia entre guía, registry y hub | L | Medio | Re-lectura editorial + QA |
| P1-4 | `/guides/heathrow-vs-gatwick` vs `compare/heathrow-vs-gatwick` | Conclusiones opuestas (L1) + guía autocontradictoria | Corregir la guía para que derive del dataset compare (o diferenciar explícitamente el escenario: guía = sin maleta, compare = con maleta) | Una sola respuesta por escenario declarado | M | Bajo | QA |
| P1-5 | `/planner/page.tsx` | Sin metadata export: título genérico "Travelvus — Which really wins?" heredado; priority 0.9 en sitemap | Añadir title/description/canonical propios | La página de más alta prioridad del sitemap deja de indexarse con título genérico | S | Bajo | curl title |
| P1-6 | 17 páginas sin canonical (3 hubs `*/airport-choice`, `/methodology`, `/data-coverage`, `/editorial-standards`, `/limits`, 5 guías estáticas, `/planner`) | Verificado en HTML en vivo | Añadir `alternates.canonical` absoluto + `metadataBase` en layout.tsx | Señales canónicas consistentes; previene duplicados futuros | S | Bajo | curl canonical en las 17 |
| P1-7 | `/new-york-airports` | Sin outlinks (dead end) + páginas live listadas "Coming soon" (47-54, 272, 300) | Enlazar las guías NY existentes; eliminar FUTURE_LINKS | El hub NY distribuye autoridad interna; sin contenido muerto | S | Bajo | QA + count de inlinks |
| P1-8 | 48 URLs V1 sin redirect (MASTER-URL-LEDGER) | Solo `/home` implementado de 7 planificados; 31 URLs fantasma en GSC | Implementar los 6 redirects de REDIRECT-MAP-DRAFT (TSA×2, IRCTC, Costco, Oyster, army-dts) + evaluar `/london/` → `/london-airports` o decision-center | Limpia crawl budget y preserva señales residuales V1 | S | **Medio** (redirects mal dirigidos pueden perder señales; verificar destino uno a uno) | GSC "Not found" debe bajar de 17; revisión 30d |
| P1-9 | Colisión `best-airport-for-families-london` (registry:377 shadowed por estática) | Código muerto; canonical dinámico apunta a la estática | Eliminar la entrada del registry (o renombrar slug) | Elimina código muerto confuso | S | Bajo | grep + build |
| P1-10 | `london/airport-choice` título "Heathrow or Stansted?" | Excluye Gatwick/Luton/LCY del título siendo la página "choice" de Londres | Ampliar título/scope o fusionar con decision-center (fase posterior) | Titulo coherente con contenido | S | Bajo | QA |
| P1-11 | L3 último Stansted Express 23:30 vs 00:30 (`london-airport-decision-center:148`) | Conflicto 1h | Unificar a 00:30 (dato de las otras 2 superficies + horario oficial ~00:30) | Elimina conflicto | S | Bajo | grep |
| P1-12 | Typos franceses "4er/5er/6er/8er/9er/18er" (`best-airport-for-central-paris:53-57`) | No son ordinales franceses | Corregir a 4e/5e/6e/8e/9e/18e | Credibilidad editorial en la página canónica propuesta | S | Bajo | QA |

---

## P2 — Metadata y conversión

| # | Ámbito | Evidencia | Acción | Esfuerzo |
|---|---|---|---|---|
| P2-1 | Structured data | Cero JSON-LD en todo el codebase | Añadir JSON-LD: `Article` + `FAQPage` en guías/knowledge, `WebSite`+`Organization` en home | M |
| P2-2 | 404 page | Título de homepage, sin canonical | Título propio + noindex explícito | S |
| P2-3 | Canonicals relativos (64) | Funcionan, pero frágiles | Con metadataBase, Next emitirá absolutos; validar | S |
| P2-4 | Lint 181 errores | 64 unescaped, 63 any, 54 unused | Limpiar en 2 tandas (legacy, engines); no afecta SEO | M |
| P2-5 | Legacy Tier 2-6 (19 páginas) | Sin conflicto V2 pero diluyen foco topical | Decisión posterior con datos GSC (ninguna acción ahora) | — |
| P2-6 | P5/P2-N5 inconsistencias menores (taxi LGA $35-55 vs $35-50, fares Paris en 3 valores) | Ver conflictos | Se resuelven automáticamente con P0-2 (dataset único) | incluido en P0-2 |
| P2-7 | `LiveComparison.tsx:22` hardcode 159 | No derivado del bag line | Derivar del dataset | S |
| P2-8 | Badge "Recommended" por orden de array (`GuidePage.tsx:66-68`) | Puede contradecir el takeaway | Badge desde el campo de ganador del entry | S |

---

## Orden de ejecución recomendado

**Fase 123.1 (P0, 2-4 días de trabajo):** P0-5, P0-6, P0-7 (sitemap+enlaces, 1 sesión) → P0-2 (dataset Paris, la más grande) → P0-1 + P0-3 + P0-4 (compare pages) → P0-8, P0-9, P0-10 (fares London/NY).

**Fase 123.2 (P1, después de P0 + exports GSC):** P1-1 (canonicals -guide SOLO con datos), P1-5, P1-6, P1-7, P1-9, P1-11, P1-12 → P1-2, P1-3, P1-4 (editorial).

**Fase 123.3 (P2, continua):** P2-1, P2-2, P2-3, P2-4, P2-7, P2-8.

**Reglas:** nunca redirects masivos · nunca noindex masivo · nunca borrados masivos · cada cambio de URL con su redirect+canonical plan · Decision Engine, Evidence Engine, City Factory, Coverage Dashboard y el design system se preservan intactos.
