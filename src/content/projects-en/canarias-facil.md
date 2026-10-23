---
titulo: Canarias Fácil
resumen: An independent website that explains administrative procedures in the Canary Islands in plain language, showing the official source and the date each fact was checked.
tipo: Personal project
fecha: October 2026
estado: Version 1.0 published · user testing pending
demoNota: In Spanish
codigoNota: Private repository · access on request
imagenAlt: Canarias Fácil home page with the question "What do you need?" and buttons such as "I have moved house" or "Renew my ID card".
---

## The problem

Doing an official procedure for the first time is hard: the information is spread across many government websites, written in administrative language, and rarely says which documents you need in each case. Canarias Fácil is designed for people doing a procedure for the first time, for people with limited digital skills or who have just moved to the Canary Islands, and for anyone helping someone else.

## What it does

- **Procedure guides** explaining what it is, whether it applies to you, which documents you need, which steps to follow and where to go. Each guide shows the official source and the date it was checked.
- **The whole Canary Islands:** every island and all 88 municipalities, with a registration (empadronamiento) guide for each one.
- **Guided assistant** on the home page (questions with buttons), a search engine with synonyms, and a glossary.
- **Checkboxes** to tick off documents and steps, a "My procedures" list and a printable version. Everything is stored only in the person's browser.
- **"Explain this letter to me":** the person uploads a photo or PDF of a letter, a payslip or a contract. The website reads the text inside the browser itself (OCR with Tesseract.js), hides personal data and explains the document. Nothing is sent to any server.
- **Accessibility panel:** reading settings, dark mode, colour-blind palettes and "Listen to this page".
- It can be **installed as an app** on a phone.

## My contribution

- I defined what the website had to do, who it was for and what was out of scope, and I made the product decisions. Each one is documented in the repository (more than 70).
- I checked the content of the guides against the official sources.
- Testing, review and publishing on Vercel.
- The code, the visual direction and the logo were made with AI assistance (Claude). I led the work, chose between the proposals, reviewed every change and validated the result.

## Technical decisions

- **Astro:** it generates static HTML pages that load quickly on basic phones. React is only used for the interactive parts.
- **No accounts and no server:** each person's data stays on their device. It is more private and has no server costs.
- **No AI chatbot:** I considered an AI chat and ruled it out. The home page assistant only chooses between checked pages, so it cannot make up answers.
- **Validated content:** the guides are written in YAML and checked against Zod schemas at build time.
- **Automated quality checks:** 196 unit tests (Vitest) and 84 browser tests (Playwright) with axe accessibility checks (WCAG 2.2 AA), on mobile and desktop. Vercel only publishes if everything passes.

## Limitations

- **It is not an official website**, and every page says so. It does not carry out procedures or decide whether someone is entitled to benefits: it always links to the official body.
- Testing with real users and with a screen reader is still pending.
- Some simplified explanations were drafted with AI and are awaiting human review.
- Official information changes. That is why there is a periodic review and an automatic alert when an official source changes or stops working.

## What I learned

- Writing in plain language is as hard as programming, and it has to be tested with people.
- Accessibility can be checked with tests, just like the rest of the code.
- Continuous integration (CI) that blocks publishing prevents mistakes from going live unnoticed.
