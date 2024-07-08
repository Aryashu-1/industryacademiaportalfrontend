import React from 'react'

const Ipcard = (props) => {
  return (
    <div>
        <div className='bg-gray-100 rounded-xl mx-4 shadow-2xl w-[300px]'>
            <div className='m-3 p-2n flex justify-center pt-4'>
                <img className='h-[180px] w-[200px]  bg-gray' src={props.data.imageUrls[0]} alt="" />
            </div>
            <div className='p-2'>
                <h1 className='m-1'>{props.data.name}</h1>
                <h1 className='m-1'>{props.data.details}</h1>
                <h1 className='m-1 font-semibold'>email:</h1>
                <h1 className='m-1'>{props.data.mail}</h1>
        
                <div className='flex my-2 '>
                                            <img className='h-6 m-2' src="https://th.bing.com/th/id/OIP.t5xJJKNn9gCbzLc2q2rBBwHaHZ?w=184&h
                        =183&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
                        <img className='h-6 m-2' src="https://th.bing.com/th?id=OIP.d9YMY3jpZr_ZxliOr3xMYQHaHa&w=250
                        &h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2%22width=%2
                        225px"/>
                        <img className='h-6 m-2' src="https://th.bing.com/th?id=OIP.JCI8klaaA1w4LCtljpeJoAHaHa&w=250&h=
                        250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2%22width=%2230p
                        x"/>
                                            
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default Ipcard