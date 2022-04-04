import React from 'react'
import ProjectCard from './ProjectCard'
import srcImg from '../assets/temp.png'

const des1 = "This project is an just an example template for me to see. Cheers!";
const des2 = "Lorem Imsum Dolores Dominguez I'm coming home again. Cheerssssesese";
const des3 = 'The world is so smaaaal till it aint!';
const des4 = 'Project Manifesto Socrative Waitful thoughts';

const tools1 = ["React", "Javascript", "Tailwind Css"];
const tools2 = ["C", "Linux"];
const tools3 = ["Python", "Flask"];
const tools4 = ["React","Javascript", "Firebase"];


export default function Project() {

  return (   
    <div name='projects' className='container max-w-[1000px] flex flex-col justify-center w-full h-full' >
        <div className='flex-col'>
            <p className='headerText'>Projects</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-center py-8 rounded-xl content-div'>
          <ProjectCard name="Project A" tools={tools1} description={des1} src={srcImg} git='' website=''/>
          <ProjectCard name="Project B" tools={tools2} description={des2} src={srcImg} git='' website=''/>
          <ProjectCard name="Project C" tools={tools3} description={des3} src={srcImg} git='' website=''/>
          <ProjectCard name="Project D" tools={tools4} description={des4} src={srcImg} git='' website=''/>

        </div>
    </div>
  )
}
