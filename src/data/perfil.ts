// Datos personales y profesionales del portfolio.
// Los textos están en los archivos .json de esta carpeta y se editan desde el panel /admin.
// Este archivo solo los reúne y les da tipo; no hace falta tocarlo para cambiar contenido.
// Los proyectos NO están aquí: cada uno es un archivo en src/content/proyectos/.

import perfilJson from './perfil.json';
import experienciaJson from './experiencia.json';
import formacionJson from './formacion.json';
import habilidadesJson from './habilidades.json';
import idiomasJson from './idiomas.json';

export type Perfil = {
  nombre: string;
  titulo: string;
  subtitulo: string;
  ubicacion: string;
  disponibilidad: string;
  presentacion: string;
  destacados: { etiqueta: string; texto: string; detalle: string }[];
  sobreMiTitulo: string;
  sobreMi: string[];
  busco: string;
  contacto: {
    email: string;
    telefono: string;
    linkedin: string;
    github: string;
    // Ruta del CV en PDF, por ejemplo '/cv-ithaisa-sanchez.pdf'. Vacío = no se muestra.
    cv: string | null;
  };
};

export type Puesto = {
  fechas: string;
  puesto: string;
  empresa: string;
  tipo?: string;
  actual?: boolean;
  tareas: string[];
};

export type Estudio = { titulo: string; centro: string; fechas: string };

const datos = perfilJson as Perfil;

export const perfil: Perfil = {
  ...datos,
  // El panel puede guardar un campo vacío como texto vacío: se trata igual que «sin CV»
  contacto: { ...datos.contacto, cv: datos.contacto.cv || null },
};

export const experiencia: Puesto[] = experienciaJson.puestos as Puesto[];

export const formacion: { grupo: string; items: Estudio[] }[] = formacionJson.grupos.map((g) => ({
  grupo: g.grupo,
  items: g.items.map((i) => ({ titulo: i.titulo, centro: i.centro, fechas: i.fechas ?? '' })),
}));

// Habilidades agrupadas por el tipo de evidencia que hay detrás, no por un porcentaje.
export const habilidades: { grupo: string; explicacion: string; items: string[] }[] = habilidadesJson.grupos;

export const idiomas: { idioma: string; nivel: string }[] = idiomasJson.idiomas;
