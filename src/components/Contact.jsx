import React from 'react'
import EmailForm from './EmailForm'
import ContactCard from './ContactCard'



function Contact() {


  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4' id='contact'>
      <form method='POST' action='https://getform.io/f/23fde768-537b-4cae-9d35-3e996ac4f6dd' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='primaryText my-4'>Contact Me</p>
          <p className='secondaryText my-4'>Some Additional Text here</p>
        </div>
        <input className='my-4 p-2' type='text' placeholder='Your Name' name='name' /> 
        <input className='my-4 p-2' type='email' placeholder='Your Email' name='email' /> 
        <textarea className='my-4 p-2' name='message' rows='10' placeholder='Message'></textarea>
        <button className='primaryBtn mx-auto '>send message</button>
      </form>
      

    </div>
  )
}

export default Contact

