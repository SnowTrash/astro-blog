import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

import vue from '@astrojs/vue';

// Para LaTex
import mdx from '@astrojs/mdx';

// Para TresJS
import { templateCompilerOptions } from '@tresjs/core'; 

// https://astro.build/config
export default defineConfig({
  // base: '.', // Set a path prefix.
  site: 'https://example.com/',
  // Use to generate your sitemap and canonical URLs in your final build.
  trailingSlash: 'always',
  // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'monokai',
    },
  },
<<<<<<< HEAD
  integrations: [
    react(),
    tailwind({}),
    sitemap(),
    robotsTxt(),
    astroImageTools,
    vue({
      ...templateCompilerOptions
    }),
    mdx(),
  ],
=======
  integrations: [react(), tailwind({}), sitemap(), robotsTxt()],
>>>>>>> 59205bc6cf56fd984c7ad1cb9f3e8ed86e0b3884
});
