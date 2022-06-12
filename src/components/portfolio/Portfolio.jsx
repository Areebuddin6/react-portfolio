import React from "react";
import PortfolioCards from "./PortfolioCards";
import "./portfolio.css";

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h5>My Recent Projects</h5>
			<h2>Portfolio</h2>
			<PortfolioCards />
		</section>
	);
};

export default Portfolio;
