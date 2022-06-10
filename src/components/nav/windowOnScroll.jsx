import { useState } from "react";

const windowOnScroll = () => {
	const [current, setCurrent] = useState("");
	const sections = document.querySelectorAll(".app > *");
	const navLi = document.querySelectorAll("nav a");
<<<<<<< HEAD
	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionHeight = section.clientHeight;
		if (scrollY >= sectionTop - sectionHeight / 3) {
			setCurrent(section.getAttribute("id"));
		}
	});
	navLi.forEach((li) => {
		li.classList.remove("active");
		if (li.getAttribute("href") === `#${current}`) {
			li.classList.add("active");
		}
=======
	return window.addEventListener("scroll", () => {
		// sections.length != 0 ? console.log(scrollY) : "";
		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			if (scrollY >= sectionTop - sectionHeight / 3) {
				setCurrent(section.getAttribute("id"));
			}
		});
		navLi.forEach((li) => {
			li.classList.remove("active");
			if (li.getAttribute("href") === `#${current}`) {
				li.classList.add("active");
			}
		});
>>>>>>> 9736fed3217d5e59fc5df7b77535ba7fe3d0e80d
	});
};

export default windowOnScroll;
