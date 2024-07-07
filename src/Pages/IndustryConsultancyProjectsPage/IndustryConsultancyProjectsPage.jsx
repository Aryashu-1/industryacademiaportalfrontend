import React from 'react'
import InternshipCard from '../../Components/InternshipCard/InternshipCard'
import Ipcard from '../../Components/Ipcard/Ipcard'
import Stcard from '../../Components/Stcard/Stcard'
import Fpcard from '../../Components/Fpcard/Fpcard'

const IndustryConsultancyProjectsPage = () => {
  return (
    <div>
        <div>
            <div className='m-6'>
                <h1 className='text-[22px] font-semibold'>Project Nmae</h1>
            </div>
            <div className='flex justify-center'>
                    <img className='w-[300px] h-[300px] mr-10' src='' alt=''/>
                    <img className='w-[300px] h-[300px] ml-10' src='' alt=''/>
                </div>
            <div className='p-6'>
                <p className='m-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            
                
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

export default IndustryConsultancyProjectsPage



