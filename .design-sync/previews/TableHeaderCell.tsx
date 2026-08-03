import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
} from 'ma-design-system';

export const InTable = () => (
	<Table>
		<TableHead>
			<TableRow>
				<TableHeaderCell>Component</TableHeaderCell>
				<TableHeaderCell>Element</TableHeaderCell>
				<TableHeaderCell>Purpose</TableHeaderCell>
			</TableRow>
		</TableHead>
		<TableBody>
			<TableRow>
				<TableCell>Text</TableCell>
				<TableCell>p</TableCell>
				<TableCell>Body copy paragraph</TableCell>
			</TableRow>
		</TableBody>
	</Table>
);
