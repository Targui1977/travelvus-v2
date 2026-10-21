# Travelvus — Phase 128A · Homepage Footer Pilot + Guides Architecture Audit

**Fecha:** 2026-10-21 · Footer pilot: DESPLEGADO (`8a51fdb` master, deploy `oc5uo1aa0`) · Guides/wego-flight: READ-ONLY (sin implementación)

---

## 1. Homepage footer pilot — root cause y cambios

**Root cause:** la homepage tenía su propio footer inline (`src/app/page.tsx`) que nunca se migró cuando el componente compartido `Footer` se rediseñó en Phase 127.2.

**Cambios (3 archivos):**
- `src/app/page.tsx` — bloque inline reemplazado por `<Footer verifiedWith="TfL · National Rail · Public airport information" />`
- `src/components/ui/Footer.tsx` — prop opcional `verifiedWith` (renderiza la línea de verificación bajo la última columna; sin footer competidor)
- `src/components/ui/footer.module.css` — clase `.verifiedLine`

**QA visual:** petrol #18343B en 1440/1024/768/390 · 6 links preservados · línea TfL presente · 0 overflow · calculator funcional (15 inputs → CTA "Reveal the real winner" → veredicto) · before/after en `test-results/128a-*.png`. Producción verificada (petrol+links+TfL).

## 2. Inventario de guías (audit read-only)

**Estado actual:** el item de navegación "Guides" apunta a `/wego-flight` (HomeHeader.tsx:94,119; Footer.tsx default) — **no existe `/guides` index**.

**Rutas editoriales publicadas (estáticas, 23):**

| URL | Título (tema) | Visibilidad actual | Sección sugerida en /guides/ |
|---|---|---|---|
| /guides/rental-car-pickup-flight-delayed | Flight delay × rental pickup | nueva, sitemap | Rental car decisions |
| /guides/dubrovnik-car-rental-cross-border-fees | Dubrovnik cross-border fees | piloto live | Rental car decisions |
| /guides/best-airport-for-central-paris (+7 Paris) | Paris airport choice | sitemap | Airport & transfer decisions |
| /guides/cdg-vs-orly | CDG vs Orly | sitemap | Airport & transfer decisions |
| /guides/best-airport-for-central-london (+9 London) | London airport choice | sitemap | Airport & transfer decisions |
| /guides/heathrow-vs-gatwick · /cheapest-london-airport · /fastest-london-airport | London decisions | sitemap | Airport & transfer decisions |
| /guides/best-airport-for-manhattan · /jfk-vs-newark | New York airport choice | sitemap | Airport & transfer decisions |
| /guides/real-cost-of-a-flight | Real cost methodology | sitemap | Travel costs & practical guides |
| /guides/total-travel-time-comparison | Door-to-door time | sitemap | Travel costs & practical guides |
| + 37 registry guide slugs (dinámicas) | best-airport-for-* | sitemap | Airport & transfer decisions |
| + 16 knowledge slugs | transfers/terminals/sleeping | sitemap | Airport & transfer decisions |

**Componentes reutilizables:** sistema editorial premium 124G (page.module.css de Dubrovnik/127) · `relatedGuideRow` · `compTable`/`dataTable` · FAQAccordion · Footer compartido. **Existe layout premium compartible** sin rediseño global (roadmap 124G).

**Duplicaciones observadas:** pares `-guide` (3, resueltos en datos, consolidación pendiente GSC) · `/wego-flight` ↔ `/kayak-flights` (cluster casi-duplicado) · guide vs compare heathrow-vs-gatwick (complementarios).

## 3. Audit /wego-flight (read-only, resumen)

- **Implementación:** página estática de **419 líneas / ~12.500 palabras** (¡el meta dice "9 min read"!) · LegacyArticleLayout "use client" (hidrata todo el artículo) · 4 callouts con clases literales que **no matchean los hashes de CSS modules → se renderizan sin estilo** · 0 H3, 11 H2 repetitivos.
- **SEO:** title/H1 con residuo off-brand "Outdoor Adventure" · sin JSON-LD, sin fuentes, sin disclosure · indexable + en sitemap (correcto).
- **Links:** 1 link externo promocional (wego.com, sin nofollow/sponsored, sin parámetros afiliado) · **0 links internos en el body** · 34 páginas enlazan a /wego-flight (5 contextuales, resto nav/footer globales).
- **Claims problemáticos (flags):** "800+ providers" y "save 30%" sin fuente (×5 y ×13 repeticiones) · incógnito (disputado) · descuentos de última hora (contestado) · "fees 20-40%" contradice "no hidden fees" · **Flybe listada (cesó 2023)** · Wego descrito como merchant of record (probablemente INCORRECTO para un metasearch) · contradicción interna L43/69/94 vs L181.
- **Imágenes:** 3 (webp+jpg) en public/legacy/wego-flight, sin width/height/loading (CLS), procedencia V1 sin licencia documentada.
- **Solapamiento:** alto con /kayak-flights (gemelo) y tesis de /guides/real-cost-of-a-flight (mejor ejecutada allí).
- **Contenido reutilizable:** solo la taxonomía de aerolíneas europeas (sección 9, tras limpiar) y dimensiones de comparación (sección 6, ya mejor en real-cost).

**Recomendación provisional: OPCIÓN B** — reestructurar en la misma URL a ~1.500-2.500 palabras alrededor de su intent real (branded "is Wego legit / how Wego works") + verificar features + fuentes + disclosure + tabla · NO rediseño completo (A) sin validar intent · NO redirect (C) sin datos GSC: la página es destino del nav "Guides" sitewide y tiene 34 referencias entrantes.

**GSC necesario para decidir C:** Performance por página de /wego-flight (queries branded vs genéricas) · canibalización con kayak-flights y real-cost · Links (backlinks/anclas) · historial pre-V2 del dominio si existía.

## 4. Brief del hub /guides/ (PROPUESTA — NO implementar)

- **H1:** "Travel Decisions, Compared — Airport, Rental Car and Flight Cost Guides"
- **Value proposition:** "Every guide answers one decision: which option really wins, and what it really costs."
- **Categorías (derivadas del inventario real):** Airport & transfer decisions (hubs + guides + knowledge) · Rental car decisions (Dubrovnik + flight-delay) · Travel costs & practical guides (real-cost, total-time, break-even).
- **Featured:** guía flight-delay (nueva, premium) + Dubrovnik + central-paris (semilla @10) + heathrow-express-guide.
- **Cards editoriales:** patrón premium 124G — 2×2 balanceado (regla 3+1), serif titles, mono category tags, descripciones de decisión (no clichés).
- **SEO:** title "Travel Decision Guides: Airports, Rental Cars & Real Costs | Travelvus" · meta descriptiva · canonical /guides · indexable.
- **Navegación:** "Guides" del header apuntaría a /guides (cambio FUTURO — no en esta fase).
- **Inlinks:** hub → todos los guides estáticos + top registry; guías → hub (migración gradual, sin masivos).
- **Móvil:** 1 columna, tap targets ≥40px.
- **Accesibilidad:** contrastes AA de la paleta 124G, focus-visible, sin JS obligatorio.

## 5. Próximas fases propuestas (NO implementadas)

- **128B:** construir /guides/ hub (brief §4) + apuntar header/footer "Guides" al hub (cambio de nav con aprobación).
- **128C:** reestructurar /wego-flight según Opción B (requiere verificación de features + datos GSC de §3).
