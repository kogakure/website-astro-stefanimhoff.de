import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

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

type DoughnutChartProps = {
	data: ChartJsData;
	options?: Record<string, unknown>;
};

type LegendPayloadEntry = {
	value?: string;
	color?: string;
};

type TooltipEntry = {
	name: string;
	value: number;
	payload: { fill: string };
};

const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: TooltipEntry[] }) => {
	if (!active || !payload?.length) return null;
	const item = payload[0];
	return (
		<div className="pli-3 pbl-2 border-usuzumi bg-washi dark:border-nezumi dark:bg-yoru flex items-center gap-2 rounded-md border text-sm shadow-sm">
			<span
				className="inline-block size-3 shrink-0 rounded-sm border border-black/25 dark:border-white/25"
				style={{ backgroundColor: item.payload.fill }}
			/>
			<span className="text-sumi dark:text-washi">
				{item.name}: {item.value.toLocaleString()}
			</span>
		</div>
	);
};

const renderLegend = ({ payload }: { payload?: readonly LegendPayloadEntry[] }) => {
	if (!payload) return null;
	return (
		<ul className="pbs-2 flex flex-wrap justify-center gap-x-4 gap-y-1">
			{payload.map((entry, index) => (
				<li key={entry.value ?? index} className="flex items-center gap-1.5">
					<span
						className="inline-block size-3 shrink-0 rounded-sm border border-black/25 dark:border-white/25"
						style={{ backgroundColor: entry.color }}
					/>
					<span className="text-sm">{entry.value}</span>
				</li>
			))}
		</ul>
	);
};

export const DoughnutChart = ({ data }: DoughnutChartProps) => {
	const chartData = data.labels.map((label, i) => ({
		name: label,
		value: data.datasets[0]?.data[i] ?? 0,
		fill: COLORS[i % COLORS.length],
	}));

	return (
		<ResponsiveContainer width="100%" height={520}>
			<PieChart>
				<Pie
					data={chartData}
					cx="50%"
					cy="50%"
					innerRadius="55%"
					outerRadius="85%"
					paddingAngle={2}
					dataKey="value"
				/>
				<Tooltip content={<CustomTooltip />} />
				<Legend content={renderLegend} />
			</PieChart>
		</ResponsiveContainer>
	);
};
