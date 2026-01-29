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
		xmlns: {
			media: 'http://search.yahoo.com/mrss/',
		},
		items: [
			...journal.map((post) => {
				const { title, subtitle, date, description, cover } = post.data;
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

				// Logic to determine image URL
				const isWebp = cover.startsWith('/assets/images/cover/') && cover.endsWith('.webp');
				const imgUrl = isWebp
					? cover
							.replace('/assets/images/cover/', '/assets/images/thumbnail/')
							.replace(/\.webp$/, '.jpg')
					: '/assets/images/thumbnail/bonsai.jpg';

				return {
					title: subtitle ? `${title}: ${subtitle}` : title,
					pubDate: date,
					description: description,
					link: `/${post.slug}/`,
					content: sanitizedContent,
					enclosure: {
						url:
							site.url +
							(isWebp
								? cover
										.replace('/assets/images/cover/', '/assets/images/og/')
										.replace(/\.webp$/, '.jpg')
								: '/assets/images/og/bonsai.jpg'),
						length: 0,
						type: 'image/jpeg',
					},
					customData: `
            <language>en-us</language>
            <media:thumbnail url="${site.url}${imgUrl}" width="100" height="100" />
          `,
				};
			}),
			...haiku.map((item) => {
				return {
					title: `Haiku ${item.slug}`,
					pubDate: item.data.date,
					customData: '<language>en-us</language>',
					link: `/haiku/${item.slug}/`,
					content: `<blockquote><p>${item.data.de}</p><hr /><p>${item.data.en}</p></blockquote>`,
					enclosure: {
						url: `${site.url}'/assets/images/og/bonsai.jpg`,
						length: 0,
						type: 'image/jpeg',
					},
					customData: `
            <language>en-us</language>
            <media:thumbnail url="${site.url}/assets/images/thumbnail/bonsai.jpg" width="100" height="100" />
          `,
				};
			}),
		].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
		customData: `<language>en-us</language>`,
	});
}
