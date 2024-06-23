import React from 'react'
import MOUCard from '../../../Components/MOUCard/MOUCard';

const ActiveMOUs = () => {
    const organizations = [
        "SATVAT & SPV - Chennai, Tamil Nadu",
        "CCoE Cyber Security Centre of Excellence - Hyderabad, Telangana",
        "AAP Advanced Auto Parts Global Capability Center",
        "Aarth Software Private Limited - Hyderabad, Telangana",
        "Oriental University - Indore, Madhya Pradesh, India",
        "UNPLATFORMS - TEXAS, USA",
        "Aptech Delivery Partner Private Limited - Hyderabad, Telangana",
        "Vikram University - Ujjain, Madhya Pradesh, India",
        "TCS-ion, Private Limited - Hyderabad, Telangana",
        "Talent Sprint Private Ltd - PSR Prime towers, Cyber City gate 1, Gachibowli, Hyderabad",
        "Directi Internet Solutions Private Limited - Andheri East, Mumbai",
        "Thalassemia and Sickle Cell Society - Rajendranagar, Hyderabad",
        "Tata Consultancy Services (TCS) - TCS House, Raveline Street, 21 D.S.Marg, Fort, Mumbai",
        "National Institute of Technology Warangal - Telangana",
        "Centre for Forest and Natural Resource Management Studies (CEFNRMS) - Dullapally, Hyderabad, Telangana",
        "Oriental University - Opposite, Opposite Rewati Range Gate No 1, Sanwer Road, PO Box No 311, Vijay Nagar Post Office, Indore, Madhya Pradesh, 453555."
    ];
    const categories = [
        "Educational Programs and Support",
        "Research Collaboration",
        "Internship and Placement Programs",
        "Guest Lectures and Seminars",
        "Consultancy and Skill Development"
    ];
    

    
   
    const mous = [
        {
            sNo: 1,
            organization: "SATVAT & SPV",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            address: "Chennai, Tamil Nadu",
            validity: "27-04-2023 to 26-04-2028",
            duration: "5 Years",
            activities: [
                { year: 2023, activity: "Online Exams" },
                { year: 2024, activity: "Online Exams" },
                { year: 2025, activity: "Online Exams" },
                { year: 2026, activity: "Online Exams" },
                { year: 2027, activity: "Online Exams" }
            ]
        },
        {
            sNo: 2,
            organization: "CCoE Cyber Security Centre of Excellence",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            address: "Hyderabad, Telangana",
            validity: "07-02-2023 to 06-02-2026",
            duration: "3 Years",
            activities: [
                { year: 2023, activity: "Initiated and offering guest lectures" },
                { year: 2024, activity: "Offering guest lectures" },
                { year: 2025, activity: "Offering guest lectures" }
            ]
        },
        {
            sNo: 3,
            organization: "AAP Advanced Auto Parts Global Capability Center",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            address: "",
            validity: "21-06-2022 to 20-06-2025",
            duration: "3 Years",
            activities: [
                { year: 2022, activity: "Offered Internships and placements to students" },
                { year: 2023, activity: "Offered Internships and placements to students" },
                { year: 2024, activity: "Offered Internships and placements to students" }
            ]
        },
        {
            sNo: 4,
            organization: "Aarth Software Private Limited",
            address: "Hyderabad, Telangana",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            validity: "22-04-2022 to 21-04-2024",
            duration: "2 Years",
            activities: [
                { year: 2022, activity: "Offered Internships and placements to students" },
                { year: 2023, activity: "Offered Internships and placements to students" }
            ]
        },
        {
            sNo: 5,
            organization: "Oriental University",
            address: "Indore, Madhya Pradesh, India",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            validity: "09-03-2022 to 08-03-2027",
            duration: "5 Years",
            activities: [
                { year: 2022, activity: "Research collaboration with faculty" },
                { year: 2023, activity: "Research collaboration with faculty" },
                { year: 2024, activity: "Research collaboration with faculty" },
                { year: 2025, activity: "Research collaboration with faculty" },
                { year: 2026, activity: "Research collaboration with faculty" }
            ]
        },
        {
            sNo: 6,
            organization: "UNPLATFORMS",
            address: "TEXAS, USA",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            validity: "19-11-2021 to 18-11-2026",
            duration: "5 Years",
            activities: [
                { year: 2021, activity: "Offering Internships and placements to students" },
                { year: 2022, activity: "Offering Internships and placements to students" },
                { year: 2023, activity: "Offering Internships and placements to students" },
                { year: 2024, activity: "Offering Internships and placements to students" },
                { year: 2025, activity: "Offering Internships and placements to students" }
            ]
        },
        {
            sNo: 7,
            organization: "Aptech Delivery Partner Private Limited",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            address: "Hyderabad, Telangana",
            validity: "01-11-2021 to 31-10-2023",
            duration: "3 Years",
            activities: [
                { year: 2021, activity: "Department had a consultancy by conducting online exams like GATE." },
                { year: 2022, activity: "Department had a consultancy by conducting online exams like GATE." },
                { year: 2023, activity: "Department had a consultancy by conducting online exams like GATE." }
            ]
        },
        {
            sNo: 8,
            organization: "Vikram University",
            address: "Ujjain, Madhya Pradesh, India",
            validity: "15-03-2021 to 14-03-2026",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            duration: "5 Years",
            activities: [
                { year: 2021, activity: "2 Patents published through research collaboration and gave a guest lecture on Block chain technology." },
                { year: 2022, activity: "Research collaboration and guest lecture on Block chain technology." },
                { year: 2023, activity: "Research collaboration and guest lecture on Block chain technology." },
                { year: 2024, activity: "Research collaboration and guest lecture on Block chain technology." },
                { year: 2025, activity: "Research collaboration and guest lecture on Block chain technology." }
            ]
        },
        {
            sNo: 9,
            organization: "TCS-ion, Private Limited",
            address: "Hyderabad, Telangana",
            validity: "01-09-2020 to 31-08-2023",
            duration: "3 Years",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            activities: [
                { year: 2020, activity: "Online Exams" },
                { year: 2021, activity: "Online Exams" },
                { year: 2022, activity: "Online Exams" },
                { year: 2023, activity: "Online Exams" }
            ]
        },
        {
            sNo: 10,
            organization: "Talent Sprint Private Ltd",
            address: "PSR Prime towers, Cyber City gate 1, Gachibowli, Hyderabad",
            validity: "01-06-2020 to 31-05-2025",
            duration: "5 Years",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            activities: [
                { year: 2020, activity: "Given access for the students to a huge repository of video content & practice tests for placement readiness" },
                { year: 2021, activity: "Access to video content & practice tests for placement readiness" },
                { year: 2022, activity: "Access to video content & practice tests for placement readiness" },
                { year: 2023, activity: "Access to video content & practice tests for placement readiness" },
                { year: 2024, activity: "Access to video content & practice tests for placement readiness" }
            ]
        },
        {
            sNo: 11,
            organization: "Directi Internet Solutions Private Limited",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            address: "Andheri East, Mumbai",
            validity: "11-11-2019 to 10-11-2024",
            duration: "5 Years",
            activities: [
                { year: 2019, activity: "Code chef platform provided to students at the free of cost" },
                { year: 2020, activity: "Code chef platform provided to students at the free of cost" },
                { year: 2021, activity: "Code chef platform provided to students at the free of cost" },
                { year: 2022, activity: "Code chef platform provided to students at the free of cost" },
                { year: 2023, activity: "Code chef platform provided to students at the free of cost" }
            ]
        },
        {
            sNo: 12,
            organization: "Thalassemia and Sickle Cell Society",
            address: "Rajendranagar, Hyderabad",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            validity: "15-10-2019 to 30-09-2022",
            duration: "3 Years",
            activities: [
                { year: 2019, activity: "Completed Research Project, submitted to JNTUH Hyderabad and also published a paper." },
                { year: 2020, activity: "Research Project and paper submission." },
                { year: 2021, activity: "Research Project and paper submission." },
                { year: 2022, activity: "Research Project and paper submission." }
            ]
        },
        {
            sNo: 13,
            organization: "Tata Consultancy Services (TCS)",
            address: "TCS House, Raveline Street, 21 D.S.Marg, Fort, Mumbai",
            validity: "10-07-2019 to 09-07-2024",
            duration: "5 Years",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            activities: [
                { year: 2019, activity: "Offering Bachelor of Technology Graduation course with intake of 60 every year from 2019" },
                { year: 2020, activity: "Bachelor of Technology Graduation course with intake of 60" },
                { year: 2021, activity: "Bachelor of Technology Graduation course with intake of 60" },
                { year: 2022, activity: "Bachelor of Technology Graduation course with intake of 60" },
                { year: 2023, activity: "Bachelor of Technology Graduation course with intake of 60" }
            ]
        },
        {
            sNo: 14,
            organization: "National Institute of Technology Warangal",
            address: "Telangana",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            validity: "04-07-2019 to 03-07-2024",
            duration: "5 Years",
            activities: [
                { year: 2019, activity: "Organization of FDPs/Workshops in collaboration with NITW. Mrs Greeshma, Assistant Prof, CSE Dept pursuing Ph D at NITW." },
                { year: 2020, activity: "FDPs/Workshops, Mrs Greeshma pursuing Ph D at NITW" },
                { year: 2021, activity: "FDPs/Workshops, Mrs Greeshma pursuing Ph D at NITW" },
                { year: 2022, activity: "FDPs/Workshops, Mrs Greeshma pursuing Ph D at NITW" },
                { year: 2023, activity: "FDPs/Workshops, Mrs Greeshma pursuing Ph D at NITW" }
            ]
        },
        {
            sNo: 15,
            organization: "Centre for Forest and Natural Resource Management Studies",
            address: "Dullapally, Hyderabad, Telangana",
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            validity: "25-07-2018 to 30-09-2023",
            duration: "5 Years",
            activities: [
                { year: 2018, activity: "Offered 5 student internships" },
                { year: 2019, activity: "Offered 5 student internships" },
                { year: 2020, activity: "Offered 5 student internships" },
                { year: 2021, activity: "Offered 5 student internships" },
                { year: 2022, activity: "Offered 5 student internships" },
                { year: 2023, activity: "Offered 5 student internships" }
            ]
        },
        {
            sNo: 16,
            url:'https://upload.wikimedia.org/wikipedia/en/7/7e/Oriental_University_logo.png',
            organization: "Oriental University",
            address: " Indore, Madhya Pradesh",
            validity: "11-03-2022 to 11-03-2027",
            duration: "5 Years",
            activities: [
                { year: 2022, activity: "Research collaboration and gave a guest lecture on Block chain technology." },
                { year: 2023, activity: "Research collaboration and gave a guest lecture on Block chain technology." },
                { year: 2024, activity: "Research collaboration and gave a guest lecture on Block chain technology." },
                { year: 2025, activity: "Research collaboration and gave a guest lecture on Block chain technology." },
                { year: 2026, activity: "Research collaboration and gave a guest lecture on Block chain technology." }
            ]
        }
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
        {mous.map((mou, index) => (
            <MOUCard mou={mou} key={index} />
        ))}
        </div>
    </div>
  )
}

export default ActiveMOUs