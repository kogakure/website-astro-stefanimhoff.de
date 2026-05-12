const rows = [
	{
		type: 'Decorative image',
		pattern: 'alt=""',
		example: 'Texture, rule, background pattern — empty alt, role="presentation"',
	},
	{
		type: 'Cover / hero',
		pattern: 'alt="[Subject + context]"',
		example: 'alt="Autumn leaves on a stone path, Kyoto"',
	},
	{
		type: 'Diagram / chart',
		pattern: 'alt="[Data summary]"',
		example: 'alt="Bar chart: spacing scale from 4 px to 128 px"',
	},
	{
		type: 'Screenshot / code',
		pattern: 'alt="[Purpose + key detail]"',
		example: 'alt="Terminal showing pnpm build output with no errors"',
	},
	{
		type: 'Portrait photo',
		pattern: 'alt="[Full name]"',
		example: 'alt="Stefan Imhoff"',
	},
	{
		type: 'Icon (standalone)',
		pattern: 'aria-label="[Action]" role="img"',
		example: '<SearchIcon aria-label="Search" role="img" />',
	},
	{
		type: 'Icon + visible label',
		pattern: 'aria-hidden="true"',
		example: '<SearchIcon aria-hidden="true" /> Search',
	},
];

export const AltTextTable = () => (
	<div className="border-usuzumi dark:border-nezumi overflow-hidden rounded-md border">
		<table className="w-full border-collapse font-mono text-[11px]">
			<thead>
				<tr className="bg-kiri dark:bg-sumi">
					{['Image type', 'Pattern', 'Example'].map((h) => (
						<th
							key={h}
							className="border-usuzumi dark:border-nezumi border-be-1 pli-4 pbl-2 text-start font-medium"
							style={{ color: 'var(--color-nezumi)' }}
						>
							{h}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, i) => (
					<tr key={row.type} className={i % 2 !== 0 ? 'bg-kiri dark:bg-sumi' : ''}>
						<td
							className="text-beni dark:text-beni-light pli-4 pbl-[0.625rem] align-top"
							style={{ whiteSpace: 'nowrap' }}
						>
							{row.type}
						</td>
						<td
							className="text-sumi dark:text-washi pli-4 pbl-[0.625rem] align-top"
							style={{ whiteSpace: 'nowrap' }}
						>
							{row.pattern}
						</td>
						<td
							className="pli-4 pbl-[0.625rem] align-top"
							style={{ color: 'var(--color-hai)' }}
						>
							{row.example}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default AltTextTable;
