import React from 'react';
import navBars from "./navBars";
import { useState } from "react";
import ReactHover, { Hover, Trigger } from "react-hover/dist/ReactHover";
import "./nav.css";

const Nav = () => {
	const [active, setActive] = useState("#home");
	const [display, setDisplay] = useState({ display: "none" });
	const setActiveClass = (state) => {
		if (active === state) return "active";
		return "";
	};
	const options = {
		followCursor: true,
		shiftX: 20,
		shiftY: 0,
	};
	const capitalise = (string) => {
		return string[0].toUpperCase() + string.slice(1).toLowerCase();
	};

	return (
		<nav>
			{navBars.map(([id, icon]) => {
				return (
					<ReactHover key={id} options={options}>
						<Trigger type="trigger">
							<a
								key={id}
								href={`#${id}`}
								onClick={() => setActive(`#${id}`)}
								className={setActiveClass(`#${id}`)}
								onMouseEnter={() => setDisplay("inline")}
								onMouseLeave={() => setDisplay("none")}
							>
								{icon}
							</a>
						</Trigger>
						<Hover type="hover">
							<span className="nav__title" style={{ display: display }}>
								{capitalise(id)}
							</span>
						</Hover>
					</ReactHover>
				);
			})}
		</nav>
	);
};

export default Nav