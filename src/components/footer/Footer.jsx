import React from 'react'
import { Facebook, GitHub, Twitter } from "@mui/icons-material";
import "./footer.css";

const Footer = () => {
	const sections = [
		"home",
		"about",
		"experience",
		"portfolio",
		"testimonials",
		"contact",
	];
	return (
		<footer id="footer" className="footer">
			<div className="container footer__container">
				<h2>Areebuddin Phundreimayum</h2>
				<div className="footer__sectionlinks">
					{sections.map((section) => {
						return (
							<li key={section}>
								<a href={`#${section}`} rel="noreferrer">
									{section}{" "}
								</a>
							</li>
						);
					})}
				</div>
				<div className="footer__permalinks">
					<a
						href="https://www.facebook.com/areebuddin.phundreimayum.10"
						rel="noreferrer"
						target="_blank"
					>
						<Facebook
							className="footer__social__icons"
							fontSize="large"
							sx={{ borderRadius: "50%" }}
						/>
					</a>
					<a
						href="https://github.com/Areebuddin6/Areebuddin6"
						rel="noreferrer"
						target="_blank"
					>
						<GitHub className="footer__social__icons" fontSize="large" />
					</a>
					<a
						href="https://twitter.com/AreebuddinPhun"
						rel="noreferrer"
						target="_blank"
					>
						<Twitter className="footer__social__icons" fontSize="large" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer