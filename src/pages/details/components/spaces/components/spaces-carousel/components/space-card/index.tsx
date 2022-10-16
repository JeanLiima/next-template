// import Image from "next/image";

import { HiOutlineUserGroup, HiOutlineArrowNarrowRight } from "react-icons/hi";

import styles from "./styles.module.scss";

interface ISpaceCard {
	id: string,
	name: string,
	// img: {
	//     src: string,
	//     width: number,
	//     height: number,
	// },
	// alt: string,
	description: string,
	quantity: number,
}

const SpaceCard = ({ id, name, description, quantity }: ISpaceCard) => (
	<div className={styles["place-card"]}>
		<div className={styles["place-card__image"]}>
			{/* <Image src={img.src} width={img.width} height={img.height} alt={alt}/> */}
		</div>
		<div className={styles["place-card__description"]}>
			<h2>{name}</h2>
			<p>
				{description}
			</p>
			<div className={styles["place-card__description__footer"]}>
				<div className={styles["place-card__description__footer__quantity"]}>
					<div className={styles["place-card__description__footer__quantity__icon"]}>
						<HiOutlineUserGroup />
					</div>
					{quantity}
				</div>
				<a href={`/details/${id}`}>
					reservar
					<HiOutlineArrowNarrowRight />
				</a>
			</div>
		</div>
	</div>
);

export { SpaceCard };