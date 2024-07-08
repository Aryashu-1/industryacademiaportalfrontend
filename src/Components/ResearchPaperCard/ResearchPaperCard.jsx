import React from 'react'

const ResearchPaperCard = (props) => {
  console.log(props.researchPaper)

  return (
    <div>
        <div className='cursor-pointer mx-[100px] my-4  shadow-xl bg-white p-4 transform hover:scale-[103%] transition-transform duration-600'>
            <h1  className='text-[#82001a] text-[22px] font-semibold mb-2'>{props.researchPaper.name}</h1>
            <h1><span className='font-semibold'>Publication Type : </span>{props.researchPaper.publicationType}</h1>
            <h1><span className='font-semibold'>Published on : </span>{props.researchPaper.date.substring(0, 10)}</h1>
            
        </div>

    </div>
  )
}

export default ResearchPaperCard