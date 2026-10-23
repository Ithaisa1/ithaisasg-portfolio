---
titulo: AdastraSky
resumen: An astrotourism platform for the Canary Islands with a map of stargazing spots, sky quality, astronomical events and an assistant that answers using documentation about the observatories.
tipo: Bootcamp final project
fecha: June 2026 · improved in October 2026
estado: Live · with a test account
demoNota: Test account below
imagenAlt: AdastraSky map of the Canary Islands with viewpoints colour-coded by type, next to the app's side menu.
---

## Try it

Go to [adastrasky.vercel.app](https://adastrasky.vercel.app) and log in with the test account `invitada@adastra.sky` and the password `Estrellas2026`. It is a public account: you can use it normally, but it cannot be deleted.

## The problem

The Canary Islands have some of the best skies in the world for stargazing, but the information you need to decide where and when to go is scattered: viewpoints, weather forecasts, moon phase, astronomical events and sky protection rules.

## What it does

- **Interactive map** (Leaflet) with 95 stargazing spots across the islands.
- **Sky quality:** a score calculated from OpenWeatherMap weather data.
- **Calendar** of astronomical events: meteor showers, eclipses and more.
- **Assistant:** it finds the most relevant passages in 18 documents about the Canary Islands observatories and the sky protection law, and writes the answer with a language model. If no model is available, it shows the passages it found.
- Sign-up and login with user and admin roles.
- Three languages: Spanish, English and German.

## My contribution

A solo project from start to finish: idea, design, frontend, backend, AI service and deployment. I used AI assistants (OpenCode, Claude, ChatGPT and Gemini) to write code and documentation, as stated in the repository.

## Technical decisions

- **Three separate parts:** a React frontend, a Node.js and Express API (JWT authentication, rate limiting and connections to external services) and a Python service for the AI, because the LangChain and LangGraph libraries are designed for Python.
- **Simple search:** instead of a vector database, the assistant uses in-memory TF-IDF. With 18 documents it is enough, and it fits on a free plan.
- **Plan B for the AI:** if the first language model fails, it tries another one. If none responds, the assistant shows the passages it found.

## Challenges and what I learned

- **Free plans have limits.** Render's free database expires and services shut down when they are not used. In October 2026 I moved the backend to Vercel.
- Setting up environment variables correctly across several separately deployed services.
- Connecting a language model to my own documents (RAG) at a basic level, and understanding its limitations.
