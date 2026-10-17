# Travelvus — GSC Indexation Recovery

**Phase 123.2** · **Fecha:** 2026-10-17 · Diagnóstico basado en evidencia. Sin implementación.

---

## 1. Snapshot GSC del owner (histórico, ~3 meses)

| Métrica | Valor |
|---|---|
| Indexed | 81 |
| Excluded | 84 (32 redirects + 17 404 + 29 crawled-not-indexed + 4 alternate canonical + 2 robots-blocked) |
| Impresiones | ~1,420 en 3 meses (≈470/mes) |
| Clics | **0** |
| Mercados | US, UK, CA, AU |

**Naturaleza del dato:** snapshot histórico **anterior a las fases 123.1/123.1.1/123.1.2**. Muchas causas de esos buckets ya fueron reparadas (sitemap 87→130 sin ghost, canonicals completos, compare pages arregladas, contenido editorial completado). **Se requiere un snapshot NUEVO post-fixes para medir la recuperación.**

**No existe ningún export GSC en el repositorio** (búsqueda completa: solo GSC-IMPORT-SCHEMA.md). No se inventan datos URL-level.

---

## 2. Reconciliación de los buckets (evidencia disponible)

| Bucket | Hipótesis respaldada por evidencia | Verificado |
|---|---|---|
| 32 redirects | trailing-slash 308 (todos los paths con `/` final), non-www→www, `/home`→`/`; sitemap V1 histórico usaba `https://travelvus.com` (non-www) hasta Phase 121.1 | parcial — identidades exactas requieren export |
| 17 404 | candidatos: `/limitations` ghost (ya arreglado), URLs V1 eliminadas (47 legacy 404 mapeadas), links rotos internos (ya arreglados) | parcial |
| 2 robots-blocked | **alta probabilidad: `/result` y `/coverage`** — las únicas 2 disallowed en robots.txt + noindex | no confirmado sin export |
| 4 alternate canonical | candidatos: los 2 pares `-guide` con títulos idénticos (`la-defense`, `gare-du-nord`) + posiblemente trailing-slash de canonicals relativos pre-metadataBase | no confirmado |
| 29 crawled-not-indexed | **sin identidades = sin análisis posible**. Hipótesis: guías registry thin pre-123.1, páginas con veredictos contradictorios, duplicados sin señal | NO VERIFICADO |
| 81 indexed | no se sabe cuáles | NO VERIFICADO |

---

## 3. Qué se sabe hoy (verificado en esta fase)

- Sitemap: **130 URLs válidas**, 0 ghost, sin lastmod fabricado (verificado live 2026-10-17).
- Canonical: las 130 páginas indexables emiten canonical absoluta (metadataBase en layout, 13 páginas completadas en 123.1).
- HTTP: 130/130 rutas actuales = 200; hostname/trailing-slash correctos.
- 47 URLs legacy V1 dan **404 sin redirect** (matriz completa en LEGACY_V1_REDIRECT_MATRIX.csv).
- Contenido: 0 placeholders, 0 contradicciones conocidas, facts verificados 2026-10-17.
- El sitemap válido **no prueba indexación** — el problema de indexación no se declara resuelto sin un snapshot nuevo.

---

## 4. Export GSC requerido (petición precisa al owner)

Ir a [search.google.com/search-console](https://search.google.com/search-console) → propiedad travelvus.com:

1. **Page Indexing → las 5 pestañas** (Redirected / Not found (404) / Crawled - currently not indexed / Alternate page / Blocked by robots.txt) → Export de CADA una → `gsc-indexing-{tipo}.csv`
2. **Performance → Search Results** (últimos 3 meses) → +New → Page → Export → `gsc-pages.csv`
3. **Performance** → +New → Query → Export → `gsc-queries.csv`
4. **Sitemaps** → captura/estado del sitemap actual (130 URLs)

Depositar en `docs/gsc-exports/` (spec de columnas y join ya en GSC-IMPORT-SCHEMA.md §A-C).

**Con esos exports se desbloquean:** identidades de los 29 crawled-not-indexed (§5), asignación URL→bucket, decisión canónica de los pares `-guide`, decisión 301/410 de las 47 legacy, y el análisis de los 4 alternate canonical.

---

## 5. Los 29 crawled-not-indexed — protocolo cuando lleguen las identidades

Para cada URL conocida: (1) intent único vs solapamiento con otras páginas Travelvus; (2) completitud del contenido; (3) inlinks internos; (4) fiabilidad factual; (5) calidad del template; (6) satisfacción del intent; (7) valor de decisión original. **No se concluye penalty sin evidencia. No se crea contenido nuevo en esta fase.**

---

## 6. Estrategia comercial (clasificación, no monetización)

Enfoque: tráfico orgánico cualificado → decisiones de aeropuerto → transfers → afiliación de viaje (CPA). AdSense NO es requisito estratégico.

Clasificación de las 130 páginas (detalle por URL en URL_RECONCILIATION.csv):

| Clase | Intención | Nº | Fit afiliación (futuro, sin implementar) |
|---|---|---|---|
| A | Airport choice (guías/hubs) | 66 | Alto — Travelpayouts flight programs |
| B | Airport-to-city transport (knowledge) | 16 | Alto — transfers (Intui.travel, Drimsim) |
| C | Comparison (compare pages + umbrales) | 22 | Alto — flight CPA |
| D | Travel planning / brand posts (legacy) | 20 | Medio — OTA programs |
| E | Informational / trust / utility | 6 | Bajo |
| **Total** | | **130** | |

Prioridad de recuperación de indexación: **A > B > C** (las tres primeras clases son el núcleo comercial); D se mantiene sin inversión nueva; E es soporte de confianza.

---

## 7. Criterios de éxito honestos (a verificar con el snapshot post-fixes)

- Indexed pages ↑ vs 81 · "Crawled - currently not indexed" ↓ vs 29 · 404s en GSC ↓ vs 17 · alternate canonicals ↓ vs 4.
- Impresiones: tendencia positiva tras 123.1+123.1.1+123.1.2 (magnitud NO se predice).
- Sin clicks >0, ninguna conclusión de "recuperación" se considera demostrada.
