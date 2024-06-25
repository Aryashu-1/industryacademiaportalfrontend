import React from 'react';
import './GuestLectureCard.css' 
const ProfileCard = ({ image1, image2, name, expert,bio }) => {
  return (
    <div className="profile">
      <div className="profile-image">
        <img src={image1} alt={name} />
        <img className='im2' src={image2} alt={name} />
      </div>
      <div className="profile-name">
        <h2 className='name'>{name}</h2>
        <h2 className='expert'>{expert}</h2>
        <div className="profile-bio">
          {bio}
        </div>
      </div>
    </div>
  );
};

const GuestLectureCard = (props) => {
  return (
    <divc className='w-full md:w-1/2 lg:w-1/3 p-4'>

      <div className='container '>
            <div className="profile-wrapper">
              <ProfileCard
                image1={props.lecture.images[0]}
                image2={props.lecture.images[0]}
                name={props.lecture.topic}
                expert={props.lecture.expert}
                bio={props.lecture.description}
              />
              
            </div>
          </div>
    </divc>

  );
};

export default GuestLectureCard;