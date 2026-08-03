import { TaskCheckbox, Text } from 'ma-design-system';

export const TaskList = () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
		<Text className="mbe-0">
			<TaskCheckbox defaultChecked /> Draft the outline
		</Text>
		<Text className="mbe-0">
			<TaskCheckbox /> Write the first section
		</Text>
		<Text className="mbe-0">
			<TaskCheckbox /> Edit and publish
		</Text>
	</div>
);
