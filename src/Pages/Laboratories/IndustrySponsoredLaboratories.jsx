import React, { useState } from 'react';

const IndustrySponsoredLaboratories = () => {
  const [department, setDepartment] = useState('Civil Engineering');

  const labData = {
    "Civil Engineering": [
      { srNo: 1, location: "Main Building", area: 1500, assistant: "John Doe", incharge: "Dr. Smith", cost: 5000 },
      { srNo: 2, location: "Annex Building", area: 1200, assistant: "Jane Smith", incharge: "Dr. Johnson", cost: 6000 },
      { srNo: 3, location: "South Wing", area: 1800, assistant: "Michael Johnson", incharge: "Prof. Brown", cost: 5500 },
      { srNo: 4, location: "East Wing", area: 1000, assistant: "Emily Davis", incharge: "Dr. Wilson", cost: 4800 },
      { srNo: 5, location: "West Wing", area: 2000, assistant: "David Lee", incharge: "Prof. Martinez", cost: 6200 }
    ],
    "Computer Engineering": [
      { srNo: 1, location: "Main Building", area: 1300, assistant: "John Smith", incharge: "Dr. White", cost: 5100 },
      { srNo: 2, location: "Annex Building", area: 1100, assistant: "Jane Doe", incharge: "Dr. Black", cost: 6100 },
      { srNo: 3, location: "South Wing", area: 1700, assistant: "Michael White", incharge: "Prof. Green", cost: 5400 },
      { srNo: 4, location: "East Wing", area: 900, assistant: "Emily Green", incharge: "Dr. Red", cost: 4700 },
      { srNo: 5, location: "West Wing", area: 1800, assistant: "David Black", incharge: "Prof. Yellow", cost: 6300 }
    ],
    // Add data for other departments
  };

  const departments = [
    "Civil Engineering",
    "Computer Engineering",
    "Electronics & Telecommunication Engineering",
    "Information Technology",
    "Mechanical Engineering",
    "Engineering & Applied Sciences",
    "AI and DS",
    "CSE (AI)",
    "CSE (AI & ML)",
    "CSE (IoT, CS & BT)",
    "CE (Software Engineering)",
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
            <th className="border border-gray-800 px-4 py-2">Lab Assistant</th>
            <th className="border border-gray-800 px-4 py-2">Lab Incharge</th>
            <th className="border border-gray-800 px-4 py-2">Cost in Rs.</th>
          </tr>
        </thead>
        <tbody>
          {data.map((lab, index) => (
            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : 'bg-white'}>
              <td className="border border-gray-800 px-4 py-2">{lab.srNo}</td>
              <td className="border border-gray-800 px-4 py-2">{lab.location}</td>
              <td className="border border-gray-800 px-4 py-2">{lab.area}</td>
              <td className="border border-gray-800 px-4 py-2">{lab.assistant}</td>
              <td className="border border-gray-800 px-4 py-2">{lab.incharge}</td>
              <td className="border border-gray-800 px-4 py-2">{lab.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <div className='flex p-4'>
        <div className='w-[25%] bg-[#82001a]'>
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
            <h1 className='text-[22px] text-[#82001a] font-semibold'>
              {department}
            </h1>
            {generateTable(labData[department])}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustrySponsoredLaboratories;
