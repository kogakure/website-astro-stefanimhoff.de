// Cspell:words astro imhoff
import { defineCollection, z } from 'astro:content';

export const journal = defineCollection({
	schema: z.object({
		title: z.string(),
		draft: z.boolean().optional().default(false),
		featured: z.boolean().optional(),
		author: z.string().default('Stefan Imhoff'),
		date: z.date(),
		updated: z.date().optional(),
		description: z.string().optional(),
		cover: z.string().optional(),
		tags: z.array(
			z.enum([
				'ai',
				'book',
				'code',
				'design',
				'download',
				'film',
				'japan',
				'minimalism',
				'philosophy',
				'poetry',
				'politics',
				'productivity',
				'recommendation',
				'self-improvement',
				'software',
				'technology',
				'writing',
			])
		),
		series: z.string().optional(),
		noindex: z.boolean().optional(),
		nofollow: z.boolean().optional(),
	}),
});
