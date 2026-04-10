import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Link } from './Link';

interface Props extends HTMLAttributes<HTMLElement> {
	href?: string;
	label: string;
}

const flagClasses =
	'rounded-1 border-1 border-solid border-[darkgrey] bg-[lightgrey] font-mono text-[0.7em] text-black decoration-0 pli-[0.3em] pbe-0 pbs-[0.1em] dark:bg-[lightgrey]/80';

export const Flag = ({ className, href, label, ...props }: Props) => {
	const inner = (
		<>
			<span className="hidden" aria-hidden="true">
				[
			</span>
			{label}
			<span className="hidden" aria-hidden="true">
				]
			</span>
		</>
	);

	return href ? (
		<Link className={cn(flagClasses, className)} href={href} title={label} {...(props as any)}>
			{inner}
		</Link>
	) : (
		<span className={cn(flagClasses, className)} title={label} {...props}>
			{inner}
		</span>
	);
};

export default Flag;
