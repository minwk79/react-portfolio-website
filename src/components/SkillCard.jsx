import React from 'react'

function SkillCard({area, skills}) {
    const renderedSkills = skills.map((skill) => {
        return (
          <div className="eight wide column" key={skill}>
            <i className="check circle icon" /> {skill}
          </div>)
    });


  return (
    <div className='card'>
        <div className='header'>
          <h2>{area}</h2>
        </div>
        <div className='content'>
          <div className="ui grid">
            {renderedSkills}
          </div>
        </div>
    </div>
  )
}

export default SkillCard