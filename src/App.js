import React from 'react';
import "./app.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';
import Work from './components/work/Work';
import Qualification from './components/qualification/Qualification';

const App = () => {
  return (
    <>
    <Header/>
    <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Work/>
      <Qualification/>
      <Contact/>
    </main>
    </>
  )
}

export default App