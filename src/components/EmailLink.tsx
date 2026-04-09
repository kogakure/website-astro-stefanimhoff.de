import type { AnchorHTMLAttributes } from 'react';
import { PaperPlaneTilt } from '@phosphor-icons/react';
import { cn } from '../lib/utils';
import { TextLink } from './TextLink';

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
	icon?: boolean;
	text?: string;
}

export const EmailLink = ({ className, icon = true, text = 'Email', ...props }: Props) => (
	<TextLink className={cn('group', className)} href="#protected-email" data-email-link {...props}>
		{text}
		{icon && (
			<span className="more-icon relative inline-flex mis-[0.2em] block-start-[0.3em] inline-start-[0.2em]">
				<PaperPlaneTilt
					aria-hidden="true"
					className="icon h-icon w-icon transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
				/>
			</span>
		)}
	</TextLink>
);

export default EmailLink;
