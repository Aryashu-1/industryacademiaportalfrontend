import React, { useEffect, useState } from 'react'
import UpcomingIndustryVisitCard from '../../Components/UpcomingIndustryVisitCard/UpcomingIndustryVisitCard';
import IndustryVisitCard from '../../Components/IndustryVisitCard/IndustryVisitCard';
import axios from 'axios';

const IndustrialVisits = () => {
    const [industryvisitsData, setindustryvisitsData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("http://localhost:8080/api/visits");
            setindustryvisitsData(res.data);
  
          } catch (error) {
            console.error('Error fetching internships data:', error);
          }
        };
    
        fetchData();
      }, []);
      console.log(industryvisitsData)
      
    const upcomingVisits = [
        {
            companyName: "ABC Corp",
            date: "January 15, 2024",
            description: "Visit to the web development department.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6"
        },
        {
            companyName: "XYZ Ltd",
            date: "February 10, 2024",
            description: "Tour of the data analysis center.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6"
        },
        {
            companyName: "DEF Tech",
            date: "March 5, 2024",
            description: "Visit to the marketing division.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6"
        }
    ];
    
    const industrialVisits = [
        {
            companyName: "GHI Solutions",
            date: "April 12, 2024",
            description: "Exploration of the cybersecurity lab.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            images: [
                "https://bl-i.thgim.com/public/migration_catalog/article18274530.ece/alternates/FREE_1200/Coke",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYEpcRnVR-2L2pUc0EQ7mCz3X93poMmHF6A&s"
            ]
        },
        {
            companyName: "JKL Innovations",
            date: "May 18, 2024",
            description: "Visit to the financial analysis department.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            images: [
                "https://bl-i.thgim.com/public/migration_catalog/article18274530.ece/alternates/FREE_1200/Coke",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYEpcRnVR-2L2pUc0EQ7mCz3X93poMmHF6A&s"
            ]
        },
        {
            companyName: "MNO Enterprises",
            date: "June 22, 2024",
            description: "Tour of the network design and implementation unit.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            images: [
                "https://bl-i.thgim.com/public/migration_catalog/article18274530.ece/alternates/FREE_1200/Coke",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYEpcRnVR-2L2pUc0EQ7mCz3X93poMmHF6A&s"
            ]
        },
        {
            companyName: "PQR Systems",
            date: "July 14, 2024",
            description: "Visit to the business process management office.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            images: [
                "https://bl-i.thgim.com/public/migration_catalog/article18274530.ece/alternates/FREE_1200/Coke",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYEpcRnVR-2L2pUc0EQ7mCz3X93poMmHF6A&s"
            ]
        },
        {
            companyName: "STU Networks",
            date: "August 19, 2024",
            description: "Visit to the software quality assurance lab.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            images: [
                "https://bl-i.thgim.com/public/migration_catalog/article18274530.ece/alternates/FREE_1200/Coke",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYEpcRnVR-2L2pUc0EQ7mCz3X93poMmHF6A&s"
            ]
        },
        {
            companyName: "VWX Dynamics",
            date: "September 23, 2024",
            description: "Visit to the machine learning research center.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            images: [
                "https://bl-i.thgim.com/public/migration_catalog/article18274530.ece/alternates/FREE_1200/Coke",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYEpcRnVR-2L2pUc0EQ7mCz3X93poMmHF6A&s"
            ]
        },
        {
            companyName: "YZA Group",
            date: "October 17, 2024",
            description: "Tour of the project management office.",
            companyLocation: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            images: [
                "https://bl-i.thgim.com/public/migration_catalog/article18274530.ece/alternates/FREE_1200/Coke",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYEpcRnVR-2L2pUc0EQ7mCz3X93poMmHF6A&s"
            ]
        }
    ];
    
  return (
    <div>
        <div className='flex justify-center'>
            <h1 className='text-[24px] font-semibold text-[#82001a]'>Indutrial Visits</h1>
        </div>
        <div className='bg-gray-100 p-4'>
        <h1  className='text-[#82001a] text-[20px] font-semibold'>Upcoming Industrial Visits</h1>
            <div className='flex overflow-auto' style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {
                    upcomingVisits.map((company,index)=>(
                        <UpcomingIndustryVisitCard company={company} key={index}/>
                    ))
                }
            </div>
            <h1  className='text-[#82001a] text-[20px] font-semibold'>All Industry Visits</h1>
            <div className='bg-gray-100 p-4'>
                {
                    industrialVisits.map((industry,index)=>(
                        <IndustryVisitCard industry ={industry} key={index}/>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default IndustrialVisits