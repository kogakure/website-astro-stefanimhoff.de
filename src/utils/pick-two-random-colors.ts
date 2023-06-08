import colorsJson from '../data/colors-japan.json';

interface Color {
	id: string;
	name: string;
	description: string;
	color: string;
}

export const pickTwoRandomColors = (): [string, string] => {
	const colors: Color[] = colorsJson;
	const randomIndex1 = Math.floor(Math.random() * colors.length);
	let randomIndex2 = Math.floor(Math.random() * colors.length);
	while (randomIndex2 === randomIndex1) {
		randomIndex2 = Math.floor(Math.random() * colors.length);
	}
	return [colors[randomIndex1].color, colors[randomIndex2].color];
};
