import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiContacts } from "react-icons/ti";
import { BiBook } from "react-icons/bi";
import { AiOutlineCustomerService } from "react-icons/ai";

const home = <AiOutlineHome />,
	about = <AiOutlineUser />,
	contact = <TiContacts />,
	experience = <BiBook />,
	services = <AiOutlineCustomerService />;

const navBars = [
	["home", home],
	["about", about],
	["contact", contact],
	["experience", experience],
	["services", services],
];

export default navBars;
