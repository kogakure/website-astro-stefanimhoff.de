import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

import { site } from '../data/site';
import { sortByDate } from '../utils';

const parser = new MarkdownIt({ html: true });

import { stripMDXComponents } from '../utils';

export async function GET(context) {
	const journal = await getCollection('journal', ({ data }) => !data.draft);
	const haiku = await getCollection('haiku');
	journal.sort(sortByDate);
	haiku.sort(sortByDate);

	return rss({
		stylesheet: '/rss.xsl',
		title: site.title,
		description: site.description,
		site: context.site,
		items: [
			...journal.map((post) => {
				// Filter out import statements from content
				const contentWithoutImports = post.body
					.split('\n')
					.filter((line) => !line.startsWith('import'))
					.join('\n');

				// First strip MDX components, then render markdown
				const processedContent = stripMDXComponents(contentWithoutImports, context.site);
				const renderedContent = parser.render(processedContent);
				const sanitizedContent = sanitizeHtml(renderedContent, {
					allowedTags: sanitizeHtml.defaults.allowedTags.concat([
						'img',
						'figure',
						'figcaption',
						'details',
						'summary',
						'div',
					]),
					allowedAttributes: {
						div: ['style'],
						a: ['href'],
						img: ['src', 'alt', 'width', 'height'],
					},
				});

				return {
					title: post.data.title,
					pubDate: post.data.date,
					description: `<![CDATA[${post.data.description}]]>`,
					link: `/${post.slug}/`,
					content: `<![CDATA[${sanitizedContent}]]>`,
					enclosure: {
						url: `${site.url}${post.data.cover.startsWith('/assets/images/cover/') && post.data.cover.endsWith('.webp') ? post.data.cover.replace('/assets/images/cover/', '/assets/images/og/').replace(/\.webp$/, '.jpg') : '/assets/images/og/bonsai.jpg'}`,
						length: 0,
						type: 'image/jpeg',
					},
					customData: '<language>en-us</language>',
				};
			}),
			...haiku.map((item) => {
				return {
					title: `Haiku ${item.slug}`,
					pubDate: item.data.date,
					customData: '<language>en-us</language>',
					link: `/haiku/${item.slug}/`,
					content: `<blockquote><p>${item.data.de}</p><hr /><p>${item.data.en}</p></blockquote>`,
				};
			}),
		].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
		customData: `<language>en-us</language>`,
	});
}
