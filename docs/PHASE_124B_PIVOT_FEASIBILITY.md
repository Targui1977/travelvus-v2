# Travelvus — Phase 124B · Strategic Pivot Feasibility & Content Overlap Audit

**Fecha:** 2026-10-18 · **Modo:** read-only · Sin cambios de app, sin deploy, sin artículos.

Pivot propuesto: *"The fine print before you book"* — clusters A (car rental rules), B (self-transfer/separate tickets), C (travel connectivity edge cases).

---

## A. Existing content overlap (verificado en el repo)

| Tema | Cobertura existente | URLs exactas |
|---|---|---|
| Self-transfer / separate tickets | **NULA como tema.** Solo menciones incidentales: tip "no separate ticket needed" sobre Oyster (`knowledge-registry.ts:234`, página `/knowledge/heathrow-express-guide`) y FAQ genérica "How should connection time be evaluated?" en `/guides/total-travel-time-comparison` (`page.tsx:96,354`) | `/guides/total-travel-time-comparison`, `/knowledge/heathrow-express-guide` |
| Missed connections / MCTs | Nula como tema propio | — (solo la FAQ genérica de arriba) |
| Heathrow/Gatwick connections | Nula | — |
| UK ETA | **Nula** | — |
| Baggage recheck | Solo menciones incidentales en TSA/Global Entry legacy | `/tsa-lock`, `/tsa-precheck-cost`, `/unlock-global-travel-efficiency-with-global-entry-your-ultimate-guide` |
| Car rental (reglas) | Solo brand posts legacy (agencias/OTAs, no reglas) | `/aaa-travel`, `/costco-vacation`, `/expedia-taap`, `/kayak-flights`, `/points-guy`, `/wego-flight` |
| Travel connectivity (eSIM/roaming) | **Nula** (solo menciones decorativas en legacy) | `/aaa-travel`, `/costco-vacation`, `/wego-flight` |

**Conclusión:** el pivot NO canibaliza contenido existente — los tres clusters son terreno sin cubrir. El riesgo es el opuesto: **orfandad** (páginas nuevas sin cluster que las enlace).

## B. Evaluación de los 6 candidatos

**1. Rental car Irlanda ↔ Irlanda del Norte** — Overlap: 0 · Cannibalización: ninguna · Inlinks posibles: NINGUNO hoy (no existe cluster rental) · Recomendación: standalone solo si se crea un mini-cluster rental (2+ páginas) · Evidencia requerida: SERP validation + demanda real · **HOLD**

**2. Rental car Croacia → Bosnia/Montenegro** — Overlap: 0 · Intento "fine print" excelente (restricciones reales por agencia: green card, cross-border fees, prohibiciones frecuentes) · Mismo problema de orfandad que #1 · **HOLD** (pair con #1 en la decisión de cluster A)

