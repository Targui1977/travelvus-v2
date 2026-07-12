# Travelvus V2 — Architecture Rules

**Status**: PERMANENT. Governs all future phases.

---

## Rule 1 — Design ZIP Authority

A Claude Design ZIP defines **visual appearance**, not architecture. When implementing:

1. Inspect existing shared components FIRST.
2. Map ZIP elements onto existing components.
3. Never copy global components from the ZIP as inline markup.
4. Never duplicate: Header, Footer, Verdict, CTA, FAQ, Mobile Nav, Mobile TOC, Design Tokens, Breakpoints.

## Rule 2 — One Shared Component

| System | Shared Component | Location |
|--------|-----------------|----------|
| Header + Mobile Nav | `HomeHeader` | `src/components/ui/HomeHeader.tsx` |
| Footer | `home-footer` (CSS) | `src/app/globals.css` |
| Travelvus Verdict | `TravelvusVerdict` | `src/components/guide/TravelvusVerdict.tsx` |
| FAQ Accordion | `FAQAccordion` | `src/components/guide/FAQAccordion.tsx` |
| Mobile TOC | `MobileTOC` | `src/components/guide/MobileTOC.tsx` |
| Design Tokens | CSS custom properties | `src/app/globals.css` (`:root`) |
| Responsive Breakpoints | `@media (max-width: 900px)` | All pages |

Do not create page-specific duplicates. If a variant is needed, add a controlled prop.

## Rule 3 — Responsive Gate

Every route must be verified at: 320, 375, 390, 430, 768, 900, 901, 1024, 1366, 1440px.
Check: Header, content, no overflow, no overlap, hamburger visibility, desktop nav visibility.

## Rule 4 — Production Completion

A phase is complete ONLY when: implemented, TS clean, lint clean, tests pass, build clean, committed, pushed, deployed, verified on www.travelvus.com.

## Rule 5 — Architecture Compliance

Every Delivery Report must include the Architecture Compliance table.
