import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../lib/utils';
import { Link } from './Link';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const TextLink = ({ className, children, ...props }: Props) => (
	<Link
		className={cn(
			'inline font-semibold text-shibui-950 underline decoration-shibui-900/20 decoration-4 underline-offset-auto no-common-ligatures hover:!decoration-accent focus:!decoration-accent dark:text-shibui-200/[0.87] dark:decoration-shibui-100/20',
			className
		)}
		{...props}
	>
		{children}
	</Link>
);

export default TextLink;
