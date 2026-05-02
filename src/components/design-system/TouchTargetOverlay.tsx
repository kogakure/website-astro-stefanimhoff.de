import type { ReactNode } from 'react';

const examples: { label: string; size: number; icon: ReactNode }[] = [
	{
		label: '24 × 24 px icon button',
		size: 24,
		icon: (
			<svg width={24} height={24} viewBox="0 0 24 24" fill="currentColor">
				<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
			</svg>
		),
	},
	{
		label: '16 × 16 px inline icon',
		size: 16,
		icon: (
			<svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
				<path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
			</svg>
		),
	},
];

export const TouchTargetOverlay = () => (
	<div className="flex flex-wrap gap-8">
		{examples.map((ex) => (
			<div key={ex.label} className="flex flex-col items-center gap-3">
				<div
					className="relative flex items-center justify-center"
					style={{ width: 44, height: 44 }}
				>
					{/* 44×44 hit-box overlay */}
					<div
						className="pointer-events-none absolute inset-0"
						style={{
							border: '1.5px dashed var(--color-beni)',
							borderRadius: 'var(--radius-2)',
							opacity: 0.6,
						}}
						aria-hidden="true"
					/>
					{/* Actual icon */}
					<div style={{ color: 'var(--color-sumi)', width: ex.size, height: ex.size }}>
						{ex.icon}
					</div>
				</div>
				<div className="flex flex-col items-center gap-0.5">
					<span className="font-mono text-[10px]" style={{ color: 'var(--color-sumi)' }}>
						{ex.label}
					</span>
					<span className="font-mono text-[9px]" style={{ color: 'var(--color-hai)' }}>
						44 × 44 px target (dashed)
					</span>
				</div>
			</div>
		))}
	</div>
);

export default TouchTargetOverlay;
