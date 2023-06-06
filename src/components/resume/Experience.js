import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021-2023</p>
          <h2 className="text-4xl font-bold">Intern Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
        <ResumeCard
            title="Project Intern"
            subTitle="HCL - (Jan 2023 - Apr 2023)"
            result="Chennai"
            des="Developed a React Application Under the HCL company which uses Google Authentiaction for storing of data"
          />
          <ResumeCard
            title="Front End Developer"
            subTitle="Techsnap - (Aug 2021-Jan 2022)"
            result="Chennai"
            des="Worked as a Front End Developer Intern at Techsnap .Built the Front End part of the website"
          />
          <ResumeCard
            title="React Developer"
            subTitle="Lets Grow More - (Jun 2021 - Aug 2021)"
            result="Virtual"
            des="A Virtual Internship program where we are given level wise tasks to be completed"
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
