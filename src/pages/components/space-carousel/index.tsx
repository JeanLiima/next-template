import { Carousel } from 'components/carousel'

import { SpaceCard } from './components/space-card'
import { spaceCarouselItems } from './constants'

import styles from './styles.module.scss'

const SpaceCarousel = () => (
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
        {spaceCarouselItems.map(space => (
            <SpaceCard 
                key={space.id}
                name={space.name}
                img={space.img}
                alt={space.alt}
                description={space.description}
            />
        ))}
    </Carousel>
)

export { SpaceCarousel }