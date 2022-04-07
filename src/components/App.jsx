import React, {useState} from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';
import Social from './Social';
import DarkMode from './DarkMode';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (darkMode) => {
    setDarkMode(!darkMode);
  };


  return (
    <div className={!darkMode ? '' : 'dark'}>
      {/* TODO: Attach a toggle button for dark mode.  */}
      <div className='bg-light-bg dark:bg-dark-bg'>
        <NavBar />
        <div className='flex flex-col'>
          <Social />
          <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
        </div>
        <Header />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    
    </div>
  )
}

export default App;