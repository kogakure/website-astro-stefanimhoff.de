import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	open?: boolean;
	summary?: string;
}

export const Banner = ({ className, open, summary, children, ...props }: Props) => (
	<aside
		className={cn(
			'rounded-2 mbe-10 [&_p:last-of-type]:mbe-0 bg-black/5 p-10 dark:bg-white/5',
			className
		)}
		{...props}
	>
		{summary ? (
			<details open={open} className="group">
				<summary className="group-open:mbe-8 cursor-pointer font-black leading-4 tracking-tight">
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
