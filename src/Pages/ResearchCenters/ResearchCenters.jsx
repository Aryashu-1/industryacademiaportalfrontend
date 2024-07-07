import React, { useState } from 'react'
import Ipcard from '../../Components/Ipcard/Ipcard'
import Fpcard from '../../Components/Fpcard/Fpcard'
import Stcard from '../../Components/Stcard/Stcard'

const ResearchCenters = () => {
    const [centerId, setCenterId] = useState('')
    const [selected,select] = useState(false)
    function selection(id){
        if(!centerId )
            setCenterId(id)

        select(!selected)
    }
    const researchCenters = [
        {
            centerName: "Web Development Research Center",
            advisors: "John Doe, ABC Corp",
            focus: "Advanced web technologies",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "123 Web Development Street, City, Country"
        },
        {
            centerName: "Data Science Research Center",
            advisors: "Jane Smith, XYZ Ltd",
            focus: "Data analysis and machine learning",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "456 Data Science Avenue, City, Country"
        },
        {
            centerName: "Digital Marketing Research Center",
            advisors: "Michael Johnson, DEF Tech",
            focus: "Digital marketing strategies",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "789 Digital Marketing Boulevard, City, Country"
        },
        {
            centerName: "Cybersecurity Research Center",
            advisors: "Emily Davis, GHI Solutions",
            focus: "Network security and cyber defense",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1011 Cybersecurity Road, City, Country"
        },
        {
            centerName: "Financial Analysis Research Center",
            advisors: "Robert Brown, JKL Innovations",
            focus: "Financial modeling and risk management",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1213 Financial Analysis Lane, City, Country"
        },
        {
            centerName: "Network Design Research Center",
            advisors: "William Wilson, MNO Enterprises",
            focus: "Network architecture and implementation",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1415 Network Design Drive, City, Country"
        },
        {
            centerName: "Business Process Research Center",
            advisors: "Elizabeth Martinez, PQR Systems",
            focus: "Business process management",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1617 Business Process Avenue, City, Country"
        },
        {
            centerName: "Software Quality Research Center",
            advisors: "Charles Garcia, STU Networks",
            focus: "Software testing and quality assurance",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "1819 Software Quality Street, City, Country"
        },
        {
            centerName: "Machine Learning Research Center",
            advisors: "Patricia Robinson, VWX Dynamics",
            focus: "Machine learning and AI applications",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "2021 Machine Learning Avenue, City, Country"
        },
        {
            centerName: "Project Management Research Center",
            advisors: "Christopher Lee, YZA Group",
            focus: "Project planning and execution",
            locationUrl: "https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6",
            address: "2223 Project Management Road, City, Country"
        }
    ];
    
    
  return (
    <div>
        <div className=' mt-1 mb-2'>
        <div className='flex text-center items-center justify-center w-full'><h1 className='text-[#82001a] font-semibold text-[22px] pb-4'>Research Centers</h1></div>
        </div>
        <div className='bg-gray-100 pt-3 px-4 '>
            {
                researchCenters.map((center,index)=>(
                    <div>
                        {  index%2===0 &&
                                <div className='bg-white w-[70%] shadow-xl h-[250px] ml-[5%] mb-4 flex p-2 m-2 rounded-2xl transform duration-500 hover:scale-[103%] '>
                                <div className='w-[25%] h-full '>
                                    <img className='h-full rounded-2xl' src='https://images.adsttc.com/media/images/64db/bedd/fbc6/5840/d273/0e5b/medium_jpg/european-spallation-source-buro-happold-plus-henning-larsen-plus-cobe-plus-sla-architects_21.jpg?1692122872'></img>
                                </div>
                                <div className='w-[75%] ml-5'>
                                    <h1 className='text-[22px] text-[#82001a] font-semibold hover:underline cursor-pointer' onClick={selection}>{center.centerName}</h1>
                                    <h1 className='text-[16px] mt-2'>{center.focus}</h1>
                                    <h1 className='text-[16px] mt-3'><span className='font-semibold'>Advisors: </span>{center.advisors}</h1>
                                    <h1 className='font-semibold test-[16px] mt-4'>Address:</h1>
                                    <h1 className='text-[16px] mb-3'>{center.address}</h1>
                                    <a  className='underline' href={center.locationUrl} target='_blank'>
                                        <div className='flex mt-3 items-center cursor-pointer' >
                                            <img className='h-[20px]  mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s'></img>
                                            <h1>Location</h1>
                                        </div>
                                    </a>
                                </div>
                
                
                            </div>

                        }
                        { index%2!==0 &&
                                <div onClick={selection} className='bg-white w-[70%] h-[250px] flex ml-[25%] p-2 m-3 rounded-2xl shadow-xl transform duration-500 hover:scale-[103%] '>
                                <div className='w-[25%] h-full'>
                                    <img className='h-full rounded-2xl' src='https://images.adsttc.com/media/images/64db/bedd/fbc6/5840/d273/0e5b/medium_jpg/european-spallation-source-buro-happold-plus-henning-larsen-plus-cobe-plus-sla-architects_21.jpg?1692122872'></img>
                                </div>
                                <div className='w-[75%] ml-5 justify-end'>
                                    <h1 className='text-[22px] text-[#82001a] font-semibold hover:underline cursor-pointer '>Aryashu Labs</h1>
                                    <h1 className='text-[16px] mt-2'>Focus</h1>
                                    <h1 className='text-[16px] mt-3'><span className='font-semibold'>Advisors: </span></h1>
                                    <h1 className='font-semibold test-[16px] mt-4'>Address:</h1>
                                    <h1 className='text-[16px] mb-3'>Vignana Jyothi Nagar,Pragathi Nagar, Nizampet.S.O, Hyderabad, Telangana 500090</h1>
                                    <a  className='underline' href='https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6' target='_blank'>
                                        <div className='flex mt-3 items-center cursor-pointer' >
                                            <img className='h-[20px]  mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s'></img>
                                            <h1>Location</h1>
                                        </div>
                                    </a>
                                </div>


                            </div>
    
                        }
                  
                    </div>
            
                ))
            }
            {
                selected &&
                <div className='fixed top-0 left-0 w-full h-full z-50  flex items-center justify-center bg-gray-500 bg-opacity-50' >
                      
                    <div className='bg-white w-[80%] h-[100%] overflow-y-auto ' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        <div className='m-4'>
                            <img className='h-[30px] cursor-pointer' onClick={selection} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ZkAAOgX0Rq2QeV2ur7VAH1mOZHMEZza9tw&s' alt=''/>
                        </div>
                          
                        <div className='  flex  p-2 m-3 rounded-2xl shadow-xl '>
                        
                                <div className='w-[25%] h-full'>
                                    <img className='h-full rounded-2xl' src='https://images.adsttc.com/media/images/64db/bedd/fbc6/5840/d273/0e5b/medium_jpg/european-spallation-source-buro-happold-plus-henning-larsen-plus-cobe-plus-sla-architects_21.jpg?1692122872'></img>
                                </div>
                                <div className='w-[75%] ml-5 justify-end'>
                                    <h1 className='text-[22px] text-[#82001a] font-semibold '>Aryashu Labs</h1>
                                    <h1 className='text-[16px] mt-2'>Focus</h1>
                                    <h1 className='text-[16px] mt-3'><span className='font-semibold'>Advisors: </span></h1>
                                    <h1 className='font-semibold test-[16px] mt-4'>Address:</h1>
                                    <h1 className='text-[16px] mb-3'>Vignana Jyothi Nagar,Pragathi Nagar, Nizampet.S.O, Hyderabad, Telangana 500090</h1>
                                    <a  className='underline' href='https://maps.app.goo.gl/6w8hwqSvf2cy1zNn6' target='_blank'>
                                        <div className='flex mt-3 items-center cursor-pointer' >
                                            <img className='h-[20px]  mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s'></img>
                                            <h1>Location</h1>
                                        </div>
                                    </a>
                                </div>


                            </div>
                                    <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Industry Partners : </h1>
                        <div className='m-4 flex flex-wrap'>
                            <Ipcard/>       
                        </div>
                        <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Faculty Partners : </h1>
                        <div className='m-4 flex flex-wrap'>
                            <Fpcard/>
                        </div>
                        <h1 className='font-semibold text-navy-blue  m-4 text-[20px]'>Students : </h1>
                        <div className='m-4 flex flex-wrap'>
                            <Stcard/>       
                        </div>
                    </div>
                </div>
                
            }
        </div>
    </div>
  )
}

export default ResearchCenters