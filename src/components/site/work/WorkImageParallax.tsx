import {
	LazyMotion,
	domAnimation,
	m,
	useReducedMotion,
	useScroll,
	useTransform,
} from 'motion/react';
import { useRef } from 'react';
import { cn } from '../../../lib/utils';

interface Props {
	src: string;
	alt: string;
	intensity?: number;
	direction?: 'up' | 'down';
	className?: string;
}

const IMG_CLASS =
	'w-full transition-[transform,filter] duration-200 ease-enter hover:scale-[1.01] hover:brightness-[1.03]';

const ParallaxCard = ({ src, alt, intensity = 10, direction = 'up', className }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
	const y = useTransform(
		scrollYProgress,
		[0, 1],
		direction === 'up' ? [intensity, -intensity] : [-intensity, intensity]
	);

	return (
		<m.div
			ref={ref}
			style={{ y, willChange: 'transform' }}
			className={cn('rounded-2 overflow-hidden', className)}
		>
			<button
				type="button"
				aria-label="Open image in lightbox"
				data-lightbox="true"
				className="block h-full w-full cursor-zoom-in border-0 bg-transparent p-0"
			>
				<img src={src} alt={alt} className={IMG_CLASS} loading="lazy" decoding="async" />
			</button>
		</m.div>
	);
};

export const WorkImageParallax = ({
	src,
	alt,
	intensity = 10,
	direction = 'up',
	className,
}: Props) => {
	const reduced = useReducedMotion();

	if (reduced) {
		return (
			<div className={cn('rounded-2 overflow-hidden', className)}>
				<button
					type="button"
					aria-label="Open image in lightbox"
					data-lightbox="true"
					className="block h-full w-full cursor-zoom-in border-0 bg-transparent p-0"
				>
					<img
						src={src}
						alt={alt}
						className={IMG_CLASS}
						loading="lazy"
						decoding="async"
					/>
				</button>
			</div>
		);
	}

	return (
		<LazyMotion features={domAnimation}>
			<ParallaxCard
				src={src}
				alt={alt}
				intensity={intensity}
				direction={direction}
				className={className}
			/>
		</LazyMotion>
	);
};

export default WorkImageParallax;
