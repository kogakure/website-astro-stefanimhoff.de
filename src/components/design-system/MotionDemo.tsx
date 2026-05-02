'use client';

import { useState } from 'react';

const easings = [
	{ label: 'Enter', value: 'cubic-bezier(0, 0, 0.38, 0.9)' },
	{ label: 'Exit', value: 'cubic-bezier(0.2, 0, 1, 0.9)' },
	{ label: 'Standard', value: 'cubic-bezier(0.2, 0, 0.38, 0.9)' },
];

const durations = [
	{ label: '100ms', value: 100 },
	{ label: '200ms', value: 200 },
	{ label: '300ms', value: 300 },
	{ label: '500ms', value: 500 },
	{ label: '800ms', value: 800 },
];

const effects = [
	{ label: 'Fade', key: 'fade' },
	{ label: 'Slide up', key: 'slide' },
	{ label: 'Scale', key: 'scale' },
];

const selectStyle: React.CSSProperties = {
	fontFamily: 'var(--font-mono)',
	fontSize: '0.7rem',
	color: 'var(--color-sumi)',
	backgroundColor: 'var(--color-washi)',
	border: '1px solid var(--color-usuzumi)',
	borderRadius: '4px',
	padding: '5px 8px',
	outline: 'none',
};

export const MotionDemo = () => {
	const [easingIdx, setEasingIdx] = useState(0);
	const [durationIdx, setDurationIdx] = useState(1);
	const [effectKey, setEffectKey] = useState('fade');
	const [key, setKey] = useState(0);
	const [playing, setPlaying] = useState(false);

	const easing = easings[easingIdx].value;
	const duration = durations[durationIdx].value;

	const play = () => {
		setKey((k) => k + 1);
		setPlaying(true);
		setTimeout(() => setPlaying(false), duration + 100);
	};

	const boxStyle: React.CSSProperties = {
		width: 80,
		height: 80,
		backgroundColor: 'var(--color-beni)',
		borderRadius: '4px',
		animation: playing ? `ds-motion-${effectKey} ${duration}ms ${easing} forwards` : undefined,
	};

	return (
		<div className="flex flex-col gap-5">
			<style>{`
				@keyframes ds-motion-fade {
					from { opacity: 0; }
					to   { opacity: 1; }
				}
				@keyframes ds-motion-slide {
					from { opacity: 0; transform: translateY(20px); }
					to   { opacity: 1; transform: translateY(0); }
				}
				@keyframes ds-motion-scale {
					from { opacity: 0; transform: scale(0.85); }
					to   { opacity: 1; transform: scale(1); }
				}
			`}</style>

			<div className="flex flex-wrap gap-4">
				<label className="flex flex-col gap-1.5">
					<span className="font-mono text-[10px]" style={{ color: 'var(--color-hai)' }}>
						Easing
					</span>
					<select
						value={easingIdx}
						onChange={(e) => setEasingIdx(Number(e.target.value))}
						style={selectStyle}
					>
						{easings.map((e, i) => (
							<option key={e.label} value={i}>
								{e.label}
							</option>
						))}
					</select>
				</label>
				<label className="flex flex-col gap-1.5">
					<span className="font-mono text-[10px]" style={{ color: 'var(--color-hai)' }}>
						Duration
					</span>
					<select
						value={durationIdx}
						onChange={(e) => setDurationIdx(Number(e.target.value))}
						style={selectStyle}
					>
						{durations.map((d, i) => (
							<option key={d.label} value={i}>
								{d.label}
							</option>
						))}
					</select>
				</label>
				<label className="flex flex-col gap-1.5">
					<span className="font-mono text-[10px]" style={{ color: 'var(--color-hai)' }}>
						Effect
					</span>
					<select
						value={effectKey}
						onChange={(e) => setEffectKey(e.target.value)}
						style={selectStyle}
					>
						{effects.map((e) => (
							<option key={e.key} value={e.key}>
								{e.label}
							</option>
						))}
					</select>
				</label>
				<div className="flex items-end">
					<button
						onClick={play}
						className="rounded px-4 py-2 font-mono text-xs text-white transition-colors"
						style={{
							backgroundColor: 'var(--color-beni)',
							border: 'none',
							cursor: 'pointer',
						}}
					>
						Play ▶
					</button>
				</div>
			</div>

			<div
				className="flex items-center justify-center rounded-md"
				style={{ backgroundColor: 'var(--color-kiri)', height: 160 }}
			>
				<div key={key} style={boxStyle} />
			</div>
		</div>
	);
};

export default MotionDemo;
