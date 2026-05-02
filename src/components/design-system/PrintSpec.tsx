interface PrintEntry {
	name: string;
	hex: string;
	cmyk: string;
	pantone: string;
}

const entries: PrintEntry[] = [
	{ name: 'Beni', hex: '#900B20', cmyk: 'C:22 M:100 Y:86 K:17', pantone: 'Pantone 187 C' },
	{ name: 'Sumi', hex: '#0E0D0C', cmyk: 'C:67 M:58 Y:53 K:76', pantone: 'Pantone Black 6 C' },
	{ name: 'Washi', hex: '#E6E6E6', cmyk: 'C:0 M:0 Y:0 K:10', pantone: 'Pantone Cool Gray 1 C' },
];

export const PrintSpec = () => (
	<div className="overflow-x-auto">
		<table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>
			<thead>
				<tr>
					<th className="text-hai text-2 pb-3 pr-4 font-normal">Colour</th>
					<th className="text-hai text-2 pb-3 pr-4 font-normal">Hex</th>
					<th className="text-hai text-2 pb-3 pr-4 font-normal">CMYK</th>
					<th className="text-hai text-2 pb-3 font-normal">Pantone</th>
				</tr>
			</thead>
			<tbody>
				{entries.map((e) => (
					<tr key={e.hex} style={{ borderTop: '1px solid var(--color-usuzumi)' }}>
						<td className="py-3 pr-4">
							<div className="flex items-center gap-2">
								<span
									className="inline-block size-5 rounded-sm border border-black/10"
									style={{ backgroundColor: e.hex }}
								/>
								<span className="text-sumi dark:text-washi text-2 font-medium">
									{e.name}
								</span>
							</div>
						</td>
						<td className="py-3 pr-4">
							<span className="text-hai font-mono text-xs">{e.hex}</span>
						</td>
						<td className="py-3 pr-4">
							<span className="text-hai font-mono text-xs">{e.cmyk}</span>
						</td>
						<td className="py-3">
							<span className="text-2 text-hai">{e.pantone}</span>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default PrintSpec;
