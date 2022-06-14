import React, { useRef } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { Alert } from "@mui/material";
import emailjs from "@emailjs/browser";
import {
	REACT_APP_SERVICE_ID,
	REACT_APP_TEMPLATE_ID,
	REACT_APP_PUBLIC_KEY,
} from "./apiKey";

const Email = () => {
	const emailRef = useRef();
	const successRef = useRef();
	const errorRef = useRef();

	// This function willl be invoked when submitting the form
	function handleSubmit(e) {
		e.preventDefault();
		emailjs
			.sendForm(
				REACT_APP_SERVICE_ID,
				REACT_APP_TEMPLATE_ID,
				emailRef.current,
				REACT_APP_PUBLIC_KEY
			)
			.then((result) => (successRef.current.style.display = "flex"))
			.catch((err) => (errorRef.current.style.display = "flex"));
		e.target.reset();
	}
	return (
		<div className="email__container">
			<h2>Email</h2>
			<h5>Contact me</h5>
			<div className="contact__mail_icon">
				<AiOutlineMail />
			</div>
			<form
				onSubmit={handleSubmit}
				className="contact__form__container"
				ref={emailRef}
			>
				<input type="text" placeholder="First Name" name="firstname" />
				<input type="text" placeholder="Last Name" name="lastname" />
				<input type="email" placeholder="Enter you email" name="email" />
				<textarea
					rows="5"
					id="contact__form__textfield"
					placeholder="Your text here"
					name="message"
				/>
				<input type="submit" value="Send Message" />
				<Alert
					onClose={() => {
						successRef.current.style.display = "none";
					}}
					severity="success"
					style={{ display: "none" }}
					ref={successRef}
				>
					The email has been sent
				</Alert>
				<Alert
					onClose={() => {
						errorRef.current.style.display = "none";
					}}
					severity="error"
					style={{ display: "none" }}
					ref={errorRef}
				>
					There has been an error in sending the email
				</Alert>
			</form>
		</div>
	);
};

export default Email;
