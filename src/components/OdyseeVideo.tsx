import cx from 'classnames';

import type { FunctionalComponent } from 'preact';

interface Props {
	class?: string;
	id: string;
}

export const OdyseeVideo: FunctionalComponent<Props> = ({ class: className, id, ...props }) => {
	const classes = cx('relative aspect-video mbe-10', className);

	return (
		<div class={classes} {...props}>
			<iframe
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				class="absolute h-full w-full"
				frameBorder="0"
				src={`https://odysee.com/$/embed/${id}`}
			></iframe>
		</div>
	);
};
