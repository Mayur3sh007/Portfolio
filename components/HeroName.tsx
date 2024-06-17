import React from 'react';
import { TextGenerateEffect } from './ui/text-generate-effect';

export const HeroName = () => {
  return (
    <div className="flex flex-col justify-center items-start mt-[12%] ml-[6%]
      max-md:mt-[50%] max-md:ml-[11%]">
        <TextGenerateEffect
          firstName="Mayuresh"
          lastName="Chavan"
          wordClassName="tracking-normal text-8xl max-sm:text-6xl"
          firstNameClassName="text-custom-purple"
          lastNameClassName="text-custom-purple ml-[10%]"
          containerClassName="flex flex-col items-start"
        />
    </div>
  );
};
