import React, {useState} from 'react'
import RatingScale from './RatingScale'
import Social from './Social';
import {SiTailwindcss, SiJavascript} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';


export default function Footer() {

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);

  const handleSubmit = () => {
    // TODO: when user submits the form. 
    console.log("Submitted with text: ", text);
    console.log("Rating: ", rating);
    
    // After submission, disable this feature (only one time.)
  }
  
  const handleTextChange = (event) => {
    setText(event.target.value);
  }

  const handleSelect = (event) => {
    setRating(+event.target.value);
  }


  return (
    <div className='w-full h-[20px] px-20 py-20 flex flex-col sm:flex-row items-center justify-center bg-background md:justify-between'>
      <div className='mr-12 block'>
        <span className='text-xs sm:text-sm sm:text-center text-primary'>© 2022 Min Woo Kwak. All Rights Reserved.</span>
      </div>
        <div className='flex justify-center gap-4 items-center'> 
          <div className='text-xs sm:text-sm text-secondary'>This portfolio is made by</div>
          <FaReact className='hover:text-secondary'/>
          <SiJavascript className='hover:text-secondary'/>
          <SiTailwindcss className='hover:text-secondary'/>
        </div>
    </div>
  )
}
