import {
	CaretDownIcon,
	CircleHalfIcon,
	DownloadSimpleIcon,
	GithubLogoIcon,
	InstagramLogoIcon,
	ListMagnifyingGlassIcon,
	Minus,
	Plus,
	XIcon,
	XLogoIcon,
} from '@phosphor-icons/react';

const icons: {
	name: string;
	component: React.ComponentType<{ size?: number; weight?: string }>;
	usage: string;
}[] = [
	{ name: 'CaretDownIcon', component: CaretDownIcon, usage: 'Banner disclosure, SeriesStepper' },
	{ name: 'CircleHalfIcon', component: CircleHalfIcon, usage: 'Theme toggle' },
	{ name: 'DownloadSimpleIcon', component: DownloadSimpleIcon, usage: 'DownloadLink' },
	{ name: 'GithubLogoIcon', component: GithubLogoIcon, usage: 'Footer social' },
	{ name: 'InstagramLogoIcon', component: InstagramLogoIcon, usage: 'Footer social' },
	{
		name: 'ListMagnifyingGlassIcon',
		component: ListMagnifyingGlassIcon,
		usage: 'Search trigger',
	},
	{ name: 'Minus', component: Minus, usage: 'TableOfContents collapse' },
	{ name: 'Plus', component: Plus, usage: 'TableOfContents expand' },
	{ name: 'XIcon', component: XIcon, usage: 'Close / clear filters' },
	{ name: 'XLogoIcon', component: XLogoIcon, usage: 'Footer social' },
];

export const IconGrid = () => (
	<div className="overflow-hidden rounded-md" style={{ backgroundColor: 'var(--color-kiri)' }}>
		<div className="grid grid-cols-2 gap-px sm:grid-cols-3 md:grid-cols-5">
			{icons.map(({ name, component: Icon, usage }) => (
				<div
					key={name}
					className="flex flex-col items-center gap-3 p-5"
					style={{ backgroundColor: 'var(--color-kiri)' }}
				>
					<Icon size={24} weight="regular" />
					<div className="flex flex-col items-center gap-0.5 text-center">
						<span
							className="font-mono text-[10px] font-medium"
							style={{ color: 'var(--color-beni)' }}
						>
							{name}
						</span>
						<span
							className="font-mono text-[9px]"
							style={{ color: 'var(--color-hai)' }}
						>
							{usage}
						</span>
					</div>
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
			{icons.length} icons · Phosphor Regular · 24 × 24 px
		</div>
	</div>
);

export default IconGrid;
