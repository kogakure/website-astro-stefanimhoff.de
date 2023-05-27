import { defineCollection, z } from 'astro:content';

const haikuCollection = defineCollection({
	schema: z.object({
		date: z.date(),
		de: z.string(),
		en: z.string(),
	}),
});

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		format: z.enum(['100-end', '100-start', '50-end', '50-start', '70-end', '70-start']),
		image: z
			.object({
				src: z.string(),
				height: z.number().optional(),
				width: z.number().optional(),
				aspectRatio: z.number().optional(),
			})
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
	}),
});

const sketchnotesCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		sort: z.number().optional(),
		coverSize: z.enum(['small', 'medium', 'large']).default('small'),
		images: z.array(
			z.object({
				src: z.string(),
				aspectRatio: z.number(),
			})
		),
	}),
});

const aiArtCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		sort: z.number().optional(),
		coverSize: z.enum(['small', 'medium', 'large']).default('small'),
		images: z.array(
			z.object({
				src: z.string(),
				aspectRatio: z.number(),
			})
		),
	}),
});

export const collections = {
	haiku: haikuCollection,
	projects: projectCollection,
	sketchnotes: sketchnotesCollection,
	'ai-art': aiArtCollection,
};
