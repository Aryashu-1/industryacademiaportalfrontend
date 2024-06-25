import React from 'react'

const StartupCard = (props) => {
  return (
    <div>
        <div className='cursor-pointer mx-[100px] my-4 rounded-lg shadow-xl bg-white p-4 transform hover:scale-[103%] transition-transform duration-600'>
            <h1  className='text-[#82001a] text-[22px] font-semibold mb-2'>{props.startup.name}</h1>

            <p  className='mb-3'> {props.startup.description}</p>
            <h1><span className='font-semibold'>Founder : </span>{props.startup.founder.name}</h1>
            <h1><span className='font-semibold'>Contact : </span>{props.startup.founder.phone}</h1>
            <h1><span className='font-semibold'>E-mail : </span>{props.startup.founder.email}</h1>
            
        </div>

    </div>
  )
}

export default StartupCard
