import type { HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

interface Props extends HTMLAttributes<HTMLIFrameElement> {
	id: string;
}

export const Spotify = ({ className, id, ...props }: Props) => (
	<iframe
		allow="accelerometer; autoplay; encrypted-media; fullscreeen; picture-in-picture"
		className={cn('mbe-10 w-full', className)}
		height="352"
		loading="lazy"
		src={`https://open.spotify.com/embed/show/${id}?utm_source=generator&theme=0`}
		width="100%"
		{...props}
	/>
);

export default Spotify;
