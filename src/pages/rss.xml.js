import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import MarkdownIt from 'markdown-it';
import sanitizeHtml from 'sanitize-html';

import { site } from '../data/site';
import { sortByDate } from '../utils';

const parser = new MarkdownIt({ html: true });

import { escapeHtml, stripMDXComponents } from '../utils';
import { getPreviewUrl } from '../utils/preview-url';

export async function GET(context) {
	const [writing, haiku] = await Promise.all([
		getCollection('writing', ({ data }) => !data.draft),
		getCollection('haiku'),
	]);
	writing.sort(sortByDate);
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
			...writing.map((post) => {
				const { title, subtitle, date, description, cover } = post.data;
				// Filter out import statements from content
				const contentWithoutImports = (post.body ?? '')
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

				const previewUrl = getPreviewUrl(cover);
				const coverBasename = cover?.src
					? (cover.src.split('/').pop()?.split('.')[0] ?? null)
					: null;
				const ogUrl = coverBasename
					? `/assets/images/og/${coverBasename}.jpg`
					: '/assets/images/og/ma.jpg';

				return {
					title: subtitle ? `${title}: ${subtitle}` : title,
					pubDate: date,
					description: description,
					link: `/writing/${post.id.split('/').pop()}/`,
					content: sanitizedContent,
					enclosure: {
						url: site.url + ogUrl,
						length: 0,
						type: 'image/jpeg',
					},
					customData: `
            <language>en-us</language>
            <media:thumbnail url="${site.url}${previewUrl}" width="800" height="450" />
          `,
				};
			}),
			...haiku.map((item) => {
				return {
					title: `Haiku ${item.slug}`,
					pubDate: item.data.date,
					link: `/haiku/#haiku-${item.slug}`,
					content: `<blockquote><p>${escapeHtml(item.data.de)}</p><hr /><p>${escapeHtml(item.data.en)}</p></blockquote>`,
					enclosure: {
						url: `${site.url}/assets/images/og/ma.jpg`,
						length: 0,
						type: 'image/jpeg',
					},
					customData: `
            <language>en-us</language>
            <media:thumbnail url="${site.url}/assets/images/preview/ma.webp" width="800" height="450" />
          `,
				};
			}),
		].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf()),
		customData: `<language>en-us</language>`,
	});
}
