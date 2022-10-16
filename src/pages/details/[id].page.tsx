import { useEffect, useState, useCallback } from "react";

import type { NextPage as INextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

import OccriLogo from "assets/brand/occri-logo.svg";
import { Footer } from "components/footer";

import { spacesApi } from "pages/api";

import { Spaces } from "./components/spaces";
import styles from "./styles.module.scss";
import { DetailsDescription } from "./components/details-description";

interface ISpace {
	uuid: string,
	name: string,
	description: string,
	quantity: number,
	img: string,
	alt: string,
}

const Details: INextPage = () => {
	const [space, setSpace] = useState<ISpace | undefined>(undefined);

	const router = useRouter();
	const { id } = router?.query || null;

	const redirectToHome = useCallback(
		() => {
			router.push("/");
		},
		[router],
	);

	useEffect(() => { document.body.classList.add(styles["body-container"]); }, []);
	useEffect(() => {
		if (id === undefined) {
			return;
		}
		const fetchSpace = async () => {
			try {
				const response: ISpace = await spacesApi.getSpace(id as string);

				if (response) {
					setSpace(response);
				}

			} catch (error) {
				redirectToHome();
			}
		};

		fetchSpace();
	}, [id, setSpace, redirectToHome]);

	return (
		<div className={styles.container}>
			<Head>
				<title>Occri</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<div className={styles.logo}>
					<div className={styles["logo__content"]}>
						<a href='/'>
							<Image src={OccriLogo} alt='Occri logo' />
						</a>
					</div>
				</div>
				<div className={styles.details}>
					<h2>Reserva </h2>
					<div className={styles["details__content"]}>
						<div className={styles["details__content__carousel"]}>
							<div
								className={styles["details__content__carousel__image"]}
								style={{ backgroundImage: "url(\"/_next/static/media/example-banner-1.06a3b79f.svg\")" }}
							/>
						</div>
						<div className={styles["details__content__description"]}>
							{space && (
								<DetailsDescription
									name={space.name}
									description={space.description}
									quantity={space.quantity}
								/>
							)}
						</div>
					</div>
				</div>
				<Spaces />
			</main>
			<Footer />
		</div>
	);
};

export default Details;
