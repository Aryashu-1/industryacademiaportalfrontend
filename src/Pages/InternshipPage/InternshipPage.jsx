import React, { useContext, useEffect, useState } from 'react'
import InternshipCard from '../../Components/InternshipCard/InternshipCard'
import Ipcard from '../../Components/Ipcard/Ipcard'
import Stcard from '../../Components/Stcard/Stcard'
import Fpcard from '../../Components/Fpcard/Fpcard'
import axios from   'axios'
import { useAsyncError, useParams } from 'react-router-dom'
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext'
import { StudentsContext } from '../../Contexts/StudentsContext'
import { FacultyContext } from '../../Contexts/FacultyContext'

const InternshipPage = () => {
  const { id } = useParams();
    const [industryPartners] = useContext(IndustryPartnersContext);
    const [students] = useContext(StudentsContext);
    const [faculty] = useContext(FacultyContext);
console.log(faculty)
    const [internshipData, setInternshipData] = useState([]);
    const [ip, setIp] = useState([]);
    const [sp, setSp] = useState([]);
    const [fp, setFp] = useState([]);
console.log(id.courseid)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/internships/${id}`);
                setInternshipData(res.data);
            } catch (error) {
                console.error('Error fetching internships data:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (internshipData.industryPartnerIds) {
            const matchedIndustryPartners = internshipData.industryPartnerIds.map(ipd => 
                industryPartners.find(inp => inp._id == ipd)
            ).filter(partner => partner !== undefined); // Filter out undefined values
            setIp(matchedIndustryPartners);
        }
    }, [internshipData, industryPartners]);

    useEffect(() => {
        if (internshipData.studentIds) {
            const matchedStudentPartners = internshipData.studentIds.map(ipd => 
                students.find(inp => inp._id == ipd)
            ).filter(student => student !== undefined); // Filter out undefined values
            setSp(matchedStudentPartners);
        }
    }, [internshipData, students]);

    useEffect(() => {
        if (internshipData.facultyPartnerIds) {
            const matchedFacultyPartners = internshipData.facultyPartnerIds.map(ipd => 
                faculty.find(inp => inp._id == ipd)
            ).filter(faculty => faculty !== undefined); // Filter out undefined values
            setFp(matchedFacultyPartners);
        }
    }, [internshipData, faculty]);

    console.log(internshipData);
    console.log(ip);
    console.log(sp);
    console.log(fp);

  return (
 

    <div>
        <div>
            <div className='m-6'>
                <h1 className='text-[22px] font-semibold'>{internshipData.companyName}</h1>
            </div>
            <div className='p-6'>
                <p className='m-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Role : </span> {internshipData.role}</h1>
                <p className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Job Description : </span> </p>
                <p className='m-4 ml-9' >{internshipData.jobDescription}</p>
                <p className='m-4 ml-9' >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Comapny  Details : </span></h1>
                <p className='m-4 ml-9' >{internshipData.companyDescription}</p>
                <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Industry Partners : </h1>
                <div  className='m-4 flex flex-row'>
                {ip.map((p,index)=>(
                        
                       
                        <Ipcard key={index}  data={p}/>       
                  

                ))


                }
                  </div>
                <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Faculty Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                  {
                    fp.map((f,index)=>(
                      <Fpcard data = {f} key={index}/>
                    ))
                  }
                    
                </div>
                <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Students : </h1>
                <div className='m-4 flex flex-wrap'>
                  {
                    sp.map((s,index)=>(
                      <Stcard data={s} key={index}/>
                    ))
                  }
                          
                </div>
            </div>
        </div>
    </div>
  )
}

export default InternshipPage