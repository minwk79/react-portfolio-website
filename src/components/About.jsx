import React from "react";

function About() {
  return (
    <div
      name="about"
      className="container myContainer flex flex-col justify-center"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pl-4 pb-8">
            <p className="headerText">About Me</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 md:gap-20 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p className="hover:scale-110 duration-300 text-light-primary dark:text-dark-primary">
              Background
            </p>
          </div>
          <div>
            <p className="hover:scale-110 duration-300 text-light-text dark:text-dark-text">
              Fluent in programming/software development
              <br />
              Capable of Full-stack development
              <br />
              Strong foundation on Algorithms and Data Structures
              <br />
              Knowledge in Operating Systems, Compilers
              <br />
            </p>
          </div>
          <div className="sm:text-right text-4xl font-bold">
            <p className="hover:scale-110 duration-300 text-light-primary dark:text-dark-primary">
              Education
            </p>
          </div>
          <div>
            <p className="hover:scale-110 duration-300 text-light-text dark:text-dark-text">
              B.S in Computer Science
              <br />
              UCI Class of 2022
              <br />
              Major: Computer Science, Information
              <br />
              GPA 3.77
              <br />
              Dean's Honors List 2019-2022
              <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
