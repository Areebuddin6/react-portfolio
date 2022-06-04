import React from "react";
import {
	frontendLanguages,
	backendLanguages,
	listLanguages,
} from "./languages";
import "./experience.css";

const Experience = () => {
	return (
		<section id="experience">
			<div className="experience__frontend__container">
				<h2>Frontend Development</h2>
				<h5>Languages and their experience</h5>
				<div className="experience__frontend__languages">
					{listLanguages(frontendLanguages, "frontend")}
				</div>
			</div>
			<div className="experience__backend__container">
				<h2>Backend Development</h2>
				<h5>Languages and their experience</h5>
				<div className="experience__backend__languages">
					{listLanguages(backendLanguages, "backend")}
				</div>
			</div>
		</section>
	);
};

export default Experience;
