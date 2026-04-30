import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	alt?: string;
	caption?: string;
	decoding?: 'async' | 'sync' | 'auto';
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
	const imgEl = (
		<img
			className="rounded-2 object-cover"
			decoding={decoding}
			loading={loading}
			src={src}
			alt={alt ?? ''}
			width={width}
			height={height}
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
