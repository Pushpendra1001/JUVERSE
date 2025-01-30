import React from 'react'
import Events from '../components/Home/Events'
import PreEvents from "../components/Home/PreEvents"


function Detailevent() {
  return (
    <div className='min-h-[100vh]'>
      <h2 className="text-7xl font-bold mt-16 tracking-wider text-center capitalize "
        style={{ WebkitTextStroke: "2px white", color: "transparent" }}
      > Ju verse  events</h2>
      <Events/>
      <PreEvents/>
      
    </div>



  )
}

export default Detailevent