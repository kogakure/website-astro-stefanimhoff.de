import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

export const work = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.date(),
		variant: z
			.enum([
				'image-left',
				'image-right',
				'gallery-2',
				'gallery-3',
				'icon-grid',
				'full-bleed',
				'text-only',
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
	}),
});
