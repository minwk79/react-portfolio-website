import React from 'react'
import ProjectCard from './ProjectCard'
import srcImg from '../assets/temp.png'

const des1 = "Responsive Web Portfolio. Check out my skills and projects here!";
const des2 = "Real time Auction that supports concurrent biding. Client-Server with mutex locks.";
const des3 = "Fast full-text search using Inverted Index. Query response time under 300ms.";
const des4 = "Supports user authentication. Firebase to store all user data.";

const tools1 = ["React", "Javascript", "Tailwind"];
const tools2 = ["C", "Linux"];
const tools3 = ["Python", "Flask"];
const tools4 = ["React", "Firebase", "Google OAuth"];


export default function Project() {

  return (   
    <div name='projects' className='container max-w-[1000px] flex flex-col justify-center w-full h-full ' >
        <div className='text-center pb-8'>
            <p className='headerText'>Projects</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8 rounded-xl content-div'>
          <ProjectCard name="This Portfolio!" tools={tools1} description={des1} src={srcImg} git='' website=''/>
          <ProjectCard name="Live Auction" tools={tools2} description={des2} src={srcImg} git='' website=''/>
          <ProjectCard name="Search Engine" tools={tools3} description={des3} src={srcImg} git='' website=''/>
          <ProjectCard name="Housing Marketplace" tools={tools4} description={des4} src={srcImg} git='' website=''/>

        </div>
    </div>
  )
}
