import React from 'react'
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png"
import HeaderSocials from "./HeaderSocials"

const Header = () => {
  return (
		<header id="home">
			<div className="container header-container">
				<h5>Hello I'm</h5>
				<h2>Areebuddin Phundreimayum</h2>
				<h5 className="text-light">Fullstack Developer</h5>
				<CTA />
				<a className="text-light scroll-down" href="#footer">
					Scroll Down
				</a>
				<div className="me">
					<img src={ME} alt="Areebuddin Phundreimayum" />
				</div>
				<HeaderSocials />
			</div>
		</header>
	);
}

export default Header