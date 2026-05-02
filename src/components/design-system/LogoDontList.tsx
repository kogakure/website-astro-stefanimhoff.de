import React from 'react';

import Hanko from '../icons/Hanko';

const SIZE = 48;

const donts: {
	label: string;
	note: string;
	style?: React.CSSProperties;
	fill?: string;
	wrapperStyle?: React.CSSProperties;
}[] = [
	{
		label: 'Stretch',
		note: 'Never distort proportions',
		style: { transform: 'scaleX(1.7)' },
	},
	{
		label: 'Rotate',
		note: 'Never rotate the mark',
		style: { transform: 'rotate(35deg)' },
	},
	{
		label: 'Shadow',
		note: 'No shadows or effects',
		style: { filter: 'drop-shadow(4px 6px 8px rgba(0,0,0,0.55))' },
	},
	{
		label: 'Wrong colour',
		note: 'Beni only — never blue',
		fill: '#2563EB',
	},
	{
		label: 'Outline',
		note: 'No strokes or outlines',
		fill: 'transparent',
		style: {
			filter: 'drop-shadow(0 0 0 1.5px #900B20) drop-shadow(0 0 0 3px #900B20)',
			stroke: '#900B20',
		},
		wrapperStyle: { border: '2px solid #900B20', borderRadius: '50%', padding: 0 },
	},
	{
		label: 'Too small',
		note: 'Minimum 24 px on screen',
		style: { width: 12, height: 12 },
	},
];

export const LogoDontList = () => (
	<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
		{donts.map((d) => (
			<div
				key={d.label}
				className="overflow-hidden rounded-md"
				style={{ backgroundColor: 'var(--color-kiri)' }}
			>
				<div className="relative flex items-center justify-center" style={{ height: 120 }}>
					<Hanko
						style={{
							width: SIZE,
							height: SIZE,
							fill: d.fill ?? 'var(--color-beni)',
							...d.style,
						}}
					/>
					{/* Red diagonal strike */}
					<svg
						className="pointer-events-none absolute inset-0"
						viewBox="0 0 100 100"
						preserveAspectRatio="none"
						aria-hidden="true"
					>
						<line
							x1="8"
							y1="8"
							x2="92"
							y2="92"
							stroke="#C0271A"
							strokeWidth="3"
							strokeLinecap="round"
							opacity="0.7"
						/>
					</svg>
				</div>
				<div className="px-3 py-2" style={{ borderTop: '1px solid var(--color-usuzumi)' }}>
					<div
						className="font-mono text-[10px] font-medium"
						style={{ color: 'var(--color-beni)' }}
					>
						✗ {d.label}
					</div>
					<div className="font-mono text-[9px]" style={{ color: 'var(--color-hai)' }}>
						{d.note}
					</div>
				</div>
			</div>
		))}
	</div>
);

export default LogoDontList;
