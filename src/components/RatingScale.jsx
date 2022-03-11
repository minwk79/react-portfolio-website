
function RatingScale({onSelect}) {

  const ratings = ['1','2','3','4','5','6','7','8','9','10'];

  const ratingOptions = ratings.map((rating) => {
      return ( 
      <li className='circular ui icon button' key={rating}>
         {rating}
          <input 
            type='radio' 
            id={`num${rating}`} 
            name={rating}
            value={rating} 
            onChange={onSelect} 
            />
            
      </li>
      )
  });

  return (
    <ul className='rating-scale'>
      {ratingOptions}
    </ul>
  )
}

export default RatingScale