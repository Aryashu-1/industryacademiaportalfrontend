import React from 'react';
import { useNavigate } from 'react-router-dom';

const InternshipCard = (props) => {
    const navigate = useNavigate()
    console.log(props.internship);
    return (
        <div onClick={()=>{navigate(`:id`)}} className='relative w-[700px] mx-auto bg-white m-4 flex cursor-pointer shadow-md p-3 rounded-xl transform hover:scale-[103%] transition-transform duration-600'>
            <div>
                <img src="" alt="ll" className='w-[200px] h-[200px] bg-gray-200 mr-3'/>
            </div>
            <div>
                <h1 className='text-[16px] font-semibold'>
                    {props.internship.companyName}
                </h1>
                <h1 className='font-semibold text-gray-500  text-[14px] mb-3'>
                    {props.internship.role}
                </h1>
                {props.internship.workFromHome && <div className='flex items-center my-1'>
                    <img className='h-[14px]  mr-2' src='https://i.pinimg.com/736x/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg'></img>
                    <h1>
                        Work From Home
                </h1>
                </div>
                }
                {!props.internship.workFromHome && <div className='flex items-center my-1'>
                    <img className='h-[20px]  mr-2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavj9_Ks_pfBuHO-3VMC8kxky4mR6ntn-iCg&s'></img>
                    <h1>
                        {props.internship.location}
                </h1>
                </div>
                }
                <div className='flex items-center my-1'>
                    <img className='h-[20px]  mr-2' src='https://png.pngtree.com/element_our/20190531/ourmid/pngtree-flat-calendar-image_1287503.jpg'></img>
                    <h1>
                        {props.internship.duration}
                    </h1>
                </div>
                <div className='flex items-center my-1'>
                    <img className='h-[20px]  mr-1' src='https://t4.ftcdn.net/jpg/03/19/36/27/360_F_319362751_gAgkW6OFIoxLpEV7OljBSF4xNQtuGa6n.jpg'></img>
                    <h1>
                        {props.internship.stipend}
                    </h1>
                </div>
                    
                
                <h1 className='mt-3'>
                    {props.internship.description}
                </h1>
                
                <div className='absolute top-3 right-3'>
                    <img className='h-[20px]' src={props.internship.companyLogo} alt='Icon'/>
                </div>
            </div>
           
        </div>
    );
}

export default InternshipCard;
