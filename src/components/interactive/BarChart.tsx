import {
	Bar,
	CartesianGrid,
	BarChart as RechartsBarChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';

const COLORS = [
	'var(--color-beni)',
	'var(--color-nezumi)',
	'var(--color-beni-light)',
	'var(--color-beni-muted)',
	'var(--color-beni-dark)',
	'var(--color-hai)',
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
		fill: COLORS[i % COLORS.length],
	}));

	return (
		<ResponsiveContainer width="100%" height={500} data-ma="BarChart">
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
				<Tooltip formatter={(value) => (value as number).toLocaleString()} />
				<Bar dataKey="value" radius={[2, 2, 0, 0]} />
			</RechartsBarChart>
		</ResponsiveContainer>
	);
};
