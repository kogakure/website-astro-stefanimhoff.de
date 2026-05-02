import Hanko from '../icons/Hanko';

interface Variant {
	label: string;
	bg: string;
	fill: string;
	ringColor: string;
	textColor: string;
	note: string;
}

const variants: Variant[] = [
	{
		label: 'On Washi',
		bg: '#E6E6E6',
		fill: '#900B20',
		ringColor: 'rgba(144,11,32,0.25)',
		textColor: '#6B6B67',
		note: 'Primary — 7.46:1 WCAG AAA',
	},
	{
		label: 'On Sumi',
		bg: '#0E0D0C',
		fill: '#E6E6E6',
		ringColor: 'rgba(230,230,230,0.2)',
		textColor: '#A0A09C',
		note: 'Dark context — Washi fill, 13.4:1',
	},
	{
		label: 'On Beni',
		bg: '#900B20',
		fill: '#E6E6E6',
		ringColor: 'rgba(230,230,230,0.2)',
		textColor: 'rgba(230,230,230,0.6)',
		note: 'Seal / print — reserved use',
	},
];

const LOGO_SIZE = 80;
const SAFE_RATIO = 1.5; // safe zone = logo * 1.5

export const LogoSpecimen = () => (
	<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
		{variants.map((v) => (
			<div
				key={v.label}
				className="overflow-hidden rounded-md"
				style={{ backgroundColor: v.bg }}
			>
				<div className="flex items-center justify-center" style={{ height: 200 }}>
					<div
						className="relative flex items-center justify-center"
						style={{
							width: LOGO_SIZE * SAFE_RATIO,
							height: LOGO_SIZE * SAFE_RATIO,
						}}
					>
						{/* Safe-space dashed ring */}
						<div
							className="pointer-events-none absolute inset-0 rounded-full"
							style={{
								border: `1px dashed ${v.ringColor}`,
							}}
						/>
						<Hanko
							style={{
								width: LOGO_SIZE,
								height: LOGO_SIZE,
								fill: v.fill,
							}}
						/>
					</div>
				</div>
				<div className="px-4 py-3" style={{ borderTop: `1px solid ${v.ringColor}` }}>
					<div
						className="font-mono text-xs font-medium"
						style={{ color: v.fill === '#900B20' ? '#900B20' : v.fill }}
					>
						{v.label}
					</div>
					<div className="font-mono text-[10px]" style={{ color: v.textColor }}>
						{v.note}
					</div>
				</div>
			</div>
		))}
	</div>
);

export default LogoSpecimen;
