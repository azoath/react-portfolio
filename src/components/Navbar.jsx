import logo from "../assets/v_logo.png";
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-15 flex items-center justify-between py-4"> 
    <div className="flex flex-shrink-0 items-center">
        <img className="mx-1 w-20  " src={logo} alt='logo'></img>
    </div>
    <div className="m-6 flex items-cenetr justify-center gap-6 text-2xl">
        <a href="https://www.linkedin.com/in/vaishnavi-kumari"><FaLinkedin /></a>
        <a href="https://github.com/azoath"><FaGithub /></a>
        <a href="https://x.com/Azoath112639?t=7_DpsmF8d876Di2u1ihfrw&s=08"><FaSquareXTwitter /></a>
        <a href="https://www.instagram.com/dubey_vaishnavi?utm_source=qr"><FaInstagram /></a>
    </div>
    </nav>
  )
}

export default Navbar;