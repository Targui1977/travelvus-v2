# Travelvus V2 — New Page Implementation Checklist

## Before Coding

- [ ] Inspect `docs/TRAVELVUS_ARCHITECTURE_RULES.md`
- [ ] Check `src/components/ui/HomeHeader.tsx` (global header)
- [ ] Check `src/components/guide/TravelvusVerdict.tsx` (shared verdict)
- [ ] Check `src/components/guide/FAQAccordion.tsx` (shared FAQ)
- [ ] Check `src/components/guide/MobileTOC.tsx` (shared mobile TOC)
- [ ] Check `src/app/globals.css` (:root design tokens)
- [ ] Check breakpoint: `@media (max-width: 900px)`
- [ ] Map Design ZIP elements to existing shared components

## During Coding

- [ ] Import `HomeHeader` — never create inline `<header>`
- [ ] Import `TravelvusVerdict` — never recreate verdict block
- [ ] Import `FAQAccordion` — never create static FAQ
- [ ] Import `MobileTOC` — never create static TOC toggle
- [ ] Use CSS custom properties from `globals.css`
- [ ] Use route-local CSS Module for page-specific styles
- [ ] Hero image source does NOT appear again inside the same article body
- [ ] One `<h1>` per page
- [ ] Semantic heading order
- [ ] All images local to `public/`
- [ ] Zero WordPress hotlinks
- [ ] Zero duplicate global components

## Before Deploy

- [ ] `npm run build` — clean
- [ ] `npm test` — 88+ pass
- [ ] TypeScript — clean
- [ ] Test at 320, 375, 390, 430, 768, 900, 901, 1024, 1366, 1440px
- [ ] Verify hamburger visible at ≤900px
- [ ] Verify desktop nav hidden at ≤900px
- [ ] Verify no horizontal overflow
- [ ] Verify FAQ clickable
- [ ] Verify TOC clickable
- [ ] Verify all links functional
- [ ] Verify footer present

## After Deploy

- [ ] Verify `https://www.travelvus.com/<route>` returns 200
- [ ] Verify `https://travelvus.com/<route>` redirects to www
- [ ] Capture production screenshots
- [ ] Complete Architecture Compliance Report
- [ ] Owner visual approval
