import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Link } from '../ui/Link';

interface Props extends HTMLAttributes<HTMLAnchorElement> {
	id: string;
}

export const AppleTVFlag = ({ className, id, ...props }: Props) => (
	<Link
		className={cn(
			'rounded-1 border-1 pbe-0 pbs-[0.1em] border-solid border-gray-600 bg-black px-[0.3em] font-mono text-[0.7em] text-white decoration-0 print:border-gray-500 print:bg-transparent',
			className
		)}
		data-umami-event={`Apple TV+: ${id}`}
		href={`https://tv.apple.com/show/umc.cmc.${id}`}
		title="Apple TV+"
		{...props}
	>
		<span className="hidden" aria-hidden="true">
			[
		</span>
		Apple TV+
		<span className="hidden" aria-hidden="true">
			]
		</span>
	</Link>
);

export default AppleTVFlag;
