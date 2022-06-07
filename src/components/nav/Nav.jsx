import { useState } from "react";
import navBars from "./navBars";
import windowOnScroll from "./windowOnScroll";
import "./nav.css";

const Nav = () => {
	windowOnScroll();
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
