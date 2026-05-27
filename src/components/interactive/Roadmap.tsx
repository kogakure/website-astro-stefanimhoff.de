import type { RoadmapMilestoneData } from '../../utils/resolve-roadmap';
import { RoadmapMilestone } from './RoadmapMilestone';

interface Props {
	milestones: RoadmapMilestoneData[];
}

export const Roadmap = ({ milestones }: Props) => {
	if (milestones.length === 0) return null;

	return (
		<ol className="flex list-none flex-col" data-ma="Roadmap">
			{milestones.map((milestone, i) => (
				<RoadmapMilestone
					key={milestone.href}
					index={i}
					isLast={i === milestones.length - 1}
					{...milestone}
				/>
			))}
		</ol>
	);
};

export default Roadmap;
