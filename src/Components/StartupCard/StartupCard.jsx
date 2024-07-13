import React, { useContext, useState } from 'react'
import Ipcard from '../Ipcard/Ipcard'
import Fpcard from '../Fpcard/Fpcard'
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext'
import { StudentsContext } from '../../Contexts/StudentsContext'
import { FacultyContext } from '../../Contexts/FacultyContext'
import Stcard from '../Stcard/Stcard'
import Icard from '../Icard/Icard'
import { IndustryContext } from '../../Contexts/IndustryContext'

const StartupCard = (props) => {
  const [expanded,setTogglexpanded] = useState(false)
  const [industries] = useContext(IndustryContext);
      const [students] = useContext(StudentsContext);
      const [faculty] = useContext(FacultyContext);
console.log(industries)
      const [ip, setIp] = useState([]);
      const [sp, setSp] = useState([]);
      const [fp, setFp] = useState([]);
  function expansion(internshipData){
      setTogglexpanded(!expanded)

  
          if (internshipData.industryIds) {
              const matchedIndustryPartners = internshipData.industryIds.map(ipd => 
                  industries.find(inp => inp._id == ipd)
              ).filter(partner => partner !== undefined); // Filter out undefined values
              setIp(matchedIndustryPartners);
            }
  

          if (internshipData.studentIds) {
              const matchedStudentPartners = internshipData.studentIds.map(ipd => 
                  students.find(inp => inp._id == ipd)
              ).filter(student => student !== undefined); // Filter out undefined values
              setSp(matchedStudentPartners);
          }


          if (internshipData.facultyIds) {
              const matchedFacultyPartners = internshipData.facultyIds.map(ipd => 
                  faculty.find(inp => inp._id == ipd)
              ).filter(faculty => faculty !== undefined); // Filter out undefined values
              setFp(matchedFacultyPartners);
          }

  
     
  }

  console.log(ip);
  console.log(sp);
  console.log(fp);

  return (
    <div>
        <div className='cursor-pointer mx-[100px] my-4 rounded-lg shadow-xl bg-white p-4 transform hover:scale-[103%] transition-transform duration-600'>
            <h1  className='text-[#82001a] text-[22px] font-semibold mb-2'>{props.startup.name}</h1>

            <p  className='mb-3'> {props.startup.description}</p>
            <h1><span className='font-semibold'>Founder : </span>props.startup.founder.name</h1>
            <h1><span className='font-semibold'>Contact : </span>props.startup.founder.phone</h1>
            <h1><span className='font-semibold'>E-mail : </span>props.startup.founder.email</h1>
            <div className='justify-end flex '  onClick={()=>expansion(props.startup)}>
              <h1 className='cursor-pointer underline'> Know More...</h1>
            </div>

        {
            expanded && <div>
              <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Student Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                  {
                    sp.map((f,index)=>(
                      <Stcard data={f} key={index}/>
                    ))
                  }
                   
                </div>
  
        <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Industry Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                  {
                    ip.map((i,index)=>(
                      <Icard data={i}/> 
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
                <div className='justify-end flex '  onClick={expansion}>
              <h1 className='cursor-pointer underline'> View Less...</h1>
            </div>
            </div>
        }
        </div>
    </div>
  )
}

export default StartupCard
