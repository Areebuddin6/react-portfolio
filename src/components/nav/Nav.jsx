import { useEffect, useContext } from "react";
import navBars from "./navBars";
import { SectionsContex } from "../../App";
import "./nav.css";

const Nav = () => {
	const [sections, { current, setCurrent }] = useContext(SectionsContex);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			sections.forEach((section) => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.clientHeight;
				// eslint-disable-next-line no-restricted-globals
				if (scrollY >= sectionTop - sectionHeight / 3)
					setCurrent(section.getAttribute("id"));
			});
		});
		return () => {
			window.removeEventListener("scroll", () => {
				sections.forEach((section) => {
					const sectionTop = section.offsetTop;
					const sectionHeight = section.clientHeight;
					// eslint-disable-next-line no-restricted-globals
					if (scrollY >= sectionTop - sectionHeight / 3)
						setCurrent(section.getAttribute("id"));
				});
			});
		};
	});
	return (
		<nav id="nav">
			{navBars.map(([id, icon], index) => {
				return (
					<div className="tooltip" key={id}>
						<a
							key={id}
							rel="noreferrer"
							href={`#${id}`}
							className={current === id ? "active" : ""}
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
