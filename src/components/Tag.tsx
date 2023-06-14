import cx from 'classnames';

import type { ComponentChild, FunctionalComponent } from 'preact';

import { Link } from '.';

interface Props {
	active?: boolean;
	children: ComponentChild;
	class?: string;
	href?: string;
}

export const Tag: FunctionalComponent<Props> = ({
	active,
	class: className,
	children,
	href,
	...props
}) => {
	const classes = cx(
		'capitalize border-3 relative inline-flex items-center justify-center rounded-25 border-2 border-shibui-350 bg-shibui-200 px-3 py-1 text-1 font-normal leading-none text-black mie-1 pbs-3 dark:border-shibui-750 dark:bg-shibui-950 dark:text-white min-w-[50px] print:hidden',
		{
			'!bg-shibui-500 !text-white hover:!bg-shibui-700 focus:!bg-shibui-700 dark:!border-shibui-500 dark:!bg-shibui-700 hover:dark:!bg-shibui-400 focus:dark:!bg-shibui-400':
				href,
			'active [&.active]:!border-black/25 !text-white [&.active]:!bg-accent': active,
		},
		className
	);

	return (
		<>
			{href ? (
				<Link href={href} class={classes} {...props}>
					{children}
				</Link>
			) : (
				<span class={classes} {...props}>
					{children}
				</span>
			)}
		</>
	);
};
