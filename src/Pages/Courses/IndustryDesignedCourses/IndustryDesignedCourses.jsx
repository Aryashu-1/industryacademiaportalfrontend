import React from 'react'
import IndustryDesignedCourseCard from '../../../Components/IndustryDesignedCourseCard/IndustryDesignedCourseCard';

const IndustryDesignedCourses = () => {
    const industryDesignedCourses = [
        {
            courseName: "Advanced Web Development",
            industryPartner: "ABC Corp",
            description: "Covers modern web technologies including React and Node.js."
        },
        {
            courseName: "Data Science Fundamentals",
            industryPartner: "XYZ Ltd",
            description: "Introduction to data analysis using Python and R."
        },
        {
            courseName: "Digital Marketing Strategies",
            industryPartner: "DEF Tech",
            description: "Comprehensive course on SEO, SEM, and social media marketing."
        },
        {
            courseName: "Cybersecurity Essentials",
            industryPartner: "GHI Solutions",
            description: "Basics of cybersecurity including network security and cryptography."
        },
        {
            courseName: "Financial Analysis and Modeling",
            industryPartner: "JKL Innovations",
            description: "Techniques for financial modeling and risk analysis."
        },
     
    ];
    
  return (
    <div className='' >
        <div className='text-center'>
            <h1 className='text-[22px] font-semibold text-[#82001a]'>Courses designed by Industry</h1>
        </div>
        
        {
            industryDesignedCourses.map((course,index)=>(
                <IndustryDesignedCourseCard course={course} key={index}/>
            ))
        }
        
    </div>
  )
}

export default IndustryDesignedCourses