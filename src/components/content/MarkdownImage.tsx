import type { ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	noMargin?: boolean;
}

export const MarkdownImage = ({ className, noMargin, src, alt = '', ...props }: Props) => (
	<div
		className={cn('rounded-2 mbe-10 mbs-0 block h-auto w-full', noMargin && 'mbe-0', className)}
	>
		<img
			src={src}
			alt={alt}
			decoding="async"
			loading="lazy"
			data-lightbox="true"
			tabIndex={0}
			role="button"
			aria-label="Open image in lightbox"
			className="cursor-zoom-in transition-[transform,filter] duration-200 ease-[cubic-bezier(0,0,0.38,0.9)] hover:scale-[1.01] hover:brightness-[1.03]"
			{...props}
		/>
	</div>
);

export default MarkdownImage;
