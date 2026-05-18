/** @vitest-environment happy-dom */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { axe } from '@/test/a11y';

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

describe('content components — axe', () => {
	it('AmazonBook has no a11y violations', async () => {
		const { container } = render(
			<AmazonBook asin="B001234567" alt="Book cover for test title" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('AppleTVFlag has no a11y violations', async () => {
		const { container } = render(<AppleTVFlag id="umc.cmc.test" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('AudioCard (audiobook) has no a11y violations', async () => {
		const { container } = render(
			<AudioCard kind="audiobook" title="Thinking, Fast and Slow" author="Daniel Kahneman" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('AudioCard (podcast) has no a11y violations', async () => {
		const { container } = render(
			<AudioCard kind="podcast" title="Lex Fridman Podcast" moderator="Lex Fridman" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Banner (plain) has no a11y violations', async () => {
		const { container } = render(<Banner>Note content.</Banner>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Banner (disclosure) has no a11y violations', async () => {
		const { container } = render(<Banner summary="More details">Expanded content.</Banner>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Blockquote has no a11y violations', async () => {
		const { container } = render(
			<Blockquote author="Marcus Aurelius">
				<p>You have power over your mind, not outside events.</p>
			</Blockquote>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Book has no a11y violations', async () => {
		const { container } = render(<Book src="/images/book-cover.jpg" alt="Book cover" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('BookCard has no a11y violations', async () => {
		const { container } = render(<BookCard title="Meditations" author="Marcus Aurelius" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Bookshelf has no a11y violations', async () => {
		const { container } = render(<Bookshelf>Books go here</Bookshelf>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ColorStack has no a11y violations', async () => {
		const { container } = render(
			<ColorStack>
				<span>Swatch 1</span>
			</ColorStack>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ColorSwatch has no a11y violations', async () => {
		const { container } = render(
			<ColorSwatch color="#900B20" name="Beni" description="Crimson accent colour" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ColorSwatchMini has no a11y violations', async () => {
		const { container } = render(<ColorSwatchMini color="#900B20" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ColorSwatchPrimary has no a11y violations', async () => {
		const { container } = render(
			<ColorSwatchPrimary color="#900B20" name="Beni 紅" description="Crimson accent" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('DownloadLink has no a11y violations', async () => {
		const { container } = render(
			<DownloadLink href="/files/resume.pdf" text="Download résumé (PDF)" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('EmailLink has no a11y violations', async () => {
		const { container } = render(
			<EmailLink data-name="hello" data-domain="example" data-tld="com" text="Email me" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Figure has no a11y violations', async () => {
		const { container } = render(
			<Figure caption="A descriptive caption">
				<img src="/image.jpg" alt="Descriptive image" />
			</Figure>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Image has no a11y violations', async () => {
		const { container } = render(
			<Image src="/photo.jpg" alt="A descriptive photo" width={800} height={600} />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('InlineCode has no a11y violations', async () => {
		const { container } = render(
			<p>
				Use <InlineCode>npm install</InlineCode> to install.
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('MarkdownImage has no a11y violations', async () => {
		const { container } = render(<MarkdownImage src="/photo.jpg" alt="Photo description" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('MediaLinkRow has no a11y violations', async () => {
		const { container } = render(
			<MediaLinkRow
				links={[
					{ kind: 'spotify', url: 'https://open.spotify.com/show/test' },
					{ kind: 'web', url: 'https://example.com' },
				]}
			/>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('NetflixFlag has no a11y violations', async () => {
		const { container } = render(<NetflixFlag id="81234567" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Platform (iphone) has no a11y violations', async () => {
		const { container } = render(<Platform kind="iphone" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Platform (desktop) has no a11y violations', async () => {
		const { container } = render(<Platform kind="desktop" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('PrimeVideoFlag has no a11y violations', async () => {
		const { container } = render(<PrimeVideoFlag id="B0TESTPRIME" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ProductLink has no a11y violations', async () => {
		const { container } = render(<ProductLink asin="B001234567" text="Buy on Amazon" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Pullquote has no a11y violations', async () => {
		const { container } = render(
			<Pullquote text="The obstacle is the way." author="Marcus Aurelius" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('RSSText has no a11y violations', async () => {
		const { container } = render(<RSSText />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Ruby has no a11y violations', async () => {
		const { container } = render(<Ruby base="間" text="ま" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Spotify has no a11y violations', async () => {
		const { container } = render(
			<Spotify id="track/4uLU6hMCjMI75M1A2tKUQC" title="Spotify track player" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Verse has no a11y violations', async () => {
		const { container } = render(
			<Verse>
				<p>First line</p>
				<p>Second line</p>
			</Verse>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('VideoCard has no a11y violations', async () => {
		const { container } = render(
			<VideoCard
				title="How to Think"
				url="https://www.youtube.com/watch?v=test"
				channel="Test Channel"
			/>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('YouTube has no a11y violations', async () => {
		const { container } = render(<YouTube id="dQw4w9WgXcQ" title="Sample YouTube video" />);
		expect(await axe(container)).toHaveNoViolations();
	});
});
