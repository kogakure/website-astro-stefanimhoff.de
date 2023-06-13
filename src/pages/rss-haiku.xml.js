import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import { site } from '../data/site';

export async function get(context) {
	const haiku = await getCollection('haiku');
	return rss({
		title: `${site.title} (Haiku)`,
		description: 'This is an ever-growing collection of Haiku I have written.',
		site: context.site,
		items: haiku.map((item) => ({
			title: `Haiku ${item.slug}`,
			pubDate: item.data.date,
			customData: '<language>en-us</language>',
			link: `/haiku/${item.slug}/`,
			content: `<div><p>${item.data.de}</p><hr /><p>${item.data.en}</p></div>`,
		})),
		customData: `<language>en-us</language>`,
	});
}
