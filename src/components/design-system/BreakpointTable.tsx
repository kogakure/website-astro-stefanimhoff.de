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
	<div className="overflow-x-auto" data-ma="BreakpointTable">
		<table className="w-full text-start" style={{ borderCollapse: 'collapse' }}>
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
							className="text-hai pbe-3 pie-4 font-normal"
							style={{ fontSize: 'var(--text-2)' }}
						>
							{h}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{breakpoints.map((bp) => (
					<tr key={bp.value} className="border-usuzumi dark:border-nezumi border-bs-1">
						<td className="pbl-3 pie-4">
							<span
								className="text-sumi dark:text-washi font-medium"
								style={{ fontSize: 'var(--text-2)' }}
							>
								{bp.name}
							</span>
						</td>
						<td className="pbl-3 pie-4">
							<span className="text-beni dark:text-beni-light font-mono text-xs">
								{bp.cssVar}
							</span>
						</td>
						<td className="pbl-3 pie-4">
							<span className="text-hai font-mono text-xs">{bp.value}</span>
						</td>
						<td className="pbl-3 pie-4">
							<span className="text-hai font-mono text-xs">{bp.columns}</span>
						</td>
						<td className="pbl-3 pie-4">
							<span className="text-hai font-mono text-xs">{bp.margins}</span>
						</td>
						<td className="pbl-3 pie-4">
							<span className="text-hai font-mono text-xs">{bp.gutters}</span>
						</td>
						<td className="pbl-3">
							<span className="text-hai font-mono text-xs">{bp.maxWidth}</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default BreakpointTable;
