import React from 'react'
import ProjectCard from './ProjectCard'
import srcImg from '../assets/temp.png'

export default function Project() {

  const des1 = "This project is an just an example template for me to see. Cheers!";
  const des2 = "Lorem Imsum Dolores Dominguez I'm coming home again. Cheerssssesese"

  return (   
    <div name='projects' id='projects'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='secondaryText my-4'>Here are my</p>
            <p className='primaryText my-4'>Projects</p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='shadow-lg shadow-secondary group container rounded-md flex justify-center items-center mx-auto content-div'>
            <ProjectCard name="Project Something" tools="Python, Django, MongoDB" description={des1} src={srcImg}/>
          </div>
          <div className='shadow-lg shadow-secondary group container rounded-md flex justify-center items-center mx-auto content-div'>
            <ProjectCard name="Development Project" tools="React, Typescript, HTML/CSS" description={des2} src={srcImg}/>
          </div>
          <div className='shadow-lg shadow-secondary group container rounded-md flex justify-center items-center mx-auto content-div'>
            <ProjectCard name="Development Project" tools="React, Typescript, HTML/CSS" description={des2} src={srcImg}/>
          </div>
          <div className='shadow-lg shadow-secondary group container rounded-md flex justify-center items-center mx-auto content-div'>
            <ProjectCard name="Development Project" tools="React, Typescript, HTML/CSS" description={des2} src={srcImg}/>
          </div>
        </div>
      </div>
    </div>
  )
}
