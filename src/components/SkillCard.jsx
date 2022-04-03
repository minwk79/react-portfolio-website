import React from 'react'

function SkillCard({area, skills}) {
    const renderedSkills = skills.map((skill) => {
        return (
          <div key={skill}>
            <i className="" /> {skill}
          </div>)
    });


  return (
    <div className='shadow-md shadow-secondary hover:scale-110 duration-300'>
      <h2 className='secondaryText'>{area}</h2>
      <div className='description'>
        {renderedSkills}
      </div>
    </div>
  )
}

export default SkillCard