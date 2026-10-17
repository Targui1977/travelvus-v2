# Travelvus — Recovery Plan 30 / 60 / 90

**Phase 123.0** · **Fecha:** 2026-10-17 · Plan de implementación segura post-auditoría. Ninguna fase se ejecuta sin aprobación explícita.

---

## Principios de seguridad

1. **Nunca** redirects masivos, noindex masivo ni borrados masivos.
2. **Nunca** cambiar una URL sin su redirect + plan canónico previo.
3. **Cada fase se despliega por separado** y se observa ≥14 días antes de la siguiente (regla de experimento de SEO_EXPERIMENTS.md).
4. **Preservar intactos**: Decision Engine, Evidence Engine, City Factory, Coverage Dashboard, design system.
5. **El veredicto de contenido nuevo debe derivar de datos**, no de prosa hardcodeada (lección de la auditoría).

---

## Fase 1 — Reparaciones críticas (P0) — días 1-10

**Objetivo:** eliminar bloqueadores de indexación, cálculos rotos y errores factuales. **Cero cambios de URL.**

| Paso | Tarea | Backlog | Criterio de salida |
|---|---|---|---|
| 1.1 | Sitemap: fix `/limitations`→`/limits`, añadir las 44 rutas indexables, lastmod real | P0-5, P0-6, P0-7 | Sitemap 100% URLs válidas; validación scriptada |
| 1.2 | Dataset canónico Paris (€14, Metro 14, taxis 2026) propagado a 7 superficies | P0-2 | grep de fares antiguos = 0; tests datasets verdes |
| 1.3 | Compare pages: columnas + placeholders + paris-to-london reescrita | P0-1, P0-3, P0-4 | QA visual; test de ganador derivado |
| 1.4 | Fares London/NY actualizados (HEx £26, AirTrain $8.75, Newark $17.25, DART) | P0-8, P0-9, P0-10 | Test + grep |
| 1.5 | QA completa: 346 tests + build + e2e browser + visual 4 viewports | — | Todo verde |
| 1.6 | **Deploy** + resubmit del sitemap en GSC | — | GSC muestra sitemap sin errores |

**No se toca en esta fase:** canonicals de duplicados, redirects V1, consolidaciones.

---

## Fase 2 — Consolidación justificada (P1) — días 10-30

**Gate de entrada:** exports GSC de Page Indexing (ver SEO_RECOVERY_AUDIT.md §C) + revisión del efecto de la Fase 1.

| Paso | Tarea | Condición previa |
|---|---|---|
| 2.1 | Pares `-guide`: canonical del dinámico → estática; estáticas al sitemap | Datos GSC: saber si alguna URL `-guide` tiene impresiones |
| 2.2 | Canonical en las 17 páginas sin él + metadataBase + metadata de `/planner` | Ninguna |
| 2.3 | Redirects V1 (6 planificados + evaluación `/london/`) | Confirmar destinos uno a uno; verificar en GSC qué URLs V1 siguen apareciendo |
| 2.4 | NY hub: enlaces internos + quitar "Coming soon" | Ninguna |
| 2.5 | Alineación de ganadores por cluster (north/business/fastest/Manhattan) | Ninguna |
| 2.6 | Corregir colisión `families-london` + link interno roto si no se hizo en F1 | Ninguna |

**Los redirects de consolidación total** (estática vs `-guide`, choice vs decision-center, break-even vs compare) **solo ocurren en Fase 3+ y solo con evidencia GSC** de qué URL recibe impresiones.

---

## Fase 3 — Refresh editorial de 5-10 páginas estratégicas — días 30-60

**Selección por criterio de valor (no por tráfico, que aún es mínimo):**

1. `/guides/best-airport-for-central-paris` — canónica Paris propuesta; mayor cluster
2. `/compare/heathrow-vs-stansted` — el query bandera del sitio
3. `/london-airport-decision-center` — página más rica de Londres
4. `/guides/best-airport-for-manhattan` — canónica NY propuesta
5. `/compare/paris-to-london` — si F1 no la dejó al nivel editorial del resto
6. `/guides/cdg-vs-orly` — segundo query Paris
7. 3 guías London con tablas prometidas sin implementar (P1-2)
8. 1-2 knowledge pages de mayor utilidad (cdg-to-central-paris, heathrow-express-guide)

**Estándar de refresh:** un solo dataset por ciudad como fuente de verdad, fecha de verificación visible, FAQ completo, internal links al cluster. **No es producción de contenido nuevo masivo** — es elevar lo existente.

---

## Fase 4 — Re-evaluación GSC — día 30 / 60 / 90

| Checkpoint | Datos a revisar | Decisión que habilita |
|---|---|---|
| **Día 30** | Sitemap sin errores; "Not found" y "Redirected" en Page Indexing; impresiones por URL | Ajustar redirects V1 pendientes; decidir los 4 "alternate canonical" |
| **Día 60** | Tendencias de impresiones por cluster; CTR de páginas top; crawled-not-indexed restantes | Consolidaciones (redirects) solo de URLs con 0 impresiones en 60d; refresh de la 2ª tanda |
| **Día 90** | Muestra madura: posiciones por query, páginas top 20 | Revisar los 6 triggers de EXPANSION_TRIGGERS.md con datos reales; decidir expansión o siguiente ciclo de mejora |

**Umbrales de decisión (sin inventar impacto):**
- Un redirect de consolidación solo se ejecuta si la URL origen tiene **0 impresiones y 0 clics en 60 días** y existe una canónica de destino declarada.
- Ninguna URL se 410 sin 60+ días de cero impresiones (regla ya vigente en GSC-IMPORT-SCHEMA.md §D).

---

## Fase 5 — Tracking de rendimiento

**Dashboards** (specs completos en PERFORMANCE_MODEL.md):

1. **Ejecutivo** (semanal): impresiones 30d, clics, CTR, posición media, indexed pages, top 5 páginas.
2. **Ciudad** (semanal): impresiones/clics por cluster London/Paris/NY.
3. **Recovery** (quincenal, específico de esta auditoría): evolución de los 4 buckets problemáticos (404, redirects, crawled-not-indexed, alternates) + impresiones de las 10 páginas estratégicas de Fase 3.

**Export GSC mínimo cada 30 días** (spec en GSC-IMPORT-SCHEMA.md §A + SEO_RECOVERY_AUDIT.md §C) depositado en `docs/gsc-exports/`.

**Criterios de éxito honestos a 90 días (sujetos a revisión con datos, no promesas):**
- 0 errores de sitemap · 0 404 internos · 0 placeholders en producción
- Contradicciones editoriales: 0 confirmadas
- "Not found"/"Redirected" en GSC a la baja tras F1/F2
- Impresiones: tendencia positiva tras F1 (la magnitud NO se predice)

---

## Qué NO es este plan

- No es una sprint de features. No hay ciudades nuevas, ni rediseños, ni producción masiva de contenido.
- No es un rescate por volumen: es recuperar el valor de las 134 URLs existentes haciendo que cada una diga una sola cosa, correcta, derivada de datos.
- No promete rankings: repara defectos demostrados y mide.

---

## Checkpoint de aprobación

- **Fase 1** lista para ejecutar al aprobarse este documento: 1.1→1.6 en orden, deploy único al final.
- **Fases 2+** se re-planifican con los datos GSC del día 30.
