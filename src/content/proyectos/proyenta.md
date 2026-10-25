---
titulo: Proyenta
resumen: App web para que autónomos y freelance sepan si sus proyectos salen a cuenta. Registra horas, gastos y cobros y calcula cuánto ganas de verdad por cada hora de trabajo.
tipo: Proyecto personal
fecha: Octubre 2026
estado: Publicado · versión Premium de pago en preparación
orden: 2
color: "#123d2b"
tecnologias: [React, TypeScript, Vite, Tailwind CSS, React Router, Supabase, PostgreSQL, React PDF, Vitest, Testing Library, PWA, Cloudflare Turnstile, Vercel]
demo: https://proyenta.vercel.app
demoNota: Se puede probar sin registrarse
codigoNota: Repositorio privado · acceso bajo petición
imagen: ../../assets/proyectos/proyenta.png
imagenAlt: Pantalla de inicio de Proyenta con cuatro tarjetas (te han pagado, te falta por cobrar, has gastado y te queda limpio) y la lista de proyectos con un semáforo que dice «Vas bien» u «Ojo».
---

## Pruébalo

Entra en [proyenta.vercel.app](https://proyenta.vercel.app) y pulsa **Probar sin registrarse**. Se crea una cuenta temporal con proyectos de ejemplo que se borra sola a los 7 días. No pide email ni contraseña.

## El problema

Muchos autónomos ponen precio a sus trabajos «a ojo» y no saben si, después de las horas y los gastos reales, han ganado dinero. Las hojas de cálculo son lentas y las herramientas de contabilidad hablan en un lenguaje que asusta a quien empieza.

## Qué hace

- **Semáforo por proyecto:** verde, ámbar o rojo según las horas, los gastos y lo cobrado, con frases claras como «Te sale a unos 68 € por cada hora de trabajo».
- **Horas, gastos y cobros** de cada trabajo, con un temporizador que corrige el reloj del dispositivo con la hora del servidor.
- **Presupuestos en PDF** con el logo y los datos de quien los emite, generados en el propio navegador.
- **Dos versiones:** una sencilla, sin tecnicismos, para quien empieza, y una completa (Premium) con simulador de precios, informes y guía de precios.
- **Panel de administración:** cifras, gestión de usuarios y del acceso a Premium.
- **IVA e IGIC** (Canarias), siempre separados de los importes.
- Manual de uso integrado y se puede **instalar como una app** en el móvil.

## Mi aportación

- Definí el producto: para quién es, qué hace, cómo se explica cada cálculo y qué queda fuera.
- Tomé las decisiones de producto y de alcance, por ejemplo hacer presupuestos y no facturas, o que la versión completa sea de pago.
- Configuré y publiqué todos los servicios: Supabase, Vercel, el envío de correos con Brevo y la protección anti-bots de Cloudflare.
- Probé cada entrega en la app real, en ordenador y en móvil.
- El código se hizo con asistencia de IA (Claude Code). Yo dirigí el trabajo, revisé cada cambio y validé el resultado.

## Decisiones técnicas

- **Seguridad en la base de datos:** cada tabla tiene políticas RLS (Row Level Security) para que cada persona solo vea sus datos. La administración y el acceso a Premium se comprueban con funciones de PostgreSQL, así que saltarse la interfaz no sirve de nada.
- **Dinero en céntimos enteros** para evitar errores de redondeo.
- **Presupuestos y no facturas:** en España las facturas exigen cumplir VERI*FACTU, así que limité el alcance a presupuestos.
- **Carga bajo demanda:** cada sección y el generador de PDF se descargan solo cuando se usan, para que la portada cargue rápido.
- **Demo sin registro** con cuentas anónimas de Supabase y una tarea programada (pg_cron) que las borra a los 7 días.
- **Calidad:** más de 300 tests (Vitest y Testing Library) y scripts SQL que comprueban las políticas de seguridad.

## Límites

- La versión completa (Premium) todavía no tiene pago: de momento solo la activa la administradora.
- Las páginas legales están en borrador hasta completar los datos del titular.
- Los correos se envían desde una dirección de Gmail y pueden acabar en spam; mejorará con un dominio propio.
- Falta probarla con usuarios reales.

## Qué aprendí

- Diseñar un modelo de datos seguro con RLS y funciones `security definer` en PostgreSQL.
- Separar los cálculos de React para poder probarlos por separado.
- Publicar una app real: variables de entorno, correos transaccionales, protección anti-bots, PWA y despliegue continuo.
- Explicar el mismo dato de dos formas distintas según quién lo lee.
