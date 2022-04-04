import React from 'react'
import SkillCard from './SkillCard'

// TODO: Declare variables for skillcards.
const feSkills= [
  "HTML",
  "CSS",
  "React",
  "Tailwind",
  "Angular"
];

const beSkills = [
  "Python",
  "C/C++",
  "Javascript"
];

const dbSkills = [
  "MySQL",
  "PostgreSQL",
  "Firebase"
];

const tools = [
  "Excel",
  "Git"
];



export default function Skills() {
  return (
    <div name='skills' className='container max-w-[1000px] flex flex-col justify-center w-full h-full mb-40 md:mb-64 lg:mb-80'>
      <div className='flex-col'>
        <p className='headerText'>Skills</p>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center mb-40 md:mb-64 lg:mb-80'>
        <SkillCard area="Front End" skills={feSkills} />
        <SkillCard area="Back End" skills={beSkills} />
        <SkillCard area="Database" skills={dbSkills} />
        <SkillCard area="Tools" skills={tools} />

      </div>
    </div>
  )
}
