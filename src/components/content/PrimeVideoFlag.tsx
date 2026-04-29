import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Link } from '../ui/Link';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
	id: string;
}

export const PrimeVideoFlag = ({ className, id, ...props }: Props) => (
	<Link
		className={cn(
			'rounded-1 border-1 pbe-0 pbs-[0.1em] border-solid border-sky-500 bg-sky-500 px-[0.3em] font-mono text-[0.7em] text-white decoration-0 print:border-gray-500 print:bg-transparent',
			className
		)}
		data-umami-event={`PrimeVideo: ${id}`}
		href={`https://www.amazon.de/gp/video/detail/${id}`}
		title="Prime Video"
		{...props}
	>
		<span className="hidden" aria-hidden="true">
			[
		</span>
		P
		<span className="hidden" aria-hidden="true">
			rime Video]
		</span>
	</Link>
);

export default PrimeVideoFlag;
