import React from 'react';
import navBars from "./navBars";
import { useState } from "react";
import "./nav.css";

const Nav = () => {
	const [active, setActive] = useState("#home");
	const setActiveClass = (state) => {
		if (active === state) return "active";
		return "";
	};
	const capitalise = (string) => {
		return string[0].toUpperCase() + string.slice(1).toLowerCase();
	};

	return (
		<nav>
			{navBars.map(([id, icon]) => {
				return (
					<div className="tooltip" key={id}>
						<a
							key={id}
							href={`#${id}`}
							onClick={() => setActive(`#${id}`)}
							className={setActiveClass(`#${id}`)}
						>
							{icon}
						</a>
						<span className="tooltiptext">{capitalise(id)}</span>
					</div>
				);
			})}
		</nav>
	);
};

export default Nav