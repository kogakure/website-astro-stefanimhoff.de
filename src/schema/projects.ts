import { defineCollection, z } from 'astro:content';

export const projects = defineCollection({
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
