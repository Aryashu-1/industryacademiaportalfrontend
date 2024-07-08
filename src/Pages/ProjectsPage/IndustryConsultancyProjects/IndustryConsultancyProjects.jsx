import React, { useEffect, useState } from 'react'
import CollaboratoryProjectCard from '../../../Components/CollaboratoryProjectCard/CollaboratoryProjectCard';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const IndustryConsultancyProjects = () => {
    const [collaboratedProjectsData, setcollaboratedProjectsData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("http://localhost:8080/api/projects");
            setcollaboratedProjectsData(res.data);
  
          } catch (error) {
            console.error('Error fetching internships data:', error);
          }
        };
    
        fetchData();
      }, []);
      console.log(collaboratedProjectsData)
   
    
    const collaboratedProjects = [
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
      
        <div className=' mt-1 mb-2' >
        <div className='flex text-center items-center justify-center w-full'><h1 className='text-navy-blue font-semibold text-[22px] pb-4'>Industry Collabarated Projects</h1></div>
        <div className=' w-full items-center'>

            <div className=' p-3 w-[90%] bg-gray-100 mx-auto' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

                <div className='flex flex-wrap w-[1200px]'>
                    {
                        collaboratedProjectsData.map((project,index)=>(
                            <CollaboratoryProjectCard project={project} key={index}/>

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