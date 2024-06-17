import React from 'react';

const Title = ({ word1,word2,className }: { word1: string, word2: string, className?: string }) => {

  return (
    <div className={`relative text-center ${className}`}
    style={{ fontFamily: "'Orbitron', sans-serif" }}
    >
      <h1 className="text-6xl font-bold relative z-10 max-md:text-4xl">
        <span className=" text-gray-200  tracking-normal">{word1} </span>
        <span className="text-custom-purple tracking-normal">{word2}</span>
      </h1>
    </div>
  );
}

export default Title;
