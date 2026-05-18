import { getContrastColor } from '../../lib/color-contrast';

interface RampEntry {
	name: string;
	kanji: string;
	hex: string;
	role: string;
}

const beniRamp: RampEntry[] = [
	{ name: 'Beni Dark', kanji: '深紅', hex: '#6A0818', role: 'Active / pressed' },
	{ name: 'Beni', kanji: '紅', hex: '#900B20', role: 'Primary accent' },
	{ name: 'Beni Muted', kanji: '渋紅', hex: '#C75566', role: 'Visited / secondary' },
	{ name: 'Beni Light', kanji: '薄紅', hex: '#B83A4E', role: 'Hover / dark-mode' },
	{ name: 'Beni Pale', kanji: '紅白', hex: '#F2D5DA', role: 'Selection / highlight' },
];

export const ColorRamp = () => (
	<div className="mbe-0 overflow-hidden rounded-md">
		<div className="flex">
			{beniRamp.map((entry) => {
				const textColor =
					getContrastColor(entry.hex) === 'dark'
						? 'var(--color-sumi)'
						: 'var(--color-washi)';
				return (
					<div
						key={entry.hex}
						className="flex flex-1 flex-col justify-between p-3 md:p-4"
						style={{ backgroundColor: entry.hex, color: textColor }}
					>
						<div className="flex flex-col gap-1">
							<span className="font-mono text-xs opacity-80">{entry.hex}</span>
						</div>
						<div className="mbs-8 flex flex-col gap-0.5">
							<span className="font-japanese text-sm opacity-60">{entry.kanji}</span>
							<span className="text-xs font-medium leading-tight">{entry.name}</span>
							<span className="text-[10px] leading-tight opacity-70">
								{entry.role}
							</span>
						</div>
					</div>
				);
			})}
		</div>
	</div>
);

export default ColorRamp;
