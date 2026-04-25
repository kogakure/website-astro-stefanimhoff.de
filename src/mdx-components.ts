import AmazonBook from './components/content/AmazonBook';
import AppleTVFlag from './components/content/AppleTVFlag';
import Banner from './components/content/Banner';
import Blockquote from './components/content/Blockquote';
import Book from './components/content/Book';
import Bookshelf from './components/content/Bookshelf';
import ColorStack from './components/content/ColorStack';
import ColorSwatch from './components/content/ColorSwatch';
import DisplayBox from './components/content/DisplayBox';
import DownloadLink from './components/content/DownloadLink';
import EmailLink from './components/content/EmailLink';
import Figure from './components/content/Figure';
import Image from './components/content/Image';
import InlineCode from './components/content/InlineCode';
import MarkdownImage from './components/content/MarkdownImage';
import NetflixFlag from './components/content/NetflixFlag';
import PrimeVideoFlag from './components/content/PrimeVideoFlag';
import ProductLink from './components/content/ProductLink';
import ProjectIntro from './components/content/ProjectIntro';
import Pullquote from './components/content/Pullquote';
import Ruby from './components/content/Ruby';
import Spotify from './components/content/Spotify';
import ThemeBox from './components/content/ThemeBox';
import Verse from './components/content/Verse';
import YouTube from './components/content/YouTube';
import Divider from './components/ui/Divider';
import Flag from './components/ui/Flag';
import Headline from './components/ui/Headline';
import ListItem from './components/ui/ListItem';
import MoreLink from './components/ui/MoreLink';
import OrderedList from './components/ui/OrderedList';
import Subheadline from './components/ui/Subheadline';
import Subsubheadline from './components/ui/Subsubheadline';
import Text from './components/ui/Text';
import TextLink from './components/ui/TextLink';
import Title from './components/ui/Title';
import UnorderedList from './components/ui/UnorderedList';

export const mapping = {
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
	MoreLink,
	NetflixFlag,
	PrimeVideoFlag,
	ProductLink,
	ProjectIntro,
	Pullquote,
	Ruby,
	Spotify,
	ThemeBox,
	Verse,
	YouTube,
	a: TextLink,
	code: InlineCode,
	blockquote: Blockquote,
	h1: Title,
	h2: Headline,
	h3: Subheadline,
	h4: Subsubheadline,
	h5: Subsubheadline,
	h6: Subsubheadline,
	hr: Divider,
	img: MarkdownImage,
	li: ListItem,
	ol: OrderedList,
	p: Text,
	ul: UnorderedList,
};
