import type { ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
	noMargin?: boolean;
}

export const MarkdownImage = ({ className, noMargin, src, alt = '', ...props }: Props) => (
	<div
		className={cn('rounded-2 mbe-10 mbs-0 block h-auto w-full', noMargin && 'mbe-0', className)}
	>
		<img src={src} alt={alt} decoding="async" loading="lazy" {...props} />
	</div>
);

export default MarkdownImage;
