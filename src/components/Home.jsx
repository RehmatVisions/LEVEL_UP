import React from 'react'
import HeroSec from './HeroSec'
import Feautures from './Feautures'
import Projects from './Projects'
import Resume from './Resume'
import Testimonials from './Testimonials'
import Contacts from './Contacts'
import Footer from './Footer'
import Chatbot from './Chatbot'
 

const Home = () => {
  return (
        <div>   
          <HeroSec />
           <Feautures /> 
       
             <Projects /> 
                <Resume /> 
                 {/* <ResumeSkills />  */}
              <Testimonials /> 
               
                 <Contacts /> 
                         <Chatbot/>
                 <Footer/>



                 
         
                 
           
               
    </div>
  )
}

export default Home
