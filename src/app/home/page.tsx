import type { NextPage as INextPage } from "next";

import { Footer } from "components/footer";

import styles from "./styles.module.scss";

const Home: INextPage = () => (
	<div className={styles.container}>
		<main className={styles.main}>
			<div />
		</main>
		<Footer />
	</div>
);

export default Home;
