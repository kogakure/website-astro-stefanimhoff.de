import { InlineCode, Text } from 'ma-design-system';

export const Default = () => (
	<Text>
		Use <InlineCode>var(--color-beni)</InlineCode> for accent elements. Never use{' '}
		<InlineCode>--color-sumi</InlineCode> directly.
	</Text>
);
