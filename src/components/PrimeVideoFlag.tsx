import cx from 'classnames';

import type { FunctionalComponent } from 'preact';

import { Link } from '.';

interface Props {
	class?: string;
	id: string;
}

export const PrimeVideoFlag: FunctionalComponent<Props> = ({ class: className, id, ...props }) => {
	const classes = cx(
		'rounded-1 border-1 border-solid border-sky-500 bg-sky-500 font-mono text-[0.7em] text-white decoration-0 pli-[0.3em] pbe-0 pbs-[0.1em]',
		className
	);

	return (
		<Link
			class={classes}
			href={`https://www.amazon.de/gp/video/detail/${id}`}
			title="Netflix"
			{...props}
		>
			<span class="hidden" aria-hidden="true">
				[
			</span>
			P
			<span class="hidden" aria-hidden="true">
				rime Video]
			</span>
		</Link>
	);
};
