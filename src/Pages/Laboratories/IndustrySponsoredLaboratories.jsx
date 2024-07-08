import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FacultyContext } from '../../Contexts/FacultyContext';
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext';

const IndustrySponsoredLaboratories = () => {
  const [department, setDepartment] = useState('Civil Engineering');
  const [labsData, setLabsData] = useState([]);
  const [faculty] = useContext(FacultyContext)
  const [industryPartners] =useContext(IndustryPartnersContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/labs");
        setLabsData(res.data);
      } catch (error) {
        console.error('Error fetching labs data:', error);
      }
    };

    fetchData();
  }, []);

  const departments = [
    "Civil Engineering",
    "Computer Engineering",
    "Electronics & Telecommunication Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "Engineering & Applied Sciences",
    "AI and DS",
    "CSE (AI & ML)",
    "CSE (IoT, CS & BT)",
  
    "CSE (Data Science)"
  ];

  function generateTable(data) {
    return (
      <table className="border-collapse m-2 w-full border border-gray-800">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-800 px-4 py-2">Sr. No.</th>
            <th className="border border-gray-800 px-4 py-2">Lab Location</th>
            <th className="border border-gray-800 px-4 py-2">Area of Lab</th>
            <th className="border border-gray-800 px-4 py-2">Industry Partner</th>
            <th className="border border-gray-800 px-4 py-2">Faculty Incharge</th>
           
          </tr>
        </thead>
        <tbody>
          {data.map((lab, index) => (

            <tr key={lab._id} className={(index % 2 === 0) ? 'bg-gray-100' : 'bg-white'}>
              <td className="border border-gray-800 px-4 py-2">{index + 1}</td>
              <td className="border border-gray-800 px-4 py-2">{lab.location}</td>
              <td className="border border-gray-800 px-4 py-2">{lab.areaSquareFeet}</td>
              <td className="border border-gray-800 px-4 py-2">{getPartnerName(lab.industryPartnerIds, industryPartners)}</td>
              <td className="border border-gray-800 px-4 py-2">{getPartnerName(lab.facultyPartnerIds, faculty)}</td>
              
            </tr>

          ))}
        </tbody>
      </table>
    );
  }
  
  function getPartnerName(partnerIds, partners) {
    return partnerIds.map(id => {
        console.log(id)
      const partner = partners.find(p => p._id == id);
      console.log(partner)
      return partner ? partner.name : 'N/A';
    }).join(', ');
  }
  
  console.log(faculty)
  console.log(industryPartners)
  const filteredLabsData = labsData.filter(lab => lab.department === department);

  return (
    <div>
      <div className='flex p-4'>
        <div className='w-[25%] bg-navy-blue'>
          <div className='text-center'>
            <h1 className='text-[20px] text-[#ffcd29] mb-6 '>Departments</h1>
          </div>
          {departments.map((dept, index) => (
            <div key={index} className='py-1 cursor-pointer p-2'>
              <p onClick={() => setDepartment(dept)} className='text-gray-200'>{dept}</p>
              <hr className="border-1 rounded-lg mt-4 border-gray-400 my-1 w-[300px] text-sm" />
            </div>
          ))}
        </div>
        <div className='w-[75%]'>
          <div className='text-center '>
            <h1 className='text-[22px] text-navy-blue font-semibold'>
              {department}
            </h1>
            {generateTable(filteredLabsData)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustrySponsoredLaboratories;
