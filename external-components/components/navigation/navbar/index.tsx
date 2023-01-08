
import { INavbar } from "../../../interfaces";

const Navbar = ({ label }: INavbar) => {
	return (
		<div>{label}</div>
	);
};

export { Navbar };