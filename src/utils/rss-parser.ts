/**
 * Helper utilities for RSS parsing and content normalization.
 *
 * Extracted from src/pages/rss-test.xml.js to centralize helpers.
 *
 * Functions:
 * - stripMarkdown(text): Remove simple markdown formatting.
 * - makeAbsolute(url, siteUrl): Convert relative URLs to absolute using siteUrl.
 * - fixImagePaths(html, siteUrl): Replace <img src="..."> with absolute src.
 * - replaceImageComponent(attributes, siteUrl): Convert an MDX `<Image ... />` component into HTML.
 * - replaceAmazonBookComponent(attributes): Convert an MDX `<AmazonBook ... />` component into HTML.
 * - stripMDXComponents(text, siteUrl): Replace `<Image />`, `<AmazonBook />` and strip other MDX component tags.
 *
 * These are implemented in TypeScript with minimal dependencies so they can be
 * used from RSS builder code or other places.
 */

/* eslint-disable @typescript-eslint/no-non-null-assertion */
export function stripMarkdown(text: string): string {
	// Remove markdown links: [text](url) => text
	// Remove basic markdown formatting characters: *, _, `, ~
	return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`~]/g, '');
}

/**
 * Convert a possibly-relative url to an absolute URL using siteUrl as the base.
 * If the url is already absolute (http/https) it is returned unchanged.
 */
export function makeAbsolute(url: string, siteUrl: string): string {
	if (!url) return url;
	if (/^https?:\/\//i.test(url)) {
		return url;
	}

	try {
		// The URL constructor will resolve relative URLs against the base.
		return new URL(url, siteUrl).toString();
	} catch (e) {
		// Fallback: simple concatenation with a single slash between.
		const base = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
		const path = url.startsWith('/') ? url : `/${url}`;
		return `${base}${path}`;
	}
}

/**
 * Replace img tags in HTML that have relative src attributes with absolute URLs.
 * This is useful after rendering markdown/html that contains <img src="...">.
 */
export function fixImagePaths(html: string, siteUrl: string): string {
	if (!html) return html;
	return html.replace(
		/<img([^>]*)\s+src=(?:"|')([^"']*)(?:"|')([^>]*)>/g,
		(_match, beforeSrc: string, src: string, afterSrc: string) => {
			const absoluteSrc = makeAbsolute(src, siteUrl);
			return `<img${beforeSrc} src="${absoluteSrc}"${afterSrc}>`;
		}
	);
}

/**
 * Extract attribute value from a string like `src="value"` or `src='value'`.
 * Returns null if attribute is not found.
 */
function getAttr(str: string, name: string): string | null {
	const regex = new RegExp(`${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i');
	const match = str.match(regex);
	return match ? match[1] || match[2] : null;
}

// Convert an MDX <Image ... />
export function replaceImageComponent(attributes: string, siteUrl: string): string {
	// Extract possible props we care about
	const src = getAttr(attributes, 'src');
	const alt = getAttr(attributes, 'alt') || '';
	const caption = getAttr(attributes, 'caption');
	const source = getAttr(attributes, 'source');
	const sourceUrl = getAttr(attributes, 'sourceUrl');
	const href = getAttr(attributes, 'href');
	const width = getAttr(attributes, 'width');
	const height = getAttr(attributes, 'height');

	if (!src) return '';

	const absoluteSrc = makeAbsolute(src, siteUrl);

	// Build <img> tag
	let imgHtml = `<img src="${absoluteSrc}" alt="${escapeHtmlAttr(alt)}"`;
	if (width) imgHtml += ` width="${escapeHtmlAttr(width)}"`;
	if (height) imgHtml += ` height="${escapeHtmlAttr(height)}"`;
	imgHtml += ` />`;

	// Optionally wrap in <a>
	if (href) {
		const safeHref = escapeHtmlAttr(href);
		imgHtml = `<a href="${safeHref}">${imgHtml}</a>`;
	}

	// Build figcaption if needed
	if (caption || source) {
		let captionContent = '';

		if (caption) captionContent += escapeHtml(caption);

		if (caption && source) captionContent += ' – ';

		if (source) {
			if (sourceUrl) {
				captionContent += `<cite><a href="${escapeHtmlAttr(sourceUrl)}">${escapeHtml(source)}</a></cite>`;
			} else {
				captionContent += `<cite>${escapeHtml(source)}</cite>`;
			}
		}

		return `<figure>${imgHtml}<figcaption>${captionContent}</figcaption></figure>`;
	}

	return `<figure>${imgHtml}</figure>`;
}

// Convert an MDX <AmazonBook ... />
export function replaceAmazonBookComponent(attributes: string): string {
	const asin = getAttr(attributes, 'asin');
	const alt = getAttr(attributes, 'alt') || '';

	if (!asin) return '';

	// Construct Amazon Image URL
	const amazonImageUrl = `https://images-na.ssl-images-amazon.com/images/P/${asin}.01.LZZZZZZZ.jpg`;
	const amazonProductUrl = `https://www.amazon.de/gp/product/${asin}`;

	// We simplify the output to a standard anchor + img tag
	return `<a href="${amazonProductUrl}" aria-label="${escapeHtmlAttr(alt)}">
		<img src="${amazonImageUrl}" alt="${escapeHtmlAttr(alt)}" />
	</a>`;
}

// Convert an MDX <AppleTV ... />
export function replaceAppleTvComponent(attributes: string): string {
	const id = getAttr(attributes, 'id');

	if (!id) return '';

	// The URL pattern from the component
	const url = `https://tv.apple.com/show/umc.cmc.${id}`;

	// We preserve the inner HTML structure (spans and Apple logo)
	// but strip the complex Tailwind classes for the "pure HTML" output.
	return `<a href="${url}" title="Apple TV+">[]</a>`;
}

// Convert an MDX <NetflixFlag ... />
export function replaceNetflixComponent(attributes: string): string {
	const id = getAttr(attributes, 'id');

	if (!id) return '';

	// The URL pattern from the component
	const url = `https://www.netflix.com/title/${id}`;

	// We preserve the inner HTML structure (spans and Apple logo)
	// but strip the complex Tailwind classes for the "pure HTML" output.
	return `<a href="${url}" title="Netflix">[Netflix]</a>`;
}

// Convert an MDX <PrimeVideoFlag ... />
export function replacePrimeVideoComponent(attributes: string): string {
	const id = getAttr(attributes, 'id');

	if (!id) return '';

	// The URL pattern from the component
	const url = `https://www.amazon.de/gp/video/detail/${id}`;

	// We preserve the inner HTML structure (spans and Apple logo)
	// but strip the complex Tailwind classes for the "pure HTML" output.
	return `<a href="${url}" title="Prime Video">[Prime Video]</a>`;
}

// Convert an MDX <Flag ... />
export function replaceFlagComponent(attributes: string, siteUrl: string): string {
	const label = getAttr(attributes, 'label');
	const href = getAttr(attributes, 'href');

	if (!label) return '';

	// Inner content with decorative brackets, mimicking the original component
	const innerHtml = `[${escapeHtml(label)}]`;

	if (href) {
		const absoluteHref = makeAbsolute(href, siteUrl);
		return `<a href="${escapeHtmlAttr(absoluteHref)}" title="${escapeHtmlAttr(label)}">${innerHtml}</a>`;
	}

	return `<span title="${escapeHtmlAttr(label)}">${innerHtml}</span>`;
}

export function replaceBlockquoteComponent(
	attributes: string,
	content: string,
	siteUrl: string
): string {
	const author = getAttr(attributes, 'author');
	const source = getAttr(attributes, 'source');
	const sourceUrl = getAttr(attributes, 'sourceUrl');
	const lang = getAttr(attributes, 'lang') || 'en';

	let footerHtml = '';

	// Build the footer if we have an author or source
	if (author || source) {
		footerHtml += '<footer>—';

		if (author) {
			footerHtml += ` <b>${escapeHtml(author)}</b>`;
		}

		if (author && source) {
			footerHtml += ',';
		}

		if (source) {
			const safeSource = escapeHtml(source);
			// Add space before source
			footerHtml += ' ';

			if (sourceUrl) {
				const absoluteUrl = makeAbsolute(sourceUrl, siteUrl);
				footerHtml += `<cite><a href="${escapeHtmlAttr(absoluteUrl)}">${safeSource}</a></cite>`;
			} else {
				footerHtml += `<cite>${safeSource}</cite>`;
			}
		}

		footerHtml += '</footer>';
	}

	return `<blockquote lang="${escapeHtmlAttr(lang)}">${content}${footerHtml}</blockquote>`;
}

// Convert an MDX <Pullquote ... />
export function replacePullquoteComponent(attributes: string, siteUrl: string): string {
	const text = getAttr(attributes, 'text');
	if (!text) return '';

	const author = getAttr(attributes, 'author');
	const source = getAttr(attributes, 'source');
	const sourceUrl = getAttr(attributes, 'sourceUrl');
	const lang = getAttr(attributes, 'lang') || 'en';
	const alignment = getAttr(attributes, 'alignment') || 'center';

	// Map alignment to inline styles for RSS compatibility
	const style = alignment === 'left' ? 'text-align: left;' : 'text-align: center;';

	let footerHtml = '';

	if (author || source) {
		footerHtml += '<footer>';

		if (author) {
			footerHtml += `<b>${escapeHtml(author)}</b>`;
		}

		if (author && source) {
			footerHtml += ', ';
		}

		if (source) {
			const safeSource = escapeHtml(source);
			if (sourceUrl) {
				const absoluteUrl = makeAbsolute(sourceUrl, siteUrl);
				footerHtml += `<cite><a href="${escapeHtmlAttr(absoluteUrl)}">${safeSource}</a></cite>`;
			} else {
				footerHtml += `<cite>${safeSource}</cite>`;
			}
		}

		footerHtml += '</footer>';
	}

	return `<blockquote lang="${escapeHtmlAttr(lang)}" style="${style}"><p>${text}</p>${footerHtml}</blockquote>`;
}

// Convert an MDX <ProductLink ... />
export function replaceProductLinkComponent(attributes: string): string {
	const asin = getAttr(attributes, 'asin');
	const text = getAttr(attributes, 'text');

	if (!asin || !text) return '';

	const url = `https://www.amazon.de/gp/product/${asin}`;
	return `<a href="${url}">${escapeHtml(text)}</a>`;
}

// Convert an MDX <DownloadLink ... />
export function replaceDownloadLinkComponent(attributes: string, siteUrl: string): string {
	const href = getAttr(attributes, 'href');
	const text = getAttr(attributes, 'text');

	if (!href || !text) return '';

	const absoluteHref = makeAbsolute(href, siteUrl);

	return `<a href="${escapeHtmlAttr(absoluteHref)}">${escapeHtml(text)} &#8595;</a>`;
}

// Convert an MDX <MoreLink ... />
export function replaceMoreLinkComponent(attributes: string, siteUrl: string): string {
	const href = getAttr(attributes, 'href');
	const text = getAttr(attributes, 'text');

	if (!href || !text) return '';

	const absoluteHref = makeAbsolute(href, siteUrl);

	return `<a href="${escapeHtmlAttr(absoluteHref)}">${escapeHtml(text)} &#8594;</a>`;
}

// Convert an MDX <Ruby ... />
export function replaceRubyComponent(attributes: string): string {
	const base = getAttr(attributes, 'base');
	const text = getAttr(attributes, 'text');

	if (!base || !text) return '';

	return `<ruby>${escapeHtml(base)}<rp>（</rp><rt>${escapeHtml(text)}</rt><rp>）</rp></ruby>`;
}

// Convert an MDX <Spotify ... />
export function replaceSpotifyComponent(attributes: string): string {
	const id = getAttr(attributes, 'id');

	if (!id) return '';

	// Construct the Spotify embed URL
	const src = `https://open.spotify.com/embed/show/${id}?utm_source=generator&theme=0`;

	return `<iframe src="${src}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
}

// Convert an MDX <Figure ...>...</Figure>
export function replaceFigureComponent(attributes: string, content: string): string {
	const caption = getAttr(attributes, 'caption');

	let html = `<figure>${content}`;

	if (caption) {
		html += `<figcaption>${escapeHtml(caption)}</figcaption>`;
	}

	html += `</figure>`;
	return html;
}

// Convert an MDX <Banner ...>...</Banner>
export function replaceBannerComponent(attributes: string, content: string): string {
	const summary = getAttr(attributes, 'summary');
	// Check for the presence of the 'open' attribute (boolean or explicitly set)
	const isOpen = /\bopen\b/i.test(attributes);

	let html = '<aside>';

	if (summary) {
		html += `<details${isOpen ? ' open' : ''}><summary><strong>${escapeHtml(summary)}</strong></summary>${content}</details>`;
	} else {
		html += content;
	}

	html += '</aside>';
	return html;
}

// Convert an MDX <ColorSwatch ... />
export function replaceColorSwatchComponent(attributes: string): string {
	const color = getAttr(attributes, 'color');

	if (!color) return '';

	return `<div style="width: 100px; height: 100px; background-color: ${escapeHtmlAttr(color)};"></div>`;
}

// Convert wrapper components (like <ColorStack> and <BookShelf>)
export function replaceWrapperComponent(content: string): string {
	return `<div>${content}</div>`;
}

/**
 * Strip MDX/JSX-like components from text but preserve/convert specific components.
 */
export function stripMDXComponents(text: string, siteUrl: string): string {
	if (!text) return text;

	// <Image ... />
	let processed = text.replace(/<Image([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceImageComponent(attributes, siteUrl)
	);

	// AmazonBook ... />
	processed = processed.replace(/<AmazonBook([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceAmazonBookComponent(attributes)
	);

	// AppleTV ... />
	processed = processed.replace(
		/<Apple(Tv|TV)([\s\S]*?)\/>/g,
		(_match, _tagSuffix, attributes: string) => replaceAppleTvComponent(attributes)
	);

	// <Netflix ... />
	processed = processed.replace(/<Netflix([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceNetflixComponent(attributes)
	);

	// <PrimeVideo ... />
	processed = processed.replace(/<PrimeVideo([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replacePrimeVideoComponent(attributes)
	);

	// <Flag ... />
	processed = processed.replace(/<Flag([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceFlagComponent(attributes, siteUrl)
	);

	// <Blockquote ...>...</Blockquote>
	processed = processed.replace(
		/<Blockquote\b([^>]*)>([\s\S]*?)<\/Blockquote>/g,
		(_match, attributes: string, content: string) =>
			replaceBlockquoteComponent(attributes, content, siteUrl)
	);

	// <Pullquote ... />
	processed = processed.replace(/<Pullquote([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replacePullquoteComponent(attributes, siteUrl)
	);

	// <Figure ...>...</Figure>
	processed = processed.replace(
		/<Figure\b([^>]*)>([\s\S]*?)<\/Figure>/g,
		(_match, attributes: string, content: string) => replaceFigureComponent(attributes, content)
	);

	// <Banner ...>...</Banner>
	processed = processed.replace(
		/<Banner\b([^>]*)>([\s\S]*?)<\/Banner>/g,
		(_match, attributes: string, content: string) => replaceBannerComponent(attributes, content)
	);

	// <ProductLink ... />
	processed = processed.replace(/<ProductLink([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceProductLinkComponent(attributes)
	);

	// <DownloadLink ... />
	processed = processed.replace(/<DownloadLink([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceDownloadLinkComponent(attributes, siteUrl)
	);

	// <MoreLink ... />
	processed = processed.replace(/<MoreLink([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceMoreLinkComponent(attributes, siteUrl)
	);

	// <Ruby ... />
	processed = processed.replace(/<Ruby([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceRubyComponent(attributes)
	);

	// <Spotify ... />
	processed = processed.replace(/<Spotify([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceSpotifyComponent(attributes)
	);

	// <ColorSwatch ... />
	processed = processed.replace(/<ColorSwatch([\s\S]*?)\/>/g, (_match, attributes: string) =>
		replaceColorSwatchComponent(attributes)
	);

	// <ColorStack>...</ColorStack> and <BookShelf>...</BookShelf>
	processed = processed.replace(
		/<(ColorStack|Bookshelf)\b[^>]*>([\s\S]*?)<\/\1>/g,
		(_match, _tag, content: string) => replaceWrapperComponent(content)
	);

	// Remove any other self-closing components e.g. <Foo bar="baz" />
	const removedSelfClosing = processed.replace(/<([A-Z][\w\d]*)\b[^>]*?\/>/g, '');

	// Remove paired component tags, including their content, e.g. <Foo>...</Foo>
	const removedPaired = removedSelfClosing.replace(
		/<([A-Z][\w\d]*)\b[^>]*?>([\s\S]*?)<\/\1>/g,
		''
	);

	return removedPaired;
}

/**
 * Simple helper to escape text for inclusion inside HTML text nodes.
 */
function escapeHtml(str: string | null | undefined): string {
	if (str == null) return '';
	return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Escape for attribute values (double-quoted).
 */
function escapeHtmlAttr(str: string | null | undefined): string {
	if (str == null) return '';
	return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
}
