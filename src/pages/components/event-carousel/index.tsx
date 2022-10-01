import { Carousel } from 'components/carousel'

import { EventCard } from './components/event-card'
import { eventCarouselItems } from './constants'

const EventCarousel = () => (
    <Carousel
        animateOut= 'slideOutDown'
        animateIn= 'flipInX'
        items={1}
        dots={false}
        nav={true}
        autoplay={false}
        autoplayTimeout={2000}
        autoplaySpeed={2000}
        autoplayHoverPause={false}
        navClass={['navigation-previous', 'navigation-next']}
    >
        {eventCarouselItems.map(event => (
            <EventCard 
                key={event.id}
                img={event.img}
                alt={event.alt}
            />
        ))}
    </Carousel>
)

export { EventCarousel }