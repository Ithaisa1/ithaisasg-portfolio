---
titulo: Generador de cursos para Moodle
resumen: App que crea un curso con IA a partir de un tema o de tus propios documentos, te deja revisarlo y lo exporta a 9 formatos, incluido el paquete de copia de seguridad de Moodle. Cada bloque dice de dónde sale.
tipo: Proyecto personal
fecha: Octubre 2026
estado: Demo pública · versión completa en desarrollo
orden: 8
color: "#12263a"
tecnologias: [React, TypeScript, Vite, Node.js, Fastify, PostgreSQL, Zod, TipTap, Gemini API, Vitest, GitHub Actions]
demo: https://ithaisasg.twincore.es/demos/generador-cursos/
demoNota: Demo de solo lectura, con cursos ya generados
codigoNota: Repositorio privado · acceso bajo petición
imagen: ../../assets/proyectos/generador-cursos.png
imagenAlt: Vista de un curso de accesibilidad web generado con la app, con un bloque marcado como «extraído de tus documentos» y su fuente con la cita literal del archivo.
---

## Pruébalo

La [demo](/demos/generador-cursos/) trae dos cursos de ejemplo. **Empieza por el de accesibilidad web**: te lleva paso a paso de unos documentos al curso.

1. Hay tres documentos ya subidos y leídos (una guía en Markdown, una lista en Word y una hoja en PDF).
2. Pulsa **Proponer índice**: la IA decide módulos y lecciones y qué parte de tus documentos usa cada una.
3. **Aprueba el índice**. Hasta ese momento no se escribe nada.
4. Se escribe el contenido: cada bloque indica si es *extraído*, *reformulado* o *complemento de la IA*, y de qué archivo y fragmento sale, con la cita literal cuando la hay.

El otro curso (Git y GitHub) se generó desde cero, sin documentos. En la pestaña **Exportar** puedes descargar los dos en los 9 formatos reales.

Es una demo: el resultado de los pasos es siempre el mismo, no se guarda nada y no se llama a ninguna IA. Los cursos de ejemplo los redactó una IA (Gemini) y no los ha revisado ninguna persona experta; la propia demo lo avisa.

## El problema

Preparar un curso para Moodle lleva horas. Y cuando la IA ayuda, cuesta saber qué parte viene de tus materiales y cuál se la ha inventado el modelo, algo que importa si el curso se va a dar a alumnado.

## Decisiones técnicas

- **Las fuentes las comprueba el código, no la IA.** La IA propone de qué fragmento sale cada bloque; el código verifica que existe, que una cita «literal» aparece de verdad en el fragmento, y degrada a «reformulado» o «complemento de la IA» lo que no se sostiene. En el modo «solo documentos» se descarta lo que no tiene fuente.
- **El índice se aprueba antes de gastar IA en el contenido**, y cada lección recibe solo sus fragmentos.
- **Lectura segura de documentos:** el tipo de archivo se detecta por su contenido, se revisan los ZIP, y cada archivo se lee en un proceso aparte con memoria y tiempo limitados. El texto del documento va a la IA marcado como datos, nunca como instrucciones, y la IA no tiene herramientas.
- **Exportador propio de Moodle** (`.mbz` para 4.5 y 5.3, y XML de preguntas) comprobado restaurándolo en Moodle real, además de SCORM 1.2, web, Markdown, Word, PDF y PowerPoint.
- **Editor con control de versiones:** guardado automático, historial por pieza, restaurar versiones y aviso si el curso cambió en otra pestaña.
- **Cuentas y seguridad:** contraseñas con scrypt, sesiones en servidor, protección CSRF, confirmación de correo y recuperación de contraseña.
- **Demo construida con el mismo código:** un interruptor al compilar sustituye la API por datos guardados, sin mantener dos versiones. Casi 300 pruebas automáticas, además de recorridos comprobados en un navegador real.

## Límites que conviene saber

- No lee PDF escaneados (no hay OCR) y detecta los títulos de un PDF de forma aproximada.
- No he evaluado la calidad pedagógica de lo que genera, y los cursos no los revisa ninguna persona experta.
- La versión completa necesita un servidor con base de datos y clave de IA; la demo no.

## Mi aportación

Proyecto personal. Tuve la idea, decidí qué funciones tenía y cómo debía comportarse, y revisé y probé cada parte antes de darla por buena. Para escribir el código y la documentación utilicé asistentes de IA.
