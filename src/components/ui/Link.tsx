import type { AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href?: string;
}

const OWN_HOST = /^(?:.+\.)?stefanimhoff\.de$/i;

const isExternalUrl = (href: string): boolean => {
	try {
		const { hostname } = new URL(href);
		if (OWN_HOST.test(hostname)) return false;
		if (hostname.toLowerCase() === 'localhost') return false;
		return true;
	} catch {
		return false;
	}
};

export const Link = ({ className, href = '#', children, ...props }: Props) => {
	const isExternal = isExternalUrl(href as string);
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
			data-ma="Link"
		>
			{children}
		</a>
	);
};

export default Link;
