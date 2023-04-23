import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

import { Link } from '.';

interface Props {
	class?: string;
	href?: string;
	label: string;
}

interface InnerFlagProps {
	children: ComponentChild;
}

const InnerFlag: FunctionalComponent<InnerFlagProps> = ({ children }) => (
	<>
		<span class="hidden" aria-hidden="true">
			[
		</span>
		{children}
		<span class="hidden" aria-hidden="true">
			]
		</span>
	</>
);

export const Flag: FunctionalComponent<Props> = ({ label, class: className, href, ...props }) => {
	const classes = cx(
		'rounded-1 border-1 border-solid border-[darkgrey] bg-[lightgrey] font-mono text-[0.7em] text-black decoration-0 pli-[0.3em] pbe-0 pbs-[0.1em] dark:bg-[lightgrey]/80',
		className
	);

	return (
		<>
			{href ? (
				<Link class={classes} href={href} title={label} {...props}>
					<InnerFlag>{label}</InnerFlag>
				</Link>
			) : (
				<span class={classes} title={label} {...props}>
					<InnerFlag>{label}</InnerFlag>
				</span>
			)}
		</>
	);
};
