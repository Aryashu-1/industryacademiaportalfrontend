import React, { useState } from 'react';

const Menu = () => {
  const menuItems = [
    {
      label: 'Internships',
      items: [
        { label: 'Internships', path: '/internships' }
      ],
    },
    {
      label: 'MOUs',
      items: [
        { label: 'Active (Functional) MOUs', path: '/mous/active-mous' }
      ]
    },
    {
      label: 'Courses',
      items: [
        { label: 'Industry Designed Courses', path: '/courses/industry-designed' },
       
      ]
    },
    {
      label: 'Laboratories',
      items: [
        { label: 'Industry Sponsored Laboratory', path: '/laboratories' }
      ]
    },
    {
      label: 'Certifications',
      items: [
        { label: 'Certification Courses', path: '/certifications' }
      ]
    },
    {
      label: 'Guest Lectures',
      items: [
        { label: 'Guest Lectures by Industry Experts', path: '/guest-lectures' }
      ]
    },
    {
      label: 'Startups',
      items: [
        { label: 'Student/Faculty Startups', path: '/startups' }
      ]
    },
    {
      label: 'Publications',
      items: [
        { label: 'Research Publications in Collaboration with Industry', path: '/publications/research-publications' }
      ]
    },
    {
      label: 'Research Centers',
      items: [
        { label: 'Research Centers with Industry Experts', path: '/research-centers' }
      ]
    },
    {
      label: 'Consultancy Projects',
      items: [
        { label: 'Industry Consultancy Projects', path: '/projects/consultancy-projects' }
      ]
    },
    {
      label: 'Industrial Visits',
      items: [
        { label: 'Industrial Visits', path: '/visits/industrial-visits' }
      ]
    },
    {
      label: 'Collaborated Projects',
      items: [
        { label: 'Industry Collaborated Projects', path: '/projects/collaborated-projects' }
      ]
    }
  ];

  const [isActive, setIsActive] = useState(false);
  const [expandedItem, setExpandedItem] = useState(null);

  const showMenu = () => {
    setIsActive(true);
  };

  const closeMenu = () => {
    setIsActive(false);
  };

  const toggleItem = (idx) => {
    setExpandedItem(expandedItem === idx ? null : idx);
  };

  return (
    <div>
      {!isActive &&
        <div className=' mt-2 ml-4 flex'>
         <button onClick={showMenu} className='rounded-[5px] p-1 border-2 shadow-2xl w-[30px] h-[30px] flex items-center'>
            
            <svg className='text-white  w-[25px] h-[28px]' xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" ><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>
            
            </button>
        </div>
      }

      {isActive &&
        <div className='fixed top-0 left-0 z-auto flex w-full h-full animate-[wiggle_0.49s]'>
          <div className='w-2/5 h-full bg-navy-blue rounded-r-lg overflow-y-auto' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className='text-center p-12 flex'>
              <h1 className=' text-white font-semibold text-2xl'>Industry-Academia Portal</h1>
              <div className='text-white relative cursor-pointer mr-[50px] p-2 flex flex-row justify-start items-center gap-2'>
                <svg 
                  onClick={closeMenu} 
                  fill="white" 
                  height="15px" 
                  width="15px" 
                  version="1.1" 
                  id="Capa_1" 
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 490 490"
                >
                  <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "/>
                </svg>
              </div>
            </div>
            <div>
              
              {menuItems.map((item, idx) => (
                <div key={idx} className='m-2 p-2 border-black text-white'>
                  <button className='text-white' onClick={() => toggleItem(idx)}>{item.label}</button>
                  {expandedItem === idx && (
                    <div className='pl-4'>
                      {item.items.map((subItem, subIdx) => (
                        <div key={subIdx} className='py-1'>
                          <hr className="border-1 rounded-lg mt-4 border-gray-400 my-1 w-3/4 text-sm" />
                          <a href={subItem.path} className='text-gray-200'>{subItem.label}</a>
                        </div>
                      ))}
                    </div>
                  )}
                  <hr className="border-1 rounded-lg mt-4 border-gray-400 my-1 w-3/4 text-sm" />
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Menu;
