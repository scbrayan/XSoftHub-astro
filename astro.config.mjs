// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // URL definitiva del sitio
  site: 'https://xsofthub.com',

  i18n: {
      locales: ["es", "en"],
      defaultLocale: "es",
      routing: {
          prefixDefaultLocale: true
      }
  },

  adapter: cloudflare()
});