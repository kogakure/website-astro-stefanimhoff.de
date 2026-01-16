import deepmerge from 'deepmerge';

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import autocolors from 'chartjs-plugin-autocolors';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, autocolors);

type DoughnutChartProps = {
	data: any;
	options?: any;
};

const defaultOptions = {
	plugins: {
		autocolors: {
			mode: 'data',
		} as any,
	},
};

export const DoughnutChart = ({ data, options }: DoughnutChartProps) => {
	const mergedOptions = deepmerge(defaultOptions, options);

	return (
		<div>
			<Doughnut data={data} options={mergedOptions} />
		</div>
	);
};
