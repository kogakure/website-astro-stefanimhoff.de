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
	className?: string;
}

const BASE_IMG_CLASS =
	'ease-enter w-full transition-[transform,filter] duration-200 hover:scale-[1.01] hover:brightness-[1.03]';

const ParallaxImg = ({ src, alt, intensity = 16, className }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
	const y = useTransform(scrollYProgress, [0, 1], [intensity, -intensity]);

	return (
		<div ref={ref}>
			<m.div style={{ y, willChange: 'transform' }}>
				<img
					src={src}
					alt={alt}
					className={cn(BASE_IMG_CLASS, className)}
					loading="lazy"
					decoding="async"
				/>
			</m.div>
		</div>
	);
};

export const WorkImageParallax = ({ src, alt, intensity = 16, className }: Props) => {
	const reduced = useReducedMotion();

	if (reduced) {
		return (
			<img
				src={src}
				alt={alt}
				className={cn(BASE_IMG_CLASS, className)}
				loading="lazy"
				decoding="async"
			/>
		);
	}

	return (
		<LazyMotion features={domAnimation}>
			<ParallaxImg src={src} alt={alt} intensity={intensity} className={className} />
		</LazyMotion>
	);
};

export default WorkImageParallax;
