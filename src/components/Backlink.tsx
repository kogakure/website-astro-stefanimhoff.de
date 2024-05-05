import cx from 'classnames';

import type { FunctionalComponent, JSX } from 'preact';

import { Link } from '.';
import { ArrowLeft } from './icons';

interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {
	class?: string;
	backLink?: string;
}

export const Backlink: FunctionalComponent<Props> = ({ backLink, class: className, ...props }) => {
	const classes = cx(
		'col-span-2 col-start-1 h-clickarea w-clickarea items-center justify-center self-center justify-self-center transition-transform duration-500 ease-in-out hover:-translate-x-1 focus:-translate-x-1 print:hidden md:col-span-1',
		className
	);

	return (
		<>
			{backLink && (
				<Link
					aria-label="Back to overview"
					class={classes}
					data-umami-event="Back to overview"
					href={backLink}
					{...props}
				>
					<button
						class="flex h-clickarea w-clickarea cursor-pointer items-center justify-center border-none text-[0]"
						type="button"
						tabIndex={-1}
					>
						<ArrowLeft class="icon h-icon w-icon" />
					</button>
				</Link>
			)}
		</>
	);
};
