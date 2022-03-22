import React from 'react'
// import my image from assets and put it inside the img src. 
import myImg from '../assets/temp.png';
import resume from '../assets/resume.pdf'


export default function Header() {
  return (

    <div className='container mx-auto flex px-5 py-24 items-center justify0center flex-col'>
      <p className='text-lg text-secondary'>Hi, My Name Is </p>

      <img className='w-1/3 md:w-1/6 mb-10 object-cover object-center rounded-full' alt='me' src={myImg}></img>
      <div className='text-center lg:w-2/3 w-full'>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-primary'>Min Woo Kwak</h1>
        <p className='mb-8 leading-relaxed'>Welcome to my Web Portfolio! <br />I'm a software/application developer, etc</p>
        <div className='flex justify-center'>
          <a className="text-lg py-2 px-4 rounded inline-flex items-center text-silver bg-tahiti-600 focus:outline-none hover:bg-tahiti-300"
            href={resume} download>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>Resume</p>
          </a>

          <a className="ml-4 text-lg py-2 px-4 rounded inline-flex items-center text-silver bg-tahiti-600 focus:outline-none hover:bg-tahiti-300"
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
