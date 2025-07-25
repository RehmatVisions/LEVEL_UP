 import React from 'react';
import SkillCard from './subcomponents/SkillCard';

import htmlImg from '../images/html.jpeg';
import cssImg from '../images/css.png';
import jsImg from '../images/JS.jpeg';
import tailwindImg from '../images/tailwind.png';
import reactImg from '../images/react.png';
import nodeImg from '../images/nodejs.png';
import expressImg from '../images/express.png';
import mongoImg from '../images/mongo.png';
import githubImg from '../images/download.png';

const ResumeSkills = () => {
  return (
    <>
      <div data-aos="flip-left"  data-aos-duration="700" className="py-16 px-4">
        <div className="flex flex-wrap justify-center gap-9">
          <SkillCard img={htmlImg} skill="HTML" />
          <SkillCard img={cssImg} skill="CSS" />
          <SkillCard img={jsImg} skill="JavaScript" />
          <SkillCard img={tailwindImg} skill="Tailwind CSS" />
          <SkillCard img={reactImg} skill="ReactJS" />
          <SkillCard img={nodeImg} skill="Node.js" />
          <SkillCard img={expressImg} skill="Express.js" />
          <SkillCard img={mongoImg} skill="MongoDB" />
          <SkillCard img={githubImg} skill="GitHub" />
        </div>
      </div>
    </>
  );
};

export default ResumeSkills;
