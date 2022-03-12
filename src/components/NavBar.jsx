import React from 'react'

function NavBar() {


  return (
    <div className='navbar ui fixed top sticky' >
        <ul className='navbar'>
            <li><a href="#"><i className='user outline icon'/></a></li>
             <li><a href="#skills"><i className='gem outline icon'/></a></li>
             <li><a href="#project"><i className='folder outline icon'/></a></li>
             <li><a href="#contact"><i className='comment alternate outline icon'/></a></li>
             <li><a href="#footer"><i className='heart outline icon'/></a></li>
        </ul>
    </div>
  )
}

export default NavBar