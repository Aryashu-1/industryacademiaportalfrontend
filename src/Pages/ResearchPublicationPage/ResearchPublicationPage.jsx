import React, { useContext, useEffect, useState } from 'react'
import InternshipCard from '../../Components/InternshipCard/InternshipCard'
import Ipcard from '../../Components/Ipcard/Ipcard'
import Stcard from '../../Components/Stcard/Stcard'
import Fpcard from '../../Components/Fpcard/Fpcard'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext'
import { StudentsContext } from '../../Contexts/StudentsContext'
import { FacultyContext } from '../../Contexts/FacultyContext'

const ResearchPublicationPage = () => {
    const { id } = useParams();
    const [industryPartners] = useContext(IndustryPartnersContext);
    const [students] = useContext(StudentsContext);
    const [faculty] = useContext(FacultyContext);
console.log(faculty)
    const [internshipData, setInternshipData] = useState({
        date: '',
        industryPartners: [],
        studentIds: [],
        facultyPartners: [],
        publicationType: ''
      });
      
    const [ip, setIp] = useState([]);
    const [sp, setSp] = useState([]);
    const [fp, setFp] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/publications/${id}`);
                setInternshipData(res.data);
            } catch (error) {
                console.error('Error fetching internships data:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (internshipData.industryPartners) {
            const matchedIndustryPartners = internshipData.industryPartners.map(ipd => 
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
        if (internshipData.facultyPartners) {
            const matchedFacultyPartners = internshipData.facultyPartners.map(ipd => 
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
    <div className=''>
        <div className=''>
            <div className='bg-white   mb-2 m-9'>
                <h1 className='text-[22px] font-semibold'>Title</h1>
            </div>
            <div className='px-4'>
            <div className='flex justify-evenly'>
            <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Published on : </span> {internshipData.date ? internshipData.date.substring(0, 10) : ''}</h1>

                <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Publication Type :  </span>{internshipData.publicationType}</h1>
                {/* <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Published by : </span></h1> */}
            </div>
            <div className='ml-9'>
            <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Industry Partners : {internshipData.industryPartners[0]}</h1>
                <div className='m-4 flex flex-wrap'>
                    {
                        ip.map((i,index)=>(
                            <Ipcard data={i} key={index}/>
                        ))
                    }
                           
                </div>
                <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Faculty Partners : </h1>
                <div className='m-4 flex flex-wrap'>
                    {
                        fp.map((f,index)=>(
                            <Fpcard data={f} key ={index}/>
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
            <h1 className='m-4 text-[20px]'><span className='font-semibold text-navy-blue '>Abstract : </span></h1>
                
                <p className='m-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              
              
          <button className="bg-amber ml-9 text-navy-blue px-4 py-2 mt-4 rounded flex">
            <img className='h-[20px] mr-2' src='https://www.freeiconspng.com/uploads/downloading-png-22.png' alt=''/>
            Download PDF</button>
        

            </div>
        </div>
    </div>
  )
}

export default ResearchPublicationPage