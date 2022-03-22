import React from 'react'
import SkillCard from './SkillCard'

// TODO: Declare variables for skillcards.
const feSkills= [
  "HTML/CSS",
  "Javascript",
  "React",
  "Tailwind",
  "Redux",
  "Angular"
];

const beSkills = [
  "Python",
  "C/C++",
  "Java"
];

const sqlSkills = [
  "MySQL",
  "PostgreSQL",
  "MongoDB"
];

const tools = [
  "Microsoft Excel",
  "Git"
];



export default function Skills() {
  return (
    <div className='container flex py-20 items-center justify-center flex-col' id='skills'>
      <h5>What Can I Do?</h5>
      <h2>Skills</h2>
      <div className=''>
        <SkillCard area="Front End" skills={feSkills} />
        <SkillCard area="Back End" skills={beSkills} />
        <SkillCard area="SQL" skills={sqlSkills} />
        <SkillCard area="Tools" skills={tools} />
      </div>
    </div>
  )
}
