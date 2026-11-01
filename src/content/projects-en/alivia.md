---
titulo: Alivia
resumen: An emotional-support platform with a directory of psychologists and appointment booking, a moderated peer-support community, a crisis protocol, moderation with an audit log, and an encrypted private journal.
tipo: Personal project
fecha: October 2026
estado: Public demo · complete MVP, not launched yet
demoNota: Interactive demo in your browser, with made-up data
codigoNota: Private repository · access on request
imagenAlt: Alivia's directory of professionals, with the demo notice at the top and filters for specialty, modality, language and price.
---

## Try it

The [demo](/demos/alivia/) runs entirely in your browser: there is no server, nothing is sent anywhere, and the professionals, licence numbers and posts are made up. **Entrar** ("Sign in") offers four example accounts. The interface is in Spanish.

1. **Regular user.** Find a professional, **book an appointment** and cancel it (the slot becomes free again). Join the *Ansiedad* ("Anxiety") group and post something, also **anonymously**.
2. **Crisis protocol.** Write in the group something like "ya no puedo más, quiero morirme" ("I can't take it any more, I want to die"; it is test text). The message **is not published**: only you see it, a notice with the 024 and 112 helplines appears, and a top-priority report is created.
3. **Moderation.** Sign out and sign in as moderation: that report is first in the queue. **The anonymous author is protected**: revealing them requires a reason and is logged.
4. **Administration.** Verify a professional and look at the **audit log** of what you just did.
5. **Your account.** Try the **journal**, download your data and delete the account. **Reiniciar demo** ("Reset demo") puts everything back to the start.

Everything is stored only in this browser tab and is lost when you close it.

## The problem

A mental-health platform has to be careful above all: whoever writes in a bad moment must not be exposed, a delicate message should reach a person before it is public, and nobody should be able to rewrite what happened afterwards. I wanted to see how to build that for real, with the server as the only source of trust.

## Technical decisions

- **What must be impossible is prevented by the database.** Double booking a slot is blocked by an atomic update, a partial unique index and a transaction (tested with two simultaneous requests); the audit log is immutable through triggers.
- **Crisis protocol with a swappable detector** (keyword-based today, no AI, so no intimate text is sent to third parties). A high-risk text is not published, shows a warm notice and files a report, without copying the text into the reason. It is cautious: it prefers a false positive to a false negative.
- **Real anonymity:** the API never returns the author of an anonymous post; moderators can suspend by content without knowing who it is, and revealing the author requires a reason that is logged *before* it is shown.
- **Permissions always on the server**, with the role read from the database on every request and no role inheritance: moderation does not administer and administration does not moderate.
- **Sessions:** a 15-minute access token kept only in memory and a rotating refresh token in an httpOnly cookie, with reuse detection.
- **Encrypted journal** (AES-256-GCM, versioned and rotatable key, bound to each entry); it is not analysed. Exporting my data and deleting the account ask for the password again.
- **Tested against a real PostgreSQL:** more than 100 API tests and end-to-end tests with accessibility checks, also on PostgreSQL 16 in CI.
- **Demo built from the same code:** a build switch replaces the API with an in-browser version that uses the same risk detector, the same limits and the same errors. It has its own tests.

## Limits worth knowing

- **It is a demonstration, not a service.** The crisis texts, consents and community rules are a technical draft: they need clinical and legal review before being used with real people, and the demo says so itself.
- There are no real professionals: it would need a professional sign-up flow and manual checking of the licence number.
- The keyword detector does not understand negation or irony.
- The full version needs a server with PostgreSQL and an email service; the demo does not.

## My contribution

Personal project. I had the idea, decided what features it had and how it should behave, and reviewed and tested each part before accepting it. I used AI assistants to write the code and the documentation.
