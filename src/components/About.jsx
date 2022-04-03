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
    <div name='about' id="about" className='w-full h-screen text-primary'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-primary'>About Me</p>
          </div>
        </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>BackGround</p>
            </div>
            <div>
               <p>
                 Some Long Text About my Background ....
                 Lorem IpsuM Dolor Long Ass Verse Goes Here.
                 Lorem IpsuM Dolor Long Ass Verse Goes Here.
                 Lorem IpsuM Dolor Long Ass Verse Goes Here.
                 Lorem IpsuM Dolor Long Ass Verse Goes Here.
               </p>
            </div>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Education</p>
            </div>
            <div>
               <p>
                 Some Long Text About my Background ....
                 Lorem IpsuM Dolor Long Ass Verse Goes Here.
                 Lorem IpsuM Dolor Long Ass Verse Goes Here.
                 Lorem IpsuM Dolor Long Ass Verse Goes Here.
                 Lorem IpsuM Dolor Long Ass Verse Goes Here.
               </p>
            </div>
          </div>

      </div>

    </div>

  )
}

export default About;