import { AiFillCheckCircle } from "react-icons/ai";

const backendLanguages = [
	["Python", "Intermediate"],
	["C/C++", "Intermediate"],
	["NodeJS", "Intermediate"],
	["ExpressJS", "Intermediate"],
	["MongoDB", "Intermediate"],
	["Firebase", "Intermediate"],
];
const frontendLanguages = [
	["HTML", "Experienced"],
	["CSS", "Experienced"],
	["JavaScript", "Experienced"],
	["React", "Intermediate"],
	["Bootstrap", "Intermediate"],
	["Tailwind", "Intermediate"],
];

const listLanguages = (languages, type) => {
	return languages.map(([language, experience]) => {
		return (
			<div className="experience__language__container" key={language}>
				<div className="experience__language">
					<AiFillCheckCircle />
					<span>{language}</span>
				</div>
				<small className="experience__level">{experience}</small>
			</div>
		);
	});
};

export { frontendLanguages, backendLanguages, listLanguages };
