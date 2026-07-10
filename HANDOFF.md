# TRAVELVUS V2 — PROYECTO HANDOFF

**Fecha:** 2026-07-09
**Último commit:** `916ad7c`
**Producción:** https://travelvus-v2.vercel.app

---

## QUÉ ES TRAVELVUS

Travelvus es una **segunda opinión antes de reservar.** El usuario ya encontró dos vuelos. Travelvus compara el viaje completo (ticket + baggage + transfer + tiempo) y responde: **WHICH REALLY WINS?**

NO es una OTA, ni un metabuscador, ni un blog de viajes, ni un SaaS dashboard.

---

## ARQUITECTURA TÉCNICA

```
Next.js 16 App Router + TypeScript
Tailwind CSS v4 (con CSS custom properties canónicas)
Fuentes self-hosted: Instrument Serif, Geist Sans, IBM Plex Mono
Tests: Vitest, 88 tests
CSS Modules para páginas nuevas (Tailwind purges globals.css)
Despliegue: Vercel (cuenta tarek-mihoubi-s-projects)
Repo: GitHub Targui1977/travelvus-v2
```

---

## RUTAS EN PRODUCCIÓN (8 superficies)

| Ruta | Tipo | Qué es |
|------|------|--------|
| `/` | Home + Quick Compare | Entry point. Hero + 3 proof cards + QC embed |
| `/result` | Full Result + Verdict Changed | SSR dinámico. Verdict, Real Cost, Threshold, Undo/Keep |
| `/compare/heathrow-vs-stansted` | Decision Page | Hidden real cost. "€58 ticket → €204 journey" |
| `/compare/heathrow-vs-gatwick` | Decision Page | Destination-sensitive margin. Canary Wharf €37 vs Paddington near-tie |
| `/compare/gatwick-vs-stansted` | Decision Page | Access-friction tolerance. €20 saving, €16 fixed costs, €4 net. Saving-Worth Handoff |
| `/methodology` | Trust Page | Decision pipeline, evidence bands, rounding, personal handoff |
| `/london-airports` | Decision Discovery Hub | 3 editorial decision rows. Repara el internal-link graph |
| `/questions/london-airport-break-even` | **PENDIENTE (Phase 46)** | Primer Question Page. BREAK-EVEN SAVING mechanic |

---

## SISTEMA DE DISEÑO

```
Colores: --paper #F4F1EA, --navy #1E2A33, --copper #B85C38, --ink #1E2A33
Tipografía: Instrument Serif (judgment), Geist Sans (evidence), IBM Plex Mono (numbers)
Navy = solo autoridad (Verdict). Copper = solo conclusión/threshold.
Sin gradientes. Sin sombras decorativas. Sin green/red winner signals.
```

---

## TRUTH CONTRACT (reglas no negociables)

1. **Winner siempre de raw values, nunca de display rounding**
2. **"Wins by €0" nunca aparece** — se usa "just wins" o tie-safe language
3. **Personal handoff:** Travelvus calcula el money truth. Si el margen es muy fino, la decisión es del viajero
4. **Coverage boundary:** Solo Heathrow, Gatwick, Stansted tienen datos completos de transfer. Otros aeropuertos = ticket-only comparison
5. **GBP→EUR a 1.17.** Fares: walk-up single, contactless/Oyster, off-peak. Totals rounded.
6. **No inventar datos.** No pretender cobertura universal. No live data.

---

## DÓNDE NOS QUEDAMOS

**Fase 45 completada.** El primer Question Page está diseñado y listo para implementar.

**Siguiente fase: Phase 46** — Implementar el Question Page:
- Ruta: `/questions/london-airport-break-even`
- Pregunta: "How much cheaper should a London flight be to justify a different airport?"
- Mechanic: BREAK-EVEN SAVING (€101 LHR/STN, €7 LHR/LGW, €16 LGW/STN)
- 6 secciones. CSS Module. Sin ads. Links al Hub y DPs.

---

## DOCUMENTOS CLAVE EN `docs/`

| Documento | Contenido |
|-----------|-----------|
| `TRAVELVUS-V1-BASELINE.md` | Baseline freeze del V1 |
| `POST-LAUNCH-AUDIT.md` | Auditoría post-Methodology |
| `POST-METHODOLOGY-SELECTION.md` | Selección del Hub como next asset |
| `AIRPORT-HUB-CONTRACT.md` | Truth contract del Hub |
| `AIRPORT-HUB-EXPERIENCE-SPEC.md` | Experience design del Hub |
| `FIRST-QUESTION-PAGE-AUDIT.md` | Selección del primer QP |
| `FIRST-QUESTION-PAGE-CONTRACT.md` | Truth contract del QP |
| `FIRST-QP-EXPERIENCE-SPEC.md` | **Experience design del QP — Fase 45** |
| `METHODOLOGY-TRUTH-CONTRACT.md` | Truth contract de Methodology |
| `METHODOLOGY-EXPERIENCE-SPEC.md` | Experience design de Methodology |
| `HOME-STRATEGY.md` | Estrategia del Home |
| `HOME-EXPERIENCE-SPEC.md` | Experience design del Home |
| `SEO-MIGRATION-AUDIT.md` | Auditoría de migración (70 URLs) |
| `MASTER-URL-LEDGER.md` | Ledger completo de URLs legacy |
| `LONDON-LEGACY-AUDIT.md` | Auditoría del legacy /london/ |
| `BRAND-SHELL-AUDIT.md` | Auditoría de brand shell |
| `VISUAL-REFINEMENT-AUDIT.md` | Auditoría de refinamiento visual |

---

## COMANDOS ÚTILES

```bash
cd c:\Users\tarek\Desktop\travelvus-build\travelvus-v2
npm run dev      # http://localhost:3000
npm test         # 88 tests
npm run build    # production build
npx vercel --prod --yes  # deploy a producción
```

---

## PARA CONTINUAR EN NUEVO CHAT

Pega este documento completo y di:

"Estamos en Travelvus V2. Último commit 916ad7c. Phase 45 completada — el primer Question Page está diseñado y listo para implementar. La experiencia está en docs/FIRST-QP-EXPERIENCE-SPEC.md. Quiero continuar con Phase 46: implementar el Question Page."
