
const DarkMode = ({darkMode, toggleDarkMode}) => {


  return (
    <div className='pointer-events-none'>
      <div className='flex justify-center fixed m-2 right-4' onClick={() => {
        toggleDarkMode(darkMode);
      }} >
        <input className='mr-4'
          type='checkbox' role='switch'/>

        <label className='inline-block'>dark / light</label>
      </div>

    </div>
  )
}

export default DarkMode