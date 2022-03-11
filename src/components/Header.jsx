import React from 'react'
import CTA from './CTA';
// import my image from assets and put it inside the img src. 


export default function Header() {
  return (
    <div className="header ui container">
      <h5>Hello I'm</h5>
      <h2>Minwoo Kwak</h2>
      <div className='me'>
        <img src='' alt="Min Kwak's Profile" />  
      </div>
      <h5>Software Developer / Coder</h5>
      <CTA />
      {/* <a className='scroll_down' href="#contact">Scroll Down</a> */}

    </div>
  )
}
