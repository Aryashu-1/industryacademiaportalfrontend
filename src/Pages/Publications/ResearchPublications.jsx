import React, { useEffect, useState } from 'react'
import ResearchPaperCard from '../../Components/ResearchPaperCard/ResearchPaperCard';
import SearchBar from '../../Components/SearchBar/Searchbar';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const ResearchPublications = () => {
    const [researchPublicationsData, setresearchPublicationsData] = useState([])
  useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await axios.get("http://localhost:8080/api/publications");
          setresearchPublicationsData(res.data);

        } catch (error) {
          console.error('Error fetching internships data:', error);
        }
      };
  
      fetchData();
    }, []);
    console.log(researchPublicationsData)
  const researchPublications = [
    {
        title: "Advances in Web Development Technologies",
        authors: "John Doe, ABC Corp",
        publication: "Journal of Web Engineering",
        date: "January 2023"
    },
    {
        title: "Data Analysis Techniques for Business Intelligence",
        authors: "Jane Smith, XYZ Ltd",
        publication: "Data Science Journal",
        date: "February 2023"
    },
    {
        title: "Digital Marketing Strategies in the Modern Era",
        authors: "Michael Johnson, DEF Tech",
        publication: "Journal of Marketing Research",
        date: "March 2023"
    },
    {
        title: "Cybersecurity Threats and Mitigation",
        authors: "Emily Davis, GHI Solutions",
        publication: "Cybersecurity Journal",
        date: "April 2023"
    },
    {
        title: "Financial Modeling and Risk Assessment",
        authors: "Robert Brown, JKL Innovations",
        publication: "Journal of Financial Analysis",
        date: "May 2023"
    },
    {
        title: "Network Design and Implementation Techniques",
        authors: "William Wilson, MNO Enterprises",
        publication: "Journal of Network Engineering",
        date: "June 2023"
    },
    {
        title: "Business Process Optimization Methods",
        authors: "Elizabeth Martinez, PQR Systems",
        publication: "Business Process Management Journal",
        date: "July 2023"
    },
    {
        title: "Software Quality Assurance Practices",
        authors: "Charles Garcia, STU Networks",
        publication: "Journal of Software Engineering",
        date: "August 2023"
    },
    {
        title: "Applications of Machine Learning in Industry",
        authors: "Patricia Robinson, VWX Dynamics",
        publication: "Machine Learning Journal",
        date: "September 2023"
    },
    {
        title: "Project Management in Practice",
        authors: "Christopher Lee, YZA Group",
        publication: "Project Management Journal",
        date: "October 2023"
    }
];
const latestPublications =[
    {
        title: "Software Quality Assurance Practices",
        authors: "Charles Garcia, STU Networks",
        publication: "Journal of Software Engineering",
        date: "August 2023"
    },
    {
        title: "Applications of Machine Learning in Industry",
        authors: "Patricia Robinson, VWX Dynamics",
        publication: "Machine Learning Journal",
        date: "September 2023"
    },
    {
        title: "Project Management in Practice",
        authors: "Christopher Lee, YZA Group",
        publication: "Project Management Journal",
        date: "October 2023"
    }
]
  return (
    <div>
\    <div className=' mt-1 mb-2'>
        <div className='flex text-center items-center justify-center w-full'><h1 className='text-[#82001a] font-semibold text-[22px] pb-4'>Research Publications</h1></div>
        <div className=' w-full items-center'>
        

            <br/>
            <div className=' p-3 w-[80%] bg-gray-100 mx-auto' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <h1 className='text-[#82001a] font-semibold text-left  ml-4 text-[22px] p-4'>AllPublications</h1>
                {
                    researchPublicationsData.map((researchPaper,index)=>(
                        <div>

                     
                        <NavLink to={researchPaper._id}>
                            <ResearchPaperCard researchPaper={researchPaper} key={index}/>
                        </NavLink>
                        </div>

                    ))
                }
                
            </div>
        </div>
    </div>


</div>
  )
}

export default ResearchPublications