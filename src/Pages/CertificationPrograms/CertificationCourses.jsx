import React, { useEffect, useState } from 'react'
import CourseCard from '../../Components/CourseCard/CourseCard';
import SearchBar from '../../Components/SearchBar/Searchbar';
import axios from 'axios';
const CertificationCourses = () => {
    const [certificationCoursesData, setcertificationCoursesData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("http://localhost:8080/api/industry-certification-courses");
            setcertificationCoursesData(res.data);

          } catch (error) {
            console.error('Error fetching internships data:', error);
          }
        };
    
        fetchData();
      }, []);
     



return (
<div>

        <div className=' p-9 bg-gray-100' >
        
        <h1  className='text-zoop text-[20px]  mt-6 font-semibold'>All Courses</h1>
        <div className='flex flex-wrap'>
        {
                certificationCoursesData.map((course,index)=>(
                    <CourseCard course={course} key={index}/>
                ))
            }
        </div>
            
    </div>
</div>
)
}
export default CertificationCourses