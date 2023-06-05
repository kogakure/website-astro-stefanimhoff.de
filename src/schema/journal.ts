import { defineCollection, z } from 'astro:content';

export const journal = defineCollection({
	schema: z.object({
		title: z.string(),
		author: z.string().default('Stefan Imhoff'),
		date: z.date(),
		updated: z.date().optional(),
		description: z.string().optional(),
		cover: z.string().optional(),
		tags: z.array(
			z.enum([
				'book',
				'code',
				'decentralization',
				'design',
				'download',
				'featured',
				'film',
				'health',
				'minimalism',
				'note-taking',
				'personal',
				'philosophy',
				'poetry',
				'politics',
				'productivity',
				'publication',
				'self-improvement',
				'software',
				'survival',
				'tip',
				'typography',
			])
		),
		series: z.string().optional(),
	}),
});
