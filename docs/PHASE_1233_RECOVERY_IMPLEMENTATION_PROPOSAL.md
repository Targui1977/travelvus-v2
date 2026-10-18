# Travelvus — Phase 123.3 Recovery Implementation Proposal

**NO se implementa en esta fase.** Batch mínimo propuesto para Phase 123.4, sujeto a aprobación del owner.

---

## Batch 1 — Técnico (bajo riesgo, verificado)

| # | Acción | Archivos | Efecto esperado | Riesgo | Verificación |
|---|---|---|---|---|---|
| 1.1 | 7 redirects 301 (6 duplicados legacy + `/london/`→`/london-airports`) | `next.config.ts` (redirects) | Consolida señales residuales; limpia el bucket "Page with redirect" | Mínimo (destinos 200 verificados 1:1) | curl de los 7: 308→301→200 destino correcto; tests internos intactos |
| 1.2 | NADA más técnico | — | — | — | — |

**No incluye:** 410s (bloqueados hasta 60d de cero impresiones post-siguiente-export) · cambios de canonical (DEFER) · `/airport-transfer/` (REJECT) · ninguna acción sobre `/computicket-travel`, `/europe` o listicles con señal residual.

## Batch 2 — Editorial mínimo (solo afinado, sin contenido nuevo)

| # | Página | Cambio propuesto | Justificación (señal) |
|---|---|---|---|
| 2.1 | `/knowledge/heathrow-express-guide` | Verificar que H1/title/FAQ expone el precio exacto (£26 single, advance desde £10) para "heathrow express price/single ticket price/single fare" (9+2+2 imp @48-73) | Query comercial con más volumen de todo el export |
| 2.2 | `/guides/best-airport-for-kings-cross` | Ajustar title/H1 hacia "nearest airport to Kings Cross" (query 1 imp @48) manteniendo el ganador Luton ya corregido | Señal de query real |
| 2.3 | `/guides/best-airport-for-paddington` | Verificar H1 incluye "Paddington" + Heathrow Express 15 min | 2 imp @48.5 |
| 2.4 | `/knowledge/sleeping-at-stansted` + `-heathrow` | FAQ directa "can you sleep at X airport overnight" (queries 6+4+1+1 imp @53-82) | Cluster de queries real |

**REQUIRES LIVE SERP RESEARCH previo** en 2.1-2.4 (competidores en esas SERPs) — sin eso, NO se toca nada.

## Batch 3 — Esperar datos (la mayor parte)

- **Próximo export GSC** (16-oct → 15-nov, o similar): medir el efecto de los fixes 123.1+123.1.1+123.1.2 desplegados el 17-oct. **Es EL hito**: sin él, cualquier decisión de contenido se basa en el estado pre-fix.
- Vigilar las 6 semillas <pos 20: central-paris (10.0), london/airport-choice (2.11), heathrow-vs-stansted (17), break-even (19), gatwick-vs-stansted (30.8), new-york-airports (9.5).
- Re-evaluar buckets: crawled-not-indexed (29), alternates (4), 404 (17) — con el snapshot nuevo.
- Decidir los `-guide` solo con 60+ días de datos post-fixes.

## Riesgos y reglas

- Competitividad SERP externa **NOT VERIFIED** — nada editorial se ejecuta sin research en vivo.
- Sin contenido nuevo, sin ciudades, sin afiliación, sin AdSense.
- Objetivo de negocio ($1,000/mes afiliación/CPA en ~12 meses) = meta, no forecast. El export actual muestra **0 clics y 0 conversiones** — la base de partida es cero; las semillas pos<20 son la única señal accionable hoy.
