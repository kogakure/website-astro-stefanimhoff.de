import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

export const haiku = defineCollection({
	schema: z.object({
		date: z.date(),
		de: z.string(),
		en: z.string(),
		noindex: z.boolean().optional(),
		nofollow: z.boolean().optional(),
	}),
});
