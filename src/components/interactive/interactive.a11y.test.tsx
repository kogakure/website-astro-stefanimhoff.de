/** @vitest-environment happy-dom */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { axe } from '@/test/a11y';

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

const chartData = {
	labels: ['Jan', 'Feb', 'Mar'],
	datasets: [{ data: [10, 20, 15], label: 'Count' }],
};

const roadmapMilestone = {
	kind: 'book' as const,
	title: 'Meditations',
	contributor: 'Marcus Aurelius',
	href: '/writing/meditations/',
	note: 'Foundational Stoic text.',
};

const seriesSteps = [
	{ id: 'part-1', title: 'Introduction' },
	{ id: 'part-2', title: 'Core Concepts' },
	{ id: 'part-3', title: 'Conclusion' },
];

const tocHeadings = [
	{ id: 'intro', text: 'Introduction' },
	{ id: 'body', text: 'Main content' },
	{ id: 'summary', text: 'Summary' },
];

const writingPosts = [{ slug: 'test-post', title: 'Test Post', tags: ['design'], year: 2024 }];

describe('interactive components — axe', () => {
	it('BarChart has no a11y violations', async () => {
		const { container } = render(<BarChart data={chartData} />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('CommandMenu has no a11y violations', async () => {
		const { container } = render(<CommandMenu />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('DoughnutChart has no a11y violations', async () => {
		const { container } = render(<DoughnutChart data={chartData} />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('HoverPreview has no a11y violations', async () => {
		const { container } = render(<HoverPreview />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('LightboxRoot has no a11y violations', async () => {
		const { container } = render(<LightboxRoot />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Marquee has no a11y violations', async () => {
		const { container } = render(
			<Marquee>
				<span>間</span>
				<span>Ma</span>
			</Marquee>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('Roadmap has no a11y violations', async () => {
		const { container } = render(
			<Roadmap
				milestones={[roadmapMilestone, { ...roadmapMilestone, href: '/writing/other/' }]}
			/>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('RoadmapMilestone has no a11y violations', async () => {
		const { container } = render(
			<ol>
				<RoadmapMilestone {...roadmapMilestone} index={0} isLast={true} />
			</ol>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('SeriesStepper has no a11y violations', async () => {
		const { container } = render(
			<SeriesStepper steps={seriesSteps} currentId="part-2" seriesName="Ma Design System" />
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('TableOfContents has no a11y violations', async () => {
		const { container } = render(<TableOfContents headings={tocHeadings} />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('WritingPage has no a11y violations', async () => {
		const { container } = render(
			<WritingPage allTags={['design', 'css']} posts={writingPosts} />
		);
		expect(await axe(container)).toHaveNoViolations();
	});
});
