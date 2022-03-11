import React from 'react'

function SocialMedia() {
  return (
    <div className='social-media ui container'>
        <h5>Follow Me!</h5>
        <div className='icons'>
            <button className='ui icon button'>
                <a href="https://www.facebook.com/markquackk/" target="_blank" rel="noreferrer">
                    <i className='facebook icon' />
                </a>
            </button>
            <button className='ui icon button'>
                <a href="https://www.instagram.com/markquack/" target="_blank" rel="noreferrer">
                    <i className='instagram icon' />
                </a>
            </button>
        </div>

    </div>
  )
}

export default SocialMedia