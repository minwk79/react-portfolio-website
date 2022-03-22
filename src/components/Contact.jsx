import React from 'react'
import EmailForm from './EmailForm'
import ContactCard from './ContactCard'

function Contact() {


  return (
    <div className='container flex py-20 items-center justify-center flex-col' id='contact'>
      <h5>you can</h5>
      <h2>Contact Me!</h2>
      <div className='ui stackable grid'>
        <div className='four wide column'>
          {/* Make the contact card links clickable, with copy functionality. */}
          <div className='ui cards'>
            <ContactCard icon="phone square icon" label="Phone:" contact="213-397-6528"/>
            <ContactCard icon="envelope icon" label="Email:" contact="myemail@gmail.com"/>
          </div>
        </div>
        <div className='eight wide column'>
          <div className='ui form success'>
            <EmailForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact