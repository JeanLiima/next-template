import styles from "styles/globals.module.scss";

const RootLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<html lang="pt-BR">
			<body className={styles["body-container"]}>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
