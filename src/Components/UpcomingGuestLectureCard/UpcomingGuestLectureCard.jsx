import React from 'react'

const UpcomingGuestLectureCard = (props) => {
  return (
    <div>
      <div className="w-[300px] rounded overflow-hidden shadow-lg m-10">
              <div ><img className="w-full object-contain h-40 " src="https://res.cloudinary.com/hamstech/images/f_auto,q_auto/v1617976380/Hamstech%20App/Hamstech-guest-lecture-1/Hamstech-guest-lecture-1.jpg?_i=AA" alt="Your Image" /></div> 
                <div className="px-6 py-4 ">
                  <div className="font-bold text-xl mb-2 ">{props.lecture.eventName}</div>
                  <p className="text-gray-700 truncate ">{props.lecture.date}</p>
                  <p className="text-gray-700 truncate ">{props.lecture.venue}</p>
                  
                  <p className="text-gray-700 truncate ">{props.lecture.description}</p>
                  
                  <a href={props.lecture.eventUrl} className='text-center underline decoration-black cursor-pointer'>Know More...</a>
                </div>
              </div>
</div>
  )
}

export default UpcomingGuestLectureCard