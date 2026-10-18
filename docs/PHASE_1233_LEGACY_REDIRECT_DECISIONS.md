# Travelvus — Phase 123.3 Legacy Redirect Decisions

**Evidencia nueva:** Pages.csv del export GSC (jul-oct 2026). Ningún redirect se implementa en esta fase.

---

## A. Los 8 candidatos propuestos en 123.2 — evaluación con señal GSC

| # | Origen (404) | Destino propuesto | Equivalencia | Señal GSC del origen | Recomendación | Confianza | Riesgo |
|---|---|---|---|---|---|---|---|
| 1 | `/unlock-fast-and-hassle-free-travel-with-tsa-precheck-your-guide-to-streamline-airport-security/` | `/tsa-precheck-cost` (200 ✓) | Duplicado TSA | **0 impresiones en el export** | **APPROVE 301** | Alta | Mínimo |
| 2 | `/maximize-convenience-and-save-time-with-tsa-precheck-your-complete-guide/` | `/tsa-precheck-cost` | Duplicado TSA | 0 imp | **APPROVE 301** | Alta | Mínimo |
| 3 | `/easy-and-convenient-irctc-railway-booking-your-one-stop-solution-for-booking-train-tickets/` | `/irctc-train-ticket-booking` | Duplicado IRCTC | 0 imp | **APPROVE 301** | Alta | Mínimo |
| 4 | `/unlock-amazing-travel-deals-with-costcotravel-your-ultimate-guide/` | `/costco-vacation` | Duplicado Costco | 0 imp | **APPROVE 301** | Alta | Mínimo |
| 5 | `/unlock-the-benefits-of-oyster-card-your-ultimate-guide-to-londons-transit-system/` | `/unlock-the-convenience-of-oyster-card-…` | Duplicado Oyster | 0 imp | **APPROVE 301** | Alta | Mínimo |
| 6 | `/army-dts/` | `/defense-travel-system` | Duplicado DTS | 0 imp | **APPROVE 301** | Alta | Mínimo |
| 7 | `/london/` | `/london-airports` | Sí (hub London = intent equivalente) | 0 imp en export | **APPROVE 301** | Media-alta | Bajo — el destino cubre el intent |
| 8 | `/airport-transfer/` | `/guides/total-travel-time-comparison` | **PARCIAL** (transfer genérico ≠ comparador de tiempo) | 0 imp | **REJECT** — mantener 404; evaluar como futuro hub de transfers (contenido nuevo, otra fase) | Media | Evitar redirect a intent no equivalente |

**Nota:** 0 impresiones en 3 meses de export no prueba ausencia absoluta de señal histórica, pero hace el riesgo de los 301s mínimo.

## B. URLs legacy CON señal GSC residual (no estaban en los 8 candidatos)

| URL (hoy 404) | Señal (non-www) | Recomendación |
|---|---|---|
| `/computicket-travel` | 12 imp @ **27.17** | **NEEDS EVIDENCE** — ¿query exacta? Requiere Queries por página (export no lo cruza). Si las queries son de booking, considerar rebuild futuro o 301 a un equivalente si existe. NO 410. |
| `/europe` | 2 imp @ **5.5** | **NEEDS EVIDENCE** — posición 5.5 con 2 imp es señal mínima pero real. No tiene equivalente V2 limpio. NO 410; decidir con siguiente export (si persiste, evaluar una página hub de Europa — contenido nuevo, fuera de esta fase). |
| `/9-best-luxury-hotels-in-the-world` | 1 imp @20 | **NEEDS EVIDENCE** — 1 imp; NO 410 hasta 60d de cero impresiones. |
| `/top-10-must-visit-destinations-for-travel-enthusiasts` + variante larga | 1 @21 / 1 @25 | **NEEDS EVIDENCE** — ídem. |
| `/10-best-tropical-vacations` | 7 @77 | **NEEDS EVIDENCE** — ídem. |

## C. Reglas mantenidas

- **Ningún 410** basado en edad o "cero tráfico" — solo con 60 días de cero impresiones tras el siguiente export (regla GSC-IMPORT-SCHEMA §D).
- Sin redirects a homepage. Sin catch-all. Sin cadenas (todos los destinos son rutas finales 200 verificadas).
- Implementación: SOLO tras aprobación del owner, en un batch único y verificado (siguiente fase).
