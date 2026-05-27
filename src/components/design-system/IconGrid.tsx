import {
	type Icon,
	CaretDownIcon,
	CircleHalfIcon,
	DownloadSimpleIcon,
	GithubLogoIcon,
	InstagramLogoIcon,
	ListMagnifyingGlassIcon,
	MinusIcon,
	PlusIcon,
	XIcon,
	XLogoIcon,
} from '@phosphor-icons/react';

const icons: { name: string; component: Icon; usage: string }[] = [
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
	{ name: 'MinusIcon', component: MinusIcon, usage: 'TableOfContents collapse' },
	{ name: 'PlusIcon', component: PlusIcon, usage: 'TableOfContents expand' },
	{ name: 'XIcon', component: XIcon, usage: 'Close / clear filters' },
	{ name: 'XLogoIcon', component: XLogoIcon, usage: 'Footer social' },
];

export const IconGrid = () => (
	<div className="bg-kiri dark:bg-sumi overflow-hidden rounded-md" data-ma="IconGrid">
		<div className="grid grid-cols-2 gap-px sm:grid-cols-3 md:grid-cols-5">
			{icons.map(({ name, component: Icon, usage }) => (
				<div
					key={name}
					className="bg-kiri dark:bg-sumi flex flex-col items-center gap-3 p-5"
				>
					<Icon size={24} weight="regular" />
					<div className="flex flex-col items-center gap-0.5 text-center">
						<span className="text-beni dark:text-beni-light font-mono text-[10px] font-medium">
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
			className="border-usuzumi dark:border-nezumi border-bs-1 pli-4 pbl-3 font-mono text-[10px]"
			style={{ color: 'var(--color-hai)' }}
		>
			{icons.length} icons · Phosphor Regular · 24 × 24 px
		</div>
	</div>
);

export default IconGrid;
