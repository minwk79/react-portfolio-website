import React from 'react'

function ContactCard({icon, label, contact}) {
  return (
    <div className='card'>
        <div className='content'>
            <div className='header'>
                <i className={icon} />{label}
            </div>
            <div className="description">{contact}</div>
        </div>
    </div>
    
  )
}

export default ContactCard