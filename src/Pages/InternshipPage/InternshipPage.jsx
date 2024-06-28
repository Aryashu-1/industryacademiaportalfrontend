import React from 'react'
import InternshipCard from '../../Components/InternshipCard/InternshipCard'
import Ipcard from '../../Components/Ipcard/Ipcard'
import Stcard from '../../Components/Stcard/Stcard'
import Fpcard from '../../Components/Fpcard/Fpcard'

const InternshipPage = () => {
  return (
    <div>
        <div>
            <div className='m-6'>
                <h1 className='text-[22px] font-semibold'>Internship Nmae</h1>
            </div>
            <div className='p-6'>
                <p className='m-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Role : </span> Name</h1>
                <p className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Job Description : </span> </p>
                <p className='m-4 ml-9' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Comapny  Name : </span>Name</h1>
                <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Industry Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                    <Ipcard/>       
                </div>
                <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Faculty Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                    <Fpcard/>
                </div>
                <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Students : </h1>
                <div className='m-4 flex flex-wrap'>
                    <Stcard/>       
                </div>
            </div>
        </div>
    </div>
  )
}

export default InternshipPage