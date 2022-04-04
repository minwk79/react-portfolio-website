import React from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import resume from '../assets/resume.pdf'
import { Link } from "react-scroll";

function Social() {
  return (
    <div className=''>
        {/*Desktop Left Sidebar Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-silver'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='https://www.linkedin.com/in/minwoo-kwak-8437a8236/' target='_blank' rel='noreferrer'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-silver'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='https://github.com/minugrammer0725' target='_blank' rel='noreferrer'>
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-silver'>
                    <Link to='contact' smooth={true} duration={500} className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        Email <HiOutlineMail size={30}/>
                    </Link>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-silver'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href={resume} download>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>

                </li>
            </ul>
        </div>

        {/*Mobile~Tablet: hovering sticky at the bottom*/}
        <div className='lg:hidden fixed bottom-0 pb-8 left-56 right-56'>
            <ul className='flex place-content-center rounded-xl'>
                <li className='flex justify-between items-center bg-silver border-0 border-primary'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='https://www.linkedin.com/in/minwoo-kwak-8437a8236/' target='_blank' rel='noreferrer'>
                        <FaLinkedin size={20}/>
                    </a>
                </li>
                <li className='flex justify-between items-center bg-silver border-0 border-primary'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href='https://github.com/minugrammer0725' target='_blank' rel='noreferrer'>
                        <FaGithub size={20}/>
                    </a>
                </li>
                <li className='flex justify-between items-center bg-silver border-0 border-primary'>
                    <Link to='contact' smooth={true} duration={500} className='flex justify-between items-center w-full text-tahiti-700' href='/'>
                        <HiOutlineMail size={20}/>
                    </Link>
                </li>
                <li className='flex justify-between items-center bg-silver border-0 border-primary'>
                    <a className='flex justify-between items-center w-full text-tahiti-700' href={resume} download>
                        <BsFillPersonLinesFill size={20}/>
                    </a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Social