import React from 'react';

const Title = ({ word1,word2 }: { word1: string, word2: string }) => {
  const glowWidth = `${word1.length + 25}ch`; // Adjust the glow width based on the length of the word1

  return (
    <div className="relative text-center" style={{ fontFamily: "'Orbitron', sans-serif" }}>
      <h1 className="text-6xl font-bold relative z-10">
        <span className="text-custom-purple  tracking-normal">{word1} </span>
        <span className="text-gray-200  tracking-normal">{word2}</span>
      </h1>
    </div>
  );
}

export default Title;
