import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    updated: z.number().optional(),
    image: z.string().optional(),
    // Transform string to Date object
    // pubDate: z
    // 	.string()
    // 	.or(z.date())
    // 	.transform((val) => new Date(val)),
    // updatedDate: z
    // 	.string()
    // 	.optional()
    // 	.transform((str) => (str ? new Date(str) : undefined)),
  }),
});

export const collections = { blog };
