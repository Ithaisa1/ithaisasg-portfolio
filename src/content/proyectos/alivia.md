---
titulo: Alivia
resumen: Plataforma de apoyo emocional con un directorio de psicólogos y reserva de citas, una comunidad moderada de apoyo entre iguales, un protocolo de crisis, moderación con registro de auditoría y un diario privado cifrado.
tipo: Proyecto personal
fecha: Octubre 2026
estado: Demo pública · MVP completo, aún sin publicar
orden: 9
color: "#12302a"
tecnologias: [React, TypeScript, Vite, Tailwind CSS, Node.js, Express, Prisma, PostgreSQL, Zod, Playwright, GitHub Actions]
demo: https://ithaisasg.twincore.es/demos/alivia/
demoNota: Demo interactiva en tu navegador, con datos ficticios
codigoNota: Repositorio privado · acceso bajo petición
imagen: ../../assets/proyectos/alivia.png
imagenAlt: Directorio de profesionales de Alivia, con el aviso de demostración arriba y los filtros por especialidad, modalidad, idioma y precio.
---

## Pruébalo

La [demo](/demos/alivia/) funciona entera en tu navegador: no hay servidor, no se envía nada y los profesionales, los colegiados y las publicaciones son ficticios. En **Entrar** hay cuatro cuentas de ejemplo.

1. **Persona usuaria.** Busca un profesional, **reserva una cita** y cancélala (el hueco vuelve a quedar libre). Entra en el grupo de *Ansiedad* y publica algo, también de forma **anónima**.
2. **Protocolo de crisis.** Escribe en el grupo, por ejemplo, «ya no puedo más, quiero morirme» (es un texto de prueba). El mensaje **no se publica**: solo lo ves tú, aparece un aviso con el 024 y el 112 y se crea un reporte de prioridad máxima.
3. **Moderación.** Sal y entra con la cuenta de moderación: ese reporte es el primero de la cola. Verás que **la autoría anónima está protegida**: revelarla exige un motivo y queda anotada.
4. **Administración.** Verifica a una profesional y mira el **registro de auditoría** de lo que acabas de hacer.
5. **Tu cuenta.** Prueba el **diario**, descarga tus datos y elimina la cuenta. El botón **Reiniciar demo** lo deja todo como al principio.

Todo se guarda solo en esta pestaña del navegador y se pierde al cerrarla.

## El problema

Una plataforma de salud mental tiene que ser, sobre todo, cuidadosa: que quien escribe en un mal momento no quede expuesto, que una conversación delicada llegue a una persona antes de verse en público y que nadie pueda reescribir lo que pasó después. Quise ver cómo se construye eso de verdad, con el servidor como única fuente de confianza.

## Decisiones técnicas

- **Lo imposible lo impide la base de datos.** La doble reserva de un hueco se bloquea con una actualización atómica, un índice único parcial y una transacción (probado con dos peticiones a la vez); el registro de auditoría es inmutable por triggers.
- **Protocolo de crisis con un detector intercambiable** (hoy por palabras clave, sin IA, así no se envían textos íntimos a terceros). Un riesgo alto no se publica, avisa con calidez y reporta, sin copiar el texto en el motivo. Es cauteloso: prefiere un falso positivo a un falso negativo.
- **Anonimato real:** la API nunca devuelve al autor de un mensaje anónimo; moderación puede suspender por contenido sin saber quién es, y revelarlo exige un motivo que se anota *antes* de mostrarlo.
- **Permisos siempre en el servidor**, con el rol leído de la base de datos en cada petición, sin herencia entre roles: moderación no administra y administración no modera.
- **Sesiones:** token de acceso de 15 minutos solo en memoria y refresco rotativo en una cookie httpOnly, con detección de reutilización.
- **Diario cifrado** (AES-256-GCM, clave versionada y rotable, ligado a cada entrada); no se analiza. Exportar mis datos y borrar la cuenta piden la contraseña de nuevo.
- **Probado contra PostgreSQL real:** más de 100 pruebas de la API y los E2E con accesibilidad, también en PostgreSQL 16 dentro del CI.
- **Demo construida con el mismo código:** un interruptor al compilar sustituye la API por una versión en el navegador que usa el mismo detector de riesgo, los mismos límites y los mismos errores. Tiene sus propias pruebas.

## Límites que conviene saber

- **Es una demostración, no un servicio.** Los textos de crisis, los consentimientos y las normas son un borrador técnico: necesitan revisión clínica y legal antes de usarse con personas reales, y la propia demo lo avisa.
- No hay profesionales reales: harían falta un alta de profesionales y la comprobación manual del número de colegiado.
- El detector de palabras no entiende negaciones ni ironía.
- La versión completa necesita un servidor con PostgreSQL y un servicio de correo; la demo no.

## Mi aportación

Proyecto personal. Tuve la idea, decidí qué funciones tenía y cómo debía comportarse, y revisé y probé cada parte antes de darla por buena. Para escribir el código y la documentación utilicé asistentes de IA.
