// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` is baked into canonical / OG / sitemap / robots URLs.
// Override with SITE_URL for previews, e.g. SITE_URL=https://staging.example.com bun run build
const PRODUCTION_SITE = 'https://prompt-master.ndjp.net';

// Keyed off GITHUB_ACTIONS, not the generic CI: CI is exported by agent runners,
// Docker images and devcontainers too, where failing the local build is wrong.
if (process.env.GITHUB_ACTIONS && !process.env.SITE_URL) {
  throw new Error('SITE_URL must be set so canonical/sitemap URLs point at the deployed domain.');
}

export default defineConfig({
  integrations: [react(), sitemap()],
  site: process.env.SITE_URL || PRODUCTION_SITE,
  vite: {
    plugins: [tailwindcss()],
  },
});
