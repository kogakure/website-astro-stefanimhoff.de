import AmazonBook from './components/content/AmazonBook';
import AppleTVFlag from './components/content/AppleTVFlag';
import Banner from './components/content/Banner';
import Blockquote from './components/content/Blockquote';
import Book from './components/content/Book';
import Bookshelf from './components/content/Bookshelf';
import ColorStack from './components/content/ColorStack';
import ColorSwatch from './components/content/ColorSwatch';
import ColorSwatchMini from './components/content/ColorSwatchMini';
import ColorSwatchPrimary from './components/content/ColorSwatchPrimary';
import DisplayBox from './components/content/DisplayBox';
import DownloadLink from './components/content/DownloadLink';
import EmailLink from './components/content/EmailLink';
import Figure from './components/content/Figure';
import Image from './components/content/Image';
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
import CodeBlock from './components/ui/CodeBlock';
import Divider from './components/ui/Divider';
import Em from './components/ui/Em';
import Flag from './components/ui/Flag';
import FootnoteSection from './components/ui/FootnoteSection';
import Headline from './components/ui/Headline';
import LineBreak from './components/ui/LineBreak';
import ListItem from './components/ui/ListItem';
import MoreLink from './components/ui/MoreLink';
import OrderedList from './components/ui/OrderedList';
import Strikethrough from './components/ui/Strikethrough';
import Strong from './components/ui/Strong';
import Subheadline from './components/ui/Subheadline';
import Subscript from './components/ui/Subscript';
import Subsubheadline from './components/ui/Subsubheadline';
import Superscript from './components/ui/Superscript';
import Table from './components/ui/Table';
import TableBody from './components/ui/TableBody';
import TableCell from './components/ui/TableCell';
import TableHead from './components/ui/TableHead';
import TableHeaderCell from './components/ui/TableHeaderCell';
import TableRow from './components/ui/TableRow';
import TaskCheckbox from './components/ui/TaskCheckbox';
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
	ColorSwatchMini,
	ColorSwatchPrimary,
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
	blockquote: Blockquote,
	br: LineBreak,
	del: Strikethrough,
	em: Em,
	h1: Title,
	h2: Headline,
	h3: Subheadline,
	h4: Subsubheadline,
	h5: Subsubheadline,
	h6: Subsubheadline,
	hr: Divider,
	img: MarkdownImage,
	input: TaskCheckbox,
	li: ListItem,
	ol: OrderedList,
	p: Text,
	pre: CodeBlock,
	section: FootnoteSection,
	strong: Strong,
	sub: Subscript,
	sup: Superscript,
	table: Table,
	tbody: TableBody,
	td: TableCell,
	th: TableHeaderCell,
	thead: TableHead,
	tr: TableRow,
	ul: UnorderedList,
};
