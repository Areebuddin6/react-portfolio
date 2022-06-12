import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { BiBook } from "react-icons/bi";
import { AiOutlineCustomerService } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

const home = <AiOutlineHome />,
	about = <AiOutlineUser />,
	experience = <BiBook />,
	contact = <TiContacts />,
	portfolio = <BsBriefcase />,
	services = <AiOutlineCustomerService />;

const navBars = [
	["home", home],
	["about", about],
	["experience", experience],
	["portfolio", portfolio],
	// ["services", services],
	["contact", contact],
];

export default navBars;
