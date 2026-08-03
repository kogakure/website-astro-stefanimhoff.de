import { LineBreak, Text } from 'ma-design-system';

export const Default = () => (
	<Text>
		First line of text.
		<LineBreak />
		Second line, forced onto its own line by an explicit break.
	</Text>
);
