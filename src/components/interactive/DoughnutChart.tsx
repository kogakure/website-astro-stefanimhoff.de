import { Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

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

type LegendPayloadEntry = {
	value: string;
	color: string;
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
		<div className="flex items-center gap-2 rounded-md border border-[#C8C8C4] bg-[#E6E6E6] px-3 py-2 text-sm shadow-sm dark:border-[#6B6B67] dark:bg-[#1A1918]">
			<span
				className="inline-block h-3 w-3 flex-shrink-0 rounded-sm border border-black/25 dark:border-white/25"
				style={{ backgroundColor: item.payload.fill }}
			/>
			<span className="text-[#0E0D0C] dark:text-[#E6E6E6]">
				{item.name}: {item.value.toLocaleString()}
			</span>
		</div>
	);
};

const renderLegend = ({ payload }: { payload?: LegendPayloadEntry[] }) => {
	if (!payload) return null;
	return (
		<ul className="flex flex-wrap justify-center gap-x-4 gap-y-1 pt-2">
			{payload.map((entry, index) => (
				<li key={index} className="flex items-center gap-1.5">
					<span
						className="inline-block h-3 w-3 flex-shrink-0 rounded-sm border border-black/25 dark:border-white/25"
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
