import { useState, useEffect } from "react";
import navBars from "./navBars";
import "./nav.css";

const Nav = () => {
	const [current, setCurrent] = useState("");
	const [activeId, setActiveId] = useState("#home");
	const sections = document.querySelectorAll(".app > *");
	const navLi = document.querySelectorAll("nav a");
	// Set the class to "active" if activeId and the current id of the element are same
	const setActiveClass = (elementId) => {
		if (activeId === elementId) return "active";
		return "";
	};
	window.addEventListener("scroll", () => {
		// sections.length != 0 ? console.log(scrollY) : "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			if (scrollY >= sectionTop - sectionHeight / 2) {
				setCurrent(section.getAttribute("id"));
			}
		});
		navLi.forEach((li) => {
			li.classList.remove("active");
			if (li.getAttribute("href") === `#${current}`) {
				li.classList.add("active");
			}
		});
	});
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
						<span className="tooltiptext">{id}</span>
					</div>
				);
			})}
		</nav>
	);
};

export default Nav;
