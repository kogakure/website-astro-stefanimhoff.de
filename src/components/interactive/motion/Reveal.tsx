import { LazyMotion, domAnimation, m } from 'motion/react';
import type { ReactNode } from 'react';
import {
	VIEWPORT_DEFAULTS,
	fadeIn,
	fadeUp,
	fadeUpReduced,
	useMotionPreset,
} from '../../../lib/motion';

interface Props {
	preset?: 'fadeUp' | 'fadeIn';
	delay?: number;
	className?: string;
	children: ReactNode;
}

export const Reveal = ({ preset = 'fadeUp', delay, className, children }: Props) => {
	const { reduced } = useMotionPreset();

	const base = reduced ? fadeUpReduced : preset === 'fadeIn' ? fadeIn : fadeUp;

	const variants =
		delay && !reduced
			? {
					...base,
					visible: {
						...base.visible,
						transition: {
							...(typeof base.visible === 'object' && 'transition' in base.visible
								? (base.visible.transition as object)
								: {}),
							delay,
						},
					},
				}
			: base;

	return (
		<LazyMotion features={domAnimation} data-ma="Reveal">
			<m.div
				data-reveal=""
				className={className}
				initial="hidden"
				whileInView="visible"
				viewport={VIEWPORT_DEFAULTS}
				variants={variants}
			>
				{children}
			</m.div>
		</LazyMotion>
	);
};

export default Reveal;
