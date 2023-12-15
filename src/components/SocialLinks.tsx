import type { FunctionalComponent, JSX } from 'preact';
import type { SVGProps } from 'preact/compat';

import { Link } from '.';
import { Github, Instagram, Mail, TwitterX } from './icons';

import data from '../data/social-links.json';

type IconComponent = FunctionalComponent<SVGProps<SVGSVGElement>>;
type IconMap = { [key: string]: IconComponent };

const renderIcon = (iconName: string): JSX.Element => {
	const iconMap: IconMap = {
		mail: Mail,
		twitter: TwitterX,
		github: Github,
		instagram: Instagram,
	};

	const IconComponent = iconMap[iconName];
	return <IconComponent class="icon h-icon-small w-icon-small" />;
};

export const SocialLinks: FunctionalComponent = () => (
	<nav class="flex flex-1 sm:justify-center" aria-label="Social Links">
		{data.map((item, index) => (
			<Link
				aria-label={item.text}
				class="flex h-clickarea w-clickarea cursor-pointer items-center justify-center"
				href={item.url}
				key={index}
				title={item.text}
				{...(item.props ? item.props : {})}
			>
				{renderIcon(item.icon)}
			</Link>
		))}
	</nav>
);
