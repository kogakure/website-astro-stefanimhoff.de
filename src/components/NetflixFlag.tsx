import cx from 'classnames';

import type { FunctionalComponent } from 'preact';

import { Link } from '.';

interface Props {
	class?: string;
	id: string;
}

export const NetflixFlag: FunctionalComponent<Props> = ({ class: className, id, ...props }) => {
	const classes = cx(
		'rounded-1 border-1 border-solid border-red-600 bg-red-600 font-mono text-[0.7em] text-white decoration-0 pli-[0.3em] pbe-0 pbs-[0.1em]',
		className
	);

	return (
		<Link
			class={classes}
			href={`https://www.netflix.com/title/${id}`}
			title="Netflix"
			{...props}
		>
			<span class="hidden" aria-hidden="true">
				[
			</span>
			N
			<span class="hidden" aria-hidden="true">
				etflix]
			</span>
		</Link>
	);
};
