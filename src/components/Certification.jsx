 import React from 'react';
import ResCard from './subcomponents/ResCard';
import zeff from '../images/zeff.jpeg';
import navttac from '../images/nsis.png';

const Certification = () => {
  return (
    <div  data-aos="flip-left"  data-aos-duration="700"  className="py-10 px-4">
      {/* Responsive Card Wrapper */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center items-center">
        <ResCard 
          img={zeff}
          heading="(Zaff Institute – Arfah Kareem Technologies)" 
          date="2025"  
          ins="(Certificate in Progress – Completion Expected Soon)" 
          desc="A skill-based MERN Stack program focused on practical web development using MongoDB, Express, React, and Node.js. It includes hands-on projects, frontend/backend integration, and professional workflow training." 
        />

        <ResCard 
          img={navttac}
          heading="(NAVTTC Pakistan)" 
          date="2025"  
          ins="(Certificate in Progress – Completion Expected Soon)" 
          desc="A government-recognized training program focused on MERN stack technologies, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. It includes hands-on projects, frontend/backend integration, and professional workflow training."
        />
      </div>
    </div>
  );
};

export default Certification;
