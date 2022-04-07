import React from 'react'
// import my image from assets and put it inside the img src. 
import myImg from '../assets/temp.png';
import resume from '../assets/resume.pdf'

import {AiOutlineDownload} from 'react-icons/ai';
import {BiLinkExternal} from 'react-icons/bi'

export default function Header() {
  return (

    <div name='home' className='container pt-32 flex flex-col justify-center'>
      {/*Container*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-4'>
        <p className='text-light-secondary dark:text-dark-text text-2xl md:text-4xl '>Hello! <br /> My Name Is </p>
        {/* <img className='py-6 w-1/3 md:w-1/6 mb-10 object-cover object-center rounded-full' alt='me' src={myImg}></img> */}
        <h1 className='text-light-primary dark:text-dark-primary text-4xl md:text-6xl font-bold'>Min Woo Kwak</h1>
        <h2 className='text-light-secondary dark:text-dark-text text-2xl md:text-4xl font-bold'>I'm a Software Developer</h2>
        <p className='text-light-text dark:text-dark-text py-4 max-w-[700px]'>
          &lt;Myself&gt; <br />
          &ensp;Welcome to my personal web portfolio! <br />
          &ensp;I'm interested in building Software / Applications<br />
          &lt;/Myself&gt; <br />
        </p>
        <div className='flex justify-center'>
          <a className="primaryBtn gap-2"
            href={resume} download>
            <AiOutlineDownload size={20} />
            <p>Resume</p>
          </a>
          <a className="ml-4 secondaryBtn gap-2"
            href='https://github.com/minugrammer0725' target="_blank" rel="noreferrer">
            <BiLinkExternal size={20}/>
            <p>Github</p>
          </a>        
        </div>
      </div>
    </div>
  )
}


