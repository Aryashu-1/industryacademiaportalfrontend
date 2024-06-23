import React from 'react'

const HomePage = () => {
  return (
    <div style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        <div className='bg-[#f5f5f7]'>
            <div className="relative">
                <video autoPlay muted loop className="w-full h-full object-cover absolute ">
                    <source src="https://vnrvjiet.ac.in/assets/images/Website Hero Video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="relative z-10 flex flex-col items-center justify-center h-screen text-white">
                    <h1 className="text-4xl font-bold mb-4 md:text-4xl">Industry-Academia Portal</h1>
                    <p className="text-lg md:text-2xl">Explore innovation and collaboration between academia and industry.</p>
                </div>
            </div>
            <div className='mt-3 mx-4 md:mx-[70px] p-6'>
                <div className='text-[#82001a] font-bold text-3xl'>About Us</div>
                <div className='flex flex-col md:flex-row p-3'>
                    <div className='md:w-[30%]'>
                        <p className='font-mono text-base text-black leading-7'>Our industry-academia portal is a dynamic platform designed to bridge the gap between academic excellence and practical industry applications. At its core, our portal aims to foster collaboration between leading academic institutions and industry partners, facilitating groundbreaking research and innovation</p>
                        <br/>
                        <p className='font-mono'>We strive to create a vibrant ecosystem where academia and industry converge to tackle real-world challenges, driving forward advancements in technology, science, and societal impact.</p>
                    </div>
                    <div className='md:w-[70%] flex justify-center items-center mt-4 md:mt-0'>
                        <img className='h-[300px] md:h-[400px]' src="https://static.toiimg.com/thumb/msid-71683955,width-400,resizemode-4/71683955.jpg" alt="" />
                    </div>
                </div>
                <div className='flex flex-col md:flex-row mt-9'>
                    <div className='md:w-[33%] mx-2 mb-6 md:mb-0'>
                        <h1 className='text-[30px] font-semibold'>Vision</h1>
                        <hr className="border-2 rounded-lg border-[#82001a] my-1 w-[50px]"/>
                        <p className='font-mono'>Our vision is to emerge as a global leader in fostering seamless integration between academia and industry, setting new benchmarks in collaborative research and innovation.</p>
                        <br/>
                        <p className='font-mono'> We envision a future where our platform serves as a catalyst for transformative partnerships, empowering researchers and industry leaders to address complex challenges and unlock new opportunities for growth and development.</p>
                    </div>
                    <div className='md:w-[33%] mx-2 mb-6 md:mb-0'>
                        <h1 className='text-[30px] font-semibold'>Mission</h1>
                        <hr className="border-2 rounded-lg border-[#82001a] my-1 w-[50px]"/>
                        <p className='font-mono'>Our mission is to facilitate impactful collaborations between academic institutions and industry partners, enabling the co-creation of knowledge and solutions that address pressing global needs. We are committed to nurturing a culture of innovation, entrepreneurship, and continuous learning, driving societal progress through research excellence and industry engagement.</p>
                    </div>
                    <div className='md:w-[33%] mx-2'>
                        <h1 className='text-[30px] font-semibold'>Quality Policy</h1>
                        <hr className="border-2 rounded-lg border-[#82001a] my-1 w-[50px]"/>
                        <p className='font-mono'>At our portal, we are dedicated to upholding the highest standards of quality, integrity, and excellence in all our endeavors.</p>
                        <br/>
                        <p className='font-mono'> We are committed to delivering innovative solutions and services that exceed the expectations of our stakeholders. Our quality policy revolves around continuous improvement, adherence to ethical practices, and fostering a collaborative environment that promotes transparency, accountability, and mutual respect among all participants.</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='flex justify-center items-center text-[#82001a] font-semibold text-3xl'>Industry Partners</div>
                    <div className='flex justify-center items-center mt-7'>
                        <img className='w-full md:w-[700px]' src='https://qph.cf2.quoracdn.net/main-qimg-f132d3b66b5033abf4c50c34aa2f303a-lq' alt="Industry Partners"/>
                    </div>
                </div>
                <div className='mt-4'>
                    <div className='flex justify-center items-center text-[#82001a] font-semibold text-3xl'>Research Partners</div>
                    <div className='flex justify-center items-center mt-7'>
                        <img className='w-full md:w-[700px]' src='https://www.researchgate.net/publication/374021504/figure/fig2/AS:11431281189762265@1695133705385/Seven-premier-international-research-partner-institutions.png' alt="Research Partners"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage
