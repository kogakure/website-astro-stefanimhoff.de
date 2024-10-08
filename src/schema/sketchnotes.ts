// Cspell:words astro sketchnotes
import { defineCollection, z } from 'astro:content';

export const sketchnotes = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		sort: z.number().optional(),
		coverSize: z.enum(['small', 'medium', 'large']).default('small'),
		images: z.array(
			z.object({
				src: z.string(),
				aspectRatio: z.number(),
			})
		),
		noindex: z.boolean().optional(),
		nofollow: z.boolean().optional(),
	}),
});
