// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served at https://curbox.app/blog/ — alongside the docs at /docs.
export default defineConfig({
  site: 'https://curbox.app',
  base: '/blog',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
