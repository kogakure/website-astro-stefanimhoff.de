/** @vitest-environment happy-dom */

import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { axe } from '@/test/a11y';

import { AltTextTable } from './AltTextTable';
import { BreakpointTable } from './BreakpointTable';
import { ColorRamp } from './ColorRamp';
import { ComponentShowcase } from './ComponentShowcase';
import { ContrastBadge } from './ContrastBadge';
import { ContrastMatrix } from './ContrastMatrix';
import { DurationBar } from './DurationBar';
import { EasingComparison } from './EasingComparison';
import { EasingCurvePlot } from './EasingCurvePlot';
import { FocusRingDemo } from './FocusRingDemo';
import { GridOverlay } from './GridOverlay';
import { IconGrid } from './IconGrid';
import { ItalicComparison } from './ItalicComparison';
import { JapaneseSpecimen } from './JapaneseSpecimen';
import { LogoDontList } from './LogoDontList';
import { LogoSizeStrip } from './LogoSizeStrip';
import { LogoSpecimen } from './LogoSpecimen';
import { MotionDemo } from './MotionDemo';
import { PhosphorNote } from './PhosphorNote';
import { PrincipleCard } from './PrincipleCard';
import { PrintSpec } from './PrintSpec';
import { RatioBar } from './RatioBar';
import { ReducedMotionDemo } from './ReducedMotionDemo';
import { SpacingPicker } from './SpacingPicker';
import { SpacingScale } from './SpacingScale';
import { TouchTargetOverlay } from './TouchTargetOverlay';
import { TypeScale } from './TypeScale';
import { TypeSpecimen } from './TypeSpecimen';

describe('design-system components — axe', () => {
	it('AltTextTable has no a11y violations', async () => {
		const { container } = render(<AltTextTable />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('BreakpointTable has no a11y violations', async () => {
		const { container } = render(<BreakpointTable />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ColorRamp has no a11y violations', async () => {
		const { container } = render(<ColorRamp />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ComponentShowcase has no a11y violations', async () => {
		const { container } = render(
			<ComponentShowcase
				name="Badge"
				importPath="@/components/ui/Badge"
				description="Small label element."
				props={[
					{
						name: 'variant',
						type: 'string',
						default: 'default',
						description: 'Visual style',
					},
				]}
			>
				<span>Demo content</span>
			</ComponentShowcase>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ContrastBadge has no a11y violations', async () => {
		const { container } = render(<ContrastBadge fg="#900B20" bg="#E6E6E6" />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ContrastMatrix has no a11y violations', async () => {
		const { container } = render(<ContrastMatrix />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('DurationBar has no a11y violations', async () => {
		const { container } = render(<DurationBar />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('EasingComparison has no a11y violations', async () => {
		const { container } = render(<EasingComparison />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('EasingCurvePlot has no a11y violations', async () => {
		const { container } = render(
			<EasingCurvePlot
				name="Enter"
				p1x={0}
				p1y={0}
				p2x={0.38}
				p2y={0.9}
				role="Elements arriving"
				cssVar="--ease-enter"
			/>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('FocusRingDemo has no a11y violations', async () => {
		const { container } = render(<FocusRingDemo />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('GridOverlay has no a11y violations', async () => {
		const { container } = render(<GridOverlay />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('IconGrid has no a11y violations', async () => {
		const { container } = render(<IconGrid />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ItalicComparison has no a11y violations', async () => {
		const { container } = render(<ItalicComparison />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('JapaneseSpecimen has no a11y violations', async () => {
		const { container } = render(<JapaneseSpecimen />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('LogoDontList has no a11y violations', async () => {
		const { container } = render(<LogoDontList />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('LogoSizeStrip has no a11y violations', async () => {
		const { container } = render(<LogoSizeStrip />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('LogoSpecimen has no a11y violations', async () => {
		const { container } = render(<LogoSpecimen />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('MotionDemo has no a11y violations', async () => {
		const { container } = render(<MotionDemo />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('PhosphorNote has no a11y violations', async () => {
		const { container } = render(<PhosphorNote />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('PrincipleCard has no a11y violations', async () => {
		const { container } = render(
			<PrincipleCard
				kanji="間"
				romaji="Ma"
				japanese="間"
				gloss="The space between"
				principle="Seijaku"
			/>
		);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('PrintSpec has no a11y violations', async () => {
		const { container } = render(<PrintSpec />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('RatioBar has no a11y violations', async () => {
		const { container } = render(<RatioBar />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('ReducedMotionDemo has no a11y violations', async () => {
		const { container } = render(<ReducedMotionDemo />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('SpacingPicker has no a11y violations', async () => {
		const { container } = render(<SpacingPicker />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('SpacingScale has no a11y violations', async () => {
		const { container } = render(<SpacingScale />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('TouchTargetOverlay has no a11y violations', async () => {
		const { container } = render(<TouchTargetOverlay />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('TypeScale has no a11y violations', async () => {
		const { container } = render(<TypeScale />);
		expect(await axe(container)).toHaveNoViolations();
	});

	it('TypeSpecimen has no a11y violations', async () => {
		const { container } = render(
			<TypeSpecimen
				token="text-8"
				font="display"
				role="Blog title"
				size="72px"
				lineHeight="1.0"
				tracking="-15%"
				sampleText="The quiet path"
			/>
		);
		expect(await axe(container)).toHaveNoViolations();
	});
});
