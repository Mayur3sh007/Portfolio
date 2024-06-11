import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'

export const HeroName = () => {
  return (
    <div className="mt-[12%] flex flex-col justify-center items-start">
          <div className="max-w-2xl p-4 text-white font-bold text-size-xl ml-20">
            <TextGenerateEffect
              firstName="Mayuresh"
              lastName="Chavan"
              wordClassName="text-purple-500 dark:text-purple-300 text-8xl"
              containerClassName="flex flex-col items-start"
            />
          </div>
        </div>
  )
}