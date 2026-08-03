import { Tag } from 'ma-design-system';

export const FilterChips = () => (
	<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
		<Tag href="#">Design</Tag>
		<Tag href="#" active>
			Typography
		</Tag>
		<Tag href="#">Motion</Tag>
		<Tag href="#">Color</Tag>
	</div>
);
