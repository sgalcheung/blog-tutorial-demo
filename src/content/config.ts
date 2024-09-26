// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders"; // Not available with legacy API

// 3. Define your collection(s)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
  schema: z.object({
    layout: z.string(),
    title: z.string(),
    author: z.string(),
    description: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    pubDate: z.date(),
    tags: z.array(z.string()),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { blog };
