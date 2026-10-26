---
titulo: Dexa Manager
resumen: A full-stack app that keeps all your digital tools and subscriptions in one place. It shows how much you spend each month, what renews and when, and emails you before you get charged.
tipo: Individual project
fecha: May 2026 · extended in October 2026
estado: Published · with a demo site
demoNota: One-click sign-in as admin or user · data resets every night
imagenAlt: Dexa Manager dashboard in dark mode showing monthly spend (€199.50) with a bar chart for the next 12 months, the list of upcoming renewals (Figma, ChatGPT, Adobe Creative Cloud and Spotify) and four cards with total tools, next payment, the most expensive tool and categories.
---

## Try it

Go to [dexa-manager-demo.vercel.app](https://dexa-manager-demo.vercel.app) and click **Probar la demo** (Try the demo). On the sign-in screen you can log in with one click:

- **As a user** (`usuario.demo@example.com`): tools, subscriptions and a dashboard with sample data.
- **As an admin** (`admin.demo@example.com`): also the control panel with users, activity and system status.

The password for both is `demo1234`. Change anything you like: the data goes back to its starting state every night. The app is available in English from the language menu.

## The problem

Between IDEs, design apps, AI tools, music and cloud storage, it's easy to lose track of how much you pay each month and when each subscription renews. Often you only find out once you've already been charged.

## What it does

- **Dashboard:** monthly and yearly spend, renewals in the next 30 days, the most expensive tool, spend by category and expected payments over 12 months.
- **Tools and subscriptions:** a catalogue of more than 80 suggested tools with their logos, 18 categories, statuses (active, inactive, archived), plan, billing cycle and renewal date.
- **Email reminders** before each renewal, which can be turned on from the profile.
- **Change history** for each tool: additions, edits, deletions and price changes.
- **Import and export:** upload a CSV (including one made in Excel) with a preview before saving, and download your data as CSV, JSON or a PDF report.
- **Control panel** for the admin: figures and charts, users (search, view details, change role, block, delete), everyone's tools, categories, activity log and system status.
- **Spanish and English**, light and dark mode, responsive from 320 px to large screens, and it can be **installed as an app** on a phone or computer.

## My contribution

- I started it as an individual project (about 65 hours, planned in Trello and tracked with Toggl Track) and later extended it into a complete, published app.
- I designed the data model, the REST API and the screens, and decided what went into each version.
- I moved the project from Render to Vercel and Neon, and set up the public demo site, separate from production and with its own database.
- I did the "Aurora" redesign: visual identity, logo, icons and dark mode by default.
- I tested every release in the real app, on desktop and mobile.
- The code for the latest versions was written with AI assistance (Claude Code). I led the work, reviewed every change and validated the result.

## Technical decisions

- **Everything in one Vercel project:** the frontend is served as static files and the Express API runs as a Vercel Function on the same domain, so there's no cross-domain CORS to configure. The database is PostgreSQL on Neon.
- **Automatic migrations:** on each deploy, the build applies the Prisma migrations through the direct connection (no pooler), while the API uses the pooled connection.
- **Security:** passwords hashed with bcrypt, JWT sessions, every input validated with Zod before it reaches the database, and rate limiting on sign-in. Each person only sees their own data, and blocks and role changes take effect immediately.
- **A safe demo site:** with `DEMO_MODE=true`, the demo accounts can't be deleted, blocked or have their password changed, and a scheduled job (Vercel Cron) reloads the data every night.
- **Quality:** integration tests with Jest and Supertest against a real PostgreSQL database, and GitHub Actions runs tests, lint and build on every pull request.

## Limitations

- Prices are stored in a single currency (euros).
- Email reminders are sent from a Gmail account and may end up in spam.
- It still lacks end-to-end tests (for example with Playwright) and a move to TypeScript.

## What I learned

- Designing a REST API with Express and Prisma: middleware, validation at the edge and clear errors.
- The difference between `prisma migrate dev` and `migrate deploy`, and why migrations need a connection without a pooler.
- Moving an app from a traditional server to serverless functions without changing the API.
- Building a public demo that anyone can play with without breaking anything.
