import {useState} from 'react';
import {HiOutlineMoon} from 'react-icons/hi';
import {HiOutlineSun} from 'react-icons/hi';

const DarkMode = ({darkMode, toggleDarkMode}) => {

  const [dark, setDark] = useState(false);

  const handleClick = () => {
    setDark(!dark);
  }

  return (
    <div className=''>

      {/* Desktop */}
      <div className='hidden lg:flex fixed flex-col top-[70%] left-4' onClick={() => {toggleDarkMode(darkMode)}} >
        <div className='px-2 rounded-lg text-light-text dark:text-dark-text' onClick={handleClick}>
          {!dark ? <HiOutlineMoon size={20} className='hover:fill-current'/> : <HiOutlineSun size={20} className='hover:fill-current'/>}
        </div>
      </div>

      {/* Mobile */}
      <div className='lg:hidden fixed bottom-0 pb-8 right-[8%] sm:right-[20%]' onClick={() => {toggleDarkMode(darkMode)}} >
        <div className='px-2 rounded-lg text-light-text dark:text-dark-text' onClick={handleClick}>
          {!dark ? <HiOutlineMoon size={20} className='hover:fill-current'/> : <HiOutlineSun size={20} className='hover:fill-current'/>}
        </div>
      </div>

    </div>
  )
}

export default DarkMode