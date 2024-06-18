import React from 'react'
import SearchBar from '../../Components/SearchBar/Searchbar'
import BookCard from '../../Components/BookCard/BookCard'

const LearningMaterialsPage = () => {
  const content1=[{
    'id':'1',
      'Title': 'The Nanomorphic Cell',
      'description':'Atomic-level limits of computing',
      'img':'https://fujiaddict.com/wp-content/uploads/2022/05/Nanomorph01-Full-Set.jpeg',
  },
  { 'id':'2',
    'Title': 'Bio-Nano Sensors',
    'description':'Nanoelectronics in Biosensing Applications',
    'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5AG5ly6P0iFRVdBbxsNhVLvjBAGFn4X3mFA&usqp=CAU',
  },{
    'id':'3',
  'Title': 'NANOPOLYMERS',
  'description':'NANOELECTRONIC POLYMERS',
  'img':'https://www.pharmaexcipients.com/wp-content/uploads/2021/07/Polymer-Nanomaterials.jpg',
},{
'id':'4',
'Title': 'ELECTROACTIVE NANOSTRUCTURED POLYMERS',
'description':'',
'img':'https://pubs.acs.org/cms/10.1021/acs.chemmater.5b04879/asset/images/large/cm-2015-04879m_0001.jpeg',
},{ 'id':'5',
'Title': 'Flexible smart nanosensors',
'img':'https://cdn11.bigcommerce.com/s-wepv6/images/stencil/1280w/uploaded_images/ip-2.jpg?t=1659446154',
'description':'',
},{ 'id':'6',
'Title': 'Surface and interface effects',
'description':'Properties of Nanostructured ZnO',
'img':'https://pub.mdpi-res.com/nanomaterials/nanomaterials-08-00268/article_deploy/html/images/nanomaterials-08-00268-ag-550.jpg?1570044885'
}  ]
  return (
    <div className='mt-[100px] p-2 bg-[#f5f5f7]'>
      LearningMaterialsPage
      <div className='flex m-3 bg-white rounded-l-xl shadow-xl'>
        <div className='w-[50%] flex justify-center items-center'>
          <div className='m-9 mx-16 '>
            <h1 className='m-auto text-[24px] font-semibold text-[#82001a]'>Resources</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>       
          <SearchBar/>
          </div>
        </div>
        <div className='w-[50%]'>
          <img className='h-full w-full object-fill' src="https://cdn.elearningindustry.com/wp-content/uploads/2022/01/shutterstock_739408204.jpg" alt="" />
        </div>
      </div>
      <div className='mt-10 ml-6'>
      <h1 className=' text-[30px] font-semibold'>Learning Materials</h1>
      <hr class="border-2 rounded-lg border-[#82001a] my-1 w-[50px] text-2xl"/>
      <div className='grid grid-cols-3 grid-rows-auto'>
       { content1.map((content,index)=>(
          <BookCard data={content} key={index}/>
        ))}
    </div>
      </div>
    </div>
  )
}

export default LearningMaterialsPage