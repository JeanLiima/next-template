import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { spacesApi } from "pages/api";

import { SpacesCarousel } from "./components/spaces-carousel";
import styles from "./styles.module.scss";

interface ISpace {
	uuid: string,
	name: string,
	description: string,
}

const Spaces = () => {
	const [spaces, setSpaces] = useState([]);
	const router = useRouter();
	const { id } = router?.query || null;

	useEffect(() => {
		const fetchSpace = async () => {
			try {
				const response = await spacesApi.getSpacesList();

				if (response) {
					const otherSpaces = response?.spaces?.filter((space: ISpace) => space.uuid !== id);
					setSpaces(otherSpaces);
				}

			} catch (error) {
				console.error(error);
			}
		};

		fetchSpace();
	}, [id, setSpaces]);

	return (
		<div className={styles.spaces}>
			<div className={styles["spaces__content"]}>
				<h2>Outros espaços disponiveis</h2>
				<SpacesCarousel list={spaces} />
			</div>
		</div>
	);
};

export { Spaces };