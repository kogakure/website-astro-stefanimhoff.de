import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
	id: string;
	title?: string;
}

export const YouTube = ({ className, id, title = 'YouTube video', ...props }: Props) => (
	<div
		className={cn('mbe-10 relative w-full', className)}
		style={{ aspectRatio: '16/9' }}
		{...props}
	>
		<iframe
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowFullScreen
			className="absolute inset-0 h-full w-full"
			frameBorder="0"
			loading="lazy"
			referrerPolicy="strict-origin-when-cross-origin"
			src={`https://www.youtube-nocookie.com/embed/${id}`}
			title={title}
		/>
	</div>
);

export default YouTube;
