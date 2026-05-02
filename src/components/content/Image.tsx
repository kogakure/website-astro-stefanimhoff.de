import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	alt?: string;
	caption?: string;
	decoding?: 'async' | 'sync' | 'auto';
	enableLightbox?: boolean;
	fullHeight?: boolean;
	fullWidth?: boolean;
	height?: string | number;
	href?: string;
	loading?: 'lazy' | 'eager';
	noMargin?: boolean;
	size?: 'regular' | 'wide' | 'fullsize';
	source?: string;
	sourceUrl?: string;
	src: string;
	width?: string | number;
}

const Image = ({
	alt,
	caption,
	className,
	decoding = 'async',
	enableLightbox = true,
	fullHeight = false,
	fullWidth = true,
	height,
	href,
	loading = 'lazy',
	noMargin,
	size: _size,
	source,
	sourceUrl,
	src,
	width,
	...props
}: Props) => {
	const lightbox = enableLightbox && !href;
	const imgEl = (
		<img
			className={cn(
				'rounded-2 object-cover',
				lightbox &&
					'cursor-zoom-in transition-[transform,filter] duration-200 ease-[cubic-bezier(0,0,0.38,0.9)] hover:scale-[1.01] hover:brightness-[1.03]'
			)}
			decoding={decoding}
			loading={loading}
			src={src}
			alt={alt ?? ''}
			width={width}
			height={height}
			{...(lightbox
				? {
						'data-lightbox': 'true' as const,
						tabIndex: 0,
						role: 'button' as const,
						'aria-label': 'Open image in lightbox',
					}
				: {})}
		/>
	);

	return (
		<figure
			className={cn(
				'mis mbe-13 mbs-0 mie-0 block',
				noMargin && 'mbe-0!',
				fullHeight && 'h-full!',
				fullWidth && 'w-full!',
				className
			)}
			{...props}
		>
			<div className="figure-content mbs-0 gap-6 [&_img]:w-full [&_img]:max-w-full">
				{href ? <a href={href}>{imgEl}</a> : imgEl}
			</div>
			{(caption || source) && (
				<figcaption className="text-2 mbs-2 text-balance text-center">
					{caption}
					{caption && source ? '–' : ''}
					{source &&
						(sourceUrl ? (
							<cite>
								<a href={sourceUrl}>{source}</a>
							</cite>
						) : (
							<cite>{source}</cite>
						))}
				</figcaption>
			)}
		</figure>
	);
};

export default Image;
