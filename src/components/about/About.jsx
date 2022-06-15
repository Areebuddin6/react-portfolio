import React, { useRef } from "react";
import Areebuddin from "../../assets/Areebuddin_Profile_Photo.png";
import Frontend from "./Frontend";
import "./about.css";

const About = () => {
	const photoRef = useRef();
	function transformImage() {
		photoRef.current.style.transform = "rotate(0deg)";
		photoRef.current.style.transition = "all 500ms ease";
	}
	function transformImageNormalPostion() {
		photoRef.current.style.transform = "rotate(10deg)";
		photoRef.current.style.transition = "all 500ms ease";
	}
	return (
		<section id="about" className="about">
			<h2>Get To Know</h2>
			<h5>About Me</h5>
			<div className="about__container">
				<div className="grid-center">
					<div
						className="about__photo__container"
						onTouchStart={transformImage}
						onTouchEnd={transformImageNormalPostion}
					>
						<img
							src={Areebuddin}
							className="about__photo"
							ref={photoRef}
							alt="Areebuddin"
						/>
					</div>
				</div>
				<Frontend />
				<div style={{ display: "flex", alignItems: "center" }}>
					<div className="about__me">
						"I am a web developer with an experience of more than a year. My
						stacks for frontend are HTML, CSS and JavaScript. But I am more
						interested in using React so I use React to build almost all of my
						projects. I have a very strong foundation in JavaScript especially
						ES6 which makes me easy to learn React. As for my experience with
						React, I can say that I am atleast intermediate level React
						developer. I have an indepth knowledge of React hooks and other
						React fundamentals. Web optimization is my thing, so I make sure
						that any website that I developed is not optimized for perfomance.
						If you have something to talk about, just contact me otherwise my
						projects will speak of my skills."
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
