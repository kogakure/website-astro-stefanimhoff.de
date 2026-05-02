'use client';

import { useState } from 'react';

export const ReducedMotionDemo = () => {
	const [reduced, setReduced] = useState(false);
	const [key, setKey] = useState(0);

	const trigger = () => setKey((k) => k + 1);

	const transition = reduced
		? 'opacity 0.001ms linear'
		: 'opacity 300ms cubic-bezier(0, 0, 0.38, 0.9), transform 300ms cubic-bezier(0, 0, 0.38, 0.9)';

	return (
		<div className="flex flex-col gap-5">
			<div className="flex items-center gap-4">
				<button
					role="switch"
					aria-checked={reduced}
					onClick={() => {
						setReduced((r) => !r);
						setKey((k) => k + 1);
					}}
					className="relative flex h-6 w-11 cursor-pointer items-center rounded-full transition-colors"
					style={{
						backgroundColor: reduced ? 'var(--color-sumi)' : 'var(--color-beni)',
						border: 'none',
						outline: 'none',
					}}
				>
					<span
						className="absolute h-4 w-4 rounded-full bg-white shadow transition-transform"
						style={{ transform: reduced ? 'translateX(24px)' : 'translateX(4px)' }}
					/>
				</button>
				<span className="font-mono text-xs" style={{ color: 'var(--color-sumi)' }}>
					{reduced
						? 'prefers-reduced-motion: reduce'
						: 'prefers-reduced-motion: no-preference'}
				</span>
			</div>

			<div className="flex gap-4">
				<button
					onClick={trigger}
					className="rounded px-4 py-2 font-mono text-xs text-white"
					style={{
						backgroundColor: 'var(--color-beni)',
						border: 'none',
						cursor: 'pointer',
					}}
				>
					Trigger animation
				</button>
			</div>

			<div
				className="flex items-center justify-center rounded-md"
				style={{ backgroundColor: 'var(--color-kiri)', height: 140 }}
			>
				<div
					key={key}
					style={{
						width: 72,
						height: 72,
						borderRadius: '4px',
						backgroundColor: 'var(--color-beni)',
						transition,
						animation: `ds-rm-demo 400ms ${reduced ? '0.001ms' : 'cubic-bezier(0, 0, 0.38, 0.9)'} forwards`,
					}}
				/>
			</div>

			<style>{`
				@keyframes ds-rm-demo {
					from { opacity: 0; transform: translateY(16px); }
					to   { opacity: 1; transform: translateY(0); }
				}
			`}</style>

			{reduced && (
				<p
					className="font-mono text-[11px]"
					style={{ color: 'var(--color-hai)', margin: 0 }}
				>
					Positional animation stripped. Opacity crossfade only — content remains
					comprehensible in stillness (Seijaku).
				</p>
			)}
		</div>
	);
};

export default ReducedMotionDemo;
