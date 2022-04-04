import React from 'react'
// import my image from assets and put it inside the img src. 
import myImg from '../assets/temp.png';
import resume from '../assets/resume.pdf'

export default function Header() {
  return (

    <div name='home' className='container pt-32 flex flex-col justify-center'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-4'>
        <p className='text-secondary text-2xl md:text-4xl '>Hello! <br /> My Name Is </p>
        {/* <img className='py-6 w-1/3 md:w-1/6 mb-10 object-cover object-center rounded-full' alt='me' src={myImg}></img> */}
        <h1 className='text-primary text-4xl md:text-6xl font-bold'>Min Woo Kwak</h1>
        <h2 className='text-secondary text-2xl md:text-4xl font-bold'>I'm a Software Developer</h2>
        <p className='text-tahiti-700 py-4 max-w-[700px]'>
          &lt;myself&gt; <br />
          &ensp;Welcome to my personal web portfolio! <br />
          &ensp;I'm interested in building Software / Applications<br />
          &lt;/myself&gt; <br />
        </p>
        <div className='flex justify-center'>
          <a className="primaryBtn"
            href={resume} download>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>Resume</p>
          </a>
          <a className="ml-4 secondaryBtn"
            href='https://github.com/minugrammer0725' target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            <p>Github</p>
          </a>        
        </div>
      </div>
    </div>
  )
}


