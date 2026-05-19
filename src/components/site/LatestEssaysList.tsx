import { trackEvent } from '../../utils/analytics';
import { StaggerItem, StaggerList } from '../interactive/motion';
import EssayLink from '../ui/EssayLink';

interface Post {
	href: string;
	previewUrl?: string;
	label: string;
}

interface Props {
	posts: Post[];
}

export const LatestEssaysList = ({ posts }: Props) => (
	<StaggerList
		as="ul"
		stagger={0.04}
		className='text-3 [&>li]:before:text-beni dark:[&>li]:before:text-beni-light md:-mis-6 [&>li]:pis-6 [&>li]:before:inline-start-0 [&>li]:before:inset-bs-1.5 inset-bs-1.5 relative flex list-none flex-col gap-0 [&>li]:relative [&>li]:before:absolute [&>li]:before:content-["—"]'
	>
		{posts.map(({ href, previewUrl, label }, index) => (
			<StaggerItem key={href}>
				<EssayLink
					href={href}
					data-hover-preview={previewUrl}
					onClick={() => trackEvent('Home: Essay Click', { position: index + 1 })}
				>
					{label}
				</EssayLink>
			</StaggerItem>
		))}
	</StaggerList>
);

export default LatestEssaysList;
