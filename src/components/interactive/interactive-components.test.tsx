/** @vitest-environment happy-dom */

import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('motion/react', async () => {
	const React = await import('react');
	const motionOnlyProps = new Set([
		'animate',
		'exit',
		'initial',
		'layout',
		'layoutId',
		'transition',
		'whileHover',
		'whileTap',
	]);
	const motionComponent = (tag: string) =>
		React.forwardRef<HTMLElement, Record<string, unknown> & { children?: React.ReactNode }>(
			({ children, ...props }, ref) => {
				const domProps = Object.fromEntries(
					Object.entries(props).filter(([key]) => !motionOnlyProps.has(key))
				);
				return React.createElement(tag, { ...domProps, ref }, children as React.ReactNode);
			}
		);

	return {
		AnimatePresence: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
		LazyMotion: ({ children }: { children?: React.ReactNode }) => <>{children}</>,
		domAnimation: {},
		domMax: {},
		m: new Proxy({}, { get: (_target, tag: string) => motionComponent(tag) }),
		useReducedMotion: () => false,
	};
});

vi.mock('recharts', async () => {
	const React = await import('react');
	const samplePayload = [
		{ name: 'Sample', value: 42, color: '#900B20', payload: { fill: '#900B20' } },
	];
	const make =
		(name: string, tag = 'div') =>
		({ children, ...props }: Record<string, unknown> & { children?: React.ReactNode }) => {
			const serializableProps = Object.fromEntries(
				Object.entries(props).filter(
					([key, value]) => key !== 'content' && typeof value !== 'function'
				)
			);
			let extra: React.ReactNode = null;
			if (name === 'Tooltip') {
				if (typeof props.formatter === 'function') {
					(props.formatter as (value: number) => unknown)(1234);
				}
				if (React.isValidElement(props.content)) {
					extra = React.cloneElement(
						props.content as React.ReactElement<Record<string, unknown>>,
						{ active: true, payload: samplePayload }
					);
				}
			}
			if (name === 'Legend' && typeof props.content === 'function') {
				extra = (
					props.content as (props: { payload: typeof samplePayload }) => React.ReactNode
				)({
					payload: samplePayload,
				});
			}
			return React.createElement(
				tag,
				{
					'data-testid': `recharts-${name}`,
					'data-props': JSON.stringify(serializableProps),
				},
				children,
				extra
			);
		};

	return {
		Bar: make('Bar'),
		BarChart: make('BarChart'),
		CartesianGrid: make('CartesianGrid'),
		Legend: make('Legend'),
		Pie: make('Pie'),
		PieChart: make('PieChart'),
		ResponsiveContainer: make('ResponsiveContainer'),
		Tooltip: make('Tooltip'),
		XAxis: make('XAxis'),
		YAxis: make('YAxis'),
	};
});

vi.mock('cmdk', async () => {
	const React = await import('react');
	type Props = Record<string, unknown> & { children?: React.ReactNode };
	const Command: any = ({ children, loop, shouldFilter, ...props }: Props) =>
		React.createElement('div', { ...props, role: 'listbox' }, children);
	Command.Input = React.forwardRef<HTMLInputElement, Props>(
		({ onValueChange, value, ...props }, ref) =>
			React.createElement('input', {
				...props,
				ref,
				value: (value as string) ?? '',
				onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
					(onValueChange as ((value: string) => void) | undefined)?.(event.target.value),
			})
	);
	Command.List = ({ children, ...props }: Props) => React.createElement('div', props, children);
	Command.Item = ({ children, onSelect, value, ...props }: Props) =>
		React.createElement(
			'button',
			{
				...props,
				type: 'button',
				onClick: () => (onSelect as ((value?: unknown) => void) | undefined)?.(value),
			},
			children
		);
	Command.Group = ({ children, heading, ...props }: Props) =>
		React.createElement(
			'section',
			{ ...props, 'aria-label': heading as string | undefined },
			heading ? React.createElement('div', null, heading as string) : null,
			children
		);
	Command.Empty = ({ children, ...props }: Props) => React.createElement('div', props, children);
	return { Command };
});

