import { defineCollection, z } from 'astro:content';

const haikuCollection = defineCollection({
	schema: z.object({
		date: z.date(),
		de: z.string(),
		en: z.string(),
	}),
});

export const collections = {
	haiku: haikuCollection,
};
