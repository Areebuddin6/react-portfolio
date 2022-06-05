import { useState, useEffect } from "react";
import navBars from "./navBars";
import "./nav.css";

const Nav = ({ hoverElementId }) => {
	const [activeId, setActiveId] = useState("#home");
	// Set the class to "active" if activeId and the current id of the element are same
	const setActiveClass = (elementId) => {
		if (activeId === elementId) return "active";
		return "";
	};
	// Capitalise the first letter of the word
	const capitalise = (string) => {
		return string[0].toUpperCase() + string.slice(1).toLowerCase();
	};
	useEffect(() => {
		setActiveId(`#${hoverElementId}`);
	}, [hoverElementId]);
	return (
		<nav>
			{navBars.map(([id, icon]) => {
				return (
					<div className="tooltip" key={id}>
						<a
							key={id}
							href={`#${id}`}
							onClick={() => setActiveId(`#${id}`)}
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

export default Nav;
