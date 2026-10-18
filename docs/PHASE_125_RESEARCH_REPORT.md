# Travelvus — Phase 125 · Bank SMS Abroad + Travel eSIM: Research Report & Editorial Gate

**Fecha:** 2026-10-18 · **Decisión del gate: HOLD** (pendiente de screenshots SERP manuales de Google) · Sin artículo, sin deploy.

---

## A. Evidencia SERP y limitaciones

Investigación en vivo de 6 queries head + 6 variantes (120 resultados revisados; 2 páginas leídas completas). **Tool NO-Google: el orden de resultados no es ranking verificado. Sin volúmenes, CPC ni dificultad — nada inventado.**

**Hallazgos estructurales:**
1. **Head terms = SERP capturada por vendors (52% de resultados; hasta 90-100% en Q1/Q2/Q6)**, mecánicamente idénticas y duplicadas en 6+ idiomas. El binario ("¿puedo recibir SMS con eSIM data-only?") está respondido decenas de veces.
2. **Riesgo AI-answer ALTO en las head queries** (respuestas binarias de 3 frases); MEDIO en variantes de troubleshooting.
3. **Las variantes con nombre de banco invierten la SERP**: docs oficiales dominan (Sparkasse PDFs smsTAN, HSBC Turkey/Egypt FAQs, Barclaycard "code didn't arrive" con teléfono internacional). **Cero documentación oficial de carriers aparece en ninguna query** — hueco real.
4. **Foros = señal de demanda cualitativa real**: Rick Steves (MFA codes), StackExchange, teltarif (número para DKB), Public Mobile ("Bank Verification codes while traveling"), Bell/Flyert (HSBC HK), JustAnswer (Barclays lockout).
5. **Señal comercial sostenida**: vendors (TripoSIM, Simbye, Holafly, Nomad, Red Bull, Roamless) mantienen páginas dedicadas en 6+ idiomas.
6. **Reddit no apareció ni con "reddit" en la query** — limitación del tool, no prueba de ausencia.

**Insight estratégico (del agente SERP):** la query específica país/banco/carrier es más atacable que la head term — no por competencia medible (imposible con este tool), sino porque (a) la intención es inequívoca, (b) la saturación de vendors cae, (c) existe ground truth oficial citable, (d) la AI-answer satisface peor un troubleshooting. **El artículo más defendible NO es otro explainer genérico; es una matriz banco-por-banco + carrier-por-carrier con árbol de diagnóstico, localizada a UN mercado (DE/UK/US).** Esto implica revisar el título de trabajo del prompt.

## B. Hallazgos técnicos verificados (fuentes primarias, 2026-10-18)

