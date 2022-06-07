import React from "react";
import portfolio1 from "../../assets/portfolio1.jpg";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import portfolio4 from "../../assets/portfolio4.jpg";
import portfolio5 from "../../assets/portfolio5.png";
import portfolio6 from "../../assets/portfolio6.jpg";

const PortfolioCards = () => {
	const portfolios = [
		portfolio1,
		portfolio2,
		portfolio3,
		portfolio4,
		portfolio5,
		portfolio6,
	];
	return (
		<div className="container portfolio__container">
			{portfolios.map((portfolio) => {
				return (
					<>
						<div className="portfolio__item">
							<img src={portfolio} alt="" className="portfolio__item__image" />
						</div>
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
					</>
				);
			})}
		</div>
	);
};

export default PortfolioCards;
