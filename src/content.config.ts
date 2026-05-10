import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

const linkSchema = z.object({
	kind: z.enum(['apple', 'spotify', 'amazon', 'youtube', 'web', 'instagram', 'patreon']),
	url: z.string().url().or(z.literal('')).nullish(),
	label: z.string().optional(),
});

const books = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/books' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		author: z.string().optional(),
		topic: z.string(),
		sort: z.number().optional(),
		language: z.enum(['en', 'de', 'ja']).optional(),
		featured: z.boolean().optional(),
		paid: z.boolean().optional().default(false),
		cover: z.string().optional(),
		asin: z.string().optional(),
		links: z.array(linkSchema).optional(),
		description: z.string().optional(),
		category: z.string().optional(),
	}),
});

const audiobooks = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/audiobooks' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		author: z.string().optional(),
		topic: z.string(),
		sort: z.number().optional(),
		language: z.enum(['en', 'de', 'ja']).optional(),
		featured: z.boolean().optional(),
		paid: z.boolean().optional().default(false),
		cover: z.string().optional(),
		links: z.array(linkSchema).optional(),
		description: z.string().optional(),
	}),
});

const podcasts = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/podcasts' }),
	schema: z.object({
		title: z.string(),
		subtitle: z.string().optional(),
		moderator: z.string().optional(),
		topic: z.string(),
		sort: z.number().optional(),
		language: z.enum(['en', 'de', 'ja']).optional(),
		featured: z.boolean().optional(),
		paid: z.boolean().optional().default(false),
		cover: z.string().optional(),
		links: z.array(linkSchema).optional(),
		description: z.string().nullish(),
	}),
});

const videos = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/videos' }),
	schema: z.object({
		title: z.string(),
		topic: z.string(),
		sort: z.number().optional(),
		language: z.enum(['en', 'de', 'ja']).optional(),
		featured: z.boolean().optional(),
		youtubeId: z.string().optional(),
		url: z.string().url(),
		channel: z.string().optional(),
		description: z.string().optional(),
		kind: z.enum(['video', 'playlist', 'channel']).default('video'),
		cover: z.string().optional(),
	}),
});

const articles = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
	schema: z.object({
		title: z.string(),
		url: z.string().url(),
		author: z.string().optional(),
		topic: z.string(),
		sort: z.number().optional(),
		language: z.enum(['en', 'de', 'ja']).optional(),
		featured: z.boolean().optional(),
		description: z.string().optional(),
	}),
});

const organizations = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/organizations' }),
	schema: z.object({
		title: z.string(),
		url: z.string().url(),
		description: z.string().optional(),
		topic: z.string(),
		sort: z.number().optional(),
		language: z.enum(['en', 'de', 'ja']).optional(),
		featured: z.boolean().optional(),
	}),
});

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

const work = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
	schema: z.object({
		title: z.string(),
		date: z.date(),
		variant: z
			.enum([
				'gallery-2',
				'gallery-2-stagger',
				'gallery-3',
				'gallery-3-stagger',
				'full-bleed',
				'image-inset',
				'text-only',
				'featured',
			])
			.optional(),
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
		description: z.string().optional(),
		intro: z.union([z.string(), z.array(z.string())]).optional(),
		imageOffset: z.enum(['24', '32']).optional(),
		sectionLabel: z.string().optional(),
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
			.union([
				z.object({
					text: z.string().optional(),
					link: z.string(),
				}),
				z.array(
					z.object({
						text: z.string().optional(),
						link: z.string(),
					})
				),
			])
			.optional(),
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

export const collections = {
	writing,
	haiku,
	work,
	'design-system': designSystem,
	books,
	audiobooks,
	podcasts,
	videos,
	articles,
	organizations,
};
