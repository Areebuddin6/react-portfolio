import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { BiBook } from "react-icons/bi";
import { AiOutlineCustomerService } from "react-icons/ai";

const home = <AiOutlineHome />,
	about = <AiOutlineUser />,
	experience = <BiBook />,
	contact = <TiContacts />,
	services = <AiOutlineCustomerService />;

const navBars = [
	["home", home],
	["about", about],
	["experience", experience],
	["contact", contact],
	["services", services],
];

export default navBars;
