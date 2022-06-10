import { useState } from "react";

const windowOnScroll = () => {
	const [current, setCurrent] = useState("");
	const sections = document.querySelectorAll(".app > *");
	const navLi = document.querySelectorAll("nav a");
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
};

export default windowOnScroll;
