import React from 'react';
import './GuestLectureCard.css'; // Import any additional custom CSS if needed


const Profile = ({ lecture }) => {
  return (
    <div className="relative  w-80 h-[450px] rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform duration-500 hover:translate-y-10">
      <div className="absolute inset-0 transition-transform duration-700 transform hover:-translate-y-full">
        {lecture.images.map((image, index) => (
          <img key={index} src={image} alt="Profile" className="w-full h-full object-cover" />
        ))}
      </div>
      <div className="absolute bottom-[0] left-0 p-4 w-full h-32 text-center text-white transition-opacity duration-500 hover:bg-white hover:text-black">
        <h2 className="mb-2 text-lg font-bold">{lecture.name}</h2>
        <p className="text-sm opacity-90">{lecture.description}</p>
      </div>
    </div>
  );
};

const GuestLectureCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-screen space-y-12 pt-52">
      <div className="flex space-x-12">
        
          <Profile  lecture={props.lecture} />

      </div>
    </div>
  );
};

export default GuestLectureCard;
