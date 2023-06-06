import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
          
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Recipe Generaor"

          des=" Our recipe generator is an innovative tool designed
           to inspire your culinary creativity and simplify the meal planning process."
           link="https://github.com/Charanreddy27/MERN-RECIPE.git"
          src={projectOne}
        />
        <ProjectsCard
          title="Text To Speech"
          des=" Our text-to-speech application is a cutting-edge tool 
          that transforms written text into high-quality, natural-sounding audio"
          link="https://github.com/Charanreddy27/TextToSpeech.git"
          src={projectTwo}
        />
        <ProjectsCard
          title="Real Estate"
          des=" Our real estate web application is a comprehensive 
          platform designed to streamline the process of buying, selling, and renting properties."
          link="https://github.com/Charanreddy27/Real-estate-web-application-hcl.git"
          src={projectThree}
        />
        <ProjectsCard
          title="Expense Detector"
          des=" Expense Detector is a powerful and intuitive  
          application designed to help individuals effortlessly track and manage their expenses."
          link="https://github.com/Charanreddy27/expense_detector.git"
          src={projectFour}
        />
        <ProjectsCard
          title="Notepad Application"
          des=" Notepad is a simple and lightweight application that 
          serves as a digital workspace for capturing, organizing, and managing text-based information"
          src={projectFive}
        />
        <ProjectsCard
          title="Portfolio website"
          des=" Designed and developed a professional portfolio website to 
          showcase my skills, projects, and achievements as a web developer"
          src={projectSix}
        />
      </div>
    </section>
  );
}

export default Projects