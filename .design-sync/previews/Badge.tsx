import { Badge } from 'ma-design-system';

export const Variants = () => (
	<div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center' }}>
		<Badge>Default</Badge>
		<Badge variant="favorite">Favorite</Badge>
		<Badge variant="language">DE</Badge>
	</div>
);
