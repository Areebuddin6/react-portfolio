import React from 'react'
import Areebuddin from "../../assets/Areebuddin_Profile_Photo.png";
import Frontend from "./Frontend";
import "./about.css";

const About = () => {
	return (
		<section id="about">
			<div className="grid-center">
				<div className="about__photo__container">
					<img src={Areebuddin} className="about__photo" alt="Areebuddin" />
				</div>
			</div>
			<Frontend />
			<div className="about__me">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi ratione
				unde ullam porro sint eligendi excepturi eveniet obcaecati, fuga
				tenetur? Ut nihil maxime obcaecati, rem soluta saepe a tenetur corporis
				ab animi, eveniet, odit veritatis error ducimus ea consequuntur minus
				beatae repudiandae consequatur quas perspiciatis. Voluptates modi
				cupiditate esse ab, omnis architecto quia assumenda quaerat ea alias
				voluptatibus nihil necessitatibus consequatur odio nisi ipsa temporibus
				voluptatum! Facilis laboriosam natus saepe rem excepturi commodi,
				molestias error nemo iste quasi, perferendis minus eveniet, qui quos
				vitae minima aliquid officiis eaque soluta dolorem labore! Molestiae id
				earum dolor saepe recusandae illo nihil totam.
			</div>
		</section>
	);
};

export default About