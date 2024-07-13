import React, { useEffect, useState } from 'react'
import SearchBar from '../../Components/SearchBar/Searchbar';
import StartupCard from '../../Components/StartupCard/StartupCard';
import axios from 'axios';

const Startups = () => {
  const [startupsData, setstartupsData] = useState([])
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get("http://localhost:8080/api/startups");
          setstartupsData(res.data);

        } catch (error) {
          console.error('Error fetching internships data:', error);
        }
      };
  
      fetchData();
    }, []);
    console.log(startupsData)
    const startups = [
        {
          name: "LEVEL",
          founder: {
            name: "C. Aswitha Reddy",
            phone: "9515330333",
            email: "contact@levelapp.in"
          },
          description: "Design and development of Mobile Application using Natural Language Processing. Level is a digital platform for all the teachers and learners out there. Foundation of LEVEL APP, a Topic Learning and Teaching Platform.",
          logo: "https://levelapp.in/logo.png"
        },
        {
          name: "Red Matter Technologies",
          founder: {
            name: "R. Srikanth",
            phone: "9701818363",
            email: "contact@redmattertech.com",
            website: "https://redmattertech.com/",
            locations: "Hyderabad and Mumbai"
          },
          description: "Design and development of Mobile Application using Natural Language Processing. Digital solutions, Technology solutions, Marketing solutions, Design solutions, Digital operations, Branding solutions, Customized products, online Media Management.",
          logo: "https://redmattertech.com/logo.png"
        },
        {
          name: "VGLUG",
          founder: {
            name: "V. Siddhartha",
            phone: null,
            email: null,
            website: "m.me/VGLUG"
          },
          description: "Customization of open Source Applications. Founder VGLUG - VNR GNU/Linux Users Group. We are a group of aspiring intellectuals at VNRVJIET in India, passionate & pragmatic in supporting and propagating the noble Free Software Movement.",
          logo: "https://vglug.in/logo.png"
        }
      ];
      
  return (
    <div>
        <div className=' mt-1 mb-2'>
            <div className='text-cneter flex justify-center'><h1 className='text-navy-blue mb-4 font-semibold text-[22px]'>STARTUP's</h1> </div>
            <div className='flex flex-wrap p-3 bg-gray-100 o' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {
                    startupsData.map((startup,index)=>(
                        <StartupCard startup={startup} key={index}/>

                    ))
                }
                
            </div>
        </div>


    </div>
  )
}

export default Startups