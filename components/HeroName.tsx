import React from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';

export const HeroName = () => {
  return (
    <div className="mt-[12%] flex flex-col justify-center items-start
      max-md:mt-[15%] max-md:items-center max-md:justify-center">
      <div className="max-w-2xl p-4 text-white font-bold ml-20
        max-md:ml-[25%] max-md:mt-[50%]
        max-sm:text-6xl max-sm:items-center max-sm:mr-[8%]">
        <TextGenerateEffect
          firstName="Mayuresh"
          lastName="Chavan"
          wordClassName="tracking-normal text-8xl max-sm:text-6xl"
          firstNameClassName="text-custom-purple"
          lastNameClassName="text-custom-purple ml-[10%]"
          containerClassName="flex flex-col items-start"
        />
      </div>
    </div>
  );
};
