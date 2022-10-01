import { Carousel } from 'components/carousel'

import { EventCard } from './components/event-card'
import { eventCarouselItems } from './constants'

import styles from './styles.module.scss'

const EventsCarousel = () => (
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
        navClass={[styles['navigation-previous'], styles['navigation-next']]}
        navContainerClass={styles.navigation}
        stageOuterClass={styles['carousel__stage-outer']}
        margin={100}
        
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

export { EventsCarousel }