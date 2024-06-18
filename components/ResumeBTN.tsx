"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function YourComponent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timer);
  }, []); // Empty dependency array ensures useEffect runs only once

  const openPdf = () => {
    window.open('/Resume.pdf', '_blank');
  };

  return (
    <div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className='ml-60 -mb-5 mt-5 max-md:ml-[28%]'>
            <button className="p-[3px] relative" onClick={openPdf}>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Resume
              </div>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default YourComponent;
