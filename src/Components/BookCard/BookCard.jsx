import React from 'react'

const BookCard = (props) => {
    return (
<div>
<div className="w-[300px] rounded overflow-hidden shadow-lg m-10">
         <div ><img className="w-full object-contain h-40 " src={props.data.img} alt="Your Image" /></div> 
          <div className="px-6 py-4 ">
            <div className="font-bold text-xl mb-2 ">{props.data.Title}</div>
            
            <p className="text-gray-700 truncate ">{props.data.description}</p>
            
            <a className='text-center underline decoration-black cursor-pointer'>Read More...</a>
          </div>
        </div>
</div>

      );
}

export default BookCard