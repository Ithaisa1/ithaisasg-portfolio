---
titulo: AdastraSky
resumen: Plataforma de astroturismo para Canarias con mapa de zonas de observación, calidad del cielo, eventos astronómicos y un asistente que responde con documentación sobre los observatorios.
tipo: Proyecto final del bootcamp
fecha: Junio 2026 · mejorado en octubre 2026
estado: Publicado · con usuario de prueba
orden: 4
color: "#1e1b4b"
tecnologias: [React, Vite, Tailwind CSS, Leaflet, i18next, Node.js, Express, PostgreSQL, Python, FastAPI, LangGraph, Vercel]
demo: https://adastrasky.vercel.app
demoNota: Usuario de prueba abajo
codigo: https://github.com/Ithaisa1/AdastraSky
imagen: ../../assets/proyectos/adastrasky.png
imagenAlt: Mapa de AdastraSky con las islas Canarias y los miradores marcados por colores según su tipo, junto al menú lateral de la aplicación.
---

## Pruébalo

Entra en [adastrasky.vercel.app](https://adastrasky.vercel.app) con el usuario de prueba `invitada@adastra.sky` y la contraseña `Estrellas2026`. Es una cuenta pública: se puede usar con normalidad, pero no se puede borrar.

## El problema

Canarias tiene algunos de los mejores cielos del mundo para observar las estrellas, pero la información para decidir dónde y cuándo ir está repartida: miradores, previsión del tiempo, fase lunar, eventos astronómicos y normas de protección del cielo.

## Qué hace

- **Mapa interactivo** (Leaflet) con 95 zonas de observación en las islas.
- **Calidad del cielo:** una puntuación calculada con datos meteorológicos de OpenWeatherMap.
- **Calendario** de eventos astronómicos: lluvias de estrellas, eclipses y otros.
- **Asistente:** busca los fragmentos más relevantes en 18 documentos sobre los observatorios de Canarias y la ley del cielo, y redacta la respuesta con un modelo de lenguaje. Si no hay ningún modelo disponible, muestra directamente los fragmentos encontrados.
- Registro e inicio de sesión con roles de usuario y administrador.
- Tres idiomas: español, inglés y alemán.

## Mi aportación

Proyecto individual de principio a fin: idea, diseño, frontend, backend, servicio de IA y despliegue. Para escribir código y documentación usé asistentes de IA (OpenCode, Claude, ChatGPT y Gemini), como se indica en el repositorio.

## Decisiones técnicas

- **Tres piezas separadas:** el frontend en React, una API en Node.js y Express (autenticación con JWT, límites de peticiones y conexión con los servicios externos) y un servicio en Python para la IA, porque las librerías de LangChain y LangGraph están pensadas para Python.
- **Búsqueda sencilla:** en lugar de una base de datos vectorial, el asistente usa TF-IDF en memoria. Con 18 documentos es suficiente y cabe en un plan gratuito.
- **Plan B para la IA:** si el primer modelo de lenguaje falla, se prueba con otro. Si ninguno responde, el asistente muestra los fragmentos encontrados.

## Dificultades y qué aprendí

- **Los planes gratuitos tienen límites.** La base de datos gratuita de Render caduca y los servicios se apagan si no se usan. En octubre de 2026 migré el backend a Vercel.
- Configurar bien las variables de entorno entre varios servicios desplegados por separado.
- Conectar un modelo de lenguaje con documentos propios (RAG) a un nivel básico, y entender sus límites.
