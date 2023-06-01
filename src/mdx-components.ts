import DownloadLink from './components/DownloadLink.astro';
import EmailLink from './components/EmailLink.astro';
import Image from './components/Image.astro';
import MarkdownImage from './components/MarkdownImage.astro';
import MoreLink from './components/MoreLink.astro';
import Picture from './components/Picture.astro';
import ThemeBox from './components/ThemeBox.astro';

import {
	AffiliateLink,
	AmazonBook,
	Banner,
	Blockquote,
	Book,
	Bookshelf,
	ColorStack,
	ColorSwatch,
	DisplayBox,
	Divider,
	Figure,
	Flag,
	Headline,
	ListItem,
	NetflixFlag,
	OdyseeVideo,
	OrderedList,
	PrimeVideoFlag,
	ProjectIntro,
	Pullquote,
	Subheadline,
	Subsubheadline,
	Text,
	TextLink,
	Title,
	UnorderedList,
	Verse,
	YouTubeVideo,
} from './components';

export const mapping = {
	a: TextLink,
	AffiliateLink,
	AmazonBook,
	Banner,
	Blockquote,
	blockquote: Blockquote,
	Book,
	Bookshelf,
	ColorStack,
	ColorSwatch,
	DisplayBox,
	DownloadLink,
	EmailLink,
	Figure,
	Flag,
	h1: Title,
	h2: Headline,
	h3: Subheadline,
	h4: Subsubheadline,
	h5: Subsubheadline,
	h6: Subsubheadline,
	hr: Divider,
	Image,
	img: MarkdownImage,
	li: ListItem,
	MarkdownImage,
	MoreLink,
	NetflixFlag,
	OdyseeVideo,
	ol: OrderedList,
	p: Text,
	Picture,
	PrimeVideoFlag,
	ProjectIntro,
	Pullquote,
	ThemeBox,
	ul: UnorderedList,
	Verse,
	YouTubeVideo,
};
