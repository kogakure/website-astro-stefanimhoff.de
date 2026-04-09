import {
	Bar,
	BarChart as RechartsBarChart,
	CartesianGrid,
	Cell,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const COLORS = [
	'#900B20', '#6B6B67', '#A0A09C', '#1A1918', '#C8C8C4',
	'#B83A4E', '#C75566', '#F2D5DA', '#6A0818', '#0E0D0C',
	'#E6E6E6', '#F2F2F0', '#4e4b45', '#807e77', '#34322e',
	'#b3b2ab', '#5a5751', '#272522',
];

type ChartJsData = {
	labels: string[];
	datasets: { data: number[]; label?: string }[];
};

type BarChartProps = {
	data: ChartJsData;
	options?: Record<string, unknown>;
};

export const BarChart = ({ data }: BarChartProps) => {
	const chartData = data.labels.map((label, i) => ({
		name: label,
		value: data.datasets[0]?.data[i] ?? 0,
	}));

	return (
		<ResponsiveContainer width="100%" height={400}>
			<RechartsBarChart data={chartData} margin={{ top: 8, right: 0, left: 0, bottom: 64 }}>
				<CartesianGrid vertical={false} stroke="rgba(0,0,0,0.08)" />
				<XAxis
					dataKey="name"
					tick={{ fontSize: 12 }}
					angle={-45}
					textAnchor="end"
					interval={0}
				/>
				<YAxis tick={{ fontSize: 12 }} />
				<Tooltip formatter={(value: number) => value.toLocaleString()} />
				<Bar dataKey="value" radius={[2, 2, 0, 0]}>
					{chartData.map((_, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Bar>
			</RechartsBarChart>
		</ResponsiveContainer>
	);
};
