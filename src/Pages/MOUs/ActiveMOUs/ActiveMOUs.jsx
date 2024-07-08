import React, { useEffect, useState } from 'react'
import MOUCard from '../../../Components/MOUCard/MOUCard';
import axios from 'axios';


const ActiveMOUs = () => {
    const [mous,setmous] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("http://localhost:8080/api/mous");
            setmous(res.data);

          } catch (error) {
            console.error('Error fetching internships data:', error);
          }
        };
    
        fetchData();
      }, []);
      console.log(mous)
    const organizations = [
     
        "CCoE Cyber Security Centre of Excellence - Hyderabad, Telangana",
        "AAP Advanced Auto Parts Global Capability Center",
        "Aarth Software Private Limited - Hyderabad, Telangana",

        "UNPLATFORMS - TEXAS, USA",
        "Aptech Delivery Partner Private Limited - Hyderabad, Telangana",
    
        "TCS-ion, Private Limited - Hyderabad, Telangana",
        "Talent Sprint Private Ltd - PSR Prime towers, Cyber City gate 1, Gachibowli, Hyderabad",
        "Directi Internet Solutions Private Limited - Andheri East, Mumbai",
        "Thalassemia and Sickle Cell Society - Rajendranagar, Hyderabad",
        "Tata Consultancy Services (TCS) - TCS House, Raveline Street, 21 D.S.Marg, Fort, Mumbai",

        "Centre for Forest and Natural Resource Management Studies (CEFNRMS) - Dullapally, Hyderabad, Telangana",

    ];
    const categories = [
        "Educational Programs and Support",
        "Research Collaboration",
        "Internship and Placement Programs",
        "Guest Lectures and Seminars",
        "Consultancy and Skill Development"
    ];
    

    

    
  return (
    <div>
        <div>
            <div className='p-16 items-center'>

                <h1 className='text-[24px] font-semibold text-[#82001a] underline '>
                    MEMORANDOM OF UNDERSTANDINGS (MOUs)
                </h1>
                <p className='mt-3'>VNRVJIET has active Memorandums of Understanding (MoUs) with various prestigious foreign universities aimed at fostering research collaborations and facilitating student as well as faculty exchange programs. These partnerships are instrumental in promoting cross-cultural learning experiences and advancing academic excellence.

</p>
                <p className='mt-4 mb-2 text-[#82001a] font-semibold'>Some of the prominent foreign universities with which VNRVJIET has active MoUs include</p>
               <div className='ml-9'>{
                    organizations.map((organization,index)=>(
                        <li key={index}>{organization}</li>
                    ))
                }</div> 

                <p className='mt-6'>The institute's internationalization strategy is built upon four fundamental pillars: research, education, cultural engagement, and skill development. These pillars serve as the guiding principles for fostering global collaborations and enriching the academic experience of students and faculty members.</p>

                <p className='mt-4 mb-2 '>This overarching strategy is deeply ingrained in the objectives of the Memorandums of Understanding (MoUs) established by the institute. </p>
                <p className='text-[#82001a] font-semibold'>The primary goals of these MoUs are:</p>
                <div className='ml-9'>{
                    categories.map((category,index)=>(
                        <li key={index}>{category}</li>
                    ))
                }</div> 
            
            </div>
            
        </div>
            <div className="flex flex-wrap w-[76%] text-center items-center justify-center mx-[150px]">
            {mous.map((mou, index) => index !== 1 ? <MOUCard mou={mou} key={index} /> : null)}

        </div>
    </div>
  )
}

export default ActiveMOUs