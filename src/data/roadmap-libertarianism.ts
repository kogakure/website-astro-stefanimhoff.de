export interface RoadmapEntry {
	type: 'book' | 'audiobook' | 'podcast' | 'video';
	slug: string;
	note: string;
}

export const roadmapLibertarianism: RoadmapEntry[] = [
	{
		type: 'audiobook',
		slug: 'how-to-think-about-the-economy',
		note: 'A short, crystal-clear primer on core Austrian ideas like subjective value, opportunity cost, and spontaneous order that equips you with the mental models needed for the rest.',
	},
	{
		type: 'audiobook',
		slug: 'anatomy-of-the-state',
		note: 'A sharp, brief tract explaining what the state is, how it operates, and why its incentives systematically diverge from the public interest.',
	},
	{
		type: 'audiobook',
		slug: 'for-a-new-liberty',
		note: 'An accessible, big‑picture case for libertarianism that connects principles to real‑world policy across everyday domains.',
	},
	{
		type: 'audiobook',
		slug: 'democracy-the-god-that-failed',
		note: 'A provocative, advanced work comparing political orders and property-right regimes that challenges mainstream assumptions and rewards prior grounding in Austrian theory.',
	},
	{
		type: 'book',
		slug: 'getting-libertarianism-right',
		note: 'A collection of lectures and essays sharpening libertarian theory and strategy, useful once you’re comfortable with core concepts.',
	},
	{
		type: 'book',
		slug: 'the-great-fiction',
		note: 'A concise collection of essays arguing that many prevailing economic and political narratives are myths, using Austrian theory and historical analysis to challenge common justifications for state intervention.',
	},
	{
		type: 'audiobook',
		slug: 'man-economy-and-state',
		note: 'A comprehensive, rigorous development of Austrian economics from first principles—best tackled after you’ve built foundational intuition.',
	},
	{
		type: 'audiobook',
		slug: 'human-action',
		note: 'The masterwork of Austrian economics that builds a unified, praxeological framework for understanding purposeful human behavior, market coordination, and the limits of intervention.',
	},
];
