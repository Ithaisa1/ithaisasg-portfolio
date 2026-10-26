---
titulo: Dexa Manager
resumen: App full-stack para tener todas tus herramientas digitales y suscripciones en un solo sitio. Muestra cuánto gastas al mes, qué se renueva y cuándo, y avisa por email antes de que te cobren.
tipo: Proyecto del bootcamp
fecha: Mayo 2026 · ampliado en octubre 2026
estado: Publicado · con web de demo
orden: 3
color: "#1e1440"
tecnologias: [React, Node.js, Express, PostgreSQL, Prisma, Vercel, Vite, React Router, i18next, Zod, JWT, Jest, Supertest, PWA, Neon, GitHub Actions]
demo: https://dexa-manager-demo.vercel.app
demoNota: Entra con un clic como admin o como usuaria · los datos se reinician cada noche
codigo: https://github.com/Ithaisa1/dexa-manager
imagen: ../../assets/proyectos/dexa-manager.png
imagenAlt: Dashboard de Dexa Manager en modo oscuro con el gasto mensual (199,50 €) y un gráfico de barras de los próximos 12 meses, la lista de renovaciones próximas (Figma, ChatGPT, Adobe Creative Cloud y Spotify) y cuatro tarjetas con el total de herramientas, el próximo pago, la más cara y las categorías.
---

## Pruébalo

Entra en [dexa-manager-demo.vercel.app](https://dexa-manager-demo.vercel.app) y pulsa **Probar la demo**. En la pantalla de inicio de sesión puedes entrar con un clic:

- **Como usuaria** (`usuario.demo@example.com`): herramientas, suscripciones y dashboard con datos de ejemplo.
- **Como administradora** (`admin.demo@example.com`): además, el panel de control con usuarios, actividad y estado del sistema.

La contraseña de las dos es `demo1234`. Puedes cambiar lo que quieras: los datos vuelven a su estado inicial cada noche.

## El problema

Entre IDEs, apps de diseño, IA, música y almacenamiento en la nube, es fácil perder la cuenta de cuánto pagas cada mes y cuándo se renueva cada suscripción. Muchas veces te enteras cuando ya te han cobrado.

## Qué hace

- **Dashboard:** gasto mensual y anual, renovaciones de los próximos 30 días, la herramienta más cara, gasto por categoría y pagos previstos a 12 meses.
- **Herramientas y suscripciones:** catálogo con más de 80 herramientas sugeridas y su logo, 18 categorías, estados (activa, inactiva, archivada), plan, ciclo de pago y fecha de renovación.
- **Avisos por email** antes de cada renovación, activables desde el perfil.
- **Historial de cambios** de cada herramienta: altas, ediciones, bajas y cambios de precio.
- **Importar y exportar:** sube un CSV (también uno hecho en Excel) con vista previa antes de guardar, y descarga tus datos en CSV, JSON o un informe en PDF.
- **Panel de control** para la administradora: cifras y gráficos, usuarios (buscar, ver ficha, cambiar rol, bloquear, eliminar), herramientas de todos, categorías, registro de actividad y estado del sistema.
- **Español e inglés**, modo claro y oscuro, adaptada de 320 px a pantallas grandes y **se puede instalar como una app** en el móvil o el ordenador.

## Mi aportación

- Lo empecé como proyecto individual del bootcamp Full Stack + IA de Ironhack (unas 65 horas, organizado en Trello y medido con Toggl Track) y después lo amplié hasta convertirlo en una app completa y publicada.
- Diseñé el modelo de datos, la API REST y las pantallas, y decidí qué entraba en cada versión.
- Llevé el proyecto de Render a Vercel y Neon, y monté la web de demo pública, separada de la de producción y con su propia base de datos.
- Hice el rediseño «Aurora»: identidad visual, logo, iconos y modo oscuro por defecto.
- Probé cada entrega en la app real, en ordenador y en móvil.
- El código de las últimas versiones se hizo con asistencia de IA (Claude Code). Yo dirigí el trabajo, revisé cada cambio y validé el resultado.

## Decisiones técnicas

- **Todo en un solo proyecto de Vercel:** el frontend se sirve como archivos estáticos y la API de Express funciona como una Vercel Function en el mismo dominio, así que no hace falta configurar CORS entre dominios. La base de datos es PostgreSQL en Neon.
- **Migraciones automáticas:** al publicar, el build aplica las migraciones de Prisma con la conexión directa (sin pooler), y la API usa la conexión con pooler.
- **Seguridad:** contraseñas con bcrypt, sesiones con JWT, validación de cada entrada con Zod antes de tocar la base de datos y límite de intentos en el login. Cada persona solo ve sus datos, y los bloqueos y cambios de rol surten efecto al instante.
- **Web de demo segura:** con `DEMO_MODE=true`, las cuentas de demo no se pueden borrar, bloquear ni cambiar de contraseña, y una tarea programada (Vercel Cron) recarga los datos cada noche.
- **Calidad:** tests de integración con Jest y Supertest contra una base de datos PostgreSQL real, y GitHub Actions comprueba tests, lint y build en cada pull request.

## Límites

- Los precios se guardan en una sola moneda (euros).
- Los avisos por email se envían desde una cuenta de Gmail y pueden acabar en spam.
- Faltan tests de extremo a extremo (por ejemplo, con Playwright) y pasar el código a TypeScript.

## Qué aprendí

- Diseñar una API REST con Express y Prisma: middleware, validación en el borde y errores claros.
- La diferencia entre `prisma migrate dev` y `migrate deploy`, y por qué las migraciones necesitan una conexión sin pooler.
- Pasar una app de un servidor tradicional a funciones serverless sin cambiar la API.
- Preparar una demo pública que cualquiera pueda tocar sin romper nada.
