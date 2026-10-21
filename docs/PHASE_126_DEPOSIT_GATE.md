# Travelvus — Deposit & Credit Card Guide: SERP Validation Gate

**Fecha:** 2026-10-21 · **Decisión: UNCERTAIN (STOP — pendiente de verificación SERP manual en Google)** · Sin artículo, sin rama, sin deploy.

---

## 1. Búsquedas ejecutadas (tool accesible NO-Google, disclosure obligatorio)

1. `car rental deposit debit card vs credit card` — 8 resultados
2. `rental car deposit without credit card` — 8
3. `car rental security deposit explained` — 10
4. `car rental credit card requirements abroad` — 10
5. `rental car deposit insurance excess difference` — 9

(45 resultados, ~12 publishers distintos tras eliminar duplicados por país.)

## 2. Evidencia observada

**A. Intención:** UNA intención coherente con 3 sub-ramas — "¿funcionará mi tarjeta?, ¿cuánto congelarán?, ¿cuánto tiempo?" Sub-intenciones: (1) elegibilidad sin tarjeta de crédito, (2) importe y timing de liberación del depósito, (3) confusión depósito-vs-exceso. No son temas separados: una decisión, tres ansiedades.

**B. Dominancia:** brokers/OTAs (Auto Europe solo aporta ~8 resultados vía duplicados de país: .eu/.co.uk/.de/.ca/.br), páginas oficiales de rental (Sixt, Europcar, Enterprise), un auto club (ADAC). **Cero** bancos/emisores, **cero** consumer protection/gobierno, **cero** grandes publishers, **cero** foros. **El publishing independiente está efectivamente ausente.**

**C. Gaps específicos (valor añadido posible):**
1. Nadie une las 3 capas: aceptación de tarjeta por proveedor × importe del depósito por país × timing de liberación.
2. La realidad bancaria es fina: cómo el hold golpea el límite de crédito, FX sobre holds, débito Revolut/Wise/monzo, 3-D Secure, tarjetas virtuales.
3. **Nadie calcula "el float"** — €300-1.500 bloqueados 10-30 días es un coste real para el viajero budget.
4. Sin decision framework: "dado tipo de tarjeta X y país Y, reserva Z".
5. La mecánica exceso↔depósito (el exceso se descuenta del depósito y luego se reembolsa vía póliza) se describe pero nunca se trabaja como escenario.
6. Fuentes primarias oficiales apenas representadas (solo Sixt/Europcar/Enterprise).

**D. Coherencia:** coherente — una guía con 3 secciones.

**E. Fit Travelvus:** fuerte — el depósito es el "hidden real cost" de libro (coste de cash-flow que no aparece en el precio).

**F. Monetización:** viable con un guardrail — socios naturales: brokers no-deposit/debit-friendly (Auto Europe, Sunny Cars, Discover Cars), seguros de exceso, travel credit cards. **Guardrail: el affiliate de tarjetas crea presión hacia "consíguete una tarjeta" — exactamente lo que la mitad de la audiencia no puede hacer. Mantener el camino sin-tarjeta igual de prominente, ordenar por fit no por payout, y disclosear.**

## 3. Motivo del STOP

La regla de la fase es explícita: *"If Google results cannot be accessed reliably, STOP and provide the exact queries for manual SERP verification."* Mi tool de búsqueda NO es Google — el orden observado no es ranking verificado. La evidencia preliminar sugiere GO, pero no se convierte incertidumbre en aprobación (patrón ya aplicado en Phase 125).

## 4. Qué evidencia manual cambiaría la decisión

Screenshots SERP de Google (incógnito, región EN) de las 5 queries + 2 variantes de control:
1. `car rental deposit debit card vs credit card`
2. `rental car deposit without credit card`
3. `car rental security deposit explained`
4. `car rental credit card requirements abroad`
5. `rental car deposit insurance excess difference`
6. `how much is a car rental deposit in europe` (variante de importe)
7. `car hire deposit refund how long` (variante de liberación)

**Criterios de lectura:** (a) ¿aparece algún publisher independiente real en Google (vs solo brokers/OTAs/oficiales)? (b) ¿hay AI Overview/featured snippet en las head queries? (c) ¿los gaps C1-C5 persisten en Google? Si un independiente ya cubre bien los gaps → NO-GO. Si los gaps persisten → **GO** con el brief de abajo.

## 5. Opportunity brief PREPARADO (se activa con GO)

- **Intención primaria:** el momento depósito/pre-pickup — "¿mi tarjeta funcionará, cuánto congelarán, cuánto tiempo?"
- **Título propuesto:** "Car Rental Deposits Abroad: What Gets Held, What Gets Refunded, and What Your Card Changes"
- **URL propuesta:** `/guides/car-rental-deposit-credit-card-guide`
- **Lector:** viajero internacional pre-reserva con una tarjeta (crédito/débito/prepaid) y dudas de elegibilidad
- **Decisión que resuelve:** qué oferta de rental es viable y qué coste real tiene el depósito para su perfil de tarjeta
- **Debilidades de la competencia:** FAQs de brokers duplicadas por país, genéricas, sin cifras, sin unión de capas, sin decision framework
- **Valor original:** tabla aceptación×país×timing verificada + cálculo del float + framework tarjeta×país→oferta + escenario exceso↔depósito trabajado
- **Monetización:** brokers no-deposit + seguro de exceso, con el guardrail de la sección 2F
- **Riesgos factuales:** políticas por ubicación/clase/franquicia; débito aceptado online ≠ mostrador; prohibido generalizar (lecciones 124E)
- **Scope estimado:** 1 página estática con sistema de diseño 124G (identidad propia) + verificación de fuentes oficiales (Enterpise/Hertz/Sixt/Avis/Europcar por país muestra) + QA completa

## 6. Estado

Sin cambios de app. Este documento es el único deliverable. Sin rama, sin commit de código, sin deploy.
