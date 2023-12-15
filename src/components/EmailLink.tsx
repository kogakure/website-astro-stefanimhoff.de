import type { FunctionalComponent, JSX } from 'preact';

import { TextLink } from '.';
import { MailSend } from './icons';

interface Props extends Omit<JSX.HTMLAttributes<HTMLAnchorElement>, 'icon'> {
	text?: string;
}

interface EmailLinkProps extends Props {
	icon?: boolean;
}

export const EmailLink: FunctionalComponent<EmailLinkProps> = ({
	icon = true,
	text = 'Email',
	...props
}) => (
	<TextLink class="group" href="#protected-email" data-email-link {...props}>
		{text}
		{icon && (
			<span class="more-icon relative inline-flex mis-[0.2em] block-start-[0.3em] inline-start-[0.2em]">
				<MailSend
					aria-hidden="true"
					class="icon h-icon w-icon transition-transform duration-500 ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
				/>
			</span>
		)}
	</TextLink>
);
