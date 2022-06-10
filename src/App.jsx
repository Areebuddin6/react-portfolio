import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import windowOnScroll from "./components/nav/windowOnScroll";
import "./App.css";

const App = () => {
	return (
		<div className="app" onScroll={windowOnScroll}>
			<Header />
			<Nav />
			<About />
			<Experience />
			<Portfolio />
			<Testimonials />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
