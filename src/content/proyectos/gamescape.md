---
titulo: GameScape
resumen: Buscador de videojuegos que consume la API pública de RAWG, con filtros, ficha de cada juego, favoritos y reseñas.
tipo: Proyecto individual
fecha: Abril 2026
estado: Terminado
orden: 5
color: "#3b2a6b"
tecnologias: [React, Vite, React Router, Context API, CSS Modules, Vitest, Testing Library, Vercel]
demo: https://game-scape-mu.vercel.app
codigo: https://github.com/Ithaisa1/GameScape
imagen: ../../assets/proyectos/gamescape.png
imagenAlt: Portada de GameScape en modo oscuro, con buscador, filtros por género y valoración, y tarjetas de videojuegos.
---

## Qué hace

- **Búsqueda y filtros** por género y valoración, con ordenación y paginación.
- **Ficha de cada juego** con plataformas, géneros y enlaces a las tiendas oficiales.
- **Favoritos y reseñas** con valoración de 1 a 5 estrellas.
- **Cuentas de demostración:** el registro y el inicio de sesión se guardan en el navegador (localStorage), sin servidor. Sirve para practicar rutas protegidas, no es una autenticación real.
- Tema claro y oscuro, y avisos tipo «toast».

## Mi aportación

Proyecto individual, hecho en una semana. Usé ChatGPT como apoyo para el desarrollo y la documentación, como se indica en el repositorio.

## Decisiones técnicas

- **Context API** para el estado global (sesión, juegos, avisos y tema) en lugar de una librería externa. Para el tamaño del proyecto no hacía falta más.
- **Hooks personalizados** y un servicio separado para las llamadas a la API, de forma que los componentes solo se ocupan de mostrar datos.
- **CSS Modules** para que los estilos de cada componente no choquen con los demás.

## Qué aprendí

- Organizar una aplicación de React por componentes, páginas, contexto y servicios.
- Navegación con React Router y rutas protegidas.
- Escribir tests de componentes con Testing Library.
