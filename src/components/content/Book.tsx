import type { ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
}

export const Book = ({ alt = '', className, src, ...props }: Props) => (
	<div
		className={cn(
			'rounded-2 max-w-62.5 duration-moderate ease-standard relative box-border grid h-auto shrink grow justify-self-center overflow-hidden border border-black/5 shadow-sm transition-shadow hover:shadow-md dark:border-white/5',
			className
		)}
		tabIndex={0}
	>
		<img alt={alt} src={src} loading="lazy" decoding="async" {...props} />
	</div>
);

export default Book;
