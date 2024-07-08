import React, { useContext, useState } from 'react'
import { NavLink, redirect } from 'react-router-dom'
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext'
import axios from 'axios'

const CourseCard = (props) => {
            const [expert,setexpert ] = useState('')
            const [industryPartners] =useContext(IndustryPartnersContext) 
            const fetchdata = async ()=>{
                const res = await axios.get(`http://localhost:8080/api/industry-partners/${props.course.industryPartners[0]}`)
                setexpert(res.data.name)
            }
            fetchdata();
    

        return (
    <div>
        <NavLink to={props.course._id} >
            <div className="w-[300px] cursor-pointer bg-white h-[400px] rounded-xl overflow-hidden shadow-xl m-10">

                <div ><img className="rounded-md m-auto mt-3 w-[90%] h-40 " src={props.course.imageUrls[0]} alt="Your Image" /></div> 
                <div className="px-6 py-4 ">
                    <div className='flex items-center'>
                        <img src={props.course.logo} className='h-[20px] mr-1'></img>
                        <h1>{props.course.organization}</h1>
                    </div>
                    
                        <div className="font-bold text-[16px] mb-2 ">{props.course.name}</div>
                
                <p className="text-gray-700 mb-2 ">{expert}</p>
                <p className="text-gray-600 text-[14px]  ">{props.course.description}</p>
                
            </div>
            </div>
        </NavLink>
    </div>
  )
}

export default CourseCard
