import React from 'react'

function SkillCard({area, skills}) {
    const renderedSkills = skills.map((skill) => {
        return <div key={skill}>- {skill}</div>
    });


  return (
    <div className='card'>
        <div className='header'>
          <h2>{area}</h2>
        </div>
        <div className='content'>
          <h5>{skills}</h5>
        </div>
    </div>
  )
}

export default SkillCard