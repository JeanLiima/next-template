import { Button } from "components/button";

import styles from "./styles.module.scss";

interface ISliderCard {
	img: {
		src: string,
		width: number,
		height: number,
	},
}

const SliderCard = ({ img }: ISliderCard) => (
	<div className={styles["slider-card"]}>
		<div
			className={styles["slider-card__image"]}
			style={{ backgroundImage: `url(${img.src})` }}
		>
			<div className={styles["slider-card__text"]}>
				<h1>Venha trabalhar em nosso espaço!</h1>
				<p>
					Nosso coworking multissetorial FEMININO é voltado para você mulher que precisa de um espaço para trabalhar tranquila e com segurança.
					Possuimos também um espaço KIDS para você que precissa trazer seu filho(a). Estamos te esperando.
				</p>
				<input placeholder='Selecione o espaço desejado' />
				<Button>
					Reservar
				</Button>
			</div>
		</div>
	</div>
);

export { SliderCard };