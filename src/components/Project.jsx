import React from 'react'
import ProjectCard from './ProjectCard'
import srcImg from '../assets/temp.png'

export default function Project() {

  const des1 = "This project is an just an example template for me to see. Cheers!";
  const des2 = "Lorem Imsum Dolores Dominguez I'm coming home again. Cheerssssesese"

  return (   
    <div name='projects' className='container myContainer max-w-[1000px] flex flex-col justify-center w-full h-full gap-8' id='projects' >
        <div className='flex-col'>
            <p className='headerText'>Projects</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8'>
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
  )
}
