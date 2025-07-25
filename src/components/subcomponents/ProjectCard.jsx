 import React from 'react';
import { FaEye } from 'react-icons/fa';

const ProjectCard = (props) => {
  return (
    <div  data-aos="fade-up" data-aos-duration="4000"
    className="cursor-pointer group w-80 h-96 rounded-xl 
      bg-white shadow-[4px_4px_12px_#d1d5db,-4px_-4px_12px_#f3f4f6] text-gray-800 
      transition-all duration-300 
      hover:brightness-110 active:brightness-110 
      hover:-translate-y-2 active:-translate-y-2 
      hover:scale-[1.03] active:scale-[1.03] 
      overflow-hidden">

      <div  className="overflow-hidden rounded-t-xl">
        <img
          className="h-48 w-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 group-active:scale-110"
          src={props.img}
          alt="Project Screenshot"
        />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-bold text-[#ff014f]">{props.title}</h4>
          <h5 className="text-pink-500 text-md font-medium">
            {props.no} <span className="animate-pulse">&#9829;</span>
          </h5>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          {props.desc}
        </p>

        <button className="flex items-center justify-around text-gray-700 font-medium">
          LIVE PREVIEW <FaEye className="text-gray-700 text-xl ml-4" />
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
