# Travelvus — Canonical & Duplication Cluster Review

**Phase 123.2** · **Fecha:** 2026-10-17 · Diagnóstico only — NO se cambian canonicals en esta fase.
**Regla:** ninguna consolidación sin evidencia GSC por URL (qué URL recibe impresiones históricas).

---

## Cluster 1 — `-guide` pairs (Paris, 3 pares)

| Campo | Estática | Dinámica (`-guide`) |
|---|---|---|
| URL | `/guides/best-airport-for-central-paris` | `/guides/best-airport-for-central-paris-guide` |
| Template | estática (HeroEditorial, ~92 líneas, decisionIntelligence, evidence engine) | registry (`guide-registry.ts:21`, card de datos ~16 líneas) |
| Intent primario | **IDÉNTICO** — "best airport for central Paris" | **IDÉNTICO** |
| Info única | Tablas por barrio, flips, tradeoffs, FAQ rico, mapa | Card corta con 4 transferFacts (mismos datos canónicos desde 123.1) |
| Canonical actual | self (absoluta) | self (absoluta) |
| Sitemap | ✅ sí (desde 123.1) | ✅ sí |
| Inlinks | alta (hubs Paris + otras guías) | media (relatedGuides del knowledge) |
| Contenido tras 123.1 | **Ambas usan los mismos facts canónicos** (€14, M14 ~25 min) — la contradicción de 123.0 ya no existe | ídem |

**Mismos pares:** `la-defense` / `la-defense-guide` · `gare-du-nord` / `gare-du-nord-guide` (estos dos pares tenían **títulos idénticos** — probable origen de 2 de los "4 alternate canonical" de GSC).

**Evaluación:** la estática es editorialmente superior en los 3 casos (más rica, mismo intent, ya es el destino de la mayoría de inlinks). La dinámica es un subconjunto del mismo contenido. **Consolidación recomendada: canonical dinámica → estática** (o 301 en fase posterior).
**BLOQUEADO** — requiere export GSC: si la `-guide` tiene impresiones históricas y la estática no, la decisión se invierte (o se consolida con redirect en la dirección opuesta). GSC bucket "Alternate page with proper canonical tag" (4 URLs) debe leerse para confirmar si estos pares son el origen.

---

## Cluster 2 — `best-airport-for-families-london`

- Verificado en 123.1: **no existe página estática con ese slug** — la URL `/guides/best-airport-for-families-london` la sirve únicamente el template dinámico (registry `guide-registry.ts:377`). El item P1-9 del backlog 123.0 quedó **disuelto** (falso positivo del agente editorial).
- **NO ACTION.**

---

## Cluster 3 — `guides/heathrow-vs-gatwick` (editorial) vs `compare/heathrow-vs-gatwick` (decisión)

- Tras 123.1: **mismos facts, mismo veredicto** ("Gatwick usually wins on money"), roles distintos: guía editorial larga vs página de decisión data-driven con engine.
- Intent: solapado pero complementario (guía = contexto/porqués; compare = cálculo/escenario).
- Canonicals self, ambos en sitemap.
- **NO ACTION** en esta fase. Consolidación futura solo si GSC muestra canibalización por query (p.ej. ambas rankeando en la misma página para "heathrow vs gatwick").

---

## Cluster 4 — `questions/london-airport-break-even` vs `compare/heathrow-vs-stansted`

- Umbral alineado en 123.1 (>€101 en ambos). Intents: educativo (cómo calcular el umbral) vs decisión concreta (¿gana Stansted?).
- **NO ACTION** ahora. Candidato de consolidación a largo plazo; **BLOCKED** por GSC.

---

## Cluster 5 — Duplicados por título (legacy V1)

- Pares legacy ya mapeados en LEGACY_V1_REDIRECT_MATRIX.csv (TSA×2, IRCTC, Costco, Oyster, army-dts) — 6 URLs 404 hoy, targets 200 verificados.
- **READY (301)** técnicamente; implementación requiere aprobación explícita.

---

## Resumen de decisión

| Cluster | Estado |
|---|---|
| 1. `-guide` ×3 | **BLOQUEADO** — canonical estática↔dinámica requiere GSC por URL |
| 2. families-london | **NO ACTION** — nunca fue duplicado |
| 3. guía vs compare HG | **NO ACTION** — complementarios |
| 4. break-even vs compare | **NO ACTION** — complementarios |
| 5. legacy duplicados | **READY-301** — pendiente aprobación + verificación GSC |
