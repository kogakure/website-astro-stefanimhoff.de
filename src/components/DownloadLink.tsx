import type { FunctionalComponent, JSX } from 'preact';

import { TextLink } from '.';
import { Download } from './icons';

interface Props extends JSX.HTMLAttributes<HTMLAnchorElement> {
	href: string;
	text: string;
}

export const DownloadLink: FunctionalComponent<Props> = ({ href, text, ...props }) => (
	<TextLink class="group" href={href} {...props}>
		{text}
		<span class="more-icon relative inline-flex mis-[0.2em] block-start-[0.4em]">
			<Download
				aria-hidden="true"
				class="icon h-icon w-icon transition-transform duration-500 ease-in-out group-hover:translate-y-1 group-focus:translate-y-1"
			/>
		</span>
	</TextLink>
);
