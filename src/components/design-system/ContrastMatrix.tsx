import { ContrastBadge } from './ContrastBadge';

interface ColorEntry {
	name: string;
	kanji: string;
	hex: string;
}

const foregrounds: ColorEntry[] = [
	{ name: 'Sumi', kanji: '墨', hex: '#0E0D0C' },
	{ name: 'Beni', kanji: '紅', hex: '#900B20' },
	{ name: 'Washi', kanji: '和紙', hex: '#E6E6E6' },
	{ name: 'Beni Light', kanji: '薄紅', hex: '#B83A4E' },
	{ name: 'Hai', kanji: '灰', hex: '#A0A09C' },
];

const backgrounds: ColorEntry[] = [
	{ name: 'Washi', kanji: '和紙', hex: '#E6E6E6' },
	{ name: 'Kiri', kanji: '霧', hex: '#F2F2F0' },
	{ name: 'Sumi', kanji: '墨', hex: '#0E0D0C' },
	{ name: 'Yoru', kanji: '夜', hex: '#1A1918' },
];

export const ContrastMatrix = () => (
	<div className="overflow-x-auto">
		<table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>
			<thead>
				<tr>
					<th
						className="text-hai text-2 pb-3 pr-4 font-normal"
						style={{ minWidth: '6rem' }}
					>
						fg \ bg
					</th>
					{backgrounds.map((bg) => (
						<th key={bg.hex} className="pb-3 pr-2 text-center">
							<div className="flex flex-col items-center gap-1">
								<span
									className="inline-block size-5 rounded-sm border border-black/10"
									style={{ backgroundColor: bg.hex }}
								/>
								<span className="text-hai font-mono text-[10px]">{bg.name}</span>
							</div>
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{foregrounds.map((fg, i) => (
					<tr
						key={fg.hex}
						style={{
							borderTop: '1px solid var(--color-usuzumi)',
						}}
					>
						<td className="py-3 pr-4">
							<div className="flex items-center gap-2">
								<span
									className="inline-block size-4 rounded-sm border border-black/10"
									style={{ backgroundColor: fg.hex }}
								/>
								<span className="text-sumi dark:text-washi font-mono text-xs">
									{fg.name}
								</span>
							</div>
						</td>
						{backgrounds.map((bg) => (
							<td key={bg.hex} className="py-3 pr-2 text-center">
								<div
									className="inline-flex items-center justify-center rounded p-2"
									style={{ backgroundColor: bg.hex, minWidth: '4.5rem' }}
								>
									<ContrastBadge fg={fg.hex} bg={bg.hex} />
								</div>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	</div>
);

export default ContrastMatrix;
