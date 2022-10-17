import { FaInstagram, FaFacebookSquare, FaWhatsapp } from "react-icons/fa";
import { Button } from "../button";

import styles from "./styles.module.scss";

const Footer = () => (
	<footer className={styles.footer}>
		<div className={styles["footer__information"]}>
			<div>
				<h4>Local</h4>
				<p>
					Av. Test <br />
					Rua teste teste - N 140 <br />
					Cidade teste
				</p>
			</div>
			<div>
				<h4>Rede sociais</h4>
				<p> <FaInstagram /> @occriteste</p>
				<p> <FaFacebookSquare /> @occriteste</p>
			</div>
			<div>
				<h4>Contatos</h4>
				<p>
					<FaWhatsapp />
					55 99889-9988
				</p>
				<p>
					<FaWhatsapp />
					55 99889-9988
				</p>
				<p>
					<FaWhatsapp />
					55 99889-9988
				</p>
			</div>
			<div>
				<h4>Faça já sua reserva!</h4>
				<Button>
					Reservar
				</Button>
			</div>
		</div>
		<div className={styles["footer__image"]} />
	</footer>
);

export { Footer };