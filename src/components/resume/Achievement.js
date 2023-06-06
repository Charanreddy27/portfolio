import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-8 font-titleFont flex gap-20"
    >
      
        
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Best Of Front-End Interns"
            subTitle="Credited by Techsnap"
            result="Chennai"
            des="Certified as one of the best front-end interns "
          />
          
        </div>
      
    </motion.div>
  );
};

export default Achievement;
