import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { site } from '../data/site';

export async function get(context) {
	const sketchnotes = await getCollection('sketchnotes');
	return rss({
		title: `${site.title} (Sketchnotes)`,
		description: 'This is a collection of Sketchnotes I’ve drawn.',
		site: context.site,
		items: sketchnotes.map((item) => ({
			title: item.data.title,
			pubDate: item.data.date,
			customData: '<language>en-us</language>',
			link: `/sketchnotes/${item.slug}/`,
			content: `<div>${item.data.images
				.map((img) => `<img alt="${item.data.title}" src="${img.src}" />`)
				.join('')}</div>`,
		})),
		customData: `<language>en-us</language>`,
	});
}
