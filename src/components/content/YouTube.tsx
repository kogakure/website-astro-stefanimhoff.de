import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
	id: string;
	title?: string;
}

export const YouTube = ({ className, id, title = 'YouTube video', ...props }: Props) => (
	<div className={cn('youtube-embed mbe-10 w-full', className)} {...props} data-ma="YouTube">
		{/* @ts-expect-error — lite-youtube is a web component, no JSX types available */}
		<lite-youtube videoid={id} playlabel={title} params="rel=0" />
	</div>
);

export default YouTube;
