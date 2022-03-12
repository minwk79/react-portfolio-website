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
    <div id="#about" className='about ui container'>
      <h5>Get to know</h5>
      <h2>About Me!</h2>
      <div className='ui cards'>
        <AboutCard label="Education" bullets={eduBullets}/>
        <AboutCard label="Background" bullets={bgBullets}/>
      </div>

    </div>

  )
}

export default About;