import { BarChart } from './BarChart';
import { CommandMenu } from './CommandMenu';
import { DoughnutChart } from './DoughnutChart';
import { HoverPreview } from './HoverPreview';
import { LightboxRoot } from './LightboxRoot';
import { Marquee } from './Marquee';
import { Roadmap } from './Roadmap';
import { RoadmapMilestone } from './RoadmapMilestone';
import { SeriesStepper } from './SeriesStepper';
import { TableOfContents } from './TableOfContents';
import { WritingPage } from './WritingPage';

describe('chart components', () => {
	it('maps chart.js-like data into recharts bar data', () => {
		render(<BarChart data={{ labels: ['A', 'B'], datasets: [{ data: [10, 20] }] }} />);

		const props = JSON.parse(screen.getByTestId('recharts-BarChart').dataset.props ?? '{}');
		expect(props.data).toEqual([
			{ name: 'A', value: 10, fill: 'var(--color-beni)' },
			{ name: 'B', value: 20, fill: 'var(--color-nezumi)' },
		]);
	});

	it('maps chart.js-like data into recharts doughnut data', () => {
		render(<DoughnutChart data={{ labels: ['A', 'B'], datasets: [{ data: [5, 15] }] }} />);

		const props = JSON.parse(screen.getByTestId('recharts-Pie').dataset.props ?? '{}');
		expect(props.data).toEqual([
			{ name: 'A', value: 5, fill: 'var(--color-beni)' },
			{ name: 'B', value: 15, fill: 'var(--color-nezumi)' },
		]);
		expect(props.innerRadius).toBe('55%');
	});
});

describe('roadmap components', () => {
	const milestone = {
		contributor: 'Author',
		featured: true,
		href: '/writing/item/',
		kind: 'book' as const,
		language: 'en',
		note: 'Read next',
		title: 'Roadmap item',
	};

	it('renders roadmap milestones and hides empty roadmaps', () => {
		const { rerender } = render(<Roadmap milestones={[milestone]} />);
		expect(screen.getByRole('link', { name: '01. Roadmap item' })).toHaveAttribute(
			'href',
			'/writing/item/'
		);
		expect(screen.getByText('Book')).toBeInTheDocument();
		expect(screen.getByText('EN')).toBeInTheDocument();
		expect(screen.getByText('Favorite')).toBeInTheDocument();

		rerender(<Roadmap milestones={[]} />);
		expect(screen.queryByRole('list')).not.toBeInTheDocument();
	});

	it('renders a standalone roadmap milestone with cover art', () => {
		const { container } = render(
			<RoadmapMilestone {...milestone} cover="/cover.jpg" index={1} isLast />
		);
		expect(screen.getByRole('link', { name: '02. Roadmap item' })).toHaveAttribute(
			'href',
			'/writing/item/'
		);
		expect(container.querySelector('img')).toHaveAttribute('src', '/cover.jpg');
	});
});

describe('navigation helpers', () => {
	it('toggles and scrolls table-of-contents entries', () => {
		const scrollIntoView = vi.fn();
		Element.prototype.scrollIntoView = scrollIntoView;
		document.body.innerHTML = '<h2 id="intro">Intro</h2><h2 id="details">Details</h2>';
		render(
			<TableOfContents
				headings={[
					{ id: 'intro', text: 'Intro' },
					{ id: 'details', text: 'Details' },
				]}
			/>
		);

		fireEvent.click(screen.getByRole('button', { name: /Table of Contents/ }));
		fireEvent.click(screen.getByRole('link', { name: 'Details' }));

		expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' });
		expect(window.location.hash).toBe('#details');
	});

	it('returns nothing for table-of-contents and series edge cases', () => {
		const { container, rerender } = render(
			<TableOfContents headings={[{ id: 'intro', text: 'Intro' }]} />
		);
		expect(container.firstChild).toBeNull();

		rerender(<SeriesStepper steps={[{ id: 'one', title: 'One' }]} currentId="one" />);
		expect(container.firstChild).toBeNull();

		rerender(
			<SeriesStepper
				steps={[
					{ id: 'one', title: 'One' },
					{ id: 'two', title: 'Two' },
				]}
				currentId="missing"
			/>
		);
		expect(container.firstChild).toBeNull();
	});

	it('toggles series navigation and links non-current steps', () => {
		render(
			<SeriesStepper
				seriesName="Test series"
				currentId="two"
				steps={[
					{ id: 'one', title: 'One', subtitle: 'Past' },
					{ id: 'two', title: 'Two' },
					{ id: 'three', title: 'Three' },
				]}
			/>
		);

		expect(screen.getByRole('navigation', { name: 'Series: Test series' })).toBeInTheDocument();
		fireEvent.click(screen.getByRole('button', { name: /Series/ }));
		expect(screen.getByText('Two').closest('li')).toHaveAttribute('aria-current', 'page');
		expect(screen.getByRole('link', { name: 'One' })).toHaveAttribute('href', '/writing/one/');
		expect(screen.getByRole('link', { name: 'Three' })).toHaveAttribute(
			'href',
			'/writing/three/'
		);
	});
});

