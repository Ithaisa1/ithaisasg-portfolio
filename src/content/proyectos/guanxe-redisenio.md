---
titulo: Guanxe · concepto de rediseño
resumen: Propuesta de rediseño de un marketplace canario real (ficha, listado, buscador, carrito y checkout), con accesibilidad AA y la identidad entera en un solo archivo para poder cambiarla. Sin relación con la empresa; todos los datos son inventados.
tipo: Concepto de rediseño
fecha: Noviembre 2026
estado: Demo pública · concepto sin relación con la empresa
orden: 9
color: "#0a3d62"
tecnologias: [Next.js, React, TypeScript, Tailwind CSS, Radix UI, Framer Motion, Zustand, Playwright, axe, Lighthouse]
demo: https://ithaisasg.twincore.es/demos/guanxe/
demoNota: Concepto con datos inventados; no se puede comprar
imagen: ../../assets/proyectos/guanxe-redisenio.png
imagenAlt: Portada del concepto de rediseño con el buscador grande en el centro, un banner de outlet a la derecha y la fila de categorías debajo.
---

## Qué es

Un ejercicio de producto: cogí un marketplace canario real, medí cómo está hoy y rediseñé sus pantallas clave para ver cuánto se puede mejorar. **No es un trabajo para la empresa ni tiene relación con ella.** No uso su logo, sus fotos ni sus textos: el nombre aparece solo como texto, con la etiqueta «Concepto de rediseño», y los productos, marcas, precios y vendedores son inventados. No se cobra nada.

## Pruébalo

La [demo](/demos/guanxe/) funciona entera en el navegador. Algunas ideas:

1. Escribe «cami» o «zapatillas» en el buscador de la portada: autocompletado con teclado y lector de pantalla.
2. Entra en **Moda** y filtra por marca, precio o isla de origen. Los filtros quedan en la dirección, así que se pueden compartir.
3. Abre un producto, elige talla y añádelo. Pulsa **Finalizar compra** y elige como destino la Península: avisa de aduanas.
4. Cambia destino, idioma, moneda o tema (claro y oscuro) en el selector de la cabecera.

## Lo que quería resolver

- **Accesibilidad:** la web actual falla reglas básicas de WCAG (etiquetas, contraste, estructura de títulos).
- **Envíos entre islas:** el plazo y el coste dependen de la isla de origen y de la de destino, y eso debe verse antes de comprar, no al final.
- **Compra con pocas fricciones:** buscador que ayuda, filtros que se entienden y un checkout en tres pasos con errores claros.

## Decisiones técnicas

- **Una sola fuente de identidad:** nombre, colores, tipografías, radios y textos legales viven en `brand.config.ts`. Cambiarlo basta para convertir el concepto en otra marca; lo comprobé rehaciendo la marca entera y no quedó ningún resto del nombre original.
- **Datos detrás de una interfaz:** el catálogo (67 productos, 10 categorías) sale de JSON, pero los componentes piden los datos a un «repositorio». Para conectar una tienda real (Supabase, PrestaShop…) se cambia ese repositorio, no la web. El README explica cómo.
- **Accesibilidad desde el principio:** buscador con patrón combobox, menú de categorías con teclado, diálogos y filtros con Radix, avisos para lector de pantalla, objetivos táctiles de 44 px y todas las animaciones desactivadas si la persona lo pide en su sistema.
- **Demo sin servidor:** el mismo código se compila a una web estática; el buscador y los favoritos se resuelven en el navegador y las fuentes se sirven desde esta misma web, sin pedir nada a terceros.
- **Pruebas:** más de 450 comprobaciones en navegador real (móvil, escritorio y 320 px) con revisión automática de accesibilidad.

## Medición: antes y ahora

Medí la web actual y el rediseño con Lighthouse (móvil, mediana de 3 pasadas) y axe (WCAG 2.2 AA):

| | Web actual | Rediseño |
| --- | --- | --- |
| Accesibilidad (Lighthouse) | 65–78 | 100 |
| Reglas de axe incumplidas | 5–9 | 0 |
| Rendimiento (Lighthouse) | 30–43 | 92–96 |

**Cuidado con la cifra de rendimiento:** el rediseño se midió en mi ordenador, con ilustraciones SVG y sin scripts de terceros, mientras que la web actual se midió en su servidor real. La brecha real será menor. Las cifras de accesibilidad sí son comparables.

## Límites que conviene saber

- Es un concepto: no hay cuentas, ni pagos, ni pedidos reales, y el idioma solo cambia la navegación, no el catálogo.
- No lo he probado con lectores de pantalla reales, solo con herramientas automáticas y a mano con teclado.
- Las tasas de cambio y los impuestos son de ejemplo.

## Mi aportación

Proyecto personal. Definí el planteamiento, las pantallas, las reglas de accesibilidad y qué medir, y revisé y probé cada parte antes de darla por buena. Para escribir el código y la documentación utilicé asistentes de IA.
