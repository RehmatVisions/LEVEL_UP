 import React from 'react';

const SkillCard = (props) => {
  return (
    <div
      data-aos="zoom-out-up"
      data-aos-duration="4000"
      tabIndex={0} // Keyboard focus ke liye zaroori
      className="bg-white text-gray-800 font-medium w-52 h-60 p-6 rounded-2xl 
                 shadow-[4px_4px_12px_#d1d5db,-4px_-4px_12px_#f3f4f6] 
                 flex flex-col items-center justify-center
                 transition-all duration-300 ease-in-out 
                 hover:shadow-[inset_4px_4px_12px_#d1d5db,inset_-4px_-4px_12px_#f3f4f6] 
                 focus:shadow-[inset_4px_4px_12px_#d1d5db,inset_-4px_-4px_12px_#f3f4f6] 
                 hover:text-red-500 focus:text-red-500 
                 hover:scale-105 focus:scale-105 outline-none"
    >
      <img className="h-30 w-30 rounded-full mb-4" src={props.img} alt="Skill" />

      <h2 className="text-xl sm:text-2xl font-semibold text-center">
        {props.skill}
      </h2>
    </div>
  );
};

export default SkillCard;