describe('media interaction roots', () => {
	beforeEach(() => {
		document.body.innerHTML = '';
	});

	it('duplicates marquee children for continuous scrolling', () => {
		render(
			<Marquee>
				<span>Loop item</span>
			</Marquee>
		);
		const items = screen.getAllByText('Loop item');
		expect(items).toHaveLength(2);
		expect(items[1].closest('[aria-hidden="true"]')).toBeInTheDocument();
	});

	it('opens and closes images delegated to the lightbox root', async () => {
		render(<LightboxRoot />);
		const image = document.createElement('img');
		image.src = 'https://example.com/photo.jpg';
		image.alt = 'A photo';
		image.dataset.lightbox = 'true';
		Object.defineProperty(image, 'naturalWidth', { value: 1200 });
		Object.defineProperty(image, 'naturalHeight', { value: 800 });
		image.getBoundingClientRect = () => ({
			bottom: 110,
			height: 100,
			left: 10,
			right: 160,
			top: 10,
			width: 150,
			x: 10,
			y: 10,
			toJSON: () => {},
		});
		document.body.appendChild(image);

		fireEvent.click(image);
		expect(await screen.findByRole('dialog', { name: 'Image lightbox' })).toBeInTheDocument();
		expect(screen.getAllByRole('img', { name: 'A photo' })[0]).toHaveAttribute(
			'src',
			'https://example.com/photo.jpg'
		);

		fireEvent.click(screen.getByRole('button', { name: 'Close lightbox' }));
		await waitFor(() =>
			expect(screen.queryByRole('dialog', { name: 'Image lightbox' })).not.toBeInTheDocument()
		);
	});

	it('shows, moves, hides, and prepares hover previews for view transitions', () => {
		const { container } = render(<HoverPreview />);
		const anchor = document.createElement('a');
		anchor.dataset.hoverPreview = '/preview.jpg';
		document.body.appendChild(anchor);

		fireEvent.mouseMove(document, { clientX: 20, clientY: 30 });
		fireEvent.mouseOver(anchor);

		const preview = container.querySelector('img')!;
		expect(preview).toHaveAttribute('src', '/preview.jpg');
		expect(preview).toHaveClass('opacity-100');

		preview.getBoundingClientRect = () => ({
			bottom: 120,
			height: 90,
			left: 20,
			right: 180,
			top: 30,
			width: 160,
			x: 20,
			y: 30,
			toJSON: () => {},
		});
		document.dispatchEvent(new Event('astro:before-preparation'));
		const clone = Array.from(document.body.querySelectorAll('img')).find(
			(img) => img !== preview && img.getAttribute('style')?.includes('post-cover')
		);
		expect(clone).toBeInTheDocument();
		expect(preview).toHaveClass('opacity-0');

		document.dispatchEvent(new Event('astro:page-load'));
		expect(clone).not.toBeInTheDocument();

		fireEvent.mouseOver(anchor);
		fireEvent.mouseOut(anchor);
		expect(preview).toHaveClass('opacity-0');
	});

	it('does not enable hover previews on coarse pointers', () => {
		const matchMedia = vi.spyOn(window, 'matchMedia').mockImplementation(
			(query: string) =>
				({
					matches: query === '(pointer: coarse)',
					media: query,
					onchange: null,
					addEventListener: vi.fn(),
					removeEventListener: vi.fn(),
					addListener: vi.fn(),
					removeListener: vi.fn(),
					dispatchEvent: vi.fn(),
				}) as MediaQueryList
		);
		const { container } = render(<HoverPreview />);
		const anchor = document.createElement('a');
		anchor.dataset.hoverPreview = '/preview.jpg';
		document.body.appendChild(anchor);

		fireEvent.mouseOver(anchor);

		expect(container.querySelector('img')).not.toHaveAttribute('src');
		matchMedia.mockRestore();
	});
});

