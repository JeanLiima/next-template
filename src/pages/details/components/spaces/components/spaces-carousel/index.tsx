import { Carousel } from "components/carousel";

import { SpaceCard } from "./components/space-card";

interface ISpace {
	uuid: string,
	name: string,
	description: string,
}

interface ISpaces {
	list: Array<ISpace>
}

const SpacesCarousel = ({ list }: ISpaces) => (
	<Carousel
		dots={false}
		nav={false}
		autoplay={false}
		autoplayTimeout={2000}
		autoplaySpeed={2000}
		autoplayHoverPause={false}
		margin={60}
		autoWidth
	>
		{list?.map(space => {
			return (
				<SpaceCard
					key={space.uuid}
					id={space.uuid}
					name={space.name}
					// img={space.img}
					// alt={space.alt}
					description={space.description}
					quantity={20}
				/>
			);
		})}
	</Carousel>
);

export { SpacesCarousel };