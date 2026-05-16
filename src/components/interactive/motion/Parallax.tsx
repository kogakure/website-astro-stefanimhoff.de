import {
	LazyMotion,
	domAnimation,
	m,
	useReducedMotion,
	useScroll,
	useTransform,
} from 'motion/react';
import type { HTMLAttributes, ReactNode } from 'react';
import { useRef } from 'react';

interface Props extends HTMLAttributes<HTMLDivElement> {
	range?: [number, number];
	children: ReactNode;
}

const ParallaxInner = ({ range = [-16, 16], className, children, ...props }: Props) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'end start'],
	});
	const y = useTransform(scrollYProgress, [0, 1], range);

	return (
		<div ref={ref} className={className} {...props}>
			<m.div style={{ y, willChange: 'transform' }}>{children}</m.div>
		</div>
	);
};

export const Parallax = (props: Props) => {
	const reduced = useReducedMotion();

	if (reduced) {
		return <div className={props.className}>{props.children}</div>;
	}

	return (
		<LazyMotion features={domAnimation}>
			<ParallaxInner {...props} />
		</LazyMotion>
	);
};

export default Parallax;
