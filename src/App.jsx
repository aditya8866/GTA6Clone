import React from 'react'
import gsap from "gsap"
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
       <p className='text-pink'>asdfasdf</p> 
    </main>
  )
}

export default App