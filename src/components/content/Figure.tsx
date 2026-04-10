import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	caption?: string;
	size?: 'regular' | 'wide' | 'fullsize';
}

export const Figure = ({ caption, className, size = 'regular', children, ...props }: Props) => (
	<figure
		className={cn(
			'rounded-2 mbs-0 mie-0 mis-0 mbe-13',
			size === 'wide' && 'figure-wide',
			size === 'fullsize' && 'figure-fullsize',
			className
		)}
		{...props}
	>
		<div className="figure-content flex flex-wrap gap-6 md:flex-nowrap [&_div]:flex-grow">
			{children}
		</div>
		{caption && (
			<figcaption className="text-2 mbs-2 text-center [text-wrap:balance]">
				{caption}
			</figcaption>
		)}
	</figure>
);

export default Figure;
