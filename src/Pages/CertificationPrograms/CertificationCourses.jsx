import React from 'react'
import CourseCard from '../../Components/CourseCard/CourseCard';
import SearchBar from '../../Components/SearchBar/Searchbar';

const CertificationCourses = () => {
  const certificationCourses = [
    {
        url: "https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=444",
        courseName: "Advanced Web Development",
        expert: "John Doe",
        organization: "ABC Corp",
        description: "Detailed insights into modern web technologies.",
        logo:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
    },
    {
        url: "https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=444",
        courseName: "Data Science Fundamentals",
        expert: "Jane Smith",
        organization: "XYZ Ltd",
        description: "Practical applications of data analysis and visualization.",
        logo:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
    },
    {
        url: "https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=444",
        courseName: "Digital Marketing Strategies",
        expert: "Michael Johnson",
        organization: "DEF Tech",
        description: "In-depth look at digital marketing tools and strategies.",
        logo:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
    },
    {
        url: "https://cdn.shopaccino.com/igmguru/products/machine-learning-training-igmguru_1499895199_l.jpg?v=444",
        courseName: "Cybersecurity Essentials",
        expert: "Emily Davis",
        organization: "GHI Solutions",
        description: "Key concepts in cybersecurity and network protection.",
        logo:"https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
    },

];




return (
<div>
    <SearchBar data = {certificationCourses}/>
        <div className=' p-9 bg-gray-100' >
        
        <h1  className='text-zoop text-[20px]  mt-6 font-semibold'>All Courses</h1>
        <div className='flex flex-wrap'>
        {
                certificationCourses.map((course,index)=>(
                    <CourseCard course={course} key={index}/>
                ))
            }
        </div>
            
    </div>
</div>
)
}
export default CertificationCourses