| Distinción | Estado | Fuente clave |
|---|---|---|
| eSIM data-only NO tiene número/SMS | VERIFIED | [Airalo help](https://www.airalo.com/help/using-managing-esims/ZSEEHBT5HW6F/how-can-i-receive-sms-and-calls-while-connected-with-my-data-only-esim/9416F6CUOV28) · [Nomad](https://www.nomadesim.com/help-center/en/articles/12457518-do-nomad-esims-support-text-messages) · [Saily](https://support.saily.com/hc/en-us/articles/27276323644572-What-is-Saily) |
| El número original permanece con la línea home | VERIFIED | [Apple dual SIM](https://support.apple.com/en-us/109317) · [Google Pixel](https://support.google.com/pixelphone/answer/9449293?hl=en) |
| SMS entrante se factura por el home carrier (roaming), no por la eSIM | VERIFIED (con caveats de red) | [AT&T pay-per-use](https://www.att.com/international/pay-per-use-rates/) ($1 enviado, estándar recibido) · [Verizon](https://www.verizon.com/plans/international/international-travel/pay-as-you-go/) ($0.50/$0.05 por SMS) |
| Data Roaming controla SOLO datos; voz/SMS independientes | VERIFIED | [Apple 109037](https://support.apple.com/en-us/109037) · [Apple iPhone guide](https://support.apple.com/guide/iphone/iph3dd5f213/ios) (toggle voz solo CDMA) · [Google Pixel](https://support.google.com/pixelphone/answer/2926415?hl=en) |
| No existe toggle de "SMS roaming" | PARTIALLY (ausencia de evidencia) | — |
| Wi-Fi Calling: feature de carrier, no universal; SMS sobre Wi-Fi documentado por carriers, no por Apple | PARTIALLY | [Apple](https://support.apple.com/en-us/108066) (solo voz) · [Verizon](https://www.verizon.com/support/wifi-calling-faqs/) (textos documentados; iOS debe activarse en EE.UU. antes de salir) · [EE](https://ee.co.uk/help/mobile/roaming/roaming-costs) (cargos posibles — JS-only) |
| Dual-SIM: ambas líneas activas para llamadas/SMS; datos en una sola | VERIFIED | [Apple](https://support.apple.com/en-us/109317) ("Both phone numbers can make and receive… SMS and MMS") · Google Pixel |

**Bancos (lo públicamente documentado):** Wells Fargo (push/email/RSA SecurID recomendado para viajar — [fuente](https://www.wellsfargo.com/privacy-security/fraud/articles/two-factor-authentication/)) · Barclaycard (código SOLO a número UK registrado; SMS desde el extranjero a tarifa estándar — [fuente](https://www.barclaycard.co.uk/personal/help/fraud-security/one-time-code-uk)) · Deutsche Bank (SMS en el extranjero "puede incurrir en tarifas del carrier" — [PDF oficial](https://www.deutsche-bank.de/dam/deutschebank/de/shared/pdf/pk-konto_karten-3d_secure-sicherer_bezahlen_im_internet.pdf)) · comdirect (mobileTAN restringido a EU/EEA+NO/LI/IS, €0.09 — indexed text) · **Sparkasse: smsTAN YA NO EXISTE** (pushTAN/chipTAN — [sparkasse.de](https://www.sparkasse.de/barrierefrei/tan-verfahren.html)) · N26 (números fuera de EU probablemente NO reciben el SMS — [fuente](https://support.n26.com/de-de/sicherheit/passwort-und-codes/warum-habe-ich-meinen-verknupfungscode-nicht-per-sms-erhalten)) · Wise (recomienda app notification/passkey para viajes — [fuente](https://wise.com/help/articles/2951949/i-didn-t-receive-a-2-step-verification-code-or-notification)).

## C. Tabla de providers (verificada)

| Provider | Datos | Número | SMS | OTP bancario | Label |
|---|---|---|---|---|---|
| Airalo estándar | ✅ | ❌ | ❌ | sin evidencia | VERIFIED |
| Airalo Discover+ | ✅ | ✅ (+1, con conflicto de variante +43 sin resolver) | ✅ enviar/recibir | **sin statement de OTP** | PARTIALLY |
| Holafly Unlimited (post 04-11-2025) | ✅ | ✅ US/UK/CA | solo entrante | sin statement | VERIFIED |
| Nomad | ✅ | ❌ (dummy) | ❌ (excepción Tailandia) | **explícito: "verification codes cannot be received"; no confiar para banca** | VERIFIED |
| Saily | ✅ | add-on +1 | saliente documentado, **entrante NO documentado** | sin statement | PARTIALLY |
| **Drimsim** | ✅ data-first | alquilable (reply oficial 2020; web actual NO lo documenta) | solo vía número alquilado | **sin evidencia OTP** | PARTIALLY |

## D. Compatibilidad afiliada

- **Drimsim NO resuelve el problema OTP** con evidencia verificable: data-first, número solo "alquilable" (fuente 2020), cero statement de OTP bancario. **No apto como CTA de SMS verification.**
- La recomendación editorial honesta ("mantén tu línea home activa para SMS + eSIM de datos") **no vende el producto que resuelve el problema** — la monetización honesta es secundaria (eSIM de datos con disclosure, nunca "esta eSIM recibe tus códigos").
- Infraestructura afiliada en Travelvus: **inexistente** (0 links rel=sponsored, 0 partners configurados). No se inventan links ni comisiones.
- Si no hay recomendación comercial honesta, **no se fuerza CTA** (regla de fase).

## E. GO / HOLD / REJECT

**HOLD.**

| Criterio del gate | Resultado |
|---|---|
| Problema soportado por fuentes creíbles | ✅ Fuerte (Apple/Google/carriers/bancos verificados) |
| Valor práctico significativo | ✅ Alto (matriz neutral no existe) |
| Sin duplicación de contenido existente | ✅ (0 overlap en Travelvus) |
| Claims técnicas verificables | ✅ (lista de 13 DO-NOT-CLAIM define los límites) |
| Oportunidad de búsqueda razonablemente soportada | ⚠️ **CONDITIONAL** — señales cualitativas fuertes, pero head term saturada por vendors + AIO alto; el ángulo ganador (matriz localizada) NO está validado en Google |
| Evidencia Google real | ❌ **AUSENTE** — tool no-Google, sin rankings observados |

**Regla aplicada (Stage 5):** "If Google evidence remains unavailable, do not silently convert uncertainty into approval. Instead, STOP after research and request manual Google SERP screenshots." No se escribe el artículo.

## F. Screenshots SERP manuales solicitados al owner

Abrir Google (preferiblemente modo incógnito, desde la región objetivo o con idioma EN) y capturar la **primera página completa** (resultados orgánicos + AI Overview/featured snippet si aparece) de:

1. `receive bank verification sms abroad with esim` (head term del prompt)
2. `receive bank otp abroad esim` (variante corta)
3. `can you receive bank sms with a data only esim` (binaria)
4. `hsbc verification code abroad not receiving` (variante banco UK — valida el ángulo localizado)
5. `sparkasse tan ausland empfangen sms` (variante banco DE)
6. `verizon incoming sms abroad charges` (variante carrier US — valida el hueco de carriers)

Con las capturas se decide: (a) si la head term es viable, o (b) si el artículo pivota a la **matriz localizada** (UK/DE/US) que la investigación sugiere como más defendible.

## G. Riesgos de desinformación (vinculantes si se aprueba GO)

Lista DO-NOT-CLAIM de 13 items (detalle con fuentes en el reporte del agente): nunca "SMS entrante gratis universal" (Verizon cobra $0.05) · nunca "desactivar data roaming evita todo cargo" · nunca "Wi-Fi Calling funciona en todos lados" · nunca "toda eSIM tiene número" · nunca "el número de una eSIM recibe OTP de banco" (Nomad lo prohíbe explícitamente) · nunca "tu código bancario siempre llega" (N26 no-EU, comdirect EU-only) · nunca "Sparkasse usa smsTAN" (ya no existe).

## H. Mantenimiento

ALTO: métodos bancarios cambian (smsTAN retirado, migraciones a push), reglas de carriers varían por plan, features de eSIM volátiles. Cualquier artículo requiere celdas fechadas + revisión trimestral comprometida.

## I. Estado del repositorio

Sin cambios de app. Este reporte es el único deliverable. Working tree limpio salvo este documento.

## J. Próximo paso

Con las capturas del owner → re-evaluación del gate (Stage 5 bis). Si GO: artículo localizado (mercado elegido según capturas), con el sistema de diseño de 124G adaptado (identidad propia, no clon de Dubrovnik), Stage 6-9 completos. Sin capturas: el candidato permanece HOLD.
