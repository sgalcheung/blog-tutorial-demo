import { defineConfig } from 'astro/config';
import node from "@astrojs/node";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  integrations: [mdx()]
});