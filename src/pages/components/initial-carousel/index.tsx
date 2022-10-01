import { Carousel } from 'components/carousel'

import { SliderCard } from './components/slider-card'
import { initialCarouselItems } from './constants'

const InitialCarousel = () => (
    <Carousel
        animateOut= 'slideOutDown'
        animateIn= 'flipInX'
        items={1}
        dots={false}
        autoplay={false}
        autoplayTimeout={2000}
        autoplaySpeed={2000}
        autoplayHoverPause={false}
    >
        {initialCarouselItems.map(item => (
            <SliderCard 
                key={item.id}
                img={item.img}
                alt={item.alt}
            />
        ))}
    </Carousel>
)

export { InitialCarousel }