import React from "react";
import portfolio1 from "../../assets/game.jpeg";
import portfolio2 from "../../assets/amazon.jpg";
import portfolio3 from "../../assets/instagram.png";
import portfolio4 from "../../assets/netflix.png";
import portfolio5 from "../../assets/tiktok.png";
import portfolio6 from "../../assets/messaging_app.png";

const PortfolioCards = () => {
	const portfolios = [
		{ id: 1, portfolio: portfolio1, title: "Rock Paper Scissor Game" },
		{ id: 2, portfolio: portfolio2, title: "Amazon Clone" },
		{ id: 3, portfolio: portfolio3, title: "Instagram Clone" },
		{ id: 4, portfolio: portfolio4, title: "Netflix Clone" },
		{ id: 5, portfolio: portfolio5, title: "TikTok Clone" },
		{ id: 6, portfolio: portfolio6, title: "WhatsApp Clone" },
	];
	return (
		<div className="container portfolio__container">
			{portfolios.map(({ id, portfolio, title }) => {
				return (
					<div key={id}>
						<h2>{title}</h2>
						<div className="portfolio__icon">
							<img
								src={portfolio}
								alt=""
								className="portfolio__item__image"
								style={
									title === "WhatsApp Clone" ? { objectFit: "contain" } : {}
								}
							/>
						</div>
						<div className="portfolio__links">
							<a
								href="https://github.com/Areebuddin6/game.github.io"
								target="_blank"
								rel="noreferrer"
							>
								Github Code
							</a>
							<a
								href="https://areebuddin6.github.io/game.github.io/"
								target="_blank"
								rel="noreferrer"
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
