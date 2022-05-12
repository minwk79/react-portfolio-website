import React from "react";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-[20px] px-20 py-20 flex flex-col sm:flex-row items-center gap-4 justify-center bg-light-bg dark:bg-dark-bg md:justify-between">
      {/* Copyright Section */}
      <div className="mr-12 block">
        <span className="text-xs sm:text-sm sm:text-center text-light-primary dark:text-dark-primary">
          © 2022 Min Woo Kwak.
        </span>
      </div>
      {/* Created By Section */}
      <div className="flex justify-center items-center gap-2">
        <div className="mr-4 text-xs sm:text-sm text-light-text dark:text-dark-text">
          <label>Created By Using: </label>
        </div>
        <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
          <FaReact className="text-light-text hover:text-light-secondary dark:text-dark-text dark:hover:text-dark-secondary" />
        </a>
        <a href="https://www.javascript.com/" target="_blank" rel="noreferrer">
          <SiJavascript className="text-light-text hover:text-light-secondary dark:text-dark-text dark:hover:text-dark-secondary" />
        </a>
        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
          <SiTailwindcss className="text-light-text hover:text-light-secondary dark:text-dark-text dark:hover:text-dark-secondary" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
