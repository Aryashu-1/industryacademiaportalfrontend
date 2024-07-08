import React from 'react'
import { NavLink } from 'react-router-dom'

const Stcard = (props) => {
  return (
    <div>
        <div className='bg-gray-100 rounded-xl mx-4 shadow-2xl w-[250px]'>
            <div className='m-3 p-2'>
                <img className='h-[180px] w-[200px]  bg-gray' src={props.data.imageUrls[0]} alt="" />
            </div>
            <div className='p-2'>
                <h1 className='m-1'>{props.data.name}</h1>
                <h1 className='m-1'>{props.data.rollno}</h1>
                <h1 className='m-1'></h1>
              

                <div className='flex my-2 '>
                                          <a ><img className='h-6 m-2 cursor-pointer' src="https://th.bing.com/th/id/OIP.t5xJJKNn9gCbzLc2q2rBBwHaHZ?w=184&h
                        =183&c=7&r=0&o=5&dpr=1.3&pid=1.7"/></a>  
                       <a> <img className='h-6 m-2' src="https://th.bing.com/th?id=OIP.d9YMY3jpZr_ZxliOr3xMYQHaHa&w=250
                        &h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2%22width=%2
                        225px"/></a>
                        <a><img className='h-6 m-2' src="https://th.bing.com/th?id=OIP.JCI8klaaA1w4LCtljpeJoAHaHa&w=250&h=
                        250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2%22width=%2230p
                        x"/></a>
                                            
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Stcard