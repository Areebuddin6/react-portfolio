import React from 'react';
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {TiContacts} from "react-icons/ti"
import {BiBook} from "react-icons/bi"
import {AiOutlineCustomerService} from "react-icons/ai"
import { useState } from 'react';
import "./nav.css"

const Nav = () => {
  const [active, setActive] = useState("#home");
  const setActiveClass = state => {
    if (active === state) return "active";
    return "";
  }

  return (
    <nav >
      <a href="#home" onClick={() => setActive("#home")} class={setActiveClass("#home")}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActive("#about")} class={setActiveClass("#about")}><AiOutlineUser/></a>
      <a href="#contact" onClick={() => setActive("#contact")} class={setActiveClass("#contact")}><TiContacts/></a>
      <a href="#experience" onClick={() => setActive("#experience")} class={setActiveClass("#experience")}><BiBook/></a>
      <a href="#services" onClick={() => setActive("#services")} class={setActiveClass("#services")}><AiOutlineCustomerService/></a>
    </nav>
  )
}


export default Nav