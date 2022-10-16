import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import { Options as IOwlOptions } from "react-owl-carousel";

import styles from "./styles.module.scss";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
	ssr: false,
});

interface ICarousel extends IOwlOptions {
	children: JSX.Element | JSX.Element[] | undefined,
}

const Carousel = ({ children, ...otherProps }: ICarousel) => {
	return (
		<div className={styles.carousel}>
			<OwlCarousel
				stageOuterClass={styles["carousel__stage-outer"]}
				{...otherProps}
			>
				{children}
			</OwlCarousel>
		</div>
	);
};

export { Carousel };