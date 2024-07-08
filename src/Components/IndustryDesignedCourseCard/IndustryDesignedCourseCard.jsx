import React, { useContext, useEffect, useState } from 'react'
import Ipcard from '../Ipcard/Ipcard'
import Fpcard from '../Fpcard/Fpcard'
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext'
import { FacultyContext } from '../../Contexts/FacultyContext'

const IndustryDesignedCourseCard = (props) => {
    const [expanded,setExpanded] = useState(false)
    const [ip,setip]= useState([])
    const [fp,setfp]= useState([])
    const [industryPartners,setIndustryPartners] = useContext(IndustryPartnersContext)
    const [faculty,setFaculty] = useContext(FacultyContext)
    console.log(props.course.industryPartnerIds)
    useEffect(() => {
        if (props.course.industryPartnerIds) {
            const matchedIndustryPartners = props.course.industryPartnerIds.map(ipd => 
                industryPartners.find(inp => inp._id == ipd)
            ).filter(partner => partner !== undefined); // Filter out undefined values
            setip(matchedIndustryPartners);
        }
    }, [props.course, industryPartners]);
    
    
    useEffect(() => {
        if (props.course.facultyPartnerIds) {
            const matchedFacultyPartners = props.course.facultyPartnerIds.map(ipd => 
                faculty.find(inp => inp._id === ipd)
            ).filter(faculty => faculty !== undefined); // Filter out undefined values
            setfp(matchedFacultyPartners);
        }
    }, [props.course, faculty]);
    function expansion(){
        setExpanded(!expanded)
    }
    console.log(ip)
    console.log(fp)
    console.log(faculty)
    console.log(industryPartners)
  return (
    <div className='p-8 bg-white rounded-lg m-6 shadow-xl '>
        <h1 className='text-[22px] my-6 font-semibold cursor-pointer hover:underline' onClick={expansion}>{props.course.name}</h1>
        <h1 className='text-[22px] mb-3 text-[#82001a]'>{props.course.description}</h1>
        {
            expanded && <div>
                <div className='flex h-[200px] '>
            <div className='w-[70%] h-[200px] mr-2'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='w-[30%] '>
                <img src="https://vnrvjiet.ac.in/assets/images/CSE_Department_Inner.png.png" alt="" />
            </div>
        </div>
        <div className='flex h-[200px] mt-14 '>
        <div className='w-[30%] mr-6 '>
                <img src="https://vnrvjiet.ac.in/assets/images/CSE_Department_Inner.png.png" alt="" />
            </div>
            <div className='w-[70%] h-[200px]'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
           
        </div>
        <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Industry Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                    {
                        ip.map((i,index)=>(
                            <Ipcard  key={index} data={i}/>   
                        ))
                    }
                     
                </div>
                <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Faculty Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                    {
                        fp.map((f,index)=>(
                            <Fpcard data={f} key={index}/>
                        ))
                    }
                    
                </div>
            </div>
        }
        
    </div>
  )
}
// https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook
export default IndustryDesignedCourseCard