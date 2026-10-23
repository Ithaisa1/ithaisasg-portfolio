# Portfolio · Ithaisa Sánchez González

Portfolio profesional como desarrolladora frontend. Web estática hecha con [Astro](https://astro.build), sin frameworks de CSS y casi sin JavaScript.

- **Dirección:** https://ithaisasg.twincore.es (hosting de Piensa)
- **Copia en Vercel:** https://ithaisasg-portfolio.vercel.app
- **Panel para editar el contenido:** https://ithaisasg.twincore.es/admin/
- **Publicación:** cada cambio en `main` (desde el panel o con `git push`) se publica solo. GitHub Actions construye la web y la sube a Piensa por SFTP (`.github/workflows/publicar-ftp.yml`), y Vercel publica su copia.

## Comandos

| Comando           | Qué hace                                                    |
| ----------------- | ----------------------------------------------------------- |
| `npm install`     | Instala las dependencias (solo la primera vez)              |
| `npm run dev`     | Abre la web en local en `http://localhost:4321`             |
| `npm run build`   | Genera la web final en `dist/`                              |
| `npm run preview` | Sirve `dist/` en local para revisarla antes de publicar     |
| `npm run ci`      | Comprueba los tipos y genera la web. Si falla, no publiques |

## Dónde está cada cosa

| Archivo o carpeta              | Qué contiene                                                                        |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| `src/data/*.json`              | Tus datos: presentación y contacto, experiencia, formación, habilidades e idiomas   |
| `src/data/perfil.ts`           | Reúne los `.json` y les da tipo. No hace falta tocarlo para cambiar contenido       |
| `public/admin/`                | El panel de contenido (Sveltia CMS) y sus formularios (`config.yml`)                |
| `src/content/proyectos/*.md`   | Un archivo por proyecto. El texto de la ficha se escribe en Markdown                |
| `src/assets/proyectos/`        | Capturas de los proyectos (Astro las convierte a WebP y las optimiza)               |
| `src/content.config.ts`        | Qué campos debe tener cada proyecto. Si falta uno, el build falla y dice cuál       |
| `src/pages/`                   | Páginas: portada, ficha de proyecto y 404                                           |
| `src/components/`, `src/layouts/` | Piezas reutilizables: cabecera, pie, tarjeta de proyecto, botón de copiar        |
| `src/styles/global.css`        | Colores (modo claro y oscuro), tipografía, botones y etiquetas                      |
| `public/`                      | Archivos que se sirven tal cual: favicon, imagen para redes, robots.txt y el CV     |

## Tareas habituales

Lo más cómodo es hacerlo desde el panel, **https://ithaisasg.twincore.es/admin/**: entras con tu token de GitHub, cambias lo que quieras y pulsas Guardar. En uno o dos minutos está publicado (puedes seguirlo en la pestaña *Actions* de GitHub). Si prefieres hacerlo a mano, estos son los pasos:

### Añadir un proyecto

1. Guarda una captura en `src/assets/proyectos/` (por ejemplo, 1280 × 800).
2. Copia uno de los archivos de `src/content/proyectos/` con otro nombre. Ese nombre será la dirección: `mi-proyecto.md` → `/proyectos/mi-proyecto/`.
3. Cambia los datos de arriba (entre las líneas `---`) y el texto de abajo.
4. Ejecuta `npm run dev` y revísalo.

### Cambiar el orden de los proyectos

Cambia el número `orden` de cada archivo (1 = primero). El que tenga `destacado: true` ocupa todo el ancho y sale en la portada.

### Añadir el CV en PDF

1. Guarda el PDF en `public/`, por ejemplo `public/cv-ithaisa-sanchez.pdf`.
2. En `src/data/perfil.json`, dentro de `contacto`, cambia `"cv": null` por `"cv": "/cv-ithaisa-sanchez.pdf"`. Aparecerá un botón «Descargar» en Contacto.

## Logo y archivos de marca

El logo «isg» (tus iniciales en un solo trazo; el punto de la «i» es el sol) está en `src/components/Logo.astro`. La carpeta `marca/` guarda los archivos para usar fuera de la web (no se publica):

| Archivo                              | Para qué                                             |
| ------------------------------------ | ---------------------------------------------------- |
| `logo-isg.svg` / `logo-isg.png`      | Fondos claros: CV en Canva, documentos               |
| `logo-isg-blanco.svg` / `.png`       | Fondos oscuros                                       |
| `perfil-linkedin.png`                | Foto de perfil o portada (LinkedIn, GitHub), 800×800 |
| `favicon-i.svg` / `favicon-i-512.png` | Versión reducida: solo la «i» con el sol            |

Colores: tinta `#13232B`, verde azulado `#0A716C`, naranja `#E2643B`, fondo claro `#F3F5F4`.

## Decisiones

- **Astro y HTML estático:** carga rápido, es accesible por defecto y no necesita servidor.
- **CSS propio:** los colores están como variables en `global.css`, con su versión oscura. El contraste del texto cumple WCAG AA.
- **Fuentes alojadas en la propia web** (paquetes `@fontsource-variable`), sin Google Fonts: más rápido y sin enviar datos de las visitas a terceros.
- **Habilidades por evidencia, sin porcentajes:** «En mis proyectos», «En el trabajo, en equipo», «Formación práctica» y «Diseño y SEO».
- **Panel sin servidor ni base de datos:** Sveltia CMS guarda cada cambio como un commit en GitHub. El contenido sigue siendo archivos de texto con historial.
- **Sin formulario de contacto:** email y teléfono con botón de copiar, sin servicios externos.
