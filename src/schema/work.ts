import { z } from 'astro/zod';
import { defineCollection } from 'astro:content';

export const work = defineCollection({
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
