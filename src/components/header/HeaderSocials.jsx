import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header-socials">
        <a href="https://www.linkedin.com/in/areebuddin-phundreimayum-0156a421b/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Areebuddin6" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://twitter.com/AreebuddinPhun" target="_blank" rel="noreferrer"><BsTwitter/></a>
        <a href="https://www.facebook.com/areebuddin.phundreimayum.10/" target="_blank" rel="noreferrer"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocials