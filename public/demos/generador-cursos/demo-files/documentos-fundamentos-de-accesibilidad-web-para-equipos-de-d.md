# Fundamentos de Accesibilidad Web para Equipos de Desarrollo

> Parte de este contenido se ha generado con ayuda de inteligencia artificial. Revísalo antes de usarlo.

Curso práctico de nivel principiante enfocado en enseñar a desarrolladores web los principios básicos de accesibilidad, diseño inclusivo y buenas prácticas de programación según las pautas WCAG. Aprenderás a estructurar contenido semántico, gestionar el contraste, asegurar la navegación por teclado y aplicar comprobaciones efectivas antes de publicar.

## Objetivos

- Comprender la importancia de la accesibilidad web y los cuatro principios POUR.
- Implementar una estructura HTML semántica y utilizar adecuadamente el texto alternativo en imágenes.
- Garantizar una correcta navegación por teclado y el diseño de formularios accesibles.
- Aplicar los criterios de contraste de color y las excepciones correspondientes.
- Realizar comprobaciones y auditorías de accesibilidad antes de publicar contenido.

## Módulo 1: Introducción y Principios de la Accesibilidad Web

Conoce por qué importa la accesibilidad y cuáles son los cuatro principios fundamentales y los niveles de conformidad.

### Por qué importa la accesibilidad y el marco normativo (10 min)

#### Introducción a la accesibilidad web

Esta guía resume lo esencial para construir sitios web que puedan usar personas con discapacidad visual, auditiva, motriz o cognitiva. Está pensada para quien empieza y no sustituye a las pautas oficiales.

#### Por qué importa la accesibilidad

Una web accesible permite que una mayor diversidad de usuarios pueda interactuar con ella. Esto incluye a personas ciegas que emplean lectores de pantalla, usuarios con baja visión que necesitan ampliar el contenido, personas que no pueden utilizar el ratón, usuarios sordos y personas con dificultades de atención o lectura.

Asimismo, los beneficios se extienden a cualquier persona en situaciones cotidianas o temporales, como navegar bajo luz solar intensa con el teléfono móvil, tener un brazo inmovilizado o disponer de una conexión a internet lenta.

#### Obligaciones legales y eficiencia en el desarrollo

Además de la inclusión social, la normativa exige la accesibilidad en muchos países para los sitios web de las administraciones públicas y determinados servicios de carácter privado. Desde el punto de vista del desarrollo de software, solucionar los fallos de accesibilidad desde las etapas iniciales del proyecto resulta considerablemente más económico que intentar corregirlos una vez que el contenido ya ha sido publicado.

#### Resumen de la lección

En esta lección hemos visto que la accesibilidad web es fundamental no solo por motivos legales en el ámbito público y privado, sino también para garantizar la usabilidad a personas con diferentes tipos de discapacidad y a cualquier usuario en situaciones temporales adversas. Integrar estos criterios desde el inicio del desarrollo optimiza costes y esfuerzo.

### Los cuatro principios POUR y los niveles de conformidad (10 min)

#### Introducción a los principios POUR

Las Pautas de Accesibilidad para el Contenido Web (WCAG) se organizan en cuatro principios fundamentales conocidos por sus siglas en inglés como POUR. Estos principios garantizan que cualquier desarrollo web sea verdaderamente accesible para todos los usuarios.

#### Los cuatro principios de la accesibilidad

Para que una página cumpla con la normativa, debe basarse en las siguientes características:

- **Perceptible:** la información y los componentes se pueden percibir. Por ejemplo, las imágenes tienen texto alternativo y los vídeos tienen subtítulos.
- **Operable:** se puede manejar con distintos dispositivos. Todo funciona con teclado y no hay límites de tiempo injustos.
- **Comprensible:** el contenido y el funcionamiento se entienden. Los formularios explican sus errores y la navegación es coherente.
- **Robusto:** el contenido funciona con tecnologías actuales y futuras, incluidos los productos de apoyo. Para eso se usa HTML válido y semántico.

#### Niveles de conformidad WCAG

Además de los principios POUR, WCAG define tres niveles de conformidad: A, AA y AAA. El nivel A representa el mínimo indispensable, mientras que el nivel AA es el objetivo habitual y el que suele exigir la ley. Por su parte, el nivel AAA es el más estricto y exigente, por lo que no siempre es posible cumplirlo en todo el contenido. Salvo indicación contraria, los proyectos de desarrollo deben apuntar al nivel AA.

#### Resumen de la lección

Conocer los principios POUR (Perceptible, Operable, Comprensible y Robusto) y los niveles de conformidad (A, AA y AAA) es esencial para cualquier equipo de desarrollo que busque crear experiencias digitales accesibles y ajustadas a los estándares legales actuales.

### Actividades

#### Identificación de los Principios POUR en un sitio web

Revisa un sitio web de tu elección y redacta un breve análisis (de 3 a 5 líneas) identificando cómo se aplican los principios de **Perceptible**, **Operable**, **Comprensible** y **Robusto** en al menos dos de sus componentes principales.

### Evaluación: Comprueba lo aprendido: Introducción y Principios de la Accesibilidad Web

Para aprobar: 60 %

**Pregunta 1** (1 punto)

¿Cuál de los niveles de conformidad de las WCAG es considerado el objetivo habitual y el que suele exigir la ley?

- [ ] Nivel A
- [x] Nivel AA
- [ ] Nivel AAA

> **Explicación.** El nivel AA es el objetivo habitual y el exigido por la ley, mientras que el nivel A es el mínimo y el AAA es el más estricto.

**Pregunta 2** (1 punto)

Solucionar los fallos de accesibilidad desde las etapas iniciales de un proyecto de desarrollo resulta considerablemente más económico que corregirlos una vez publicado el contenido.

- [x] Verdadero
- [ ] Falso

> **Explicación.** Integrar estos criterios desde el inicio del proyecto optimiza costes y esfuerzo en comparación con corregirlos al final.

**Pregunta 3** (2 puntos)

Relaciona cada uno de los cuatro principios de las WCAG (POUR) con su característica correspondiente descrita en el contenido:

| Elementos | Opciones |
| --- | --- |
| Perceptible | La información y los componentes se pueden percibir (ej. imágenes con texto alternativo) |
| Operable | Se puede manejar con distintos dispositivos y funciona con teclado |
| Comprensible | El contenido y el funcionamiento se entienden (formularios explican errores) |
| Robusto | Funciona con tecnologías actuales y futuras usando HTML válido y semántico |

> **Explicación.** Los principios POUR se corresponden directamente con la percepción de la información, el manejo por distintos dispositivos, la comprensión del contenido y la robustez tecnológica.

**Pregunta 4** (1 punto)

¿Qué siglas en inglés representan los cuatro principios fundamentales de las Pautas de Accesibilidad para el Contenido Web (WCAG)?

Respuestas aceptadas: `POUR`

> **Explicación.** Las siglas son POUR, que corresponden a Perceptible, Operable, Comprensible y Robusto.

## Módulo 2: Desarrollo Front-end Inclusivo y Semántica

Aprende a usar elementos HTML correctos, añadir textos alternativos, diseñar formularios accesibles y gestionar el contraste.

### Estructura semántica, elementos HTML y ARIA (15 min)

#### Introducción a la Estructura y Semántica

En esta lección del curso **Fundamentos de Accesibilidad Web para Equipos de Desarrollo**, exploraremos cómo utilizar una estructura semántica adecuada y el uso correcto de elementos HTML y ARIA. Este contenido forma parte del material formativo general.

#### Uso Correcto de los Elementos HTML

Debemos usar los elementos HTML por lo que son. Un botón debe ser un `<button>`, un enlace debe ser un `<a>` y una lista debe ser una lista. Así el navegador y los lectores de pantalla ya conocen su comportamiento.

Cada página tiene un único `<h1>`, y los títulos siguen una jerarquía sin saltos (de `<h2>` a `<h3>`, no de `<h2>` a `<h4>`). Las zonas principales se marcan con `<header>`, `<nav>`, `<main>` y `<footer>`, que los lectores de pantalla usan para saltar entre secciones.

#### Texto Alternativo en Imágenes

Toda imagen con significado necesita un atributo `alt` que explique su función, no que la describa pixel a pixel. Una imagen puramente decorativa lleva `alt=""` para que los lectores de pantalla la ignoren. Una imagen que es un enlace debe describir el destino del enlace. Si una imagen contiene texto, ese texto debe repetirse en el `alt`.

#### ARIA: La Última Opción

