import type { HTMLAttributes } from 'react';
import { cn } from '../lib/utils';

interface Props extends HTMLAttributes<HTMLElement> {
	base: string;
	text: string;
}

export const Ruby = ({ base, text, className, ...props }: Props) => (
	<ruby className={cn(className)} {...props}>
		{base}
		<rp>（</rp>
		<rt className="relative -block-start-[0.3em]">{text}</rt>
		<rp>）</rp>
	</ruby>
);

export default Ruby;
