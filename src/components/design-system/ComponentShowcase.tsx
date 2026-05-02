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
	<div
		className="overflow-hidden rounded-md"
		style={{ border: '1px solid var(--color-usuzumi)' }}
	>
		{/* Header */}
		<div
			className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3"
			style={{
				borderBottom: '1px solid var(--color-usuzumi)',
				backgroundColor: 'var(--color-kiri)',
			}}
		>
			<div className="flex items-baseline gap-3">
				<code
					className="font-mono text-xs font-medium"
					style={{ color: 'var(--color-beni)' }}
				>
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
				className="px-4 py-2 font-mono text-[11px]"
				style={{
					color: 'var(--color-hai)',
					borderBottom: '1px solid var(--color-usuzumi)',
					backgroundColor: 'var(--color-kiri)',
				}}
			>
				{description}
			</div>
		)}
		{/* Live demo */}
		<div className="p-6" style={{ backgroundColor: 'var(--color-washi)' }}>
			{children}
		</div>
		{/* Props table */}
		{props && props.length > 0 && (
			<details style={{ borderTop: '1px solid var(--color-usuzumi)' }}>
				<summary
					className="cursor-pointer px-4 py-2 font-mono text-[10px] uppercase tracking-wider"
					style={{ color: 'var(--color-hai)', backgroundColor: 'var(--color-kiri)' }}
				>
					Props ({props.length})
				</summary>
				<table className="w-full border-collapse font-mono text-[10px]">
					<thead>
						<tr style={{ backgroundColor: 'var(--color-kiri)' }}>
							{['Prop', 'Type', 'Default', 'Description'].map((h) => (
								<th
									key={h}
									className="px-4 py-1.5 text-left"
									style={{
										color: 'var(--color-nezumi)',
										borderBottom: '1px solid var(--color-usuzumi)',
									}}
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
								style={{ borderBottom: '1px solid var(--color-usuzumi)' }}
							>
								<td className="px-4 py-1.5" style={{ color: 'var(--color-beni)' }}>
									{row.name}
								</td>
								<td className="px-4 py-1.5" style={{ color: 'var(--color-sumi)' }}>
									{row.type}
								</td>
								<td className="px-4 py-1.5" style={{ color: 'var(--color-hai)' }}>
									{row.default ?? '—'}
								</td>
								<td className="px-4 py-1.5" style={{ color: 'var(--color-hai)' }}>
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
