import React from "react";
import { HiOutlineMail, HiOutlineDocumentText } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../assets/Resume.pdf";
import { Link } from "react-scroll";

function Social() {
  return (
    <div className="">
      {/* Set opacity on hover on above classname */}

      {/*Desktop Left Sidebar Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="desktopIcons">
            <a
              className="flex justify-between items-center w-full text-light-text dark:text-dark-text"
              href="https://www.linkedin.com/in/minwoo-kwak-8437a8236/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="desktopIcons">
            <a
              className="flex justify-between items-center w-full text-light-text dark:text-dark-text"
              href="https://github.com/minugrammer0725"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="desktopIcons">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-light-text dark:text-dark-text"
              href="/"
            >
              Contact <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="desktopIcons">
            <a
              className="flex justify-between items-center w-full text-light-text dark:text-dark-text"
              href={resume}
              download
            >
              Resume <HiOutlineDocumentText size={30} />
            </a>
          </li>
        </ul>
      </div>

      {/*Mobile~Tablet: hovering sticky at the bottom*/}
      <div className="lg:hidden fixed bottom-0 pb-8 container mx-auto">
        <ul className="flex place-content-center rounded-xl">
          <li className="mobileIcons">
            <a
              className="flex justify-between items-center w-full text-light-text dark:text-dark-text"
              href="https://www.linkedin.com/in/minwoo-kwak-8437a8236/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin size={20} />
            </a>
          </li>
          <li className="mobileIcons">
            <a
              className="flex justify-between items-center w-full text-light-text dark:text-dark-text"
              href="https://github.com/minugrammer0725"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} />
            </a>
          </li>
          <li className="mobileIcons">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-light-text dark:text-dark-text"
              href="/"
            >
              <HiOutlineMail size={20} />
            </Link>
          </li>
          <li className="mobileIcons">
            <a
              className="flex justify-between items-center w-full text-light-text dark:text-dark-text"
              href={resume}
              download
            >
              <HiOutlineDocumentText size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Social;
