
import { useState } from "react";

import { INavbar } from "../../../interfaces";

import styles from "./styles.module.scss";

const Navbar = ({ label }: INavbar) => {
	const [open, setOpen] = useState<boolean>();
	
	const toggleMenu = () => {
		setOpen(currentValue => !currentValue);
	};
	return (
		<nav className="navbar">
			<button 
				className="burguer"
				onClick={toggleMenu}
			/>
			<div className="dropdowns">
				<div className="dropdown">
					<button>
						Products
					</button>
					<div className="dropdown-menu">
						<div>
							<h2>Digital</h2>
							<button>Learn CSS Ebook</button>
							<button>Security Course</button>
							<button>Masterclass Bundle</button>
						</div>
					</div>
				</div>
			</div>
			{label}

		</nav>
	);
};

export { Navbar };