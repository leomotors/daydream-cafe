import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    updated: z.number().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { blog };
