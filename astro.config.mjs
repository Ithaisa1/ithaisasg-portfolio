// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Dirección pública definitiva. Se usa para la URL canónica, el sitemap y las imágenes para redes.
  site: 'https://ithaisasg.twincore.es',
  integrations: [sitemap()],
});
