import React from 'react'
import ProjectCard from './ProjectCard'

export default function Project() {

  const des1 = "This project is an just an example template for me to see. Cheers!";

  const des2 = "Lorem Imsum Dolores Dominguez I'm coming home again."

  return (
    <div className='project ui container' id='project'>
      <h5>Here are some</h5>
      <h2>Projects</h2>
      <div className='ui container cards'>
        <ProjectCard name="Project A" tools="Python, Django, MongoDB" description={des1}/>
        <ProjectCard name="Development Project" tools="React, Typescript, HTML/CSS" description={des2}/>
      </div>
    </div>
  )
}
