import { Subsubheadline } from '../ui/Subsubheadline';
import TextLink from '../ui/TextLink';

export interface PostItem {
	slug: string;
	title: string;
	subtitle?: string;
	thumbnail: string | null;
	gradient: [string, string];
}

interface Props {
	entries: PostItem[];
}

export const WritingList = ({ entries }: Props) => {
	return (
		<ul className="col-span-full grid auto-rows-[50px] grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-[max(25px,2vw)]">
			{entries.map(({ slug, title, subtitle, thumbnail, gradient }) => (
				<li key={slug} className="writing-card image-shadow group">
					<TextLink
						className="writing-card-link group relative block h-full w-full group-hover:scale-100"
						href={`/writing/${slug}/`}
						tabIndex={0}
						title={title}
					>
						<div className="absolute z-10 h-full w-full">
							{thumbnail ? (
								<img
									alt={title}
									className="m-0! h-full! block w-full object-cover"
									role="presentation"
									src={thumbnail}
								/>
							) : (
								<div
									className="h-full w-full bg-gray-800 transition duration-300 ease-in-out group-hover:brightness-90 group-focus:brightness-90 dark:brightness-50 dark:group-hover:brightness-100 dark:group-focus:brightness-100"
									style={{
										backgroundImage: `linear-gradient(to bottom left, ${gradient[0]} 0%, ${gradient[1]} 100%)`,
									}}
								/>
							)}
						</div>
						<div className="absolute z-20 flex h-full w-full flex-col items-center justify-center p-10 text-center leading-tight text-white">
							<Subsubheadline as="h2" className="m-0! leading-tight">
								{subtitle ? `${title}: ${subtitle}` : title}
							</Subsubheadline>
						</div>
					</TextLink>
				</li>
			))}
		</ul>
	);
};

export default WritingList;
