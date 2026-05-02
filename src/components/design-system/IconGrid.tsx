import * as Icons from '../icons';

const EXCLUDE = new Set(['Hanko']);

const iconEntries = Object.entries(Icons).filter(([name]) => !EXCLUDE.has(name)) as [
	string,
	React.ComponentType<React.SVGProps<SVGSVGElement>>,
][];

const toLabel = (name: string) => name.replace(/([A-Z])/g, ' $1').trim();

export const IconGrid = () => (
	<div className="overflow-hidden rounded-md" style={{ backgroundColor: 'var(--color-kiri)' }}>
		<div className="grid grid-cols-4 gap-px sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
			{iconEntries.map(([name, Icon]) => (
				<div
					key={name}
					className="group flex flex-col items-center gap-2 p-4"
					style={{ backgroundColor: 'var(--color-kiri)' }}
					title={name}
				>
					<Icon
						width={24}
						height={24}
						style={{ color: 'var(--color-sumi)', fill: 'currentColor' }}
					/>
					<span
						className="text-center font-mono text-[9px] leading-tight"
						style={{ color: 'var(--color-hai)' }}
					>
						{toLabel(name)}
					</span>
				</div>
			))}
		</div>
		<div
			className="px-4 py-3 font-mono text-[10px]"
			style={{
				borderTop: '1px solid var(--color-usuzumi)',
				color: 'var(--color-hai)',
			}}
		>
			{iconEntries.length} icons · 24 × 24 px · Sumi fill
		</div>
	</div>
);

export default IconGrid;
