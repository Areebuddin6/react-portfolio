import React from "react";
import frontend from "../../assets/frontend.svg";
import { AiFillCheckCircle } from "react-icons/ai";
import languages from "./languages";
import "./frontend.css";

const Frontend = () => {
	return (
		<div className="about__front-end">
			<div className="grid-center">
				<img src={frontend} alt="Programming" className="frontend" />
			</div>
			<div className="about__info">
				<h2 className="text-center">Front-end Developer</h2>
				<h5 className="text-center">
					I am always fasinated to learn new things and like to code anything
					from scratch.
				</h5>
				<h2 className="text-center mt-3">Languages I know: </h2>
				<div className="about__languages">
					{languages.map((language) => {
						return (
							<div className="about__language" key={language}>
								<AiFillCheckCircle />
								{language}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Frontend;
