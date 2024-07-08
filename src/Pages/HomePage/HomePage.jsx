import React, { useContext, useEffect, useRef } from 'react';
import TextType from '../../Components/TextType/TextType';
import { Carousel } from 'flowbite';
import { NavLink } from 'react-router-dom';
import { StudentsContext } from '../../Contexts/StudentsContext';
import axios from 'axios';
import { FacultyContext } from '../../Contexts/FacultyContext';
import { IndustryContext } from '../../Contexts/IndustryContext';
import { IndustryPartnersContext } from '../../Contexts/IndustryPartnersContext';

const HomePage = () => {
    const carouselRef = useRef(null);
    const [students, setStudents] = useContext(StudentsContext);
    const [faculty, setFaculty] = useContext(FacultyContext);
    const [industryPartners, setIndustryPartners] = useContext(IndustryPartnersContext);
    const [industries, setIndustries] = useContext(IndustryContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const url = `http://localhost:8080/api/students`;
                const url2 = `http://localhost:8080/api/faculty-partners`;
                const url3 = `http://localhost:8080/api/industries`;
                const url4 = `http://localhost:8080/api/industry-partners`;

                const response = await axios.get(url);
                setStudents(response.data);

                const response2 = await axios.get(url2);
                setFaculty(response2.data);

                const res3 = await axios.get(url3);
                setIndustries(res3.data);

                const response4 = await axios.get(url4);
                setIndustryPartners(response4.data);

            } catch (error) {
                console.error('error', error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        const carouselElement = carouselRef.current;

        if (carouselElement) {
            const items = [
                { position: 0, el: document.querySelector('[data-carousel-item="0"]') },
                { position: 1, el: document.querySelector('[data-carousel-item="1"]') },
                // Add more items as needed...
            ];

            if (items.every(item => item.el !== null)) {
                const options = {
                    defaultPosition: 0,
                    interval: 3000,
                    indicators: {
                        activeClasses: 'bg-white dark:bg-gray-800',
                        inactiveClasses: 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800',
                        items: [
                            { position: 0, el: document.querySelector('[data-carousel-slide-to="0"]') },
                            { position: 1, el: document.querySelector('[data-carousel-slide-to="1"]') },
                            // Add more indicators as needed...
                        ],
                    },
                    onNext: () => console.log('Next slide shown'),
                    onPrev: () => console.log('Previous slide shown'),
                    onChange: () => console.log('Slide changed'),
                };

                const carouselInstance = new Carousel(carouselElement, items, options);

                const nextButton = carouselElement.querySelector('[data-carousel-next]');
                const prevButton = carouselElement.querySelector('[data-carousel-prev]');

                if (nextButton && prevButton) {
                    nextButton.addEventListener('click', () => carouselInstance.next());
                    prevButton.addEventListener('click', () => carouselInstance.prev());
                }
            } else {
                console.error('Carousel items or indicators not found');
            }
        }
    }, []);

    return (
        <div className='font-[outfit]' style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className='bg-[#f5f5f7]'>
                <div className='flex justify-center'>
                    <h1 className='text-[28px] text-navy-blue font-semibold'>Welcome To</h1>
                </div>
                <div>
                    <TextType text="INDUSTRY-ACADEMIA PORTAL" />
                </div>
                <div className='flex justify-center '>
                    <div id="custom-carousel" ref={carouselRef} className="relative -z-0 w-[70%]" data-carousel="slide">
                        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="0">
                                <img src="https://judgesandlawyers.com/wp-content/uploads/2023/06/Student-Internship.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="1">
                                <img src="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1691982397/1691982395.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
                            </div>
                            <div className="hidden duration-700 ease-in-out" data-carousel-item="2">
                                <img src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 3" />
                            </div>
                        </div>
                        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                        </div>
                        <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
                                </svg>
                                <span className="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>

                <div className='mt-3 mx-4 md:mx-[70px] p-6 font-[outfit]'>
                    <div className='text-[#82001a] font-bold text-3xl'>About Us</div>
                    <div className='flex flex-col md:flex-row p-3'>
                        <div className=' mt-9'>
                            <div className='md:w-[70%] flex justify-center items-center mt-4 md:mt-0'>
                                <img className='h-[300px] md:h-[400px]' src="https://static.toiimg.com/thumb/msid-71683955,width-400,resizemode-4/71683955.jpg" alt="" />
                            </div>
                            <p className='text-base mt-6 text-black leading-7'>Our industry-academia portal is a dynamic platform designed to bridge the gap between academic excellence and practical industry applications. At its core, our portal aims to foster collaboration between leading academic institutions and industry partners, facilitating groundbreaking research and innovation
We strive to create a vibrant ecosystem where academia and industry converge to tackle real-world challenges, driving forward advancements in technology, science, and societal impact.</p>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-center items-center text-[#82001a] font-semibold text-3xl'>Industry Partners</div>
                        <div className='flex justify-center items-center mt-7'>
                            <img className='w-full md:w-[700px]' src='https://qph.cf2.quoracdn.net/main-qimg-f132d3b66b5033abf4c50c34aa2f303a-lq' alt="Industry Partners" />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <div className='flex justify-center items-center text-[#82001a] font-semibold text-3xl'>Research Partners</div>
                        <div className='flex justify-center items-center mt-7'>
                            <img className='w-full md:w-[700px]' src='https://www.researchgate.net/publication/374021504/figure/fig2/AS:11431281189762265@1695133705385/Seven-premier-international-research-partner-institutions.png' alt="Research Partners" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