**3. Self-transfer en Gatwick (separate tickets)** — Overlap: 0 (no existe ni sleeping-at-gatwick) · Canibalización: BAJA vs `/guides/total-travel-time-comparison` (genérica — diferenciada por especificidad de aeropuerto: terminales N/S, recheck, MCT) · Inlinks: abundantes desde `/compare/gatwick-vs-*` (10 páginas) + `/london-airports` + decision-center · Recomendación: **página standalone en knowledge/** · **GO (piloto)**

**4. Self-transfer en Heathrow (separate tickets)** — Overlap: 0 · Canibalización: BAJA (ídem) · Inlinks: abundantes (knowledge Heathrow: express/sleeping/arrival + 5 compare pages + hubs) · Recomendación: **standalone en knowledge/** (p.ej. `/knowledge/heathrow-self-transfer-guide`) · **GO (piloto)**

**5. Roaming marítimo en crucero** — Overlap: 0 · Off-core (fuera del núcleo aeropuerto) · Orfandad alta · Mantenimiento ALTO (tarifas de operadores cambian) · Affiliate eSIM encaja (Drimsim) · **HOLD**

**6. Códigos SMS bancarios en el extranjero con eSIM** — Overlap: 0 · Dolor real de alta frecuencia (2FA lockout) · Off-core pero el cluster C lo cobija · Affiliate eSIM encaja fuerte · Mantenimiento MEDIO-ALTO (políticas bancarias) · **HOLD** (segunda ola si el cluster C se valida)

## C. Riesgos de canibalización

- Ninguno vs contenido actual (verificado: cero solapamiento temático).
- Riesgo futuro interno: #3/#4 deben diferenciarse ENTRE SÍ (Gatwick N/S terminal vs Heathrow T2/T3-T5) y respecto a una futura guía genérica de self-transfer (no crearla sin datos — primero las 2 específicas).
- Riesgo con legacy: ninguna página legacy trata estos temas (las menciones de rental son de agencias, intento distinto).

## D. Arquitectura recomendada (sin rutas nuevas ahora)

- **No crear categorías top-level nuevas.** Extender los clusters existentes:
  - Self-transfer → cluster **knowledge/** (B), junto a heathrow-express-guide/sleeping-*: `/knowledge/heathrow-self-transfer-guide`, `/knowledge/gatwick-self-transfer-guide`.
  - Rental rules (A) → solo si se aprueba el mini-cluster: 2 páginas `/knowledge/` (cross-border EU) o un hub `/knowledge/car-rental-rules/` — decisión POST-validación.
  - Connectivity (C) → 2 páginas `/knowledge/` (eSIM 2FA + roaming marítimo) en segunda ola.
- Preservar TODO el contenido de aeropuerto existente (130 URLs, núcleo comercial).

## E. Compatibilidad afiliación

- **No existe infraestructura afiliada en el código**: 0 enlaces `rel="sponsored"`, 0 partners configurados. Los docs de estrategia solo mencionan programas FUTUROS: Travelpayouts (vuelos), Intui.travel (transfers), Drimsim (eSIM) — sin políticas ni comisiones documentadas (no se inventan).
- **Déficit de disclosure en legacy**: `/aaa-travel` y similares enlazan externamente (travel.aaa.com, bart.gov) con `rel="noopener noreferrer"` SIN disclosure de afiliación — gap de compliance a resolver ANTES de monetizar nada.
- **⚠️ Flag explícito Economybookings (cluster A):** gran parte de la demanda de "rental car with debit card" busca pagar con débito; Economybookings exige típicamente tarjeta de crédito a nombre del conductor en recogida. **Promocionar ese partner contra queries de débito = mismatch de conversión y riesgo de reseñas negativas.** Requiere verificación directa del partner antes de cualquier integración. No se asume ninguna política ni comisión.

## F. Riesgos de mantenimiento

| Página | Fuentes críticas | Frecuencia de recheck | Riesgo |
|---|---|---|---|
| Self-transfer LHR/LGW | heathrow.com, gatwickairport.com (MCTs, rutas inter-terminal, recheck) | 6 meses (o tras cambios de terminal) | BAJO-MEDIO |
| Rental cross-border ×2 | políticas POR AGENCIA (varían rápido) | 3-6 meses + fecha de verificación visible | **ALTO** (requiere disclaimers por agencia) |
| Roaming marítimo | tarifas de operadores | 3 meses | **ALTO** |
| SMS bancario + eSIM | políticas bancarias (varían por banco) | 6 meses + disclaimers | MEDIO-ALTO |

Esfuerzo editorial estimado: 1-2 días/página + research SERP previo. **Sin validación SERP en vivo, ninguna página se construye** (el research externo NO verificó rankings, volúmenes ni dificultad).

## G. Go / Hold / Reject por página

| # | Candidato | Veredicto | Motivo |
|---|---|---|---|
| 1 | Rental Irlanda↔NI | **HOLD** | Orfandad de cluster; esperar decisión de cluster A + SERP data |
| 2 | Rental Croacia→BiH/MNE | **HOLD** | Ídem |
| 3 | Self-transfer Gatwick | **GO (piloto)** | Núcleo aeropuerto, inlinks abundantes, mantenimiento bajo |
| 4 | Self-transfer Heathrow | **GO (piloto)** | Ídem |
| 5 | Roaming crucero | **HOLD** | Off-core, mantenimiento alto |
| 6 | SMS bancario + eSIM | **HOLD** | Fuerte pero segunda ola; affiliate eSIM pendiente de partner |

## H. Evidencia SEO externa faltante

1. **SERP validation en vivo** para los 6 conceptos (posiciones de competidores, features, intención) — NO VERIFIED.
2. Volúmenes de búsqueda y dificultad — NO VERIFIED (no inventar).
3. Demanda real de "self-transfer heathrow/gatwick" (¿es query propia o se busca "missed connection"?).
4. Verificación de partners: políticas Economybookings (debit), Travelpayouts/Intui.travel/Drimsim (eligibilidad, comisiones).
5. UK ETA: el pivot lo menciona y hoy hay **cero contenido** — si se persigue, es otro candidato a evaluar con la misma metodología.

## I. Secuencia de implementación recomendada (tras aprobación)

1. **Research SERP en vivo** de #3/#4 (y de las 6 queries) — sin esto, nada.
2. **Piloto cluster B**: 2 páginas knowledge/ de self-transfer (LHR + LGW) con inlinks desde compare/hubs existentes — se integran al núcleo actual sin arquitectura nueva.
3. **Medir 30-60 días** con GSC (el export de nov+ ya incluiría su early signal).
4. **Decidir cluster A** (rental) solo con evidencia: 2 páginas + disclaimers por agencia + verificación Economybookings.
5. **Cluster C** (eSIM/roaming/SMS) en última ola, condicionado a partner afiliado verificado.

**Regla de hierro:** el núcleo de aeropuerto (130 URLs, 66 páginas clase A) sigue siendo la prioridad comercial #1 — el pivot es ADICIÓN estratégica si se valida, nunca sustitución.
