import React from "react";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.jpg";

const PortfolioCards = () => {
	const portfolios = [
		{ id: 1, portfolio: portfolio1 },
		{ id: 2, portfolio: portfolio2 },
		{ id: 3, portfolio: portfolio3 },
		{ id: 4, portfolio: portfolio4 },
		{ id: 5, portfolio: portfolio5 },
		{ id: 6, portfolio: portfolio6 },
	];
	return (
		<div className="container portfolio__container">
			{portfolios.map(({ id, portfolio }) => {
				return (
					<div key={id}>
						<div className="portfolio__item">
							<img src={portfolio} alt="" className="portfolio__item__image" />
						</div>
						<div className="portfolio__links">
							<a
								href="https://github.com/Areebuddin6/game.github.io"
								target="_blank"
							>
								Github Code
							</a>
							<a
								href="https://areebuddin6.github.io/game.github.io/"
								target="_blank"
							>
								Live Demo
							</a>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PortfolioCards;
