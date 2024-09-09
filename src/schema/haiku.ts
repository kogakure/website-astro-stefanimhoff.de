// Cspell:words astro
import { defineCollection, z } from 'astro:content';

export const haiku = defineCollection({
	schema: z.object({
		date: z.date(),
		de: z.string(),
		en: z.string(),
		noindex: z.boolean().optional(),
		nofollow: z.boolean().optional(),
	}),
});
