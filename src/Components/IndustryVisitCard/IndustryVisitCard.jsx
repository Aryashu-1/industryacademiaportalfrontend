import React, { useState } from 'react'
import Ipcard from '../Ipcard/Ipcard'
import Fpcard from '../Fpcard/Fpcard'

const IndustryVisitCard = (props) => {
    const [expanded,setTogglexpanded] = useState(false)
    function expansion(){
        setTogglexpanded(!expanded)
    }
  return (
    <div>
        <div className='bg-white p-9 m-4 mb-9 cursor-pointer hover:scale-[103%] transform duration-300'>
            <div className='flex justify-center'><h1 className='text-[22px] text-[#82001a] font-semibold' >{props.industry.companyName}</h1></div>
            <h1 className='text-[20px] mb-6' ><span className='text-[20px] font-semibold  '>Visited on: </span>{props.industry.date}</h1>
            <p className='mb-9'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            {!expanded && <div className='flex justify-end' onClick={expansion}><h1 className='underline '>Read More...</h1></div>}
            {
                expanded && 
                <div>
                    <div className='flex  my-2'>
                <div className='w-[30%]'>
                    <img src={props.industry.images[0]}/> 
                </div>
                <div className='w-[70%] ml-3'>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>

            </div>
            <div className='flex  my-4'>
                <div className='w-[70%] '>
                    <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>
                <div className='w-[30%] ml-3'>
                    <img src={props.industry.images[0]}/> 
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
             <div className='flex justify-end' onClick={expansion}><h1 className='underline '>Read Less...</h1></div>
                </div>
               
                
            }
            
        </div>
    </div>
  )
}

export default IndustryVisitCard