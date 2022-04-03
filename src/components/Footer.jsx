import React, {useState} from 'react'
import RatingScale from './RatingScale'
import Social from './Social';

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
    <div className='container flex py-20 items-center justify-center flex-col' id='footer'>
      <div className='ui fluid card'>
        <RatingScale onSelect={handleSelect}/>
        <div className='ui form'>
          <div className='field'>
            <label>How would you rate this website?</label>
            <textarea rows="2" placeholder="(Optional)" onChange={handleTextChange}></textarea>
            <div className='ui submit button' onClick={handleSubmit}>Submit</div>
            
          </div>
        </div>
      </div>

    </div>
  )
}
