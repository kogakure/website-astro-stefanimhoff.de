import DownloadLink from './components/DownloadLink.astro';
import EmailLink from './components/EmailLink.astro';
import MarkdownImage from './components/MarkdownImage.astro';
import MoreLink from './components/MoreLink.astro';
import ThemeBox from './components/ThemeBox.astro';

import {
	AffiliateLink,
	AmazonBook,
	Banner,
	Book,
	ColorStack,
	ColorSwatch,
	DisplayBox,
	Divider,
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
	Book,
	ColorStack,
	ColorSwatch,
	DisplayBox,
	DownloadLink,
	EmailLink,
	Flag,
	h1: Title,
	h2: Headline,
	h3: Subheadline,
	h4: Subsubheadline,
	h5: Subsubheadline,
	h6: Subsubheadline,
	hr: Divider,
	img: MarkdownImage,
	li: ListItem,
	MoreLink,
	NetflixFlag,
	OdyseeVideo,
	ol: OrderedList,
	p: Text,
	PrimeVideoFlag,
	ProjectIntro,
	Pullquote,
	ThemeBox,
	ul: UnorderedList,
	Verse,
	YouTubeVideo,
};
