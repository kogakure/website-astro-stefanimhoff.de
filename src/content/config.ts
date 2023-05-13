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
		sort: z.number().optional(),
		showcase: z.boolean().optional(),
		description: z.string(),
		categories: z.array(z.enum([
			"Design",
			"Graphic Design",
			"Icon Design",
			"Illustration",
			"Painting",
			"Photography",
			"Poetry",
			"Typeface Design",
			"Web Design",
			"Web Development",
			"Writing"
		])),
		more: z.object({
			text: z.string().optional(),
			link: z.string()
		}).optional()
	}),
});

export const collections = {
	haiku: haikuCollection,
	projects: projectCollection
};
