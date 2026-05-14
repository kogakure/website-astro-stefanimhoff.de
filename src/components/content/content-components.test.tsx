/** @vitest-environment happy-dom */

import { fireEvent, render, screen } from '@testing-library/react';
import type { ReactElement } from 'react';
import { describe, expect, it, vi } from 'vitest';

import { AmazonBook } from './AmazonBook';
import { AppleTVFlag } from './AppleTVFlag';
import { AudioCard } from './AudioCard';
import { Banner } from './Banner';
import { Blockquote } from './Blockquote';
import { Book } from './Book';
import { BookCard } from './BookCard';
import { Bookshelf } from './Bookshelf';
import { ColorStack } from './ColorStack';
import { ColorSwatch } from './ColorSwatch';
import { ColorSwatchMini } from './ColorSwatchMini';
import { ColorSwatchPrimary } from './ColorSwatchPrimary';
import { DownloadLink } from './DownloadLink';
import { EmailLink } from './EmailLink';
import { Figure } from './Figure';
import Image from './Image';
import { InlineCode } from './InlineCode';
import { MarkdownImage } from './MarkdownImage';
import { MediaLinkRow } from './MediaLinkRow';
import { NetflixFlag } from './NetflixFlag';
import { Platform } from './Platform';
import { PrimeVideoFlag } from './PrimeVideoFlag';
import { ProductLink } from './ProductLink';
import { Pullquote } from './Pullquote';
import { RSSText } from './RSSText';
import { Ruby } from './Ruby';
import { Spotify } from './Spotify';
import { Verse } from './Verse';
import { VideoCard } from './VideoCard';
import { YouTube } from './YouTube';

describe('content media link components', () => {
	it('renders external media links with generated provider URLs', () => {
		render(
			<>
				<AmazonBook asin="B00TEST" alt="Book cover" />
				<AppleTVFlag id="abc123" />
				<NetflixFlag id="80234304" />
				<PrimeVideoFlag id="B08TEST" />
				<ProductLink asin="B00PRODUCT" text="Product" />
				<DownloadLink href="/files/test.pdf" text="Download PDF" />
			</>
		);

		expect(screen.getByRole('link', { name: 'Book cover' })).toHaveAttribute(
			'href',
			'https://www.amazon.de/gp/product/B00TEST'
		);
		expect(screen.getByRole('img', { name: 'Book cover' })).toHaveAttribute(
			'src',
			'https://images-na.ssl-images-amazon.com/images/P/B00TEST.01.LZZZZZZZ.jpg'
		);
		expect(screen.getByTitle('Apple TV+')).toHaveAttribute(
			'href',
			'https://tv.apple.com/show/umc.cmc.abc123'
		);
		expect(screen.getByTitle('Netflix')).toHaveAttribute(
			'href',
			'https://www.netflix.com/title/80234304'
		);
		expect(screen.getByTitle('Prime Video')).toHaveAttribute(
			'href',
			'https://www.amazon.de/gp/video/detail/B08TEST'
		);
		expect(screen.getByRole('link', { name: 'Product' })).toHaveAttribute(
			'href',
			'https://www.amazon.de/gp/product/B00PRODUCT'
		);
		expect(screen.getByRole('link', { name: /Download PDF/ })).toHaveAttribute(
			'href',
			'/files/test.pdf'
		);
	});

	it('filters empty media links and uses fallback labels', () => {
		const { container } = render(
			<MediaLinkRow
				links={[
					{ kind: 'spotify', url: 'https://spotify.example' },
					{ kind: 'web', url: null },
					{ kind: 'patreon', url: 'https://patreon.example', label: 'Support' },
				]}
			/>
		);

		expect(screen.getByRole('link', { name: 'Spotify' })).toHaveAttribute(
			'href',
			'https://spotify.example'
		);
		expect(screen.getByRole('link', { name: 'Support' })).toHaveAttribute(
			'href',
			'https://patreon.example'
		);
		expect(container.querySelectorAll('a')).toHaveLength(2);
	});

	it('copies obfuscated email addresses without navigating', () => {
		const writeText = vi.spyOn(navigator.clipboard, 'writeText');
		render(<EmailLink data-name="hello" data-domain="example" data-tld="com" text="Mail" />);

		fireEvent.click(screen.getByRole('link', { name: /Mail/ }));

		expect(writeText).toHaveBeenCalledWith('hello@example.com');
	});
});

