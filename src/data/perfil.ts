// Datos personales y profesionales del portfolio.
// Los textos están en los archivos .json de esta carpeta (en/ para el inglés) y se editan desde el panel /admin.
// Este archivo solo los reúne y les da tipo; no hace falta tocarlo para cambiar contenido.
// Los proyectos NO están aquí: cada uno es un archivo en src/content/proyectos/.

import perfilJson from './perfil.json';
import experienciaJson from './experiencia.json';
import formacionJson from './formacion.json';
import habilidadesJson from './habilidades.json';
import idiomasJson from './idiomas.json';
// Versión en inglés: los mismos archivos dentro de en/
import perfilEn from './en/perfil.json';
import experienciaEn from './en/experiencia.json';
import formacionEn from './en/formacion.json';
import habilidadesEn from './en/habilidades.json';
import idiomasEn from './en/idiomas.json';

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

type Datos = {
  perfil: Perfil;
  experiencia: Puesto[];
  formacion: { grupo: string; items: Estudio[] }[];
  habilidades: { grupo: string; explicacion: string; items: string[] }[];
  idiomas: { idioma: string; nivel: string }[];
};

// Une los archivos .json de un idioma y les da tipo
function preparar(p: unknown, e: unknown, f: unknown, h: unknown, i: unknown): Datos {
  const datos = p as Perfil;
  const formacionJson = f as { grupos: { grupo: string; items: { titulo: string; centro: string; fechas?: string }[] }[] };
  return {
    // El panel puede guardar un campo vacío como texto vacío: se trata igual que «sin CV»
    perfil: { ...datos, contacto: { ...datos.contacto, cv: datos.contacto.cv || null } },
    experiencia: (e as { puestos: Puesto[] }).puestos,
    formacion: formacionJson.grupos.map((g) => ({
      grupo: g.grupo,
      items: g.items.map((x) => ({ titulo: x.titulo, centro: x.centro, fechas: x.fechas ?? '' })),
    })),
    // Habilidades agrupadas por el tipo de evidencia que hay detrás, no por un porcentaje.
    habilidades: (h as { grupos: Datos['habilidades'] }).grupos,
    idiomas: (i as { idiomas: Datos['idiomas'] }).idiomas,
  };
}

const es = preparar(perfilJson, experienciaJson, formacionJson, habilidadesJson, idiomasJson);
const en = preparar(perfilEn, experienciaEn, formacionEn, habilidadesEn, idiomasEn);

/** Todos los datos personales en el idioma pedido. */
export function getDatos(lang: 'es' | 'en'): Datos {
  return lang === 'en' ? en : es;
}

// Atajos en español (los usan el pie y la cabecera)
export const { perfil, experiencia, formacion, habilidades, idiomas } = es;
