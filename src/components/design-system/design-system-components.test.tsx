/** @vitest-environment happy-dom */

import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

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

const smokeCases = [
	['AltTextTable', <AltTextTable />],
	['BreakpointTable', <BreakpointTable />],
	['ColorRamp', <ColorRamp />],
	['ContrastMatrix', <ContrastMatrix />],
	['DurationBar', <DurationBar />],
	['EasingComparison', <EasingComparison />],
	['FocusRingDemo', <FocusRingDemo />],
	['IconGrid', <IconGrid />],
	['ItalicComparison', <ItalicComparison />],
	['JapaneseSpecimen', <JapaneseSpecimen />],
	['LogoDontList', <LogoDontList />],
	['LogoSizeStrip', <LogoSizeStrip />],
	['LogoSpecimen', <LogoSpecimen />],
	['MotionDemo', <MotionDemo />],
	['PhosphorNote', <PhosphorNote />],
	['PrintSpec', <PrintSpec />],
	['RatioBar', <RatioBar />],
	['ReducedMotionDemo', <ReducedMotionDemo />],
	['SpacingPicker', <SpacingPicker />],
	['SpacingScale', <SpacingScale />],
	['TouchTargetOverlay', <TouchTargetOverlay />],
	['TypeScale', <TypeScale />],
] as const;

describe('design-system component smoke coverage', () => {
	it.each(smokeCases)('renders %s without crashing', (_name, component) => {
		const { container } = render(component);
		expect(container.firstChild).toBeInTheDocument();
	});
});

describe('design-system component behavior', () => {
	it('renders component showcase metadata, children, and prop documentation', () => {
		render(
			<ComponentShowcase
				name="Badge"
				importPath="@/components/ui/Badge"
				category="ui"
				description="Badge docs"
				props={[
					{
						name: 'variant',
						type: 'string',
						default: 'default',
						description: 'Visual style',
					},
				]}
			>
				<span>Live demo</span>
			</ComponentShowcase>
		);

		expect(screen.getByText('Badge')).toBeInTheDocument();
		expect(screen.getByText('@/components/ui/Badge')).toBeInTheDocument();
		expect(screen.getByText('Badge docs')).toBeInTheDocument();
		expect(screen.getByText('Live demo')).toBeInTheDocument();
		expect(screen.getByText('variant')).toBeInTheDocument();
	});

	it('renders contrast and typography specimens with calculated metadata', () => {
		render(
			<>
				<ContrastBadge fg="#000000" bg="#ffffff" />
				<TypeSpecimen
					token="text-4"
					font="sans"
					sampleText="Sample type"
					role="Body"
					size="24px"
					lineHeight="1.4"
					tracking="0%"
				/>
			</>
		);

		expect(screen.getByText('21.00:1')).toBeInTheDocument();
		expect(screen.getByText('Sample type')).toHaveAttribute(
			'style',
			expect.stringContaining('font-size: var(--text-4)')
		);
		expect(screen.getByText('Body')).toBeInTheDocument();
	});

	it('renders principle cards and easing plots from explicit props', () => {
		render(
			<>
				<PrincipleCard
					kanji="間"
					romaji="Ma"
					japanese="ま"
					gloss="Space between"
					principle="Negative space"
				/>
				<EasingCurvePlot
					name="Enter"
					p1x={0}
					p1y={0}
					p2x={0.38}
					p2y={0.9}
					role="Incoming motion"
					cssVar="--ease-enter"
				/>
			</>
		);

		expect(screen.getByText('Negative space')).toBeInTheDocument();
		expect(screen.getByText('Space between')).toBeInTheDocument();
		expect(screen.getByRole('button', { name: 'Play Enter animation' })).toBeInTheDocument();
		expect(screen.getByText('--ease-enter')).toBeInTheDocument();
	});

	it('updates interactive demos when controls are used', () => {
		render(<GridOverlay />);
		fireEvent.click(screen.getByRole('button', { name: /Mobile/ }));
		expect(screen.getByText('3 columns')).toBeInTheDocument();
	});

	it('plays easing curve animations through requestAnimationFrame', () => {
		vi.useFakeTimers();
		const frames: FrameRequestCallback[] = [];
		const requestAnimationFrame = vi
			.spyOn(window, 'requestAnimationFrame')
			.mockImplementation((callback) => {
				frames.push(callback);
				return frames.length;
			});
		const cancelAnimationFrame = vi
			.spyOn(window, 'cancelAnimationFrame')
			.mockImplementation(() => {});
		const { container, unmount } = render(
			<EasingCurvePlot
				name="Enter"
				p1x={0}
				p1y={0}
				p2x={0.38}
				p2y={0.9}
				role="Incoming motion"
				cssVar="--ease-enter"
			/>
		);

		fireEvent.click(screen.getByRole('button', { name: 'Play Enter animation' }));
		act(() => frames.shift()?.(0));
		act(() => frames.shift()?.(600));
		expect(container.querySelector('circle[fill="currentColor"]')).toBeInTheDocument();
		act(() => frames.shift()?.(1200));
		act(() => vi.advanceTimersByTime(600));

		unmount();
		expect(requestAnimationFrame).toHaveBeenCalled();
		expect(cancelAnimationFrame).toHaveBeenCalled();
		requestAnimationFrame.mockRestore();
		cancelAnimationFrame.mockRestore();
		vi.useRealTimers();
	});

	it('plays the motion demo with selected duration and effect', () => {
		vi.useFakeTimers();
		const { container } = render(<MotionDemo />);
		const selects = screen.getAllByRole('combobox');
		fireEvent.change(selects[1], { target: { value: '2' } });
		fireEvent.change(selects[2], { target: { value: 'scale' } });

		fireEvent.click(screen.getByRole('button', { name: /Play/ }));
		expect(container.querySelector('div[style*="ds-motion-scale"]')).toBeInTheDocument();
		act(() => vi.advanceTimersByTime(400));
		vi.useRealTimers();
	});

	it('lets the spacing picker change gap and padding tokens', () => {
		render(<SpacingPicker />);
		const selects = screen.getAllByRole('combobox');
		fireEvent.change(selects[0], { target: { value: '0' } });
		fireEvent.change(selects[1], { target: { value: '1' } });

		const firstItem = screen.getByText('Element A');
		expect(firstItem.parentElement).toHaveStyle({ gap: '4px' });
		expect(firstItem.parentElement?.parentElement).toHaveStyle({ padding: '8px' });
	});

	it('shows focus state labels in the focus-ring demo', () => {
		render(<FocusRingDemo />);
		const lightDemo = screen
			.getByText('Light background — Beni focus ring')
			.closest('div')!.parentElement!;
		fireEvent.focus(within(lightDemo).getByRole('button', { name: 'Primary Button' }));
		expect(within(lightDemo).getByText('focused')).toBeInTheDocument();
		fireEvent.blur(within(lightDemo).getByRole('button', { name: 'Primary Button' }));
		fireEvent.focus(within(lightDemo).getByRole('button', { name: 'Text link' }));
		expect(within(lightDemo).getByText('focused')).toBeInTheDocument();
		fireEvent.blur(within(lightDemo).getByRole('button', { name: 'Text link' }));
		fireEvent.focus(within(lightDemo).getByPlaceholderText('Input field'));
		expect(within(lightDemo).getByText('focused')).toBeInTheDocument();
	});
});
