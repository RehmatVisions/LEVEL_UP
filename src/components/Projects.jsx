 import React from 'react';
import eduisty from '../images/eduisty.jpeg';
import ProjectCard from './subcomponents/ProjectCard';
import streamlabs from '../images/streamlabs.jpeg';
import Gotto from '../images/gotto.jpeg';
import weather from '../images/weather.png';
import koad from '../images/koad.png';
import portfolio from '../images/Screenshot 2025-07-14 230310.png';
import Heading from './subcomponents/Heading';

const Projects = () => {
  return (
    <>
      <div data-aos="flip-left"  data-aos-duration="700" className='my-10 bg-white text-gray-900'>
        <div className='py-8 mb-12'>
          <Heading sub="Visit my project and keep your feedback" title="My.Projects" />
        </div>

        {/* First row */}
        <div className='flex flex-wrap justify-center gap-8 px-4'>
          <a target="_blank" rel="noopener noreferrer" href="https://comfy-cendol-b1f477.netlify.app/">
            <ProjectCard
              img={eduisty}
              title="Eduisty React"
              desc="Built a responsive frontend clone of the Eduisty website using React, focusing on clean UI and modern design."
              no="57K"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://profound-bavarois-7ff36a.netlify.app/">
            <ProjectCard
              img={Gotto}
              title="Gotto Website"
              desc="A fully responsive business platform built in React. Styled with passion. Delivered as Gotto."
              no="73M"
            />
          </a>
          <a href="https://sprightly-kashata-a0ade8.netlify.app/" target="_blank" rel="noopener noreferrer">
            <ProjectCard
              img={streamlabs}
              title="Streamlabs Website Clone"
              desc="A fully responsive Streamlabs-inspired ReactJS project with modern UI, smooth animations, and dynamic component structure."
              no="13B"
            />
          </a>
        </div>

        {/* Second row */}
        <div className='flex flex-wrap justify-center gap-8 px-4 mt-12'>
          <a target="_blank" rel="noopener noreferrer" href="https://rehmatvisions.github.io/weather_app/">
            <ProjectCard
              img={weather}
              title="Weather App"
              desc="A sleek and responsive weather app built with React and Tailwind CSS that fetches real-time weather data using WeatherAPI."
              no="879K"
            />
          </a>
          <a target="_blank" rel="noopener noreferrer" href="https://superlative-quokka-75b99c.netlify.app/">
            <ProjectCard
              img={koad}
              title="Koad Web"
              desc="A responsive React.js fast food website with modern UI, fast performance, and smooth UX — designed for real-world food ordering apps...View"
              no=""
            />
          </a>
          <a href="https://rehmatvisions.github.io/codealpha_tasks-portfolio/" target="_blank" rel="noopener noreferrer">
            <ProjectCard
              img={portfolio}
              title="REACT_PORTFOLIO"
              desc="Crafted with React.js & Tailwind CSS, this portfolio highlights my frontend skills, live projects, and passion for clean design and performance."
              no="213M"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default Projects;
