import React from 'react'
import ConsultancyProjectCard from '../../../Components/ConsultancyProjectCard/ConsultancyProjectCard';

const IndustryConsultancyProjects = () => {
 
    const consultancyProjects = [
        {
            projectName: "Financial Risk Analysis",
            client: "JKL Innovations",
            description: "Analyzed financial data to assess risk.",
            projectUrl: "https://meet.google.com/"
        },
        {
            projectName: "Network Infrastructure Design",
            client: "MNO Enterprises",
            description: "Designed a new network infrastructure for the company.",
            projectUrl: "https://meet.google.com/"
        },
        {
            projectName: "Business Process Improvement",
            client: "PQR Systems",
            description: "Identified and implemented improvements in business processes.",
            projectUrl: "https://meet.google.com/"
        },
        {
            projectName: "Software Quality Testing",
            client: "STU Networks",
            description: "Performed quality testing on new software products.",
            projectUrl: "https://meet.google.com/"
        },
        {
            projectName: "Machine Learning Model Development",
            client: "VWX Dynamics",
            description: "Developed machine learning models for data analysis.",
            projectUrl: "https://meet.google.com/"
        },
        {
            projectName: "Project Management Consulting",
            client: "YZA Group",
            description: "Provided project management consulting services.",
            projectUrl: "https://meet.google.com/"
        }
    ];
    
  return (
    <div>
        <div className=' mt-1 mb-2'>
        <div className='flex text-center items-center justify-center w-full'><h1 className='text-[#82001a] font-semibold text-[22px] pb-4'>Industry Consultancy Projects</h1></div>
        <div className=' w-full items-center'>
      
            <div className=' p-3 w-[90%] bg-gray-100 mx-auto' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <h1 className='text-[#82001a] font-semibold text-left  ml-4 text-[22px] p-4'>All Projects</h1>
                <div className='flex flex-wrap w-[1200px]'>
                    {
                        consultancyProjects.map((project,index)=>(
                            <ConsultancyProjectCard project={project} key={index}/>

                        ))
                    }
                </div>
                
                
            </div>
        </div>
    </div>
    </div>
  )
}

export default IndustryConsultancyProjects