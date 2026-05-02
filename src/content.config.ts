import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const writing = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
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
				'personal',
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

const haiku = defineCollection({
	loader: glob({ pattern: '**/*.{md,yaml,yml}', base: './src/content/haiku' }),
	schema: z.object({
		date: z.date(),
		de: z.string(),
		en: z.string(),
		noindex: z.boolean().optional(),
		nofollow: z.boolean().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		format: z.enum(['100-end', '100-start', '50-end', '50-start', '70-end', '70-start']),
		image: z
			.object({
				src: z.string(),
				height: z.number().optional(),
				width: z.number().optional(),
				aspectRatio: z.number().optional(),
			})
			.optional(),
		images: z
			.array(
				z.object({
					src: z.string(),
					alt: z.string().optional(),
				})
			)
			.optional(),
		sort: z.number().optional(),
		showcase: z.boolean().optional(),
		description: z.string().optional(),
		intro: z.string().optional(),
		categories: z.array(
			z.enum([
				'Design',
				'Graphic Design',
				'Icon Design',
				'Illustration',
				'Painting',
				'Photography',
				'Poetry',
				'Typeface Design',
				'Web Design',
				'Web Development',
				'Writing',
			])
		),
		more: z
			.object({
				text: z.string().optional(),
				link: z.string(),
			})
			.optional(),
		class: z.string().optional(),
		noindex: z.boolean().optional(),
		nofollow: z.boolean().optional(),
	}),
});

const designSystem = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/design-system' }),
	schema: z.object({
		title: z.string(),
		order: z.number(),
		description: z.string().optional(),
		slug: z.string().optional(),
		kanji: z.string().optional(),
		principle: z.string().optional(),
		group: z.enum(['foundations', 'tokens', 'guidelines', 'components']).optional(),
		parent: z.string().optional(),
	}),
});

export const collections = { writing, haiku, projects, 'design-system': designSystem };
