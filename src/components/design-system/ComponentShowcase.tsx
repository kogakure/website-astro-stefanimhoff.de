import type { ReactNode } from 'react';

interface PropsRow {
	name: string;
	type: string;
	default?: string;
	description: string;
}

interface Props {
	name: string;
	importPath: string;
	category?: string;
	description?: string;
	props?: PropsRow[];
	children: ReactNode;
}

export const ComponentShowcase = ({
	name,
	importPath,
	category,
	description,
	props,
	children,
}: Props) => (
	<div className="border-usuzumi dark:border-nezumi overflow-hidden rounded-md border">
		{/* Header */}
		<div className="border-usuzumi bg-kiri dark:border-nezumi dark:bg-sumi border-be-1e-1 pli-4 pbl-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
			<div className="flex items-baseline gap-3">
				<code className="text-beni dark:text-beni-light font-mono text-xs font-medium">
					{name}
				</code>
				{category && (
					<span
						className="font-mono text-[10px] uppercase tracking-wider"
						style={{ color: 'var(--color-hai)' }}
					>
						{category}
					</span>
				)}
			</div>
			<code className="font-mono text-[10px]" style={{ color: 'var(--color-nezumi)' }}>
				{importPath}
			</code>
		</div>
		{/* Description */}
		{description && (
			<div
				className="border-usuzumi bg-kiri dark:border-nezumi dark:bg-sumi border-be-1e-1 pli-4 pbl-2 font-mono text-[11px]"
				style={{ color: 'var(--color-hai)' }}
			>
				{description}
			</div>
		)}
		{/* Live demo */}
		<div className="bg-washi dark:bg-yoru p-6">{children}</div>
		{/* Props table */}
		{props && props.length > 0 && (
			<details className="border-usuzumi dark:border-nezumi border-be-1s-1">
				<summary
					className="bg-kiri dark:bg-sumi pli-4 pbl-2 cursor-pointer font-mono text-[10px] uppercase tracking-wider"
					style={{ color: 'var(--color-hai)' }}
				>
					Props ({props.length})
				</summary>
				<table className="w-full border-collapse font-mono text-[10px]">
					<thead>
						<tr className="bg-kiri dark:bg-sumi">
							{['Prop', 'Type', 'Default', 'Description'].map((h) => (
								<th
									key={h}
									className="border-usuzumi dark:border-nezumi border-be-1e-1 pli-4 pbl-1.5 text-start"
									style={{ color: 'var(--color-nezumi)' }}
								>
									{h}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{props.map((row) => (
							<tr
								key={row.name}
								className="border-usuzumi dark:border-nezumi border-be-1"
							>
								<td className="text-beni dark:text-beni-light pli-4 pbl-1.5">
									{row.name}
								</td>
								<td className="text-sumi dark:text-washi pli-4 pbl-1.5">
									{row.type}
								</td>
								<td className="pli-4 pbl-1.5" style={{ color: 'var(--color-hai)' }}>
									{row.default ?? '—'}
								</td>
								<td className="pli-4 pbl-1.5" style={{ color: 'var(--color-hai)' }}>
									{row.description}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</details>
		)}
	</div>
);

export default ComponentShowcase;
