import AmazonBook from './components/AmazonBook';
import AppleTVFlag from './components/AppleTVFlag';
import Banner from './components/Banner';
import Blockquote from './components/Blockquote';
import Book from './components/Book';
import Bookshelf from './components/Bookshelf';
import ColorStack from './components/ColorStack';
import ColorSwatch from './components/ColorSwatch';
import DisplayBox from './components/DisplayBox';
import Divider from './components/Divider';
import DownloadLink from './components/DownloadLink';
import EmailLink from './components/EmailLink';
import Figure from './components/Figure';
import Flag from './components/Flag';
import Headline from './components/Headline';
import ListItem from './components/ListItem';
import MarkdownImage from './components/MarkdownImage';
import MoreLink from './components/MoreLink';
import NetflixFlag from './components/NetflixFlag';
import OrderedList from './components/OrderedList';
import PrimeVideoFlag from './components/PrimeVideoFlag';
import ProductLink from './components/ProductLink';
import ProjectIntro from './components/ProjectIntro';
import Pullquote from './components/Pullquote';
import Ruby from './components/Ruby';
import Spotify from './components/Spotify';
import Subheadline from './components/Subheadline';
import Subsubheadline from './components/Subsubheadline';
import Text from './components/Text';
import TextLink from './components/TextLink';
import ThemeBox from './components/ThemeBox';
import Title from './components/Title';
import UnorderedList from './components/UnorderedList';
import Verse from './components/Verse';
import YouTube from './components/YouTube';

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
