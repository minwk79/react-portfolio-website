import React from 'react'

function SkillCard({area, skills}) {
    const renderedSkills = skills.map((skill) => {
        return (
          <div key={skill}>
            <i className="" /> {skill}
          </div>)
    });


  return (
    <div className='bg-light-component dark:bg-dark-component shadow-md shadow-light-secondary dark:shadow-dark-secondary hover:scale-110 duration-300'>
      <h2 className='text-light-secondary dark:text-dark-secondary'>{area}</h2>
      <div className='description'>
        {renderedSkills}
      </div>
    </div>
  )
}

export default SkillCard