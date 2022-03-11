import React from 'react'
import resume from '../assets/resume.pdf'

function CTA() {
  return (
    <div className='cta'>
        <a className='ui primary button' href={resume} download>Download Resume</a>
        <a className='ui button' href='https://github.com/minugrammer0725' target="_blank" rel="noreferrer">Github</a>
    </div>
  )
}

export default CTA