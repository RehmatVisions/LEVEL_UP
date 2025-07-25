import React, { useEffect } from 'react';
import { FiLinkedin, FiFacebook } from 'react-icons/fi';
import { TbBrandReactNative } from 'react-icons/tb';
import { SiUpwork } from 'react-icons/si';
import { RiTailwindCssLine } from 'react-icons/ri';
import { PiFigmaLogoBold } from 'react-icons/pi';
import hero from '../images/rehmat.jpeg';
import logo from '../images/wp2712180.webp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const HeroSec = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const cardStyle =
    'px-4 py-3 rounded-lg bg-white text-gray-800 flex items-center justify-center text-lg font-semibold transition-all duration-300 hover:-translate-y-1 focus:-translate-y-1 shadow-[4px_4px_10px_#6B21A8,-2px_-2px_5px_#9333EA] hover:shadow-[0px_0px_15px_#9333EA] focus:shadow-[0px_0px_15px_#9333EA] hover:brightness-110 focus:brightness-110 hover:scale-105 focus:scale-105';

  return (
    <>
    <div
      data-aos="flip-left"
      data-aos-duration="700"
      className="min-h-screen bg-white text-gray-800 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12"
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="flex items-center gap-3 mb-4">
          {/* <img className="h-12 w-12 object-cover" src={logo} alt="Logo" /> */}
          <h1
            data-aos="fade-down"
            data-aos-duration="1000"
            className="font-bold text-2xl sm:text-3xl animate-pulse text-red-500"
          >
            ____REHMET ✕<span className="text-[#9333EA]">Studio.</span>
          </h1>
        </div>

        <h4
          data-aos="fade-down"
          data-aos-duration="2000"
          className="  text-lg sm:text-xl md:text-2xl tracking-wide mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text"
        >
          WELCOME TO MY WORLD
        </h4>

        <h1
          data-aos="fade-left"
          data-aos-duration="3000"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
        >
          <span className="text-gray-900">Hi I’m </span>
          <span className="bg-gradient-to-r from-purple-700 to-pink-500 text-transparent bg-clip-text hover:brightness-125 focus:brightness-125 transition-all">
            REHMAT.ALI
          </span>
        </h1>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium tracking-wide mb-6 bg-gradient-to-r from-fuchsia-700 to-indigo-500 text-transparent bg-clip-text">
          a Professional Coder...
        </h3>

        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-md">
          Frontend developer crafting fast, modern UIs with React, Tailwind & JavaScript — focused on
          design, UX, and performance.
        </p>

        {/* Cards Section */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div>
            <h3 className="text-sm sm:text-md font-medium tracking-wide text-[#6B21A8] mb-3">
              Find with me
            </h3>
            <div className="flex items-center gap-4">
              <div className={cardStyle} tabIndex={0}>
                {/* <FiLinkedin className="text-[#0077B5] text-3xl sm:text-4xl" /> */}
                               <a href="https://www.linkedin.com/in/rehmat-ali-01a443350  "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <FiLinkedin  className="text-[#2d83f3] text-3xl sm:text-4xl" />  
                   </a>
              </div>
              <div className={cardStyle} tabIndex={0}>
                  <a href="https://www.facebook.com/share/1QqhR8Wsis/ "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> < FiFacebook className="text-[#3f92ff] text-3xl sm:text-4xl" /> </a>
              </div>
              <div className={cardStyle} tabIndex={0}>
                   <a href=" https://www.upwork.com/freelancers/~0177583e5d01fec6f0?mp_source=share  "
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <SiUpwork className="text-[#6FDA44] text-3xl sm:text-4xl" /> </a>
                {/*  */}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm sm:text-md font-medium tracking-wide text-[#6B21A8] mb-3">
              Best skill on
            </h3>
            <div className="flex items-center gap-4">
              <div className={cardStyle} tabIndex={0}>
                {/*  */}
                 <a href="https://vite.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <TbBrandReactNative className="text-[#61DAFB] text-3xl sm:text-4xl" /></a>
                
              </div>
              <div className={cardStyle} tabIndex={0}>
                 <a href="https://tailwindcss.com/docs/installation/using-vite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <RiTailwindCssLine className="text-[#38BDF8] text-3xl sm:text-4xl" /> </a>
                {/* <RiTailwindCssLine className="text-[#38BDF8] text-3xl sm:text-4xl" /> */}
              </div>
              <div className={cardStyle} tabIndex={0}>
                {/* <a className='' href=""> <PiFigmaLogoBold className="text-[#F24E1E] text-3xl sm:text-4xl" /></a> */}
                <a href="https://www.figma.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline text-purple-600 hover:text-pink-500 focus:text-pink-500 transition duration-300"> <PiFigmaLogoBold className="text-[#F24E1E] text-3xl sm:text-4xl" /> </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2  flex justify-center mt-8 md:mt-0">
        <div
          className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-white p-2 transition-all duration-300 hover:brightness-110 focus:brightness-110 hover:scale-[1.03] focus:scale-[1.03]"
          tabIndex={0}  // ✅ Added for keyboard focus
        >
          <img
            data-aos="zoom-in-up"
            data-aos-duration="7000"
            className="w-full  h-full object-cover rounded-full hover:shadow-[#9A48D0]/70 focus:shadow-[#9A48D0]/70  border-4 border-[#9A48D0] shadow-[4px_4px_12px_#d1d5db,-4px_-4px_12px_#f3f4f6]"
            src={hero}
            alt="Rehmat Ali"
          />
        </div>
      </div>

    </div>
    <Link
      to="/chatbot"
      className="group fixed bottom-4 right-3 z-50 flex items-center justify-start w-[45px] h-[45px] bg-gradient-to-r from-red-400 to-pink-500 rounded-full shadow-md overflow-hidden  transition-all duration-300 hover:w-[125px] hover:rounded-[40px] active:translate-x-[2px] active:translate-y-[2px]"
    >
      <div className="flex items-center justify-center w-full transition-all duration-300 group-hover:w-[30%] group-hover:pl-5">
        <svg viewBox="0 0 512 512" className="w-[17px]">
          <path
            fill="white"
            d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
          />
        </svg>
      </div>
      <div className="absolute  right-0 w-0 opacity-0 text-white  font-semibold transition-all duration-300 group-hover:w-[70%] group-hover:opacity-100 group-hover:pr-2">
        Chatbot
      </div>
    </Link>
    </>
  );
};

export default HeroSec;
