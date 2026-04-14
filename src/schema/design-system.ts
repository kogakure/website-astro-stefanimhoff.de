import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

export const designSystem = defineCollection({
	schema: z.object({
		title: z.string(),
		order: z.number(),
		description: z.string().optional(),
	}),
});
