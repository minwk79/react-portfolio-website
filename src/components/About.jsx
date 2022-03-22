import React from 'react'
import AboutCard from './AboutCard';

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
    <div id="about" className='container py-20 items-center justify-center flex flex-col'>
      <div className='flex-col'>
        <p className='secondaryText my-4'>Get to know</p>
        <p className='primaryText my-4'>About Me!</p>
      </div>

      <div className='flex flex-wrap my-8'>
        <AboutCard label="Education" bullets={eduBullets}/>
        <AboutCard label="Background" bullets={bgBullets}/>
      </div>

    </div>

  )
}

export default About;