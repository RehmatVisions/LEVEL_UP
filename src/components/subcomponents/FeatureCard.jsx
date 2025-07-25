 import React from 'react';

const FeatureCard = (props) => {
  return (
    <div data-aos="fade-up-left" className='w-full sm:w-[300px] flex justify-center py-3'>
      <div
        tabIndex={0} // for mobile focus
        className="card h-76 w-full rounded-lg bg-white shadow-[4px_4px_12px_#9333EA,-4px_-4px_12px_#E879F9] text-gray-800 transition-all duration-300 hover:brightness-110 focus:brightness-110 hover:-translate-y-2 focus:-translate-y-2 hover:scale-[1.02] focus:scale-[1.02] hover:shadow-[0_0_15px_#9333EA] focus:shadow-[0_0_15px_#9333EA] outline-none"
      >
        <div className='py-16'>
          <h1 className='flex items-center justify-center text-4xl text-[#14b8a6]'>
            {props.icon}
          </h1>

          <h1 className='text-center text-2xl font-bold py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text'>
            {props.heading}
          </h1>

          <p className='text-gray-600 text-center px-6'>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
