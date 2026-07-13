// @ts-check
import { defineConfig } from 'astro/config';

import keystatic from '@keystatic/astro';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [keystatic()],
  adapter: cloudflare()
});