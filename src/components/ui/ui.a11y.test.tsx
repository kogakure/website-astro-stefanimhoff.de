/** @vitest-environment happy-dom */

import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { axe } from '@/test/a11y';

import { Badge } from './Badge';
import { ClearFiltersButton } from './ClearFiltersButton';
import { CodeBlock } from './CodeBlock';
import { Divider } from './Divider';
import { Em } from './Em';
import { EssayLink } from './EssayLink';
import { Flag } from './Flag';
import { FootnoteSection } from './FootnoteSection';
import { HaikuItem } from './HaikuItem';
import { Headline } from './Headline';
import { HomePageSection } from './HomepagePageSection';
import { Inserted } from './Inserted';
import { JapanesePoem } from './JapanesePoem';
import { LineBreak } from './LineBreak';
import { Link } from './Link';
import { ListItem } from './ListItem';
import { Marked } from './Marked';
import { MoreLink } from './MoreLink';
import { OrderedList } from './OrderedList';
import { PageSection } from './PageSection';
import { QuoteAttribution } from './QuoteAttribution';
import { SectionLabel } from './SectionLabel';
import { Strikethrough } from './Strikethrough';
import { Strong } from './Strong';
import { Subheadline } from './Subheadline';
import { Subscript } from './Subscript';
import { Subsubheadline } from './Subsubheadline';
import { Superscript } from './Superscript';
import { Switch } from './switch';
import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableHead } from './TableHead';
import { TableHeaderCell } from './TableHeaderCell';
import { TableRow } from './TableRow';
import { Tag } from './Tag';
import { TaskCheckbox } from './TaskCheckbox';
import { Text } from './Text';
import { TextLink } from './TextLink';
import { Title } from './Title';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './tooltip';
import { UnorderedList } from './UnorderedList';

describe('ui components — axe', () => {
	it('Badge has no a11y violations', async () => {
		const { container } = render(<Badge>New</Badge>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ClearFiltersButton has no a11y violations', async () => {
		const { container } = render(<ClearFiltersButton count={2} onClick={vi.fn()} />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('CodeBlock has no a11y violations', async () => {
		const { container } = render(<CodeBlock>const x = 1;</CodeBlock>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Divider has no a11y violations', async () => {
		const { container } = render(<Divider />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Em has no a11y violations', async () => {
		const { container } = render(
			<p>
				<Em>emphasis</Em>
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('EssayLink has no a11y violations', async () => {
		const { container } = render(<EssayLink href="/essay/">Read essay</EssayLink>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Flag has no a11y violations', async () => {
		const { container } = render(<Flag label="Draft" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Flag (linked) has no a11y violations', async () => {
		const { container } = render(<Flag href="/drafts/" label="Drafts" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('FootnoteSection has no a11y violations', async () => {
		const { container } = render(<FootnoteSection>Notes</FootnoteSection>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('HaikuItem has no a11y violations', async () => {
		const { container } = render(
			<ul>
				<HaikuItem
					de={'alte stille\nein frosch springt ins wasser'}
					en={'old silence\na frog jumps into water'}
				/>
			</ul>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Headline has no a11y violations', async () => {
		const { container } = render(<Headline>Section heading</Headline>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('HomePageSection has no a11y violations', async () => {
		const { container } = render(<HomePageSection label="Writing">Content</HomePageSection>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Inserted has no a11y violations', async () => {
		const { container } = render(
			<p>
				<Inserted>inserted text</Inserted>
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('JapanesePoem has no a11y violations', async () => {
		const { container } = render(
			<p>
				<JapanesePoem>古池や</JapanesePoem>
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('LineBreak has no a11y violations', async () => {
		const { container } = render(
			<p>
				line one
				<LineBreak />
				line two
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Link (internal) has no a11y violations', async () => {
		const { container } = render(<Link href="/about/">About</Link>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Link (external) has no a11y violations', async () => {
		const { container } = render(<Link href="https://example.com">Example</Link>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ListItem has no a11y violations', async () => {
		const { container } = render(
			<ul>
				<ListItem>List item</ListItem>
			</ul>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Marked has no a11y violations', async () => {
		const { container } = render(
			<p>
				<Marked>highlighted</Marked>
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('MoreLink has no a11y violations', async () => {
		const { container } = render(<MoreLink href="/writing/" text="All writing" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('OrderedList has no a11y violations', async () => {
		const { container } = render(
			<OrderedList>
				<ListItem>First</ListItem>
				<ListItem>Second</ListItem>
			</OrderedList>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('PageSection has no a11y violations', async () => {
		const { container } = render(<PageSection label="Journal">Entries</PageSection>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('QuoteAttribution has no a11y violations', async () => {
		const { container } = render(
			<blockquote>
				<p>A great thought.</p>
				<QuoteAttribution author="Marcus Aurelius" />
			</blockquote>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('SectionLabel has no a11y violations', async () => {
		const { container } = render(<SectionLabel as="p">Category</SectionLabel>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Strikethrough has no a11y violations', async () => {
		const { container } = render(
			<p>
				<Strikethrough>removed</Strikethrough>
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Strong has no a11y violations', async () => {
		const { container } = render(
			<p>
				<Strong>important</Strong>
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Subheadline has no a11y violations', async () => {
		const { container } = render(<Subheadline>Sub heading</Subheadline>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Subscript has no a11y violations', async () => {
		const { container } = render(
			<p>
				H<Subscript>2</Subscript>O
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Subsubheadline has no a11y violations', async () => {
		const { container } = render(<Subsubheadline>Minor heading</Subsubheadline>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Superscript has no a11y violations', async () => {
		const { container } = render(
			<p>
				reference<Superscript>1</Superscript>
			</p>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Switch has no a11y violations', async () => {
		const { container } = render(<Switch aria-label="Enable notifications" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Table (full structure) has no a11y violations', async () => {
		const { container } = render(
			<Table>
				<TableHead>
					<TableRow>
						<TableHeaderCell>Name</TableHeaderCell>
						<TableHeaderCell>Value</TableHeaderCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell>Beni</TableCell>
						<TableCell>#900B20</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Tag (link) has no a11y violations', async () => {
		const { container } = render(<Tag href="/tags/css/">CSS</Tag>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Tag (button) has no a11y violations', async () => {
		const { container } = render(<Tag onClick={vi.fn()}>React</Tag>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('TaskCheckbox has no a11y violations', async () => {
		const { container } = render(<TaskCheckbox aria-label="Task complete" checked readOnly />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Text has no a11y violations', async () => {
		const { container } = render(<Text>Body paragraph.</Text>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('TextLink has no a11y violations', async () => {
		const { container } = render(<TextLink href="/writing/">Writing</TextLink>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Title has no a11y violations', async () => {
		const { container } = render(<Title>Page title</Title>);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Tooltip has no a11y violations', async () => {
		const { container } = render(
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent>Tooltip text</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('UnorderedList has no a11y violations', async () => {
		const { container } = render(
			<UnorderedList>
				<ListItem>One</ListItem>
				<ListItem>Two</ListItem>
			</UnorderedList>
		);
		expect(await axe(container)).toHaveNoViolations();
	});
});
