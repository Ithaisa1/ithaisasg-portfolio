// Textos fijos de la web en español e inglés, y las direcciones de cada idioma.
// El contenido (tus datos y los proyectos) no está aquí: va en src/data/ y src/content/.

export type Lang = 'es' | 'en';

/** Dirección de la portada en cada idioma. */
export const inicio = (lang: Lang) => (lang === 'en' ? '/en/' : '/');

/** Dirección de la ficha de un proyecto en cada idioma. */
export const fichaUrl = (lang: Lang, id: string) => (lang === 'en' ? `/en/projects/${id}/` : `/proyectos/${id}/`);

const textos = {
  es: {
    locale: 'es_ES',
    saltar: 'Saltar al contenido',
    irInicio: 'Ithaisa Sánchez, ir al inicio',
    navPrincipal: 'Principal',
    nav: { proyectos: 'Proyectos', experiencia: 'Experiencia', habilidades: 'Habilidades', contacto: 'Contacto' },
    otroIdioma: { corto: 'EN', largo: 'English version', lang: 'en' },
    descripcion: (nombre: string, titulo: string, ubicacion: string, subtitulo: string) =>
      `${nombre}, ${titulo.toLowerCase()} junior en ${ubicacion}. ${subtitulo}. Proyectos, experiencia y contacto.`,
    verProyectos: 'Ver proyectos',
    contactar: 'Contactar',
    verProyecto: 'Ver el proyecto',
    sec: {
      sobre: 'Sobre mí',
      proyectos: 'Proyectos',
      proyectosTitulo: 'Lo que he construido',
      masProyectos: 'Más proyectos y prácticas en',
      miGithub: 'mi GitHub',
      experiencia: 'Experiencia',
      experienciaTitulo: 'Trayectoria',
      actual: 'actual',
      formacion: 'Formación',
      formacionTitulo: 'Estudios y cursos',
      habilidades: 'Habilidades',
      habilidadesTitulo: 'Con qué trabajo',
      habilidadesNota: 'Agrupadas según dónde las he usado, no con porcentajes.',
      idiomas: 'Idiomas',
      contacto: 'Contacto',
      contactoTitulo: '¿Hablamos?',
      estoy: 'Estoy',
    },
    contacto: {
      email: 'Email',
      telefono: 'Teléfono',
      copiar: 'Copiar',
      copiarEmail: 'Copiar email',
      copiarTelefono: 'Copiar teléfono',
      copiado: 'Copiado',
      copiadoAviso: 'Copiado al portapapeles',
      copiaManual: 'Selecciona y copia',
      abrir: 'Abrir',
      cv: 'Currículum',
      cvDetalle: 'PDF',
      descargar: 'Descargar',
      descargarCv: ' currículum',
    },
    tarjeta: { tecnologias: 'Tecnologías', verFicha: 'Ver ficha del proyecto →' },
    ficha: {
      volver: '← Todos los proyectos',
      verWeb: 'Ver la web',
      verCodigo: 'Ver el código',
      pestanaNueva: ' (se abre en una pestaña nueva)',
      estado: 'Estado',
      fecha: 'Fecha',
      tecnologias: 'Tecnologías',
      siguiente: 'Siguiente proyecto',
      resumen: 'Ficha rápida',
    },
  },
  en: {
    locale: 'en_GB',
    saltar: 'Skip to content',
    irInicio: 'Ithaisa Sánchez, go to home page',
    navPrincipal: 'Main',
    nav: { proyectos: 'Projects', experiencia: 'Experience', habilidades: 'Skills', contacto: 'Contact' },
    otroIdioma: { corto: 'ES', largo: 'Versión en español', lang: 'es' },
    descripcion: (nombre: string, titulo: string, ubicacion: string, subtitulo: string) =>
      `${nombre}, junior ${titulo.toLowerCase()} in ${ubicacion}. ${subtitulo}. Projects, experience and contact.`,
    verProyectos: 'See projects',
    contactar: 'Get in touch',
    verProyecto: 'See the project',
    sec: {
      sobre: 'About me',
      proyectos: 'Projects',
      proyectosTitulo: 'What I have built',
      masProyectos: 'More projects and exercises on',
      miGithub: 'my GitHub',
      experiencia: 'Experience',
      experienciaTitulo: 'Career',
      actual: 'current',
      formacion: 'Education',
      formacionTitulo: 'Studies and courses',
      habilidades: 'Skills',
      habilidadesTitulo: 'What I work with',
      habilidadesNota: 'Grouped by where I have used them, not by percentages.',
      idiomas: 'Languages',
      contacto: 'Contact',
      contactoTitulo: "Let's talk",
      estoy: "I'm",
    },
    contacto: {
      email: 'Email',
      telefono: 'Phone',
      copiar: 'Copy',
      copiarEmail: 'Copy email',
      copiarTelefono: 'Copy phone number',
      copiado: 'Copied',
      copiadoAviso: 'Copied to clipboard',
      copiaManual: 'Select and copy',
      abrir: 'Open',
      cv: 'CV',
      cvDetalle: 'PDF, in Spanish',
      descargar: 'Download',
      descargarCv: ' CV',
    },
    tarjeta: { tecnologias: 'Technologies', verFicha: 'See project details →' },
    ficha: {
      volver: '← All projects',
      verWeb: 'Visit the site',
      verCodigo: 'See the code',
      pestanaNueva: ' (opens in a new tab)',
      estado: 'Status',
      fecha: 'Date',
      tecnologias: 'Technologies',
      siguiente: 'Next project',
      resumen: 'Quick facts',
    },
  },
} as const;

/** Textos de la interfaz en el idioma pedido. */
export const t = (lang: Lang) => textos[lang];
