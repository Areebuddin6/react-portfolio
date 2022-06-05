import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
	const [hoverElements, setHoverElements] = useState(
		document.querySelector(":hover")
	);
	const [hoverElementId, setHoverElementId] = useState("");
	useEffect(() => {
		hoverElements != null
			? hoverElements.hasAttribute("id")
				? setHoverElementId(hoverElements.getAttribute("id"))
				: ""
			: console.log(hoverElements);
	}, [hoverElements]);
	return (
		<div
			className="app"
			onMouseOver={() =>
				setHoverElements(document.querySelectorAll(":hover")[4])
			}
		>
			<Header />
			<Nav className="app__container" hoverElementId={hoverElementId} />
			<About className="app__container" />
			<Experience className="app__container" />
			<Services className="app__container" />
			<Portfolio className="app__container" />
			<Testimonials className="app__container" />
			<Contact className="app__container" />
			<Footer className="app__container" />
		</div>
	);
};

export default App;
