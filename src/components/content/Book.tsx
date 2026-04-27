import type { ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
}

export const Book = ({ alt = '', className, src, ...props }: Props) => (
	<div
		className={cn(
			'rounded-2 relative box-border grid h-auto max-w-[250px] shrink grow justify-self-center overflow-hidden border border-black/5 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md dark:border-white/5',
			className
		)}
		tabIndex={0}
	>
		<img alt={alt} src={src} {...props} />
	</div>
);

export default Book;
