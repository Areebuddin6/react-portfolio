import { useState, useEffect, useRef, createContext } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";
import { useMemo } from "react";

export const SectionsContex = createContext();
// export const CurrentContext = createContext();
const App = () => {
	const [current, setCurrent] = useState("home");
	const [sections, setSections] = useState([]);
	const appRef = useRef();
	const value = useMemo(() => ({ current, setCurrent }), [current]);
	useEffect(() => {
		const children = appRef.current.childNodes;
		setSections(children);
	}, []);
	return (
		<SectionsContex.Provider value={[sections, value]}>
			<div className="app" ref={appRef}>
				<Header />
				<Nav />
				<About />
				<Experience />
				<Portfolio />
				<Testimonials />
				<Contact />
				<Footer />
			</div>
		</SectionsContex.Provider>
	);
};

export default App;
