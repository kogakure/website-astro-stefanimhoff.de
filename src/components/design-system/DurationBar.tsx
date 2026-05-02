const durations = [
	{ token: '--duration-instant', ms: 100, label: 'Instant', use: 'Colour shifts, hover states' },
	{ token: '--duration-fast', ms: 200, label: 'Fast', use: 'Button feedback, icon transitions' },
	{
		token: '--duration-moderate',
		ms: 300,
		label: 'Moderate',
		use: 'Dropdowns, tooltips, card hover',
	},
	{ token: '--duration-slow', ms: 500, label: 'Slow', use: 'Modal / overlay entrance' },
	{
		token: '--duration-deliberate',
		ms: 800,
		label: 'Deliberate',
		use: 'Page transitions, hero reveals',
	},
];

const MAX_MS = 800;

export const DurationBar = () => (
	<div className="flex flex-col gap-3">
		{durations.map((d) => (
			<div key={d.token} className="flex items-center gap-4">
				<div className="flex w-28 shrink-0 flex-col gap-0.5">
					<span className="font-mono text-[11px]" style={{ color: 'var(--color-beni)' }}>
						{d.ms}ms
					</span>
					<span className="font-mono text-[10px]" style={{ color: 'var(--color-hai)' }}>
						{d.label}
					</span>
				</div>
				<div className="flex flex-1 items-center gap-3">
					<div
						className="h-3 rounded-sm"
						style={{
							width: `${(d.ms / MAX_MS) * 100}%`,
							backgroundColor: 'var(--color-sumi)',
							opacity: 0.15 + (d.ms / MAX_MS) * 0.75,
						}}
					/>
				</div>
				<span
					className="hidden w-52 shrink-0 text-[11px] md:block"
					style={{ color: 'var(--color-hai)' }}
				>
					{d.use}
				</span>
			</div>
		))}
	</div>
);

export default DurationBar;
