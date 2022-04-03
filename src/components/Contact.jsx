import React from 'react'
import EmailForm from './EmailForm'
import ContactCard from './ContactCard'



function Contact() {


  return (
    <div className='container flex py-20 items-center justify-center flex-col' id='contact'>
      <div className='flex-col'>
          <p className='secondaryText my-4'>You can always</p>
          <p className='primaryText my-4'>Contact Me</p>
      </div>
      
    <div className='flex flex-row gap-3'>
      <div className='basis-1/4'>
          <div className='border'>
            <ContactCard icon="phone square icon" label="Phone:" contact="213-397-6528"/>
          </div>
          <div className='border'>
            <ContactCard icon="envelope icon" label="Email:" contact="minwk79@gmail.com"/>
          </div>
        </div>
        <div className='basis-3/4 border'>
          <EmailForm />
        </div>
      </div>
    </div>
  )
}

export default Contact

