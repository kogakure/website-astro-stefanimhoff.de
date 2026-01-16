import { YouTube } from '@astro-community/astro-embed-youtube';

import AmazonBook from './components/AmazonBook.astro';
import AppleTVFlag from './components/AppleTVFlag.astro';
import Banner from './components/Banner.astro';
import Blockquote from './components/Blockquote.astro';
import Book from './components/Book.astro';
import Bookshelf from './components/Bookshelf.astro';
import ColorStack from './components/ColorStack.astro';
import ColorSwatch from './components/ColorSwatch.astro';
import DisplayBox from './components/DisplayBox.astro';
import Divider from './components/Divider.astro';
import DownloadLink from './components/DownloadLink.astro';
import EmailLink from './components/EmailLink.astro';
import Figure from './components/Figure.astro';
import Flag from './components/Flag.astro';
import Headline from './components/Headline.astro';
import Image from './components/Image.astro';
import ListItem from './components/ListItem.astro';
import MarkdownImage from './components/MarkdownImage.astro';
import MoreLink from './components/MoreLink.astro';
import NetflixFlag from './components/NetflixFlag.astro';
import OdyseeVideo from './components/OdyseeVideo.astro';
import OrderedList from './components/OrderedList.astro';
import PrimeVideoFlag from './components/PrimeVideoFlag.astro';
import ProductLink from './components/ProductLink.astro';
import ProjectIntro from './components/ProjectIntro.astro';
import Pullquote from './components/Pullquote.astro';
import Ruby from './components/Ruby.astro';
import Spotify from './components/Spotify.astro';
import Subheadline from './components/Subheadline.astro';
import Subsubheadline from './components/Subsubheadline.astro';
import Text from './components/Text.astro';
import TextLink from './components/TextLink.astro';
import ThemeBox from './components/ThemeBox.astro';
import Title from './components/Title.astro';
import UnorderedList from './components/UnorderedList.astro';
import Verse from './components/Verse.astro';

export const mapping = {
	a: TextLink,
	ProductLink,
	AmazonBook,
	AppleTVFlag,
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
	PrimeVideoFlag,
	ProjectIntro,
	Pullquote,
	Ruby,
	Spotify,
	ThemeBox,
	ul: UnorderedList,
	Verse,
	YouTube,
};

// Mapping for RSS feed to reduce the size of the feed
export const rssMapping = {
	AmazonBook,
	AppleTVFlag,
	Banner,
	Blockquote,
	Book,
	Bookshelf,
	ColorStack,
	ColorSwatch,
	DisplayBox,
	DownloadLink,
	EmailLink,
	Figure,
	Flag,
	Image,
	MarkdownImage,
	MoreLink,
	NetflixFlag,
	OdyseeVideo,
	PrimeVideoFlag,
	ProductLink,
	ProjectIntro,
	Pullquote,
	Ruby,
	Spotify,
	ThemeBox,
	Verse,
	YouTube,
};
