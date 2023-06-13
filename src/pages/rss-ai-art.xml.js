import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { site } from '../data/site';

export async function get(context) {
	const aiArt = await getCollection('ai-art');
	return rss({
		title: `${site.title} (AI Art)`,
		description: 'This is a collection of AI art pieces I’ve created with Stable Diffusion.',
		site: context.site,
		items: aiArt.map((item) => ({
			title: item.data.title,
			pubDate: item.data.date,
			customData: '<language>en-us</language>',
			link: `/ai-art/${item.slug}/`,
			content: `<div>${item.data.images
				.map((img) => `<img alt="${item.data.title}" src="${img.src}" />`)
				.join('')}</div>`,
		})),
		customData: `<language>en-us</language>`,
	});
}
