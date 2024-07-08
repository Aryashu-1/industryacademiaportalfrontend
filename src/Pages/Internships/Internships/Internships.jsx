import React, { useEffect, useState } from 'react'
import InternshipCard from '../../../Components/InternshipCard/InternshipCard';
import axios from 'axios';

const Internships = () => {
    const [internshipsData,setInternshipsData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("http://localhost:8080/api/internships");
            setInternshipsData(res.data);

          } catch (error) {
            console.error('Error fetching internships data:', error);
          }
        };
    
        fetchData();
      }, []);
 

  return (
    <div>
        <div className='text-center items-center'>
            <h1 className='text-[24px] font-semibold'>INTERNSHIPS</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
        <div className='bg-gray-100'>

            <div className=' overflow-auto flex-grow-2 h-screen py-1 transition-opacity duration-500 ease-in-out' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {
                    internshipsData.map((internship,index)=>(
                       <InternshipCard internship={internship} key ={index}/>
                    ))
                }
            </div>

        </div>
    </div>
  )
}

export default Internships