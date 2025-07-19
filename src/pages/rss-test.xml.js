import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get(context) {
	return rss({
		title: 'Your Blog Title',
		description: 'Your blog description',
		site: context.site,
		// This glob includes both Markdown (.md) and MDX (.mdx) files
		items: await pagesGlobToRssItems(import.meta.glob('../content/journal/2025/*.{md,mdx}')),
	});
}
