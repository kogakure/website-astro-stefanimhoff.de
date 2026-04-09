import type { ImgHTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	src: string;
}

export const Book = ({ alt = '', className, src, ...props }: Props) => (
	<div
		className={cn(
			"image-shadow relative box-border grid h-auto max-w-[250px] shrink grow justify-self-center overflow-hidden align-bottom shadow-book before:absolute before:z-10 before:block before:h-full before:w-[0.5em] before:bg-gradient-to-r before:from-black/30 before:to-transparent before:shadow-book-before before:content-[''] before:rounded-is-1",
			className
		)}
		tabIndex={0}
	>
		<img alt={alt} src={src} {...props} />
	</div>
);

export default Book;
