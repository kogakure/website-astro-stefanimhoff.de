import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

export const Link = ({ className, href = '#', children, ...props }: Props) => {
	const isExternal = /^https?:\/\//i.test(href as string);
	return (
		<a
			className={cn('link', isExternal && 'external', className)}
			data-umami-event={
				isExternal ? `Link: ${href.replace(/^(https?:\/\/)/, '')}` : undefined
			}
			href={href}
			rel={isExternal ? 'nofollow noopener noreferrer' : undefined}
			target={isExternal ? '_blank' : undefined}
			{...props}
		>
			{children}
		</a>
	);
};

export default Link;
