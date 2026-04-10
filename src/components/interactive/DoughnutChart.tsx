import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = [
	'#900B20',
	'#6B6B67',
	'#A0A09C',
	'#1A1918',
	'#C8C8C4',
	'#B83A4E',
	'#C75566',
	'#F2D5DA',
	'#6A0818',
	'#0E0D0C',
	'#E6E6E6',
	'#F2F2F0',
	'#4e4b45',
	'#807e77',
	'#34322e',
	'#b3b2ab',
	'#5a5751',
	'#272522',
];

type ChartJsData = {
	labels: string[];
	datasets: { data: number[]; label?: string }[];
};

type DoughnutChartProps = {
	data: ChartJsData;
	options?: Record<string, unknown>;
};

export const DoughnutChart = ({ data }: DoughnutChartProps) => {
	const chartData = data.labels.map((label, i) => ({
		name: label,
		value: data.datasets[0]?.data[i] ?? 0,
	}));

	return (
		<ResponsiveContainer width="100%" height={400}>
			<PieChart>
				<Pie
					data={chartData}
					cx="50%"
					cy="50%"
					innerRadius="40%"
					outerRadius="70%"
					paddingAngle={2}
					dataKey="value"
				>
					{chartData.map((_, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip formatter={(value: number) => value.toLocaleString()} />
				<Legend />
			</PieChart>
		</ResponsiveContainer>
	);
};
