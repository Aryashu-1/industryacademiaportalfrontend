import React, { useState } from 'react'
import Ipcard from '../Ipcard/Ipcard'
import Fpcard from '../Fpcard/Fpcard'

const StartupCard = (props) => {
  const [expanded,setTogglexpanded] = useState(false)
  function expansion(){
      setTogglexpanded(!expanded)
  }
  return (
    <div>
        <div className='cursor-pointer mx-[100px] my-4 rounded-lg shadow-xl bg-white p-4 transform hover:scale-[103%] transition-transform duration-600'>
            <h1  className='text-[#82001a] text-[22px] font-semibold mb-2'>{props.startup.name}</h1>

            <p  className='mb-3'> {props.startup.description}</p>
            <h1><span className='font-semibold'>Founder : </span>{props.startup.founder.name}</h1>
            <h1><span className='font-semibold'>Contact : </span>{props.startup.founder.phone}</h1>
            <h1><span className='font-semibold'>E-mail : </span>{props.startup.founder.email}</h1>
            <div className='justify-end flex '  onClick={expansion}>
              <h1 className='cursor-pointer underline'> Know More...</h1>
            </div>

        {
            expanded && <div>
  
        <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Industry Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                    <Ipcard/>       
                </div>
                <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Faculty Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                    <Fpcard/>
                </div>
                <div className='justify-end flex '  onClick={expansion}>
              <h1 className='cursor-pointer underline'> View Less...</h1>
            </div>
            </div>
        }
        </div>
    </div>
  )
}

export default StartupCard
