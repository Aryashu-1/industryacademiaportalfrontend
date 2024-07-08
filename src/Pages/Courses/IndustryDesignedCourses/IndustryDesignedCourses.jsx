import React, { useEffect, useState } from 'react'
import IndustryDesignedCourseCard from '../../../Components/IndustryDesignedCourseCard/IndustryDesignedCourseCard';
import axios from 'axios';
const IndustryDesignedCourses = () => {
    const [industryDesignedCoursesData, setindustryDesignedCoursesData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("http://localhost:8080/api/industry-designed-courses");
            setindustryDesignedCoursesData(res.data);

          } catch (error) {
            console.error('Error fetching internships data:', error);
          }
        };
    
        fetchData();
      }, []);
      console.log(industryDesignedCoursesData)
   
  return (
    <div className='' >
        <div className='text-center'>
            <h1 className='text-[22px] font-semibold text-[#82001a]'>Courses designed by Industry</h1>
        </div>
        
        {
            industryDesignedCoursesData.map((course,index)=>(
                <IndustryDesignedCourseCard course={course} key={index}/>
            ))
        }
        
    </div>
  )
}

export default IndustryDesignedCourses