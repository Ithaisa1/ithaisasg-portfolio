---
titulo: GameScape
resumen: A video game search engine that uses the public RAWG API, with filters, a page for each game, favourites and reviews.
tipo: Individual project
fecha: April 2026
estado: Finished
imagenAlt: GameScape home page in dark mode, with a search bar, genre and rating filters, and video game cards.
---

## What it does

- **Search and filters** by genre and rating, with sorting and pagination.
- **A page for each game** with platforms, genres and links to the official stores.
- **Favourites and reviews** with a 1 to 5 star rating.
- **Demo accounts:** sign-up and login are stored in the browser (localStorage), with no server. It is for practising protected routes; it is not real authentication.
- Light and dark themes, and toast notifications.

## My contribution

An individual project, built in one week. I used ChatGPT to support development and documentation, as stated in the repository.

## Technical decisions

- **Context API** for global state (session, games, notifications and theme) instead of an external library. The project was small enough not to need more.
- **Custom hooks** and a separate service for API calls, so components only take care of displaying data.
- **CSS Modules** so each component's styles do not clash with the others.

## What I learned

- Organising a React application into components, pages, context and services.
- Navigation with React Router and protected routes.
- Writing component tests with Testing Library.
