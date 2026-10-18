# Travelvus — Phase 124G · Sitewide Design Roadmap

**Fecha:** 2026-10-18 · Plan de rollout visual — **NO se implementa en esta fase** (solo el piloto Dubrovnik está rediseñado).

---

## 1. Punto de partida (post-prototype)

El prototipo editorial (paleta petrol/salvia/terracota, jerarquía serif, tarjetas de operador, tabla ancha, checklist numerado, fuentes indexadas) vive aislado en `src/app/guides/dubrovnik-car-rental-cross-border-fees/page.module.css`. Nada de producción cambió.

## 2. Reutilización de componentes existentes (oportunidades)

| Componente actual | Reutilización propuesta |
|---|---|
| `TravelvusVerdict` | Re-estilizar con la paleta nueva sin cambiar props |
| `FAQAccordion` | Mantener (accesible); envolver en sección editorial estilizada |
| `HomeHeader` / `Footer` | Mantener intactos (marca reconocible) |
| `compTable` / `.dataTable` nuevo | Migrar tablas anchas al patrón `.dataTable` (contenedor wide 1120) |
| `decisionSummary` | Sustituir por `answerStatement` + `conceptGrid` en guías estáticas |
| `relatedGuideRow` | Migrar al patrón `.relatedRow` del prototipo (hover indent) |

## 3. Cambios recomendados por tipo de página

- **Guías estáticas de aeropuerto (22):** hero editorial CSS-only + answerStatement + concepto blocks; migrar tablas a contenedor ancho. Prioridad alta — son el núcleo comercial (clase A).
- **Compare pages (20):** conservar el formato decisión (funciona); aplicar tokens de color y tipografía sin cambiar estructura de datos. Prioridad media.
- **Knowledge (16):** plantilla `KnowledgePage` (inline styles) → migrar a tokens del prototipo. Prioridad media-baja.
- **Hubs (7):** conservar (diseño propio funcional); solo tokens. Baja.
- **Legacy (19):** NO tocar (sin inversión).

## 4. Prioridades móviles

1. Mantener el patrón de tabla con scroll interno (ya probado: 0 overflow).
2. Tipografía mínima 15px en cards; 17px en prosa.
3. Checklist y tarjetas a 1 columna (ya probado).

## 5. Riesgos de cambios globales

- `guide.module.css` contiene CSS inválido silencioso (font shorthand sin family) — **corregirlo cambiaría la tipografía real de todas las guías** (hoy es heredada por accidente). Requiere aprobación explícita y revisión visual de TODAS las guías.
- `globals.css` afecta a las 131 páginas incl. legacy — cualquier cambio de tokens globales exige un pase de regresión completo (443 unit + 33 e2e + visual de 6 páginas control).
- La migración por fases evita el riesgo de "nuevo diseño a medias" en páginas de alto tráfico potencial.

## 6. Rollout por fases propuesto (tras aprobación)

1. **Fase 1:** migrar los tokens a CSS custom properties globales SIN alterar valores actuales (no-op visual) — base segura.
2. **Fase 2:** guías estáticas (22) — una a una, con screenshots 390/768/1440 y 0-overflow gate.
3. **Fase 3:** knowledge + compare (tokens y tablas).
4. **Fase 4:** corregir el CSS inválido de guide.module.css solo tras revisión visual completa de las guías migradas.
5. **Fase 5:** hero con imagen solo cuando existan assets licenciados (política 124G §5).

## 7. Criterio de éxito por página migrada

0 overflow · jerarquía h1≥34px desktop · body ≥17px · tablas en contenedor ancho · contrastes AA · facts y URLs intactos · suites verdes.
