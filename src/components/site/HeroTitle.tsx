import { SplitText } from '../interactive/motion';
import DisplayEm from '../ui/DisplayEm';
import Title from '../ui/Title';

export const HeroTitle = () => (
	<Title className="hero-title leading-[1.10]!" data-ma="HeroTitle">
		<SplitText text="Stefan Imhoff" stagger={0.04} delay={0} />{' '}
		<DisplayEm>
			<SplitText text="is a" stagger={0.04} delay={0.15} />
		</DisplayEm>
		<br className="hidden xl:block" />{' '}
		<SplitText text="Design Engineer" stagger={0.04} delay={0.3} />
		<br className="hidden xl:block" />{' '}
		<span>
			<DisplayEm>
				<SplitText text="from" stagger={0.04} delay={0.6} />{' '}
			</DisplayEm>
			<span className="whitespace-nowrap">
				<SplitText text="Hamburg" stagger={0.04} delay={0.72} />
				<span className="text-beni dark:text-beni-light mis-4">—</span>
			</span>
		</span>
	</Title>
);

export default HeroTitle;
