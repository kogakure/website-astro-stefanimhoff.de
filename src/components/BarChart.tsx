// Cspell:words deepmerge autocolors chartjs
import deepmerge from 'deepmerge';

import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	Legend,
	LinearScale,
	Tooltip,
} from 'chart.js';
import autocolors from 'chartjs-plugin-autocolors';
import { Bar } from 'react-chartjs-2';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, autocolors);

type BarChartProps = {
	data: any;
	options?: any;
};

const defaultOptions = {
	plugins: {
		autocolors: {
			mode: 'data',
		} as any,
		legend: {
			display: false,
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
		},
		y: {
			beginAtZero: true,
			grid: {
				display: false,
			},
		},
	},
};

export const BarChart = ({ data, options }: BarChartProps) => {
	const mergedOptions = deepmerge(defaultOptions, options);

	return (
		<div>
			<Bar data={data} options={mergedOptions} />
		</div>
	);
};
