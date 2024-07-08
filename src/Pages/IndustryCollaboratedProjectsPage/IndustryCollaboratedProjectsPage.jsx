import React, { useContext, useEffect, useState } from 'react';
import Ipcard from '../../Components/Ipcard/Ipcard';
import Fpcard from '../../Components/Fpcard/Fpcard';
import { useParams } from 'react-router-dom';
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext';
import { FacultyContext } from '../../Contexts/FacultyContext';
import axios from 'axios';

const IndustryCollaboratedProjectsPage = () => {
    const { id } = useParams();
    const [industryPartners] = useContext(IndustryPartnersContext);
    const [faculty] = useContext(FacultyContext);

    const [internshipData, setInternshipData] = useState({});
    const [ip, setIp] = useState(null); // Updated to handle single partner
    const [fp, setFp] = useState(null); // Updated to handle single faculty partner

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/projects/${id}`);
                setInternshipData(res.data);
            } catch (error) {
                console.error('Error fetching internship data:', error);
            }
        };

        fetchData();
    }, [id]);

    useEffect(() => {
        if (internshipData.industryPartnerId && industryPartners) {
            const matchedIndustryPartner = industryPartners.find(partner => partner._id === internshipData.industryPartnerId);
            setIp(matchedIndustryPartner);
        }
    }, [internshipData, industryPartners]);

    useEffect(() => {
        if (internshipData.facultyPartnerId && faculty) {
            const matchedFacultyPartner = faculty.find(fac => fac._id === internshipData.facultyPartnerId);
            setFp(matchedFacultyPartner);
        }
    }, [internshipData, faculty]);

    return (
        <div>
            <div>
                <div className='m-6'>
                    <h1 className='text-[22px] font-semibold'>{internshipData.name}</h1>
                </div>
                <div className='flex justify-center'>
                    {internshipData.imageUrls && internshipData.imageUrls[0] && (
                        <img className='w-[300px] h-[300px] mr-10' src={internshipData.imageUrls[0]} alt='' />
                    )}
                    {internshipData.imageUrls && internshipData.imageUrls[1] && (
                        <img className='w-[300px] h-[300px] ml-10' src={internshipData.imageUrls[1]} alt='' />
                    )}
                </div>
                <div className='p-6'>
                    <p className='m-4'>{internshipData.description}</p>
                    <h1 className='font-semibold text-navy-blue m-4 text-[20px]'>Industry Partner :</h1>
                    <div className='m-4'>
                        {ip && <Ipcard data={ip} />}
                    </div>
                    <h1 className='font-semibold text-navy-blue m-4 text-[20px]'>Faculty Partner :</h1>
                    <div className='m-4'>
                        {fp && <Fpcard data={fp} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndustryCollaboratedProjectsPage;
