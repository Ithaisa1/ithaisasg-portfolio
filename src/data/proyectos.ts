// Lista de proyectos en el idioma pedido.
// En inglés se usan los textos de src/content/projects-en/ (si existen) sobre los datos en español.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n';

export type Proyecto = {
  id: string;
  data: CollectionEntry<'proyectos'>['data'];
  /** Entrada cuyo texto (Markdown) se muestra en la ficha */
  entrada: CollectionEntry<'proyectos'> | CollectionEntry<'projectsEn'>;
};

export async function getProyectos(lang: Lang): Promise<Proyecto[]> {
  const es = await getCollection('proyectos');
  const en = lang === 'en' ? await getCollection('projectsEn') : [];
  return es
    .map((p) => {
      const tr = en.find((e) => e.id === p.id);
      return tr
        ? { id: p.id, data: { ...p.data, ...tr.data }, entrada: tr }
        : { id: p.id, data: p.data, entrada: p };
    })
    .sort((a, b) => a.data.orden - b.data.orden);
}
