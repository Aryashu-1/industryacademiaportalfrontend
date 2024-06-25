import React from 'react'

const UpcomingIndustryVisitCard = (props) => {
  return (
    <div>
              <div className="w-[300px] rounded overflow-hidden shadow-lg m-10">
              <div ><img className="w-full object-contain h-40 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfgpJ-B0hpbHV3cqTK2gm-kJqjLdWotlqoZw&s" alt="Your Image" /></div> 
                <div className="px-6 py-4 ">
                  <div className="font-bold text-xl mb-2 ">{props.company.companyName}</div>
                  <p className="text-gray-700 truncate ">On {props.company.dte}</p>
                  <p className="text-gray-700 truncate ">{props.company.description}</p>
                  <a  className='underline' href={props.company.companyLocation} target='_blank'>
                                        <div className='flex mt-3 items-center cursor-pointer' >
                                            <img className='h-[20px]  mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s'></img>
                                            <h1>Location</h1>
                                        </div>
                    </a>
                </div>
              </div>
    </div>
  )
}

export default UpcomingIndustryVisitCard