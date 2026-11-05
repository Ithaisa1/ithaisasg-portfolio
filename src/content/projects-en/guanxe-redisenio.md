---
titulo: Guanxe · redesign concept
resumen: A redesign proposal for a real Canary Islands marketplace (product page, listings, search, cart and checkout), built to WCAG AA with its whole identity in one file so it can be swapped. Not affiliated with the company; all data is made up.
tipo: Redesign concept
fecha: November 2026
estado: Public demo · concept not affiliated with the company
demoNota: Concept with made-up data; nothing can be bought, in Spanish
imagenAlt: Home page of the redesign concept with a large search box in the centre, an outlet banner on the right and a row of categories below.
---

## What it is

A product exercise: I took a real Canary Islands marketplace, measured how it performs today and redesigned its key screens to see how much could be improved. **It is not work for the company and has no connection with it.** I don't use its logo, photos or texts: the name appears only as text, with a "Redesign concept" label, and the products, brands, prices and sellers are made up. Nothing is charged.

## Try it

The [demo](/demos/guanxe/) runs entirely in the browser (in Spanish). Some ideas:

1. Type "cami" or "zapatillas" in the home page search: autocomplete that works with keyboard and screen reader.
2. Open **Moda** (fashion) and filter by brand, price or island of origin. Filters live in the address, so they can be shared.
3. Open a product, pick a size and add it. Press **Finalizar compra** (checkout) and choose the Iberian Peninsula as destination: it warns about customs.
4. Change destination, language, currency or theme (light and dark) from the header selector.

## What I wanted to solve

- **Accessibility:** the current site fails basic WCAG rules (labels, contrast, heading structure).
- **Shipping between islands:** delivery time and cost depend on the island of origin and the destination, and shoppers should see that before buying, not at the end.
- **Low-friction buying:** search that helps, filters that make sense, and a three-step checkout with clear errors.

## Technical decisions

- **One source of identity:** name, colours, fonts, radii and legal texts live in `brand.config.ts`. Editing it is enough to turn the concept into another brand; I checked by rebranding everything and no trace of the original name was left.
- **Data behind an interface:** the catalogue (67 products, 10 categories) comes from JSON, but components ask a "repository" for data. To connect a real shop (Supabase, PrestaShop…) you swap that repository, not the site. The README explains how.
- **Accessibility from the start:** combobox search pattern, keyboard-friendly category menu, Radix dialogs and filters, screen reader announcements, 44 px touch targets, and all animations switched off if the person asks for that in their system.
- **Server-free demo:** the same code compiles to a static site; search and favourites run in the browser, and the fonts are served from this same site, with no requests to third parties.
- **Tests:** more than 450 checks in a real browser (mobile, desktop and 320 px) with automated accessibility audits.

## Measured: before and after

I measured the current site and the redesign with Lighthouse (mobile, median of 3 runs) and axe (WCAG 2.2 AA):

| | Current site | Redesign |
| --- | --- | --- |
| Accessibility (Lighthouse) | 65–78 | 100 |
| axe rules failed | 5–9 | 0 |
| Performance (Lighthouse) | 30–43 | 92–96 |

**Take the performance figure with care:** the redesign was measured on my own computer, with SVG illustrations and no third-party scripts, while the current site was measured on its real server. The real gap would be smaller. The accessibility figures are comparable.

## Limits worth knowing

- It is a concept: no accounts, payments or real orders, and the language setting only changes the navigation, not the catalogue.
- I haven't tested it with real screen readers, only with automated tools and by hand with a keyboard.
- Exchange rates and taxes are examples.

## My contribution

Personal project. I defined the approach, the screens, the accessibility rules and what to measure, and I reviewed and tested every part before accepting it. I used AI assistants to write the code and the documentation.
