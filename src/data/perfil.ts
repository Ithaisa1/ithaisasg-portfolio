// Datos personales y profesionales del portfolio.
// Para cambiar un texto, una fecha o una herramienta, edita este archivo: la web se actualiza sola.
// Los proyectos NO están aquí: cada uno es un archivo en src/content/proyectos/.

export const perfil = {
  nombre: 'Ithaisa Sánchez González',
  titulo: 'Desarrolladora Frontend',
  subtitulo: 'Interfaces web, UX/UI y experiencias digitales',
  ubicacion: 'Gran Canaria',
  disponibilidad: 'Disponible desde el 7 de enero de 2027',
  presentacion:
    'Desarrolladora web junior con formación técnica (DAW y bootcamp full stack) y experiencia en empresas del sector. Construyo interfaces con HTML, CSS, JavaScript, Astro y React, cuidando que sean accesibles y fáciles de usar.',
  // Tres datos que se ven nada más entrar, debajo de la presentación
  destacados: [
    { etiqueta: 'Ahora', texto: 'Desarrolladora web en Qraneos', detalle: 'En equipo con Git, GitLab y Jira' },
    { etiqueta: 'Formación', texto: 'Técnico Superior en DAW', detalle: 'Y bootcamp Full Stack + IA (Ironhack)' },
    { etiqueta: 'Proyectos', texto: '3 webs publicadas', detalle: 'Astro, React y Node.js, en Vercel' },
  ],
  sobreMiTitulo: 'Formación y experiencia en desarrollo web',
  sobreMi: [
    'Mi primer trabajo con la web fue en 2019, manteniendo páginas y contenidos en Wonka Producciones, el mismo año en que obtuve el certificado de Desarrollo de Aplicaciones con Tecnologías Web. Después me formé como Técnico en Sistemas Microinformáticos y Redes y como Técnico Superior en Desarrollo de Aplicaciones Web.',
    'He trabajado con WordPress, Divi, Elementor, SEO y contenidos en Web Las Palmas y Etnonautas, y en 2026 completé el bootcamp Full Stack + IA de Ironhack con la FULP. Ahora trabajo en Qraneos con un contrato de formación en alternancia: katas, web scraping con TypeScript y documentación técnica, en equipo con Git, GitLab y Jira.',
    'También tengo formación y experiencia en diseño gráfico, que me ayuda a cuidar la parte visual de las interfaces.',
  ],
  // Texto del bloque de contacto
  busco:
    'Tengo formación técnica y experiencia en empresas de desarrollo web, y busco un puesto como desarrolladora frontend junior en un equipo donde el diseño y la experiencia de usuario importen.',
  contacto: {
    email: 'ithaisasanchezgonzalez@gmail.com',
    telefono: '+34 672 075 340',
    linkedin: 'https://www.linkedin.com/in/ithaisa-sg/',
    github: 'https://github.com/Ithaisa1',
    // Cuando tengas el CV nuevo, guárdalo en public/ y escribe aquí su ruta, por ejemplo '/cv-ithaisa-sanchez.pdf'.
    cv: null as string | null,
  },
};

export type Puesto = {
  fechas: string;
  puesto: string;
  empresa: string;
  tipo?: string;
  actual?: boolean;
  tareas: string[];
};

export const experiencia: Puesto[] = [
  {
    fechas: 'jul 2026 – ene 2027',
    puesto: 'Desarrolladora web',
    empresa: 'Qraneos',
    tipo: 'Contrato de formación en alternancia',
    actual: true,
    tareas: [
      'Katas de programación en JavaScript.',
      'Web scraping con TypeScript.',
      'Documentación técnica y scripts de apoyo en un proyecto en equipo.',
      'Trabajo en equipo con Git y GitLab (ramas, commits y merge requests) y seguimiento de tareas en Jira.',
    ],
  },
  {
    fechas: 'abr – sep 2025',
    puesto: 'Desarrolladora de contenido web y SEO',
    empresa: 'Etnonautas',
    tipo: 'Beca del programa Diginnova',
    tareas: [
      'Mantenimiento de webs en WordPress con Divi y Elementor, y gestión de contenidos traducidos.',
      'Creación de contenidos optimizados y SEO on-page con SEMrush.',
      'Gestión de perfiles de Google Business Profile.',
      'Proyectos del Kit Digital: gestión documental y control de cumplimiento.',
      'Apoyo en publicidad digital y estrategias de visibilidad online.',
    ],
  },
  {
    fechas: 'mar – may 2024',
    puesto: 'Desarrolladora web',
    empresa: 'Web Las Palmas',
    tipo: 'Prácticas formativas',
    tareas: [
      'Mantenimiento web y creación de contenidos optimizados para SEO.',
      'Apoyo en proyectos del Kit Digital.',
    ],
  },
  {
    fechas: '2022',
    puesto: 'Diseñadora gráfica',
    empresa: 'Gráficas Abemak',
    tareas: [
      'Carteles, logotipos y contenido digital.',
      'Preparación de piezas para impresión con GIMP y CorelDRAW.',
    ],
  },
  {
    fechas: '2019',
    puesto: 'Diseñadora de páginas web',
    empresa: 'Wonka Producciones',
    tareas: ['Mantenimiento de páginas web y edición de contenidos digitales.'],
  },
];

export type Estudio = { titulo: string; centro: string; fechas: string };

export const formacion: { grupo: string; items: Estudio[] }[] = [
  {
    grupo: 'Titulaciones',
    items: [
      {
        titulo: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
        centro: 'IES Ana Luisa Benítez',
        fechas: '2022 – 2024',
      },
      {
        titulo: 'Técnico en Sistemas Microinformáticos y Redes (SMR)',
        centro: 'Ciclo de grado medio',
        fechas: '2019 – 2021',
      },
    ],
  },
  {
    grupo: 'Programas y certificados',
    items: [
      {
        titulo: 'Bootcamp Desarrollo Web Full Stack + IA',
        centro: 'Ironhack · Escuela de Programadores de la FULP',
        fechas: '2026',
      },
      {
        titulo: 'Programa Diginnova (180 h)',
        centro: 'FULP · ULPGC',
        fechas: 'oct 2024 – abr 2025',
      },
      { titulo: 'Diseño de Productos Gráficos', centro: 'Certificado de profesionalidad, nivel 3', fechas: '2023' },
      {
        titulo: 'Desarrollo de Aplicaciones con Tecnologías Web',
        centro: 'Certificado de profesionalidad, nivel 3',
        fechas: '2019',
      },
    ],
  },
  {
    grupo: 'Cursos',
    items: [
      { titulo: 'Programación en Python (100 h)', centro: 'CICCA', fechas: '' },
      { titulo: 'Symfony, framework de PHP (150 h)', centro: 'CIP', fechas: '' },
    ],
  },
];

// Habilidades agrupadas por el tipo de evidencia que hay detrás, no por un porcentaje.
export const habilidades: { grupo: string; explicacion: string; items: string[] }[] = [
  {
    grupo: 'En mis proyectos',
    explicacion: 'Lo he usado para construir y publicar los proyectos de esta web.',
    items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Astro', 'React', 'Tailwind CSS', 'Git', 'GitHub', 'Vercel'],
  },
  {
    grupo: 'En el trabajo, en equipo',
    explicacion: 'Lo he usado en empresas, con compañeros y tareas reales.',
    items: ['Git', 'GitLab', 'Jira', 'WordPress', 'Divi', 'Elementor', 'Trello', 'Toggl', 'Slack'],
  },
  {
    grupo: 'Formación práctica',
    explicacion: 'Lo he practicado en el bootcamp y en cursos.',
    items: [
      'Node.js',
      'Express',
      'PostgreSQL',
      'Python',
      'FastAPI',
      'Testing (Jest, Vitest, Playwright)',
      'LangChain y RAG básico',
      'n8n',
      'Symfony',
    ],
  },
  {
    grupo: 'Diseño y SEO',
    explicacion: 'Mi experiencia anterior, que hoy aplico al diseño de interfaces.',
    items: ['Photoshop', 'GIMP', 'CorelDRAW', 'Canva', 'SEMrush', 'SEO on-page', 'Google Business Profile'],
  },
];

export const idiomas = [
  { idioma: 'Español', nivel: 'Nativo' },
  { idioma: 'Inglés', nivel: 'A2' },
];
