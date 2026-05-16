import { LazyMotion, domAnimation, m } from 'motion/react';
import type { ReactNode } from 'react';
import {
	VIEWPORT_DEFAULTS,
	fadeUpReduced,
	staggerContainer,
	staggerItem,
	useMotionPreset,
} from '../../../lib/motion';

interface StaggerListProps {
	as?: 'ul' | 'ol' | 'div';
	stagger?: number;
	delay?: number;
	className?: string;
	children: ReactNode;
}

interface StaggerItemProps {
	as?: 'li' | 'div';
	className?: string;
	children: ReactNode;
}

export const StaggerList = ({
	as: Tag = 'ul',
	stagger = 0.06,
	delay = 0,
	className,
	children,
}: StaggerListProps) => {
	const { reduced } = useMotionPreset();
	const variants = reduced ? staggerContainer(0, 0) : staggerContainer(delay, stagger);
	const MotionTag = m[Tag];

	return (
		<LazyMotion features={domAnimation}>
			<MotionTag
				className={className}
				variants={variants}
				initial="hidden"
				whileInView="visible"
				viewport={VIEWPORT_DEFAULTS}
			>
				{children}
			</MotionTag>
		</LazyMotion>
	);
};

export const StaggerItem = ({ as: Tag = 'li', className, children }: StaggerItemProps) => {
	const { reduced } = useMotionPreset();
	const MotionTag = m[Tag];
	const variants = reduced ? fadeUpReduced : staggerItem;

	return (
		<MotionTag className={className} variants={variants}>
			{children}
		</MotionTag>
	);
};

export default StaggerList;
