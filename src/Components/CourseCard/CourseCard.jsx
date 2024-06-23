import React from 'react'

const CourseCard = (props) => {
    
        return (
    <div>
        <div>
            <div className="w-[300px] cursor-pointer bg-white h-[350px] rounded-xl overflow-hidden shadow-xl m-10">

                <div ><img className="rounded-md m-auto mt-3 w-[90%] h-40 " src={props.course.url} alt="Your Image" /></div> 
                <div className="px-6 py-4 ">
                    <div className='flex items-center'>
                        <img src={props.course.logo} className='h-[20px] mr-1'></img>
                        <h1>{props.course.organization}</h1>
                    </div>
                    
                    <div className="font-bold text-[16px] mb-2 ">{props.course.courseName}</div>
                
                <p className="text-gray-700 mb-2 ">{props.course.expert}</p>
                <p className="text-gray-600 text-[14px]  ">{props.course.description}</p>
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard
