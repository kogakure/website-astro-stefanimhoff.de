'use client';

import {
	useEffect,
	useRef,
	useState,
	type CSSProperties,
	type HTMLAttributes,
	type ReactNode,
} from 'react';
import { cn } from '../../lib/utils';

const DEFAULT_PIXELS_PER_SECOND = 65;

interface Props extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
	children: ReactNode;
	pixelsPerSecond?: number;
}

export const Marquee = ({
	children,
	pixelsPerSecond = DEFAULT_PIXELS_PER_SECOND,
	className,
	...props
}: Props) => {
	const trackRef = useRef<HTMLDivElement>(null);
	const [duration, setDuration] = useState(40);

	useEffect(() => {
		const el = trackRef.current;
		if (!el) return;
		const measure = () => {
			const halfWidth = el.scrollWidth / 2;
			if (halfWidth > 0) setDuration(halfWidth / pixelsPerSecond);
		};
		measure();
		const ro = new ResizeObserver(measure);
		ro.observe(el);
		return () => ro.disconnect();
	}, [pixelsPerSecond, children]);

	return (
		<div className={cn('overflow-hidden py-3', className)} aria-hidden="true" {...props}>
			<div
				ref={trackRef}
				className="marquee-track flex whitespace-nowrap"
				style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
			>
				<div className="flex shrink-0">{children}</div>
				<div className="flex shrink-0" aria-hidden="true">
					{children}
				</div>
			</div>
		</div>
	);
};

export default Marquee;
