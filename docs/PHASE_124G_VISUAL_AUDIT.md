# Travelvus — Phase 124G · Visual Design Audit

**Fecha:** 2026-10-18 · Diagnóstico visual del piloto Dubrovnik y del sistema compartido. Read-only hasta el rediseño del piloto.

---

## 1. Arquitectura visual existente (verificada en código)

| Capa | Dónde vive | Estado |
|---|---|---|
| Tokens globales | `src/app/globals.css` (`--paper #F4F1EA`, `--navy #1E2A33`, `--copper #B85C38`, `--ink`, `--line`, radios, fuentes) | Funcional, monótono (3 colores planos, sin escala tonal) |
| Tipografía | Fuentes self-hosted (Instrument Serif / Geist / IBM Plex Mono) vía vars `--serif/--sans/--mono` | Activos disponibles, pero la jerarquía en guías es débil |
| Plantilla de guía estática | `src/components/guide/guide.module.css` | Problemas sistémicos (abajo) |
| Componentes compartidos | HomeHeader, Footer, FAQAccordion, TravelvusVerdict, GuidePage (inline styles) | Correctos funcionalmente; estética plana |
| Medida de contenido | `.tocRail` máx 1120 → columna 756px (o 852 single-col tras 123.1.1) | Buena para prosa, **demasiado estrecha para tablas de 8 columnas** |
| Página piloto | `guides/dubrovnik-car-rental-cross-border-fees/page.tsx` (usa guide.module.css) | Hereda todos los problemas del sistema |

## 2. Problemas globales (afectan a otras páginas — NO se tocan en esta fase)

1. **Tipografía pequeña y plana:** body 16px/1.6 en `#4a5560`; h2 a 28px; tablas `compTable` a 13px con celdas densas (padding 10px/16px). Jerarquía inexistente entre tipos de información.
2. **CSS inválido silencioso:** en `guide.module.css` líneas 62-64, `font: 400 28px/1.2;` (shorthand sin family = inválido) y `max-width: 720px 'Instrument Serif', Georgia, serif;` (valor inválido) → los h2/h3/p **heredan tipografía por accidente** y no aplican el max-width pretendido. La tipografía real del sitio es resultado de un bug, no de un diseño.
3. **Espacio vacío:** shell de 1240px vs contenido de 852/756px → ~400px de vacío lateral en desktop en todas las guías.
4. **Sin diferenciación de tipos de información:** decisionSummary, tablas, callouts y prosa comparten el mismo vocabulario plano (bordes grises + fondo blanco).
5. **Sin storytelling visual:** cero imágenes, cero bloques de color, cero elementos editoriales; todo es texto gris sobre marfil.
6. **Tablas anchas imposibles:** 8 columnas en 756px → texto comprimido (mobile ya tiene scroll horizontal, pero desktop sufre).
7. **FAQ hereda estilo default** sin acentos editoriales.

## 3. Problemas específicos del piloto Dubrovnik (objetivo de esta fase)

- Hero = bloque de texto sin tratamiento editorial; la credibilidad (fecha de verificación, fuentes) no se comunica visualmente.
- La respuesta clave (los 3 conceptos legal/permiso/fee) está en una tabla genérica — debería ser el momento visual más fuerte de la página.
- Los 4 operadores no son comparables de un vistazo (todo en una tabla densa).
- Checklist como tabla de 8 filas → ilegible como checklist.
- Fuentes oficiales como tabla de URLs largas → requiere tratamiento de citación.

## 4. Dirección de rediseño (solo piloto, en módulo aislado)

"Premium travel editorial meets decision-support product":
- Paleta evolucionada (solo en el módulo del piloto): marfil cálido `#F7F5F0`, petrol profundo `#18343B`, salvia `#D6E8E5`, terracota `#D17A52` (acentos decorativos y numeración grande; texto pequeño siempre en petrol — contraste AA).
- Jerarquía: serif grande para declaraciones (clamp 34-56px), sans 17-18px body, mono 11-12px para labels/eyebrows.
- Comparación: tarjetas de operador (2×2 desktop, 1 col mobile) + tabla detallada en contenedor ANCHO (1120px) separado del contenedor de prosa (760px).
- Bloques de concepto diferenciados por color (salvia = legal, petrol = permiso, terracota-borde = fee).
- Hero CSS-only (sin imagen licenciada disponible — ver §5) con banda editorial y badge de verificación.
- Cero animaciones excesivas, cero iconos decorativos, cero testimonios falsos.

## 5. Política de imagen

No existe asset legítimo disponible en el repo ni provisto por el usuario → **hero CSS-only** (banda petrol + patrón sutil + tipografía). Si el usuario aporta una imagen (Desktop de Windows), se integrará como JPG/PNG optimizado con licencia declarada. Sin scraping, sin .webp, sin rutas inventadas.

## 6. Riesgos y límites

- **No tocar** guide.module.css ni globals.css (alteraría producción). Todo el rediseño vive en `page.module.css` colocado junto al piloto + JSX reescrito de la página.
- FAQAccordion se mantiene (accesible y probado); solo se re-estiliza su sección contenedora.
- Los hechos, cifras, URLs de fuentes, canonical, metadata y JSON-LD permanecen **idénticos**.
