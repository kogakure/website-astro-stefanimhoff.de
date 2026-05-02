interface BreakpointEntry {
	name: string;
	cssVar: string;
	value: string;
	columns: string;
	margins: string;
	gutters: string;
	maxWidth: string;
}

const breakpoints: BreakpointEntry[] = [
	{
		name: 'Mobile',
		cssVar: '--breakpoint-xs',
		value: '320px',
		columns: '3',
		margins: '16px',
		gutters: '16px',
		maxWidth: 'Fluid',
	},
	{
		name: 'Tablet',
		cssVar: '--breakpoint-md',
		value: '768px',
		columns: '6',
		margins: '32px',
		gutters: '24px',
		maxWidth: 'Fluid',
	},
	{
		name: 'Desktop',
		cssVar: '--breakpoint-xl',
		value: '1280px',
		columns: '12',
		margins: '32px',
		gutters: '32px',
		maxWidth: '1440px',
	},
	{
		name: 'Wide',
		cssVar: '--breakpoint-3xl',
		value: '1800px',
		columns: '12',
		margins: '32px',
		gutters: '32px',
		maxWidth: '1440px',
	},
];

export const BreakpointTable = () => (
	<div className="overflow-x-auto">
		<table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>
			<thead>
				<tr>
					{[
						'Breakpoint',
						'CSS Variable',
						'Value',
						'Columns',
						'Margins',
						'Gutters',
						'Max Width',
					].map((h) => (
						<th
							key={h}
							className="pb-3 pr-4 font-normal"
							style={{ color: 'var(--color-hai)', fontSize: 'var(--text-2)' }}
						>
							{h}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{breakpoints.map((bp) => (
					<tr key={bp.value} style={{ borderTop: '1px solid var(--color-usuzumi)' }}>
						<td className="py-3 pr-4">
							<span
								className="font-medium"
								style={{
									color: 'var(--color-sumi)',
									fontSize: 'var(--text-2)',
								}}
							>
								{bp.name}
							</span>
						</td>
						<td className="py-3 pr-4">
							<span
								className="font-mono text-xs"
								style={{ color: 'var(--color-beni)' }}
							>
								{bp.cssVar}
							</span>
						</td>
						<td className="py-3 pr-4">
							<span
								className="font-mono text-xs"
								style={{ color: 'var(--color-hai)' }}
							>
								{bp.value}
							</span>
						</td>
						<td className="py-3 pr-4">
							<span
								className="font-mono text-xs"
								style={{ color: 'var(--color-hai)' }}
							>
								{bp.columns}
							</span>
						</td>
						<td className="py-3 pr-4">
							<span
								className="font-mono text-xs"
								style={{ color: 'var(--color-hai)' }}
							>
								{bp.margins}
							</span>
						</td>
						<td className="py-3 pr-4">
							<span
								className="font-mono text-xs"
								style={{ color: 'var(--color-hai)' }}
							>
								{bp.gutters}
							</span>
						</td>
						<td className="py-3">
							<span
								className="font-mono text-xs"
								style={{ color: 'var(--color-hai)' }}
							>
								{bp.maxWidth}
							</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default BreakpointTable;
