import React from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Social() {
  return (
    <div className='container'>
        {/*Desktop Left Sidebar Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-silver'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-silver'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-silver'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-silver'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>
        </div>

        {/*Mobile~Tablet: hovering sticky at the bottom*/}
        <div className='lg:hidden fixed bottom-0 pb-8 left-56 right-56'>
            <ul className='flex place-content-center rounded-xl'>
                <li className='flex justify-between items-center bg-silver border-0 border-primary'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        <FaLinkedin size={20}/>
                    </a>
                </li>
                <li className='flex justify-between items-center bg-silver border-0 border-primary'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        <FaGithub size={20}/>
                    </a>
                </li>
                <li className='flex justify-between items-center bg-silver border-0 border-primary'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        <HiOutlineMail size={20}/>
                    </a>
                </li>
                <li className='flex justify-between items-center bg-silver border-0 border-primary'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        <BsFillPersonLinesFill size={20}/>
                    </a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Social