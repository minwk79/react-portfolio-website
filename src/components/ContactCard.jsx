import React from 'react'

function ContactCard({icon, label, contact}) {
  return (
    <div className='container px-2 gap-1'>
      <div>
        <h2 className='description '>{label}</h2>
        <p className='description'>{contact}</p>
      </div>

    </div>
    
  )
}

export default ContactCard