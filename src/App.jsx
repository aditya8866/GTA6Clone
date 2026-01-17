import React, {useEffect} from 'react'
import gsap from "gsap"
import {ScrollTrigger} from 'gsap/all'
import Hero from './Sections/Hero';
import Navbar from './Sections/Navbar';
import FirstVideo from './Sections/FirstVideo';
import Lenis from 'lenis'
import Jason from './Sections/Jason';

gsap.registerPlugin(ScrollTrigger);

const App = () => {

  // useEffect(() => {
  //   const lenis = new Lenis();

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);

  //   return () => {
  //     lenis.destroy();
  //   };
  // }, []);

    
     

  return (
    <main>  
        
        <Navbar/>
        <Hero/>
        <FirstVideo/>
        <Jason/>

    </main>
  )
}

export default App