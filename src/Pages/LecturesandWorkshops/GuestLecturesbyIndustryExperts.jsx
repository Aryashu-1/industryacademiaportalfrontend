import React from 'react'
import UpcomingGuestLectureCard from '../../Components/UpcomingGuestLectureCard/UpcomingGuestLectureCard';
import SearchBar from '../../Components/SearchBar/Searchbar';
import GuestLectureCard from '../../Components/GuestLectureCard/GuestLectureCard';

const GuestLecturesbyIndustryExperts = () => {
  const guestLectures = [
    {
        topic: "Modern Web Technologies",
        expert: "John Doe, ABC Corp",
        date: "January 15, 2024",
        images: [
          "https://www.nasa.gov/sites/default/files/m7.3-flare-zoom.jpg",
          "https://scx2.b-cdn.net/gfx/news/hires/2015/25-researcherss.jpg"
        ],
        Title: "Modern Web Technologies",
        timings: "10:00 AM - 12:00 PM",
        venue: "Virtual Event",
        description: "This guest lecture will cover the latest trends and technologies in web development.",
        lectureurl: "/guest-lectures/modern-web-technologies"
    },
    {
        topic: "Data Science Applications",
        expert: "Jane Smith, XYZ Ltd",
        date: "February 10, 2024",
        images: [
          "https://www.nasa.gov/sites/default/files/m7.3-flare-zoom.jpg",
          "https://scx2.b-cdn.net/gfx/news/hires/2015/25-researcherss.jpg"
        ],
        Title: "Data Science Applications",
        timings: "2:00 PM - 4:00 PM",
        venue: "Auditorium",
        description: "Explore real-world applications of data science and its impact on various industries.",
        lectureurl: "/guest-lectures/data-science-applications"
    },
    {
        topic: "Digital Marketing Trends",
        expert: "Michael Johnson, DEF Tech",
        date: "March 5, 2024",
        images: [
          "https://www.nasa.gov/sites/default/files/m7.3-flare-zoom.jpg",
          "https://scx2.b-cdn.net/gfx/news/hires/2015/25-researcherss.jpg"
        ],
        Title: "Digital Marketing Trends",
        timings: "11:00 AM - 1:00 PM",
        venue: "Conference Hall",
        description: "Learn about the latest trends and strategies in digital marketing.",
        lectureurl: "/guest-lectures/digital-marketing-trends"
    },
    {
        topic: "Cybersecurity Best Practices",
        expert: "Emily Davis, GHI Solutions",
        date: "April 12, 2024",
        images: [
          "https://www.nasa.gov/sites/default/files/m7.3-flare-zoom.jpg",
          "https://scx2.b-cdn.net/gfx/news/hires/2015/25-researcherss.jpg"
        ],
        Title: "Cybersecurity Best Practices",
        timings: "3:00 PM - 5:00 PM",
        venue: "Seminar Room",
        description: "Discover the best practices for ensuring cybersecurity in organizations.",
        lectureurl: "/guest-lectures/cybersecurity-best-practices"
    },
    {
        topic: "Financial Analysis Techniques",
        expert: "Robert Brown, JKL Innovations",
        date: "May 18, 2024",
        images: [
          "https://www.nasa.gov/sites/default/files/m7.3-flare-zoom.jpg",
          "https://scx2.b-cdn.net/gfx/news/hires/2015/25-researcherss.jpg"
        ],        Title: "Financial Analysis Techniques",
        timings: "10:00 AM - 12:00 PM",
        venue: "Virtual Event",
        description: "Learn advanced techniques for financial analysis and valuation.",
        lectureurl: "/guest-lectures/financial-analysis-techniques"
    }
    // Add more lectures
];

const upcomingEvents = [
    {
        eventName: "TechFest 2024",
        date: "June 1-3, 2024",
        img: "techfest.jpg",
        venue: "Campus Grounds",
        description: "Join us for TechFest 2024, a celebration of technology and innovation.",
        eventUrl: "/events/techfest-2024"
    },
    {
        eventName: "Industry Symposium",
        date: "July 8, 2024",
        img: "industry_symposium.jpg",
        venue: "Auditorium",
        description: "Attend our annual Industry Symposium featuring talks from industry leaders.",
        eventUrl: "/events/industry-symposium"
    },
    {
        eventName: "Startup Summit",
        date: "August 15, 2024",
        img: "startup_summit.jpg",
        venue: "Conference Hall",
        description: "Participate in our Startup Summit and showcase your innovative ideas.",
        eventUrl: "/events/startup-summit"
    },
    {
        eventName: "Innovation Challenge",
        date: "September 20, 2024",
        img: "innovation_challenge.jpg",
        venue: "Innovation Center",
        description: "Join the Innovation Challenge and solve real-world problems with technology.",
        eventUrl: "/events/innovation-challenge"
    },
    {
        eventName: "Research Expo",
        date: "October 25, 2024",
        img: "research_expo.jpg",
        venue: "Exhibition Hall",
        description: "Explore cutting-edge research projects at our annual Research Expo.",
        eventUrl: "/events/research-expo"
    }
    // Add more events
];

  return (
    <div>
       <div>
       
            <div className=' p-9 bg-gray-100' >
            <h1  className='text-[#82001a] text-[20px] font-semibold'>Upcoming Guest Lectures</h1>
            <div className='flex overflow-auto' style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {
                    upcomingEvents.map((course,index)=>(
                        <UpcomingGuestLectureCard lecture={course} key={index}/>
                    ))
                }
            </div>
            <h1  className='text-[#82001a] text-[20px]  mt-6 font-semibold'>Past Lectures</h1>
            <div className='flex flex-wrap'>
            {
                  guestLectures.map((lecture,index)=>(
                    <GuestLectureCard lecture={lecture} key={index}/>
                  ))
                   
                }
            </div>
                
        </div>
    </div>
    </div>
  )
}

export default GuestLecturesbyIndustryExperts