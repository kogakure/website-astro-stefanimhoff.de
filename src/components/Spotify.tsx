import cx from 'classnames';

import type { FunctionalComponent } from 'preact';

interface Props {
	class?: string;
	id: string;
}

export const Spotify: FunctionalComponent<Props> = ({ class: className, id, ...props }) => {
	const classes = cx('mbe-10 w-full', className);

	return (
		<iframe
			allow="accelerometer; autoplay; encrypted-media; fullscreeen; picture-in-picture"
			class={classes}
			frameBorder="0"
			height="352"
			loading="lazy"
			src={`https://open.spotify.com/embed/show/${id}?utm_source=generator&theme=0`}
			width="100%"
			{...props}
		></iframe>
	);
};
