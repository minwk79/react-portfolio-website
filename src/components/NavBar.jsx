import React, {useState} from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';

import { Link, animateScroll as scroll } from "react-scroll";


const NavBar = () => {

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  }

  return (
    <div className='fixed mx-auto w-full h-[70px] flex flex-row-reverse justify-between px-4 items-center
      text-light-text dark:text-dark-text' >
      {/* menu */}
      <ul className='hidden md:flex'>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>



      </ul>

      {/* Hamburger */}
      <div className='md:hidden z-10' onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute opacity-90 top-0 left-0 w-full h-screen text-light-text dark:text-dark-text bg-light-component dark:bg-dark-component flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="projects" smooth={true} duration={500} onClick={handleClick}>
            Projects
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default NavBar