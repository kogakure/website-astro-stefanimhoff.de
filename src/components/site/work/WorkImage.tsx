import { LazyMotion, domAnimation, m } from 'motion/react';
import { VIEWPORT_DEFAULTS, useMotionPreset } from '../../../lib/motion';
import { cn } from '../../../lib/utils';

interface Props {
	src: string;
	srcset?: string;
	sizes?: string;
	width?: number;
	height?: number;
	alt: string;
	largeSrc?: string;
	className?: string;
}

const IMG_CLASS =
	'w-full transition-[transform,filter] duration-200 ease-enter hover:scale-[1.01] hover:brightness-[1.03]';

export const WorkImage = ({
	src,
	srcset,
	sizes,
	width,
	height,
	alt,
	largeSrc,
	className,
}: Props) => {
	const { fadeUp } = useMotionPreset();

	return (
		<LazyMotion features={domAnimation} data-ma="WorkImage">
			<m.div
				initial="hidden"
				whileInView="visible"
				viewport={VIEWPORT_DEFAULTS}
				variants={fadeUp}
				className={cn('rounded-2 overflow-hidden', className)}
			>
				<button
					type="button"
					aria-label="Open image in lightbox"
					data-lightbox="true"
					className="block h-full w-full cursor-zoom-in border-0 bg-transparent p-0"
				>
					<img
						src={src}
						srcSet={srcset}
						sizes={sizes}
						width={width}
						height={height}
						alt={alt}
						data-lightbox-src={largeSrc}
						data-lightbox-width={width}
						data-lightbox-height={height}
						className={IMG_CLASS}
						loading="lazy"
						decoding="async"
					/>
				</button>
			</m.div>
		</LazyMotion>
	);
};

export default WorkImage;
