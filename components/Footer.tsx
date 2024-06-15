import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-gray-200 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-indigo-700 mb-2">Your Company Name</h2>
          <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-gray-200 hover:text-indigo-700 transition-colors duration-300">
            About
          </a>
          <a href="#" className="text-gray-200 hover:text-indigo-700 transition-colors duration-300">
            Services
          </a>
          <a href="#" className="text-gray-200 hover:text-indigo-700 transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
