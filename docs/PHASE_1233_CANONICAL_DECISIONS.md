# Travelvus — Phase 123.3 Canonical Decisions

**Evidencia nueva:** los 4 "Duplicate, Google chose different canonical" del screenshot GSC (12-oct-2026) son: `/vrl-bus-booking/`, `/trimet-trip-planner/`, `/top-rated-tourists-attractions-in-rome/`, `/expedia-taap/` — **todas legacy, todas en host non-www**, last crawl may-jun 2026.

---

## 1. Los 4 alternates = duplicados de host, NO clusters editoriales V2

- Las 4 URLs existen en www (200, en sitemap) y en non-www (308→www desde hace fases).
- Google eligió la versión www como canónica — **comportamiento correcto y ya resuelto** por el redirect de hostname. Son residuos de la era pre-V2 (sitemap V1 usaba base non-www hasta Phase 121.1).
- **Conclusión: NO ACTION.** Decaerán solos; re-verificar en el siguiente snapshot que el bucket baja de 4.

## 2. Pares `-guide` V2 — el screenshot NO los implica

- Ninguno de los 3 pares (`central-paris`, `la-defense`, `gare-du-nord`) aparece en el bucket de alternates.
- Señal orgánica comparada (Pages.csv):
  - `/guides/best-airport-for-central-paris` (estática): **16 imp @10.0** — la mejor semilla V2.
  - `/guides/best-airport-for-central-paris-guide` (dinámica): **0 imp** en el export.
  - `la-defense` estática: 3 imp @52 · `-guide`: 0 imp. `gare-du-nord`: 0 ambas.
- **Decisión: DEFER** — sin cambios de canonical en esta fase. La señal observada favorece a las estáticas (16 vs 0), pero la muestra es mínima y el export es pre-fixes. **Con el siguiente export**: si la estática mantiene impresiones y la `-guide` sigue en 0 durante 60+ días, se propondrá consolidación (canonical `-guide`→estática, o 301). Hasta entonces ambas permanecen indexables y en sitemap.

## 3. Otras confirmaciones

- `/result` + `/coverage`: exclusiones intencionales confirmadas (robots + noindex) — NO ACTION.
- Trailing-slash 308s: canonicalización legítima — NO ACTION.
- No se cambia NINGÚN canonical tag en esta fase.
