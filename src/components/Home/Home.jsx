import React from 'react'
import PreEvents from './PreEvents'
import Events from './Events'
import Aboutus from './AboutUs'
import Hero from './Hero'
import BackgroundGradient from "./BackgroundGradient"






function Home() {
  return (
    <>
      <main className="relative overflow-x-hidden">
      <BackgroundGradient />
      <div className="relative z-10">
        <Hero/>
        <Aboutus />
        <Events />
        <PreEvents/>
      </div>
    </main>
    
    </>
  )
}

export default Home