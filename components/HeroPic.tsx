"use client";

import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

const HeroPic = () => {
  return (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col items-center 
       md:top-1/2 md:-translate-y-1/2 md:mr-[14%]
       max-sm:mx-auto max-sm:-translate-y-[100%] max-sm:translate-x-[5%]">
      
      {/* IMAGE */} 
      <BackgroundGradient className="p-2 rounded-full" animate={true}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="relative rounded-full overflow-hidden 
            md:h-[350px] md:w-[350px]
            max-sm:h-[250px] max-sm:w-[250px]"
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
        className="mt-4 w-full flex justify-center px-4 md:w-[400px] max-sm:w-[400px]"
      >
        <FlipWords words={["Software Engineer", "Web Developer", "ML Enthusiast"]} className="text-2xl md:text-4xl" />
      </motion.div>
    </div>
  );
};

export default HeroPic;
