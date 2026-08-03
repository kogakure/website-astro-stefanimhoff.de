import { Banner, Text } from 'ma-design-system';

export const Default = () => (
	<Banner>
		<Text>Default banner — informational callout with neutral styling on Kiri background.</Text>
	</Banner>
);

export const Accent = () => (
	<Banner tone="accent">
		<Text>Accent banner — left Beni border draws attention. Use for important notes.</Text>
	</Banner>
);

export const Collapsible = () => (
	<Banner summary="Collapsible banner" open>
		<Text>
			This content is hidden behind a disclosure. The summary label acts as the trigger.
		</Text>
	</Banner>
);
