import type { ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	noMargin?: boolean;
}

export const MarkdownImage = ({ className, noMargin, src, alt = '', ...props }: Props) => (
	<div
		className={cn('rounded-2 mbe-10 mbs-0 block h-auto w-full', noMargin && 'mbe-0', className)}
	>
		<button
			type="button"
			aria-label="Open image in lightbox"
			className="block w-full cursor-zoom-in border-0 bg-transparent p-0"
			data-lightbox="true"
		>
			<img
				src={src}
				alt={alt}
				decoding="async"
				loading="lazy"
				className="ease-enter transition-[transform,filter] duration-200 hover:scale-[1.01] hover:brightness-[1.03]"
				{...props}
			/>
		</button>
	</div>
);

export default MarkdownImage;