describe('content image and embed components', () => {
	it('renders image wrappers with lightbox metadata, captions, and links', () => {
		const { container } = render(
			<>
				<Book src="/book.jpg" alt="Standalone book" />
				<MarkdownImage src="/photo.jpg" alt="Markdown photo" />
				<Image src="/figure.jpg" alt="Figure photo" caption="A caption" source="Ada" />
				<Image src="/linked.jpg" alt="Linked photo" href="/full.jpg" />
				<Figure caption="Figure caption">
					<span>Figure body</span>
				</Figure>
			</>
		);

		expect(screen.getByRole('img', { name: 'Standalone book' })).toHaveAttribute(
			'src',
			'/book.jpg'
		);
		expect(
			screen.getAllByRole('button', { name: 'Open image in lightbox' })[0]
		).toHaveAttribute('src', '/photo.jpg');
		expect(
			screen.getAllByRole('button', { name: 'Open image in lightbox' })[1]
		).toHaveAttribute('data-lightbox', 'true');
		expect(container).toHaveTextContent('A caption');
		expect(screen.getByText('Ada').tagName).toBe('CITE');
		expect(screen.getByRole('link', { name: 'Linked photo' })).toHaveAttribute(
			'href',
			'/full.jpg'
		);
		expect(screen.getByText('Figure caption').tagName).toBe('FIGCAPTION');
	});

	it('renders audio/video embeds with expected provider attributes', () => {
		const spotify = Spotify({ id: 'show-id' }) as ReactElement<{
			src: string;
			title: string;
		}>;
		const { container } = render(<YouTube id="video-id" title="Watch video" />);

		expect(spotify.props.title).toBe('Spotify Podcast Player');
		expect(spotify.props.src).toBe(
			'https://open.spotify.com/embed/show/show-id?utm_source=generator&theme=0'
		);
		expect(container.querySelector('lite-youtube')).toHaveAttribute('videoid', 'video-id');
		expect(container.querySelector('lite-youtube')).toHaveAttribute('playlabel', 'Watch video');
	});
});

describe('content text and callout components', () => {
	it('renders callouts, quotes, verse, ruby, and inline code', () => {
		const { container } = render(
			<>
				<Banner summary="Read more" open tone="accent">
					<p>Details</p>
				</Banner>
				<Blockquote author="Ada" source="Book" sourceUrl="/book/">
					<p>Quoted text</p>
				</Blockquote>
				<Pullquote text="Pull <strong>quote</strong>" author="Grace" alignment="center" />
				<Verse>{'line one\nline two'}</Verse>
				<Ruby base="間" text="ma" />
				<InlineCode>npm test</InlineCode>
			</>
		);

		expect(screen.getByText('Read more')).toBeInTheDocument();
		expect(screen.getByText('Details')).toBeInTheDocument();
		expect(screen.getByText('Quoted text')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Book' })).toHaveAttribute('href', '/book/');
		expect(container.querySelector('.pullquote')).toHaveTextContent('Pull quote');
		expect(screen.getByText(/line one/).tagName).toBe('PRE');
		expect(screen.getByText('間').tagName).toBe('RUBY');
		expect(screen.getByText('ma').tagName).toBe('RT');
		expect(screen.getByText('npm test').tagName).toBe('CODE');
	});

	it('renders color and layout helpers while RSS-only text returns nothing', () => {
		const { container } = render(
			<>
				<Bookshelf>
					<span>Book shelf child</span>
				</Bookshelf>
				<ColorStack>
					<span>Color stack child</span>
				</ColorStack>
				<ColorSwatch color="#ffffff" title="White" kanji="白" description="Light" />
				<ColorSwatchPrimary color="#900B20" name="Beni" kanji="紅" description="Red" />
				<ColorSwatchMini color="#fefefe" data-testid="mini" />
				<Platform kind="iphone" />
				<RSSText>RSS only</RSSText>
			</>
		);

		expect(screen.getByText('Book shelf child').closest('article')).toBeInTheDocument();
		expect(screen.getByText('Color stack child').closest('article')).toBeInTheDocument();
		expect(screen.getByText('White')).toBeInTheDocument();
		expect(screen.getByText('#ffffff')).toBeInTheDocument();
		expect(screen.getByText('Beni')).toBeInTheDocument();
		expect(screen.getByTestId('mini')).toHaveStyle({ backgroundColor: '#fefefe' });
		expect(screen.getByRole('img', { name: 'iPhone / iPad' })).toBeInTheDocument();
		expect(container).not.toHaveTextContent('RSS only');
	});
});

describe('content cards', () => {
	it('renders book, audio, and video cards with badges, covers, and primary links', () => {
		render(
			<>
				<BookCard
					title="Card Book"
					subtitle="Book Subtitle"
					author="Author"
					asin="B00CARD"
					description="Book description"
					featured
					paid
					language="de"
					links={[{ kind: 'amazon', url: 'https://amazon.example' }]}
				/>
				<AudioCard
					kind="podcast"
					title="Podcast"
					moderator="Host"
					featured
					language="en"
					links={[{ kind: 'spotify', url: 'https://spotify.example' }]}
				/>
				<VideoCard
					title="Video"
					url="https://youtube.example"
					youtubeId="abc123"
					kind="playlist"
					channel="Channel"
					featured
					language="ja"
				/>
			</>
		);

		expect(screen.getByRole('link', { name: 'Card Book' })).toHaveAttribute(
			'href',
			'https://amazon.example'
		);
		expect(screen.getByText('Book Subtitle')).toBeInTheDocument();
		expect(screen.getByText('Author')).toBeInTheDocument();
		expect(screen.getByText('Paid')).toBeInTheDocument();
		expect(screen.getByText('DE')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Podcast' })).toHaveAttribute(
			'href',
			'https://spotify.example'
		);
		expect(screen.getByText('Host')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Video' })).toHaveAttribute(
			'href',
			'https://youtube.example'
		);
		expect(screen.getByRole('img', { name: 'Video' })).toHaveAttribute(
			'src',
			'https://i.ytimg.com/vi/abc123/hqdefault.jpg'
		);
		expect(screen.getByText('Playlist')).toBeInTheDocument();
		expect(screen.getByText('Channel')).toBeInTheDocument();
	});
});
