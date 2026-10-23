// Define qué datos debe tener cada proyecto. Si a un archivo de src/content/proyectos/
// le falta un campo obligatorio, `npm run build` falla y dice cuál es.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const proyectos = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/proyectos' }),
  schema: ({ image }) =>
    z.object({
      titulo: z.string(),
      resumen: z.string(), // Una o dos frases para la tarjeta
      tipo: z.string(), // Por ejemplo: «Proyecto personal» o «Proyecto final del bootcamp»
      fecha: z.string(),
      estado: z.string(),
      orden: z.number(), // 1 = el primero
      destacado: z.boolean().default(false),
      color: z.string().default('#13232b'), // Fondo detrás de la captura en la tarjeta (usa un color oscuro)
      tecnologias: z.array(z.string()),
      // Un enlace vacío (lo puede guardar así el panel /admin) cuenta como «sin enlace»
      demo: z.url().optional().or(z.literal('')),
      demoNota: z.string().optional(), // Por ejemplo: «Requiere registrarse»
      codigo: z.url().optional().or(z.literal('')),
      codigoNota: z.string().optional(), // Si el repositorio es privado
      imagen: image(),
      imagenAlt: z.string(),
    }),
});

export const collections = { proyectos };
