import React from 'react'
import Events from '../components/Home/Events'
import PreEvents from "../components/Home/PreEvents"
import Footer from './Footer'


function Detailevent() {
  return (
    <>
      <div className='min-h-[100vh] relative bg-black z-10'>
        <h2 className="text-7xl font-bold mt-16 mb-16 tracking-wider text-center capitalize "
          style={{ WebkitTextStroke: "2px white", color: "transparent" }}
        > Ju verse  events</h2>
        <Events />
        <PreEvents />


      </div>
      <div className="z-0 min-h-[50vh] mt-[100px] bg-[#161616]">
        <Footer />
      </div>
    </>



  )
}

export default Detailevent