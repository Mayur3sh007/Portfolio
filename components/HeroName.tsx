import React from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';

export const HeroName = () => {
  return (
    <div className="mt-[12%] flex flex-col justify-center items-start">
      <div className="max-w-2xl p-4 text-white font-bold text-size-xl ml-20">
        <TextGenerateEffect
          firstName="Mayuresh"
          lastName="Chavan"
          wordClassName="text-8xl tracking-normal"
          firstNameClassName="text-custom-purple"
          lastNameClassName="text-custom-purple"
          containerClassName="flex flex-col items-start"
        />
      </div>
    </div>
  );
};
