import React from 'react'

function EmailForm() {
  return (
    <div className='email-form'>
        <div className='field'>
            <label>Name</label>
            <input type="text" name='name' placeholder='name' />
        </div>
        <div className='field'>
            <label>Email</label>
            <input type="text" name='email' placeholder='email' />
        </div>
        <div className='field'>
            <label>Message</label>
            <textarea placeholder='message'></textarea>
        </div>
        {/* <div className='ui success message'>
            <div className='header'>Email Sent!</div>
            <p>You have successfully sent a message to Min!</p>
        </div> */}
        <div className='ui submit button'>Submit</div>
    </div>
  )
}

export default EmailForm