ARIA añade información a elementos que el HTML no puede describir por sí solo. La primera regla de ARIA es no usarla si un elemento HTML nativo ya hace el trabajo. Un `<div role="button">` obliga a programar a mano el teclado y el foco, mientras que un `<button>` lo trae todo de serie. Un uso incorrecto de ARIA empeora la accesibilidad.

#### Resumen de la Lección

En resumen, utilizar elementos HTML nativos y una jerarquía de títulos correcta facilita enormemente la labor de los lectores de pantalla. Las imágenes deben contar siempre con el atributo `alt` adecuado según su función, y los atributos ARIA deben reservarse estrictamente para cuando el HTML nativo no sea suficiente.

### Navegación por teclado, formularios y contraste de color (15 min)

#### Introducción a la Navegación y el Contraste

En esta lección del módulo de desarrollo front-end inclusivo, profundizaremos en tres pilares fundamentales para la usabilidad y accesibilidad: la navegación por teclado, el diseño de formularios accesibles y los criterios de contraste de color. Todo lo que se puede hacer con el ratón debe poder realizarse también mediante el teclado.

#### Navegación por Teclado

Para garantizar una correcta experiencia de teclado, es necesario tener en cuenta tres aspectos clave:

- **Orden lógico:** el orden de tabulación debe seguir el orden visual de la página.
- **Foco visible:** el elemento enfocado siempre debe verse. No quites el contorno (`outline`) sin ofrecer una alternativa clara.
- **Sin trampas:** el foco nunca debe quedar atrapado en un componente del que no se pueda salir con el teclado.

Además, un enlace de «Saltar al contenido» al principio de la página permite a quien navega con teclado evitar el menú en cada página.

#### Formularios Accesibles

Cada campo de un formulario necesita una etiqueta visible asociada mediante `<label for>` o envolviéndolo. El texto de ayuda debe asociarse con `aria-describedby`. Los errores tienen que indicar qué ha fallado y cómo corregirlo, anunciándose a los lectores de pantalla con `role="alert"`. Recuerda que nunca se debe usar el atributo `placeholder` como sustituto de la etiqueta, ya que desaparece al escribir y suele tener poco contraste.

#### Criterios de Contraste de Color

La relación de contraste compara la luminosidad relativa del texto con la del fondo, variando desde 1:1 hasta 21:1. Según los valores mínimos de WCAG 2.2 nivel AA, el texto normal exige al menos 4,5:1, mientras que el texto grande y los componentes de interfaz necesitan 3:1. Asimismo, nunca se debe usar solo el color para transmitir información; por ejemplo, un campo con error requiere un texto o icono explicativo adicional.

#### Resumen y Verificación

Para asegurar una correcta accesibilidad antes de publicar, verifica que la navegación por teclado sea fluida sin trampas de foco, los formularios tengan etiquetas e instrucciones claras, y los colores cumplan con las ratios mínimas de contraste. Utiliza herramientas de desarrollo y comprobadores automáticos para detectar fallos comunes como textos grises claros o modo oscuro mal contrastado.

### Actividades

#### Auditoría de un Componente de Formulario e Interfaz

Revisa el siguiente fragmento de código HTML propuesto por el equipo de desarrollo para un formulario de inicio de sesión e identifica qué elementos incumplen las pautas de accesibilidad estudiadas en el módulo:

```
<div role="button" onclick="login()">Iniciar sesión</div>
<input type="text" placeholder="Introduce tu usuario">
<span style="color: red;">Campo obligatorio</span>
```

Redacta una propuesta de mejora basada en HTML nativo semántico, asegurando el uso correcto de elementos interactivos, etiquetas de formulario y atributos de accesibilidad necesarios.

### Evaluación: Comprueba lo aprendido: Desarrollo Front-end Inclusivo y Semántica

Para aprobar: 60 %

**Pregunta 1** (1 punto)

¿Cuál es la primera regla de ARIA según los contenidos del curso?

- [ ] Utilizar siempre roles ARIA en elementos dinámicos para mejorar el lector de pantalla.
- [x] No usar ARIA si un elemento HTML nativo ya hace el trabajo.
- [ ] Sustituir todas las etiquetas &lt;button&gt; por divs con rol de botón.
- [ ] Emplear atributos ARIA únicamente en las imágenes decorativas.

> **Explicación.** La primera regla de ARIA es no usarla si un elemento HTML nativo ya hace el trabajo, ya que el uso incorrecto empeora la accesibilidad.

**Pregunta 2** (1 punto)

El atributo `placeholder` puede utilizarse como sustituto permanente de la etiqueta visible de un campo de formulario, ya que permanece visible en todo momento.

- [ ] Verdadero
- [x] Falso

> **Explicación.** El texto del placeholder desaparece al escribir en el campo y suele tener poco contraste, por lo que nunca debe usarse como sustituto de la etiqueta.

**Pregunta 3** (1 punto)

¿Qué valor debe tener el atributo `alt` en una imagen puramente decorativa para que los lectores de pantalla la ignoren?

Respuestas aceptadas: `""`, `alt=""`

> **Explicación.** Una imagen puramente decorativa lleva el atributo alt vacío (alt="") para que los lectores de pantalla la ignoren.

**Pregunta 4** (2 puntos)

Relaciona cada aspecto de la navegación por teclado o contraste con su definición o requisito correspondiente según las pautas de accesibilidad:

| Elementos | Opciones |
| --- | --- |
| Orden lógico | El orden de tabulación debe seguir el orden visual de la página. |
| Foco visible | El elemento enfocado siempre debe verse y no quitar el contorno sin alternativa. |
| Texto normal (WCAG 2.2 AA) | Exige al menos una relación de contraste de 4,5:1. |
| Anuncio de errores en formularios | Deben indicar qué falló y anunciarse con role="alert". |

> **Explicación.** Cada concepto se asocia correctamente con su pauta técnica de acuerdo con los contenidos de navegación y contraste del curso.

## Módulo 3: Comprobación y Verificación Final

Descubre cómo utilizar herramientas automáticas y listas de comprobación para asegurar que tu web sea accesible antes de publicarla.

### Herramientas de comprobación y pruebas automáticas (10 min)

#### Introducción a la comprobación de accesibilidad

En esta lección del curso **Fundamentos de Accesibilidad Web para Equipos de Desarrollo**, orientada al nivel principiante, abordaremos las herramientas de comprobación y pruebas automáticas dentro del módulo de Comprobación y Verificación Final.

#### Herramientas automáticas y su alcance

Las herramientas automáticas, como axe o Lighthouse, detectan solo una parte de los problemas (se suele citar menos de la mitad). Complétalas con pruebas manuales: recorre la página con el teclado, amplía el texto al 200 %, comprueba el contraste y prueba con un lector de pantalla como NVDA, VoiceOver o Orca. Siempre que puedas, prueba con personas usuarias reales.

#### Pruebas finales y lista de comprobación

Antes de publicar contenido, es fundamental realizar una serie de pruebas finales esenciales para garantizar la accesibilidad web:

- Se ha pasado una herramienta automática (axe o Lighthouse) y no hay errores pendientes.
- Se ha recorrido la página entera con el teclado.
- Se ha probado con al menos un lector de pantalla.

#### Resumen de la lección

Las pruebas automáticas con herramientas como axe o Lighthouse son un excelente punto de partida, pero nunca suficientes por sí solas. Deben combinarse siempre con la validación manual mediante teclado, lectores de pantalla y pruebas con personas usuarias reales para asegurar un producto web verdaderamente accesible.

### Lista de comprobación antes de publicar (10 min)

#### Lista de comprobación antes de publicar

En esta lección final del módulo de comprobación y verificación, revisaremos la lista de comprobación de accesibilidad antes de publicar. Repasa estos puntos antes de publicar cualquier página nueva o un cambio importante, marcando solo lo que hayas comprobado de verdad.

#### Contenido y Diseño

En el apartado de contenido, debemos verificar que cada imagen informativa tenga un texto alternativo que explique su función y que las imágenes decorativas tengan el atributo alt vacío. Además, los vídeos con voz necesitan subtítulos, los enlaces deben entenderse fuera de contexto y el idioma de la página tiene que estar indicado en la etiqueta html. En cuanto al diseño, el texto normal requiere un contraste de al menos 4,5 a 1, el texto grande y los bordes de los campos al menos 3 a 1, y la información nunca debe depender solo del color. Asimismo, la página debe poder ampliarse al 200 % y los elementos táctiles en dispositivos móviles han de medir al menos 24 por 24 píxeles.

#### Teclado, Foco y Formularios

