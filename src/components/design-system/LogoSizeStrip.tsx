import Hanko from '../icons/Hanko';

const sizes = [
	{ px: 16, label: '16px', note: 'Favicon minimum' },
	{ px: 24, label: '24px', note: 'Screen minimum' },
	{ px: 32, label: '32px', note: 'Small UI' },
	{ px: 48, label: '48px', note: 'Nav / compact' },
	{ px: 64, label: '64px', note: 'Standard' },
	{ px: 96, label: '96px', note: 'Display' },
];

export const LogoSizeStrip = () => (
	<div className="overflow-hidden rounded-md" style={{ backgroundColor: 'var(--color-kiri)' }}>
		<div className="flex flex-wrap items-end gap-6 p-6">
			{sizes.map((s) => (
				<div key={s.px} className="flex flex-col items-center gap-2">
					<Hanko style={{ width: s.px, height: s.px, fill: 'var(--color-beni)' }} />
					<div className="flex flex-col items-center gap-0.5">
						<span
							className="font-mono text-[11px]"
							style={{ color: 'var(--color-sumi)' }}
						>
							{s.label}
						</span>
						<span
							className="font-mono text-[10px]"
							style={{ color: 'var(--color-hai)' }}
						>
							{s.note}
						</span>
					</div>
				</div>
			))}
		</div>
	</div>
);

export default LogoSizeStrip;
