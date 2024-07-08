import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Ipcard from '../../Components/Ipcard/Ipcard';
import Fpcard from '../../Components/Fpcard/Fpcard';
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext';
import { FacultyContext } from '../../Contexts/FacultyContext';
import { StudentsContext } from '../../Contexts/StudentsContext';
import Stcard from '../../Components/Stcard/Stcard';

const CertificationPage = () => {
    const { id } = useParams(); // Fetching id from URL using useParams
    const [industryPartners] = useContext(IndustryPartnersContext);
    const [students] = useContext(StudentsContext)
    const [faculty] = useContext(FacultyContext);
    const [internshipData, setInternshipData] = useState({});
    const [ip, setIp] = useState([]);
    const [fp, setFp] = useState([]);
    const [sp,setSp] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/industry-certification-courses/${id}`);
                setInternshipData(res.data);
            } catch (error) {
                console.error('Error fetching certification data:', error);
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
        } else {
            setIp([]); // Ensure ip state is initialized or reset when data is not available
        }
    }, [internshipData, industryPartners]);

    useEffect(() => {
        if (internshipData.facultyPartners) {
            const matchedFacultyPartners = internshipData.facultyPartners.map(fid =>
                faculty.find(fac => fac._id == fid)
            ).filter(faculty => faculty !== undefined); // Filter out undefined values
            setFp(matchedFacultyPartners);
        } else {
            setFp([]); // Ensure fp state is initialized or reset when data is not available
        }
    }, [internshipData, faculty]);
    useEffect(() => {
        if (internshipData.studentIds) {
            const matchedFacultyPartners = internshipData.studentIds.map(fid =>
                students.find(fac => fac._id == fid)
            ).filter(faculty => faculty !== undefined); // Filter out undefined values
            setSp(matchedFacultyPartners);
        } else {
            setSp([]); // Ensure fp state is initialized or reset when data is not available
        }
    }, [internshipData, students]);
    console.log(internshipData)
    console.log(faculty)
    console.log(industryPartners)
console.log(ip)
console.log(fp)
console.log(sp)
    return (
        <div>
            <div>
                <div className='m-6'>
                    <h1 className='text-[22px] font-semibold'>{internshipData.name}</h1>
                </div>
                <div className='p-6'>
                    <div className='flex justify-center'>
                        {internshipData.imageUrls && internshipData.imageUrls.length >= 2 && (
                            <>
                                <img className='w-[300px] h-[300px] mr-10' src={internshipData.imageUrls[0]} alt='' />
                                <img className='w-[300px] h-[300px] ml-10' src={internshipData.imageUrls[1]} alt='' />
                            </>
                        )}
                    </div>
                    <h1 className='m-4 my-10 text-[20px]'><span className='font-semibold text-navy-blue'>Details </span>{internshipData.industryName}</h1>
                    <p className='m-4 '>{internshipData.description}</p>

                    <h1 className='font-semibold text-navy-blue m-4 text-[20px]'>Industry Partners : </h1>
                    <div className='m-4 flex flex-wrap'>
                        {ip.map(partner => (
                            <Ipcard key={partner._id} data={partner} />
                        ))}
                    </div>
                    <h1 className='font-semibold text-navy-blue m-4 text-[20px]'>Faculty Partners : </h1>
                    <div className='m-4 flex flex-wrap'>
                        {fp.map(faculty => (
                            <Fpcard key={faculty._id} data={faculty} />
                        ))}
                    </div>
                    <h1 className='font-semibold text-navy-blue m-4 text-[20px]'>Student Partners : </h1>
                    <div className='m-4 flex flex-wrap'>
                        {sp.map(faculty => (
                            <Stcard key={faculty._id} data={faculty} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CertificationPage;
    