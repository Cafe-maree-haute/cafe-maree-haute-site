import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

// Blog posts: one Markdown file per language in src/content/blog.
const blog = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: './src/content/blog',
    // Keep the file name (without .md) as the ID so English and French
    // versions can be paired, e.g. "welcome-en" and "welcome-fr".
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'fr']),
    description: z.string().default(''),
    image: z.string().nullish(),
    draft: z.boolean().default(false),
  }),
});

// Menu: edited in src/data/menu.yml (also editable in Pages CMS).
const price = z.union([z.string(), z.number()]).transform((v) => String(v));
const menu = defineCollection({
  loader: file('src/data/menu.yml'),
  schema: z.object({
    order: z.number(),
    title_en: z.string(),
    title_fr: z.string(),
    note_en: z.string().nullish(),
    note_fr: z.string().nullish(),
    items: z
      .array(
        z.object({
          name_en: z.string(),
          name_fr: z.string(),
          description_en: z.string().nullish(),
          description_fr: z.string().nullish(),
          price: price,
        }),
      )
      .default([]),
  }),
});

export const collections = { blog, menu };
