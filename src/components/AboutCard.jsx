import React from 'react'

function AboutCard({label, bullets}) {
    const bulletList = bullets.map((bullet) => {
        return <div key={bullet}>- {bullet}</div>;
    });


  return (
    <div className='card'>
        <div className='header'>
            <h2>{label}</h2> 
        </div>
        <div className='content'>
            <h5>{bulletList}</h5>
        </div>
    </div>
  )
}

export default AboutCard