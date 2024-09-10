"use client";
import React from 'react'
import { HeroName } from '../HeroName'
import HeroPic from '../HeroPic'
import { BackgroundBeams } from '../ui/background-beams'
import ResumeBTN from '../ResumeBTN';

const HeroSection = () => {
  return (
    <div className="h-screen w-screen bg-neutral-950 relative flex flex-col antialiased max-md:flex-col max-md:-ml-2" id="hero">
      <BackgroundBeams className="h-full w-full " />
      <div className="flex-grow flex relative items-center mb-8 h-screen">
        <div className="flex flex-col w-full max-w-screen-lg">

          <div className="flex-1 flex justify-start
                              lg:-mt-20
                              sm:-mt-20">
            <HeroName />
          </div>

          <ResumeBTN />
          
          <div className="flex-1 flex justify-center max-md:justify-center max-md:-ml-2">
            <HeroPic />
          </div>

        </div>
      </div>
    </div>

  )
}

export default HeroSection