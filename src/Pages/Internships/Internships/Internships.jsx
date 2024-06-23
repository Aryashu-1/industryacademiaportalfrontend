import React from 'react'
import InternshipCard from '../../../Components/InternshipCard/InternshipCard';

const Internships = () => {
    const industryInternships = [
        {
            companyName: "ABC Corp",
            duration: "June - August 2023",
            role: "Software Development Intern",
            description: "Worked on developing web applications using JavaScript and React.",
            location: "New York, NY",
            workFromHome: false,
            stipend: "$2000/month",
            url: "https://www.abccorp.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            companyName: "XYZ Ltd",
            duration: "May - July 2023",
            role: "Data Analyst Intern",
            description: "Analyzed large datasets to extract insights using Python and SQL.",
            location: "San Francisco, CA",
            workFromHome: true,
            stipend: "$1800/month",
            url: "https://www.xyzltd.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            companyName: "DEF Tech",
            duration: "June - September 2023",
            role: "Marketing Intern",
            description: "Assisted in digital marketing campaigns and social media management.",
            location: "Chicago, IL",
            workFromHome: true,
            stipend: "$1500/month",
            url: "https://www.deftech.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            companyName: "GHI Solutions",
            duration: "July - September 2023",
            role: "Research Intern",
            description: "Conducted market research and competitor analysis.",
            location: "Austin, TX",
            workFromHome: false,
            stipend: "$1700/month",
            url: "https://www.ghisolutions.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            companyName: "JKL Innovations",
            duration: "May - August 2023",
            role: "Graphic Design Intern",
            description: "Created visual content for online and offline marketing.",
            location: "Seattle, WA",
            workFromHome: true,
            stipend: "$1600/month",
            url: "https://www.jklinnovations.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            companyName: "MNO Enterprises",
            duration: "June - August 2023",
            role: "HR Intern",
            description: "Assisted with recruitment and employee onboarding processes.",
            location: "Los Angeles, CA",
            workFromHome: false,
            stipend: "$1900/month",
            url: "https://www.mnoenterprises.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            companyName: "PQR Systems",
            duration: "July - October 2023",
            role: "Business Analyst Intern",
            description: "Worked on business process improvement and documentation.",
            location: "Boston, MA",
            workFromHome: true,
            stipend: "$2200/month",
            url: "https://www.pqrsystems.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            companyName: "STU Networks",
            duration: "May - July 2023",
            role: "Network Engineer Intern",
            description: "Helped design and implement network infrastructure.",
            location: "Denver, CO",
            workFromHome: false,
            stipend: "$2100/month",
            url: "https://www.stunetworks.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            companyName: "VWX Dynamics",
            duration: "June - September 2023",
            role: "Quality Assurance Intern",
            description: "Tested software applications for bugs and performance issues.",
            location: "Atlanta, GA",
            workFromHome: true,
            stipend: "$2300/month",
            url: "https://www.vwxdynamics.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        },
        {
            companyName: "YZA Group",
            duration: "July - October 2023",
            role: "Financial Analyst Intern",
            description: "Conducted financial analysis and prepared reports.",
            location: "Miami, FL",
            workFromHome: false,
            stipend: "$2400/month",
            url: "https://www.yzagroup.com",
            companyLogo: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
        }
    ];
    

  return (
    <div>
        <div className='text-center items-center'>
            <h1 className='text-[24px] font-semibold'>INTERNSHIPS</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className='flex '>
            <div className='w-[30%]  bg-gray-100 p-2'>
                <div className='h-[400px] m-10 bg-white rounded-lg text-center'>
                    <div className=''>
                        <h1 className='font-semibold'>FILTER</h1>
                    </div>
                    <p>Filter Options</p>
                    
                </div>
            </div>
            
            <div className='w-[70%] bg-gray-100 overflow-auto flex-grow-2 h-screen py-1 transition-opacity duration-500 ease-in-out' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {
                    industryInternships.map((internship,index)=>(
                       <InternshipCard internship={internship} key ={index}/>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Internships