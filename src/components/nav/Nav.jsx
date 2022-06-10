<<<<<<< HEAD
import { useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> 9736fed3217d5e59fc5df7b77535ba7fe3d0e80d
import navBars from "./navBars";
import windowOnScroll from "./windowOnScroll";
import "./nav.css";

const Nav = () => {
<<<<<<< HEAD
	// useEffect(() => {
	// 	window.addEventListener("scroll", windowOnScroll);
	// }, []);
=======
	windowOnScroll();
>>>>>>> 9736fed3217d5e59fc5df7b77535ba7fe3d0e80d
	return (
		<nav>
			{navBars.map(([id, icon]) => {
				return (
					<div className="tooltip" key={id}>
						<a key={id} href={`#${id}`}>
							{icon}
						</a>
						<span className="tooltiptext">{id}</span>
					</div>
				);
			})}
		</nav>
	);
};

export default Nav;
