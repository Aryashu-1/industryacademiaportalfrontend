import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
const ConsultancyProjectCard = ( props) => {

  return (
    <div>
        <div className='bg-white m-3 w-[350px] pb-6 cursor-pointer transform hover:scale-[103%] duration-300 ' >
            <div className='flex'>
                <img className=' mx-auto mt-6' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYNFPG1V8Mm235e5DDAwJdPVYPZH9TyeZVhQ&s'></img>
            </div>
            <div>
                <a  href={props.project.projectUrl} target='_blank'><div className='text-center mt-3 '><h1 className='font-semibold text-[18px] text-[#82001a] hover:underline'>{props.project.projectName}</h1></div></a>
                <div className='text-end mr-9 mt-3 '><h1 className='font-semibold text-[18px]'>- {props.project.client}</h1></div>              
                <div className='m-3 ml-6'><h1 className=' text-[16px]'>{props.project.description}</h1></div>
            </div>
        
        </div>
    </div>
  )
}

export default ConsultancyProjectCard