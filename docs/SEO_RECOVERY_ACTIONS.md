# Travelvus — SEO Recovery Actions (Matrix)

**Phase 123.2** · **Fecha:** 2026-10-17 · Estados: **READY** (evidencia técnica completa) · **BLOCKED** (requiere GSC/evidencia) · **NO ACTION** (intencional/inofensivo).

---

## READY — técnicamente verificados, requieren aprobación explícita para implementar

| # | URL / Ámbito | Problema | Evidencia | Severidad | Fix propuesto | Beneficio esperado | Riesgo | GSC requerido | Estado |
|---|---|---|---|---|---|---|---|---|---|
| R1 | 6 duplicados legacy: TSA×2, IRCTC, Costco, Oyster, army-dts | 404 con duplicado live | live 404 + targets 200 verificados (LEGACY_V1_REDIRECT_MATRIX.csv) | Media | 301 → target (mapa en REDIRECT-MAP-DRAFT.md) | Consolida señales residuales V1 | Bajo (targets verificados 1:1) | Recomendado | **READY — pendiente aprobación** |
| R2 | `/london/` | 404, era el "core market" de V1 | ledger #15 "REBUILD SAME URL" + hub V2 live | Media | 301 → `/london-airports` (o decision-center) | Recupera el path de mayor peso histórico de V1 | Bajo | Recomendado | **READY — pendiente aprobación** |
| R3 | Petición de exports GSC (§4 de GSC_INDEXATION_RECOVERY.md) | Sin datos URL-level | búsqueda repo = 0 exports | Alta | Owner: exportar 5 pestañas Page Indexing + Performance + sitemap → `docs/gsc-exports/` | Desbloquea el 80% de las decisiones de esta fase | Nulo | — (es el requisito) | **READY — acción del owner** |
| R4 | `/airport-transfer/` (404) | Intent sin página V2 | ledger #9 "Could become Decision Page" | Baja | Evaluar como futuro hub de transfers (contenido nuevo — NO en esta fase) | Alinea con estrategia B (transfers) | Medio (contenido nuevo) | Sí | **READY solo como decisión futura** |

---

## BLOCKED — requieren evidencia GSC por URL

| # | Ámbito | Decisión bloqueada | Evidencia que falta |
|---|---|---|---|
| B1 | Pares `-guide` ×3 | ¿canonical estática↔dinámica? (revisión completa en CANONICAL_CLUSTER_REVIEW.md) | impresiones históricas de cada URL del par + identidades de los 4 "alternate canonical" |
| B2 | 29 crawled-not-indexed | análisis de calidad por URL (§5 GSC_INDEXATION_RECOVERY.md) | sus identidades (export Page Indexing) |
| B3 | 47 legacy 404 | ¿301 (8 candidatos), 410 (14 candidatos) o no-action (25)? | impresiones/clicks de cada URL en 60-90 días (regla GSC-IMPORT-SCHEMA §D: 410 solo con 60d de cero impresiones) |
| B4 | Rebuild de legacy brand posts (kayak, wego, expedia-taap, …) | ¿reconstruir para afiliación o retirar? | si esas URLs reciben impresiones hoy (snapshot nuevo) |
| B5 | "2 robots-blocked" | confirmar identidad (hipótesis: `/result` + `/coverage` — intencional) | export Blocked by robots.txt |
| B6 | Snapshot post-fixes | verificar si la recuperación comenzó (indexed >81, crawled-not-indexed <29) | nuevo export completo |

---

## NO ACTION — intencional o inofensivo

- `/result`, `/coverage`, `/decision-master`, `/visual-system-preview` — noindex+disallowed deliberados.
- Trailing-slash 308s — canonicalización correcta (no consumen "redirect budget" de forma problemática; el bucket GSC de 32 redirects se re-evaluará con el export).
- `guides/heathrow-vs-gatwick` vs `compare/heathrow-vs-gatwick` — complementarios y alineados (cluster 3).
- `questions/london-airport-break-even` vs `compare/heathrow-vs-stansted` — complementarios y alineados (cluster 4).
- `best-airport-for-families-london` — nunca fue duplicado (cluster 2, disuelto).
- Lint 175 errores cosméticos — fuera de alcance.
- Errores factuales 123.0/123.1 — ya reparados y desplegados; no tocar.

---

## Orden de implementación recomendado (tras aprobación)

1. **R3** (owner exporta GSC — desbloquea todo lo demás)
2. Con exports: re-evaluar B6 (snapshot post-fixes) → priorizar según impresiones reales
3. **R1 + R2** (8 redirects 301 verificados — impacto bajo, señales consolidadas)
4. **B1** (canonical `-guide`) si las estáticas muestran más impresiones que las dinámicas
5. **B3** 410s solo tras 60 días de cero impresiones en los candidatos
6. **B4/B5** decisiones de contenido con datos

**Esta fase no despliega nada.** Cada paso de implementación tendrá su propia aprobación.
