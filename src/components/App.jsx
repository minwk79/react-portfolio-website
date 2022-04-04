import React from 'react';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Project from './Project';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';
import Social from './Social';

function App() {
  return (
    <div className='bg-background'>
      <NavBar />
      <Social />
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      {/* <Footer /> */}
    
    </div>
  )
}

export default App;