import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { Options } from 'react-owl-carousel'

import styles from './styles.module.scss'

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

interface CarouselProps extends Options {
    children: JSX.Element | JSX.Element[],
};
  
const Carousel = ({children, ...otherProps}: CarouselProps) => {
return (
      <div className={styles.carousel}>
        <OwlCarousel
            stageOuterClass={styles['carousel__stage-outer']}
            {...otherProps}
        >
          {children}
        </OwlCarousel>
      </div>
)};
  
export { Carousel }