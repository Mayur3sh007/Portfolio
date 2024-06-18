import React from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Importing LinkedIn, GitHub, and Instagram icons from react-icons

const Headerbox = () => {
  return (
    <header className="w-full text-purple-500 dark:text-purple-300 p-4 shadow-lg z-10000">
      <div className="max-w-7xl mx-auto flex justify-end items-center
        max-md:justify-center max-md:items-center max-md:mt-5">
        <nav className="flex space-x-8 cursor-pointer">
          <a
            href="https://www.linkedin.com/in/mayuresh-chavan-04a3b5259/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-purple-500 cursor-pointer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/Mayur3sh007"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-purple-500 cursor-pointer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.instagram.com/mayur.esh1000/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-purple-500 cursor-pointer"
          >
            <FaInstagram size={30} />
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Headerbox;
