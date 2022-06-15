import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar1 from "../../assets/musharraf.jpg";
import avatar2 from "../../assets/Syed Ahmed.jpg";
import avatar3 from "../../assets/abrar.jpg";
import avatar4 from "../../assets/iqbal.jpg";
import { Avatar } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const data = [
	{
		id: 1,
		image: avatar1,
		review: `Putting together a website is a task, finding the right individual or company is even more complex. I did my search around looking for this particular devloper that has the ability to create, design and optimized my web site. Thanks God I meet Areebuddin, not only he has great taste in design but he can guide you through the process and beyond.`,
		name: "Musharraf",
	},
	{
		id: 2,
		image: avatar2,
		review: `With Areebuddin's help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Areebuddin!`,
		name: "Syed Ahmed",
	},
	{
		id: 3,
		image: avatar3,
		review: `Compared to the other developer we have worked with in the past, Areebuddin has been far and above the best in every area. While building our new web site, the customer service has been prompt and straightforward and the actual services are well documented and logical to our needs. We are very excited to be working with Areebuddin. Over just a short period of time I can tell that we are going to be doing business with Areebuddin for a long time and will gladly recommend him to anyone… except our competition.`,
		name: "Abrar Ph.",
	},
	{
		id: 4,
		image: avatar4,
		review: `Areebuddin listened to everything we needed and wanted in a new website, then delivered it! Our new website is fun, exciting and easy to use for me and our audiences. I have gone through website redesigns before, and by far, this one was the easiest and least painful. I was listened to and respected through every step. We couldn't be happier with our new website.`,
		name: "Iqbal",
	},
];

const Testimonial = () => {
	return (
		<Swiper
			className="container testimonial__container"
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={50}
			slidesPerView={1}
			navigation
			pagination={{ clickable: true }}
		>
			{data.map(({ id, image, review, name }) => {
				return (
					<SwiperSlide key={id} className="testimonial">
						<Avatar
							src={image}
							alt="client_image"
							sx={{ width: 100, height: 100 }}
						/>
						<blockquote>
							<div className="testimonial__review">"{review}"</div>
						</blockquote>
						<figcaption>
							<cite>- {name}</cite>
						</figcaption>
					</SwiperSlide>
				);
			})}
		</Swiper>
		//{" "}
	);
};

export default Testimonial;
