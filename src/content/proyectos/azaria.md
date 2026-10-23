---
titulo: AzarIA
resumen: App para comprobar boletos de lotería escaneando su código QR, guardarlos y ver al momento si han tenido premio, con los resultados reales de cada sorteo.
tipo: Proyecto personal
fecha: Octubre 2026
estado: Demo pública · app completa de uso personal
orden: 3
color: "#0b1530"
tecnologias: [React, TypeScript, Vite, React Router, Vitest, Testing Library, PWA, GitHub Actions]
demo: https://ithaisasg.twincore.es/demos/azaria/
demoNota: Versión demo
codigoNota: Repositorio privado · acceso bajo petición
imagen: ../../assets/proyectos/azaria.png
imagenAlt: Portada de la demo de AzarIA con los botones «Comprobar un boleto» y «Mis boletos» y las tarjetas de Bonoloto, La Primitiva, Euromillones y EuroDreams.
---

## Pruébalo

La [demo](/demos/azaria/) incluye tres partes de la app:

- **Comprobar:** escanea el QR del resguardo con la cámara, sube una foto o escribe los números, y elige el sorteo.
- **Mis boletos:** guarda lo que juegas y comprueba si ha tenido premio, con un balance de gastos y premios.
- **Juegos:** últimos resultados y reglas de Bonoloto, La Primitiva, Euromillones, EuroDreams y Lotería de Navidad, incluido el comprobador de décimos.

Los boletos se guardan solo en tu navegador: no hay registro ni se envía nada a ningún servidor. La demo usa los resultados reales hasta la fecha en que se publicó; la app completa los actualiza cada día.

## El problema

Comprobar a mano un boleto es lento y es fácil equivocarse con los números o con la fecha del sorteo. Y si juegas a menudo, nadie te dice cuánto llevas gastado y cuánto has ganado.

## Decisiones técnicas

- **Lectura del QR en el navegador** con jsQR, desde la cámara o una foto. Loterías y Apuestas del Estado no publica el formato de sus códigos, así que la app lo interpreta y pide confirmar los números leídos.
- **Datos reales que se actualizan solos:** una tarea de GitHub Actions descarga cada día los resultados nuevos, los valida y vuelve a publicar la app.
- **Sin servidor ni base de datos:** los históricos van empaquetados en la app y los boletos se guardan en el almacenamiento del navegador.
- **Lógica separada de la interfaz:** las reglas de cada juego y la comprobación de premios están en TypeScript puro, con 136 pruebas automáticas (Vitest y Testing Library).
- **Demo construida con el mismo código:** un interruptor al compilar oculta las partes que no se enseñan aquí, sin mantener dos versiones.

## Mi aportación

Proyecto personal. Tuve la idea, decidí qué funciones tenía y cómo debía verse, y revisé y probé cada parte antes de publicarla. Para escribir el código y la documentación utilicé asistentes de IA.

## Juego responsable

AzarIA no vende apuestas ni predice resultados: todas las combinaciones tienen la misma probabilidad. Es una herramienta para mayores de 18 años.
