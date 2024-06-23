import React from 'react';

const MOUCard = (props) => {
  return (
    <div className='w-1/3 p-4 h-[300px]'>
      <div className="w-[300px] rounded shadow-lg">
        <img className="w-full object-contain h-40 rounded-t" src={props.mou.url} alt="Organization Image" />
        <div className="px-6 py-4 bg-slate-400 text-white">
          <div className="font-bold text-xl mb-2">{props.mou.organization}</div>
          <p className="text-gray-700 truncate">{props.mou.address}</p>
        </div>
      </div>
    </div>
  );
};

export default MOUCard;
