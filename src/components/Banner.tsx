import type { HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	open?: boolean;
	summary?: string;
}

export const Banner = ({ className, open, summary, children, ...props }: Props) => (
	<aside
		className={cn(
			'rounded-2 bg-black/5 p-10 mbe-10 dark:bg-white/5 [&_p:last-of-type]:mbe-0',
			className
		)}
		{...props}
	>
		{summary ? (
			<details open={open} className="group">
				<summary className="cursor-pointer font-black leading-4 tracking-tight group-open:mbe-8">
					{summary}
				</summary>
				{children}
			</details>
		) : (
			children
		)}
	</aside>
);

export default Banner;
