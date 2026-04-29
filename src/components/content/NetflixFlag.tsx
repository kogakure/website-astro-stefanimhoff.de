import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Link } from '../ui/Link';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
	id: string;
}

export const NetflixFlag = ({ className, id, ...props }: Props) => (
	<Link
		className={cn(
			'rounded-1 border-1 pbe-0 pbs-[0.1em] border-solid border-red-600 bg-red-600 px-[0.3em] font-mono text-[0.7em] text-white decoration-0 print:border-gray-500 print:bg-transparent',
			className
		)}
		data-umami-event={`Netflix: ${id}`}
		href={`https://www.netflix.com/title/${id}`}
		title="Netflix"
		{...props}
	>
		<span className="hidden" aria-hidden="true">
			[
		</span>
		N
		<span className="hidden" aria-hidden="true">
			etflix]
		</span>
	</Link>
);

export default NetflixFlag;
