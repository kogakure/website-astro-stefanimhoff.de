/** @vitest-environment happy-dom */

import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

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

describe('UI typography and inline components', () => {
	it('renders semantic text components with defaults and custom tags', () => {
		render(
			<>
				<Text data-testid="text">Body copy</Text>
				<Text as="span">Inline copy</Text>
				<Title data-testid="title">Page title</Title>
				<Headline as="h3">Section title</Headline>
				<Subheadline>Sub title</Subheadline>
				<Subsubheadline>Small title</Subsubheadline>
				<SectionLabel as="p">Section label</SectionLabel>
				<JapanesePoem as="p">古池や</JapanesePoem>
			</>
		);

		expect(screen.getByTestId('text').tagName).toBe('P');
		expect(screen.getByText('Inline copy').tagName).toBe('SPAN');
		expect(screen.getByTestId('title').tagName).toBe('H1');
		expect(
			screen.getByRole('heading', { level: 3, name: 'Section title' })
		).toBeInTheDocument();
		expect(screen.getByRole('heading', { level: 3, name: 'Sub title' })).toBeInTheDocument();
		expect(screen.getByRole('heading', { level: 4, name: 'Small title' })).toBeInTheDocument();
		expect(screen.getByText('Section label').tagName).toBe('P');
		expect(screen.getByText('古池や')).toHaveClass('font-japanese');
	});

	it('renders inline formatting wrappers and code helpers', () => {
		render(
			<>
				<p>
					<Em>emphasis</Em>
					<Strong>strong</Strong>
					<Marked>mark</Marked>
					<Inserted>insert</Inserted>
					<Strikethrough>strike</Strikethrough>
					<Subscript>sub</Subscript>
					<Superscript>sup</Superscript>
					<LineBreak data-testid="break" />
				</p>
				<CodeBlock>const x = 1;</CodeBlock>
			</>
		);

		expect(screen.getByText('emphasis').tagName).toBe('EM');
		expect(screen.getByText('strong').tagName).toBe('STRONG');
		expect(screen.getByText('mark').tagName).toBe('MARK');
		expect(screen.getByText('insert').tagName).toBe('INS');
		expect(screen.getByText('strike').tagName).toBe('DEL');
		expect(screen.getByText('sub').tagName).toBe('SUB');
		expect(screen.getByText('sup').tagName).toBe('SUP');
		expect(screen.getByTestId('break').tagName).toBe('BR');
		expect(screen.getByText('const x = 1;').tagName).toBe('PRE');
	});
});

