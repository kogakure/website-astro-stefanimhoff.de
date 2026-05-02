import { useState } from 'react';
import { Switch } from '../ui/switch';

export const ReducedMotionDemo = () => {
	const [reduced, setReduced] = useState(false);
	const [key, setKey] = useState(0);

	const trigger = () => setKey((k) => k + 1);

	const animName = reduced ? 'ds-rm-reduced' : 'ds-rm-full';
	const animDuration = reduced ? '300ms' : '500ms';
	const animEase = reduced ? 'linear' : 'cubic-bezier(0, 0, 0.38, 0.9)';

	return (
		<div className="flex flex-col gap-5">
			<div className="flex items-center gap-4">
				<Switch
					checked={reduced}
					onCheckedChange={(val) => {
						setReduced(val);
						setKey((k) => k + 1);
					}}
					className="data-[state=checked]:bg-(--color-beni) data-[state=unchecked]:bg-(--color-sumi)"
				/>
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
						animation: `${animName} ${animDuration} ${animEase} both`,
					}}
				/>
			</div>

			<style>{`
				@keyframes ds-rm-full {
					from { opacity: 0; transform: translateY(24px) scale(0.85); }
					to   { opacity: 1; transform: translateY(0)    scale(1);    }
				}
				@keyframes ds-rm-reduced {
					from { opacity: 0; }
					to   { opacity: 1; }
				}
			`}</style>

			<p className="font-mono text-[11px]" style={{ color: 'var(--color-hai)', margin: 0 }}>
				{reduced
					? 'Reduced: opacity fade only — no positional movement (Seijaku).'
					: 'Normal: slide up + scale in + fade — full spatial animation.'}
			</p>
		</div>
	);
};

export default ReducedMotionDemo;
