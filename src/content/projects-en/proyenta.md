---
titulo: Proyenta
resumen: A web app that helps freelancers and the self-employed find out whether their projects are worth it. It tracks hours, expenses and payments and works out how much you really earn per hour of work.
tipo: Personal project
fecha: October 2026
estado: Published · paid Premium version in progress
demoNota: In Spanish · try it without signing up
codigoNota: Private repository · access on request
imagenAlt: Proyenta home screen with four cards (paid to you, still to be paid, spent and what you keep) and the project list with a traffic light saying "Vas bien" (On track) or "Ojo" (Careful).
---

## Try it

Go to [proyenta.vercel.app](https://proyenta.vercel.app) and click **Probar sin registrarse** (Try it without signing up). It creates a temporary account with sample projects that deletes itself after 7 days. No email or password needed.

## The problem

Many freelancers price their work by gut feeling and don't know whether, after the real hours and expenses, they actually made money. Spreadsheets are slow, and accounting tools use language that puts beginners off.

## What it does

- **A traffic light for each project:** green, amber or red depending on hours, expenses and payments, with plain sentences such as "You're earning about €68 per hour of work".
- **Hours, expenses and payments** for each job, with a timer that corrects the device clock using the server time.
- **PDF quotes** with the issuer's logo and details, generated in the browser.
- **Two versions:** a simple one with no jargon for beginners, and a full one (Premium) with a pricing simulator, reports and a price guide.
- **Admin panel:** key figures, user management and Premium access.
- **Spanish VAT (IVA) and the Canary Islands tax (IGIC)**, always kept separate from the amounts.
- A built-in user guide, and it can be **installed as an app** on a phone.

## My contribution

- I defined the product: who it is for, what it does, how each calculation is explained and what is out of scope.
- I made the product and scope decisions, such as building quotes instead of invoices, or making the full version a paid one.
- I set up and published all the services: Supabase, Vercel, email delivery with Brevo and Cloudflare's anti-bot protection.
- I tested every release in the real app, on desktop and mobile.
- The code was written with AI assistance (Claude Code). I led the work, reviewed every change and validated the result.

## Technical decisions

- **Security in the database:** every table has RLS (Row Level Security) policies so each person only sees their own data. Admin actions and Premium access are checked by PostgreSQL functions, so bypassing the interface achieves nothing.
- **Money stored as whole cents** to avoid rounding errors.
- **Quotes, not invoices:** in Spain, invoicing software must comply with VERI*FACTU, so I limited the scope to quotes.
- **Load on demand:** each section and the PDF generator are only downloaded when used, so the home page loads quickly.
- **Demo without signing up**, using Supabase anonymous accounts and a scheduled job (pg_cron) that deletes them after 7 days.
- **Quality:** more than 300 tests (Vitest and Testing Library) and SQL scripts that check the security policies.

## Limitations

- The full version (Premium) has no payment yet: for now, only the administrator can enable it.
- The legal pages are drafts until the owner's details are filled in.
- Emails are sent from a Gmail address and may end up in spam; this will improve with a custom domain.
- It still needs testing with real users.

## What I learned

- Designing a secure data model with RLS and `security definer` functions in PostgreSQL.
- Keeping calculations outside React so they can be tested on their own.
- Shipping a real app: environment variables, transactional email, anti-bot protection, PWA and continuous deployment.
- Explaining the same figure in two different ways depending on who is reading.
