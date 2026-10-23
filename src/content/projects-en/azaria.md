---
titulo: AzarIA
resumen: An app to check Spanish lottery tickets by scanning their QR code, save them and see instantly whether they have won, using the real results of each draw.
tipo: Personal project
fecha: October 2026
estado: Public demo · full app for personal use
demoNota: Demo version, in Spanish
codigoNota: Private repository · access on request
imagenAlt: AzarIA demo home page with the buttons "Check a ticket" and "My tickets" and cards for Bonoloto, La Primitiva, Euromillones and EuroDreams.
---

## Try it

The [demo](/demos/azaria/) includes three parts of the app:

- **Check:** scan the QR code on the receipt with the camera, upload a photo or type the numbers, and choose the draw.
- **My tickets:** save what you play and check whether it has won, with a balance of money spent and prizes.
- **Games:** latest results and rules for Bonoloto, La Primitiva, Euromillones, EuroDreams and the Christmas Lottery, including the ticket checker for the Christmas draw.

Tickets are stored only in your browser: there is no sign-up and nothing is sent to any server. The demo uses real results up to the date it was published; the full app updates them every day.

## The problem

Checking a ticket by hand is slow, and it is easy to get the numbers or the draw date wrong. And if you play often, nothing tells you how much you have spent and how much you have won.

## Technical decisions

- **QR reading in the browser** with jsQR, from the camera or a photo. The Spanish state lottery does not publish the format of its codes, so the app interprets it and asks you to confirm the numbers it read.
- **Real data that updates itself:** a GitHub Actions job downloads the new results every day, validates them and republishes the app.
- **No server or database:** the historical results are bundled with the app and tickets are kept in the browser's storage.
- **Logic separated from the interface:** each game's rules and the prize checks are written in plain TypeScript, with 136 automated tests (Vitest and Testing Library).
- **Demo built from the same code:** a build-time switch hides the parts that are not shown here, without maintaining two versions.

## My contribution

A personal project. I came up with the idea, decided which features it had and how it should look, and reviewed and tested every part before publishing it. I used AI assistants to write the code and the documentation.

## Responsible gambling

AzarIA does not sell bets or predict results: every combination has the same probability. It is a tool for people aged 18 and over.
