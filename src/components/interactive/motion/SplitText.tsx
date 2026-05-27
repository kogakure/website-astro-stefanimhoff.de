import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import { DUR_MODERATE, EASE_ENTER, fadeUpReduced, staggerContainer } from '../../../lib/motion';

interface Props {
	text: string;
	splitBy?: 'word' | 'char';
	stagger?: number;
	delay?: number;
	className?: string;
	itemClassName?: string;
}

export const SplitText = ({
	text,
	splitBy = 'word',
	stagger = 0.04,
	delay = 0,
	className,
	itemClassName,
}: Props) => {
	const reduced = useReducedMotion();
	const pieces = splitBy === 'word' ? text.split(' ') : text.split('');

	const containerVariants = reduced ? staggerContainer(0, 0) : staggerContainer(delay, stagger);

	const itemVariants = reduced
		? fadeUpReduced
		: {
				hidden: { opacity: 0, y: 8 },
				visible: {
					opacity: 1,
					y: 0,
					transition: { duration: DUR_MODERATE, ease: EASE_ENTER },
				},
			};

	return (
		<LazyMotion features={domAnimation} data-ma="SplitText">
			<m.span
				role="img"
				className={className}
				variants={containerVariants}
				initial="hidden"
				animate="visible"
				aria-label={text}
			>
				{pieces.map((piece, i) => (
					<m.span
						key={i}
						data-splittext=""
						style={{ display: 'inline-block' }}
						className={itemClassName}
						variants={itemVariants}
						aria-hidden="true"
					>
						{piece}
						{splitBy === 'word' && i < pieces.length - 1 ? ' ' : ''}
					</m.span>
				))}
			</m.span>
		</LazyMotion>
	);
};

export default SplitText;
