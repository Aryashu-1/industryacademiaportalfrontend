import React, { useContext, useEffect, useState } from 'react';
import Ipcard from '../../Components/Ipcard/Ipcard';
import Fpcard from '../../Components/Fpcard/Fpcard';
import Stcard from '../../Components/Stcard/Stcard';
import axios from 'axios';
import { FacultyContext } from '../../Contexts/FacultyContext';
import { StudentsContext } from '../../Contexts/StudentsContext';
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext';
import { IndustryContext } from '../../Contexts/IndustryContext';
import Icard from '../../Components/Icard/Icard';

const ResearchCenters = () => {
    const [industryPartners] = useContext(IndustryPartnersContext);
        const [students] = useContext(StudentsContext);
        const [faculty] = useContext(FacultyContext);
        const [industries] = useContext(IndustryContext)
       
        const [center, setInternshipData] = useState([]);
        const [ip, setIp] = useState([]);
        const [sp, setSp] = useState([]);
        const [fp, setFp] = useState([]);
        const [inp,setInp] = useState([])
    const [centerId, setCenterId] = useState('');
    const [selected, setSelected] = useState(false);
    const [researchCentersData, setResearchCentersData] = useState([]);
    const [selectedCenter, setSelectedCenter] = useState(null);
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/research-centers");
                setResearchCentersData(res.data);

                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleSelection = (center) => {
        console.log(center);
        
        setSelectedCenter(center);
        setSelected(true);
        
        console.log(students)
        console.log(industryPartners)
        console.log(faculty)
   
    

            if (center.industryPartnerIds) {
                const matchedIndustryPartners = center.industryPartnerIds.map(ipd => 
                    industryPartners.find(inp => inp._id == ipd)
                ).filter(partner => partner !== undefined); // Filter out undefined values
                setIp(matchedIndustryPartners);
            }

            if (center.industryId) {
                const matchedIndustryPartners = center.industryId.map(ipd => 
                    industries.find(inp => inp._id == ipd)
                ).filter(partner => partner !== undefined); // Filter out undefined values
                setInp(matchedIndustryPartners);
            }

            if (center.studentId) {
                const matchedStudentPartners = center.studentId.map(ipd => 
                    students.find(inp => inp._id == ipd)
                ).filter(student => student !== undefined); // Filter out undefined values
                setSp(matchedStudentPartners);
            }
  
    

            if (center.facultyPartnerId) {
                const matchedFacultyPartners = center.facultyPartnerId.map(ipd => 
                    faculty.find(inp => inp._id == ipd)
                ).filter(faculty => faculty !== undefined); // Filter out undefined values
                setFp(matchedFacultyPartners);
            }

        
    };

    const handleClose = () => {
        setSelected(false);
        setSelectedCenter(null);
    };
    
    console.log(ip);
    console.log(sp);
    console.log(fp);
    return (
        <div>
            <div className='mt-1 mb-2'>
                <div className='flex text-center items-center justify-center w-full'>
                    <h1 className='text-zoop font-semibold text-[22px] pb-4'>Research Centers</h1>
                </div>
            </div>
            <div className='bg-gray-100 pt-3 px-4'>
                {researchCentersData.map((center, index) => (
                    <div key={center._id}>
                        {index % 2 === 0 ? (
                            <div className='bg-white w-[70%] shadow-xl h-[250px] ml-[5%] mb-4 flex p-2 m-2 rounded-2xl transform duration-500 hover:scale-[103%]'>
                                <div className='w-[25%] h-full'>
                                    <img className='h-full rounded-2xl' src={center.imageUrls[0]} alt={center.name}></img>
                                </div>
                                <div className='w-[75%] ml-5'>
                                    <h1 className='text-[22px] text-zoop font-semibold hover:underline cursor-pointer' onClick={() => handleSelection(center)}>{center.name}</h1>
                                    <h1 className='text-[16px] mt-2'>{center.focus}</h1>
                                    <h1 className='font-semibold mt-2'>Description:</h1>
                                    <h1 className='text-[16px] mt-2'>{center.description}</h1>
                                    <h1 className='font-semibold test-[16px] mt-4'>Address:</h1>
                                    <h1 className='text-[16px] mb-3'>{center.address}</h1>
                                    <a className='underline' href={center.locationUrl} target='_blank' rel='noopener noreferrer'>
                                        <div className='flex mt-3 items-center cursor-pointer'>
                                            <img className='h-[20px] mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s' alt='location icon'></img>
                                            <h1>Location</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className='bg-white w-[70%] h-[250px] flex ml-[25%] p-2 m-3 rounded-2xl shadow-xl transform duration-500 hover:scale-[103%]' onClick={() => handleSelection(center)}>
                                <div className='w-[25%] h-full'>
                                    <img className='h-full rounded-2xl' src={center.imageUrls[0] || center.imageUrls[1]} alt={center.name}></img>
                                </div>
                                <div className='w-[75%] ml-5 justify-end'>
                                    <h1 className='text-[22px] text-zoop font-semibold hover:underline cursor-pointer'>{center.name}</h1>
                                    <h1 className='text-[16px] mt-2'>{center.focus}</h1>
                                    <h1 className='font-semibold mt-2'>Description:</h1>
                                    <h1 className='text-[16px] mt-3'>{center.description}</h1>
                                    <h1 className='font-semibold test-[16px] mt-4'>Address:</h1>
                                    <h1 className='text-[16px] mb-3'>{center.address}</h1>
                                    <a className='underline' href='https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6' target='_blank' rel='noopener noreferrer'>
                                        <div className='flex mt-3 items-center cursor-pointer'>
                                            <img className='h-[20px] mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s' alt='location icon'></img>
                                            <h1>Location</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                {selected && selectedCenter && (
                    <div className='fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center bg-gray-500 bg-opacity-50'>
                        <div className='bg-white w-[80%] h-[100%] overflow-y-auto' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                            <div className='m-4'>
                                <img className='h-[30px] cursor-pointer' onClick={handleClose} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZkAAOgX0Rq2QeV2ur7VAH1mOZHMEZza9tw&s' alt='close'></img>
                            </div>
                            <div className='flex p-2 m-3 rounded-2xl shadow-xl'>
                                <div className='w-[25%] h-full'>
                                    <img className='h-full rounded-2xl' src={selectedCenter.imageUrls[0] || selectedCenter.imageUrls[1]} alt={selectedCenter.name}></img>
                                </div>
                                <div className='w-[75%] ml-5 justify-end'>
                                    <h1 className='text-[22px] text-zoop font-semibold'>{selectedCenter.name}</h1>
                                    <h1 className='text-[16px] mt-2'>{selectedCenter.focus}</h1>
                                    <h1 className='font-semibold mt-2'>Description:</h1>
                                    <h1 className='text-[16px] mt-3'>{selectedCenter.description}</h1>
                                    <h1 className='font-semibold test-[16px] mt-4'>Address:</h1>
                                    <h1 className='text-[16px] mb-3'>{selectedCenter.address}</h1>
                                    <a className='underline' href={selectedCenter.locationUrl} target='_blank' rel='noopener noreferrer'>
                                        <div className='flex mt-3 items-center cursor-pointer'>
                                            <img className='h-[20px] mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s' alt='location icon'></img>
                                            <h1>Location</h1>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <h1 className='font-semibold text-navy-blue m-4 text-[20px]'>Industries:</h1>

                            <div className='m-4 flex flex-wrap'>
                                {inp.map((i, index) => (
                                    <Icard data={i} key={index} />
                                ))}
                            </div>
                            <h1 className='font-semibold text-navy-blue m-4 text-[20px]'>Industry Partners:</h1>
                            <div className='m-4 flex flex-wrap'>
                                {ip.map((f, index) => (
                                    <Ipcard data={f} key={index} />
                                ))}
                            </div>
                            <h1 className='font-semibold text-navy-blue m-4 text-[20px]'>Faculty Partners:</h1>
                            <div className='m-4 flex flex-wrap'>
                                {fp.map((f, index) => (
                                    <Fpcard data={f} key={index} />
                                ))}
                            </div>
                            <h1 className='font-semibold text-navy-blue m-4 text-[20px]'>Students:</h1>
                            <div className='m-4 flex flex-wrap'>
                                {sp.map((s, index) => (
                                    <Stcard data={s} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ResearchCenters;
