import { ListItem, OrderedList, UnorderedList } from 'ma-design-system';

export const InBothLists = () => (
	<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
		<UnorderedList>
			<ListItem>Exclude the non-essential</ListItem>
			<ListItem>Favour decisions that age well</ListItem>
			<ListItem>The discipline of leaving things out</ListItem>
		</UnorderedList>
		<OrderedList>
			<ListItem>Establish the grid</ListItem>
			<ListItem>Set the type</ListItem>
			<ListItem>Add colour sparingly</ListItem>
		</OrderedList>
	</div>
);
