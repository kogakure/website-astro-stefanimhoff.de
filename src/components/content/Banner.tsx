import { CaretDownIcon } from '@phosphor-icons/react';
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';

import { cn } from '../../lib/utils';
import SectionLabel from '../ui/SectionLabel';

const bannerVariants = cva(
	'rounded-2 mbe-10 relative border border-usuzumi bg-kiri dark:border-nezumi dark:bg-sumi [&_p:last-of-type]:mbe-0',
	{
		variants: {
			tone: {
				default: '',
				accent: 'border-l-2 border-l-beni dark:border-l-beni-light',
			},
		},
		defaultVariants: { tone: 'default' },
	}
);

interface Props extends HTMLAttributes<HTMLElement>, VariantProps<typeof bannerVariants> {
	open?: boolean;
	summary?: string;
}

export const Banner = ({ className, open, summary, tone, children, ...props }: Props) => (
	<aside className={cn(bannerVariants({ tone }), className)} {...props}>
		{summary ? (
			<details open={open} className="banner-disclosure group">
				<summary className="ease-enter flex cursor-pointer list-none items-center gap-3 px-6 py-5 transition-colors duration-200 hover:bg-black/[0.02] dark:hover:bg-white/[0.02] [&::-webkit-details-marker]:hidden">
					<SectionLabel as="span" className="mbe-0 flex-1">
						{summary}
					</SectionLabel>
					<span
						aria-hidden="true"
						className="ease-enter text-hai dark:text-nezumi inline-flex size-4 shrink-0 items-center justify-center transition-transform duration-200 group-open:rotate-180"
					>
						<CaretDownIcon size={12} weight="bold" />
					</span>
				</summary>
				<div className="px-6 pb-6">{children}</div>
			</details>
		) : (
			<div className="p-6">{children}</div>
		)}
	</aside>
);

export default Banner;
