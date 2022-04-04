import React from 'react'
import AboutCard from './AboutCard';

import {HiArrowNarrwoRight} from 'react-icons/hi';


function About() {
  // array of strings that contain each bullet points.
  const eduBullets = [
    "B.S in Computer Science",
    "Class of 2022",
    "GPA: 3.83"
  ];  
  const bgBullets = [
    "Born in Seoul, South Korea",
    "Interested in Web/App development",
    "previously majored in psychology/Cog Sci"
  ];

  
  return (
    <div name='about' className='container myContainer flex flex-col justify-center'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='headerText'>About Me</p>
          </div>
        </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Background</p>
            </div>
            <div>
               <p>
                 4+ years of programming/software development<br />
                 Full-stack development from scratch<br />
                 Strong foundation on Algorithms and Data Structures<br />
                 Knowledge in Operating Systems, Compilers, and Computer Networks<br />
               </p>
            </div>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Education</p>
            </div>
            <div>
               <p>
                4th year Undergraduate in UCI. Major in Computer Science, Information.<br />
                &ensp;//graduation expected June 2022<br />
                2019-2022 Dean's Honors List, GPA 3.80<br/>
               </p>
            </div>
          </div>

      </div>

    </div>

  )
}

export default About;