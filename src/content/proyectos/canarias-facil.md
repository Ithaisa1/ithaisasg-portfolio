---
titulo: Canarias Fácil
resumen: Web independiente que explica trámites administrativos de Canarias en lenguaje claro, con la fuente oficial y la fecha en que se comprobó cada dato.
tipo: Proyecto personal
fecha: Octubre 2026
estado: Versión 1.0 publicada · pendiente de pruebas con usuarios
orden: 1
destacado: true
color: "#0b5470"
tecnologias: [Astro, TypeScript, Tailwind CSS, React, Zod, Vitest, Playwright, GitHub Actions, Vercel]
demo: https://canariasfacil.vercel.app
codigoNota: Repositorio privado · acceso bajo petición
imagen: ../../assets/proyectos/canarias-facil.png
imagenAlt: Portada de Canarias Fácil con la pregunta «¿Qué necesitas?» y botones como «Me he mudado» o «Renovar el DNI».
---

## El problema

Hacer un trámite por primera vez es difícil: la información está repartida entre muchas webs oficiales, escrita en lenguaje administrativo y sin decir qué documentos hacen falta en cada caso. Canarias Fácil está pensada para quien hace un trámite por primera vez, para personas con poca soltura digital o recién llegadas a Canarias, y para quien acompaña a otra persona.

## Qué hace

- **Fichas de trámites** con qué es, si te afecta, qué documentos necesitas, qué pasos seguir y dónde hacerlo. Cada ficha muestra la fuente oficial y la fecha de comprobación.
- **Toda Canarias:** las islas y sus 88 municipios, con fichas de empadronamiento en todos.
- **Asistente guiado** en la portada (preguntas con botones), buscador con sinónimos y glosario.
- **Casillas** para marcar documentos y pasos, «Mis trámites» y versión para imprimir. Todo se guarda solo en el navegador de la persona.
- **«Explícame un papel»:** la persona sube una foto o un PDF de una carta, una nómina o un contrato. La web lee el texto dentro del propio navegador (OCR con Tesseract.js), tapa los datos personales y explica el documento. No se envía nada a ningún servidor.
- **Panel de accesibilidad:** ajustes de lectura, modo oscuro, paletas para daltonismo y «Escuchar esta página».
- Se puede **instalar como una app** en el móvil.

## Mi aportación

- Definí qué debía hacer la web, para quién y qué quedaba fuera, y tomé las decisiones de producto. Están documentadas una a una en el repositorio (más de 70).
- Revisé el contenido de las fichas frente a las fuentes oficiales.
- Pruebas, revisión y publicación en Vercel.
- El código, la dirección visual y el logo se hicieron con asistencia de IA (Claude). Yo dirigí el trabajo, elegí entre las propuestas, revisé cada cambio y validé el resultado.

## Decisiones técnicas

- **Astro:** genera páginas HTML estáticas que cargan rápido en móviles sencillos. React solo se usa en las partes interactivas.
- **Sin cuentas ni servidor:** los datos de cada persona se quedan en su dispositivo. Es más privado y no tiene coste de servidor.
- **Sin asistente de IA:** valoré un chat con IA y lo descarté. El asistente de la portada solo elige entre páginas comprobadas, así que no puede inventar respuestas.
- **Contenido validado:** las fichas están en YAML y se comprueban con esquemas Zod al compilar.
- **Calidad automatizada:** 196 tests unitarios (Vitest) y 84 pruebas en navegador (Playwright) con revisión de accesibilidad axe (WCAG 2.2 AA), en móvil y escritorio. Vercel solo publica si todo pasa.

## Límites

- **No es una web oficial**, y lo avisa en todas las páginas. No hace trámites ni decide si alguien tiene derecho a una ayuda: enlaza siempre al organismo.
- Faltan las pruebas con usuarios reales y con lector de pantalla.
- Algunas explicaciones simplificadas se redactaron con IA y están pendientes de revisión humana.
- La información oficial cambia. Por eso hay una revisión periódica y un aviso automático cuando una fuente oficial cambia o deja de funcionar.

## Qué aprendí

- Escribir en lenguaje claro es tan difícil como programar, y hay que probarlo con personas.
- La accesibilidad se puede comprobar con tests, igual que el resto del código.
- Una integración continua (CI) que bloquea la publicación evita subir errores sin darse cuenta.
