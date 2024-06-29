import React from 'react'
import InternshipCard from '../../Components/InternshipCard/InternshipCard'
import Ipcard from '../../Components/Ipcard/Ipcard'
import Stcard from '../../Components/Stcard/Stcard'
import Fpcard from '../../Components/Fpcard/Fpcard'

const ResearchPublicationPage = () => {
  return (
    <div className=''>
        <div className=''>
            <div className='bg-white   my-16 m-9'>
                <h1 className='text-[22px] font-semibold'>Title</h1>
            </div>
            <div className='px-6'>
            <div className='flex justify-evenly'>
            <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Published on : </span> Date</h1>
                <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Publication Type :  </span>type</h1>
                <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Published by : </span></h1>
            </div>
            <div className='ml-9'>
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
            <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Abstract : </span></h1>
                
                <p className='m-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              
              
          <button className="bg-amber ml-9 text-navy-blue px-4 py-2 mt-4 rounded flex">
            <img className='h-[20px] mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRI7zr-SI2GlQuKVd8z6DBDnr9msl9Q3C60Q&s' alt=''/>
            Download PDF</button>
        

            </div>
        </div>
    </div>
  )
}

export default ResearchPublicationPage