Es fundamental comprobar que todo se puede utilizar únicamente con el teclado, manteniendo un orden de tabulación lógico y asegurando que el foco sea siempre visible sin que ningún componente lo atrape. También se debe incluir un enlace para saltar al contenido principal. Respecto a los formularios, cada campo requiere una etiqueta visible asociada, prohibiendo el uso del placeholder en sustitución de la etiqueta. Los mensajes de error deben explicar claramente el fallo y cómo corregirlo, asegurando que dichos errores se anuncien a los lectores de pantalla.

#### Resumen final

El uso sistemático de esta lista de verificación garantiza que tanto los aspectos de contenido, diseño, navegación por teclado como de formularios cumplan con los requisitos básicos de accesibilidad antes de poner cualquier desarrollo a disposición de los usuarios.

### Actividades

#### Auditoría preliminar y lista de comprobación final

Imagina que estás a punto de publicar una nueva página web corporativa. Utiliza los conocimientos de las lecciones para realizar una revisión guiada:

- **Herramientas automáticas:** Pasa una herramienta como axe o Lighthouse y anota cuántos errores detecta. Recuerda que estas herramientas no cubren la totalidad de los problemas \[L1B2\].
- **Prueba manual de teclado:** Navega por toda la página empleando exclusivamente el teclado, verifica que el orden de tabulación sea lógico y que el foco sea visible en todo momento \[L1B3, L2B3\].
- **Verificación de contenidos y diseño:** Comprueba que las imágenes informativas tengan texto alternativo, que el texto normal cumpla con el contraste mínimo de 4,5 a 1 y que el idioma de la página esté correctamente indicado \[L2B2\].

### Evaluación: Comprueba lo aprendido: Comprobación y Verificación Final

Para aprobar: 60 %

**Pregunta 1** (1 punto)

Según el contenido del módulo, ¿qué porcentaje o proporción de los problemas de accesibilidad detectan habitualmente las herramientas automáticas como axe o Lighthouse?

- [ ] Detectan el 100% de los errores de accesibilidad.
- [x] Detectan solo una parte, habitualmente menos de la mitad.
- [ ] Detectan exactamente el 80% de los problemas de código.

> **Explicación.** Las herramientas automáticas solo detectan una parte de los problemas, concretamente se suele citar que detectan menos de la mitad, por lo que deben complementarse con pruebas manuales \[L1B2\].

**Pregunta 2** (1 punto)

Las pruebas automáticas con herramientas como axe o Lighthouse son suficientes por sí solas para garantizar un producto web verdaderamente accesible.

- [ ] Verdadero
- [x] Falso

> **Explicación.** Falso. Aunque son un excelente punto de partida, nunca son suficientes por sí solas y deben combinarse con validación manual y pruebas con personas usuarias reales \[L1B4\].

**Pregunta 3** (2 puntos)

¿Qué requisitos de contraste de color exige la lista de comprobación para el texto normal y para el texto grande o bordes de campos?

- [ ] Texto normal 3 a 1; texto grande 1,5 a 1.
- [x] Texto normal al menos 4,5 a 1; texto grande y bordes de campos al menos 3 a 1.
- [ ] Ambos tipos de texto deben tener un contraste de 7 a 1 obligatoriamente.

> **Explicación.** El texto normal requiere un contraste de al menos 4,5 a 1, mientras que el texto grande y los bordes de los campos exigen al menos 3 a 1 \[L2B2\].

**Pregunta 4** (1 punto)

¿Cómo debe estar el atributo `alt` en las imágenes que se consideran puramente decorativas según el bloque de contenido y diseño?

Respuestas aceptadas: `vacío`, `vacio`

> **Explicación.** Las imágenes decorativas deben tener el atributo alt vacío \[L2B2\].

**Pregunta 5** (3 puntos)

Relaciona cada elemento de la lista de comprobación con su ámbito o requisito correspondiente según las lecciones finales:

| Elementos | Opciones |
| --- | --- |
| Idioma de la página | Debe estar indicado en la etiqueta html |
| Uso de placeholder en formularios | Prohibido en sustitución de la etiqueta visible asociada |
| Ampliación de texto | La página debe poder ampliarse al 200 % |

> **Explicación.** Cada elemento corresponde a su especificación exacta descrita en las pautas de contenido, diseño y formularios del módulo \[L2B2, L2B3\].
