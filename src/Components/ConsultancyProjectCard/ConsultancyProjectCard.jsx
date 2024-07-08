import React from 'react'
import { NavLink } from 'react-router-dom'

const ConsultancyProjectCard = (props) => {
  console.log(props.project)
  return (
    <div>
      <NavLink to={`${props.project._id}`}>
        <div className='bg-white m-3 w-[350px] pb-6 cursor-pointer transform hover:scale-[103%] duration-300 ' >
            <div className='flex'>
                <img className=' mx-auto mt-6' src={props.project.imageUrls}></img>
            </div>
            <div>
                <a  href={props.project.projectUrl} target='_blank'><div className='text-center mt-3 '><h1 className='font-semibold text-[18px] text-[#82001a] hover:underline'>{props.project.name}</h1></div></a>          
                <div className='m-3 ml-6'><h1 className=' text-[16px]'>{props.project.description}</h1></div>
            </div>
        
        </div>
        </NavLink>
    </div>
  )
}

export default ConsultancyProjectCard