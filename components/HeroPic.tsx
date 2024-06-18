"use client";

import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

const HeroPic = () => {
  return (
    <div className="absolute transform flex flex-col mr-[16%] translate-x-[160%] -translate-y-[90%] max-w-full
        max-md:translate-x-[8%] max-md:-translate-y-[180%]
       ">
      
      {/* IMAGE */} 
      <BackgroundGradient className="p-2 rounded-full" animate={true}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="relative rounded-full overflow-hidden 
            h-[350px] w-[350px]
            max-md:h-[250px] max-md:w-[250px]"
        >
          <Image
            src="/Profile.jpg"
            width={350}
            height={350}
            alt="The Man the Myth The Legend"
            className="rounded-full"
          />
        </motion.div>
      </BackgroundGradient>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4 }}
        className="mt-4 flex justify-center"
      >
        <FlipWords words={["Software Engineer", "Web Developer", "ML Enthusiast"]} className="text-3xl max-md:text-2xl max-md:tracking-tight" />
      </motion.div>
    </div>
  );
};

export default HeroPic;
