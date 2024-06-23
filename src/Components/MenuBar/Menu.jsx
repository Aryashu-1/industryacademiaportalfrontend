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
        { label: 'Courses Delivered by Industry Experts', path: '/courses/industry-experts' }
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

  function showMenu() {
    setIsActive(true);
  }

  function closeMenu() {
    setIsActive(false);
  }

  function toggleItem(idx) {
    if (expandedItem === idx) {
      setExpandedItem(null);
    } else {
      setExpandedItem(idx);
    }
  }

  return (
    <div>
      {!isActive &&
        <div className='mt-2 ml-4 flex '>
          <button onClick={showMenu}>
            <div>
              <img src="https://vnrvjiet.ac.in/assets/images/Hamburger%20red.png" alt="" />
              <p>Menu</p>
            </div>
          </button>
        </div>
      }

      {isActive &&
        <div className='fixed top-0 left-0  flex w-[100%] h-full animate-[slide-down_0.8s]  '>
          <div className='w-[30%] h-full bg-[#82001a] rounded-r-lg overflow-y-auto' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className='text-center p-12'>
              <h1 className='text-white font-semibold text-[24px] m-uto'>Industry-Academia Portal</h1>
            </div>
            <div>
              {menuItems.map((item, idx) => (
                <div key={idx} className='m-[5px] p-2 border-black text-white'>
                  <button className='text-white' onClick={() => toggleItem(idx)}>{item.label}</button>
                  {expandedItem === idx && (
                    <div className='pl-4'>
                      {item.items.map((subItem, subIdx) => (
                        <div key={subIdx} className='py-1'>
                            <hr className="border-1 rounded-lg mt-4 border-gray-400 my-1 w-[300px] text-sm" />
                          <a href={subItem.path} className='text-gray-200'>{subItem.label}</a>
                          
                        </div>
                      ))}
                    </div>
                  )}
                  <hr className="border-1 rounded-lg mt-4 border-gray-400 my-1 w-[300px] text-sm" />
                </div>
              ))}
            </div>
          </div>
          <div className='bg-white w-[70%] h-[100%]'>
            <div className='w-full flex justify-end'>
              <div className='p-2 flex justify-end items-center gap-2'>
                <button onClick={closeMenu}>
                  <div>
                    <img src="https://vnrvjiet.ac.in/assets/images/Hamburger%20red.png" alt="" />
                    <p className="inline-block">Menu</p>
                  </div>
                </button>
              </div>
            </div>
            <div className='item-center flex justify-center text-center'>
              <div className='mt-16'>
                <h1 className='text-[24px] font-bold'>Key Links</h1>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Menu;
