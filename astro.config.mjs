// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Set SITE_URL at build time to bake the real domain into canonical/OG/sitemap,
// e.g. SITE_URL=https://prompt-master.example.com bun run build
export default defineConfig({
  integrations: [react(), sitemap()],
  site: process.env.SITE_URL || 'https://prompt-master.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
