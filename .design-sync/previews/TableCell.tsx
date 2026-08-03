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
			<TableRow>
				<TableCell>Headline</TableCell>
				<TableCell>h2</TableCell>
				<TableCell>Section heading</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>Tag</TableCell>
				<TableCell>a / button / span</TableCell>
				<TableCell>Filter label pill</TableCell>
			</TableRow>
		</TableBody>
	</Table>
);
