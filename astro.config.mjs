// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://avecoda.ai',
  output: 'static',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