describe('UI link and action components', () => {
	it('distinguishes internal and external links', () => {
		render(
			<>
				<Link href="/about/">About</Link>
				<Link href="https://example.com">External</Link>
				<TextLink href="/writing/">Writing</TextLink>
				<EssayLink href="/essay/">Essay</EssayLink>
				<MoreLink href="/more/" text="More" />
			</>
		);

		expect(screen.getByRole('link', { name: 'About' })).not.toHaveAttribute('target');
		expect(screen.getByRole('link', { name: 'External' })).toHaveAttribute('target', '_blank');
		expect(screen.getByRole('link', { name: 'External' })).toHaveAttribute(
			'rel',
			'nofollow noopener noreferrer'
		);
		expect(screen.getByRole('link', { name: 'Writing' })).toHaveAttribute('href', '/writing/');
		expect(screen.getByRole('link', { name: 'Essay' })).toHaveAttribute('href', '/essay/');
		expect(screen.getByRole('link', { name: /More/ })).toHaveAttribute('href', '/more/');
	});

	it('renders buttons and anchors for filter tags', () => {
		const onClick = vi.fn();
		render(
			<>
				<Tag active onClick={onClick}>
					React
				</Tag>
				<Tag href="/tags/css/">CSS</Tag>
			</>
		);

		fireEvent.click(screen.getByRole('button', { name: 'React' }));
		expect(onClick).toHaveBeenCalledTimes(1);
		expect(screen.getByRole('button', { name: 'React' })).toHaveAttribute(
			'aria-pressed',
			'true'
		);
		expect(screen.getByRole('link', { name: 'CSS' })).toHaveAttribute('href', '/tags/css/');
	});

	it('shows clear-filter state only when filters are active', () => {
		const onClick = vi.fn();
		const { rerender } = render(<ClearFiltersButton count={0} onClick={onClick} />);
		expect(screen.getByRole('button', { name: 'Clear all active tag filters' })).toHaveClass(
			'opacity-0'
		);

		rerender(<ClearFiltersButton count={2} onClick={onClick} />);
		const button = screen.getByRole('button', { name: 'Clear all active tag filters' });
		expect(button).toHaveTextContent('Clear 2 filters');
		fireEvent.click(button);
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('renders badges, flags, checkboxes, switch, and tooltip primitives', () => {
		render(
			<TooltipProvider>
				<Badge variant="favorite">Favorite</Badge>
				<Flag label="Draft" />
				<Flag href="/flag/" label="Linked flag" />
				<TaskCheckbox aria-label="Done" checked readOnly />
				<Switch aria-label="Theme" />
				<Tooltip>
					<TooltipTrigger>Hover me</TooltipTrigger>
					<TooltipContent>Tooltip text</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		);

		expect(screen.getByText('Favorite')).toHaveClass('bg-beni-pale');
		expect(screen.getByText('Draft')).toHaveClass('rounded-1');
		expect(screen.getByRole('link', { name: 'Linked flag' })).toHaveAttribute('href', '/flag/');
		expect(screen.getByRole('checkbox', { name: 'Done' })).toBeChecked();
		expect(screen.getByRole('switch', { name: 'Theme' })).toBeInTheDocument();
		expect(screen.getByText('Hover me')).toBeInTheDocument();
	});
});

describe('UI layout components', () => {
	it('renders list, table, divider, and footnote section wrappers', () => {
		render(
			<>
				<UnorderedList>
					<ListItem>One</ListItem>
				</UnorderedList>
				<OrderedList>
					<ListItem>First</ListItem>
				</OrderedList>
				<Table>
					<TableHead>
						<TableRow>
							<TableHeaderCell>Head</TableHeaderCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>Cell</TableCell>
						</TableRow>
					</TableBody>
				</Table>
				<Divider data-testid="divider" />
				<FootnoteSection>Notes</FootnoteSection>
			</>
		);

		expect(screen.getByText('One').tagName).toBe('LI');
		expect(screen.getByText('First').closest('ol')).toBeInTheDocument();
		expect(screen.getByRole('columnheader', { name: 'Head' })).toBeInTheDocument();
		expect(screen.getByRole('cell', { name: 'Cell' })).toBeInTheDocument();
		expect(screen.getByTestId('divider').tagName).toBe('HR');
		expect(screen.getByText('Notes').tagName).toBe('SECTION');
	});

	it('renders page sections with section labels and content', () => {
		render(
			<>
				<PageSection label="Journal">Entries</PageSection>
				<HomePageSection label="Home">Intro</HomePageSection>
			</>
		);

		expect(screen.getByText('Journal')).toBeInTheDocument();
		expect(screen.getByText('Entries')).toBeInTheDocument();
		expect(screen.getByText('Home')).toBeInTheDocument();
		expect(screen.getByText('Intro')).toBeInTheDocument();
	});

	it('formats haiku and quote attribution content', () => {
		render(
			<>
				<HaikuItem de={'erste zeile\nzweite zeile'} en={'first line\nsecond line'} />
				<QuoteAttribution author="Ada" source="Notes" sourceUrl="/notes/" />
			</>
		);

		expect(screen.getByText('erste zeile / zweite zeile')).toBeInTheDocument();
		expect(screen.getByText('first line / second line')).toBeInTheDocument();
		expect(screen.getByText('Ada')).toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'Notes' })).toHaveAttribute('href', '/notes/');
	});
});
