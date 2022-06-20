import React from "react";
import SkillCard from "./SkillCard";

// TODO: Declare variables for skillcards.
const coding = ["Javascript", "Python", "C/C++", "HTML/CSS"];

const frameworks = ["React", "Redux", "Tailwind"];

const dbSkills = ["SQL", "MongoDB", "Firebase"];

const tools = ["Git", "Excel", "Vercel"];

export default function Skills() {
  return (
    <div
      name="skills"
      className="container max-w-[1000px] flex flex-col justify-center w-full h-full mb-40 md:mb-64 lg:mb-80"
    >
      <div className="text-center pb-8">
        <p className="headerText">Skills</p>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mb-40 md:mb-64 lg:mb-80">
        <SkillCard area="Coding" skills={coding} />
        <SkillCard area="Frameworks" skills={frameworks} />
        <SkillCard area="Database" skills={dbSkills} />
        <SkillCard area="Tools" skills={tools} />
      </div>
    </div>
  );
}
