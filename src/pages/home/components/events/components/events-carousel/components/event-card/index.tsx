import Image from "next/image";

import styles from "./styles.module.scss";

interface IEventCard {
	img: {
		src: string,
		width: number,
		height: number,
	},
	alt: string,
}

const EventCard = ({ img, alt }: IEventCard) => (
	<div className={styles["event-card"]}>
		<div className={styles["event-card__image"]}>
			<Image src={img.src} width={img.width} height={img.height} alt={alt} />
		</div>
	</div>
);

export { EventCard };