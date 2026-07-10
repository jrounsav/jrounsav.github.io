// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // TODO: Replace with your actual production URL
  site: 'https://jaredrounsavall.com',
  integrations: [sitemap()],
});