describe('writing page filters', () => {
	const posts = [
		{ slug: 'a', title: 'Alpha', tags: ['react'], year: 2025, cover: '/a.jpg' },
		{ slug: 'b', title: 'Beta', subtitle: 'Details', tags: ['css'], year: 2024 },
	];

	beforeEach(() => {
		window.history.replaceState({}, '', '/writing/');
		localStorage.clear();
	});

	it('filters posts by tag and clears active filters', () => {
		render(<WritingPage allTags={['react', 'css']} posts={posts} />);

		expect(screen.getByRole('link', { name: 'Alpha' })).toHaveAttribute('href', '/writing/a/');
		expect(screen.getByRole('link', { name: 'Beta: Details' })).toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: 'react' }));
		expect(screen.getByRole('link', { name: 'Alpha' })).toBeInTheDocument();
		expect(screen.queryByRole('link', { name: 'Beta: Details' })).not.toBeInTheDocument();
		expect(new URL(window.location.href).searchParams.get('tag')).toBe('react');

		const clearButton = screen.getByRole('button', { name: 'Clear all active tag filters' });
		expect(clearButton).toHaveTextContent('Clear 1 filter');
		fireEvent.click(clearButton);
		expect(screen.getByRole('link', { name: 'Beta: Details' })).toBeInTheDocument();
		expect(new URL(window.location.href).searchParams.get('tag')).toBeNull();
	});
});

describe('command menu', () => {
	beforeEach(() => {
		document.documentElement.classList.remove('dark');
		localStorage.clear();
		vi.useRealTimers();
	});

	it('opens from a custom event and switches to search results', async () => {
		vi.useFakeTimers();
		render(<CommandMenu />);

		act(() => document.dispatchEvent(new Event('command-menu:open')));
		expect(screen.getByRole('dialog', { name: 'Command menu' })).toBeInTheDocument();
		expect(screen.getByPlaceholderText('Type a command…')).toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: /Search/ }));
		fireEvent.change(screen.getByPlaceholderText('Search the site…'), {
			target: { value: 'minimalism' },
		});
		await act(async () => {
			await vi.advanceTimersByTimeAsync(200);
		});

		expect(screen.getByText('The Art of Minimalism')).toBeInTheDocument();
	});

	it('handles search opener, back button, and Escape key branches', () => {
		render(<CommandMenu />);

		act(() => document.dispatchEvent(new Event('command-menu:open-search')));
		expect(screen.getByPlaceholderText('Search the site…')).toBeInTheDocument();
		expect(screen.getByText('Type to search posts, haiku and work.')).toBeInTheDocument();

		fireEvent.change(screen.getByPlaceholderText('Search the site…'), {
			target: { value: 'missing' },
		});
		fireEvent.keyDown(document, { key: 'Escape' });
		expect(screen.getByPlaceholderText('Search the site…')).toHaveValue('');

		fireEvent.keyDown(document, { key: 'Escape' });
		expect(screen.getByPlaceholderText('Type a command…')).toBeInTheDocument();

		fireEvent.click(screen.getByRole('button', { name: /Search/ }));
		fireEvent.click(screen.getByRole('button', { name: 'Back to navigation' }));
		expect(screen.getByPlaceholderText('Type a command…')).toBeInTheDocument();

		fireEvent.keyDown(document, { key: 'Escape' });
		expect(screen.queryByRole('dialog', { name: 'Command menu' })).not.toBeInTheDocument();
	});

	it('toggles the theme command and closes the menu', () => {
		render(<CommandMenu />);

		act(() => document.dispatchEvent(new Event('command-menu:open')));
		fireEvent.click(screen.getByRole('button', { name: /Switch to dark mode/ }));

		expect(document.documentElement).toHaveClass('dark');
		expect(localStorage.getItem('theme')).toBe('dark');
		expect(screen.queryByRole('dialog', { name: 'Command menu' })).not.toBeInTheDocument();
	});
});
