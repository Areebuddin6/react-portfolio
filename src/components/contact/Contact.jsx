import React from "react";
import Email from "./Email";
import "./contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<h2>Have some questions?</h2>
			<h5>Contact me</h5>
			<div className="container contact__container">
				<div className="contact__cta">
					<div className="contact__whatsapp">
						<div className="contact__icon">
							<AiOutlineWhatsApp />
						</div>
						<h2>WhatsApp</h2>
						<h5>+91 7085936372</h5>
						<a
							href="https://wa.me/+917085936372"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</div>
					<div className="contact__messenger">
						<div className="contact__icon">
							<BsMessenger />
						</div>
						<h2>Messenger</h2>
						<h5>Areebuddin Phundreimayum</h5>
						<a
							href="https://m.me/areebuddin.phundreimayum.10/"
							target="_blank"
							rel="noreferrer"
						>
							Send a message
						</a>
					</div>
				</div>
				<Email />
			</div>
		</section>
	);
};

export default Contact;
