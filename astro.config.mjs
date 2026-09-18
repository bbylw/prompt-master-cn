// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  site: 'https://prompt-master.example.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
