import type { NextPage as INextPage } from "next";

import { Navbar } from "components";

import styles from "./styles.module.scss";

const Home: INextPage = () => (
	<div className={styles.container}>
		<main className={styles.main}>
		<Navbar label="teste" />
		<div>
		</div>
		</main>
	</div>
);

export default Home;
