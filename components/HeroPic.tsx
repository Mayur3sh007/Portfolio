"use client";

import Image from "next/image";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";
import { BackgroundGradient } from "./ui/background-gradient";

const HeroPic = () => {
  return (
    <div className="absolute top-1/2 right-4 transform -translate-y-1/2 mr-[18%] flex flex-col items-center">
      <BackgroundGradient className="p-2 rounded-full" animate={true}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2.5 }} // Adjust delay as needed
          className="relative rounded-full overflow-hidden h-[350px] w-[350px]"
        >
          <Image
            src="/Profile.jpg"
            width={350}
            height={350}
            alt="The Man the Myth The Legend"
            className="rounded-full" // Ensures the image itself is rounded
          />
        </motion.div>
      </BackgroundGradient>

      {/* TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 4 }} // Adjust delay as needed (image delay + 1.5s for the text to appear later)
        className="mt-4 w-[400px] flex justify-center "
      >
        <FlipWords words={["Software Engineer", "Web Developer", "ML Enthusiast"]} className="text-4xl" />
      </motion.div>
    </div>
  );
};

export default HeroPic;
