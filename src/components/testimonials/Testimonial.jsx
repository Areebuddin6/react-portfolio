import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
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
		review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos,
    esse deleniti aliquid earum a unde harum nihil animi est, quos
    necessitatibus iste accusantium assumenda sequi minima architecto
    possimus laboriosam veritatis. Doloribus vitae labore deleniti quam
    eaque necessitatibus sapiente ullam quia rerum? Sed officiis
    consequuntur quisquam sapiente voluptate ex natus.`,
		name: "Iqbal",
	},
	{
		id: 2,
		image: avatar2,
		review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos,
    esse deleniti aliquid earum a unde harum nihil animi est, quos
    necessitatibus iste accusantium assumenda sequi minima architecto
    possimus laboriosam veritatis. Doloribus vitae labore deleniti quam
    eaque necessitatibus sapiente ullam quia rerum? Sed officiis
    consequuntur quisquam sapiente voluptate ex natus.`,
		name: "Selena Gomez",
	},
	{
		id: 3,
		image: avatar3,
		review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos,
    esse deleniti aliquid earum a unde harum nihil animi est, quos
    necessitatibus iste accusantium assumenda sequi minima architecto
    possimus laboriosam veritatis. Doloribus vitae labore deleniti quam
    eaque necessitatibus sapiente ullam quia rerum? Sed officiis
    consequuntur quisquam sapiente voluptate ex natus.`,
		name: "Bill Gates",
	},
	{
		id: 4,
		image: avatar4,
		review: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos,
    esse deleniti aliquid earum a unde harum nihil animi est, quos
    necessitatibus iste accusantium assumenda sequi minima architecto
    possimus laboriosam veritatis. Doloribus vitae labore deleniti quam
    eaque necessitatibus sapiente ullam quia rerum? Sed officiis
    consequuntur quisquam sapiente voluptate ex natus.`,
		name: "Hitler",
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
						{/* <div className="testimonial__image">
							<img src={image} alt="client1" />
						</div> */}
						<Avatar
							src={image}
							alt="client_image"
							sx={{ width: 100, height: 100 }}
						/>
						<h2>{name}</h2>
						<div className="testimonial__review">{review}</div>
					</SwiperSlide>
				);
			})}
		</Swiper>
		//{" "}
	);
};

export default Testimonial;
