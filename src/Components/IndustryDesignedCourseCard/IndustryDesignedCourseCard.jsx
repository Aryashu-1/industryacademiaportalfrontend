import React from 'react'

const IndustryDesignedCourseCard = (props) => {
  return (
    <div className='p-8 bg-white rounded-lg my-2'>
        <h1 className='text-[22px] my-6 font-semibold'>{props.course.courseName}</h1>
        <h1 className='text-[22px] mb-3 text-[#82001a]'>{props.course.industryPartner}</h1>
        <div className='flex h-[200px] '>
            <div className='w-[70%] h-[200px] mr-2'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='w-[30%] '>
                <img src="https://vnrvjiet.ac.in/assets/images/CSE_Department_Inner.png.png" alt="" />
            </div>
        </div>
        <div className='flex h-[200px] mt-14 '>
        <div className='w-[30%] mr-6 '>
                <img src="https://vnrvjiet.ac.in/assets/images/CSE_Department_Inner.png.png" alt="" />
            </div>
            <div className='w-[70%] h-[200px]'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
           
        </div>
    </div>
  )
}
// https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook
export default IndustryDesignedCourseCard