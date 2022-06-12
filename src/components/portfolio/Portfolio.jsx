import React, { useRef, useEffect } from "react";
import PortfolioCards from "./PortfolioCards";
import "./portfolio.css";

const Portfolio = () => {
	const portRef = useRef();
	useEffect(() => {
		portRef.current.addEventListener("scroll", () => {
			console.log(scrollY);
		});
	});
	return (
		<section id="portfolio" ref={portRef}>
			<h5>My Recent Projects</h5>
			<h2>Portfolio</h2>
			<PortfolioCards />
		</section>
	);
};

export default Portfolio;
